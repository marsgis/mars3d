/**
 * UI v1.1.0
 * Copyright 2017-2018 Muyao
 * Licensed under the Muyao License 1.0 
 */
(function (window, document, $) {
    'use strict';

    /***
    * 左侧菜单相关事件功能（默认为折叠效果）
     *
    * 提供了多个可触发事件：
    *  deactive.site.menu : 取消菜单选中项
    *  active.site.menu : 设置菜单选中项
    *  open.site.menu : 展开子菜单
    *  close.site.menu : 收起子菜单
    *
    *  可自定义事件：
    *  expanded.site.menu : 子菜单展开后动作
    *  collapsed.site.menu : 子菜单收起后动作
    * **/

    $.site.menu = {
        speed: 250,
        accordion: true, // 手风琴效果标识
        init: function () {
            var $siteMenubar = this.$siteMenubar = $('#admui-navTabs .site-menu');

            if (!$siteMenubar.length) {
                return;
            }

            this._bind();
        },
        _bind: function () {
            var self = this,
                $body = $('body'),
                $siteMenubar = this.$siteMenubar;

            $siteMenubar
                .on('mouseenter.site.menu', '.site-menu-item', function () {
                    var $item = $(this),
                        folded = $body.hasClass('site-menubar-fold');

                    if (folded === true && $item.is('.has-sub') && $item.parent('.site-menu').length) {
                        self.position($item, $item.children('.site-menu-sub'));
                    }

                    $item.addClass('hover');
                })
                .on('mouseleave.site.menu', '.site-menu-item', function () {
                    var $item = $(this),
                        folded = $body.hasClass('site-menubar-fold');

                    if (folded === true && $item.is('.has-sub') && $item.parent('.site-menu').length) {
                        $item.children('.site-menu-sub').css("max-height", "");
                    }

                    $item.removeClass('hover');
                })
                .on('deactive.site.menu', '.site-menu-item.active', function () {
                    $(this).removeClass('active');
                })
                .on('active.site.menu', '.site-menu-item', function () {
                    $(this).addClass('active');
                })
                .on('open.site.menu', '.site-menu-item', function (e) {
                    var $item = $(this);

                    self._expand($item, function () {
                        $item.addClass('open');
                    });

                    if (self.accordion && $item.closest('li.has-sub').length <= 1) {
                        $item.siblings('.open').trigger('close.site.menu');
                    }

                    e.stopPropagation();
                })
                .on('close.site.menu', '.site-menu-item.open', function (e) {
                    var $item = $(this);

                    self._collapse($item, function () {
                        $item.removeClass('open');
                    });

                    e.stopPropagation();
                })
                .on('click.site.menu ', '.site-menu-item > a', function () {
                    var $item = $(this),
                        $parent = $item.parent();

                    if ($parent.is('.has-sub')) {
                        if ($parent.is('.open')) {
                            $parent.trigger('close.site.menu');
                        } else {
                            $parent.trigger('open.site.menu');
                        }
                    } else {
                        $item.closest('li').siblings('.open').trigger('close.site.menu');
                        $item.closest('li.has-sub').siblings('.open').trigger('close.site.menu');
                        $item.parents('div.tab-pane').siblings().find('li.open').trigger('close.site.menu');

                        $siteMenubar.find('li.active').trigger('deactive.site.menu');
                        $parent.trigger('active.site.menu');
                    }
                })
                //.on('tap.site.menu', '> .site-menu-item > a', function () { // 左侧菜单在移动设备下事件操作
                    /*var link = $(this).attr('href');

                    if (link) {
                        window.location = link;
                    }*/
               // })
                .on('touchend.site.menu', '> .site-menu-item > a', function () {
                    var $item = $(this).parent('.site-menu-item'),
                        folded = $body.hasClass('site-menubar-fold');

                    if (!folded) {
                        return;
                    }

                    if ($item.is('.has-sub') && $item.parent('.site-menu').length) {
                        $item.siblings('.hover').removeClass('hover');

                        if ($item.is('.hover')) {
                            $item.removeClass('hover');
                        } else {
                            $item.addClass('hover');
                        }
                    }
                })
                .on('scroll.site.menu', '.site-menu-sub', function (e) {
                    e.stopPropagation();
                });
        },
        _collapse: function ($item, callback) { // 子菜单的收起动作
            var self = this;

            $item.children('.site-menu-sub').slideUp(self.speed, function () {
                if (callback) {
                    callback();
                }

                // 触发该元素上绑定的'collapsed.site.menu'事件
                self.$siteMenubar.trigger('collapsed.site.menu');
            });
        },
        _expand: function ($item, callback) { // 子菜单的展开动作
            var self = this;

            $item.children('.site-menu-sub').slideDown(self.speed, function () {
                if (callback) {
                    callback();
                }

                // 触发该元素上绑定的'expanded.site.menu'事件
                self.$siteMenubar.trigger('expanded.site.menu');
            });
        },
        refresh: function () { // 重置左侧菜单状态
            var $siteMenubar = this.$siteMenubar;

            $siteMenubar.find('li.open').trigger('close.site.menu');
            $siteMenubar.find('li.active').trigger('deactive.site.menu');
        },
        position: function ($item, $dropdown) { // 窗口 | 在小屏幕设备上，左侧系统菜单的下拉列表的位置操作功能
            var offsetTop = $item.position().top,
                menubarHeight = $("#admui-navTabs").outerHeight(),
                itemHeight = $item.find("> a").outerHeight();

            $dropdown.removeClass('site-menu-sub-up').css('max-height', "");

            if (offsetTop > menubarHeight / 2) {
                $dropdown.addClass('site-menu-sub-up');

                if ($.site.menubar.foldAlt) {
                    offsetTop = offsetTop - itemHeight;
                }
                $dropdown.css('max-height', offsetTop + itemHeight);
            } else {
                if ($.site.menubar.foldAlt) {
                    offsetTop = offsetTop + itemHeight;
                }
                $dropdown.removeClass('site-menu-sub-up');
                $dropdown.css('max-height', menubarHeight - offsetTop);
            }
        }
    };

})(window, document, jQuery);