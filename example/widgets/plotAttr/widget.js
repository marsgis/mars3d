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

        // that.getDefaultVal() //测试用
        //that.getReadmeTxt() //测试用

        that.attrConfig['curve'] = that.attrConfig['polyline']
        that.attrConfig['model-p'] = that.attrConfig['model']
        that.startEditing()
      })
    }
    //获取所有可配置属性的默认值
    getDefaultVal() {
      let data = this.attrConfig

      //标号默认样式
      let attrDefConfig = {}
      for (let i in data) {
        let defstyle = {}
        for (let idx = 0; idx < data[i].style.length; idx++) {
          let item = data[i].style[idx]
          if (item.defval === '' || item.defval === 0 || item.defval === false) {
            continue
          }
          // if (item.name == 'radius' ||item.name == 'diffHeight' )&& item.defval === 0) {
          //   continue
          // }
          defstyle[item.name] = item.defval
        }
        attrDefConfig[i] = defstyle
      }
      console.log('===========标号默认样式=================')
      console.log(JSON.stringify(attrDefConfig))
    }
    //获取所有可配置属性的说明文档
    getReadmeTxt() {
      let data = this.attrConfig

      //标号可配置的属性
      let strAPI = ''
      for (let i in data) {
        let strAPIItem = ''
        for (let idx = 0; idx < data[i].style.length; idx++) {
          let item = data[i].style[idx]
          if (haoutil.isutil.isString(item.defval)) {
            item.defval = '"' + item.defval + '"'
          }

          let strData = ''
          if (item.type === 'combobox') {
            strData = ',可选项：'
            item.data.forEach(function (comb) {
              if (comb.value == comb.text) {
                strData += `${comb.value},`
              } else {
                strData += `${comb.value} (解释：${comb.text}),`
              }
            })
          }
          let type
          switch (item.type) {
            case 'slider':
            case 'number':
              type = 'Number'
              break
            case 'radio':
              type = 'Boolean'
              break
            default:
              type = 'String'
              break
          }

          strAPIItem += ` * @property {${type}} [${item.name} = ${item.defval}] ${item.label} ${strData} \n`
        }
        strAPI += `
  /**
  * ${data[i].name} 支持的样式信息
  *
  * @typedef {Object} ${i}.StyleOptions
  *
  ${strAPIItem}*
  */\n\n`
      }
      haoutil.file.downloadFile('标绘属性配置.txt', strAPI)
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
      return mars3d.graphic.StyleUtil.getDefStyle(type)
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
      var graphic = this.config.graphic //当前编辑的graphic
      graphic.setOptions(attr)
    }
    //更新图上的几何形状、坐标等
    updateGeo2map(coords, withHeight) {
      let positions = []
      if (withHeight) {
        for (let i = 0; i < coords.length; i += 3) {
          let point = Cesium.Cartesian3.fromDegrees(coords[i], coords[i + 1], coords[i + 2])
          positions.push(point)
        }
      } else {
        for (let i = 0; i < coords.length; i += 2) {
          let point = Cesium.Cartesian3.fromDegrees(coords[i], coords[i + 1], 0)
          positions.push(point)
        }
      }

      var graphic = this.config.graphic //当前编辑的graphic
      graphic.positions = positions

      return positions
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
