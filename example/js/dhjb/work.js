function initEditorJS() {
  //山顶点
  var sddPoint = {
    activate: function () {
      //添加数据
      this.clearData()
      abdPoint.clearData()
      qxbhdPoint.clearData()
      fxbhdPoint.clearData()

      map.setCameraView({ y: 36.061436, x: 113.927874, z: 1688.82, heading: 61.4, pitch: -34.8, roll: 0 })

      var arrPoint = [
        {
          name: '<span style="color:red;">山顶点</span>',
          clampToGround: true, //贴地
          point: [113.942777, 36.067056, 459.77],
        },
        {
          name: '<span style="color:red;">山顶点</span>',
          clampToGround: true, //贴地
          point: [113.944267, 36.071025, 536.88],
        },
        {
          name: '<span style="color:red;">山顶点</span>',
          clampToGround: true, //贴地
          point: [113.939813, 36.072023, 508.97],
        },
      ]
      this.lable = JB.addLabel(arrPoint) //添加注记

      this.drawEntity = JB.addGeoJSON({
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              name: '点标记',
              style: {
                color: '#ffffff',
                outline: true,
                outlineColor: '#ff0000',
                visibleDepth: true,
                clampToGround: true,
              },
              attr: {},
              type: 'point',
            },
            geometry: {
              type: 'Point',
              coordinates: arrPoint[0].point,
            },
          },
          {
            type: 'Feature',
            properties: {
              name: '点标记',
              style: {
                color: '#ffffff',
                outline: true,
                outlineColor: '#ff0000',
                visibleDepth: true,
                clampToGround: true,
              },
              attr: {},
              type: 'point',
            },
            geometry: {
              type: 'Point',
              coordinates: arrPoint[1].point,
            },
          },
          {
            type: 'Feature',
            properties: {
              name: '点标记',
              style: {
                color: '#ffffff',
                outline: true,
                outlineColor: '#ff0000',
                visibleDepth: true,
                clampToGround: true,
              },
              attr: {},
              type: 'point',
            },
            geometry: {
              type: 'Point',
              coordinates: arrPoint[2].point,
            },
          },
        ],
      })
      JB.showPanel('<span class="myp">山顶点</span>')
    },
    disable: function () {
      JB.changeGraphicShow(this.lable, false)
      JB.closePanel()
    },
    clearData: function () {
      //移除点
      if (this.drawEntity) {
        JB.removeGraphic(this.drawEntity)
        delete this.drawEntity
      }
      //移除注记
      if (this.lable) {
        JB.removeGraphic(this.lable)
        delete this.lable
      }
    },
  }

  //鞍部点
  var abdPoint = {
    activate: function () {
      //视角定位
      map.setCameraView({ y: 36.06439, x: 113.93641, z: 1156, heading: 50.9, pitch: -40.9, roll: 0 })
      //添加数据
      this.clearData()

      var arrPoint = [
        {
          name: '<span style="color:yellow;">鞍部点</span>',
          clampToGround: true, //贴地
          point: [113.941765, 36.071467, 483.65],
        },
        {
          name: '<span style="color:yellow;">鞍部点</span>',
          clampToGround: true, //贴地
          point: [113.943826, 36.068614, 448.83],
        },
      ]
      this.drawEntity = JB.addGeoJSON({
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              name: '点标记',
              style: {
                color: '#ffffff',
                outline: true,
                outlineColor: '#ff0000',
                visibleDepth: true,
                clampToGround: true,
              },
              attr: {},
              type: 'point',
            },
            geometry: {
              type: 'Point',
              coordinates: [113.941765, 36.071467, 483.65],
            },
          },
          {
            type: 'Feature',
            properties: {
              name: '点标记',
              style: {
                color: '#ffffff',
                outline: true,
                outlineColor: '#ff0000',
                visibleDepth: true,
                clampToGround: true,
              },
              attr: {},
              type: 'point',
            },
            geometry: {
              type: 'Point',
              coordinates: [113.943826, 36.068614, 448.83],
            },
          },
        ],
      })
      this.lable = JB.addLabel(arrPoint) //添加注记
    },
    disable: function () {
      JB.changeGraphicShow(this.lable, false)
    },
    clearData: function () {
      //移除点
      if (this.drawEntity) {
        JB.removeGraphic(this.drawEntity)
        delete this.drawEntity
      }
      //移除注记
      if (this.lable) {
        JB.removeGraphic(this.lable)
        delete this.lable
      }
    },
  }

  //倾斜变换点
  var qxbhdPoint = {
    activate: function () {
      map.setCameraView({ y: 36.064462, x: 113.937545, z: 930.91, heading: 36.6, pitch: -32.1, roll: 0 })

      //视角定位
      var arrPoint = [
        {
          name: '<span style="">倾斜变换点</span>',
          clampToGround: true, //贴地
          point: [113.940833, 36.070734, 440.98],
        },
      ]

      this.drawEntity = JB.addGeoJSON({
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              name: '点标记',
              style: {
                color: '#ffffff',
                outline: true,
                outlineColor: '#ff0000',
                visibleDepth: true,
                clampToGround: true,
              },
              attr: {},
              type: 'point',
            },
            geometry: {
              type: 'Point',
              coordinates: [113.940833, 36.070734, 440.98],
            },
          },
        ],
      })
      this.lable = JB.addLabel(arrPoint) //添加注记
    },
    disable: function () {
      JB.changeGraphicShow(this.lable, false)
    },
    clearData: function () {
      //移除点
      if (this.drawEntity) {
        JB.removeGraphic(this.drawEntity)
        delete this.drawEntity
      }
      //移除注记
      if (this.lable) {
        JB.removeGraphic(this.lable)
        delete this.lable
      }
    },
  }

  //方向变换点
  var fxbhdPoint = {
    activate: function () {
      //视角定位
      map.setCameraView({
        y: 36.065437,
        x: 113.935516,
        z: 720,
        heading: 51.2,
        pitch: -22.5,
        roll: 0,
      })

      //添加数据
      this.clearData()

      var arrPoint = [
        {
          name: '<span style="color:blue;">方向变换点</span>',
          clampToGround: true, //贴地
          point: [113.942894, 36.069431, 443.97],
        },
      ]

      this.drawEntity = JB.addGeoJSON({
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              name: '点标记',
              style: {
                color: '#ffffff',
                outline: true,
                outlineColor: '#ff0000',
                visibleDepth: true,
                clampToGround: true,
              },
              attr: {},
              type: 'point',
            },
            geometry: {
              type: 'Point',
              coordinates: [113.942894, 36.069431, 443.97],
            },
          },
        ],
      })
      this.lable = JB.addLabel(arrPoint) //添加注记
    },
    disable: function () {
      JB.changeGraphicShow(this.lable, false)
    },
    clearData: function () {
      //移除点
      if (this.drawEntity) {
        JB.removeGraphic(this.drawEntity)
        delete this.drawEntity
      }
      //移除注记
      if (this.lable) {
        JB.removeGraphic(this.lable)
        delete this.lable
      }
    },
  }

  var showLine1 = {
    activate: function () {
      //显示所有标记
      JB.changeGraphicShow(sddPoint.lable, true)
      JB.changeGraphicShow(abdPoint.lable, true)
      JB.changeGraphicShow(qxbhdPoint.lable, true)
      JB.changeGraphicShow(fxbhdPoint.lable, true)

      map.setCameraView({
        y: 36.064015,
        x: 113.933652,
        z: 761.92,
        heading: 48.8,
        pitch: -20.3,
        roll: 0,
      })

      //添加线
      var geojson = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            properties: {
              type: 'polyline',
              style: {
                color: '#ffff00',
                clampToGround: true,
              },
            },
            geometry: {
              type: 'LineString',
              coordinates: [
                [113.934892, 36.070102, 445.18],
                [113.936306, 36.070792, 470.73],
                [113.937346, 36.070851, 494.64],
                [113.939539, 36.071892, 512.87],
                [113.939814, 36.072021, 509],
                [113.940431, 36.071829, 494.97],
                [113.941805, 36.071461, 483.14],
                [113.944147, 36.071056, 535.93],
                [113.944267, 36.071024, 536.88],
                [113.944309, 36.070897, 536.62],
                [113.944042, 36.070297, 502.58],
                [113.944066, 36.069944, 484.51],
                [113.944105, 36.069561, 474.96],
                [113.943924, 36.068869, 452.38],
                [113.943827, 36.068606, 448.74],
                [113.943555, 36.068141, 449.3],
                [113.942774, 36.067053, 459.68],
                [113.941194, 36.066608, 419.79],
              ],
            },
          },
        ],
      }
      this.line = JB.addGeoJSON(geojson)
    },
    disable: function () {
      // 移除线
      // if (this.line) {
      //     JB.changeGraphicShow(this.line, false);
      // }
      //隐藏所有标记
      JB.changeGraphicShow(sddPoint.lable, false)
      JB.changeGraphicShow(abdPoint.lable, false)
      JB.changeGraphicShow(qxbhdPoint.lable, false)
      JB.changeGraphicShow(fxbhdPoint.lable, false)
    },
  }

  //虚线
  var showLine2 = {
    activate: function () {
      map.setCameraView({
        y: 36.064528,
        x: 113.937353,
        z: 952.08,
        heading: 37.9,
        pitch: -33.1,
        roll: 0,
      })
      //显示所有标记
      JB.changeGraphicShow(sddPoint.lable, true)
      JB.changeGraphicShow(abdPoint.lable, true)
      JB.changeGraphicShow(qxbhdPoint.lable, true)
      JB.changeGraphicShow(fxbhdPoint.lable, true)

      //添加线
      var geojson = {
        type: 'Feature',
        properties: {
          type: 'polyline',
          style: {
            materialType: mars3d.MaterialType.PolylineDash, //虚线
            color: '#ff0000',
            clampToGround: true,
          },
        },
        geometry: {
          type: 'LineString',
          coordinates: [
            [113.941765, 36.071467, 483.65],
            [113.940833, 36.070734, 440.98],
            [113.940737, 36.070091, 411.82],
          ],
        },
      }
      this.line = JB.addGeoJSON(geojson)
    },
    disable: function () {
      // 移除线
      // if (this.line) {
      //     JB.changeGraphicShow(this.line, false);
      // }
      //隐藏所有标记
      JB.changeGraphicShow(sddPoint.lable, false)
      JB.changeGraphicShow(abdPoint.lable, false)
      JB.changeGraphicShow(qxbhdPoint.lable, false)
      JB.changeGraphicShow(fxbhdPoint.lable, false)
    },
  }

  //线
  var showLine3 = {
    activate: function () {
      //显示所有标记
      map.setCameraView({
        y: 36.066678,
        x: 113.936334,
        z: 781.3,
        heading: 63.1,
        pitch: -28.3,
        roll: 0,
      })
      JB.changeGraphicShow(sddPoint.lable, true)
      JB.changeGraphicShow(abdPoint.lable, true)
      JB.changeGraphicShow(qxbhdPoint.lable, true)
      JB.changeGraphicShow(fxbhdPoint.lable, true)

      //添加线
      var geojson = {
        type: 'Feature',
        properties: {
          type: 'polyline',
          style: {
            color: '#ffff00',
            clampToGround: true,
          },
        },
        geometry: {
          type: 'LineString',
          coordinates: [
            [113.944267, 36.071025, 536.88],
            [113.942894, 36.069431, 443.97],
            [113.942142, 36.069149, 413.18],
            [113.941354, 36.06898, 394.38],
          ],
        },
      }
      this.line = JB.addGeoJSON(geojson)
    },
    disable: function () {
      // 移除线
      // if (this.line) {
      //     JB.changeGraphicShow(this.line, false);
      // }
      //隐藏所有标记
      JB.changeGraphicShow(sddPoint.lable, false)
      JB.changeGraphicShow(abdPoint.lable, false)
      JB.changeGraphicShow(qxbhdPoint.lable, false)
      JB.changeGraphicShow(fxbhdPoint.lable, false)
    },
  }

  var dgxWork = {
    activate: function () {
      var contourLine = new mars3d.thing.ContourLine({
        positions: [
          [113.924547, 36.081973, 304.2],
          [113.960453, 36.082217, 408.4],
          [113.95847, 36.062622, 317.9],
          [113.924604, 36.062438, 297.5],
        ],
        spacing: 20,
        width: 1.5,
        color: Cesium.Color.RED,
      })
      map.addThing(contourLine)
      this.contourLine = contourLine

      map.setCameraView(
        { y: 36.064736, x: 113.935567, z: 1276.68, heading: 52.4, pitch: -44.5, roll: 0, duration: 3 },
        {
          // duration: 3,
          complete: function () {
            JB.startRotatePoint(new Cesium.Cartesian3.fromDegrees(113.942685, 36.07012, 461.53))
          },
        }
      )
    },
    disable: function () {
      if (this.contourLine) {
        map.removeThing(this.contourLine)
        this.contourLine = null
      }

      JB.stopRotatePoint()

      //清除数据
      sddPoint.clearData()
      abdPoint.clearData()
      qxbhdPoint.clearData()
      fxbhdPoint.clearData()

      JB.removeGraphic(showLine1.line)
      JB.removeGraphic(showLine2.line)
      JB.removeGraphic(showLine3.line)
    },
  }

  var data = [
    {
      text: '特征点',
      state: {
        opened: true,
        selected: false,
      },
      children: [
        {
          text: '山顶点',
          times: 6,
          widget: sddPoint,
        },
        {
          text: '鞍部点',
          times: 6,
          widget: abdPoint,
        },
        {
          text: '倾斜变换点',
          times: 4,
          widget: qxbhdPoint,
        },
        {
          text: '方向变换点',
          times: 4,
          widget: fxbhdPoint,
        },
      ],
    },
    {
      text: '特征线',
      state: {
        opened: true,
        selected: false,
      },
      children: [
        {
          text: '山脊线',
          times: 6,
          widget: showLine1,
        },
        {
          text: '山谷线',
          times: 5,
          widget: showLine2,
        },
        {
          text: '变换线',
          times: 5,
          widget: showLine3,
        },
      ],
    },
    {
      text: '测量结果',
      state: {
        opened: true,
        selected: false,
      },
      children: [
        {
          text: '等高线',
          times: 10,
          widget: dgxWork,
        },
      ],
    },
  ]
  dataWork.initData(data)
}
