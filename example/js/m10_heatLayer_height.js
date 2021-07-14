let chartsData = {
  fltj: [
    { name: '公共文化', xms: 160, zds: 10, zjl: 645 },
    { name: '公共教育', xms: 848, zds: 580, zjl: 10 },
    { name: '医疗卫生', xms: 370, zds: 10, zjl: 150560 },
    { name: '公共体育', xms: 91, zds: 0, zjl: 182 },
    { name: '社会保障', xms: 233, zds: 10, zjl: 808 },
    { name: '基层公共服务', xms: 20, zds: 10, zjl: 10 },
  ],
  zjly: [
    { name: '省级', value: 88 },
    { name: '市级', value: 127 },
    { name: '区县级', value: 175 },
    { name: '街道级', value: 270 },
    { name: '社会资本', value: 42 },
  ],
  ndtj: {
    xms: [
      { name: '2013', value: 1 },
      { name: '2014', value: 2 },
      { name: '2015', value: 6 },
      { name: '2016', value: 36 },
      { name: '2017', value: 85 },
      { name: '2018', value: 10 },
      { name: '2018年', value: 17 },
    ],
    zds: [
      { name: '2013', value: 10 },
      { name: '2014', value: 20 },
      { name: '2015', value: 30 },
      { name: '2016', value: 40 },
      { name: '2017', value: 50 },
      { name: '2018', value: 60 },
    ],
    zjl: [
      { name: '2013', value: 55600 },
      { name: '2014', value: 95600 },
      { name: '2015', value: 162896 },
      { name: '2016', value: 195761 },
      { name: '2017', value: 87068 },
      { name: '2018', value: 68393 },
    ],
  },
}

//初始化图表
function initCharts() {
  initCharts_One(chartsData.fltj)
  initCharts_Two(chartsData.zjly)
  initCharts_Three(chartsData.ndtj)
}

// chartOne  分类统计
function initCharts_One(arr) {
  for (var i = 0, len = arr.length; i < len; i++) {
    let item = arr[i]
    let html = `<li>
        <div class="title">${item.name}</div>
        <div class="conter"><span>${item.xms}</span>个，投资<span>${item.zds}</span>亿，占地<span>${item.zjl}</span>亩</div>
      </li>`
    $('#ulFLTJ').append(html)
  }
}

//chartTwo  Echart圆形  分类资金来源
function initCharts_Two(arr) {
  let data = []
  for (var i = 0; i < arr.length; i++) {
    let object = {}
    object.name = arr[i].name
    object.value = arr[i].value
    data[i] = object
  }

  setTimeout(function () {
    window.onresize = function () {
      myChart.resize()
    }
  }, 200)

  var myChart = echarts.init(document.getElementById('ul_ZJLY'))
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: '{b}<br/>{c}',
    },
    //图例 的相关设置
    legend: {
      orient: 'vertical',
      left: 'right',
      textStyle: {
        color: '#ccc',
      },
    },
    //图形的设置
    series: [
      {
        // name: '访问来源',
        type: 'pie',
        radius: '80%',
        right: '20%',
        //图形上文本标签的样式设置
        label: {
          show: false,
        },
        color: [
          '#37A2DA',
          '#32C5E9',
          '#67E0E3',
          '#9FE6B8',
          '#FFDB5C',
          '#ff9f7f',
          '#fb7293',
          '#E062AE',
          '#E690D1',
          '#e7bcf3',
          '#9d96f5',
          '#8378EA',
          '#96BFFF',
        ],
        center: ['45%', '55%'],
        data: data, //使用for循环添加
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  }
  myChart.setOption(option)
}

//chartThree   Echart柱状   年度统计
function initCharts_Three(arr) {
  histogram(arr.xms, '个')
  $('#btnNDTJ_xms').click(function () {
    histogram(arr.xms, '个')
  })
  $('#btnNDTJ_zds').click(function () {
    histogram(arr.zds, '亩')
  })
  $('#btnNDTJ_zjl').click(function () {
    histogram(arr.zjl, '亿')
  })
}

//项目、占地、资金    按钮点击切换
function histogram(arr, Word) {
  var arrName = []
  var arrValue = []
  for (var i = 0; i < arr.length; i++) {
    arrName[i] = arr[i].name
    arrValue[i] = arr[i].value
  }

  setTimeout(function () {
    window.onresize = function () {
      myChart.resize()
    }
  }, 200)

  var myChart = echarts.init(document.getElementById('ul_ NDTJ'))
  var option = {
    //xAxis和yAxis的nameTextStyle不起作用
    // 因此设置了字体的全局样式
    textStyle: {
      color: '#ccc',
    },
    title: {
      text: '单位:' + Word,
      // 全局样式对此不生效，
      textStyle: {
        color: '#ccc',
      },
    },
    //移入柱子时的阴影
    tooltip: {
      trigger: 'axis',
      formatter: '{b}<br/>{c}' + Word,
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      left: '5px',
      right: '0',
      bottom: '5px',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: arrName,
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        //柱子的相关设置
        itemStyle: {
          color: 'rgb(0, 174, 255)',
        },
        barWidth: '20px',
        type: 'bar',
        emphasis: {
          focus: 'series',
        },
        data: arrValue,
      },
    ],
  }
  myChart.setOption(option)
}
