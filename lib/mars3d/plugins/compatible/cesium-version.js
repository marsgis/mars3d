//兼容不同版本cesium，补充官方删除更改的方法或类名 by mars3d.cn

//兼容1.73（2020-9-1）删除的方法
Cesium.BingMapsApi = { defaultKey: "" };
Cesium.MapboxApi = { defaultAccessToken: "" };

//兼容1.67（2020-3-3）删除的方法
if (!Cesium.defineProperties) Cesium.defineProperties = Object.defineProperties;
if (!Cesium.isArray) Cesium.isArray = Array.isArray;

//兼容1.62（2019-10-01）改名的方法
if (!Cesium.Matrix4.getMatrix3)
  Cesium.Matrix4.getMatrix3 = Cesium.Matrix4.getRotation;
if (!Cesium.TileMapServiceImageryProvider)
  Cesium.TileMapServiceImageryProvider =
    Cesium.createTileMapServiceImageryProvider;

if (!Cesium.createTileMapServiceImageryProvider) {
  Cesium.createTileMapServiceImageryProvider = function (options) {
    return new Cesium.TileMapServiceImageryProvider(options);
  };
}

//兼容1.50 （2018-10-01)版本更改了名称，造成部分3dtiles可能会出现加载不上导致渲染停止的错误。
//错误说明为：RuntimeError: Unsupported glTF Extension: KHR_technique_webgl
//原因：KHR_technique_webgl扩展新版Cesium已经不支持的缘故，需要升级一下gltf数据，使用KHR_techniques_webgl扩展即可(注意多了一个s)。
try {
  // var fixGltf = function (gltf) {
  //     if (!gltf.extensionsUsed || !gltf.extensionsUsed.indexOf || !gltf.extensionsRequired) {
  //         return;
  //     }
  //     var v = gltf.extensionsUsed.indexOf('KHR_technique_webgl');
  //     if (v == -1) return;
  //     // 中招了。。
  //     var t = gltf.extensionsRequired.indexOf('KHR_technique_webgl');
  //     gltf.extensionsRequired.splice(t, 1, 'KHR_techniques_webgl');
  //     gltf.extensionsUsed.splice(v, 1, 'KHR_techniques_webgl');
  //     gltf.extensions = gltf.extensions || {};
  //     gltf.extensions['KHR_techniques_webgl'] = {};
  //     gltf.extensions['KHR_techniques_webgl'].programs = gltf.programs;
  //     gltf.extensions['KHR_techniques_webgl'].shaders = gltf.shaders;
  //     gltf.extensions['KHR_techniques_webgl'].techniques = gltf.techniques;
  //     var techniques = gltf.extensions['KHR_techniques_webgl'].techniques;
  //     gltf.materials.forEach(function (mat, index) {
  //         gltf.materials[index].extensions || (gltf.materials[index].extensions = { KHR_technique_webgl: {} });
  //         gltf.materials[index].extensions['KHR_technique_webgl'].values = gltf.materials[index].values;
  //         gltf.materials[index].extensions['KHR_techniques_webgl'] = gltf.materials[index].extensions['KHR_technique_webgl'];
  //         var myMaterialExtension = gltf.materials[index].extensions['KHR_techniques_webgl'];
  //         myMaterialExtension.technique || (myMaterialExtension.technique = gltf.materials[index].technique);
  //         for (var value in myMaterialExtension.values) {
  //             var us = techniques[myMaterialExtension.technique].uniforms;
  //             for (var key in us) {
  //                 if (us[key] === value) {
  //                     myMaterialExtension.values[key] = myMaterialExtension.values[value];
  //                     delete myMaterialExtension.values[value];
  //                     break;
  //                 }
  //             }
  //         };
  //     });
  //     techniques.forEach(function (t) {
  //         for (var attribute in t.attributes) {
  //             var name = t.attributes[attribute];
  //             t.attributes[attribute] = t.parameters[name];
  //         };
  //         for (var uniform in t.uniforms) {
  //             var name = t.uniforms[uniform];
  //             t.uniforms[uniform] = t.parameters[name];
  //         };
  //     });
  // }
  // Object.defineProperties(Cesium.Model.prototype, {
  //     _cachedGltf: {
  //         set: function (value) {
  //             this._my_cachedGltf = value;
  //             if (this._my_cachedGltf && this._my_cachedGltf._gltf) {
  //                 fixGltf(this._my_cachedGltf._gltf);
  //             }
  //         },
  //         get: function () {
  //             return this._my_cachedGltf;
  //         }
  //     }
  // });
} catch (e) {
  console.log(e);
}
