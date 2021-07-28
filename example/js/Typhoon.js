/**
 * 单个台风对象
 * @class Typhoon
 */
class Typhoon {
  //========== 构造方法 ==========
  constructor(options, map) {
    this.options = options
    this.map = map

    //创建台风相关矢量图层
    this.typhoonLayer = new mars3d.layer.GraphicLayer()
    map.addLayer(this.typhoonLayer)

    this.clickPtLayer = new mars3d.layer.GraphicLayer()
    map.addLayer(this.clickPtLayer)

    this.showTyphoonToMap(options.path)
  }

  //========== 对外属性 ==========
  //显示隐藏
  get show() {
    return this.options.show
  }
  set show(val) {
    this.options.show = val
    this.typhoonLayer.show = val
    this.clickPtLayer.show = val
  }

  getPointById(id) {
    return this.typhoonLayer.getGraphicById(id)
  }

  flyTo(options) {
    this.typhoonLayer.flyTo(options)
  }

  getPointTooltip(event, isYB) {
    let item = event.target?.attr
    if (!item) {
      return
    }

    let ybHtml = ''
    if (isYB) {
      ybHtml = `<p>预报机构：&nbsp;&nbsp;中央气象台</p>`
    }

    let fqHtml = '<table style="width:100%">'
    if (item.circle7) {
      fqHtml += `<tr><th>风圈半径</th>   <th>东北</th>  <th>东南</th>  <th>西南</th>  <th>西北</th></tr>
                <tr><td>七级</td>  <td>${item.circle7.radius1}</td>   <td>${item.circle7.radius2}</td>   <td>${item.circle7.radius3}</td>   <td>${item.circle7.radius4}&nbsp;(KM)</td></tr> `
      if (item.circle10) {
        fqHtml += ` <tr><td>十级</td>  <td>${item.circle10.radius1}</td>   <td>${item.circle10.radius2}</td>   <td>${item.circle10.radius3}</td>   <td>${item.circle10.radius4}&nbsp;(KM)</td></tr>`
        if (item.circle12) {
          fqHtml += `<tr><td>十二级</td>  <td>${item.circle12.radius1}</td>   <td>${item.circle12.radius2}</td>   <td>${item.circle12.radius3}</td>   <td>${item.circle12.radius4}&nbsp;(KM)</td></tr>`
        }
      }
    }
    fqHtml += '</table>'

    return `<div class="tipBox">
              <div class="triangle-left"></div>
              <div class="tipHeader">
                <p>${this.options.typnumber} ${this.options.name_cn}</p>
              </div>
                <div class="tipBodyFirstPart">
                  ${ybHtml}
                  <p>过去时间：&nbsp;&nbsp;${item.time_str}</p>
                  <p>中心位置：&nbsp;&nbsp;${item.lat}N/${item.lon}E</p>
                  <p>最大风速：&nbsp;&nbsp;${item.centerSpeed}米/秒</p>
                  <p>中心气压：&nbsp;&nbsp;${item.strength}百帕</p>
                  <p>移动方向：&nbsp;&nbsp;${item.moveTo_str}</p>
                  <p>移动速度：&nbsp;&nbsp;${item.windSpeed}公里/小时</p>
                </div>
                <div class="tipBodySecondPart">${fqHtml}</div>
          </div>`
  }

  addNameGraphic(firstItem) {
    //[起点]绘制台风起点名字
    var nameGraphic = new mars3d.graphic.RectanglePrimitive({
      positions: [
        [firstItem.lon, firstItem.lat],
        [firstItem.lon + 0.7, firstItem.lat - 0.4],
      ],
      style: {
        material: mars3d.MaterialUtil.createMaterial(mars3d.MaterialType.Text, {
          text: this.options.name_cn,
          font: '60px 宋体',
          color: 'red',
          backgroundColor: new Cesium.Color(0.0, 0.0, 0.0, 0),
        }),
        zIndex: 2,
      },
      attr: firstItem,
    })
    this.typhoonLayer.addGraphic(nameGraphic)
  }

  //绘制一个台风到地图上
  showTyphoonToMap(arr) {
    if (arr.length < 1) {
      return
    }

    let firstItem = arr[0]
    let endItem = arr[arr.length - 1]

    let lastType
    var arrPoint = []
    //路径点
    for (let i = 0, len = arr.length; i < len; i++) {
      let item = arr[i]
      let point = [item.lon, item.lat]

      //在图层上绘画出所有的点
      let pointEntity = new mars3d.graphic.PointEntity({
        id: item.id,
        position: point,
        style: {
          pixelSize: 6,
          color: item.color,
        },
        attr: item,
      })
      this.typhoonLayer.addGraphic(pointEntity)

      //轨迹点绑定点击事件
      pointEntity.on(mars3d.EventType.click, (event) => {
        this.showPointFQ(event.graphic.attr)
      })
      pointEntity.bindTooltip(
        (event) => {
          return this.getPointTooltip(event)
        },
        {
          template: false,
          anchor: [260, -20],
        }
      )

      arrPoint.push(point)

      //判断台风的typlevel
      if (lastType !== item.level || i == len - 1) {
        //绘制线
        let graphicLine = new mars3d.graphic.PolylineEntity({
          positions: arrPoint,
          style: {
            color: getColor(lastType),
          },
        })
        this.typhoonLayer.addGraphic(graphicLine)

        lastType = item.level
        arrPoint = [point]
      }
    }

    //[起点]绘制台风起点名字
    this.addNameGraphic(firstItem)

    //[终点]绘制台风当前位置gif点
    let gifGraphic = new mars3d.graphic.DivGraphic({
      position: [endItem.lon, endItem.lat],
      style: {
        html: `<img src="img/marker/typhoon.gif">`,
        horizontalOrigin: Cesium.HorizontalOrigin.CENTER,
        verticalOrigin: Cesium.VerticalOrigin.CENTER,
      },
    })
    this.typhoonLayer.addGraphic(gifGraphic)
    this.gifGraphic = gifGraphic

    //显示最后所在点的对应风圈等。
    this.showPointFQ(endItem)
  }

