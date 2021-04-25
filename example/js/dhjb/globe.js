//公共处理js

//数据处理，及自动播放
var dataWork = {
  alltimes: 0,
  arrNode: [],
  analysisData: function (arr) {
    for (var i = 0; i < arr.length; i++) {
      var item = arr[i]
      // item.state = { disabled: true }; //前端播放时禁用单击

      if (item.widget) {
        item.index = this.arrNode.length //this.getNextId();
        item.id = item.index
        item.times = item.times || 60
        item.text = item.text + '(' + item.times + '秒)'
        item.icon = 'fa fa-tag'
        this.arrNode.push(item)
        this.alltimes += item.times
      }

      if (item.children) {
        this.analysisData(item.children)
      }
    }
  },
  steptimes: 0,
  initData: function (data) {
    this.analysisData(data)
    $('#alltimes').html(haoutil.str.formatTime(this.alltimes))

    setInterval(() => {
      if (!this._isStart) {
        return
      }
      this.steptimes++
      $('#thistimes').html(this.steptimes + '秒')
    }, 1000)

    $('#treeOverlays').jstree({
      core: {
        data: data,
        themes: {
          name: 'default-dark',
          dots: true,
          icons: true,
        },
      },
    })

    $('#treeOverlays').on('changed.jstree', (e, data) => {
      var node = data.node.original
      if (node && node.widget) {
        this.start(node)
      }
    })
  },
  _isStart: false,
  selectdNode: null,
  //开始
  start: function (node) {
    this.stop()

    $('#btn_start').hide()
    $('#btn_pause').show()
    $('#btn_proceed').hide()
    $('#btn_stop').show()
    // $("#treeOverlays").jstree().close_all();

    this._isStart = true
    map.clock.shouldAnimate = true
    dataWork.activateNode(node || this.arrNode[0])
  },
  //暂停
  pause: function () {
    $('#btn_start').hide()
    $('#btn_pause').hide()
    $('#btn_proceed').show()
    $('#btn_stop').show()

    this._isStart = false
    map.cancelFlight()
    JB.stopRotatePoint()
    map.clock.shouldAnimate = false

    if (this.timeIdx && this.timeIdx != -1) {
      clearTimeout(this.timeIdx)
      this.timeIdx = -1
    }
  },
  //继续
  proceed: function () {
    $('#btn_start').hide()
    $('#btn_pause').show()
    $('#btn_proceed').hide()
    $('#btn_stop').show()

    map.clock.shouldAnimate = true

    var node = this.selectdNode
    if (node) {
      var that = this

      this.steptimes = 0
      node.widget.disable()
      node.widget.activate()

      this.timeIdx = setTimeout(function () {
        that.activateNextNode(node.index)
      }, node.times * 1000)
    } else {
      this.start()
    }
    this._isStart = true
  },

  //停止
  stop: function () {
    this.pause()
    $('#btn_start').show()
    $('#btn_pause').hide()
    $('#btn_stop').hide()
    $('#btn_proceed').hide()

    $('#thisStep').html('无')
    $('#thistimes').html('')
    $('#treeOverlays').jstree('deselect_all', true)

    if (this.selectdNode) {
      this.selectdNode.widget.disable()
    }
    dataWork.selectdNode = null
    this._isStart = false
  },
  activateNode: function (node) {
    this.selectdNode = node
    $('#stopRoate').val('暂停')
    this.steptimes = 0
    $('#thisStep').html(node.text)
    $('#treeOverlays').jstree('deselect_all', true)
    $('#treeOverlays').jstree('select_node', node.id, true)
    node.widget.activate(node)

    // $("#treeOverlays").jstree().close_all(); //收起树

    var that = this
    this.timeIdx = setTimeout(function () {
      node.widget.disable()
      that.activateNextNode(node.index)
    }, node.times * 1000)
  },
  activateNextNode: function (index) {
    index++
    if (index < 0 || index >= this.arrNode.length) {
      this.stop()
      this.selectdNode = null
      return
    }
    var node = this.arrNode[index]
    this.activateNode(node)
  },
}

var timeColor = {
  color: Cesium.Color.YELLOW.withAlpha(0),
  start: function (clr, max) {
    clr = clr || Cesium.Color.YELLOW
    this.colorBack = Cesium.Color.clone(clr)
    this.max = max

    this.stop()

    var time = 30
    var setp = max / time

    var alpha = 0
    this.interVal = setInterval(() => {
      alpha += setp
      if (alpha > max) {
        alpha = 0
      }
      this.color = clr.withAlpha(alpha)
    }, time)
  },
  stop: function () {
    clearInterval(this.interVal)
    this.color = this.colorBack.withAlpha(this.max)
  },
}

//循环执行数组或对象，参数支持
function loopArrayForFun(opts, callback) {
  if (opts == null) {
    return
  }
  if (haoutil.isutil.isArray(opts)) {
    var arr = []
    for (var i = 0, len = opts.length; i < len; i++) {
      arr.push(callback(opts[i]))
    }
    return arr
  } else {
    return callback(opts)
  }
}

//脚本列表
var JB = {
  removeGraphic(opts) {
    return loopArrayForFun(opts, function (graphic) {
      graphic.remove(true)
    })
  },
  changeGraphicShow(opts, show) {
    return loopArrayForFun(opts, function (graphic) {
      graphic.show = show
    })
  },

  //添加GeoJSON
  addGeoJSON(geojson) {
    return map.graphicLayer.loadGeoJSON(geojson)
  },

  //添加注记，参数支持数组或单个
  addLabel(opts) {
    return loopArrayForFun(opts, this._addLabelItem)
  },
  _addLabelItem(opts) {
    var html = opts.html
    if (!html) {
      html = `<div class="divpoint1">
                  <div class="title">${opts.name || ''}</div>
              </div >`
    }
    //文字注记
    var graphic = new mars3d.graphic.DivGraphic({
      position: opts.point,
      style: {
        html: html,
        anchor: opts.anchor,
        clampToGround: opts.clampToGround,
        horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
    })
    map.graphicLayer.addGraphic(graphic)

    return graphic
  },

  //====================自定义面板=========================
  showPanel(html) {
    $('#viewResult').remove()
    var innerHTML = `<div id="viewResult" class="infoview viewResult" >
            ${html}
        </div>`
    $('body').append(innerHTML)
  },
  closePanel() {
    $('#viewResult').remove()
  },
  playMP3(src) {
    var mp3 = new Audio(src)
    mp3.play() //播放 mp3这个音频对象
    return mp3
  },
  //绕点飞行
  startRotatePoint(center) {
    if (!this.rotatePoint) {
      this.rotatePoint = new mars3d.thing.RotatePoint({
        direction: false, //方向 true逆时针，false顺时针
        time: 50, //给定飞行一周所需时间(单位 秒)，控制速度
        // autoStopAngle: 360, //到达指定角度后自动停止
      })
      map.addThing(this.rotatePoint)
    }

    //开启旋转
    this.rotatePoint.start(center)
  },
  stopRotatePoint() {
    if (this.rotatePoint) {
      this.rotatePoint.stop()
    }
  },
}
