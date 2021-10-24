/**
 * UI v1.1.0
 * Copyright 2017-2018 Muyao
 * Licensed under the Muyao License 1.0 
 */
(function (window, document, $) {
    'use strict';
    
    // 项目名称
    $.ctx = location.pathname.substring(0,location.pathname.lastIndexOf("/")+1);
    

    // 获取颜色配置信息
    $.colors = function (name, level) {
        if (!$.configs.colors && typeof $.configs.colors[name] === 'undefined') {
            return null;
        }

        if (level && typeof $.configs.colors[name][level] !== 'undefined') {
            return $.configs.colors[name][level];
        } else {
            return $.configs.colors[name];
        }
    };

    // 3rd调用参数
    $.po = function (name, options) {
        var defaults = $.components.getDefaults(name);
        return $.extend(true, {}, defaults, options);
    };

    // 配置信息存储管理
    $.configs = $.configs || {};

    $.extend($.configs, {
        _data: {},
        get: function () {
            var data = this._data, name,
                _argLen = arguments.length;

            if (_argLen === 0) {
                return;
            }
            for (var i = 0; i < _argLen; i++) {
                name = arguments[i];

                data = data[name];
            }

            return data;
        },
        set: function (name, value) {
            if (this.get(name)) {
                console.error('configs:' + name + '对象已经存在了');
            } else {
                this._data[name] = value;
            }
        },
        extend: function (name, options) {
            return $.extend(true, this.get(name), options);
        }
    });

    // 实现插件的提前检测和调用
    $.components = $.components || {};

    $.extend($.components, {
        _components: {},
        register: function (name, obj) {
            this._components[name] = obj;
        },
        init: function (context, iframe, name, args) {
            var self = this, obj;
            args = args || true;

            if (typeof name === 'undefined') {
                $.each(this._components, function (name) {
                    self.init(context, iframe, name, args);
                });
            } else {
                context = context || document;

                obj = this.get(name);

                if (!obj) {
                    return;
                }

                switch (obj.mode) {
                    case 'default':
                        return this._initDefault(name, context, iframe);
                    case 'init':
                        return this._initComponent(obj, context, iframe);
                    case 'api':
                        return this._initApi(obj, context, args, iframe);
                    default:
                        this._initApi(obj, context, args, iframe);
                        this._initComponent(obj, context, iframe);
                        return;
                }
            }
        },
        _initDefault: function (name, context, iframe) { // jquery 3rd的基本用法
            var iframe$ = iframe ? iframe.$ : $, defaults;

            if (!iframe$.fn[name]) {
                return;
            }

            defaults = this.getDefaults(name);

            $('[data-plugin=' + name + ']', context).each(function () {
                var $this = iframe$(this),
                    options = $.extend(true, {}, defaults, $this.data());

                $this[name](options);
            });
        },
        _initComponent: function (obj, context, iframe) { // jquery 3rd的高级用法
            if ($.isFunction(obj.init)) {
                obj.init.call(obj, context, iframe);
            }
        },
        _initApi: function (obj, context, args, iframe) { // 其他处理
            if (args && $.isFunction(obj.api)) {
                obj.api.call(obj, context, iframe);
            }
        },
        getDefaults: function (name) {
            var component = this.get(name);

            return component && typeof component.defaults !== "undefined" ? component.defaults : {};
        },
        get: function (name) {
            if (typeof this._components[name] !== "undefined") {
                return this._components[name];
            } else {
                console.error('component:' + name + ' 脚本文件没有注册任何信息！');
                return undefined;
            }
        }
    });

    // 本地存储对象操作 localStorage
    $.storage = $.storage || {};

    $.extend($.storage, {
        set: function (key, value, time) { //存入缓存
            var cacheExpireDate, cacheVal;

            if (!localStorage) {
                console.error('该浏览器不支持localStorage对象');
            }

            if (!key || !value) {
                return null;
            }

            // 定时情况
            if (!time || isNaN(time)) {
                cacheExpireDate = null;
            } else {
                cacheExpireDate = (new Date() - 1) + time * 1000 * 60;
            }

            cacheVal = {val: value, exp: cacheExpireDate};

            if (typeof value === "object") {
                cacheVal = JSON.stringify(cacheVal);
            }

            localStorage.setItem(key, cacheVal);
        },
        get: function (key) { // 获取存储内容
            var value, now, exp;

            if (!localStorage) {
                console.error('该浏览器不支持localStorage对象');
            }

            value = localStorage.getItem(key);

            if (!value) {
                return null;
            }

            if (typeof value === 'string') {
                value = JSON.parse(value);
            }

            now = new Date() - 1;
            exp = value.exp;

            if (exp && now > exp) { // 缓存内容已过期
                this.remove(key);
                return null;
            }

            return value.val;
        },
        remove: function (key) { // 删除指定缓存
            if (!localStorage) {
                console.error('该浏览器不支持localStorage对象');
            }

            localStorage.removeItem(key);
        }
    });

    // 本地存储对象操作 sessionStorage
    $.sessionStorage = $.sessionStorage || {};

    $.extend($.sessionStorage, {
        set: function (key, value) { //存入缓存
            if (!sessionStorage) {
                console.error('该浏览器不支持sessionStorage对象');
            }

            if (!key || !value) {
                return null;
            }

            if (typeof value === "object") {
                value = JSON.stringify(value);
            }

            sessionStorage.setItem(key, value);
        },
        get: function (key) { // 获取存储内容
            var value;

            if (!sessionStorage) {
                console.error('该浏览器不支持sessionStorage对象');
            }

            value = sessionStorage.getItem(key);

            if (!value) {
                return null;
            }

            if (typeof value === 'string') {
                value = JSON.parse(value);
            }

            return value;
        },
        remove: function (key) { // 删除指定缓存
            if (!sessionStorage) {
                console.error('该浏览器不支持sessionStorage对象');
            }

            sessionStorage.removeItem(key);
        }
    });

    // 网站基础设置
    $.site = $.site || {};

    function dataAttr(elem, key, data, iJquery) {
        var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            rmultiDash = /([A-Z])/g;

        // If nothing was found internally, try to fetch any
        // data from the HTML5 data-* attribute
        if (data === undefined && elem.nodeType === 1) {

            var name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();

            data = elem.getAttribute(name);

            if (typeof data === "string") {
                try {
                    data = data === "true" ? true :
                        data === "false" ? false :
                            data === "null" ? null :

                                // Only convert to a number if it doesn't change the string
                                +data + "" === data ? +data :
                                    rbrace.test(data) ? $.parseJSON(data) :
                                        data;
                } catch (e) {
                }

                // Make sure we set the data so it isn't changed later
                iJquery.data(elem, key, data);

            } else {
                data = undefined;
            }
        }

        return data;
    }

    $.fn.extend({
        data: function (key, value, iJquery) {
            var i, name, data,
                elem = this[0],
                attrs = elem && elem.attributes;

            // Special expections of .data basically thwart jQuery.access,
            // so implement the relevant behavior ourselves

            // Gets all values
            if (key === undefined || $.isFunction(key)) {
                iJquery = key || $;

                if (this.length) {
                    data = iJquery.data(elem);

                    if (elem.nodeType === 1 && !iJquery._data(elem, "parsedAttrs")) {
                        i = attrs.length;
                        while (i--) {

                            // Support: IE11+
                            // The attrs elements can be null (#14894)
                            if (attrs[i]) {
                                name = attrs[i].name;
                                if (name.indexOf("data-") === 0) {
                                    name = iJquery.camelCase(name.slice(5));
                                    dataAttr(elem, name, data[name], iJquery);
                                }
                            }
                        }
                        iJquery._data(elem, "parsedAttrs", true);
                    }
                }

                return data;
            }

            if($.isFunction(value) && value.fn.jquery){
                return elem ? dataAttr(elem, key, value.data(elem, key), value) : undefined;
            }

            // Sets multiple values
            if (typeof key === "object") {
                return this.each(function () {
                    value && value.data(this, key);
                });
            }

            iJquery = iJquery || $;

            return arguments.length > 1 ?

                // Sets one value
                this.each(function () {
                    iJquery.data(this, key, value);
                }) :

                // Gets one value
                // Try to fetch any internally stored data first
                elem ? dataAttr(elem, key, iJquery.data(elem, key), iJquery) : undefined;
        }
    });

})(window, document, jQuery);