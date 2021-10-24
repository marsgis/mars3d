/**
 * UI v1.1.0
 * Copyright 2017-2018 Muyao
 * Licensed under the Muyao License 1.0 
 */
(function (window, document, $) {
    'use strict';

    $.site.contentTabs = {
        $instance: $('#admui-navTabs .site-menu'),
        $content: $('#admui-pageContent'),
        storageKey: 'admui.base.contentTabs',
        tabId: 0,
        relative: 0,
        tabTimeout: 30,
        init: function () {
            this.bind();
            this._defaultTab();
        },
        bind: function () {
            var self = this,
                $navContabs = $("#admui-siteConTabs"),
                $navContent = $navContabs.find("ul.con-tabs");

            this.tabWidth = $navContent.find("li").width();
            this.view = $navContabs.find(".contabs-scroll").width();

            this.ifameTabs();

            // 标签页的左右移动  &&  关闭单个标签页  && 切换标签页
            $navContabs
                .on('click.site.contabs', 'button.pull-left', function () {
                    self.tabPosition($navContent, self.tabWidth, "right");
                })
                .on('click.site.contabs', '.pull-right>.btn-icon', function () {
                    var content = $navContent.width();

                    self.tabPosition($navContent, self.tabWidth, "left", self.view, content);
                })
                .on('click.site.contabs', 'ul.con-tabs>li', function (e) {
                    var $target = $(e.target), $item = $(this);

                    if ($target.is("i.wb-close-mini")) { // 关闭
                        self.closeTab($item);
                    } else if (!$item.is(".active")) { // 切换
                        $item.siblings("li").removeClass("active");
                        $item.addClass("active");

                        self._checkoutTab($item.find('a'));
                        self.enable($item);
                    }
                    e.preventDefault();
                });

            // 刷新当前页 && 关闭其他 && 所有标签页
            $navContabs
                .on('click.site.contabs', '.pull-right li.reload-page', function () {
                    var $navLi = $navContabs.find('ul.con-tabs>li.active>a'),
                        tabUrl = $navLi.attr('href');

                    // 刷新当前页
                    self.$content.children('[src="' + tabUrl + '"]').attr('src', tabUrl);

                })
                .on('click.site.contabs', '.pull-right li.close-other', function () {
                    var $navLis = $navContabs.find('ul.con-tabs>li');

                    $navLis.each(function () {
                        var $that = $(this), tabId;

                        if (!$that.is('.active') && $that.index() !== 0) {
                            tabId = $that.find('a').attr('target');
                            $that.remove();
                            self.$content.children('[name="' + tabId + '"]').remove();
                            self._updateSetting(tabId);
                        }
                    });

                    $navContent.animate({left: 0}, 100);

                    self.btnView('hide');
                })
                .on('click.site.contabs', '.pull-right li.close-all', function () {
                    var $tabs = $navContabs.find('ul.con-tabs>li'),
                        $checked = $tabs.eq(0);

                    $tabs.each(function () {
                        var $that = $(this), tabId;

                        if ($that.index() !== 0) {
                            tabId = $that.find('a').attr('target');
                            $that.remove();
                            self._updateSetting(tabId);
                        }
                    });

                    $navContent.animate({left: 0}, 100);

                    self.btnView('hide');

                    $checked.addClass('active');
                    self.enable($tabs.eq(0));
                    self._checkoutTab($checked.find('a'));

                    // 关闭所有
                    self.$content.children(':not(:first)').remove();

                    self.tabSize();
                });

            // 登出清楚标签页缓存
            $(document).on('click', '#admui-signOut', function () {
                $.sessionStorage.remove(self.storageKey);
            });

            // 浏览器窗口大小改变,标签页的对应状态
            $(window).on('resize', this.resize);
        },
        ifameTabs: function (el) { // 为当前doc对象中的a[data-iframe]标签绑定创建标签页功能
            var self = this,
                doc = el === undefined ? document : el;

            // 新建标签页
            $(doc).on('click', 'a[data-iframe]', function (e) {
                var $item = $(this), urlResult,
                    url = $item.attr('href'),
                    title = $.trim($item.text()) || $.trim($item.attr('title')),
                    iframeContent = $item.data('iframe') || '#admui-pageContent',
                    tabResult = $item.is('[target="_blank"]');
                
                urlResult = new RegExp(/^([a-zA-z]+:|#|javascript|www\.)/); // 不执行新建标签页操作的地址

                if (urlResult.test(url)) {
                    return;
                }

                if (tabResult && iframeContent === '#admui-pageContent') {
                    window.history.replaceState(null, '', '#!' + url);
                    self.tabType = true;
                    self.buildTab({name: title, url: url});

                    if (!self.$instance.find($item).length) {
                        self.enable($item.parent());
                    }
                } else if (!tabResult) {
                    $(iframeContent).find('iframe.active').attr('src', url);
                }

                e.preventDefault();
            });
        },
        _checkoutTab: function (tab) { // 标签页的切换
            var $content = this.$content,
                tabId = tab.attr('target'),
                tabTitle = $.trim(tab.attr('title')),
                tabUrl = tab.attr('href'),
                $checkedTab = $content.children('iframe[name="' + tabId + '"]');

            $('title').text(tabTitle);

            if (!this.tabType) {
                window.history.replaceState(null, '', '#!' + tabUrl);
            }

            if (!$checkedTab.attr('src')) {
                $checkedTab.attr('src', tabUrl);
            }

            $content.children('.active').removeClass('active');
            $checkedTab.addClass('active');

            $.site.iframeEvents($checkedTab);
            this._updateSetting('checked', tabId);
            this.tabType = false;
        },
        _defaultTab: function () { // 存储默认标签的信息
            var $defaultTab = $('#admui-siteConTabs').find('li:first > a'), settings;

            settings = this.settings = $.sessionStorage.get(this.storageKey);

            if (settings === null) {
                settings = $.extend(true, {}, {
                    'iframe-0': {
                        'url': $defaultTab.attr('href'),
                        'name': $defaultTab.text()
                    },
                    'checked': $defaultTab.attr('target'),
                    'tabId': this.tabId
                });

                this._updateSetting(settings);
            } else {
                this.tabId = settings.tabId;
            }
        },
        _updateSetting: function (item, value) {
            var settings = $.sessionStorage.get(this.storageKey);
            settings = settings ? settings : {};

            if (typeof item === 'object') {
                $.extend(true, settings, item);
            } else if (!value) {
                delete settings[item];
            } else {
                settings[item] = value;
            }

            $.sessionStorage.set(this.storageKey, settings, this.tabTimeout);
        },
        resize: function () {
            var self = $.site.contentTabs,
                $navContabs = $(".site-contabs"),
                $navContent = $navContabs.find("ul.con-tabs");

            self._throttle(function () {
                self.view = $navContabs.find(".contabs-scroll").width();
                self.tabEvent($navContent, 'media');
            }, 200)();
        },
        enable: function ($el) { // 左侧菜单定位
            var $instance = this.$instance,
                href = $.trim($el.find('a').attr('href')),
                _result = href.indexOf('#'),
                tabUrl = _result > 0 ? href.substring(0, _result) : href,
                $current = $instance.find('a[href="' + tabUrl + '"]'),
                $currentParents, $currentLi, $currentHasSub, $instanceLi, checkedId, currentId;

            if ($current.length === 0) {
                $.site.menu.refresh();
                return;
            }

            checkedId = $.trim($instance.closest('div.tab-pane.active').attr('id'));
            currentId = $.trim($current.closest('div.tab-pane').attr('id'));

            if (checkedId !== currentId) {
                $('#admui-navbar a[href="#' + currentId + '"]').tab('show');
            }

            $currentLi = $current.closest('li').siblings('li.open');
            $currentParents = $current.parents('li.has-sub');
            $currentHasSub = $current.closest('li.has-sub').siblings('li.open');
            $instanceLi = $instance.find('li.open');

            $instance.find('li.active').trigger('deactive.site.menu');
            $current.closest('li').trigger('active.site.menu');

            if ($currentLi.length) {
                $currentLi.trigger('close.site.menu');
            }

            if (!$current.closest('li.has-sub').hasClass('open')) {
                if ($currentHasSub.length) {
                    $currentHasSub.trigger('close.site.menu');
                }

                if ($instanceLi.length) {
                    $instanceLi.not($currentParents).trigger('close.site.menu');
                }

                $currentParents.trigger('open.site.menu');
            }
        },
        buildTab: function (opt) { // 新建标签页
            var $tabNav = $(".con-tabs"), tabName, obj = {}, tabId,
                _url = opt.url,
                _result = _url.indexOf('#'),
                tabUrl = _result > 0 ? _url.substring(0, _result) : _url;

            if (this._checkTabs($tabNav, tabUrl)) { // 标签查重
                return;
            }

            tabId = ++this.tabId;
            tabName = 'iframe-' + tabId;

            // 修改当前选中的标签页
            $tabNav.find("li.active").removeClass("active");
            $tabNav.append('<li  class="active"><a href="' + tabUrl + '" target="' + tabName +
                '" title="' + opt.name + '' + '" rel="contents"><span>' + opt.name + '</span><i class="icon' +
                ' wb-close-mini">' + '</i></a></li>');

            obj[tabName] = {
                'url': tabUrl,
                'name': opt.name
            };

            $.extend(obj, {
                'checked': tabName,
                'tabId': tabId
            });

            this._updateSetting(obj);

            // 修改页面标题
            opt.name = opt.name === '' ? '无标题' : opt.name;
            $('title').text($.trim(opt.name));

            this.buildIframe(_url);
            this.tabSize();
            this.tabEvent($tabNav, 'media');
            this.tabType = false;
        },
        _checkTabs: function (doc, url) { // 标签查重
            var x, prevAll, nextAll, contentW,
                _view = this.view, _tab = this.tabWidth,
                $currenttab = doc.find("a[href='" + url + "']").closest('li');

            if ($currenttab.hasClass('active')) { // 标签存在&已选中
                return true;
            }

            if ($currenttab.size() <= 0) { // 标签不存在
                return false;
            }

            // 标签存在未选中
            doc.find("li.active").removeClass("active");
            $currenttab.addClass("active");

            // 切换标签页
            this._checkoutTab($currenttab.find('a'));

            // 标签位移到可视界面显示
            x = doc.position().left;
            contentW = doc.width();
            prevAll = $currenttab.prevAll('li').size() * _tab;
            nextAll = $currenttab.nextAll('li').size() * _tab;

            if (-prevAll < x) {
                if (prevAll + x < _view) {
                    return true;
                }

                x = -(prevAll - _view + _tab);
            } else {
                if (-x < contentW - nextAll) {
                    return true;
                }

                x = -(contentW - nextAll - _tab);
            }

            doc.animate({
                left: x
            }, 100);

            return true;
        },
        buildIframe: function (url) { // 创建iframe窗口
            var $content = this.$content,
                iframeName = 'iframe-' + this.tabId, $checkedIframe;

            $content.children('.active').removeClass('active');
            $content.append('<iframe src="' + url + '" frameborder="0" name="' + iframeName + '" class="page-frame animation-fade active"></iframe>');

            $checkedIframe = $content.find('iframe[name="' + iframeName + '"]');

            $.site.iframeEvents($checkedIframe);
        },
        tabSize: function () { // 修改标签页盒子尺寸
            var content, $tabNav = $(".con-tabs"),
                _num = $tabNav.find("li").size();

            content = this.tabWidth * _num;
            $tabNav.css("width", content);
        },
        tabEvent: function (doc, media) { // 增删标签页的对应状态
            var content = $(".con-tabs").width(),
                _view = this.view, _tab = this.tabWidth;

            if (content > this.view) {
                this.tabPosition(doc, _tab, "left", _view, content, media);
                this.btnView('visible');
            } else {
                this.btnView('hide');
            }

            if (this.currentView < _view || this.currentContent > content) {
                this.tabPosition(doc, _tab, "right", _view, content, media);
            }
            this.currentView = _view;
            this.currentContent = content;
        },
        tabPosition: function (doc, width, dir, view, content, media) { // 标签页的位移
            var self = this,
                x = doc.position().left,
                callback = function (x) {
                    var flag = x + width;

                    if (flag > 0) {
                        self.relative = x;
                        return 0;
                    } else {
                        return x;
                    }
                };

            if (dir === "left") {
                if (x <= view - content) {
                    return false;
                }
                if (typeof media !== 'undefined') {
                    x = view - content;
                } else {
                    x = this.relative !== 0 ? x - width + this.relative : x - width;
                    this.relative = 0;
                }
            } else if (dir === "right") {
                if (x === 0) {
                    return false;
                }

                if (typeof media !== 'undefined') {
                    x = content <= view ? 0 : view - content;
                } else {
                    x = callback(x + width);
                }
            }

            doc.animate({
                left: x
            }, 100);
        },
        _throttle: function (fn, interval) { // 函数节流操作
            var _fn = fn,
                timer,
                firstTime = true;
            return function () {
                var args = arguments,
                    self = this;

                if (firstTime) {
                    _fn.apply(self, args);
                    firstTime = false;
                }

                if (timer) {
                    return false;
                }

                timer = setTimeout(function () {
                    clearTimeout(timer);
                    timer = null;
                    _fn.apply(self, args);
                }, interval || 500);
            };
        },
        closeTab: function ($item) {
            var checkedTabId = $item.children('a').attr('target'), $checked = '',
                $nextLi = $item.next('li'),
                $content = this.$content;

            if ($item.is('.active')) { // 关闭选中标签
                if ($nextLi.size() > 0) {
                    $checked = $nextLi;
                } else {
                    $checked = $item.prev('li');
                }

                $checked.addClass("active");

                this.enable($checked);
                this._checkoutTab($checked.find('a'));
            }

            $item.remove();
            $content.children('[name="' + checkedTabId + '"]').remove();
            this._updateSetting(checkedTabId);

            this.tabSize();
            this.tabEvent($(".con-tabs"), 'media');

        },
        btnView: function (status) { // 标签页左右移动按钮状态
            var $siteContabs = $('.site-contabs'),
                $contabsLeftBtn = $siteContabs.children('button.pull-left'),
                $contabsRightBtn = $siteContabs.find('.pull-right > button.btn-icon');

            if (status === 'visible') {
                $contabsLeftBtn.removeClass('hide');
                $contabsRightBtn.removeClass('hide');
            } else if (status === 'hide') {
                $contabsLeftBtn.addClass('hide');
                $contabsRightBtn.addClass('hide');
            }
        }
    };

})(window, document, jQuery);