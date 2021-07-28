function fontSize(res) {
  let font_size = window.getComputedStyle(document.documentElement).fontSize.replace('px', '') * 1
  return res * font_size
}

function initEcharts() {
  //饼形图
  var myChart = echarts.init(document.getElementById('ring'))
  var option = {
    backgroundColor: 'transparent',
    legend: {
      show: false,
      top: '0%',
      left: 'center',
      icon: 'roundRect',
      itemWidth: 8,
      textStyle: {
        fontSize: fontSize(0.68),
      },
    },

    series: [
      {
        type: 'pie',
        radius: '80%',
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderType: 'solid',
          borderColor: '#ffffff',
        },
        emphasis: {
          scale: false,
          scaleSize: 2,
        },
        label: {
          show: true,
          position: 'center',
          lineHeight: 28,
          formatter: function (params) {
            if (params.dataIndex === self.left_index) {
              return '{p|' + params.data.value + '}' + '\n{nm|' + params.data.name + '}'
            } else {
              return ''
            }
          },
          emphasis: {
            formatter: function (params) {
              if (params.dataIndex != self.left_index) {
                return '{p|' + params.data.name + '}' + '\n{nm|' + params.data.value + '}'
              }
            },
          },
          rich: {
            p: {
              width: 130,
              itemWidth: 100,
              color: '#fff',
              fontSize: fontSize(1),
              lineHeight: fontSize(1),
              fontWeight: 'bold',
              //   backgroundColor: "rgba(15, 21, 70, 1)", // 覆盖index=0时的数据
            },
            nm: {
              width: 130,
              itemWidth: 100,
              color: '#fff',
              fontSize: fontSize(1.5),
              lineHeight: fontSize(1.625),
              fontWeight: 'bold',
              //   backgroundColor: "rgba(15, 21, 70, 1)", // 覆盖index=0时的数据
            },
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          {
            value: 64,
            name: '办公建筑',
            itemStyle: {
              color: 'rgba(14,227,247, 0.58)',
            },
          },
          {
            value: 1,
            name: '综合建筑',
            itemStyle: {
              color: 'rgba(255,113,94, 0.58)',
            },
          },
          {
            value: 4,
            name: '商场建筑',
            itemStyle: {
              color: 'rgba(254,  217,  118, 0.64)',
            },
          },
          {
            value: 10,
            name: '宾馆饭店',
            itemStyle: {
              color: 'rgba(234,94,230, 0.64)',
            },
          },
          {
            value: 1,
            name: '医疗卫生',
            itemStyle: {
              color: 'rgba(94, 225, 186, 0.58)',
            },
          },
          {
            value: 1,
            name: '文化教育',
            itemStyle: {
              color: 'rgba(113, 204, 78, 0.58)',
            },
          },
        ],
      },
    ],
  }
  myChart.setOption(option)

  //柱状图
  var myChart2 = echarts.init(document.getElementById('bar'), 'dark')
  var option2 = {
    backgroundColor: 'transparent',

    tooltip: {
      trigger: 'axis',
      show: true,
      confine: true,
      textStyle: {
        align: 'left',
      },
      formatter: function (item) {
        let html = `${item[0].name}:${item[0].data}`
        item.slice(1).forEach((s) => {
          if (s.seriesName.indexOf('series') == -1) {
            html += `<br/> ${s.seriesName}:${s.data}`
          }
        })
        return html
      },
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'none', // cross 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      show: false,
      top: '5%',
      left: 'center',
      icon: 'roundRect',
      itemWidth: 8,
      textStyle: {
        fontSize: fontSize(0.6875),
      },
    },
    grid: {
      left: '0%',
      right: '0%',
      top: '20%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['办公建筑', '综合建筑', '商场建筑', '宾馆饭店', '医疗卫生', '文化教育'],
      axisTick: {
        alignWithLabel: false,
        show: true,
        lineStyle: {
          color: '#ccc',
        },
      },
      axisLabel: {
        fontSize: fontSize(0.6875),
        interval: 0,
        padding: [10, 0, 0, 0],
      },
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
      splitLine: {
        show: false,
      },
      show: true,
    },

    yAxis: {
      max: 70,
      name: '栋',
      nameTextStyle: {
        // color: "rgba(217, 35, 35, 1)",
        align: 'right',
        verticalAlign: 'middle',
        borderDashOffset: 0,
        padding: [6, 6, 6, 6],
      },
      axisLabel: {
        // color: '#ff0000',
        fontSize: fontSize(0.6875),
        interval: 0,
        padding: [0, 0, 0, 0],
      },
      splitLine: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
      axisTick: {
        alignWithLabel: false,
        show: true,
        lineStyle: {
          color: '#ccc',
        },
      },
    },
    series: [
      {
        name: 'dotted',
        type: 'pictorialBar',
        symbol: 'rect',
        barGap: '-100%',
        showBackground: true,
        itemStyle: {
          color: 'rgba(14,227,247, 1)',
        },
        symbolRepeat: true,
        symbolSize: [12, 4],
        symbolMargin: 1,
        data: [64, 1, 4, 10, 1, 1],
        z: -8,
      },
      {
        type: 'bar',
        itemStyle: {
          color: 'rgba(0,0,0,0.2)',
        },
        barGap: '-100%',
        barWidth: 12,
        z: -9,
        showBackground: true,

        data: [70, 70, 70, 70, 70, 70],
      },
    ],
  }
  myChart2.setOption(option2)

  // 折线图
  let myChart3 = echarts.init(document.getElementById('line'), 'dark')
  var option3 = {
    backgroundColor: 'transparent',

    tooltip: {
      trigger: 'axis',
      show: true,
      confine: true,
      textStyle: {
        align: 'left',
      },
      formatter: function (item) {
        let html = item[0].axisValue * 1 + '月'
        item.slice(0).forEach((s) => {
          if (s.seriesName.indexOf('series') == -1) {
            html += `<br/> ${s.seriesName}:${s.data}%`
          }
        })
        return html
        // return  '{b0}<br/>{a1}: {c1}<br/>{a2}: {c2}'
      },
      // formatter: '{b0}<br/>{a1}: {c1}<br/>{a2}: {c2}',
      axisPointer: {
        // 坐标轴指示器，坐标轴触发有效
        type: 'none', // 默认为直线，可选为：'line' | 'shadow'
      },
    },
    legend: {
      show: true,
      // data:[""]
      top: '0%',
      left: 'center',
      icon: 'circle',
      type: 'scroll',
      itemHeight: fontSize(0.5),
      itemWidth: fontSize(0.5),
      textStyle: {
        fontSize: fontSize(0.6),
      },
    },
    grid: {
      left: '0%',
      right: '0%',
      top: '18%',
      bottom: '5%',
      containLabel: true,
    },
    xAxis: {
      type: 'category',
      data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
      axisTick: {
        alignWithLabel: false,
        show: true,
        lineStyle: {
          color: '#ccc',
        },
      },
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
      axisLabel: {
        //X轴文字样式
        fontSize: fontSize(0.6875),
        interval: 0,
        padding: [10, 0, 0, 0],
      },
      splitLine: {
        show: false,
      },
      show: true,
    },
    yAxis: {
      // max:100,
      type: 'value',
      name: 'kwh',
      axisLabel: {
        fontSize: fontSize(0.6875),
        interval: 0,
        padding: [0, 0, 0, 0],
      },
      nameLocation: 'end',
      nameTextStyle: {
        align: 'right',
        verticalAlign: 'middle',
        borderDashOffset: 0,
        padding: [6, 6, 6, 6],
      },
      splitLine: { show: false },
      axisLine: {
        lineStyle: {
          color: '#ccc',
        },
      },
      axisTick: {
        alignWithLabel: false,
        show: true,
        lineStyle: {
          color: '#ccc',
        },
      },
    },
    series: [
      {
        name: '办公建筑',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
          color: 'rgba(14,227,247,1)',
        },
        barGap: '-100%',
        barWidth: 12,
        z: -8,
        data: [4, 3, 5, 4, 0],
      },
      {
        name: '综合建筑',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
          color: 'rgba(255,113,94, 1)',
        },
        barGap: '-100%',
        barWidth: 12,
        z: -8,
        data: [0.8, 0.6, 1, 0.6, 0],
      },
      {
        name: '商场建筑',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
          color: 'rgba(254,  217,  118, 1)',
        },
        barGap: '-100%',
        barWidth: 12,
        z: -8,
        data: [0.6, 0.5, 0.8, 0.4, 0],
      },
      {
        name: '宾馆饭店',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
          color: 'rgba(234,94,230, 1)',
        },
        barGap: '-100%',
        barWidth: 12,
        z: -8,
        data: [],
      },
      {
        name: '医疗卫生',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
          color: 'rgba(94, 225, 186, 1)',
        },
        barGap: '-100%',
        barWidth: 12,
        z: -8,
        data: [1, 1, 1],
      },
      {
        name: '文化教育',
        type: 'line',
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
          color: 'rgba(113, 204, 78, 1)',
        },
        barGap: '-100%',
        barWidth: 12,
        z: -8,
        data: [1, 2, 1, 1, 2],
      },
      {
        type: 'bar',
        itemStyle: {
          color: 'rgba(0,0,0,0.2)',
        },
        barGap: '-100%',
        barWidth: 12,
        z: -9,
        showBackground: true,
        data: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
      },
    ],
  }
  myChart3.setOption(option3)
}
