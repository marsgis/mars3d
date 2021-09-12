/**
 *
 * GPS Geolocation with device orientation in real-time
 */
(function () {
  //采用高德地图定位的算法，参考帮助文档：https://lbs.amap.com/api/javascript-api/guide/services/geolocation
  document.write('<script type="text/javascript" src="https://webapi.amap.com/maps?v=1.4.15&key=ae29a37307840c7ae4a785ac905927e0"></script>');

  class Geolocation extends mars3d.control.ToolButton {
    /**
     * 创建_container控件容器对象的方法，
     * 只会调用一次
     * @return {void}  无
     * @private
     */
    _mountedHook() {
      //缩小
      this._container = mars3d.DomUtil.create("div", "cesium-button cesium-toolbar-button tracking-deactivated");
      this._container.setAttribute("title", "查看GPS位置");

      this._container.addEventListener("click", (e) => {
        // one time tracking
        this.startTracking();
      });
    }
    stopTracking() {
      mars3d.DomUtil.removeClass(this._container, "tracking-activated");
      mars3d.DomUtil.addClass(this._container, "tracking-deactivated");

      this.clearLocationPoint();
    }
    startTracking() {
      AMap.plugin("AMap.Geolocation",  ()=> {
        mars3d.DomUtil.removeClass(this._container, "tracking-deactivated");
        mars3d.DomUtil.addClass(this._container, "tracking-activated");

        if (!this.geolocation) {
          this.geolocation = new AMap.Geolocation({
            enableHighAccuracy: true, // 是否使用高精度定位，默认：true
            timeout: 10000, // 设置定位超时时间，默认：无穷大
            convert: true, //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
          });
        }

        var that = this;
        this.geolocation.getCurrentPosition();

        function onComplete(data) {
          // data是具体的定位信息
          var wgsPoint = mars3d.PointTrans.gcj2wgs([data.position.lng, data.position.lat]);
          that.flyToLocation({ lng: wgsPoint[0], lat: wgsPoint[1] });
        }

        function onError(data) {
          // 定位出错,参考：https://lbs.amap.com/faq/js-api/map-js-api/position-related
          haoutil.msg(data.message, "定位失败");
        }
        AMap.event.addListener(this.geolocation, "complete", onComplete);
        AMap.event.addListener(this.geolocation, "error", onError);
      });
    }
    flyToLocation(position) {
      mars3d.DomUtil.removeClass(this._container, "tracking-activated");
      mars3d.DomUtil.addClass(this._container, "tracking-deactivated");

      this._map.flyToPoint(position, {
        radius: 2000,
        complete: function () {},
      });

      this.clearLocationPoint();
      var graphic = new mars3d.graphic.DivLightPoint({
        position: position,
        style: {
          color: "#ffff00",
          clampToGround: true,
        },
        tooltip: "我的位置：" + position.lng + "," + position.lat,
      });
      this._map.graphicLayer.addGraphic(graphic);

      this.graphic = graphic;
    }
    clearLocationPoint() {
      if (!this.graphic) return;
      this.graphic.destroy();
      this.graphic = null;
    }
  }
  //对外接口
  window.mars3d.control.Geolocation = Geolocation;
})();
