let BaseLayer = mars3d.layer.BaseLayer
let THREE = window.THREE

//与THREE.js集成
class ThreeLayer extends BaseLayer {
  constructor(options = {}) {
    super(options)

    this._pointerEvents = this.options.pointerEvents
  }

  _showHook(show) {
    if (show) {
      this._threejsContainer.style.visibility = 'visible'
    } else {
      this._threejsContainer.style.visibility = 'hidden'
    }
  }

  /**
   * 对象添加到地图前创建一些对象的钩子方法，
   * 只会调用一次
   * @return {void}  无
   * @private
   */
  _mountedHook() {
    if (!THREE) {
      throw new Error('请引入 three.js 库 ')
    }

    let scene = this._map.scene

    let threeContainer = mars3d.DomUtil.create('div', 'mars3d-threejs')
    threeContainer.style.position = 'absolute'
    threeContainer.style.top = '0px'
    threeContainer.style.left = '0px'
    threeContainer.style.width = scene.canvas.clientWidth + 'px'
    threeContainer.style.height = scene.canvas.clientHeight + 'px'
    threeContainer.style.pointerEvents = this._pointerEvents ? 'auto' : 'none' //auto时可以交互，但是没法放大地球， none 没法交互
    this._container = threeContainer

    let fov = 45
    let aspect = scene.canvas.clientWidth / scene.canvas.clientHeight
    let near = 1
    let far = 10 * 1000 * 1000 // needs to be far to support Cesium's world-scale rendering

    this.scene = new THREE.Scene()
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    this.renderer = new THREE.WebGLRenderer({ alpha: true })
    threeContainer.appendChild(this.renderer.domElement)
  }

  /**
   * 对象添加到地图上的创建钩子方法，
   * 每次add时都会调用
   * @return {void}  无
   * @private
   */
  _addedHook() {
    if (this._container) {
      this._map.container.appendChild(this._container)
    }

    this._map.useDefaultRenderLoop = false //关闭自动渲染

    let that = this
    ;(function frame() {
      //animateFrame: requestAnimationFrame事件句柄，用来清除操作
      that._animateFrame = window.requestAnimationFrame(frame)
      that.update() //按帧率执行
    })()
  }

  /**
   * 对象从地图上移除的创建钩子方法，
   * 每次remove时都会调用
   * @return {void}  无
   * @private
   */
  _removedHook() {
    window.cancelAnimationFrame(this._animateFrame)
    delete this._animateFrame

    this._map.useDefaultRenderLoop = true

    if (this._container) {
      this._map.container.removeChild(this._container)
    }
  }

  update() {
    this.renderCesium()
    this.renderThreeObj()
    this.renderCamera()
  }

  renderCesium() {
    this._map.viewer.render()
  }

  renderThreeObj() {
    var width = this._container.clientWidth
    var height = this._container.clientHeight
    this.renderer.setSize(width, height)
    this.renderer.render(this.scene, this.camera)
  }
  renderCamera() {
    // register Three.js scene with Cesium
    this.camera.fov = Cesium.Math.toDegrees(this._map.camera.frustum.fovy) // ThreeJS FOV is vertical
    this.camera.updateProjectionMatrix()

    // Clone Cesium Camera projection position so the
    // Three.js Object will appear to be at the same place as above the Cesium Globe

    this.camera.matrixAutoUpdate = false

    this.camera.lookAt(new THREE.Vector3(0, 0, 0))

    var cvm = this._map.camera.viewMatrix
    var civm = this._map.camera.inverseViewMatrix

    this.camera.matrixWorld.set(
      civm[0],
      civm[4],
      civm[8],
      civm[12],
      civm[1],
      civm[5],
      civm[9],
      civm[13],
      civm[2],
      civm[6],
      civm[10],
      civm[14],
      civm[3],
      civm[7],
      civm[11],
      civm[15]
    )

    this.camera.matrixWorldInverse.set(
      cvm[0],
      cvm[4],
      cvm[8],
      cvm[12],
      cvm[1],
      cvm[5],
      cvm[9],
      cvm[13],
      cvm[2],
      cvm[6],
      cvm[10],
      cvm[14],
      cvm[3],
      cvm[7],
      cvm[11],
      cvm[15]
    )

    var width = this._map.scene.canvas.clientWidth
    var height = this._map.scene.canvas.clientHeight
    this.camera.aspect = width / height
    this.renderer.setSize(width, height)
    this.camera.updateProjectionMatrix()

    this.renderer.clear()
    this.renderer.render(this.scene, this.camera)
  }
}