  //点击事件，点击出现台风icon
  showPointFQ(item, availability) {
    if (!availability) {
      this.clickPtLayer.clear()
    }

    let position = [item.lon, item.lat]

    //台风实时位置gif点更新
    if (this.gifGraphic) {
      this.gifGraphic.position = position
    }

    // 绘制7级风圈面
    if (item.circle7) {
      let points7 = []
      points7 = points7.concat(getPoints(position, item.circle7.radius1, 0)) //东北方向
      points7 = points7.concat(getPoints(position, item.circle7.radius2, 90)) //东南
      points7 = points7.concat(getPoints(position, item.circle7.radius3, 180)) //西南
      points7 = points7.concat(getPoints(position, item.circle7.radius4, 270)) //西北

      let graphic = new mars3d.graphic.PolygonEntity({
        positions: points7,
        availability: availability,
        style: {
          setHeight: 900,
          color: '#eed139',
          opacity: 0.3,
          outline: true,
          outlineWidth: 2,
          outlineColor: '#eed139',
        },
      })
      this.clickPtLayer.addGraphic(graphic)
    }

    //绘制10级风圈面
    if (item.circle10) {
      let points10 = []
      points10 = points10.concat(getPoints(position, item.circle10.radius1, 0)) //东北方向
      points10 = points10.concat(getPoints(position, item.circle10.radius2, 90))
      points10 = points10.concat(getPoints(position, item.circle10.radius3, 180))
      points10 = points10.concat(getPoints(position, item.circle10.radius4, 270))

      let tenGraphic = new mars3d.graphic.PolygonEntity({
        positions: points10,
        availability: availability,
        style: {
          setHeight: 800,
          color: '#fe9c45',
          opacity: 0.3,
          outline: true,
          outlineWidth: 2,
          outlineColor: '#fe9c45',
          arcType: Cesium.ArcType.GEODESIC,
        },
      })
      this.clickPtLayer.addGraphic(tenGraphic)
    }

    //绘制12级风圈面
    if (item.circle12) {
      let points12 = []
      points12 = points12.concat(getPoints(position, item.circle12.radius1, 0)) //东北方向
      points12 = points12.concat(getPoints(position, item.circle12.radius2, 90))
      points12 = points12.concat(getPoints(position, item.circle12.radius3, 180))
      points12 = points12.concat(getPoints(position, item.circle12.radius4, 270))

      let tenGraphic = new mars3d.graphic.PolygonEntity({
        positions: points12,
        availability: availability,
        style: {
          setHeight: 700,
          color: '#ffff00',
          opacity: 0.3,
          outline: true,
          outlineWidth: 2,
          outlineColor: '#ffff00',
          arcType: Cesium.ArcType.GEODESIC,
        },
      })
      this.clickPtLayer.addGraphic(tenGraphic)
    }

    //台风预测路径绘制
    if (item.forecast) {
      let linePoint = [position]
      item.forecast.forEach((element) => {
        let forecastPt = [element.lon, element.lat]
        linePoint.push(forecastPt)

        //在图层上绘画出所有的点
        let pointEntity = new mars3d.graphic.PointEntity({
          position: forecastPt,
          availability: availability,
          style: {
            pixelSize: 6,
            color: element.color, //不同typlevel显示不同的颜色
            opacity: 0.8,
          },
          attr: item,
        })
        this.clickPtLayer.addGraphic(pointEntity)

        pointEntity.bindTooltip(
          (event) => {
            return this.getPointTooltip(event, true)
          },
          {
            template: false,
            anchor: [260, -20],
          }
        )

        //预测路线
        let graphicLine = new mars3d.graphic.PolylineEntity({
          positions: linePoint,
          availability: availability,
          style: {
            material: mars3d.MaterialUtil.createMaterialProperty(mars3d.MaterialType.PolylineDash, {
              dashLength: 20.0,
              color: 'red',
            }),
          },
        })
        this.clickPtLayer.addGraphic(graphicLine)
      })
    }
  }

