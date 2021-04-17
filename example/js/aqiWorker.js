'use script' //开发环境建议开启严格模式

var url = 'https://api.waqi.info/mapq/bounds/?bounds={RECTANGLE}&inc=placeholders&k={KEY}&_={DATA}'
var table = [
  { level: '一级（优）', influence: '空气质量令人满意，基本无空气污染', suggestion: '	各类人群可正常活动' },
  {
    level: '二级（良）',
    influence: '空气质量可接受，但某些污染物可能对极少数异常敏感人群健康有较弱影响',
    suggestion: '心脏病和肺病患者症状显著加剧，运动耐受力降低，健康人群普遍出现症状',
  },
  {
    level: '三级（轻度污染）',
    influence: '易感人群症状有轻度加剧，健康人群出现刺激症状',
    suggestion: '儿童、老年人及心脏病、呼吸系统疾病患者应减少长时间、高强度的户外锻炼',
  },
  {
    level: '四级（中度污染）',
    influence: '易感人群症状有轻度加剧，健康人群出现刺激症状',
    suggestion: '儿童、老年人及心脏病、呼吸系统疾病患者避免长时间、高强度的户外锻炼，一般人群适量减少户外运动',
  },
  {
    level: '五级（重度污染）',
    influence: '心脏病和肺病患者症状显著加剧，运动耐受力降低，健康人群普遍出现症状',
    suggestion: '儿童、老年人及心脏病、肺病患者应停留在室内，停止户外运动，一般人群减少户外运动',
  },
  {
    level: '六级（严重污染）',
    influence: '心脏病和肺病患者症状显著加剧，运动耐受力降低，健康人群普遍出现症状',
    suggestion: '儿童、老年人和病人应停留在室内，避免体力消耗，一般人群避免户外活动',
  },
]

var xmlHttpRequest
var nWidth = 500
var currTime

onmessage = function (e) {
  let bounds = e.data.bounds
  currTime = new Date().getTime()

  var strKey = jskey()
  var nowUrl = url.replace('{RECTANGLE}', bounds).replace('{KEY}', strKey).replace('{DATA}', currTime)

  xmlHttpRequest = new XMLHttpRequest()

  //2.设置回调函数
  xmlHttpRequest.onreadystatechange = callback

  //3.初始化XMLHttpRequest组建
  xmlHttpRequest.open('POST', nowUrl, true)

  //4.发送请求
  xmlHttpRequest.send()
}

function callback() {
  if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 200) {
    var entityTable = []
    ////////////////////////////////////////////////////
    var currentData = JSON.parse(xmlHttpRequest.responseText)
    for (var i = currentData.length - 1; i >= 0; i--) {
      var item = currentData[i]
      var aqi = parseInt(item.aqi)
      if (!isNumber(aqi)) {
        continue
      }

      var level = 0
      if (aqi > nWidth) {
        level = 5
        aqi = nWidth - 1
      } else {
        if (aqi > 300) {
          level = 5
        } else if (aqi > 200) {
          level = 4
        } else if (aqi > 150) {
          level = 3
        } else if (aqi > 100) {
          level = 2
        } else if (aqi > 50) {
          level = 1
        }
      }

      var newItem = {
        ...item,
        aqi: aqi,
        level: table[level].level,
        influence: table[level].influence,
        suggestion: table[level].suggestion,
      }
      entityTable.push(newItem)
    }
    //////////////////////////////////////////////////////
    //self代表子线程自身
    self.postMessage({ currTime: currTime, entityTable: entityTable })
    self.close()
  } else if (xmlHttpRequest.readyState == 4 && xmlHttpRequest.status == 0) {
    self.postMessage({ currTime: currTime, entityTable: [] })
    self.close()
  }
}

function isNumber(obj) {
  return typeof obj === 'number' && !isNaN(obj)
}

function jskey() {
  return (function () {
    var u = ''
    decodeURIComponent('%603Z3F%7BWS%3A3BSBdIRlJTySXYnmecFR%2CF%7BeSGHhkMh%3E%3E')
      .split('')
      .forEach(function (c) {
        u += String.fromCharCode(c.charCodeAt(0) - 1)
      })
    return u
  })()
}
