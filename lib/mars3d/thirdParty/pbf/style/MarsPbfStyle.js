//火星科技定义的geoserver发布的pdf的Sld样式

(function (window) {
  class MarsPbfStyle {
    constructor(options) {
      this.options = options;
      this.ol = window.ol;
    }

    //对外主要方法
    getStyle() {
      let that = this;

      return function (feature, resolution) {
        that.type = feature.getGeometry().getType();
        that.properties = feature.getProperties();
        that.resolution = resolution;
        that.scale = 1 / (0.0254 / (96 * resolution));

        //通过外部接口获取style配置信息
        var styleCfg = that.options.getStyle(that.properties, that);

        var style = {};
        if (styleCfg.stroke) {
          //线
          style.stroke = new ol.style.Stroke({ color: styleCfg.color, width: styleCfg.width });
        }
        if (styleCfg.fill) {
          //面
          style.fill = new ol.style.Fill({ color: styleCfg.fillColor });
        }

        // 组装层级样式
        style.zIndex = that.options.zIndex || 1;

        return [new ol.style.Style(style)];
      };
    }
  }

  //对外接口
  window.mars3d.MarsPbfStyle = MarsPbfStyle;
})(window);
