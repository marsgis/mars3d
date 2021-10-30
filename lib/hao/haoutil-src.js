/**
*  JS常用静态方法类库  
*  源码地址：https://github.com/muyao1987/haoutil
*  版本信息：v2.5.4
*  编译日期：2021-10-22 19:40:50    
*  版权所有：Copyright by 火星科技 木遥  http://marsgis.cn
*/
var haoutil = haoutil || {};

if(typeof exports === 'object'){ 
    exports.haoutil = haoutil
}
else{
    window.haoutil = haoutil
}


haoutil.version = "2.5.4";
haoutil.name = "木遥 通用常用JS方法类库";
haoutil.author = "木遥 , 微信: http://marsgis.cn/weixin.html";
haoutil.update = "2021-10-19";
haoutil.website ='https://github.com/muyao1987/haoutil'




haoutil.msg = function (msg) {
    if(haoutil.isutil.isNull(msg)){
        msg = "未知";
    }
    else{
        if(typeof msg == 'object'){
            msg = JSON.stringify(msg);
        }
    }
    if (window.toastr)//此方法需要引用toastr 
        toastr.info(msg);
    else if (window.layer)
        layer.msg(msg);//此方法需要引用layer.js
    else
        alert(msg);
};
haoutil.tip = haoutil.msg;

haoutil.oneMsg = function (msg, key) {
    if (!haoutil.storage.get(key)) {
        haoutil.msg(msg);
        haoutil.storage.add(key, true);
    }
}

haoutil.alert = function (msg, title) {
    if(haoutil.isutil.isNull(msg)){
        msg = "未知";
    }
    else{
        if(typeof msg == 'object'){
            msg = JSON.stringify(msg);
        }
    }
    if (window.layer)//此方法需要引用layer.js
        layer.alert(msg, {
            title: title || '提示',
            skin: 'layui-layer-lan layer-mars-dialog',
            closeBtn: 0,
            anim: 0
        });
    else
        alert(msg);
};

haoutil.loading = {
    index: -1,
    show: function (param) {
        this.close();

        if (window.NProgress) {//此方法需要引用NProgress 
            param = param || {};
            if (param.color) {
                param.template = '<div class="bar ' + (param.className || '') + '" style="background-color:' + param.color + ';" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>';
            }
            else {
                param.template = '<div class="bar ' + (param.className || '') + '" role="bar"></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>';
            }

            NProgress.configure(param);
            NProgress.start();
        }
        else if (window.layer) {//此方法需要引用layer.js
            this.index = layer.load(2, { shade: [0.3, '#000000'] });
        }
    },
    hide: function () {
        this.close();
    },
    close: function () {
        if (window.NProgress) {
            NProgress.done(true);
        }
        else if (window.layer) {
            if (this.index != -1)
                layer.close(this.index);
            this.index = -1;
        }
    }
};
//js原生对象扩展


// //标识是否扩展数组对象
// if (!window.noArrayPrototype) {
//     //扩展array数组方法,不要用for(var i in arr)来循环数组
//     // Array.prototype.indexOf = Array.prototype.indexOf || function (val) {
//     //     for (var i = 0; i < this.length; i++) {
//     //         if (this[i] == val) return i;
//     //     }
//     //     return -1;
//     // };
//     // Array.prototype.remove = Array.prototype.remove || function (val) {
//     //     for (var i = 0; i < this.length; i++) {
//     //         if (this[i] == val) {
//     //             this.splice(i, 1);
//     //             break;
//     //         }
//     //     }
//     // };
//     // Array.prototype.insert = Array.prototype.insert || function (item, index) {
//     //     if (index == null) index = 0;
//     //     this.splice(index, 0, item);
//     // }; 
// }

 

String.prototype.startsWith = String.prototype.startsWith || function (str) {
    return this.slice(0, str.length) == str;
}; 
//判断当前字符串是否以str结束 
String.prototype.endsWith = String.prototype.endsWith || function (str) {
    return this.slice(-str.length) == str;
};
String.prototype.replaceAll = String.prototype.replaceAll || function (oldstring, newstring) {
    return this.replace(new RegExp(oldstring, "gm"), newstring);
}

