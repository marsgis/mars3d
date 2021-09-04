//entity示例中的图层通用js

//在图层级处理一些事物
function initLayerManager(graphicLayer) {
  //在layer上绑定监听事件
  graphicLayer.on(mars3d.EventType.click, function (event) {
    console.log("监听layer，单击了矢量对象", event);
  });
  // graphicLayer.on(mars3d.EventType.mouseOver, function(event) {
  //   console.log('监听layer，鼠标移入了矢量对象', event)
  // })
  // graphicLayer.on(mars3d.EventType.mouseOut, function(event) {
  //   console.log('监听layer，鼠标移出了矢量对象', event)
  // })

  //可在图层上绑定popup,对所有加到这个图层的矢量数据都生效
  bindLayerPopup(graphicLayer);

  $("#chkPopup").change(function () {
    let val = $(this).is(":checked");

    if (val) {
      bindLayerPopup(graphicLayer);
    } else {
      graphicLayer.unbindPopup();
    }
  });

  //可在图层上绑定tooltip,对所有加到这个图层的矢量数据都生效
  $("#chkTooltip").change(function () {
    let val = $(this).is(":checked");

    if (val) {
      graphicLayer.bindTooltip("我是layer上绑定的Tooltip");
    } else {
      graphicLayer.unbindTooltip();
    }
  });

  //可在图层绑定右键菜单,对所有加到这个图层的矢量数据都生效
  bindLayerContextMenu(graphicLayer);
  $("#chkContextMenu").change(function () {
    let val = $(this).is(":checked");

    if (val) {
      bindLayerContextMenu(graphicLayer);
    } else {
      graphicLayer.unbindContextMenu(true);
    }
  });

  $("#chkHasEdit").change(function () {
    let val = $(this).is(":checked");

    graphicLayer.hasEdit = val; //启用编辑
  });

  $("#chkShow").change(function () {
    let val = $(this).is(":checked");

    graphicLayer.show = val; //显示隐藏
  });

  $("#btnClear").click(function () {
    graphicLayer.clear();
  });

  $("#btnExpFile").click(function () {
    // window.layer.msg('该功能在开发完善中……')
    // return

    if (graphicLayer.length === 0) {
      window.layer.msg("当前没有标注任何数据，无需保存！");
      return;
    }

    let geojson = graphicLayer.toGeoJSON();
    haoutil.file.downloadFile("我的标注.json", JSON.stringify(geojson));
  });

  $("#btnImpFile").click(function () {
    $("#input_draw_file").click();
  });

  function clearSelectFile() {
    if (!window.addEventListener) {
      document.getElementById("input_draw_file").outerHTML += ""; //IE
    } else {
      document.getElementById("input_draw_file").value = ""; //FF
    }
  }

  $("#input_draw_file").change(function (e) {
    let file = this.files[0];

    let fileName = file.name;
    let fileType = fileName.substring(fileName.lastIndexOf(".") + 1, fileName.length).toLowerCase();

    if (fileType == "json" || fileType == "geojson") {
      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onloadend = function (e) {
        let json = this.result;
        graphicLayer.loadGeoJSON(json, {
          flyTo: true,
        });
        clearSelectFile();
      };
    } else if (fileType == "kml") {
      let reader = new FileReader();
      reader.readAsText(file, "UTF-8");
      reader.onloadend = function (e) {
        let strkml = this.result;
        kgUtil.toGeoJSON(strkml).then((geojoson) => {
          console.log("kml2geojson", geojoson);

          graphicLayer.loadGeoJSON(geojoson, {
            flyTo: true,
            // symbol: function (attr, style, featue) {
            //   let geoType = featue.geometry?.type
            //   if (geoType == 'Point') {
            //     return {
            //       image: 'img/marker/di3.png',
            //       verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
            //       scale: 0.4,
            //       label: {
            //         text: attr.name,
            //         font_size: 18,
            //         color: '#ffffff',
            //         outline: true,
            //         outlineColor: '#000000',
            //         pixelOffsetY: -50,
            //         scaleByDistance: true,
            //         scaleByDistance_far: 990000,
            //         scaleByDistance_farValue: 0.3,
            //         scaleByDistance_near: 10000,
            //         scaleByDistance_nearValue: 1,
            //       },
            //     }
            //   }
            //   return style
            // },
          });
          clearSelectFile();
        });
        clearSelectFile();
      };
    } else if (fileType == "kmz") {
      //加载input文件控件的二进制流
      kgUtil.toGeoJSON(file).then((geojoson) => {
        console.log("kmz2geojson", geojoson);

        graphicLayer.loadGeoJSON(geojoson, {
          flyTo: true,
        });
        clearSelectFile();
      });
    } else {
      window.layer.msg("暂不支持 " + fileType + " 文件类型的数据！");
      clearSelectFile();
    }
  });
}

function bindLayerPopup(graphicLayer) {
  graphicLayer.bindPopup(function (event) {
    let attr = event.graphic?.attr || {};
    attr.test1 = "测试属性";
    // attr["视频"] = `<video src='http://data.mars3d.cn/file/video/lukou.mp4' controls autoplay style="width: 300px;" ></video>`;

    return mars3d.Util.getTemplateHtml({ title: "layer上绑定的Popup", template: "all", attr: attr });
  });
}

