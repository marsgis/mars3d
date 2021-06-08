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
    removeMask()
    haoutil.alert(error && error.message, '出错了')
  })

// fetch(configUrl)
//   .then(function (response) {
//     if (!response.ok) {
//       var error = new Error(response.statusText)
//       error.response = response
//       throw error
//     } else {
//       return response.json()
//     }
//   })
//   .then((json) => {
//     //构建地图
//     window.initMap(json.map3d)
//     //移除遮罩
//     setTimeout(removeMask, 3000)
//   })
//   .catch(function (error) {
//     console.log('加载JSON出错', error)

//     removeMask()
//     haoutil.alert(error?.message, '出错了')
//   })

//移除遮罩
function removeMask() {
  $('#mask').remove()
}

function openTipView(content, title) {
  window.layer.open({
    type: 1,
    title: title || '功能 和 已知问题 提示',
    offset: 'rt',
    shade: false,
    skin: 'layer-mars-dialog animation-scale-up',
    content: content,
  })
}

if ($('#tipView').length > 0) {
  openTipView($('#tipView'))
}