/**  
 * 对Date的扩展，将 Date 转化为指定格式的String 
 * 月(M)、日(d)、12小时(h)、24小时(H)、分(m)、秒(s)、周(E)、季度(q) 可以用 1-2 个占位符 
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字) 
 * 
 * (new Date()).format("yyyy-MM-dd HH:mm:ss") ==> 2017-01-09 08:35:26 
 * (new Date()).format("yyyy-M-d HH:mm:ss") ==> 2017-1-9 08:35:26
 * (new Date()).format("yyyy-M-d h:m:s.S") ==> 2016-7-2 8:9:4.18 
 * (new Date()).format("yyyy-MM-dd hh:mm:ss.S") ==> 2016-07-02 08:09:04.423 
 * (new Date()).format("yyyy-MM-dd E HH:mm:ss") ==> 2016-03-10 二 20:09:04 
 * (new Date()).format("yyyy-MM-dd EE hh:mm:ss") ==> 2016-03-10 周二 08:09:04 
 * (new Date()).format("yyyy-MM-dd EEE hh:mm:ss") ==> 2016-03-10 星期二 08:09:04 
 */
Date.prototype.format = function (fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份       
        "d+": this.getDate(), //日       
        "h+": this.getHours() % 12 == 0 ? 12 : this.getHours() % 12, //小时       
        "H+": this.getHours(), //小时       
        "m+": this.getMinutes(), //分       
        "s+": this.getSeconds(), //秒       
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度       
        "S": this.getMilliseconds() //毫秒       
    };
    var week = {
        "0": "\u65e5",
        "1": "\u4e00",
        "2": "\u4e8c",
        "3": "\u4e09",
        "4": "\u56db",
        "5": "\u4e94",
        "6": "\u516d"
    };
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "\u661f\u671f" : "\u5468") : "") + week[this.getDay() + ""]);
    }
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
    return fmt;
};
/* 2017-10-27 08:39:39 | 修改 木遥（微信:  http://marsgis.cn/weixin.html） */
haoutil.array = (function () { 
  //============内部私有属性及方法============

  function indexOf(arr,val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == val) return i;
    }
    return -1;
  }
  function remove(arr,val) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] == val) {
        arr.splice(i, 1);
        break;
      }
    }
  }
  function insert(arr,item, index) {
    if (index == null) index = 0;
    arr.splice(index, 0, item);
  }

  //===========对外公开的属性及方法=========
  return {
    indexOf: indexOf,
    remove: remove,
    insert: insert, 
  };
})();

/* 2017-12-8 09:39:39 | 修改 木遥（微信:  http://marsgis.cn/weixin.html） */
haoutil.color = (function () {
    // "颜色 相关操作类";
    //============内部私有属性及方法============
     

    //随机颜色
    function random() {
        return '#' +

          (function (color) {

              return (color += '0123456789abcdef'[Math.floor(Math.random() * 16)]) && (color.length == 6) ? color : arguments.callee(color);

          })('');
    }

     
    //===========对外公开的属性及方法=========
    return { 
        random: random
    };
})();
/* 2017-10-10 13:32:56 | 修改 木遥（微信:  http://marsgis.cn/weixin.html） */
haoutil.cookie = (function () {
    //"cookie 相关操作类";
    //============内部私有属性及方法============ 
    var _isH5Mobile;
    function isH5Mobile(value) {
        _isH5Mobile = value;
    }

    //添加cookie
    function add(name, value, days) {

        //判断是否设置过期时间,0代表关闭浏览器时失效
        var date;
        if (days > 0) {
            date = new Date();
            date.setTime(date.getTime + days * 24 * 60 * 60 * 1000); //单位是天后失效
        }
        else {
            date = new Date(0x7fffffff * 1e3);
        }
        var cookieString = name + "=" + escape(value) + "; expires=" + date.toGMTString();

        if (_isH5Mobile && window['plus'] != null) {
            plus.navigator.setCookie(name, cookieString);
        } else {
            document.cookie = cookieString;
        }
    }

    //获取cookie
    function get(name) {
        var strCookie
        if (_isH5Mobile && window['plus'] != null) {
            strCookie = plus.navigator.getCookie(name);
            if (strCookie == null) return null;

        } else {
            strCookie = document.cookie;
        }


        var arrCookie = strCookie.split("; ");
        for (var i = 0; i < arrCookie.length; i++) {
            var arr = arrCookie[i].split("=");
            if (arr[0] == name) {
                return unescape(arr[1]);
            }
        }
        return null;
    }

    //删除cookie
    function del(name) {
        if (_isH5Mobile && window['plus'] != null) {
            plus.navigator.removeCookie(name);
        }
        else {
            var date = new Date();
            date.setTime(date.getTime() - 10000); //设定一个过去的时间即可
            document.cookie = name + "=v; expires=" + date.toGMTString();
        }
    }

    //===========对外公开的属性及方法=========
    return {
        isH5Mobile: isH5Mobile,
        add: add,
        get: get,
        del: del
    };
})();

