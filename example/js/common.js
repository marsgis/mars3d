'use script' //开发环境建议开启严格模式

//判断webgl支持
if (!mars3d.Util.webglreport()) {
  mars3d.Util.webglerror()
}

//读取 config.json 配置文件
let configUrl = 'config/config.json'
mars3d.Resource.fetchJson({ url: configUrl })
  .then(function (json) {
    //构建地图
    window.initMap(json.map3d)

    //移除遮罩
    setTimeout(removeMask, 3000)
  })
  .otherwise(function (error) {
    console.log('加载JSON出错', error)
    haoutil.alert('请检查' + configUrl + '文件路径或内部格式是否无误！', '文件加载失败')
  })

//移除遮罩
function removeMask() {
  $('#mask').remove()
}
