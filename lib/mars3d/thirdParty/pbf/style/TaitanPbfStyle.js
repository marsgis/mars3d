//taitan公司自定义的Sld 样式
//sld与mvt样式区别：sld针对一个要素多个rule的样式可以同时独立生效，而mvt只能给一个要素设置一个样式

;(function (window) {
  function TaitanPbfStyle(options) {
    this.ol = null
    this.json = {}
    this.options = {}
    this.style = {}
    this.iconCache = {}
    this.properties = null
    this.type = null
    this.scale = null
    this.resolution = null
    this.filterIsPass = null
    this.scaleIsPass = true
    this.init(options)
  }

  TaitanPbfStyle.prototype = {
    constructor: TaitanPbfStyle,

    defaults: {
      ol: null,
      json: {},
    },

    init: function (options) {
      let opts = Object.assign({}, this.defaults, options)
      this.json = opts.json
      this.ol = opts.ol
    },

    reset: function () {
      this.options = {}
      this.style = {}
      this.properties = null
      this.type = null
      this.scale = null
      this.resolution = null
      this.filterIsPass = null
      this.scaleIsPass = true
    },

    getStyle: function () {
      let This = this
      return function (feature, resolution) {
        This.reset()
        This.type = feature.getGeometry().getType()
        This.properties = feature.getProperties()
        This.resolution = resolution
        This.scale = 1 / (0.0254 / (96 * resolution))
        This.filter()
        return This.buildStyle()
      }
    },

    // 根据options组装最终的样式对象
    buildStyle: function () {
      if (Object.keys(this.options).length == 0) return [new this.ol.style.Style({})]
      // if (JSON.stringify(this.options) == '{}') return;

      // 组装基础样式
      switch (this.type.toLowerCase()) {
        case 'point':
          if (this.options.image.imageStyle) this.style.image = this.options.image.imageStyle
          break

        case 'linestring':
          if (this.options.stroke) this.style.stroke = this.options.stroke
          break

        case 'polygon':
          if (this.options.fill) this.style.fill = this.options.fill
          if (this.options.stroke) this.style.stroke = this.options.stroke
          break

        default:
          break
      }

      // 组装label样式,这里控制了下显示层级，只有分辨率小于40的时候才会显示label，后续可以做成可配置项
      if (this.resolution < 40 && this.options.text) {
        this.style.text = new this.ol.style.Text({
          text: this.options.text.text ? this.options.text.text + '' : '',
          textBaseline: 'top',
          overflow: 'line',
          font: `${this.options.text.font || 10}px sans-serif`,
          offsetX: this.options.text.offsetX,
          offsetY: this.options.text.offsetY,
          fill: this.options.text.fill,
          stroke: this.options.text.stroke,
          rotateWithView: false,
        })
      }

      // 组装层级样式
      this.style.zIndex = this.options.zIndex || 1
      return [new this.ol.style.Style(this.style)]
    },

    // 构建样式options
    buildOptions: function (rule) {
      // rule.Symbolizer.WellKnownName = 'img';
      // rule.Symbolizer.src = 'https://unpkg.com/@mapbox/maki@4.0.0/icons/park-15.svg';

      this.options.image = {}
      this.options.image.rotation = rule.Symbolizer.Rotation || 0

      if (rule.Symbolizer.FillColor && rule.Symbolizer.WellKnownName != 'img') {
        let imgFillColor = this.buildRgba(rule.Symbolizer.FillColor, rule.Symbolizer.FillOpacity)
        this.options.image.fill = new this.ol.style.Fill({
          color: imgFillColor,
        })

        if (rule.Symbolizer.StrokeColor) {
          let imgStrokeColor = this.buildRgba(rule.Symbolizer.StrokeColor, rule.Symbolizer.StrokeOpacity)
          this.options.image.stroke = new this.ol.style.Stroke({
            color: imgStrokeColor,
            width: rule.Symbolizer.StrokeWidth,
            lineDash: rule.Symbolizer.StrokeDasharray.split(' '),
          })
        }
      }

      this.options.image.render = 'image'

      switch (rule.Symbolizer.WellKnownName) {
        case 'circle':
          // 圆形
          this.options.image.radius = rule.Symbolizer.Size
          this.options.image.imageStyle = new this.ol.style.Circle(this.options.image)
          break

        case 'square':
          // 正方形
          this.options.image.radius = rule.Symbolizer.Size
          this.options.image.points = 4
          this.options.image.angle = Math.PI / 4
          this.options.image.imageStyle = new this.ol.style.RegularShape(this.options.image)
          break

        case 'triangle':
          // 三角形
          this.options.image.radius = rule.Symbolizer.Size
          this.options.image.points = 3
          this.options.image.angle = 0
          this.options.image.imageStyle = new this.ol.style.RegularShape(this.options.image)
          break

        case 'star':
          // 五角形
          this.options.image.radius = rule.Symbolizer.Size
          this.options.image.points = 5
          this.options.image.radius2 = rule.Symbolizer.Size / 2.5
          this.options.image.angle = 0
          this.options.image.imageStyle = new this.ol.style.RegularShape(this.options.image)
          break

        case 'cross':
          // 十字架
          this.options.image.radius = rule.Symbolizer.Size
          this.options.image.points = 4
          this.options.image.radius2 = 0
          this.options.image.angle = 0
          this.options.image.imageStyle = new this.ol.style.RegularShape(this.options.image)
          break

        case 'x':
          // ×形
          this.options.image.radius = rule.Symbolizer.Size
          this.options.image.points = 4
          this.options.image.radius2 = 0
          this.options.image.angle = Math.PI / 4
          this.options.image.imageStyle = new this.ol.style.RegularShape(this.options.image)
          break

        case 'img':
          let icon = this.iconCache[rule.Symbolizer.src]
          if (!icon) {
            this.options.image.src = rule.Symbolizer.src
            this.options.image.anchorXUnits = 'fraction'
            this.options.image.anchorYUnits = 'fraction'
            this.options.image.anchor = [0.5, 0.5]
            this.options.image.offset = [0, 0]
            this.options.image.scale = 1
            this.options.image.rotation = rule.Symbolizer.Rotation
            ;(this.options.image.crossOrigin = 'anonymous'), (this.options.image.imageStyle = new this.ol.style.Icon(this.options.image))
            this.iconCache[rule.Symbolizer.src] = this.options.image.imageStyle
          } else {
            this.options.image.imageStyle = icon
          }
          break

        default:
          break
      }

      // 构建option中的填充色
      if (rule.Symbolizer.FillColor) {
        let fillColor = this.buildRgba(rule.Symbolizer.FillColor, rule.Symbolizer.FillOpacity)
        this.options.fill = new this.ol.style.Fill({
          color: fillColor,
        })
      }

      // 构建option中的边框
      let strokeColor, strokeWidth, strokeDasharray
      if (rule.Symbolizer.StrokeColor) {
        strokeColor = this.buildRgba(rule.Symbolizer.StrokeColor, rule.Symbolizer.StrokeOpacity)

        if (rule.Symbolizer.StrokeWidth && rule.Symbolizer.StrokeWidth > 1) {
          strokeWidth = rule.Symbolizer.StrokeWidth
        }

        if (rule.Symbolizer.StrokeDasharray && rule.Symbolizer.StrokeDasharray.split(' ')) {
          strokeDasharray = rule.Symbolizer.StrokeDasharray.split(' ')
        }

        this.options.stroke = new this.ol.style.Stroke({
          color: strokeColor,
          width: strokeWidth,
          lineDash: strokeDasharray,
        })
      }

      // 构建option中的标签
      if (rule.Label && JSON.stringify(rule.Label) != '{}') {
        this.options.text = {}
        this.options.text.text = this.properties[rule.Label.PropertyName]
        this.options.text.font = rule.Label.FontSize
        this.options.text.offsetX = rule.Label.AnchorPointX
        this.options.text.offsetY = rule.Label.AnchorPointY

        if (rule.Label.FillColor) {
          let fillColor = this.buildRgba(rule.Label.FillColor, rule.Label.FillOpacity)
          this.options.text.fill = new this.ol.style.Fill({
            color: fillColor,
          })
        }

        if (rule.Label.HaloFillColor) {
          let haloFillColor = this.buildRgba(rule.Label.HaloFillColor, rule.Label.HaloFillOpacity)
          this.options.text.stroke = new this.ol.style.Stroke({
            color: haloFillColor,
            width: rule.Label.HaloRadius,
          })
        }
      }
    },

    // 根据属性和比例条件进行判断
    filter: function () {
      for (let rule of this.json.Rule) {
        // 每次循环开始前将重置filterIsPass参数
        this.filterIsPass = undefined

        // 判断属性过滤条件，如果属性过滤条件参数不存在或者为空，则不做进一步的判断，直接赋值true
        if (
          rule.Filter instanceof Object == false ||
          JSON.stringify(rule.Filter) == '{}' ||
          rule.Filter.Conditions == undefined ||
          rule.Filter.Conditions.length == 0
        ) {
          this.filterIsPass = true
        } else {
          this.filterConditions(rule.Filter)
        }

        this.buildOptions(rule)

        // 判断比例条件是否符合
        // let minScale = rule.MinScaleDenominator ? rule.MinScaleDenominator : 10;
        // let maxScale = rule.MaxScaleDenominator ? rule.MaxScaleDenominator : 10000000000;
        // this.scaleIsPass = (this.scale < minScale || this.scale > maxScale) ? false : true;
        // if (this.filterIsPass && this.scaleIsPass) this.buildOptions(rule);
      }
    },

    // 根据属性过滤条件进行判断
    filterConditions: function (filter) {
      for (let condition of filter.Conditions) {
        let bool,
          val = this.properties[condition.PropertyName] + '' || ''
        switch (condition.Condition) {
          case 'PropertyIsEqualTo':
            bool = val == condition.Literal
            break

          case 'PropertyIsNotEqualTo':
            bool = val != condition.Literal
            break

          case 'PropertyIsLike':
            bool = val.indexOf(condition.Literal) > -1
            break

          case 'PropertyIsBetween':
            let num = parseFloat(val)
            bool = num >= condition.LowerBoundary.Literal && num <= condition.UpperBoundary.Literal
            break

          default:
            break
        }

        if (filter.FilterType == 'And') {
          this.filterIsPass = this.filterIsPass == undefined ? bool : this.filterIsPass && bool
        } else if (filter.FilterType == 'Or') {
          this.filterIsPass = this.filterIsPass == undefined ? bool : this.filterIsPass || bool
        }
      }
    },

    hexToRgb: function (hex) {
      let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null
    },

    buildRgba: function (hex, opa) {
      hex = this.hexToRgb(hex)
      if (hex == 'null') return ''
      return `rgba(${hex.r},${hex.g},${hex.b},${opa})`
    },
  }

  //对外接口
  window.mars3d.TaitanPbfStyle = TaitanPbfStyle
})(window)