/* 2017-8-31 17:26:30 | 修改 木遥（微信:  http://marsgis.cn/weixin.html） */
haoutil.file = (function () {
    //"文件 相关操作类";
    //============内部私有属性及方法============

    function _download(fileName, blob) {
        var aLink = document.createElement('a');
        aLink.download = fileName;
        aLink.href = URL.createObjectURL(blob);
        document.body.appendChild(aLink);
        aLink.click();
        document.body.removeChild(aLink);
    }


    //下载保存文件
    function downloadFile(fileName, string) {
        var blob = new Blob([string]);
        _download(fileName, blob);
    }


    //下载导出图片
    function downloadImage(name, canvas) {
        var base64 = canvas.toDataURL("image/png");
        var blob = base64Img2Blob(base64);
        _download(name + '.png', blob);
    }

    //下载导出图片
    function downloadBase64Image(name, base64) { 
        var blob = base64Img2Blob(base64);
        _download(name + '.png', blob);
    }


    function base64Img2Blob(code) {
        var parts = code.split(';base64,');
        var contentType = parts[0].split(':')[1];
        var raw = window.atob(parts[1]);
        var rawLength = raw.length;

        var uInt8Array = new Uint8Array(rawLength);
        for (var i = 0; i < rawLength; ++i) {
            uInt8Array[i] = raw.charCodeAt(i);
        }
        return new Blob([uInt8Array], { type: contentType });
    }


    //===========对外公开的属性及方法=========
    return {
        download: _download,
        downloadFile: downloadFile,
        downloadImage: downloadImage,
        downloadBase64Image: downloadBase64Image,
        base64Img2Blob: base64Img2Blob
    };
})();
/* 2017-12-5 13:38:32 | 修改 木遥（微信:  http://marsgis.cn/weixin.html） */
haoutil.isutil = (function () {
    // "判断 相关操作类";

    //============内部私有属性及方法============
    function isArray(obj) {
        if (typeof Array.isArray === "function") {
            return Array.isArray(obj);
        } else {
            return Object.prototype.toString.call(obj) === "[object Array]";
        }
    } 
    
    function isString(str) {
        return (typeof str == 'string') && str.constructor == String;
    }

    function isNumber(obj) {
        return (typeof obj == 'number') && obj.constructor == Number;
    }

    function isDate(obj) {
        return (typeof obj == 'object') && obj.constructor == Date;
    }

    function isFunction(obj) {
        return (typeof obj == 'function') && obj.constructor == Function;
    }

    function    isObject(obj) {
        return Object.prototype.toString.call(obj) === "[object Object]";
    }


    function isNull(value) { 
        if (value == null) return true;
        if (isString(value) && value == "") return true;
        if (isNumber(value) && isNaN(value)) return true;

        return false;
    }

    function isNotNull(value) { 
        return !isNull(value);
    }

    //===========对外公开的属性及方法=========
    return {
        isNull: isNull,
        isNotNull: isNotNull,
        isArray: isArray,
        isString: isString,
        isNumber: isNumber,
        isDate: isDate,
        isFunction: isFunction,
        isObject: isObject
    };
})();
/* 2017-8-10 13:50:49 | 修改 木遥（微信:  http://marsgis.cn/weixin.html） */
haoutil.math = (function () {
   // "数学 相关操作类";
    //============内部私有属性及方法============


    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }


    //随机数组中随机取1个元素
    function getArrayRandomOne(arr) {
        var n = random(0, arr.length - 1);
        return arr[n];
    }

    //补零padLeft0
    function padLeft0(numStr, len) {
        numStr = String(numStr);
        var len = numStr.length;
        while (len < n) {
            numStr = "0" + numStr;
            len++;
        }
        return numStr;
    }

    //===========对外公开的属性及方法=========
    return { 
        getArrayRandomOne: getArrayRandomOne,
        random: random,
        padLeft0: padLeft0
    };
})();
haoutil.storage = (function () {
    //"localStorage 相关操作类";
    var _storage;

    //添加
    function add(name, data) {
        _storage = window.localStorage;
        if (_storage == null) return;
        _storage.setItem(name, data);
    }

    //获取cookie
    function get(name) {
        _storage = window.localStorage;
        if (_storage == null) return;
        var data = _storage.getItem(name);
        return data;
    }
    function del(name) {
        _storage = window.localStorage;
        if (_storage == null) return;
        _storage.removeItem(name);
    }

    //===========对外公开的属性及方法=========
    return {
        add: add,
        get: get,
        del: del
    };
})();

