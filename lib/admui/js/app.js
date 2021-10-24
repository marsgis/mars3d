/**
 * UI v1.1.0
 * Copyright 2017-2018 Muyao
 * Licensed under the Muyao License 1.0 
 */
(function (window, document, $) {
    'use strict';

    // 父级dom节点
    $.parentFrame = $(window.parent.document);

    // 父级方法&属性
    var parentFrame = window.parentFrame = window.parent;

    // 项目名称
    $.ctx = parentFrame.$.ctx;

    // 配置颜色获取方法
    $.colors = parentFrame.$.colors;

    // 注册组件默认配置参数获取方法
    $.po = parentFrame.$.po;

    // 本地存储对象操作
    $.storage = parentFrame.$.storage;
    $.sessionStorage = parentFrame.$.sessionStorage;

    // 网址基础设置对象
    $.site = parentFrame.$.site;
    if ($.site && $.site.contentTabs)
        $.site.contentTabs.ifameTabs(document);

    // 配置信息存储管理
    $.configs = parentFrame.$.configs;

    // 注册组件初始化
    if (parentFrame.$.components)
        parentFrame.$.components.init(document, window);

    // 公用对象
    window.Breakpoints = parentFrame.Breakpoints;
    window.toastr = parentFrame.toastr;
    window.layer = parentFrame.layer;
    window.haoutil = parentFrame.haoutil;
    window.notifyFn = parentFrame.$.notifyFn;

    // 自定义扩展对象
    var _objExtend = _objExtend || {};

    $.extend(_objExtend, {
        _queue: {
            prepare: [],
            run: [],
            complete: []
        },
        run: function () {
            var self = this;
            this._dequeue('prepare', function () {
                self._trigger('before.run', self);
            });

            this._dequeue('run', function () {
                self._dequeue('complete', function () {
                    self._trigger('after.run', self);
                });
            });
        },
        _dequeue: function (name, done) { // 队列当前状态离队，进行下一步操作
            var self = this,
                queue = this._getQueue(name),
                fn = queue.shift(),
                next = function () {
                    self._dequeue(name, done);
                };

            if (fn) {
                fn.call(this, next);
            } else if ($.isFunction(done)) {
                done.call(this);
            }
        },
        _getQueue: function (name) { // 获取队列状态信息
            if (!$.isArray(this._queue[name])) {
                this._queue[name] = [];
            }

            return this._queue[name];
        },
        extend: function (obj) { // 公用模块对象扩展方法
            $.each(this._queue, function (name, queue) {
                if ($.isFunction(obj[name])) {
                    queue.unshift(obj[name]);

                    delete obj[name];
                }
            });
            $.extend(this, obj);
            return this;
        },
        _trigger: function (name, data, $el) { // 离队状态执行动作

            if (typeof name === 'undefined') {
                return;
            }
            if (typeof $el === 'undefined') {
                $el = $("#admui-pageContent");
            }

            $el.trigger(name + '.app', data);
        }
    });

    // 通用功能对象（可配置增加，也可扩展）
    var _app = {
        pageAside: function () { // 小屏幕下侧边栏（展开&收起）操作
            var pageAside = $(".page-aside"),
                isOpen = pageAside.hasClass('open');

            pageAside.toggleClass('open', !isOpen);
        },
        run: function (next) {
            var self = this;

            // 侧边栏开关
            $(document).on('click', '.page-aside-switch', function (e) {
                self.pageAside();
                e.stopPropagation();
            });

            next();
        }
    };

    window.App = $.extend({}, _objExtend);
    App.extend(_app);

})(window, document, jQuery);