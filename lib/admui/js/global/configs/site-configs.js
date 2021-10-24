/**
 * UI v1.1.0
 * Copyright 2017-2018 Muyao
 * Licensed under the Muyao License 1.0 
 */
(function (window, $) {
    "use strict";

    /* global layer */

    $.configs.set('site', {
        fontFamily: '"Helvetica Neue", Helvetica, Tahoma, Arial, "Microsoft Yahei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif'
    });

    $.configs.colors = {
        "red": {
            "100": "#ffeaea",
            "200": "#fad3d3",
            "300": "#fab4b4",
            "400": "#fa9898",
            "500": "#fa7a7a",
            "600": "#f96868",
            "700": "#e9595b",
            "800": "#d6494b"
        },
        "pink": {
            "100": "#fce4ec",
            "200": "#ffccde",
            "300": "#fba9c6",
            "400": "#fb8db4",
            "500": "#f978a6",
            "600": "#f96197",
            "700": "#f44c87",
            "800": "#e53b75"
        },
        "purple": {
            "100": "#f6f2ff",
            "200": "#e3dbf4",
            "300": "#d2c5ec",
            "400": "#bba7e4",
            "500": "#a58add",
            "600": "#926dde",
            "700": "#7c51d1",
            "800": "#6d45bc"
        },
        "indigo": {
            "100": "#edeff9",
            "200": "#dadef5",
            "300": "#bcc5f4",
            "400": "#9daaf3",
            "500": "#8897ec",
            "600": "#677ae4",
            "700": "#5166d6",
            "800": "#465bd4"
        },
        "blue": {
            "100": "#e8f1f8",
            "200": "#d5e4f1",
            "300": "#bcd8f1",
            "400": "#a2caee",
            "500": "#89bceb",
            "600": "#62a8ea",
            "700": "#4e97d9",
            "800": "#3583ca"
        },
        "cyan": {
            "100": "#ecf9fa",
            "200": "#d3eff2",
            "300": "#baeaef",
            "400": "#9ae1e9",
            "500": "#77d6e1",
            "600": "#57c7d4",
            "700": "#47b8c6",
            "800": "#37a9b7"
        },
        "teal": {
            "100": "#ecfdfc",
            "200": "#cdf4f1",
            "300": "#99e1da",
            "400": "#79d1c9",
            "500": "#56bfb5",
            "600": "#3aa99e",
            "700": "#269b8f",
            "800": "#178d81"
        },
        "green": {
            "100": "#e7faf2",
            "200": "#bfedd8",
            "300": "#9fe5c5",
            "400": "#7dd3ae",
            "500": "#5cd29d",
            "600": "#46be8a",
            "700": "#36ab7a",
            "800": "#279566"
        },
        "light-green": {
            "100": "#f1f7ea",
            "200": "#e0ecd1",
            "300": "#cadfb1",
            "400": "#bad896",
            "500": "#acd57c",
            "600": "#9ece67",
            "700": "#83b944",
            "800": "#70a532"
        },
        "yellow": {
            "100": "#fffae7",
            "200": "#f9eec1",
            "300": "#f6e7a9",
            "400": "#f8e59b",
            "500": "#f7e083",
            "600": "#f7da64",
            "700": "#f9cd48",
            "800": "#fbc02d"
        },
        "orange": {
            "100": "#fff3e6",
            "200": "#ffddb9",
            "300": "#fbce9d",
            "400": "#f6be80",
            "500": "#f4b066",
            "600": "#f2a654",
            "700": "#ec9940",
            "800": "#e98f2e"
        },
        "brown": {
            "100": "#fae6df",
            "200": "#e2bdaf",
            "300": "#d3aa9c",
            "400": "#b98e7e",
            "500": "#a17768",
            "600": "#8d6658",
            "700": "#7d5b4f",
            "800": "#715146"
        },
        "grey": {
            "100": "#fafafa",
            "200": "#eeeeee",
            "300": "#e0e0e0",
            "400": "#bdbdbd",
            "500": "#9e9e9e",
            "600": "#757575",
            "700": "#616161",
            "800": "#424242"
        },
        "blue-grey": {
            "100": "#f3f7f9",
            "200": "#e4eaec",
            "300": "#ccd5db",
            "400": "#a3afb7",
            "500": "#76838f",
            "600": "#526069",
            "700": "#37474f",
            "800": "#263238"
        }
    };

    // 检查IE，在IE环境下设置ajax禁止缓存
    var isIE = (function () {
        return !!window.ActiveXObject || "ActiveXObject" in window;
    });

    if(isIE){
        $.ajaxSetup({cache: false});
    }

    //// layer 弹层组件配置
    //if(typeof layer !== 'undefined'){
    //    layer.config({
    //        extend: '../retina.css'
    //    });
    //}

})(window, $);