  //释放
  destroy() {
    this.show = false

    if (this.typhoonLayer) {
      this.typhoonLayer.destroy()
      delete this.typhoonLayer
    }
    if (this.clickPtLayer) {
      this.clickPtLayer.destroy()
      delete this.clickPtLayer
    }
  }
}

/**
 * 动态播放 单个台风对象
 * @class PlayTyphoon
 */
class PlayTyphoon extends Typhoon {
  //========== 对外属性 ==========
  //显示隐藏
  get isStart() {
    return this._isStart
  }
  set isStart(val) {
    this._isStart = val
  }

  //绘制一个台风对应的对象。
  showTyphoonToMap(arr) {
    if (arr.length < 1) {
      return
    }

    let firstItem = arr[0]
    let endItem = arr[arr.length - 1]

    this.startTime = Cesium.JulianDate.fromDate(firstItem.time) //开始时间
    this.stopTime = Cesium.JulianDate.fromDate(endItem.time) //结束时间

    let lastType = arr[0].level
    let property = new Cesium.SampledPositionProperty()

    for (let i = 0, len = arr.length; i < len; i++) {
      let item = arr[i]
      let point = [item.lon, item.lat]

      let position = Cesium.Cartesian3.fromDegrees(item.lon, item.lat) //经度、纬度坐标转化
      let pointTime = Cesium.JulianDate.fromDate(item.time) //将时间转化成需要的格式

      property.addSample(pointTime, position)

      //绘制点
      let pointEntity = new mars3d.graphic.PointEntity({
        id: item.id,
        position: point,
        availability: new Cesium.TimeIntervalCollection([
          new Cesium.TimeInterval({
            start: pointTime,
            stop: this.stopTime,
          }),
        ]),
        style: {
          pixelSize: 6,
          color: item.color,
        },
        attr: item,
      })
      pointEntity.bindTooltip(
        (event) => {
          return this.getPointTooltip(event)
        },
        {
          template: false,
          anchor: [260, -20],
        }
      )
      this.typhoonLayer.addGraphic(pointEntity)

      if (lastType !== item.level || i == len - 1) {
        //绘制线
        let graphicLine = new mars3d.graphic.PathEntity({
          position: property,
          style: {
            leadTime: 0,
            color: getColor(lastType),
          },
        })
        this.typhoonLayer.addGraphic(graphicLine)

        lastType = item.level
        property = new Cesium.SampledPositionProperty() //控制动画播放的对象
        property.addSample(pointTime, position)
      }

      //显示每个点的风圈和预测路线
      let lastTime
      if (i == len - 1) {
        lastTime = this.lastTime
      } else {
        lastTime = Cesium.JulianDate.fromDate(arr[i + 1].time)
      }

      let availability = new Cesium.TimeIntervalCollection([
        new Cesium.TimeInterval({
          start: pointTime,
          stop: lastTime,
        }),
      ])
      this.showPointFQ(item, availability)
    }

    //[起点]绘制台风起点名字
    this.addNameGraphic(firstItem)
  }

  //开始播放
  start() {
    this._isStart = true

    this.map.clock.startTime = this.startTime.clone()
    this.map.clock.stopTime = this.stopTime.clone()
    this.map.clock.currentTime = this.startTime.clone()
    this.map.clock.clockRange = Cesium.ClockRange.CLAMPED //到达时间点后终止
    this.map.clock.multiplier = 16000

    if (this.map.viewer.timeline) {
      this.map.viewer.timeline.zoomTo(this.startTime, this.stopTime)
    }

    this.show = true
    this.map.clock.shouldAnimate = true
  }

  //停止播放
  stop() {
    this._isStart = false

    this.show = false

    let now = Cesium.JulianDate.fromDate(new Date())
    this.map.clock.startTime = now.clone()
    this.map.clock.stopTime = Cesium.JulianDate.addDays(now, 1.0, new Cesium.JulianDate())
    this.map.clock.currentTime = now.clone()
    this.map.clock.clockRange = Cesium.ClockRange.UNBOUNDED
    this.map.clock.multiplier = 1
  }
}

//不同等级的台风对应不同的颜色
function getColor(level) {
  switch (level) {
    default:
    case 'TD': //热带低压
      return 'rgb(238,209,57)'
    case 'TS': //热带风暴
      return 'rgb(0,0,255)'
    case 'STS': //强热带风暴
      return 'rgb(15,128,0)'
    case 'TY': //台风
      return 'rgb(254,156,69)'
    case 'STY': //强台风
      return 'rgb(254,0,254)'
    case 'SuperTY': //超强台风
      return 'rgb(254,0,0)'
  }
}

// 根据经纬度 直径 以及方向计算方法
function getPoints(center, cradius, startAngle) {
  let points = []
  let radius = cradius / 100
  let pointNum = 90
  let endAngle = startAngle + 90
  let sin, cos, x, y, angle
  for (let i = 0; i <= pointNum; i++) {
    angle = startAngle + ((endAngle - startAngle) * i) / pointNum
    sin = Math.sin((angle * Math.PI) / 180)
    cos = Math.cos((angle * Math.PI) / 180)
    x = center[0] + radius * sin
    y = center[1] + radius * cos
    points.push([x, y])
  }
  return points
}
