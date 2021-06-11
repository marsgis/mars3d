/**
 *
 * GPS Geolocation with device orientation in real-time
 */
;(function () {
  var key = 'qObioeG8HeeQVrOVAGScPVhDzlmv6rL9'
  document.write('<script type="text/javascript" src="http://api.map.baidu.com/getscript?v=2.0&ak=' + key + '&services="></script>')

  class Geolocation extends mars3d.control.ToolButton {
    /**
     * 创建_container控件容器对象的方法，
     * 只会调用一次
     * @return {void}  无
     * @private
     */
    _mountedHook() {
      //缩小
      this._container = mars3d.DomUtil.create('div', 'cesium-button cesium-toolbar-button tracking-deactivated')
      this._container.setAttribute('title', '查看GPS位置')

      this._container.addEventListener('click', (e) => {
        // one time tracking
        this.startTracking()
      })
    }
    stopTracking() {
      mars3d.DomUtil.removeClass(this._container, 'tracking-activated')
      mars3d.DomUtil.addClass(this._container, 'tracking-deactivated')

      this.clearLocationPoint()
    }
    startTracking() {
      mars3d.DomUtil.removeClass(this._container,'tracking-deactivated')
      mars3d.DomUtil.addClass(this._container,'tracking-activated')

      if (!this.geolocation) this.geolocation = new BMap.Geolocation()

      var that = this
      this.geolocation.getCurrentPosition(
        function (r) {
          if (this.getStatus() == BMAP_STATUS_SUCCESS) {
            var wgsPoint = mars3d.PointTrans.bd2wgs([r.point.lng, r.point.lat])
            that.flyToLocation({ lng: wgsPoint[0], lat: wgsPoint[1] })
          } else {
            //关于状态码
            //BMAP_STATUS_SUCCESS	检索成功。对应数值“0”。
            //BMAP_STATUS_CITY_LIST	城市列表。对应数值“1”。
            //BMAP_STATUS_UNKNOWN_LOCATION	位置结果未知。对应数值“2”。
            //BMAP_STATUS_UNKNOWN_ROUTE	导航结果未知。对应数值“3”。
            //BMAP_STATUS_INVALID_KEY	非法密钥。对应数值“4”。
            //BMAP_STATUS_INVALID_REQUEST	非法请求。对应数值“5”。
            //BMAP_STATUS_PERMISSION_DENIED	没有权限。对应数值“6”。(自 1.1 新增)
            //BMAP_STATUS_SERVICE_UNAVAILABLE	服务不可用。对应数值“7”。(自 1.1 新增)
            //BMAP_STATUS_TIMEOUT	超时。对应数值“8”。(自 1.1 新增)
            haoutil.msg(this.getStatus(), '定位失败')
          }
        },
        { enableHighAccuracy: true }
      )
    }
    flyToLocation(position) {
      mars3d.DomUtil.removeClass(this._container, 'tracking-activated')
      mars3d.DomUtil.addClass(this._container, 'tracking-deactivated')

      this._map.flyToPoint(position, {
        radius: 2000,
        complete: function () {
        },
      })

      this.clearLocationPoint()
      var graphic = new mars3d.graphic.DivLightPoint({
        position: position,
        style: {
          color: '#ffff00',
          clampToGround: true,
        },
        tooltip: '我的位置：' + position.lng + ',' + position.lat,
      })
      this._map.graphicLayer.addGraphic(graphic)

      this.graphic = graphic
    }
    clearLocationPoint() {
      if (!this.graphic) return
      this.graphic.destroy()
      this.graphic = null
    }
  }
  //对外接口
  window.mars3d.control.Geolocation = Geolocation
})()
