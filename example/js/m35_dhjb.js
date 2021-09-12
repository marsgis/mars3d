//脚本对象方法
function initEditorJS() {
  //特征点：山顶点
  var workPoint1Sdd = {
    activate: function () {
      JB.showPanel("山顶点");
      //视角定位
      map.centerAt({ y: 36.061395, x: 113.94298, alt: 1903, heading: 0, pitch: -57.5 });

      //清除所有点
      workPoint1Sdd.clearPoint();
      workPoint2Abd.clearPoint();
      workPoint3Pdbhd.clearPoint();
      workPoint4Sjd.clearPoint();
      workPoint5Sjpdbhd.clearPoint();
      workPoint6Qxbhd.clearPoint();

      workLine1Sjx.clearLine();
      workLine2Sgx.clearLine();

      var arrPoint = [
        [113.944168, 36.071057, 536.1],
        [113.939593, 36.072087, 510.42],
        [113.942957, 36.067383, 462.29],
        [113.949512, 36.07117, 460.67],
      ];
      this.pointLayer = createArrPoint(arrPoint); //添加点
      this.textLayer = createArrText(arrPoint, "山顶点"); //添加注记
    },
    //移除点
    clearPoint: function () {
      if (this.pointLayer) {
        this.pointLayer.destroy();
        delete this.pointLayer;
      }
    },
    disable: function () {
      JB.closePanel();

      if (this.textLayer) {
        this.textLayer.destroy();
        delete this.textLayer;
      }
    },
  };

  //特征点：鞍部点
  var workPoint2Abd = {
    activate: function () {
      JB.showPanel("鞍部点");
      //视角定位
      map.centerAt(
        {
          y: 36.06062,
          x: 113.942836,
          z: 1351,
          heading: 0,
          pitch: -43.5,
        },
        {
          complete: () => {
            JB.startRotatePoint();
            this.timeOut = setTimeout(() => {
              JB.stopRotatePoint();
            }, 6000);
          },
        }
      );

      var arrPoint = [
        [113.943496, 36.068508, 449.63],
        [113.941962, 36.071444, 481.09],
        [113.948862, 36.071282, 453.99],
      ];
      this.pointLayer = createArrPoint(arrPoint);
      this.textLayer = createArrText(arrPoint, "鞍部点"); //添加注记
    },
    //移除点
    clearPoint: function () {
      if (this.pointLayer) {
        this.pointLayer.destroy();
        delete this.pointLayer;
      }
    },
    disable: function () {
      JB.closePanel();

      JB.stopRotatePoint();
      if (this.timeOut) {
        clearTimeout(this.timeOut);
        delete this.timeOut;
      }

      if (this.textLayer) {
        this.textLayer.destroy();
        delete this.textLayer;
      }
    },
  };

  //特征点：坡度变换点
  var workPoint3Pdbhd = {
    activate: function () {
      JB.showPanel("坡度变换点");
      //视角定位
      map.centerAt({ y: 36.062523, x: 113.946202, z: 1343.59, heading: 353.6, pitch: -42, roll: 0 });

      var arrPoint = [
        [113.945927, 36.069593, 431.33],
        [113.94593, 36.073602, 427.86],
        [113.942159, 36.072318, 443.86],
        [113.940766, 36.0693, 389.26],
      ];
      this.pointLayer = createArrPoint(arrPoint);
      this.textLayer = createArrText(arrPoint, "坡度变换点"); //添加注记
    },
    //移除点
    clearPoint: function () {
      if (this.pointLayer) {
        this.pointLayer.destroy();
        delete this.pointLayer;
      }
    },
    disable: function () {
      JB.closePanel();

      if (this.textLayer) {
        this.textLayer.destroy();
        delete this.textLayer;
      }
    },
  };

  //特征点：山脚点
  var workPoint4Sjd = {
    activate: function () {
      JB.showPanel("山脚点");
      //视角定位
      map.centerAt({ y: 36.05423, x: 113.945328, z: 1087.7, heading: 352.4, pitch: -25.4, roll: 360 });

      var arrPoint = [
        [113.944745, 36.063709, 350.32],
        [113.950068, 36.066712, 363.01],
        [113.936588, 36.065365, 351.94],
      ];
      this.pointLayer = createArrPoint(arrPoint);
      this.textLayer = createArrText(arrPoint, "山脚点"); //添加注记
    },
    //移除点
    clearPoint: function () {
      if (this.pointLayer) {
        this.pointLayer.destroy();
        delete this.pointLayer;
      }
    },
    disable: function () {
      JB.closePanel();

      if (this.textLayer) {
        this.textLayer.destroy();
        delete this.textLayer;
      }
    },
  };

  //特征点：山脚坡度变化点
  var workPoint5Sjpdbhd = {
    activate: function () {
      JB.showPanel("山脚坡度变换点");
      //视角定位
      map.centerAt({ y: 36.055819, x: 113.950153, z: 696.74, heading: 334.4, pitch: -13.2, roll: 359.9 });

      var arrPoint = [
        [113.948382, 36.068049, 414.36],
        [113.938975, 36.06497, 395.87],
        [113.941956, 36.064592, 365.89],
      ];
      this.pointLayer = createArrPoint(arrPoint);
      this.textLayer = createArrText(arrPoint, "山脚坡度变换点"); //添加注记
    },
    //移除点
    clearPoint: function () {
      if (this.pointLayer) {
        this.pointLayer.destroy();
        delete this.pointLayer;
      }
    },
    disable: function () {
      JB.closePanel();

      if (this.textLayer) {
        this.textLayer.destroy();
        delete this.textLayer;
      }
    },
  };

  //特征点：倾斜变换点
  var workPoint6Qxbhd = {
    activate: function () {
      JB.showPanel("倾斜变换点");
      //视角定位
      map.centerAt(
        { y: 36.064181, x: 113.94491, z: 1139.24, heading: 352.6, pitch: -41.2, roll: 360 },
        {
          complete: function () {
            JB.startRotatePoint();
          },
        }
      );

      var arrPoint = [
        [113.941119, 36.070139, 415.86],
        [113.945836, 36.069939, 453.99],
        [113.942108, 36.072372, 443.98],
        [113.945918, 36.073087, 452.72],
      ];
      this.pointLayer = createArrPoint(arrPoint);
      this.textLayer = createArrText(arrPoint, "倾斜变换点"); //添加注记
    },
    //移除点
    clearPoint: function () {
      if (this.pointLayer) {
        this.pointLayer.destroy();
        delete this.pointLayer;
      }
    },
    disable: function () {
      JB.closePanel();

      if (this.textLayer) {
        this.textLayer.destroy();
        delete this.textLayer;
      }
    },
  };

  //特征线：山脊线
  var workLine1Sjx = {
    activate: function () {
      JB.showPanel("山脊线");
      map.centerAt({
        y: 36.05982,
        x: 113.943515,
        z: 1534.08,
        heading: 354.6,
        pitch: -46.1,
        roll: 0,
      });

      workPoint6Qxbhd.clearPoint();

      // 以防止暂停过后继续转换视角
      JB.stopRotatePoint();

      //添加线
      var lineArr = [
        {
          point: [
            [113.944168, 36.071057, 536.1],
            [113.943975, 36.070229, 497.2],
            [113.943899, 36.0693, 467.49],
            [113.943496, 36.068508, 449.63],
          ],
        },
        {
          point: [
            [113.944168, 36.071057, 536.1],
            [113.943383, 36.071112, 517.51],
            [113.94277, 36.071261, 495.99],
            [113.941962, 36.071444, 481.09],
          ],
        },
        {
          point: [
            [113.944168, 36.071057, 536.1],
            [113.945999, 36.071174, 506.33],
            [113.946798, 36.071624, 506.06],
            [113.948012, 36.071508, 485.02],
            [113.948862, 36.071282, 453.99],
          ],
        },
        {
          point: [
            [113.939593, 36.072087, 510.42],
            [113.941962, 36.071444, 481.09],
          ],
        },
        {
          point: [
            [113.942957, 36.067383, 462.29],
            [113.943496, 36.068508, 449.63],
          ],
        },
        {
          point: [
            [113.939593, 36.072087, 510.42],
            [113.93902, 36.071731, 506.14],
            [113.938092, 36.071371, 492.84],
            [113.937261, 36.07093, 493.41],
            [113.936637, 36.070518, 477.11],
          ],
        },
        {
          point: [
            [113.944168, 36.071057, 536.1],
            [113.944119, 36.07132, 538.46],
            [113.943971, 36.071771, 534.68],
            [113.944034, 36.072314, 524.35],
            [113.944123, 36.073456, 477.01],
            [113.944412, 36.074636, 432.25],
          ],
        },
        {
          point: [
            [113.939593, 36.072087, 510.42],
            [113.939058, 36.072637, 507.68],
            [113.938715, 36.073519, 506.89],
            [113.937723, 36.07391, 483.06],
          ],
        },
      ];

      this.clearLine();

      this.polyLineLayer = new mars3d.layer.GraphicLayer();
      map.addLayer(this.polyLineLayer);

      for (var i = 0; i < lineArr.length; i++) {
        var item = lineArr[i];

        let line = new mars3d.graphic.PolylineEntity({
          positions: item.point,
          style: {
            width: 5,
            clampToGround: true,
            material: mars3d.MaterialUtil.createMaterialProperty(mars3d.MaterialType.LineFlow, {
              color: Cesium.Color.YELLOW,
              speed: 3, //控制速度
              url: "img/textures/lineClr.png",
            }),
          },
          tooltip: "山脊线",
        });
        this.polyLineLayer.addGraphic(line);
      }
      this.timeOut = setTimeout(() => {
        if (this.polyLineLayer) {
          this.polyLineLayer.eachGraphic((graphic) => {
            delete graphic.style.material;
            graphic.setStyle({
              material: Cesium.Color.YELLOW,
            });
          });
        }
      }, 4000);
    },
    clearLine: function () {
      if (this.polyLineLayer) {
        this.polyLineLayer.destroy();
        delete this.polyLineLayer;
      }
    },
    disable: function () {
      JB.closePanel();

      if (this.timeOut) {
        clearTimeout(this.timeOut);
        delete this.timeOut;
      }
      if (this.polyLineLayer) {
        this.polyLineLayer.eachGraphic(function (graphic) {
          delete graphic.style.material;
          graphic.setStyle({
            material: Cesium.Color.YELLOW,
          });
        });
      }
    },
  };

  //特征线：山谷线
  var workLine2Sgx = {
    activate: function () {
      JB.showPanel("山谷线");
      map.centerAt({ y: 36.05648, x: 113.944653, z: 2092, heading: 354.4, pitch: -44.6 });

      //添加线
      var lineArr = [
        {
          point: [
            [113.941971, 36.073964, 403.46],
            [113.941941, 36.073397, 414.46],
            [113.942012, 36.072802, 427.98],
            [113.94214, 36.072218, 445.57],
            [113.941901, 36.071582, 482.41],
            [113.941634, 36.071088, 468.32],
            [113.941371, 36.070708, 446.86],
            [113.941284, 36.070435, 431.69],
            [113.94103, 36.069954, 408.35],
            [113.941016, 36.06991, 406.56],
            [113.940603, 36.069227, 385.57],
            [113.939335, 36.067923, 367.22],
          ],
        },
        {
          point: [
            [113.946025, 36.074151, 403.28],
            [113.945954, 36.073467, 433.98],
            [113.945871, 36.072436, 484.02],
            [113.94603, 36.07161, 507.66],
            [113.946168, 36.071048, 501.99],
            [113.945904, 36.070101, 468.17],
            [113.945797, 36.069853, 447.03],
            [113.946002, 36.069094, 406.59],
            [113.946279, 36.067475, 378.83],
          ],
        },
      ];

      this.clearLine();

      this.polyLineLayer = new mars3d.layer.GraphicLayer();
      map.addLayer(this.polyLineLayer);

      for (var i = 0; i < lineArr.length; i++) {
        var item = lineArr[i];

        let line = new mars3d.graphic.PolylineEntity({
          positions: item.point,
          style: {
            width: 5,
            clampToGround: true,
            material: mars3d.MaterialUtil.createMaterialProperty(mars3d.MaterialType.LineFlow, {
              color: Cesium.Color.AQUA,
              speed: 3, //控制速度
              url: "img/textures/lineClr.png",
            }),
          },
          tooltip: "山谷线",
        });
        this.polyLineLayer.addGraphic(line);
      }

      this.timeOut = setTimeout(() => {
        if (this.polyLineLayer) {
          this.polyLineLayer.eachGraphic((graphic) => {
            delete graphic.style.material;
            graphic.setStyle({
              material: new Cesium.PolylineDashMaterialProperty({
                color: Cesium.Color.AQUA,
                dashLength: 10.0,
              }),
            });
          });
        }
      }, 4000);
    },
    clearLine: function () {
      if (this.polyLineLayer) {
        this.polyLineLayer.destroy();
        delete this.polyLineLayer;
      }
    },
    disable: function () {
      JB.closePanel();

      if (this.timeOut) {
        clearTimeout(this.timeOut);
        delete this.timeOut;
      }

      if (this.polyLineLayer) {
        this.polyLineLayer.eachGraphic(function (graphic) {
          delete graphic.style.material;
          graphic.setStyle({
            material: new Cesium.PolylineDashMaterialProperty({
              color: Cesium.Color.AQUA,
              dashLength: 10.0,
            }),
          });
        });
      }
    },
  };

  //特征线：俯瞰
  var workLine3Fk = {
    activate: function () {
      JB.showPanel("俯瞰");
      map.centerAt({ y: 36.070613, x: 113.943032, z: 3059, heading: 356.6, pitch: -88.9 });
    },
    disable: function () {
      JB.closePanel();
    },
  };

  //绘制过程：计算通过点
  var workDgx1Point = {
    activate: function () {
      JB.showPanel(`等高线计算过程展示 <br />
        <ul class="contentUl">
          <li>完成地性线的连接工作后，即可在同一坡度的两相邻点之间内插出每整米高程的等高线通过点。</li>
          <li>前提：相邻点等坡度, 原理：比例内插</li>
          <li><img src="img/jiaoben/dgx1.jpg" style="height:150px"/></li>
          <li>假设ab间的坡度是均匀的，则根据a和b点间的高差为6.4m，ab线上图上的平距为48mm，由a点到22m等高线的高差为0.8m，由b点到27m等高线的高差为0.6m，则由a点到22m等高线及由b点到27m等高线的线长，x1和x2可以根据相似三角形状原理得到如下关系式</li>
          <li><img src="img/jiaoben/dgx2.jpg" style="height:80px;"/></li>
        <ul>`);

      map.centerAt({ y: 36.06874, x: 113.948078, z: 811.62, heading: 292.6, pitch: -39.6 });

      var arrPoint = [
        [113.944168, 36.071057, 536.1],
        [113.94405, 36.070572, 519.49],
        [113.943981, 36.070254, 498.84],
        [113.943944, 36.069863, 480.01],
      ];
      this.pointLayer = createArrPoint(arrPoint);

      var labelText = ["b", "m", "g", "f", "h"];
      this.pointLayer.eachGraphic((graphic, index) => {
        graphic.setStyle({
          label: {
            text: labelText[index] || "",
            color: "yellow",
            font_size: 30,
          },
        });
      });

      this.lineGraphic = new mars3d.graphic.PolylineEntity({
        positions: [
          [113.944168, 36.071057, 536.1],
          [113.94405, 36.070572, 519.49],
          [113.943981, 36.070254, 498.84],
          [113.943944, 36.069863, 480.01],
        ],
        style: {
          width: 5,
          clampToGround: true,
          material: mars3d.MaterialUtil.createMaterialProperty(mars3d.MaterialType.LineFlow, {
            color: Cesium.Color.MAGENTA,
            speed: 3, //控制速度
            url: "img/textures/lineClr.png",
          }),
        },
      });
      map.graphicLayer.addGraphic(this.lineGraphic);
    },
    disable: function () {
      JB.closePanel();

      if (this.pointLayer) {
        this.pointLayer.destroy();
        delete this.pointLayer;
      }
      if (this.lineGraphic) {
        this.lineGraphic.remove();
        delete this.lineGraphic;
      }
    },
  };

  //绘制过程：等高线绘制
  var workDgx2Line = {
    activate: function () {
      JB.showPanel(`等高线通过点绘制 <br /><img src="img/jiaoben/dgx3.jpg" style="width:100%;"/>`);
      map.centerAt({ lat: 36.069792, lng: 113.944474, alt: 1708, heading: 357, pitch: -82 });

      var arrPoint = [
        [113.946061, 36.070867, 500.37],
        [113.943193, 36.070854, 499.86],
        [113.943335, 36.072232, 500.31],
        [113.94469, 36.072746, 499.44],
        [113.946753, 36.072311, 499.98],
        [113.945146, 36.071556, 519.6],
        [113.944671, 36.072169, 519.95],
        [113.943607, 36.071978, 519.48],
        [113.94405, 36.070572, 519.49],
        [113.944739, 36.070756, 520.55],
      ];
      this.pointLayer = createArrPoint(arrPoint);

      this.polyline1 = new mars3d.graphic.PolylineEntity({
        positions: [
          [113.945146, 36.071556, 519.6],
          [113.945021, 36.071174, 520.26],
          [113.945016, 36.070846, 519.28],
          [113.944739, 36.070756, 520.55],
          [113.944624, 36.070604, 520.01],
          [113.944312, 36.070527, 519.49],
          [113.94405, 36.070572, 519.49],
          [113.943976, 36.070636, 520.27],
          [113.943861, 36.070697, 520.12],
          [113.943354, 36.071204, 520],
          [113.943607, 36.071978, 519.48],
          [113.943847, 36.072224, 520.7],
          [113.943889, 36.072331, 520.5],
          [113.944011, 36.072474, 520.19],
          [113.944671, 36.072169, 519.95],
          [113.94511, 36.071581, 520.05],
          [113.945146, 36.071556, 519.6],
        ],
        style: {
          width: 3,
          color: "#ff0000",
          clampToGround: true,
          closure: true,
        },
      });
      map.graphicLayer.addGraphic(this.polyline1);

      this.polyline2 = new mars3d.graphic.PolylineEntity({
        positions: [
          [113.946061, 36.070867, 500.37],
          [113.945214, 36.070585, 500.84],
          [113.944658, 36.070309, 500.26],
          [113.943981, 36.070254, 498.84],
          [113.943577, 36.070474, 499.95],
          [113.943193, 36.070854, 499.86],
          [113.942839, 36.071247, 498.53],
          [113.942921, 36.071562, 499.55],
          [113.943109, 36.071823, 500],
          [113.943335, 36.072232, 500.31],
          [113.94356, 36.072587, 501.02],
          [113.943696, 36.072889, 499.57],
          [113.944123, 36.073112, 496.9],
          [113.94469, 36.072746, 499.44],
          [113.944974, 36.072371, 501.42],
          [113.945401, 36.071963, 500.52],
          [113.945867, 36.071986, 500.11],
          [113.946358, 36.071794, 500.05],
          [113.946546, 36.071771, 500.47],
          [113.946515, 36.071902, 500.13],
          [113.94662, 36.072107, 499.93],
          [113.946618, 36.072232, 500.05],
          [113.946753, 36.072311, 499.98],
          [113.947247, 36.072043, 499.98],
          [113.947433, 36.071534, 499.67],
          [113.946848, 36.071405, 500.22],
          [113.946155, 36.070912, 499.86],
          [113.946061, 36.070867, 500.37],
        ],
        style: {
          width: 3,
          color: "#ff0000",
          clampToGround: true,
          closure: true,
        },
      });
      map.graphicLayer.addGraphic(this.polyline2);
    },
    disable: function () {
      JB.closePanel();

      if (this.pointLayer) {
        this.pointLayer.destroy();
        delete this.pointLayer;
      }
      if (this.polyline1) {
        this.polyline1.remove();
        delete this.polyline1;
      }
      if (this.polyline2) {
        this.polyline2.remove();
        delete this.polyline2;
      }
    },
  };

  //绘制过程：等高线结果
  var workDgx3End = {
    activate: function () {
      JB.showPanel("等高线结果");
      map.setCameraView(
        { y: 36.064736, x: 113.935567, z: 1276.68, heading: 52.4, pitch: -44.5, roll: 0, duration: 3 },
        {
          complete: function () {
            JB.startRotatePoint(new Cesium.Cartesian3.fromDegrees(113.942685, 36.07012, 461.53));
          },
        }
      );

      //清除所有点和线
      workPoint1Sdd.clearPoint();
      workPoint2Abd.clearPoint();
      workPoint3Pdbhd.clearPoint();
      workPoint4Sjd.clearPoint();
      workPoint5Sjpdbhd.clearPoint();
      workPoint6Qxbhd.clearPoint();

      workLine1Sjx.clearLine();
      workLine2Sgx.clearLine();

      var contourLine = new mars3d.thing.ContourLine({
        positions: [
          [113.941558, 36.078396, 370.6],
          [113.932244, 36.069158, 376.55],
          [113.942587, 36.061319, 320],
          [113.952388, 36.071267, 379.63],
          [113.941558, 36.078396, 370.6],
        ],
        spacing: 20,
        width: 1.5,
        color: Cesium.Color.RED,
      });
      map.addThing(contourLine);
      this.contourLine = contourLine;
    },
    disable: function () {
      JB.closePanel();

      JB.stopRotatePoint();

      if (this.contourLine) {
        map.removeThing(this.contourLine, true);
        this.contourLine = null;
      }
    },
  };

  //脚本配置信息（包括顺序、时间、业务对象）
  var data = [
    {
      text: "特征点",
      state: {
        opened: true,
        selected: false,
      },
      children: [
        {
          text: "山顶点",
          times: 6,
          widget: workPoint1Sdd,
        },
        {
          text: "鞍部点",
          times: 10,
          widget: workPoint2Abd,
        },
        {
          text: "坡度变换点",
          times: 6,
          widget: workPoint3Pdbhd,
        },
        {
          text: "山脚点",
          times: 6,
          widget: workPoint4Sjd,
        },
        {
          text: "山脚坡度变换点",
          times: 6,
          widget: workPoint5Sjpdbhd,
        },
        {
          text: "倾斜变换点",
          times: 6,
          widget: workPoint6Qxbhd,
        },
      ],
    },
    {
      text: "特征线",
      state: {
        opened: true,
        selected: false,
      },
      children: [
        {
          text: "山脊线",
          times: 6,
          widget: workLine1Sjx,
        },
        {
          text: "山谷线",
          times: 8,
          widget: workLine2Sgx,
        },
        {
          text: "俯瞰",
          times: 5,
          widget: workLine3Fk,
        },
      ],
    },
    {
      text: "绘制过程",
      state: {
        opened: true,
        selected: false,
      },
      children: [
        {
          text: "计算通过点",
          times: 6,
          widget: workDgx1Point,
        },
        {
          text: "等高线绘制",
          times: 6,
          widget: workDgx2Line,
        },
        {
          text: "等高线结果",
          times: 10,
          widget: workDgx3End,
        },
      ],
    },
  ];
  // eslint-disable-next-line no-undef
  dataWork.initData(data);
}

