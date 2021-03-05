'use script' //开发环境建议开启严格模式

//  移动位置、旋转 3dtiles
class TilesEditor extends mars3d.BaseClass {
  //========== 构造方法 ==========
  constructor(options) {
    super(options)

    this.options = options
    this.map = options.map
    this.scene = this.map.scene

    this._position = options.position
    this._heading = options.heading || 0
    this._range = options.range || 100

    this.dragging = false
    this.rotating = false
    this._enabled = false

    this.billboards = this.map.scene.primitives.add(new Cesium.BillboardCollection())
    this.handler = new Cesium.ScreenSpaceEventHandler(this.map.canvas)

    //用来平移位置的指示器
    this.movep = this.billboards.add({
      position: this.position,
      color: Cesium.Color.fromCssColorString('#FFFF00'),
      image: options.moveImg,
      show: false,
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    })
    //用来旋转的指示器
    this.rotatep = this.billboards.add({
      position: this.rotationPosition,
      color: Cesium.Color.fromCssColorString('#FFFF00'),
      image: options.rotateImg,
      show: false,
      disableDepthTestDistance: Number.POSITIVE_INFINITY,
    })
  }

  //========== 对外属性 ==========
  //启用状态
  get enabled() {
    return this._enabled
  }
  set enabled(val) {
    this._enabled = val
    if (val) {
      var self = this
      this.handler.setInputAction((p) => {
        self.handler_onLeafDown(p)
      }, Cesium.ScreenSpaceEventType.LEFT_DOWN)
      this.handler.setInputAction((p) => {
        self.handler_onMouseMove(p)
      }, Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      this.handler.setInputAction((p) => {
        self.handler_onLeftUp(p)
      }, Cesium.ScreenSpaceEventType.LEFT_UP)

      this.rotatep.show = true
      this.movep.show = true
    } else {
      this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOWN)
      this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE)
      this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP)

      this.rotatep.show = false
      this.movep.show = false
    }
  }

  //移动位置的图标位置
  get position() {
    return this._position
  }
  set position(value) {
    this._position = value

    this.movep.position = this.position
    this.rotatep.position = this.rotationPosition
  }

  //旋转方向的图标位置(依据位置和朝向计算)
  get rotationPosition() {
    if (this._position) {
      return mars3d.PointUtil.getPositionByDirectionAndLen(this._position, this._heading, this._range)
    } else {
      return null
    }
  }

  get heading() {
    return this._heading
  }
  set heading(value) {
    this._heading = value

    if (this._position) {
      this.rotatep.position = this.rotationPosition
    }
  }

  get range() {
    return this._range
  }
  set range(value) {
    this._range = value

    if (this._position) {
      this.rotatep.position = this.rotationPosition
    }
  }

  //========== 方法 ==========
  handler_onLeafDown(event) {
    var pickedObjects = this.scene.drillPick(event.position, 2)

    for (var i = 0; i < pickedObjects.length; i++) {
      var pickedObject = pickedObjects[i]

      if (Cesium.defined(pickedObject) && pickedObject.primitive === this.movep) {
        this.dragging = true
        this.scene.screenSpaceCameraController.enableRotate = false
        break
      } else if (Cesium.defined(pickedObject) && pickedObject.primitive === this.rotatep) {
        this.rotating = true
        this.scene.screenSpaceCameraController.enableRotate = false
        break
      }
    }
  }

  handler_onMouseMove(event) {
    var position = this.pickTerrain(event.endPosition)
    if (!position) {
      return
    }

    if (this.dragging) {
      this.position = position
      this.movep.position = this.position
      this.rotatep.position = this.rotationPosition

      this.fire(mars3d.EventType.change, {
        position: this._position,
      })
    } else if (this.rotating) {
      this.rotatep.position = position
      this._range = Cesium.Cartesian3.distance(this._position, position)
      this._heading = mars3d.MeasureUtil.getAngle(this._position, position) //模型是正东为0

      this.fire(mars3d.EventType.change, {
        heading: this._heading,
      })
    }
  }

  handler_onLeftUp(event) {
    if (this.dragging || this.rotating) {
      this.rotating = this.dragging = false
      this.scene.screenSpaceCameraController.enableRotate = true
      //如果没有这句话 会导致billboards的某些没有刷新，无法再次点击
      this.billboards._createVertexArray = true
    }
  }

  pickTerrain(wndpos) {
    var ray = this.map.camera.getPickRay(wndpos)
    var pos = this.map.scene.globe.pick(ray, this.map.scene)
    return pos
  }

  remove() {
    //从场景中移除
    if (this.billboards) {
      this.scene.primitives.remove(this.billboards)
      this.billboards = undefined
    }
    this.rotatep.show = false
    this.movep.show = false
  }

  destroy() {
    this.remove()
    this.handler.destroy()

    //删除所有绑定的数据
    for (let i in this) {
      delete this[i]
    }
  }
}
