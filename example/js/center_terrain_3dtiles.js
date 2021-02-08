'use script' //开发环境建议开启严格模式

$(document).ready(function() {
  let inhtml = `
            <div class="infoview rightbottom">
                <input type="button" class="btn btn-primary" value="定位至山区" onclick="centerAtTerrain()" />
                <input type="button" class="btn btn-primary" value="定位至模型" onclick="centerAtModel()" />
            </div>  `
  $('body').append(inhtml)
})

function centerAtTerrain() {
  map.centerAt({
    y: 30.715648,
    x: 116.300527,
    z: 10727.2,
    heading: 2.9,
    pitch: -24.6,
    roll: 0
  })
}
let modelTest
function centerAtModel() {
  map.centerAt({
    y: 33.589536,
    x: 119.032216,
    z: 145.08,
    heading: 3.1,
    pitch: -22.9,
    roll: 0
  })

  //三维模型
  if (!modelTest) {
    modelTest = new mars3d.layer.TilesetLayer({
      url: 'http://data.marsgis.cn/3dtiles/qx-simiao/tileset.json',
      maximumScreenSpaceError: 1,
      maximumMemoryUsage: 1024,
      offset: { z: 81.5 },
      flyTo: true
    })
    map.addLayer(modelTest)
  }
}
