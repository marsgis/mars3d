'use script' //开发环境建议开启严格模式
;(function (window, mars3d) {
  //创建widget类，需要继承BaseWidget
  class MyWidget extends mars3d.widget.BaseWidget {
    //弹窗配置
    get view() {
      return {
        type: 'window',
        url: 'view.html',
        style: 'dark',
        windowOptions: {
          skin: 'layer-mars-dialog animation-scale-up',
          width: 250,
          position: {
            top: 10,
            right: 5,
            bottom: 30,
          },
        },
      }
    }

    //初始化[仅执行1次]
    create() {
      let that = this
      $.getJSON(this.path + 'config/attr.json', function (data) {
        that.attrConfig = data
        that.setDefaultVal()

        that.attrConfig['curve'] = that.attrConfig['polyline']
        that.startEditing()
      })
    }
    //获取所有可配置属性的默认值
    setDefaultVal() {
      let data = this.attrConfig

      //标号默认样式
      let attrDefConfig = {}
      for (let i in data) {
        let defstyle = {}
        for (let idx = 0; idx < data[i].style.length; idx++) {
          let item = data[i].style[idx]
          defstyle[item.name] = item.defval
        }
        attrDefConfig[i] = defstyle
      }
      this.attrDefConfig = attrDefConfig

      // let logInfo = JSON.stringify(attrDefConfig)
      // logInfo = logInfo.replaceAll('"diffHeight":0,', '').replaceAll('"hasShadows":false,', '')
      // console.log('标号默认样式', logInfo)
    }

    //每个窗口创建完成后调用
    winCreateOK(opt, result) {
      this.viewWindow = result
    }
    //激活插件
    activate() {}
    //释放插件
    disable() {}
    getDefStyle(type) {
      let defStyle = this.attrDefConfig[type] || {}
      return mars3d.Util.clone(defStyle)
    }
    getMinPointNum() {
      let graphic = this.config.graphic
      if (graphic && graphic._minPointNum) {
        return graphic._minPointNum
      }
      return 3
    }
    getMaxPointNum() {
      let graphic = this.config.graphic
      if (graphic && graphic._maxPointNum) {
        return graphic._maxPointNum
      }
      return 999
    }
    get defaultAttrList() {
      return [
        { name: 'id', label: '主键', type: 'label', defval: '' },
        { name: 'name', label: '名称', type: 'text', defval: '' },
        { name: 'remark', label: '备注', type: 'textarea', defval: '' },
      ]
    }
    getAttrList() {
      return this.config.attrList || this.defaultAttrList
    }
    getLayerName() {
      let graphic = this.config.graphic
      return graphic?._layer?.name || ''
    }

    startEditing(graphic, lonlats) {
      if (graphic) {
        this.config.graphic = graphic
      }
      if (lonlats) {
        this.config.lonlats = lonlats
      }

      if (this.viewWindow == null) {
        return
      }

      graphic = this.config.graphic
      lonlats = this.config.lonlats
      this.viewWindow.plotEdit.startEditing(graphic.options, lonlats)
    }
    //更新图上的属性
    updateAttr2map(attr) {
      console.log('更新属性', attr)

      var graphic = this.config.graphic //当前编辑的graphic
      graphic.setOptions(attr)
    }
    //更新坐标
    updatePoints2map(points) {
      console.log('更新坐标', points)

      var graphic = this.config.graphic
      graphic.positions = points
    }
    centerCurrentEntity() {
      let graphic = this.config.graphic
      graphic.flyTo()
    }
    deleteEntity() {
      let graphic = this.config.graphic
      graphic.remove()

      this.disableBase()
    }

    //文件处理
    getGeoJson() {
      let graphic = this.config.graphic
      return graphic.toGeoJSON()
    }
  }

  //注册到widget管理器中。
  mars3d.widget.bindClass(MyWidget)

  //每个widet之间都是直接引入到index.html中，会存在彼此命名冲突，所以闭包处理下。
})(window, mars3d)