function bindLayerContextMenu(graphicLayer) {
  graphicLayer.bindContextMenu([
    {
      text: "开始编辑对象",
      iconCls: "fa fa-edit",
      show: function (e) {
        let graphic = e.graphic;
        if (!graphic || !graphic.startEditing) {
          return false;
        }
        return !graphic.isEditing;
      },
      callback: function (e) {
        let graphic = e.graphic;
        if (!graphic) {
          return false;
        }
        if (graphic) {
          graphicLayer.startEditing(graphic);
        }
      },
    },
    {
      text: "停止编辑对象",
      iconCls: "fa fa-edit",
      show: function (e) {
        let graphic = e.graphic;
        if (!graphic) {
          return false;
        }
        return graphic.isEditing;
      },
      callback: function (e) {
        let graphic = e.graphic;
        if (!graphic) {
          return false;
        }
        if (graphic) {
          graphicLayer.stopEditing(graphic);
        }
      },
    },
    {
      text: "删除对象",
      iconCls: "fa fa-trash-o",
      show: (event) => {
        let graphic = event.graphic;
        if (!graphic || graphic.isDestroy) {
          return false;
        } else {
          return true;
        }
      },
      callback: function (e) {
        let graphic = e.graphic;
        if (!graphic) {
          return;
        }
        graphicLayer.removeGraphic(graphic);
      },
    },
    {
      text: "计算长度",
      iconCls: "fa fa-medium",
      show: function (e) {
        let graphic = e.graphic;
        if (!graphic) {
          return false;
        }
        return (
          graphic.type === "polyline" ||
          graphic.type === "polylineP" ||
          graphic.type === "curve" ||
          graphic.type === "curveP" ||
          graphic.type === "polylineVolume" ||
          graphic.type === "polylineVolumeP" ||
          graphic.type === "corridor" ||
          graphic.type === "corridorP" ||
          graphic.type === "wall" ||
          graphic.type === "wallP"
        );
      },
      callback: function (e) {
        let graphic = e.graphic;
        let strDis = mars3d.MeasureUtil.formatDistance(graphic.distance);
        haoutil.alert("该对象的长度为:" + strDis);
      },
    },
    {
      text: "计算周长",
      iconCls: "fa fa-medium",
      show: function (e) {
        let graphic = e.graphic;
        if (!graphic) {
          return false;
        }
        return (
          graphic.type === "circle" ||
          graphic.type === "circleP" ||
          graphic.type === "rectangle" ||
          graphic.type === "rectangleP" ||
          graphic.type === "polygon" ||
          graphic.type === "polygonP"
        );
      },
      callback: function (e) {
        let graphic = e.graphic;
        let strDis = mars3d.MeasureUtil.formatDistance(graphic.distance);
        haoutil.alert("该对象的周长为:" + strDis);
      },
    },
    {
      text: "计算面积",
      iconCls: "fa fa-reorder",
      show: function (e) {
        let graphic = e.graphic;
        if (!graphic) {
          return false;
        }
        return (
          graphic.type === "circle" ||
          graphic.type === "circleP" ||
          graphic.type === "rectangle" ||
          graphic.type === "rectangleP" ||
          graphic.type === "polygon" ||
          graphic.type === "polygonP" ||
          graphic.type === "scrollWall" ||
          graphic.type === "water"
        );
      },
      callback: function (e) {
        let graphic = e.graphic;
        let strArea = mars3d.MeasureUtil.formatArea(graphic.area);
        haoutil.alert("该对象的面积为:" + strArea);
      },
    },
  ]);
}

//也可以在单个Graphic上做个性化管理及绑定操作
function initGraphicManager(graphic) {
  //3.在graphic上绑定监听事件
  // graphic.on(mars3d.EventType.click, function(event) {
  //   console.log('监听graphic，单击了矢量对象', event)
  // })
  // graphic.on(mars3d.EventType.mouseOver, function(event) {
  //   console.log('监听graphic，鼠标移入了矢量对象', event)
  // })
  // graphic.on(mars3d.EventType.mouseOut, function(event) {
  //   console.log('监听graphic，鼠标移出了矢量对象', event)
  // })

  //绑定Tooltip
  // graphic.bindTooltip('我是graphic上绑定的Tooltip') //.openTooltip()

  //绑定Popup

  var inthtml = `<table style="width: auto;">
            <tr>
              <th scope="col" colspan="2" style="text-align:center;font-size:15px;">我是graphic上绑定的Popup </th>
            </tr>
            <tr>
              <td>提示：</td>
              <td>这只是测试信息，可以任意html</td>
            </tr>
          </table>`;
  graphic.bindPopup(inthtml).openPopup();

  //绑定右键菜单
  graphic.bindContextMenu([
    {
      text: "删除对象[graphic绑定的]",
      iconCls: "fa fa-trash-o",
      callback: function (e) {
        let graphic = e.graphic;
        if (graphic) {
          graphic.remove();
        }
      },
    },
  ]);

  //测试 颜色闪烁
  if (graphic.startFlicker) {
    graphic.startFlicker({
      time: 20, //闪烁时长（秒）
      maxAlpha: 0.5,
      color: Cesium.Color.YELLOW,
      onEnd: function () {
        //结束后回调
      },
    });
  }
}

//取区域内的随机图标
function randomPoint() {
  var jd = haoutil.math.random(116.1 * 1000, 116.6 * 1000) / 1000;
  var wd = haoutil.math.random(30.8 * 1000, 31.1 * 1000) / 1000;
  var height = haoutil.math.random(1000, 9000);
  return new mars3d.LatLngPoint(jd, wd, height);
}