/* 2017-10-27 08:39:39 | 修改 木遥（微信:  http://marsgis.cn/weixin.html） */
haoutil.str = (function () {
    // "字符串 相关操作类";
    //============内部私有属性及方法============


    //判断字符是否是中文字符 
    function isChinese(s) {
        var patrn = /[\u4E00-\u9FA5]|[\uFE30-\uFFA0]/gi;
        if (!patrn.exec(s)) {
            return false;
        } else {
            return true;
        }
    }


    /**  单位换算，格式化显示长度     */
    function formatLength(val, unit) {
        if (val == null) return ""; 
        val = Number(val);

        if (unit == null || unit == "auto") {
            if (val < 1000)
                unit = "m";
            else
                unit = "km";
        }

        var valstr = "";
        switch (unit) {
            default:
            case "m":
                valstr = val.toFixed(2) + '米';
                break;
            case "km":
                valstr = (val * 0.001).toFixed(2) + '公里';
                break;
            case "mile":
                valstr = (val * 0.00054).toFixed(2) + '海里';
                break;
            case "zhang":
                valstr = (val * 0.3).toFixed(2) + '丈';
                break;
        }
        return valstr;
    }




    /**  进行单位换算，格式化显示面积    */
    function formatArea(val, unit) {
        if (val == null) return "";
        val = Number(val);

        if (unit == null || unit == "auto") {
            if (val < 1000000)
                unit = "m";
            else
                unit = "km";
        }

        var valstr = "";
        switch (unit) {
            default:
            case "m":
                valstr = val.toFixed(2) + '平方米';
                break;
            case "km":
                valstr = (val / 1000000).toFixed(2) + '平方公里';
                break;
            case "mu":
                valstr = (val * 0.0015).toFixed(2) + '亩';
                break;
            case "ha":
                valstr = (val * 0.0001).toFixed(2) + '公顷';
                break;
        }

        return valstr;
    }


    //格式化时间
    function formatTime(strtime) {
        strtime = Number(strtime)||0;

        if (strtime < 60)
            return strtime.toFixed(0) + "秒";
        else if (strtime >= 60 && strtime < 3600) {
            var miao = Math.floor(strtime % 60);
            return Math.floor(strtime / 60) + "分钟" + (miao != 0 ? (miao + "秒") : "");
        }
        else {
            strtime = Math.floor(strtime / 60); //秒转分钟
            return Math.floor(strtime / 60) + "小时" + Math.floor(strtime % 60) + "分钟";
        }
    }



    var code = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""); //索引表

    /** 
     * @description 将二进制序列转换为Base64编码
     * @param {String}
     * @return {String}
     */
    function binToBase64(bitString) {
        var result = "";
        var tail = bitString.length % 6;
        var bitStringTemp1 = bitString.substr(0, bitString.length - tail);
        var bitStringTemp2 = bitString.substr(bitString.length - tail, tail);
        for (var i = 0; i < bitStringTemp1.length; i += 6) {
            var index = parseInt(bitStringTemp1.substr(i, 6), 2);
            result += code[index];
        }
        bitStringTemp2 += new Array(7 - tail).join("0");
        if (tail) {
            result += code[parseInt(bitStringTemp2, 2)];
            result += new Array((6 - tail) / 2 + 1).join("=");
        }
        return result;
    }

    /** 
     * @description 将base64编码转换为二进制序列
     * @param {String}
     * @return {String}
     */
    function base64ToBin(str) {
        var bitString = "";
        var tail = 0;
        for (var i = 0; i < str.length; i++) {
            if (str[i] != "=") {
                var decode = code.indexOf(str[i]).toString(2);
                bitString += (new Array(7 - decode.length)).join("0") + decode;
            } else {
                tail++;
            }
        }
        return bitString.substr(0, bitString.length - tail * 2);
    }

    /** 
     * @description 将字符转换为二进制序列
     * @param {String} str
     * @return {String}  
     */
    function stringToBin(str) {
        var result = "";
        for (var i = 0; i < str.length; i++) {
            var charCode = str.charCodeAt(i).toString(2);
            result += (new Array(9 - charCode.length).join("0") + charCode);
        }
        return result;
    }

    /** 
     * @description 将二进制序列转换为字符串
     * @param {String} Bin
     */
    function BinToStr(Bin) {
        var result = "";
        for (var i = 0; i < Bin.length; i += 8) {
            result += String.fromCharCode(parseInt(Bin.substr(i, 8), 2));
        }
        return result;
    }
    function base64(str) {
        return binToBase64(stringToBin(str));
    }

    function decodeBase64(str) {
        return BinToStr(base64ToBin(str));
    }

    //===========对外公开的属性及方法=========
    return {
        isChinese: isChinese,
        formatLength: formatLength,
        formatArea: formatArea,
        formatTime: formatTime,
        base64: base64,
        decodeBase64: decodeBase64

    };

})();
/* 2017-10-27 08:31:05 | 修改 木遥（微信:  http://marsgis.cn/weixin.html） */
haoutil.system = (function () {
    // 系统级  或 浏览器 相关操作类"; 
    //============内部私有属性及方法============

    //url参数获取 
    function getRequest(target) {
        var theRequest = new Object();
        try {//屏蔽跨域时报错
            target = target || window;
            var url = target.location.search; //获取url中"?"符后的字串   
            if (url.indexOf("?") != -1) {
                var str = url.substr(1);
                var strs = str.split("&");
                for (var i = 0; i < strs.length; i++) {
                    theRequest[strs[i].split("=")[0]] = decodeURI(strs[i].split("=")[1]);
                }
            }
        } catch (e) { }
        return theRequest;
    }
    function getRequestByName(name, defval, target) {
        try {
            target = target || window;
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
            var r = target.location.search.substr(1).match(reg);
            if (r != null) return decodeURI(r[2]);

        } catch (e) { }
        return defval;
    }

    function getWindowSize() {
        if (typeof window.innerWidth != 'undefined') {
            return {
                width: window.innerWidth,
                height: window.innerHeight
            }
        } else {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight
            }
        }
    }

    //获取浏览器类型及版本
    function getExplorerInfo() {
        var explorer = window.navigator.userAgent.toLowerCase();
        //ie 
        if (explorer.indexOf("msie") >= 0) {
            var ver = Number(explorer.match(/msie ([\d]+)/)[1]);
            return { type: "IE", version: ver };
        }
        //firefox 
        else if (explorer.indexOf("firefox") >= 0) {
            var ver = Number(explorer.match(/firefox\/([\d]+)/)[1]);
            return { type: "Firefox", version: ver };
        }
        //Chrome
        else if (explorer.indexOf("chrome") >= 0) {
            var ver = Number(explorer.match(/chrome\/([\d]+)/)[1]);
            return { type: "Chrome", version: ver };
        }
        //Opera
        else if (explorer.indexOf("opera") >= 0) {
            var ver = Number(explorer.match(/opera.([\d]+)/)[1]);
            return { type: "Opera", version: ver };
        }
        //Safari
        else if (explorer.indexOf("Safari") >= 0) {
            var ver = Number(explorer.match(/version\/([\d]+)/)[1]);
            return { type: "Safari", version: ver };
        }
        return { type: explorer, version: -1 };
    }


    //浏览器
    function isPCBroswer() {
        var sUserAgent = navigator.userAgent.toLowerCase();

        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone/i) == "iphone";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return false;
        } else {
            return true;
        }
    }


    function clone(obj, removeKeys, level) {
        if (level == null) level = 9;  //避免死循环，拷贝的层级最大深度
        if (removeKeys == null) removeKeys = ["_layer"];

        if (null == obj || "object" != typeof obj) return obj;

        // Handle Date
        if (haoutil.isutil.isDate(obj)) {
            var copy = new Date();
            copy.setTime(obj.getTime());
            return copy;
        }

        // Handle Array
        if (haoutil.isutil.isArray(obj) && level >= 0) {
            var copy = [];
            for (var i = 0, len = obj.length; i < len; ++i) {
                copy[i] = clone(obj[i], removeKeys, level - 1);
            }
            return copy;
        }

        // Handle Object
        if (typeof obj === 'object' && level >= 0) {
            try {
                var copy = {};
                for (var attr in obj) {
                    if (typeof attr === 'function') continue;
                    if (removeKeys.indexOf(attr) != -1) continue;

                    if (obj.hasOwnProperty(attr))
                        copy[attr] = clone(obj[attr], removeKeys, level - 1);
                }
                return copy;
            }
            catch (e) { console.log(e); }
        }
        return obj;
    }

    function jsonp(url, data, callback) {
        var jsonp = function (url, data, callback) {
            var fnSuffix = Math.random().toString().replace('.', '');
            var cbFuncName = 'my_json_cb_' + fnSuffix;
            // 不推荐
            window[cbFuncName] = callback;
            var querystring = url.indexOf('?') == -1 ? '?' : '&';
            for (var key in data) {
                querystring += key + '=' + data[key] + '&';
            }
            querystring += 'callback=' + cbFuncName;
            var scriptElement = document.createElement('script');
            scriptElement.src = url + querystring;
            document.body.appendChild(scriptElement);
        };
        window.$jsonp = jsonp;
    }

    //公共方法
    function getHtml(url, callback) {
        $.ajax({
            url: url,
            type: "GET",
            dataType: 'html',
            timeout: 0, //永不超时
            success: function (data) {
                callback(data);
            }
        });
    }

    var nHead = document.head || document.getElementsByTagName('head')[0];
    // loadCss 用于载入css资源
    function loadCss(url, async) {
        var node = document.createElement('link');
        node.rel = 'stylesheet';
        node.async = async;
        node.href = url;
        nHead.appendChild(node);
    }

    // loadJs 用于载入js资源
    function loadJs(url, async) {
        var node = document.createElement('script');
        node.charset = 'utf-8';
        node.async = async;
        node.src = url;
        nHead.appendChild(node);
    }

    var cssExpr = new RegExp('\\.css');
    function loadResource(url, async) {
        if (cssExpr.test(url)) {
            loadCss(url, async);
        } else {
            loadJs(url, async);
        }
    }

    //===========对外公开的属性及方法=========
    return {
        getRequest: getRequest,
        getRequestByName: getRequestByName,
        getExplorerInfo: getExplorerInfo,
        isPCBroswer: isPCBroswer,
        clone: clone,
        jsonp: jsonp,
        getWindowSize: getWindowSize,
        getHtml: getHtml,
        loadCss: loadCss,
        loadJs: loadJs,
        loadResource: loadResource
    };
})();