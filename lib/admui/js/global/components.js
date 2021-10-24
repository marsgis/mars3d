/**
 * UI v1.1.0
 * Copyright 2017-2018 Muyao
 * Licensed under the Muyao License 1.0 
 */
(function (window, document, $) {
    'use strict';

    $.components.register("ace", {
        mode: "init",
        defaults: {},
        init: function (context, iframe) {
            var ace = (iframe && iframe.ace) ? iframe.ace : window.ace, iframe$;

            if (typeof ace === "undefined") {
                return;
            }

            iframe$ = iframe ? iframe.$ : $;

            //ace.config.set("themePath", "../theme");
            ace.config.loadModule("ace/ext/language_tools");

            $('[data-plugin="ace"]', context).each(function () {
                var id = $(this).attr("id"),
                    mode = $(this).data("mode", iframe$),
                    theme = $(this).data("theme", iframe$),
                    editor = ace.edit(id);

                editor.container.style.opacity = "";
                if (mode) {
                    editor.session.setMode("ace/mode/" + mode);
                }
                if (theme) {
                    editor.setTheme("ace/theme/" + theme);
                }

                editor.setOption("maxLines", 40);
                editor.setAutoScrollEditorIntoView(true);

                ace.config.loadModule("ace/ext/language_tools", function () {
                    editor.setOptions({
                        enableSnippets: true,
                        enableBasicAutocompletion: true
                    });
                });
            });
        }
    });

})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("animate-list", {
        mode: 'init',

        defaults: {
            child: '.panel',
            duration: 250,
            delay: 50,
            animate: 'scale-up',
            fill: 'backwards'
        },

        init: function (context, iframe) {
            var self = this,
                iframe$ = iframe ? iframe.$ : $;

            $('[data-plugin="animateList"]', context).each(function () {
                var $this = $(this),
                    options = $.extend({}, self.defaults, $this.data(iframe$), true);

                var animatedBox = function ($el, opts) {
                    this.options = opts;
                    this.$children = $el.find(opts.child);
                    this.$children.addClass('animation-' + opts.animate);
                    this.$children.css('animation-fill-mode', opts.fill);
                    this.$children.css('animation-duration', opts.duration + 'ms');

                    var delay = 0,
                        self = this;

                    this.$children.each(function () {

                        $(this).css('animation-delay', delay + 'ms');
                        delay += self.options.delay;
                    });
                };

                animatedBox.prototype = {
                    run: function (type) {
                        var self = this;
                        this.$children.removeClass('animation-' + this.options.animate);
                        if (typeof type !== 'undefined') {
                            this.options.animate = type;
                        }
                        setTimeout(function () {
                            self.$children.addClass('animation-' + self.options.animate);
                        }, 0);
                    }
                };

                $this.data('animateList', new animatedBox($this, options), iframe$);
            });
        }
    });

})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("colorpicker", {
        defaults: {},
        mode: "default"
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("datepicker", {
        mode: "default",
        defaults: {
            autoclose: true
        }
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("daterangepicker", {
        defaults: {
            "locale": {
                "format": "YYYY-MM-DD",
                "separator": " 至 ",
                "applyLabel": "确定",
                "cancelLabel": "取消",
                "fromLabel": "从",
                "toLabel": "到",
                "customRangeLabel": "自定义",
                "weekLabel": "W",
                "daysOfWeek": ["日", "一", "二", "三", "四", "五", "六"],
                "monthNames": ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
                "firstDay": 1
            },
            // "parentEl": "#admui-pageContent > .page",
            "alwaysShowCalendars": true
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $,
                moment = iframe ? iframe.moment : moment,
                defaults, defaults_ranges;

            if (!iframe$.fn.daterangepicker) {
                return;
            }

            defaults = $.components.getDefaults("daterangepicker");
            defaults_ranges = {
                ranges: {
                    '今天': [moment(), moment()],
                    '昨天': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                    '最近7天': [moment().subtract(6, 'days'), moment()],
                    '最近30天': [moment().subtract(29, 'days'), moment()],
                    '本月': [moment().startOf('month'), moment().endOf('month')],
                    '上月': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
                }
            };

            $('[data-plugin="daterangepicker"]', context).each(function () {
                var options = $.extend(true, {}, defaults, defaults_ranges, $(this).data(iframe$));

                iframe$(this).daterangepicker(options);
            });
        }
    });
})(window, document, jQuery);

(function(window, document, $){
    "use strict";

    $.components.register("maxlength", {
        mode: "default",
        defaults: {}
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("markdown", {
        mode: "init",
        defaults: {
            autofocus: false,
            savable: false,
            language: 'zh'
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (!iframe$.fn.markdown) {
                return;
            }

            defaults = this.defaults;

            $('textarea[data-plugin="markdown"]', context).each(function () {
                var options = $.extend(true, {}, defaults, $(this).data(iframe$));

                iframe$(this).markdown(options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("selectpicker", {
        mode: "default",
        defaults: {
            noneSelectedText: '没有选中任何项',
            noneResultsText: '没有找到匹配项',
            countSelectedText: '已选中{1}项中的{0}项',
            maxOptionsText: ['超出限制 (最多选择{n}项)', '组选择超出限制(最多选择{n}组)'],
            selectAllText: '选择全部',
            deselectAllText: '取消全部选择',
            doneButtonText: '关闭',
            style: "btn-select",
            iconBase: "icon",
            tickIcon: "wb-check"
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("bootstrapSlider", {
        defaults: {},
        mode: "default"
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("tagsinput", {
        defaults: {
            tagClass: "label label-default"
        },
        mode: "default"
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("tokenfield", {
        mode: "default",
        defaults: {}
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("TouchSpin", {
        mode: "default",
        defaults: {
            verticalupclass: "wb-plus",
            verticaldownclass: "wb-minus",
            buttondown_class: "btn btn-outline btn-default",
            buttonup_class: "btn btn-outline btn-default"
        }
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("buttons", {
        mode: "api",
        defaults: {},
        api: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $;

            $(context).on('click.site.loading', '[data-loading-text]', function () {
                var $btn = $(this),
                    text = $btn.text(),
                    i = 20,
                    loadingText = $btn.data('loadingText', iframe$);

                $btn.text(loadingText + '(' + i + ')').css('opacity', '.6');

                var timeout = setInterval(function () {
                    $btn.text(loadingText + '(' + (--i) + ')');
                    if (i === 0) {
                        clearInterval(timeout);
                        $btn.text(text).css('opacity', '1');
                    }
                }, 1000);
            });

            $(context).on('click.site.morebutton', '[data-more]', function () {
                var $target = $($(this).data('more', iframe$));
                $target.toggleClass('show');
            });
        }
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("card", {
        mode: "init",
        defaults: {},
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (!iframe$.fn.card) {
                return;
            }

            defaults = $.components.getDefaults("card");

            $('[data-plugin="card"]', context).each(function () {
                var options = $.extend({}, defaults, $(this).data(iframe$));

                if (options.target) {
                    options.container = iframe$(options.target);
                }

                iframe$(this).card(options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("clockpicker", {
        mode: "default"
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("dataTable", {
        defaults: {
            responsive: true,
            dom: "<'row'<'col-xs-6'<'hidden-xs'l>><'col-xs-6'f>>" + "<'row'<'col-xs-12'tr>>" + "<'row'<'col-sm-5'i><'col-sm-7'p>>",
            language: {
                "sSearchPlaceholder": "快速查找",
                "lengthMenu": "每页显示 _MENU_ 条",
                "search": "_INPUT_",
                "info": "第 _START_ 至 _END_ 项，共 _TOTAL_ 项",
                "infoEmpty": "共 0 项",
                "emptyTable": "无数据",
                "zeroRecords": "抱歉，没有找到符合条件的记录",
                "sInfoFiltered": "(从 _MAX_ 条记录中查找)",
                "loadingRecords": "加载中，请稍后…",
                "processing": "正在处理，请稍后…",
                "paginate": {
                    "first": "第一页",
                    "last": "最后一页",
                    "previous": '<i class="icon wb-chevron-left-mini"></i>',
                    "next": '<i class="icon wb-chevron-right-mini"></i>'
                },
                "aria": {
                    "sortAscending": "升序排列",
                    "sortDescending": "降序排列"
                }
            }
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (!iframe$.fn.dataTable) {
                return;
            }

            defaults = this.defaults;

            $('[data-plugin="dataTable"]', context).each(function () {
                var options = $.extend(true, {}, defaults, $(this).data(iframe$));

                iframe$(this).dataTable(options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("datepair", {
        mode: "default",
        defaults: {
            startClass: 'datepair-start',
            endClass: 'datepair-end',
            timeClass: 'datepair-time',
            dateClass: 'datepair-date'
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("dropify", {
        mode: "default",
        defaults: {
            messages: {
                'default': '单击或直接拖动需要上传的文件到此处',
                'replace': '将文件拖放到此处或单击此处替换',
                'remove':  '移除',
                'error':   '出错了…'
            },
            error: {
                'fileSize': '文件大小超出限制(文件大小不能超过{{ value }})。',
                'minWidth': '图片宽度太小(不能小于{{ value }}}px)。',
                'maxWidth': '图片宽度太大(不能大于{{ value }}}px)。',
                'minHeight': '图片高度太小(不能小于{{ value }}}px)。',
                'maxHeight': '图片高度太大(不能大于{{ value }}px)。',
                'imageFormat': '图片格式不支持(允许的格式为：{{ value }})。'
            }
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("editableTable", {
        mode: "init",
        init: function (context, iframe) {
            var ifaram$ = iframe ? iframe.$ : $, defaults;

            if (!ifaram$.fn.editableTableWidget) {
                return;
            }

            defaults = $.components.getDefaults("editableTable");

            $('[data-plugin="editableTable"]', context).each(function () {
                var options = $.extend(true, {}, defaults, $(this).data(ifaram$));

                ifaram$(this).editableTableWidget(options);
            });
        }
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("filterable", {
        mode: "init",
        defaults: {
            animationOptions: {
                duration: 750,
                easing: 'linear',
                queue: false
            }
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $,
                _window = iframe ? iframe : window, defaults, callback;

            if (typeof iframe$.fn.isotope === "undefined") {
                return;
            }

            defaults = $.components.getDefaults('filterable');

            callback = function () {
                $('[data-filterable]', context).each(function () {
                    var $this = iframe$(this);

                    var options = $.extend(true, {}, defaults, $this.data(), {
                        filter: '*'
                    });

                    $this.isotope(options);
                });

                $('[data-filter]', context).click(function (e) {
                    var $this = $(this),
                        target = $this.data('target', iframe$),
                        $li = $this.parent('li'), $list, filter;

                    if (!target) {
                        target = $this.attr('href');
                        target = target && target.replace(/.*(?=#[^\s]*$)/, '');
                    }

                    $li.siblings('.active').each(function () {
                        $(this).find('a').attr('aria-expanded', false);
                        $(this).removeClass('active');
                    });

                    $li.addClass('active');
                    $this.attr('aria-expanded', true);

                    $list = iframe$(target, context);
                    filter = $this.attr('data-filter');

                    if (filter !== '*') {
                        filter = '[data-type="' + filter + '"]';
                    }

                    $list.isotope({
                        filter: filter
                    });

                    e.preventDefault();
                });
            };

            if (context !== document) {
                callback();
            } else {
                $(_window).on('load', function () {
                    callback();
                });
            }
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("iconpicker", {
        mode: "default",
        defaults: {
            fullClassFormatter: function(value) {
                return "icon " + value;
            },
            templates: {
                popover: '<div class="iconpicker-popover popover"><div class="arrow"></div>' + '<div class="popover-title"></div><div class="popover-content"></div></div>',
                footer: '<div class="popover-footer"></div>',
                buttons: '<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">取消</button>' + ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">确认</button>',
                search: '<input type="search" class="form-control iconpicker-search" placeholder="查找图标">',
                iconpicker: '<div class="iconpicker"><div class="iconpicker-items"></div></div>',
                iconpickerItem: '<a role="button" href="#" class="iconpicker-item"><i></i></a>'
            },
            icons: ["fa-adjust", "fa-anchor", "fa-archive", "fa-area-chart", "fa-arrows", "fa-arrows-h", "fa-arrows-v", "fa-asterisk", "fa-at", "fa-automobile", "fa-ban", "fa-bank", "fa-bar-chart", "fa-bar-chart-o", "fa-barcode", "fa-bars", "fa-bed", "fa-beer", "fa-bell", "fa-bell-o", "fa-bell-slash", "fa-bell-slash-o", "fa-bicycle", "fa-binoculars", "fa-birthday-cake", "fa-bolt", "fa-bomb", "fa-book", "fa-bookmark", "fa-bookmark-o", "fa-briefcase", "fa-bug", "fa-building", "fa-building-o", "fa-bullhorn", "fa-bullseye", "fa-bus", "fa-cab", "fa-calculator", "fa-calendar", "fa-calendar-o", "fa-camera", "fa-camera-retro", "fa-car", "fa-caret-square-o-down", "fa-caret-square-o-left", "fa-caret-square-o-right", "fa-caret-square-o-up", "fa-cart-arrow-down", "fa-cart-plus", "fa-cc", "fa-certificate", "fa-check", "fa-check-circle", "fa-check-circle-o", "fa-check-square", "fa-check-square-o", "fa-child", "fa-circle", "fa-circle-o", "fa-circle-o-notch", "fa-circle-thin", "fa-clock-o", "fa-close", "fa-cloud", "fa-cloud-download", "fa-cloud-upload", "fa-code", "fa-code-fork", "fa-coffee", "fa-cog", "fa-cogs", "fa-comment", "fa-comment-o", "fa-comments", "fa-comments-o", "fa-compass", "fa-copyright", "fa-credit-card", "fa-crop", "fa-crosshairs", "fa-cube", "fa-cubes", "fa-cutlery", "fa-dashboard", "fa-database", "fa-desktop", "fa-diamond", "fa-dot-circle-o", "fa-download", "fa-edit", "fa-ellipsis-h", "fa-ellipsis-v", "fa-envelope", "fa-envelope-o", "fa-envelope-square", "fa-eraser", "fa-exchange", "fa-exclamation", "fa-exclamation-circle", "fa-exclamation-triangle", "fa-external-link", "fa-external-link-square", "fa-eye", "fa-eye-slash", "fa-eyedropper", "fa-fax", "fa-female", "fa-fighter-jet", "fa-file-archive-o", "fa-file-audio-o", "fa-file-code-o", "fa-file-excel-o", "fa-file-image-o", "fa-file-movie-o", "fa-file-pdf-o", "fa-file-photo-o", "fa-file-picture-o", "fa-file-powerpoint-o", "fa-file-sound-o", "fa-file-video-o", "fa-file-word-o", "fa-file-zip-o", "fa-film", "fa-filter", "fa-fire", "fa-fire-extinguisher", "fa-flag", "fa-flag-checkered", "fa-flag-o", "fa-flash", "fa-flask", "fa-folder", "fa-folder-o", "fa-folder-open", "fa-folder-open-o", "fa-frown-o", "fa-futbol-o", "fa-gamepad", "fa-gavel", "fa-gear", "fa-gears", "fa-genderless", "fa-gift", "fa-glass", "fa-globe", "fa-graduation-cap", "fa-group", "fa-hdd-o", "fa-headphones", "fa-heart", "fa-heart-o", "fa-heartbeat", "fa-history", "fa-home", "fa-hotel", "fa-image", "fa-inbox", "fa-info", "fa-info-circle", "fa-institution", "fa-key", "fa-keyboard-o", "fa-language", "fa-laptop", "fa-leaf", "fa-legal", "fa-lemon-o", "fa-level-down", "fa-level-up", "fa-life-bouy", "fa-life-buoy", "fa-life-ring", "fa-life-saver", "fa-lightbulb-o", "fa-line-chart", "fa-location-arrow", "fa-lock", "fa-magic", "fa-magnet", "fa-mail-forward", "fa-mail-reply", "fa-mail-reply-all", "fa-male", "fa-map-marker", "fa-meh-o", "fa-microphone", "fa-microphone-slash", "fa-minus", "fa-minus-circle", "fa-minus-square", "fa-minus-square-o", "fa-mobile", "fa-mobile-phone", "fa-money", "fa-moon-o", "fa-mortar-board", "fa-motorcycle", "fa-music", "fa-navicon", "fa-newspaper-o", "fa-paint-brush", "fa-paper-plane", "fa-paper-plane-o", "fa-paw", "fa-pencil", "fa-pencil-square", "fa-pencil-square-o", "fa-phone", "fa-phone-square", "fa-photo", "fa-picture-o", "fa-pie-chart", "fa-plane", "fa-plug", "fa-plus", "fa-plus-circle", "fa-plus-square", "fa-plus-square-o", "fa-power-off", "fa-print", "fa-puzzle-piece", "fa-qrcode", "fa-question", "fa-question-circle", "fa-quote-left", "fa-quote-right", "fa-random", "fa-recycle", "fa-refresh", "fa-remove", "fa-reorder", "fa-reply", "fa-reply-all", "fa-retweet", "fa-road", "fa-rocket", "fa-rss", "fa-rss-square", "fa-search", "fa-search-minus", "fa-search-plus", "fa-send", "fa-send-o", "fa-server", "fa-share", "fa-share-alt", "fa-share-alt-square", "fa-share-square", "fa-share-square-o", "fa-shield", "fa-ship", "fa-shopping-cart", "fa-sign-in", "fa-sign-out", "fa-signal", "fa-sitemap", "fa-sliders", "fa-smile-o", "fa-soccer-ball-o", "fa-sort", "fa-sort-alpha-asc", "fa-sort-alpha-desc", "fa-sort-amount-asc", "fa-sort-amount-desc", "fa-sort-asc", "fa-sort-desc", "fa-sort-down", "fa-sort-numeric-asc", "fa-sort-numeric-desc", "fa-sort-up", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-square", "fa-square-o", "fa-star", "fa-star-half", "fa-star-half-empty", "fa-star-half-full", "fa-star-half-o", "fa-star-o", "fa-street-view", "fa-suitcase", "fa-sun-o", "fa-support", "fa-tablet", "fa-tachometer", "fa-tag", "fa-tags", "fa-tasks", "fa-taxi", "fa-terminal", "fa-thumb-tack", "fa-thumbs-down", "fa-thumbs-o-down", "fa-thumbs-o-up", "fa-thumbs-up", "fa-ticket", "fa-times", "fa-times-circle", "fa-times-circle-o", "fa-tint", "fa-toggle-down", "fa-toggle-left", "fa-toggle-off", "fa-toggle-on", "fa-toggle-right", "fa-toggle-up", "fa-trash", "fa-trash-o", "fa-tree", "fa-trophy", "fa-truck", "fa-tty", "fa-umbrella", "fa-university", "fa-unlock", "fa-unlock-alt", "fa-unsorted", "fa-upload", "fa-user", "fa-user-plus", "fa-user-secret", "fa-user-times", "fa-users", "fa-video-camera", "fa-volume-down", "fa-volume-off", "fa-volume-up", "fa-warning", "fa-wheelchair", "fa-wifi", "fa-wrench", "fa-ambulance", "fa-subway", "fa-train", "fa-mars", "fa-mars-double", "fa-mars-stroke", "fa-mars-stroke-h", "fa-mars-stroke-v", "fa-mercury", "fa-neuter", "fa-transgender", "fa-transgender-alt", "fa-venus", "fa-venus-double", "fa-venus-mars", "fa-file", "fa-file-o", "fa-file-text", "fa-file-text-o", "fa-cc-amex", "fa-cc-discover", "fa-cc-mastercard", "fa-cc-paypal", "fa-cc-stripe", "fa-cc-visa", "fa-google-wallet", "fa-paypal", "fa-bitcoin", "fa-btc", "fa-cny", "fa-dollar", "fa-eur", "fa-euro", "fa-gbp", "fa-ils", "fa-inr", "fa-jpy", "fa-krw", "fa-rmb", "fa-rouble", "fa-rub", "fa-ruble", "fa-rupee", "fa-shekel", "fa-sheqel", "fa-try", "fa-turkish-lira", "fa-usd", "fa-won", "fa-yen", "fa-align-center", "fa-align-justify", "fa-align-left", "fa-align-right", "fa-bold", "fa-chain", "fa-chain-broken", "fa-clipboard", "fa-columns", "fa-copy", "fa-cut", "fa-dedent", "fa-files-o", "fa-floppy-o", "fa-font", "fa-header", "fa-indent", "fa-italic", "fa-link", "fa-list", "fa-list-alt", "fa-list-ol", "fa-list-ul", "fa-outdent", "fa-paperclip", "fa-paragraph", "fa-paste", "fa-repeat", "fa-rotate-left", "fa-rotate-right", "fa-save", "fa-scissors", "fa-strikethrough", "fa-subscript", "fa-superscript", "fa-table", "fa-text-height", "fa-text-width", "fa-th", "fa-th-large", "fa-th-list", "fa-underline", "fa-undo", "fa-unlink", "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up", "fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-arrow-circle-down", "fa-arrow-circle-left", "fa-arrow-circle-o-down", "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrows-alt", "fa-caret-down", "fa-caret-left", "fa-caret-right", "fa-caret-up", "fa-chevron-circle-down", "fa-chevron-circle-left", "fa-chevron-circle-right", "fa-chevron-circle-up", "fa-chevron-down", "fa-chevron-left", "fa-chevron-right", "fa-chevron-up", "fa-hand-o-down", "fa-hand-o-left", "fa-hand-o-right", "fa-hand-o-up", "fa-long-arrow-down", "fa-long-arrow-left", "fa-long-arrow-right", "fa-long-arrow-up", "fa-backward", "fa-compress", "fa-eject", "fa-expand", "fa-fast-backward", "fa-fast-forward", "fa-forward", "fa-pause", "fa-play", "fa-play-circle", "fa-play-circle-o", "fa-step-backward", "fa-step-forward", "fa-stop", "fa-youtube-play", "fa-adn", "fa-android", "fa-angellist", "fa-apple", "fa-behance", "fa-behance-square", "fa-bitbucket", "fa-bitbucket-square", "fa-buysellads", "fa-codepen", "fa-connectdevelop", "fa-css3", "fa-dashcube", "fa-delicious", "fa-deviantart", "fa-digg", "fa-dribbble", "fa-dropbox", "fa-drupal", "fa-empire", "fa-facebook", "fa-facebook-f", "fa-facebook-official", "fa-facebook-square", "fa-flickr", "fa-forumbee", "fa-foursquare", "fa-ge", "fa-git", "fa-git-square", "fa-github", "fa-github-alt", "fa-github-square", "fa-gittip", "fa-google", "fa-google-plus", "fa-google-plus-square", "fa-gratipay", "fa-hacker-news", "fa-html5", "fa-instagram", "fa-ioxhost", "fa-joomla", "fa-jsfiddle", "fa-lastfm", "fa-lastfm-square", "fa-leanpub", "fa-linkedin", "fa-linkedin-square", "fa-linux", "fa-maxcdn", "fa-meanpath", "fa-medium", "fa-openid", "fa-pagelines", "fa-pied-piper", "fa-pied-piper-alt", "fa-pinterest", "fa-pinterest-p", "fa-pinterest-square", "fa-qq", "fa-ra", "fa-rebel", "fa-reddit", "fa-reddit-square", "fa-renren", "fa-sellsy", "fa-shirtsinbulk", "fa-simplybuilt", "fa-skyatlas", "fa-skype", "fa-slack", "fa-slideshare", "fa-soundcloud", "fa-spotify", "fa-stack-exchange", "fa-stack-overflow", "fa-steam", "fa-steam-square", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-tencent-weibo", "fa-trello", "fa-tumblr", "fa-tumblr-square", "fa-twitch", "fa-twitter", "fa-twitter-square", "fa-viacoin", "fa-vimeo-square", "fa-vine", "fa-vk", "fa-wechat", "fa-weibo", "fa-weixin", "fa-whatsapp", "fa-windows", "fa-wordpress", "fa-xing", "fa-xing-square", "fa-yahoo", "fa-yelp", "fa-youtube", "fa-youtube-square", "fa-h-square", "fa-hospital-o", "fa-medkit", "fa-stethoscope", "fa-user-md"]
        }
    });

    $.components.register("iconpickerWb", {
        mode: "default",
        defaults: {
            fullClassFormatter: function(value) {
                return "icon " + value;
            },
            templates: {
                popover: '<div class="iconpicker-popover popover"><div class="arrow"></div>' + '<div class="popover-title"></div><div class="popover-content"></div></div>',
                footer: '<div class="popover-footer"></div>',
                buttons: '<button class="iconpicker-btn iconpicker-btn-cancel btn btn-default btn-sm">取消</button>' + ' <button class="iconpicker-btn iconpicker-btn-accept btn btn-primary btn-sm">确认</button>',
                search: '<input type="search" class="form-control iconpicker-search" placeholder="查找图标">',
                iconpicker: '<div class="iconpicker"><div class="iconpicker-items"></div></div>',
                iconpickerItem: '<a role="button" href="#" class="iconpicker-item"><i></i></a>'
            },
            icons: ["wb-dashboard","wb-inbox","wb-cloud","wb-bell","wb-book","wb-bookmark","wb-tag","wb-library","wb-share","wb-reply","wb-refresh","wb-move","wb-chat","wb-chat-working","wb-chat-text","wb-chat-group","wb-envelope","wb-envelope-open","wb-user","wb-user-circle","wb-users","wb-user-add","wb-grid-9","wb-grid-4","wb-menu","wb-layout","wb-fullscreen","wb-fullscreen-exit","wb-expand","wb-contract","wb-arrow-expand","wb-arrow-shrink","wb-desktop","wb-mobile","wb-signal","wb-power","wb-more-horizontal","wb-more-vertical","wb-globe","wb-map","wb-flag","wb-pie-chart","wb-stats-bars","wb-pluse","wb-home","wb-shopping-cart","wb-payment","wb-briefcase","wb-search","wb-zoom-in","wb-zoom-out","wb-download","wb-upload","wb-sort-asc","wb-sort-des","wb-graph-up","wb-graph-down","wb-replay","wb-edit","wb-pencil","wb-rubber","wb-crop","wb-eye","wb-eye-close","wb-image","wb-gallery","wb-video","wb-camera","wb-folder","wb-clipboard","wb-order","wb-file","wb-copy","wb-add-file","wb-print","wb-calendar","wb-time","wb-trash","wb-plugin","wb-extension","wb-memory","wb-settings","wb-scissor","wb-wrench","wb-hammer","wb-lock","wb-unlock","wb-volume-low","wb-volume-high","wb-volume-off","wb-pause","wb-play","wb-stop","wb-musical","wb-random","wb-reload","wb-loop","wb-text","wb-bold","wb-italic","wb-underline","wb-format-clear","wb-text-type","wb-table","wb-attach-file","wb-paperclip","wb-link-intact","wb-link","wb-link-broken","wb-indent-increase","wb-indent-decrease","wb-align-justify","wb-align-left","wb-align-center","wb-align-right","wb-list-numbered","wb-list-bulleted","wb-list","wb-emoticon","wb-quote-right","wb-code","wb-code-working","wb-code-unfold","wb-chevron-right","wb-chevron-left","wb-chevron-left-mini","wb-chevron-right-mini","wb-chevron-up","wb-chevron-down","wb-chevron-up-mini","wb-chevron-down-mini","wb-arrow-left","wb-arrow-right","wb-arrow-up","wb-arrow-down","wb-dropdown","wb-dropup","wb-dropright","wb-dropleft","wb-sort-vertical","wb-triangle-left","wb-triangle-right","wb-triangle-down","wb-triangle-up","wb-check-circle","wb-check","wb-check-mini","wb-close","wb-close-mini","wb-plus-circle","wb-plus","wb-minus-circle","wb-minus","wb-alert-circle","wb-alert","wb-help-circle","wb-help","wb-info-circle","wb-info","wb-warning","wb-heart","wb-heart-outline","wb-star","wb-star-half","wb-star-outline","wb-thumb-up","wb-thumb-down","wb-small-point","wb-medium-point","wb-large-point"]
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("formatter", {
        mode: "init",
        defaults: {
            persistent: true
        },

        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $;

            if (!iframe$.fn.formatter) {
                return;
            }

            var defaults = $.components.getDefaults("formatter"),
                browserName = navigator.userAgent.toLowerCase(),
                ieOptions;

            if (/msie/i.test(browserName) && !/opera/.test(browserName)) {
                ieOptions = {
                    persistent: false
                };
            } else {
                ieOptions = {};
            }

            $('[data-plugin="formatter"]', context).each(function () {
                var options = $.extend({}, defaults, ieOptions, $(this).data(iframe$));

                if (options.pattern) {
                    options.pattern = options.pattern.replace(/\[\[/g, '{{').replace(/\]\]/g, '}}');
                }

                iframe$(this).formatter(options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("formValidation", {
        mode: "default",
        defaults: {
            locale:'zh_CN',
            framework: 'bootstrap',
            excluded: ':disabled',
            icon: {
                valid: 'icon wb-check',
                invalid: 'icon wb-close',
                validating: 'icon wb-refresh'
            }
        }
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("gauge", {
        mode: "init",
        defaults: {
            lines: 12,
            angle: 0.12,
            lineWidth: 0.4,
            pointer: {
                length: 0.68,
                strokeWidth: 0.03,
                color: $.colors("blue-grey", 400)
            },
            limitMax: true,
            colorStart: $.colors("blue-grey", 200),
            colorStop: $.colors("blue-grey", 200),
            strokeColor: $.colors("purple", 500),
            generateGradient: true
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, Gauge = (iframe && iframe.Gauge) ? iframe.Gauge : window.Gauge, defaults;

            if (typeof Gauge === undefined) {
                return;
            }

            defaults = $.components.getDefaults("gauge");

            $('[data-plugin="gauge"]', context).each(function () {
                var $this = $(this),
                    options = $this.data(iframe$),
                    $text = $this.find('.gauge-label'),
                    $canvas = $this.find("canvas");

                options = $.extend(true, {}, defaults, options);

                if ($canvas.length === 0) {
                    return;
                }

                var gauge = new Gauge($canvas[0]).setOptions(options);

                $this.data("gauge", gauge, iframe$);

                gauge.animationSpeed = 50;
                gauge.maxValue = $this.data('max-value', iframe$);

                gauge.set($this.data("value", iframe$));

                if ($text.length > 0) {
                    gauge.setTextField($text[0]);
                }
            });
        }
    });

    $.components.register("donut", {
        mode: "init",
        defaults: {
            lines: 12,
            angle: 0.3,
            lineWidth: 0.08,
            pointer: {
                length: 0.9,
                strokeWidth: 0.035,
                color: $.colors("blue-grey", 400)
            },
            limitMax: false, // If true, the pointer will not go past the end of the gauge
            colorStart: $.colors("blue-grey", 200),
            colorStop: $.colors("blue-grey", 200),
            strokeColor: $.colors("purple", 500),
            generateGradient: true
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, Donut = (iframe && iframe.Donut) ? iframe.Donut : window.Donut, defaults;

            if (typeof Donut === undefined) {
                return;
            }

            defaults = $.components.getDefaults("donut");

            $('[data-plugin="donut"]', context).each(function () {
                var $this = $(this),
                    options = $this.data(iframe$),
                    $text = $this.find('.donut-label'),
                    $canvas = $this.find("canvas");

                options = $.extend(true, {}, defaults, options);

                if ($canvas.length === 0) {
                    return;
                }

                var donut = new Donut($canvas[0]).setOptions(options);

                $this.data("donut", donut, iframe$);

                donut.animationSpeed = 50;
                donut.maxValue = $this.data('max-value', iframe$);

                donut.set($this.data("value", iframe$));

                if ($text.length > 0) {
                    donut.setTextField($text[0]);
                }
            });
        }
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("gridstack", {
        mode: "init",
        defaults: {
            cellHeight: 80,
            verticalMargin: 20
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $;

            if (!iframe$.fn.gridstack) {
                return;
            }

            var defaults = $.components.getDefaults("gridstack");

            $('[data-plugin="gridstack"]', context).each(function () {
                var options = $.extend(true, {}, defaults, $(this).data(iframe$));

                iframe$(this).gridstack(options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("highlight", {
        mode: "init",
        defaults: {},
        init: function (context, iframe) {
            var hljs = (iframe && iframe. hljs) ? iframe.hljs : window.hljs;

            if (typeof hljs === "undefined") {
                return;
            }

            $('[data-plugin="highlight"]', context).each(function (i, block) {
                hljs.highlightBlock(block);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("sortable", {
        defaults: {},
        mode: "default"
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("iCheck", {
        mode: "default",
        defaults: {}
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("input-group-file", {
        api: function (context) {
            $(context).on("change", ".input-group-file [type=file]", function () {
                var $this = $(this),
                    $text = $(this).parents('.input-group-file').find('.form-control'), value = "";

                $.each($this[0].files, function (i, file) {
                    value += file.name + ", ";
                });
                value = value.substring(0, value.length - 2);

                $text.val(value);
            });
        }
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("isotope", {
        mode: "init",
        defaults: {},
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $,
                _window = iframe ? iframe : window, defaults;

            if (typeof iframe$.fn.isotope === "undefined") {
                return;
            }
            defaults = $.components.getDefaults('isotope');

            var callback = function () {
                $('[data-plugin="isotope"]', context).each(function () {
                    var $this = iframe$(this),
                        options = $.extend(true, {}, defaults, $this.data());

                    $this.isotope(options);
                });
            };
            if (context !== document) {
                callback();
            } else {
                $(_window).on('load', function () {
                    callback();
                });
            }
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("appear", {
        defaults: {},
        api: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $;

            if (!iframe$.fn.appear) {
                return;
            }

            iframe$(context).on("appear", '[data-plugin="appear"]', function () {
                var $item = $(this),
                    animate = $item.data("animate", iframe$);

                if ($item.hasClass('appear-no-repeat')) {
                    return;
                }
                $item.removeClass("invisible").addClass('animation-' + animate);

                if ($item.data("repeat") === false) {
                    $item.addClass('appear-no-repeat');
                }
            });

            iframe$(context).on("disappear", '[data-plugin="appear"]', function () {
                var $item = $(this),
                    animate = $item.data("animate", iframe$);

                if ($item.hasClass('appear-no-repeat')) {
                    return;
                }

                $item.addClass("invisible").removeClass('animation-' + animate);
            });
        },

        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $;

            if (!iframe$.fn.appear) {
                return;
            }
            var defaults = $.components.getDefaults("appear");

            iframe$('[data-plugin="appear"]', context).appear(defaults);
            iframe$('[data-plugin="appear"]', context).not(':appeared').addClass("invisible");
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("knob", {
        mode: "default",
        defaults: {
            min: -50,
            max: 50,
            width: 120,
            height: 120,
            thickness: ".1"
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("labelauty", {
        mode: "default",
        defaults: {
            same_width: true,
            checked_label: "选中",
            unchecked_label: "未选中"
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("strength", {
        mode: "default",
        defaults: {
            showMeter: true,
            showToggle: false,

            templates: {
                toggle: '<div class="checkbox-custom checkbox-primary show-password-wrap"><input type="checkbox" class="{toggleClass}" title="显示/隐藏密码" id="show_password" /><label for="show_password">显示密码</label></div>',
                meter: '<div class="{meterClass}">{score}</div>',
                score: '<div class="{scoreClass}"></div>',
                main: '<div class="{containerClass}">{input}{meter}{toggle}</div>'
            },

            classes: {
                container: 'strength-container',
                status: 'strength-{status}',
                input: 'strength-input',
                toggle: 'strength-toggle',
                meter: 'strength-meter',
                score: 'strength-score'
            },

            scoreLables: {
                invalid: 'Invalid',
                weak: 'Weak',
                good: 'Good',
                strong: 'Strong'
            },

            scoreClasses: {
                invalid: 'strength-invalid',
                weak: 'strength-weak',
                good: 'strength-good',
                strong: 'strength-strong'
            }
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("treegrid", {
        mode: "default",
        defaults: {
            expanderExpandedClass: 'icon wb-triangle-down',
            expanderCollapsedClass: 'icon wb-triangle-right'
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("wizard", {
        mode: "default",
        defaults: {
            step: ".steps .step, .pearls .pearl",
            buttonLabels:{
                back:'上一步',
                next:'下一步',
                finish:'完成'
            },
            templates: {
                buttons: function () {
                    var options = this.options;

                    return '<div class="wizard-buttons">' +
                        '<a class="btn btn-default btn-outline" href="#' + this.id + '" data-wizard="back" role="button">' + options.buttonLabels.back + '</a>' +
                        '<a class="btn btn-primary btn-outline pull-right" href="#' + this.id + '" data-wizard="next" role="button">' + options.buttonLabels.next + '</a>' +
                        '<a class="btn btn-success btn-outline pull-right" href="#' + this.id + '" data-wizard="finish" role="button">' + options.buttonLabels.finish + '</a>' +
                        '</div>';
                }
            }
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("jstree", {
        mode: "default",
        defaults: {}
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("timepicker", {
        mode: "default",
        defaults: {
            lang: {
                am: '上午',
                pm: '下午',
                AM: '上午',
                PM: '下午',
                decimal: '.',
                mins: '分钟',
                hr: '小时',
                hrs: '小时'
            },
            timeFormat: 'ag:i'
        }
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("ladda", {
        mode: "init",
        defaults: {
            timeout: 2000
        },
        init: function (context, iframe) {
            var Ladda = (iframe && iframe.Ladda) ? iframe.Ladda : window.Ladda, defaults;

            if (typeof Ladda === "undefined") {
                return;
            }

            defaults = $.components.getDefaults("ladda");

            Ladda.bind('[data-plugin="ladda"]', defaults);
        }
    });

    $.components.register("laddaProgress", {
        mode: "init",
        defaults: {},
        init: function (context, iframe) {
            var Ladda = (iframe && iframe.Ladda) ? iframe.Ladda : window.Ladda, defaults, options;

            if (typeof Ladda === 'undefined') {
                return;
            }

            defaults = $.components.getDefaults("laddaProgress");
            options = $.extend({}, defaults, {
                callback: function (instance) {
                    var progress = 0;
                    var interval = setInterval(function () {
                        progress = Math.min(progress + Math.random() * 0.1, 1);
                        instance.setProgress(progress);

                        if (progress === 1) {
                            instance.stop();
                            clearInterval(interval);
                        }
                    }, 300);
                }
            });
            Ladda.bind('[data-plugin="laddaProgress"]', options);
        }
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("layer", {
        mode: 'init',
        defaults: {
            target: 'parent',
            confirmBtn: ['确认', '取消'],
            prompt:1
        },
        init: function (context, iframe) {
            var result = (iframe && iframe.layer),
                layer = result ? iframe.layer : window.layer, iframe$, defaults;

            if (typeof layer === 'undefined') {
                return;
            }

            iframe$ = iframe ? iframe.$ : $;
            defaults = this.defaults;

            $(context).on('click.site.layer', '[data-plugin="layer"]', function () {
                var $this = iframe$(this),
                    options = $.extend(true, {}, defaults, $this.data());

                if(options.target === 'self'){
                    if(!result){
                        return console.error('您在当前页面还没有引入layer插件');
                    }
                    layer = iframe.layer;
                }else{
                    layer = result ? window.layer : layer;
                }

                switch (options.type) {
                    case "alert":
                        layer.alert(options.message);
                        break;
                    case "msg":
                        layer.msg(options.message);
                        break;
                    case "confirm":
                        layer.confirm(options.title, {
                            btn: options.confirmBtn
                        },function () {
                            layer.msg(options.successMessage);
                        }, function () {
                            layer.msg(options.cancelMessage);
                        });
                        break;
                    case "prompt":
                        layer.prompt({title:options.title, formType: options.prompt}, function (text, index) {
                            layer.close(index);
                            layer.msg(options.message);
                        });
                        break;
                    case "tips":
                        layer.tips(options.message, $this);
                        break;
                    case "load":
                        layer.load(options.style, {time:options.time});
                        break;
                }
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("masonry", {
        mode: "init",
        defaults: {
            itemSelector: ".masonry-item"
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (typeof iframe$.fn.masonry === "undefined") {
                return;
            }

            defaults = $.components.getDefaults('masonry');

            $('[data-plugin="masonry"]', context).each(function () {
                var $this = iframe$(this),
                    options = $.extend(true, {}, defaults, $this.data());

                $this.masonry(options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("matchHeight", {
        mode: "init",
        defaults: {},
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (typeof iframe$.fn.matchHeight === "undefined") {
                return;
            }
            defaults = $.components.getDefaults('matchHeight');

            $('[data-plugin="matchHeight"]', context).each(function () {
                var $this = iframe$(this),
                    options = $.extend(true, {}, defaults, $this.data()),
                    matchSelector = $this.data('matchSelector');

                if (matchSelector) {
                    $this.find(matchSelector).matchHeight(options);
                } else {
                    $this.children().matchHeight(options);
                }

            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("material", {
        init: function (context, iframe) {
            $('.form-material', context).each(function () {
                var $this = $(this), iframe$ = iframe ? iframe.$ : $, $control;

                if ($this.data('material', iframe$) === true) {
                    return;
                }

                $control = $this.find('.form-control');

                // Add hint label if required
                if ($control.attr("data-hint")) {
                    $control.after("<div class=hint>" + $control.attr("data-hint") + "</div>");
                }

                if ($this.hasClass("floating")) {
                    // Add floating label if required
                    if ($control.hasClass("floating-label")) {
                        var placeholder = $control.attr("placeholder");
                        $control.attr("placeholder", null).removeClass("floating-label");
                        $control.after("<div class=floating-label>" + placeholder + "</div>");
                    }

                    // Set as empty if is empty
                    if ($control.val() === null || $control.val() === "undefined" || $control.val() === "") {
                        $control.addClass("empty");
                    }
                }

                // Support for file input
                if ($control.next().is("[type=file]")) {
                    $this.addClass('form-material-file');
                }

                $this.data('material', true, iframe$);
            });
        },
        api: function (context) {
            function _isChar(e) {
                if (typeof e.which === "undefined") {
                    return true;
                } else if (typeof e.which === "number" && e.which > 0) {
                    return !e.ctrlKey && !e.metaKey && !e.altKey && e.which !== 8 && e.which !== 9;
                }
                return false;
            }

            $(context).on("keydown.site.material paste.site.material", ".form-control", function (e) {
                if (_isChar(e)) {
                    $(this).removeClass("empty");
                }
            }).on("keyup.site.material change.site.material", ".form-control", function () {
                var $this = $(this);
                if ($this.val() === "" && (typeof $this[0].checkValidity !== "undefined" && $this[0].checkValidity())) {
                    $this.addClass("empty");
                } else {
                    $this.removeClass("empty");
                }
            }).on("focus", ".form-material-file", function () {
                $(this).find("input").addClass("focus");
            })
                .on("blur", ".form-material-file", function () {
                    $(this).find("input").removeClass("focus");
                })
                .on("change", ".form-material-file [type=file]", function () {
                    var $this = $(this);
                    var value = "";
                    $.each($this[0].files, function (i, file) {
                        value += file.name + ", ";
                    });
                    value = value.substring(0, value.length - 2);
                    if (value) {
                        $this.prev().removeClass("empty");
                    } else {
                        $this.prev().addClass("empty");
                    }
                    $this.prev().val(value);
                });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("multiSelect", {
        mode: "default",
        defaults: {}
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("nestable", {
        mode: "default",
        defaults: {}
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("nprogress", {
        mode: "init",
        defaults: {
            minimum: 0.15,
            trickleRate: 0.07,
            trickleSpeed: 360,
            showSpinner: false,
            template: '<div class="bar" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'
        },
        init: function (context, iframe) {
            var NProgress = (iframe && iframe.NProgress) ? iframe.NProgress : window.NProgress;

            if (typeof NProgress === "undefined") {
                return;
            }

            NProgress.configure(this.defaults);
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("owlCarousel", {
        mode: "default",
        defaults: {
            loop: true,
            nav: true,
            dots: false,
            dotsClass: "owl-dots owl-dots-fall",
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                }
            }
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("panel", {
        api: function (context, iframe) {
            var $doc = $(context), iframe$ = iframe ? iframe.$ : $,
                _window = iframe ? iframe : window;

            $doc.off('click.site.panel');

            $doc.on('click.site.panel', '[data-toggle="panel-fullscreen"]', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $panel = $this.closest('.panel');

                var api = $panel.data('panel-api', iframe$);
                api.toggleFullscreen();
            });

            $doc.on('click.site.panel', '[data-toggle="panel-collapse"]', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $panel = $this.closest('.panel');

                var api = $panel.data('panel-api', iframe$);
                api.toggleContent();
            });

            $doc.on('click.site.panel', '[data-toggle="panel-close"]', function (e) {
                e.preventDefault();
                var $this = $(this),
                    $panel = $this.closest('.panel');

                var api = $panel.data('panel-api', iframe$);
                api.close();
            });

            $doc.on('click.site.panel', '[data-toggle="panel-refresh"]', function (e) {
                e.preventDefault();
                var $this = $(this);
                var $panel = $this.closest('.panel');

                var api = $panel.data('panel-api', iframe$);
                var callback = $this.data('loadCallback', iframe$);

                if ($.isFunction(_window[callback])) {
                    api.load(_window[callback]);
                } else {
                    api.load();
                }
            });
        },

        init: function (context, iframe) {
            /*
            * 这里所能触发的自定义事件仅为统一和frame中的。父级无法触发子级自定义事件
            * */
            var iframe$ = iframe ? iframe.$ : $;

            $('.panel', context).each(function () {
                var $this = $(this);

                var isFullscreen = false;
                var isClose = false;
                var isCollapse = false;
                var isLoading = false;

                var $fullscreen = $this.find('[data-toggle="panel-fullscreen"]');
                var $collapse = $this.find('[data-toggle="panel-collapse"]');
                var $loading;
                var self = this;

                if ($this.hasClass('is-collapse')) {
                    isCollapse = true;
                }

                var api = {
                    load: function (callback) {
                        var type = $this.data('loader-type', iframe$);
                        if (!type) {
                            type = 'default';
                        }

                        $loading = $('<div class="panel-loading">' +
                            '<div class="loader loader-' + type + '"></div>' +
                            '</div>');

                        $loading.appendTo($this);

                        $this.addClass('is-loading');
                        $this.trigger('loading.uikit.panel');
                        isLoading = true;

                        if ($.isFunction(callback)) {
                            callback.call(self, this.done);
                        }
                    },
                    done: function () {
                        if (isLoading === true) {
                            $loading.remove();
                            $this.removeClass('is-loading');
                            $this.trigger('loading.done.uikit.panel');
                        }
                    },
                    toggleContent: function () {
                        if (isCollapse) {
                            this.showContent();
                        } else {
                            this.hideContent();
                        }
                    },

                    showContent: function () {
                        if (isCollapse !== false) {
                            $this.removeClass('is-collapse');

                            if ($collapse.hasClass('wb-plus')) {
                                $collapse.removeClass('wb-plus').addClass('wb-minus');
                            }

                            $this.trigger('shown.uikit.panel');

                            isCollapse = false;
                        }
                    },

                    hideContent: function () {
                        if (isCollapse !== true) {
                            $this.addClass('is-collapse');

                            if ($collapse.hasClass('wb-minus')) {
                                $collapse.removeClass('wb-minus').addClass('wb-plus');
                            }

                            $this.trigger('hidden.uikit.panel');
                            isCollapse = true;
                        }
                    },

                    toggleFullscreen: function () {
                        if (isFullscreen) {
                            this.leaveFullscreen();
                        } else {
                            this.enterFullscreen();
                        }
                    },
                    enterFullscreen: function () {
                        if (isFullscreen !== true) {
                            $this.addClass('is-fullscreen');

                            if ($fullscreen.hasClass('wb-expand')) {
                                $fullscreen.removeClass('wb-expand').addClass('wb-contract');
                            }

                            $this.trigger('enter.fullscreen.uikit.panel');
                            isFullscreen = true;
                        }
                    },
                    leaveFullscreen: function () {
                        if (isFullscreen !== false) {
                            $this.removeClass('is-fullscreen');

                            if ($fullscreen.hasClass('wb-contract')) {
                                $fullscreen.removeClass('wb-contract').addClass('wb-expand');
                            }

                            $this.trigger('leave.fullscreen.uikit.panel');
                            isFullscreen = false;
                        }
                    },
                    toggle: function () {
                        if (isClose) {
                            this.open();
                        } else {
                            this.close();
                        }
                    },
                    open: function () {
                        $this.on('open.uikit.panel', function () {
                            var $that = $(this);

                            if($that.siblings().length){
                                $that.show();
                            }else{
                                $that.parent().show();
                            }
                        });

                        if (isClose !== false) {
                            $this.removeClass('is-close');
                            $this.trigger('open.uikit.panel');

                            isClose = false;
                        }
                    },
                    close: function () {
                        $this.on('close.uikit.panel', function () {
                            var $that = $(this);

                            if($that.siblings().length){
                                $that.hide();
                            }else{
                                $that.parent().hide();
                            }
                        });

                        if (isClose !== true) {

                            $this.addClass('is-close');
                            $this.trigger('close.uikit.panel');

                            isClose = true;
                        }
                    }
                };

                $this.data('panel-api', api, iframe$);
            });
        }
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("peityBar", {
        mode: "init",
        defaults: {
            delimiter: ",",
            fill: [$.colors("purple", 400)],
            height: 18,
            max: null,
            min: 0,
            padding: 0.1,
            width: 44
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (!iframe$.fn.peity) {
                return;
            }

            defaults = $.components.getDefaults("peityBar");

            $('[data-plugin="peityBar"]', context).each(function () {
                var $this = iframe$(this),
                    options = $this.data();

                if (options.skin) {
                    if ($.colors(options.skin)) {
                        var skinColors = $.colors(options.skin);
                        defaults.fill = [skinColors[400]];
                    }
                }

                options = $.extend(true, {}, defaults, options);

                $this.peity('bar', options);
            });
        }
    });

    $.components.register("peityDonut", {
        mode: "init",
        defaults: {
            delimiter: null,
            fill: [$.colors("purple", 700), $.colors("purple", 400), $.colors("purple", 200)],
            height: null,
            innerRadius: null,
            radius: 11,
            width: null
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (!iframe$.fn.peity) {
                return;
            }

            defaults = $.components.getDefaults("peityDonut");

            $('[data-plugin="peityDonut"]', context).each(function () {
                var $this = iframe$(this),
                    options = $this.data();

                if (options.skin) {
                    if ($.colors(options.skin)) {
                        var skinColors = $.colors(options.skin);
                        defaults.fill = [skinColors[700], skinColors[400], skinColors[200]];
                    }
                }

                options = $.extend(true, {}, defaults, options);

                $this.peity('donut', options);
            });
        }
    });

    $.components.register("peityLine", {
        mode: "init",
        defaults: {
            delimiter: ",",
            fill: [$.colors("purple", 200)],
            height: 18,
            max: null,
            min: 0,
            stroke: $.colors("purple", 600),
            strokeWidth: 1,
            width: 44
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (!iframe$.fn.peity) {
                return;
            }

            defaults = $.components.getDefaults("peityLine");

            $('[data-plugin="peityLine"]', context).each(function () {
                var $this = iframe$(this),
                    options = $this.data();

                if (options.skin) {
                    if ($.colors(options.skin)) {
                        var skinColors = $.colors(options.skin);
                        defaults.fill = [skinColors[200]];
                        defaults.stroke = skinColors[600];
                    }
                }

                options = $.extend(true, {}, defaults, options);

                $this.peity('line', options);
            });
        }
    });

    $.components.register("peityPie", {
        mode: "init",
        defaults: {
            delimiter: null,
            fill: [$.colors("purple", 700), $.colors("purple", 400), $.colors("purple", 200)],
            height: null,
            radius: 11,
            width: null
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (!iframe$.fn.peity) {
                return;
            }

            defaults = $.components.getDefaults("peityPie");

            $('[data-plugin="peityPie"]', context).each(function () {
                var $this = iframe$(this),
                    options = $this.data();

                if (options.skin) {
                    if ($.colors(options.skin)) {
                        var skinColors = $.colors(options.skin);
                        defaults.fill = [skinColors[700], skinColors[400], skinColors[200]];
                    }
                }

                options = $.extend(true, {}, defaults, options);

                $this.peity('pie', options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("plyr", {
        mode: "init",
        default: {
            i18n: {
                restart: "重新开始",
                rewind: "向后 {seektime} 秒",
                play: "播放",
                pause: "暂停",
                forward: "向前 {seektime} 秒",
                buffered: "缓冲",
                currentTime: "当前时间",
                duration: "持续时间",
                volume: "声音",
                toggleMute: "切换静音",
                toggleCaptions: "切换字幕",
                toggleFullscreen: "切换全屏"
            }
        },
        init: function (context, iframe) {
            var plyr = (iframe && iframe.plyr) ? iframe.plyr : window.plyr;

            if (typeof plyr === "undefined") {
                return;
            }

            (function (d, u) {
                var a = new XMLHttpRequest(),
                    b = d.body;

                // Check for CORS support
                if ("withCredentials" in a) {
                    a.open("GET", u, true);
                    a.send();
                    a.onload = function () {
                        var c = d.createElement("div");
                        c.style.display = "none";
                        c.innerHTML = a.responseText;
                        b.insertBefore(c, b.childNodes[0]);
                    };
                }
            })(context, "https://cdn.plyr.io/1.1.5/sprite.svg");

            plyr.setup();
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("rating", {
        mode: "init",
        defaults: {
            targetKeep: true,
            icon: "font",
            starType: "i",
            starOff: "icon wb-star",
            starOn: "icon wb-star orange-600",
            cancelOff: "icon wb-minus-circle",
            cancelOn: "icon wb-minus-circle orange-600",
            starHalf: "icon wb-star-half orange-500",
            cancelHint: '取消评分',
            hints: ['很差', '差', '一般', '好', '非常好']
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $;

            if (!iframe$.fn.raty) {
                return;
            }

            var defaults = this.defaults;

            $('[data-plugin="rating"]', context).each(function () {
                var $this = iframe$(this);

                var options = $.extend(true, {}, defaults, $this.data());


                if (options.hints && typeof options.hints === 'string') {
                    options.hints = options.hints.split(',');
                }

                $this.raty(options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("select2", {
        mode: "default",
        defaults: {
            width: "style",
            language: "zh-CN"
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("selectable", {
        mode: "init",
        defaults: {
            allSelector: '.selectable-all',
            itemSelector: '.selectable-item',
            rowSelector: 'tr',
            rowSelectable: false,
            rowActiveClass: 'active',
            onChange: null
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (!iframe$.fn.asSelectable) {
                return;
            }

            defaults = $.components.getDefaults('selectable');

            $('[data-plugin="selectable"], [data-selectable="selectable"]', context).each(function () {
                var options = $.extend({}, defaults, $(this).data(iframe$));
                iframe$(this).asSelectable(options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("slidePanel", {
        mode: "manual",
        defaults: {
            closeSelector: '.slidePanel-close',
            mouseDragHandler: '.slidePanel-handler',
            loading: {
                template: function (options) {
                    return '<div class="' + options.classes.loading + '">' +
                        '<div class="loader loader-default"></div>' +
                        '</div>';
                },
                showCallback: function (options) {
                    this.$el.addClass(options.classes.loading + '-show');
                },
                hideCallback: function (options) {
                    this.$el.removeClass(options.classes.loading + '-show');
                }
            }
        }
    });
})(window, document, jQuery);

(function (window, document, $) {
    "use strict";

    $.components.register("slimScroll", {
        mode: "default",
        defaults: {
            height : '100%',
            size : '4px',
            color: $.configs.colors['blue-grey']['500'],
            position : 'right',
            distance : '1px',
            railVisible : true,
            railColor : $.configs.colors['blue-grey']['300'],
            railOpacity : 0.1,
            railDraggable : true,
            wheelStep : 15,
            borderRadius: '4px',
            railBorderRadius : '4px'
        }
    });

})(window, document, jQuery);

(function(window, document, $){
    "use strict";

    $.components.register("summernote", {
        mode: "default",
        defaults: {
            height: 300
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("switchery", {
        mode: "init",
        defaults: {
            color: $.colors("purple", 600)
        },
        init: function (context, iframe) {
            var Switchery = (iframe && iframe.Switchery) ? iframe.Switchery : window.Switchery,
                iframe$ = iframe ? iframe.$ : $, defaults;

            if (typeof Switchery === "undefined") {
                return;
            }

            defaults = $.components.getDefaults("switchery");

            $('[data-plugin="switchery"]', context).each(function () {
                var options = $.extend({}, defaults, $(this).data(iframe$));

                new Switchery(this, options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("table", {
        mode: "api",
        api: function (context) {
            var touch = typeof context.ontouchstart !== 'undefined',
                type = 'click';

            if (touch) {
                type = 'touchstart';
            }

            $(context).on(type, '.table-section', function (e) {
                if ("checkbox" !== e.target.type && "button" !== e.target.type && "a" !== e.target.tagName.toLowerCase() && !$(e.target).parent("div.checkbox-custom").length) {
                    if ($(this).hasClass("active")) {
                        $(this).removeClass("active");
                    } else {
                        $(this).siblings('.table-section').removeClass("active");
                        $(this).addClass("active");
                    }
                }
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("verticalTab", {
        mode: "init",
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $;

            if (!iframe$.fn.matchHeight) {
                return;
            }

            $('.nav-tabs-vertical', context).each(function () {
                iframe$(this).children().matchHeight();
            });
        }
    });

    $.components.register("horizontalTab", {
        mode: "init",
        init: function (context,iframe) {
            var iframe$ = iframe ? iframe.$ : $, $nav;

            if (!iframe$.fn.responsiveHorizontalTabs) {
                return;
            }

            $nav = $('[data-approve="nav-tabs"]', context);
            $nav.each(function () {
                var $item = iframe$(this),
                    options = $.extend(true, {}, $item.data());

                $item.responsiveHorizontalTabs(options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("taskList", {
        mode: "api",
        api: function (context) {
            $(context).on('change.site.task', '[data-role="task"]', function () {
                var $list = $(this),
                    $checkbox = $list.find('[type="checkbox"]');
                if ($checkbox.is(':checked')) {
                    $list.addClass('task-done');
                } else {
                    $list.removeClass('task-done');
                }
            });

            $('[data-role="task"]').trigger('change.site.task');
        }
    });
})(window, document, jQuery);
(function (window, document, $) {
    "use strict";

    $.components.register("toastr", {
        mode: "api",
        defaults: {},
        api: function (context, iframe) {
            var toastr = (iframe && iframe.toastr) ? iframe.toastr : window.toastr,
                iframe$ = iframe ? iframe.$ : $, defaults;

            if (typeof toastr === "undefined") {
                return;
            }
            defaults = $.components.getDefaults("toastr");

            $(context).on('click.site.toastr', '[data-plugin="toastr"]', function (e) {
                e.preventDefault();
                
                var $this = $(this),
                    options = $.extend(true, {}, defaults, $this.data(iframe$)),
                    message = options.message || '',
                    type = options.type || "info",
                    title = options.title || undefined;

                switch (type) {
                    case "success":
                        toastr.success(message, title, options);
                        break;
                    case "warning":
                        toastr.warning(message, title, options);
                        break;
                    case "error":
                        toastr.error(message, title, options);
                        break;
                    case "info":
                        toastr.info(message, title, options);
                        break;
                    default:
                        toastr.info(message, title, options);
                }
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("toolbar", {
        mode: "init",
        defaults: {
            adjustment: 15,
            zIndex:1900
        },
        init: function (context, iframe) {
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (!iframe$.fn.toolbar) {
                return;
            }

            defaults = $.components.getDefaults("toolbar");

            $('[data-plugin="toolbar"]', context).each(function () {
                var $this = iframe$(this);
                var content = $this.data("toolbar");

                var options = $.extend(true, {}, defaults);

                if (content) {
                    options.content = content;
                }

                $this.toolbar(options);
            });
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("twbsPagination", {
        mode: "default",
        defaults: {
            first: '<span class="icon fa-angle-double-left" title="第一页"></span>',
            prev: '<span class="icon fa-angle-left" title="上一页"></span>',
            next: '<span class="icon fa-angle-right" title="下一页"></span>',
            last: '<span class="icon fa-angle-double-right" title="最后一页"></span>'
        }
    });
})(window, document, jQuery);
(function(window, document, $){
    "use strict";

    $.components.register("webuiPopover", {
        mode: "default",
        defaults: {
            trigger: "click",
            width: 320,
            multi: true,
            cloaseable: false,
            style: "",
            delay: 300,
            padding: true
        }
    });
})(window, document, jQuery);