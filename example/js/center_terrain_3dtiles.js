'use script' //开发环境建议开启严格模式

$(document).ready(function () {
  let inhtml = `
            <div class="infoview rightbottom">
                <input type="button" class="btn btn-primary" value="定位至山区" onclick="centerAtTerrain()" />
                <input type="button" class="btn btn-primary" value="定位至模型" onclick="centerAtModel()" />
            </div>  `
  $('body').append(inhtml)
})

function centerAtTerrain() {
  map.setCameraView({ lat: 30.859414, lng: 116.28709, alt: 8617, heading: 18, pitch: -28 })
}

let modelTest
function centerAtModel() {
  map.setCameraView({ lat: 33.590452, lng: 119.032184, alt: 185, heading: 359, pitch: -34 })

  //三维模型
  if (!modelTest) {
    modelTest = new mars3d.layer.TilesetLayer({
      url: 'http://data.marsgis.cn/3dtiles/qx-simiao/tileset.json',
      maximumScreenSpaceError: 1,
      maximumMemoryUsage: 1024,
      position: { alt: 81.5 },
      flyTo: true,
    })
    map.addLayer(modelTest)
  }
}
