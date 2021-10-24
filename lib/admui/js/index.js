/**
 * UI v1.1.0
 * Copyright 2017-2018 Muyao
 * Licensed under the Muyao License 1.0 
 */
(function (docuemnt, window, $) {
    'use strict';
     
    /* globals Breakpoints, screenfull*/

    $.extend($.site, {
        theme: function () { // 主题渲染
            var $body = $('body'),
                settingsName = 'admui.base.skinTools',
                $parentLink = $('#admui-siteStyle', $('head')),
                settings = localStorage.getItem(settingsName),
                parentEtx = $parentLink.prop('href').indexOf('?v=') === -1 ? '' : '.min', themeColor, sidebar, navbar,
                menuDisplay, menuTxtIcon;

            if (!settings) {
                return;
            }

            settings = JSON.parse(settings).val;
            themeColor = this.themeColor = settings.themeColor;
            sidebar = settings.sidebar;
            navbar = settings.navbar;
            menuDisplay = settings.menuDisplay;
            menuTxtIcon = settings.menuTxtIcon;

            // 在前端渲染主题不是最优雅体验最好的，建议通过后端渲染
            if (themeColor && themeColor !== 'primary') {
                setTimeout(function () {
                    $parentLink.attr('href', 'lib/admui/skins/' + themeColor + '/index' + parentEtx + '.css');
                }, 130);
            }

            if (sidebar && sidebar === 'site-menubar-light') {
                $('#admui-siteMenubar').addClass('site-menubar-light');
            }

            if (navbar && navbar !== '') {
                $('.site-navbar').addClass(navbar);
            }

            if (settings.navbarInverse === '') {
                $('.site-navbar').removeClass('navbar-inverse');
            }

            if (menuDisplay && menuDisplay === 'site-menubar-fold') {
                $.site.menubar.fold();

                if (menuTxtIcon && menuTxtIcon === 'site-menubar-keep') {
                    $body.addClass('site-menubar-keep');
                } else {
                    $body.addClass('site-menubar-fold-alt');
                }
            }

            if (settings.tabFlag === '') {
                $body.removeClass('site-contabs-open');
            }

        },
        iframeTheme: function () { // 子框架主体内容部分主题
            var $iframeLink = $('#admui-siteStyle', this.iframeDocument),
                iframeEtx = $iframeLink.prop('href').indexOf('?v=') === -1 ? '' : '.min',
                themeColor = this.themeColor;

            if (themeColor && themeColor !== 'primary') {
                $iframeLink.attr('href', 'lib/admui/skins/' + this.themeColor + '/site' + iframeEtx + '.css');
            }
        },
        _tabsDraw: function () { // 标签页重绘
            var self = this,
                settingsName = 'admui.base.contentTabs',
                settings = $.sessionStorage.get(settingsName),
                tab, checkedTabId, checkedTabUrl, tabTpl, tabUrl, tabName, tabIframe,
                locationUrl = location.hash.substring(2),
                $conTabs = $('.con-tabs'),
                contentTabs = $.site.contentTabs,
                callback = function (key, tabId, url) {
                    var $firstIframe = self.$content.find('iframe:first');

                    if (key === tabId || !locationUrl) {
                        checkedTabUrl = url;

                        $conTabs.find('li:first').addClass('active');
                        $firstIframe.attr('src', url);
                        self.iframeEvents($firstIframe);
                    }else{
                        $firstIframe.removeClass('active');
                    }
                };

            checkedTabId = settings.checked;

            for (var key in settings) {
                tab = settings[key];

                if (key === 'checked' || key === 'tabId') {
                    continue;
                } else if (key === 'iframe-0') {
                    callback(key, checkedTabId, tab.url);
                    continue;
                }
                
                tabUrl = tab.url;
                tabName = tab.name;
                tabTpl = '<a href="' + tabUrl + '" ' + 'target="' + key + '"' +
                    '" title="' + tabName + '' + '" rel="contents"><span>' + tabName + '</span><i class="icon' +
                    ' wb-close-mini">' + '</i></a></li>';

                if (key === checkedTabId && locationUrl) {
                    checkedTabUrl = tabUrl;
                    tabTpl = '<li class="active">' + tabTpl;
                    tabIframe = '<iframe src="' + tabUrl + '" frameborder="0" name="' + key + '" class="page-frame animation-fade active"></iframe>';
                } else {
                    tabTpl = '<li>' + tabTpl;
                    tabIframe = '<iframe src="" frameborder="0" name="' + key + '" class="page-frame animation-fade"></iframe>';
                }

                $conTabs.append(tabTpl);
                self.$content.append(tabIframe);
            }

            if (locationUrl !== checkedTabUrl && locationUrl) {
                this._urlRequest(locationUrl);
            }

            contentTabs.enable($conTabs.find('.active'));

            if (Object.keys(settings).length >= 19) {
                contentTabs.tabSize();
                contentTabs.tabEvent($conTabs, 'media');
            }
        },
        _urlRequest: function (url) { // 处理存储信息中没有的页面访问（创建新的标签页）
            var title = '未知页面';
            
            $('.site-menu a').each(function () {
                var $item = $(this);

                if ($item.attr('href') === url) {
                    title = $.trim($item.attr('title') || $item.text());

                    return false;
                }
            });

            $.site.contentTabs.buildTab({name: title, url: url});
        },
        _hideNavbar: function () { // 隐藏导航条
            var $body = $('body');

            $body.addClass('site-navbar-collapsing');
            $('#admui-navbarCollapse').collapse('hide');

            setTimeout(function () {
                $body.removeClass('site-navbar-collapsing');
            }, 10);

            $body.removeClass('site-navbar-collapse-show');
        },
        iframeEvents: function ($el) { // 子框架主体内容事件处理
            var self = this, _callback = function (obj) {
                $('#admui-siteStyle', obj).load(function () {
                    self.iframeTheme();
                });
            };

            /*
             *  菜单收起
             *  导航条收起
             * */
            $el.load(function () {
                var iframeDocument = self.iframeDocument = $.content.document();

                $(iframeDocument).on('click', function () {
                    // 小屏下收起顶部导航条和左侧菜单
                    if (Breakpoints.is('xs') && $('body').hasClass('site-menubar-open')) {
                        $.site.menubar.hide();

                        self._hideNavbar();
                    }

                    // 核心框架中下拉菜单切换操作
                    $('[data-toggle="dropdown"]').parent().removeClass('open');
                });

                _callback(iframeDocument);
            });
        },
        run: function () {
            var self = this,
                $content = this.$content = $('#admui-pageContent');

            // 获取iframe框架中变量&方法
            $.content = $.content || {};

            $.extend($.content, {
                window: function () {
                    var name = $content.find('iframe.active').attr('name');
                    return window.frames[name];
                },
                document: function () { // 获取iframe框架中document
                    var name = $content.find('iframe.active').attr('name');
                    return window.frames[name].document;
                }
            });

            // 当前iframe框架document
            this.iframeDocument = null;

            // 项目名称获取
            $.ctx = $('#admui-signOut').data('ctx') || $.ctx;

            if (typeof $.site.menu !== 'undefined') {
                $.site.menu.init();
            }

            if (typeof $.site.contentTabs !== 'undefined') {
                $.site.contentTabs.init();
            }

            // 导航条响应式
            $('#admui-navbar').responsiveHorizontalTabs({
                tabParentSelector: '#admui-navTabs',
                fnCallback: function (el) {
                    if ($('#admui-navbar').is(':visible')) {
                        el.removeClass('is-load');
                    }
                }
            });

            // 导航条&菜单的响应式工作
            if (typeof $.site.menubar !== 'undefined') {
                $('#admui-siteMenubar').on('changing.site.menubar', function () {
                    var $menubar = $('[data-toggle="menubar"]');

                    $menubar.toggleClass('hided', !$.site.menubar.opened);
                    $menubar.toggleClass('unfolded', !$.site.menubar.folded);
                });

                $.site.menubar.init();

                Breakpoints.on('change', function () {
                    $.site.menubar.change();
                });

                /*
                 *  小屏幕下导航条展开 | 收起按钮
                 *  搜索按钮（href）
                 * */
                $(document).on('click', '[data-toggle="collapse"]', function (e) {
                    var $trigger = $(e.target),
                        href, target, $target;

                    if (!$trigger.is('[data-toggle="collapse"]')) {
                        $trigger = $trigger.parents('[data-toggle="collapse"]');
                    }

                    target = $trigger.attr('data-target') || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '');
                    $target = $(target);

                    if ($target.hasClass('navbar-search-overlap')) {
                        $target.find('input').focus();

                        e.preventDefault();
                    } else if ($target.attr('id') === 'admui-navbarCollapse') {
                        var isOpen = !$trigger.hasClass('collapsed'),
                            $body = $(document.body);

                        $body.addClass('site-navbar-collapsing');
                        $body.toggleClass('site-navbar-collapse-show', isOpen);

                        $('#admui-navbar').responsiveHorizontalTabs({
                            tabParentSelector: '#admui-navTabs',
                            fnCallback: function (el) {
                                el.removeClass('is-load');
                            }
                        });

                        setTimeout(function () {
                            $body.removeClass('site-navbar-collapsing');
                        }, 350);
                    }
                });

                $(document).on('click', '[data-toggle="menubar"]', function () { // 菜单展开|收起控制按钮
                    if (Breakpoints.is('xs') && $('body').hasClass('site-menubar-open')) {
                        self._hideNavbar();
                    }

                    $.site.menubar.toggle();
                });

                // 图标对应菜单展开
                $('#admui-navbar >.nav-tabs >li:not(.no-menu)').on('click', function (e) {
                    if ($(e.target).closest('li').is('.dropdown')) {
                        return;
                    }

                    if (Breakpoints.is('xs')) {
                        $.site.menubar.open();
                    }
                });
            }

            // 全屏模式操作
            if (typeof screenfull !== 'undefined') {
                $(document).on('click', '[data-toggle="fullscreen"]', function () {
                    if (screenfull.enabled) {
                        screenfull.toggle();
                    }

                    return false;
                });

                if (screenfull.enabled) {
                    document.addEventListener(screenfull.raw.fullscreenchange, function () {
                        $('[data-toggle="fullscreen"]').toggleClass('active', screenfull.isFullscreen);
                    });
                }
            }

            // 对下拉列表的其他功能
            $(document).on('show.bs.dropdown', function (e) {
                var $target = $(e.target), $menu,
                    $trigger = e.relatedTarget ? $(e.relatedTarget) : $target.children('[data-toggle="dropdown"]'),
                    animation = $trigger.data('animation');

                if (animation) {
                    $menu = $target.children('.dropdown-menu');

                    $menu.addClass('animation-' + animation);

                    $menu.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                        $menu.removeClass('animation-' + animation);
                    });
                }
            });

            // 父框架工具提示和弹框初始化
            $('[data-toggle="tooltip"]').tooltip({trigger: 'hover'});
            $('[data-toggle="popover"]').popover();

            if (window.localStorage) {
                this.theme();
                this._tabsDraw();
            }

            $.components.init();
        }
    });

    $.site.run();

})(document, window, jQuery);