//创建点 公共方法
function createArrPoint(arrPoint) {
  var graphicLayer = new mars3d.layer.GraphicLayer();
  map.addLayer(graphicLayer);

  for (var i = 0; i < arrPoint.length; i++) {
    var item = arrPoint[i];

    var graphic = new mars3d.graphic.PointEntity({
      position: item,
      style: {
        color: "#ffffff",
        opacity: 0.9,
        outline: true,
        outlineColor: "#ff0000",
        outlineWidth: 2,
        visibleDepth: true,
        clampToGround: true,
        pixelSize: 10,
        label: {
          text: item[2] + "",
          font_size: 18,
          font_family: "楷体",
          color: Cesium.Color.AZURE,
          outline: true,
          outlineColor: Cesium.Color.BLACK,
          outlineWidth: 2,
          horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
          pixelOffset: new Cesium.Cartesian2(-10, -10), //偏移量
        },
      },
    });
    graphicLayer.addGraphic(graphic);
  }
  return graphicLayer;
}

//创建文本指示  公共方法
function createArrText(arrPoint, name) {
  var graphicLayer = new mars3d.layer.GraphicLayer();
  map.addLayer(graphicLayer);

  for (var i = 0; i < arrPoint.length; i++) {
    var item = arrPoint[i];

    //文字注记
    var graphic = new mars3d.graphic.DivGraphic({
      position: item,
      style: {
        html: `<div class="marsImgPanel1">
                <div class="title">${name}</div>
            </div >`,
        clampToGround: true,
        horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
    });
    graphicLayer.addGraphic(graphic);
  }
  return graphicLayer;
}
