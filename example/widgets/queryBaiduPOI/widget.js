'use script' //开发环境建议开启严格模式
;(function (window, mars3d) {
  //创建widget类，需要继承BaseWidget
  class MyWidget extends mars3d.widget.BaseWidget {
    //外部资源配置
    get resources() {
      return ['view.css']
    }

    //弹窗配置
    get view() {
      return {
        type: 'append',
        url: 'view.html',
        parent: 'body',
      }
    }

    //初始化[仅执行1次]
    create() {
      this.storageName = 'mars3d_queryBaiduPOI'
      this.pageSize = 6
      this.arrdata = []
      this.counts = 0
      this.allpage = 0
      this.thispage = 0

      //创建矢量数据图层
      this.graphicLayer = new mars3d.layer.GraphicLayer({
        name: this.config.name,
        pid: 99, //图层管理 中使用，父节点id
      })
      //鼠标单击后的信息面板弹窗
      this.graphicLayer.bindPopup(
        function (event) {
          let item = event.graphic?.attr
          if (!item) {
            return
          }

          var name
          if (item.detail_info && item.detail_info.detail_url) {
            name = '<a href="' + item.detail_info.detail_url + '"  target="_black" style="color: #ffffff; ">' + item.name + '</a>'
          } else {
            name = item.name
          }

          var inHtml = '<div class="mars-popup-titile">' + name + '</div><div class="mars-popup-content" >'

          var phone = $.trim(item.tel)
          if (phone != '') {
            inHtml += '<div><label>电话</label>' + phone + '</div>'
          }

          var dz = $.trim(item.address)
          if (dz != '') {
            inHtml += '<div><label>地址</label>' + dz + '</div>'
          }

          if (item.detail_info) {
            var fl = $.trim(item.detail_info.tag)
            if (fl != '') {
              inHtml += '<div><label>类别</label>' + fl + '</div>'
            }
          }
          inHtml += '</div>'

          return inHtml
        },
        {
          anchor: [0, -10],
        }
      )

      //查询控制器
      this.baiduPOI = new mars3d.query.BaiduPOI({
        // city: '合肥市',
      })
    }
    //每个窗口创建完成后调用
    winCreateOK(opt, result) {
      if (opt.type != 'append') {
        return
      }
      var that = this
      var img = $('#map-querybar img')
      img.each((index, item) => {
        $(item).attr('src', this.path + $(item).attr('src'))
      })

      if (this.config.position) {
        $('#map-querybar').css(this.config.position)
      }
      if (this.config.style) {
        $('#map-querybar').css(this.config.style)
      }

      // 搜索框
      $('#txt_querypoi').click(function () {
        // 文本框内容为空
        if ($.trim($(this).val()).length == 0) {
          that.hideAllQueryBarView()
          that.showHistoryList() // 显示历史记录
        }
      })

      var timetik = 0

      // 搜索框绑定文本框值发生变化,隐藏默认搜索信息栏,显示匹配结果列表
      $('#txt_querypoi').bind('input propertychange', () => {
        clearTimeout(timetik)
        timetik = setTimeout(() => {
          this.hideAllQueryBarView()
          this.clearLayers()

          var queryVal = $.trim($('#txt_querypoi').val())
          if (queryVal.length == 0) {
            // 文本框内容为空,显示历史记录
            this.showHistoryList()
          } else {
            this.autoTipList(queryVal, true)
          }
        }, 500)
      })

      // 点击搜索查询按钮
      $('#btn_querypoi').click(() => {
        clearTimeout(timetik)
        this.hideAllQueryBarView()

        var queryVal = $.trim($('#txt_querypoi').val())
        this.strartQueryPOI(queryVal, true)
      })
      //绑定回车键
      $('#txt_querypoi').bind('keydown', (event) => {
        if (event.keyCode == '13') {
          $('#btn_querypoi').click()
        }
      })

      // 返回查询结果面板界面
      $('#querybar_detail_back').click(() => {
        this.hideAllQueryBarView()
        $('#querybar_resultlist_view').show()
      })
    }
    //打开激活
    activate() {
      this.map.addLayer(this.graphicLayer)

      $('.mars3d-locationbar').append('<div id="queryAddress" class="mars3d-locationbar-content" style="margin-right: 50px;"></div>')

      //单击地图事件
      this.map.on(mars3d.EventType.clickMap, this.onMapClick, this)
      this.map.on(mars3d.EventType.cameraChanged, this.onMapCameraChanged, this)
    }
    //关闭释放
    disable() {
      this.map.removeLayer(this.graphicLayer)

      //释放单击地图事件
      this.map.off(mars3d.EventType.clickMap, this.onMapClick, this)
      this.map.off(mars3d.EventType.cameraChanged, this.onMapCameraChanged, this)

      $('#queryAddress').remove()

      this.hideAllQueryBarView()
      this.clearLayers()
    }
    onMapClick(event) {
      // 点击地图区域,隐藏所有弹出框
      if ($.trim($('#txt_querypoi').val()).length == 0) {
        this.hideAllQueryBarView()
        $('#txt_querypoi').blur()
      }
    }
    onMapCameraChanged(event) {
      let radius = this.map.camera.positionCartographic.height //单位：米
      if (radius > 100000) {
        this.address = null
        $('#queryAddress').html('')
        return
      }

      this.baiduPOI.getAddress({
        location: this.map.getCenter(),
        success: (result) => {
          this.address = result

          $('#queryAddress').html('地址：' + result.address)
        },
      })
    }
    hideAllQueryBarView() {
      $('#querybar_histroy_view').hide()
      $('#querybar_autotip_view').hide()
      $('#querybar_detail_view').hide()
      $('#querybar_resultlist_view').hide()
    }

    // 点击面板条目,自动填充搜索框,并展示搜索结果面板
    autoSearch(name) {
      $('#txt_querypoi').val(name)
      $('#btn_querypoi').trigger('click')
    }

    //===================与后台交互========================

    //显示智能提示搜索结果
    autoTipList(text, queryEx) {
      //输入经纬度数字时
      if (this.isLonLat(text)) {
        return
      }

      //查询外部widget
      if (this.hasExWidget() && queryEx) {
        this.autoExTipList(text)
        return
      }
      //查询外部widget

      this.baiduPOI.autoTip({
        text: text,
        city: this.address?.city,
        location: this.map.getCenter(),
        success: (result) => {
          var inhtml = ''
          var pois = result.list
          for (var index = 0; index < pois.length; index++) {
            var name = pois[index].name
            // var num = pois[index].num;
            // if (num > 0) continue;

            inhtml += "<li><i class='fa fa-search'></i><a href=\"javascript:queryBaiduPOIWidget.autoSearch('" + name + '\');">' + name + '</a></li>'
          }
          if (inhtml.length > 0) {
            $('#querybar_ul_autotip').html(inhtml)
            $('#querybar_autotip_view').show()
          }
        },
      })
    }

    // 根据输入框内容，查询显示列表
    strartQueryPOI(text, queryEx) {
      if (text.length == 0) {
        toastr.warning('请输入搜索关键字！')
        return
      }

      // TODO:根据文本框输入内容,从数据库模糊查询到所有匹配结果（分页显示）
      this.addHistory(text)

      this.hideAllQueryBarView()

      //输入经纬度数字时
      if (this.isLonLat(text)) {
        this.centerAtLonLat(text)
        return
      }

      //查询外部widget
      if (this.hasExWidget() && queryEx) {
        var qylist = this.queryExPOI(text)
        return
      }
      //查询外部widget

      this.thispage = 1
      this.queryText = text

      this.query_city = this.address?.city
      // this.query_location = this.map.getCenter()
      // this.query_radius = this.map.camera.positionCartographic.height //单位：米

      this.queryPOI()
    }
    queryPOI() {
      //查询获取数据
      this.baiduPOI.queryText({
        text: this.queryText,
        count: this.pageSize,
        page: this.thispage - 1,
        city: this.query_city,
        // location: this.query_location,
        // radius: this.query_radius,
        success: (result) => {
          if (!this.isActivate) {
            return
          }
          this.showPOIPage(result.list, result.allcount)
        },
      })
    }

    //===================显示查询结果处理========================
    showPOIPage(data, counts) {
      this.arrdata = data
      this.counts = counts
      if (this.counts < data.length) {
        this.counts = data.length
      }
      this.allpage = Math.ceil(this.counts / this.pageSize)

      var inhtml = ''
      if (this.counts == 0) {
        inhtml += '<div class="querybar-page"><div class="querybar-fl">没有找到"<strong>' + this.queryText + '</strong>"相关结果</div></div>'
      } else {
        this.objResultData = this.objResultData || {}
        for (var index = 0; index < this.arrdata.length; index++) {
          var item = this.arrdata[index]
          var startIdx = (this.thispage - 1) * this.pageSize
          item.index = startIdx + (index + 1)

          var _id = index
          var _mc
          if (item.detail_info && item.detail_info.detail_url) {
            _mc = '<a href="' + item.detail_info.detail_url + '"  target="_black" style="color: #ffffff; ">' + item.name + '</a>'
          } else {
            _mc = item.name
          }

          inhtml +=
            '<div class="querybar-site" onclick="queryBaiduPOIWidget.showDetail(\'' +
            _id +
            '\')"> <div class="querybar-sitejj"> <h3>' +
            item.index +
            '、' +
            _mc +
            '</h3> <p>' +
            (item.address || '') +
            '</p> </div> </div>'

          this.objResultData[_id] = item
        }

        //分页信息
        var _fyhtml
        if (this.allpage > 1) {
          _fyhtml =
            '<div class="querybar-ye querybar-fr">' +
            this.thispage +
            '/' +
            this.allpage +
            '页  <a href="javascript:queryBaiduPOIWidget.showFirstPage()">首页</a> <a href="javascript:queryBaiduPOIWidget.showPretPage()">&lt;</a>  <a href="javascript:queryBaiduPOIWidget.showNextPage()">&gt;</a> </div>'
        } else {
          _fyhtml = ''
        }

        //底部信息
        inhtml += '<div class="querybar-page"><div class="querybar-fl">找到<strong>' + this.counts + '</strong>条结果</div>' + _fyhtml + '</div>'
      }
      $('#querybar_resultlist_view').html(inhtml)
      $('#querybar_resultlist_view').show()

      this.showPOIArr(this.arrdata)
      if (this.counts == 1) {
        this.showDetail('0')
      }
    }
    showFirstPage() {
      this.thispage = 1
      this.queryPOI()
    }
    showNextPage() {
      this.thispage = this.thispage + 1
      if (this.thispage > this.allpage) {
        this.thispage = this.allpage
        toastr.warning('当前已是最后一页了')
        return
      }
      this.queryPOI()
    }

    showPretPage() {
      this.thispage = this.thispage - 1
      if (this.thispage < 1) {
        this.thispage = 1
        toastr.warning('当前已是第一页了')
        return
      }
      this.queryPOI()
    }
    //点击单个结果,显示详细
    showDetail(id) {
      var item = this.objResultData[id]
      this.flyTo(item)
    }
    clearLayers() {
      this.graphicLayer.closePopup()
      this.graphicLayer.clear()
    }
    showPOIArr(arr) {
      this.clearLayers()

      arr.forEach((item) => {
        var jd = Number(item.x)
        var wd = Number(item.y)
        if (isNaN(jd) || isNaN(wd)) {
          return
        }

        item.x = jd
        item.y = wd

        //添加实体
        var graphic = new mars3d.graphic.PointEntity({
          position: Cesium.Cartesian3.fromDegrees(jd, wd),
          style: {
            pixelSize: 10,
            color: '#3388ff',
            outline: true,
            outlineColor: '#ffffff',
            outlineWidth: 2,
            scaleByDistance: new Cesium.NearFarScalar(1000, 1, 1000000, 0.1),
            clampToGround: true, //贴地
            visibleDepth: false, //是否被遮挡
            label: {
              text: item.name,
              font_size: 20,
              color: 'rgb(240,255,255)',
              outline: true,
              outlineWidth: 2,
              outlineColor: Cesium.Color.BLACK,
              horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
              verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
              pixelOffsetY: -10, //偏移量
              distanceDisplayCondition: new Cesium.DistanceDisplayCondition(0.0, 200000),
              clampToGround: true, //贴地
              visibleDepth: false, //是否被遮挡
            },
          },
          attr: item,
        })
        this.graphicLayer.addGraphic(graphic)

        item._graphic = graphic
      })

      if (arr.length > 1) {
        this.graphicLayer.flyTo()
      }
    }
    flyTo(item) {
      var graphic = item._graphic
      if (graphic == null) {
        window.toastr.warning(item.name + ' 无经纬度坐标信息！')
        return
      }

      this.map.flyToGraphic(graphic, { radius: 2000 })

      setTimeout(() => {
        this.graphicLayer.openPopup(graphic)
      }, 3000)
    }

    //===================坐标定位处理========================
    isLonLat(text) {
      var reg = /^-?((0|1?[0-7]?[0-9]?)(([.][0-9]*)?)|180(([.][0]*)?)),-?((0|[1-8]?[0-9]?)(([.][0-9]*)?)|90(([.][0]*)?))$/ /*定义验证表达式*/
      return reg.test(text) /*进行验证*/
    }
    centerAtLonLat(text) {
      var arr = text.split(',')
      if (arr.length != 2) {
        return
      }

      var jd = Number(arr[0])
      var wd = Number(arr[1])
      if (isNaN(jd) || isNaN(wd)) {
        return
      }

      this.map.setCameraView({ x: jd, y: wd, minz: 2500 })

      //添加实体
      var graphic = new mars3d.graphic.PointEntity({
        position: Cesium.Cartesian3.fromDegrees(jd, wd),
        style: {
          color: '#3388ff',
          pixelSize: 10,
          outline: true,
          outlineColor: '#ffffff',
          outlineWidth: 2,
          scaleByDistance: new Cesium.NearFarScalar(1000, 1, 1000000, 0.1),
          clampToGround: true, //贴地
          visibleDepth: false, //是否被遮挡
        },
      })
      this.graphicLayer.addGraphic(graphic)

      graphic.bindPopup(`<div class="mars-popup-titile">坐标定位</div>
              <div class="mars-popup-content" >
                <div><label>经度</label> ${jd}</div>
                <div><label>纬度</label>${wd}</div>
              </div>`)

      setTimeout(() => {
        graphic.openPopup()
      }, 3000)
    }

    //===================历史记录相关========================
    showHistoryList() {
      $('#querybar_histroy_view').hide()

      var laststorage = haoutil.storage.get(this.storageName) //读取storage值
      if (laststorage == null) {
        return
      }

      this.arrHistory = eval(laststorage)
      if (this.arrHistory == null || this.arrHistory.length == 0) {
        return
      }

      var inhtml = ''
      for (var index = this.arrHistory.length - 1; index >= 0; index--) {
        var item = this.arrHistory[index]
        inhtml += "<li><i class='fa fa-history'/><a href=\"javascript:queryBaiduPOIWidget.autoSearch('" + item + '\');">' + item + '</a></li>'
      }
      $('#querybar_ul_history').html(inhtml)
      $('#querybar_histroy_view').show()
    }

    clearHistory() {
      this.arrHistory = []
      haoutil.storage.del(this.storageName)

      $('#querybar_ul_history').html('')
      $('#querybar_histroy_view').hide()
    }

    //记录历史值
    addHistory(data) {
      this.arrHistory = []
      var laststorage = haoutil.storage.get(this.storageName) //读取storage值
      if (laststorage != null) {
        this.arrHistory = eval(laststorage)
      }
      //先删除之前相同记录
      haoutil.array.remove(this.arrHistory, data)

      this.arrHistory.push(data)

      if (this.arrHistory.length > 10) {
        this.arrHistory.splice(0, 1)
      }

      laststorage = JSON.stringify(this.arrHistory)
      haoutil.storage.add(this.storageName, laststorage)
    }

    //======================查询非百度poi，联合查询处理=================
    //外部widget是否存在或启用
    hasExWidget() {
      if (window['queryBarWidget'] == null) {
        return false
      } else {
        this.exWidget = window.queryBarWidget
        return true
      }
    }
    autoExTipList(text) {
      this.exWidget.autoTipList(text, () => {
        this.autoTipList(text, false)
      })
    }
    //调用外部widget进行查询
    queryExPOI(text) {
      var layer = this.graphicLayer

      this.exWidget.strartQueryPOI(text, layer, () => {
        this.strartQueryPOI(text, false)
      })
    }
  }

  //注册到widget管理器中。
  window.queryBaiduPOIWidget = mars3d.widget.bindClass(MyWidget)

  //每个widet之间都是直接引入到index.html中，会存在彼此命名冲突，所以闭包处理下。
})(window, mars3d)
