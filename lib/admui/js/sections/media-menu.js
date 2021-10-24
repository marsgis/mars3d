/**
 * UI v1.1.0
 * Copyright 2017-2018 Muyao
 * Licensed under the Muyao License 1.0 
 */
(function (window, document, $) {
    'use strict';

    /***
     * 左侧菜单响应式操作
     *
     * **/

    $.site.menubar = {
        opened: null,
        folded: null,
        top: false,
        foldAlt: false,
        auto: true,
        init: function () {
            var self = this,
                $body = this.$body = $('body'),
                $html = this.$html = $('html'),
                $instance = this.$instance = $("#admui-navTabs");

            $html.removeClass('css-menubar').addClass('js-menubar');

            this.tabId = $('#admui-navbar').find('li.active > a').attr('href');

            if (this.tabId === '#') {
                this.tabId = $('.nav-tabs li.active').find('ul>li.active>a').attr('href');
            }

            if (!$instance.length) {
                return;
            }

            // 鼠标经过左侧菜单显示图标
            if ($body.is('.site-menubar-fold-alt')) {
                this.foldAlt = true;
            }

            // 鼠标经过左侧菜单显示文字
            if ($body.is('.site-menubar-keep')) {
                if ($body.hasClass('site-menubar-fold')) { // 收起
                    this.auto = 'fold';
                } else if ($body.hasClass('site-menubar-unfold')) { //展开
                    this.auto = 'unfold';
                }
            }

            $instance.on('changed.site.menubar', function () {
                self.update();
            });

            $('.nav-tabs li:not(.no-menu)').on('shown.bs.tab', function (event) {
                var tabId = self.tabId = $(event.target).attr('href');

                if ($body.hasClass('site-menubar-fold')) {
                    self.hoverscroll.enable(tabId);
                } else if ($body.hasClass('site-menubar-unfold')) {
                    self.slimScroll.enable();
                }
            });

            this.change();
        },
        change: function () {
            var breakpoint = Breakpoints.current();

            if (this.auto !== true) {
                switch (this.auto) {
                    case 'fold':
                        this.reset();
                        if (breakpoint.name === 'xs') {
                            this.hide();
                        } else {
                            this.fold();
                        }
                        return;
                    case 'unfold':
                        this.reset();
                        if (breakpoint.name === 'xs') {
                            this.hide();
                        } else {
                            this.unfold();
                        }
                        return;
                }
            }

            this.reset();

            if (breakpoint) {
                switch (breakpoint.name) {
                    case 'lg':
                        this.unfold();
                        break;
                    case 'md':
                    case 'sm':
                        this.fold();
                        break;
                    case 'xs':
                        this.hide();
                        break;
                }
            }
            Breakpoints.on('xs', 'leave', function () {
                $('#admui-navbar').responsiveHorizontalTabs({
                    tabParentSelector: '#admui-navTabs',
                    fnCallback: function (el) {
                        if ($('#admui-navbar').is(':visible')) {
                            el.removeClass('is-load');
                        }
                    }
                });
            });
        },
        animate: function (doing, callback) {
            var self = this,
                $body = self.$body;

            $body.addClass('site-menubar-changing');

            doing.call(self);
            this.$instance.trigger('changing.site.menubar');

            callback.call(self);
            $body.removeClass('site-menubar-changing');

            self.$instance.trigger('changed.site.menubar');
        },
        reset: function () {
            this.opened = null;
            this.folded = null;
            this.$body.removeClass('site-menubar-hide site-menubar-open site-menubar-fold site-menubar-unfold');
            this.$html.removeClass('disable-scrolling');
        },
        open: function () {
            if (this.opened !== true) {
                this.animate(function () {
                    this.$body.removeClass('site-menubar-hide').addClass('site-menubar-open site-menubar-unfold');
                    this.opened = true;

                    this.$html.addClass('disable-scrolling');

                }, function () {
                    this.slimScroll.enable();
                });
            }
        },
        hide: function () {
            this.hoverscroll.disable();

            if (this.opened !== false) {
                this.animate(function () {

                    this.$html.removeClass('disable-scrolling');
                    this.$body.removeClass('site-menubar-open').addClass('site-menubar-hide site-menubar-unfold');
                    this.opened = false;

                }, function () {
                    this.slimScroll.enable();
                });
            }
        },
        unfold: function () {
            this.hoverscroll.disable();

            if (this.folded !== false) {
                this.animate(function () {
                    this.$body.removeClass('site-menubar-fold').addClass('site-menubar-unfold');
                    this.folded = false;

                }, function () {
                    this.slimScroll.enable();
                });
            }
        },
        fold: function () {
            this.slimScroll.destroy();

            if (this.folded !== true) {
                this.animate(function () {
                    this.$body.removeClass('site-menubar-unfold').addClass('site-menubar-fold');
                    this.folded = true;

                }, function () {
                    this.hoverscroll.enable(this.tabId);
                });
            }
        },
        toggle: function () {
            var breakpoint = Breakpoints.current(),
                folded = this.folded,
                opened = this.opened;

            switch (breakpoint.name) {
                case 'lg':
                    if (folded === null || folded === false) {
                        this.fold();
                    } else {
                        this.unfold();
                    }
                    break;
                case 'md':
                case 'sm':
                    if (folded === null || folded === true) {
                        this.unfold();
                    } else {
                        this.fold();
                    }

                    $('#admui-navbar').responsiveHorizontalTabs({
                        tabParentSelector: '#admui-navTabs'
                    });
                    break;
                case 'xs':
                    if (opened === null || opened === false) {
                        this.open();
                    } else {
                        this.hide();
                    }
                    break;
            }
        },
        update: function () {
            this.hoverscroll.update();
        },
        slimScroll: {
            api: null,
            native: false,
            init: function () {
                // if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                //   this.native = true;
                //   $body.addClass('site-menubar-native');
                //   return;
                // }

                if ($('body').is('.site-menubar-native')) {
                    this.native = true;
                    return;
                }

                $.site.menubar.$instance.slimScroll($.po('slimScroll'));
            },
            enable: function () {
                if (this.native) {
                    return;
                }
                this.init();
            },
            destroy: function () {
                $.site.menubar.$instance.slimScroll({destroy: true});
                $.site.menubar.$instance.removeAttr('style');
            }
        },
        hoverscroll: {
            api: null,
            init: function (tabId) {
                $.site.menubar.$instance.find(tabId).children('div').attr('style', '');

                this.api = $.site.menubar.$instance.find(tabId).asHoverScroll({
                    namespace: 'hoverscorll',
                    direction: 'vertical',
                    list: '.site-menu',
                    item: '> li',
                    exception: '.site-menu-sub',
                    fixed: false,
                    boundary: 100,
                    onEnter: function () {
                        //$(this).siblings().removeClass('hover');
                        //$(this).addClass('hover');
                    },
                    onLeave: function () {
                        //$(this).removeClass('hover');
                    }
                }).data('asHoverScroll');
            },

            update: function () {
                if (this.api) {
                    this.api.update();
                }
            },

            enable: function (tabId) {
                if (tabId !== this.tabId) {
                    this.tabId = tabId;
                    this.init(tabId);
                } else {
                    this.api.enable();
                }
            },

            disable: function () {
                if (this.api) {
                    this.api.disable();
                }
            }
        }
    };

})(window, document, jQuery);