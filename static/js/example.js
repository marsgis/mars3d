let exConfig;

let containExamples = false,
  thumbLocation = getThumbLocation();

$(document).ready(function () {
  bindEvents();

  //懒加载
  let timeout = setTimeout(function () {
    $("img.chart-thumb").lazyload();
  }, 1000);

  //记录url传入参数
  let request = haoutil.system.getRequest();

  fetch(request.json|| window.exampleConfig || "../data/example.json")
    .then(function (response) {
      if (!response.ok) {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
      } else {
        return response.json();
      }
    })
    .then((json) => {
      exConfig = json.result;
      //赋值id
      exConfig.forEach((item, index1) => {
        item.id = "ex_" + index1;
        if (item.children) {
          item.children.forEach((item2, index2) => {
            item2.id = item.id + "_" + index2;
            if (item2.children) {
              item2.children.forEach((item3, index3) => {
                item3.id = item3.id + "_" + index3;
              });
            }
          });
        }
      });

      haoutil.storage.add("exConfig", JSON.stringify(exConfig));

      initPage();
    })
    .catch(function (error) {
      console.log("加载JSON出错", error);
      haoutil.alert(error?.message, "出错了");
    });
});

//左侧层级不包含例子，只包含分类
function initPage() {
  let sideBar = $("ul#sidebar-menu");
  let chartList = $("#charts-list");

  exConfig.forEach((item, index1) => {
    let count = 0;
    if (item.children) {
      item.children.forEach((configItem, index) => {
        configItem.count = configItem.children ? configItem.children.length : 0;
        count += configItem.count;
      });
    }
    item.count = count;

    sideBar.append(createSideBarMenuItem(item, containExamples));
    chartList.append(createGalleryItem(item));
  });
  resizeCharts();
  initSelect();
  sidebarScrollFix();
}

//初始化页面第一次加载
function initSelect() {
  let hash = window.location.hash;
  if (hash.indexOf("#") === -1) {
    // var id = $('#sidebar li').first().children('a')[0].hash;
    // window.location.hash = (id) ? id : window.location.hash;
  } else {
    scroll();
  }
}

//初始化示例面板
function createGalleryItem(item) {
  if (!item) {
    return;
  }

  let categoryLi = $("<li class='category' id='" + item.id + "'></li>");
  if (item.name) {
    createGalleryItemTitle(item).appendTo(categoryLi);
  }
  if (item.children) {
    createSubGalleryItem(item.children).appendTo(categoryLi);
  }
  return categoryLi;
}

function createSubGalleryItem(config) {
  let categoryContentDiv = $("<div class='category-content'></div>");
  config.forEach((configItem, index) => {
    let content = $("<div class='box box-default color-palette-box' id='" + config.id + "'></div>");
    createSubGalleryItemTitle(configItem).appendTo(content);
    if (configItem.children) {
      createGalleryCharts(configItem.children).appendTo(content);
    }
    content.appendTo(categoryContentDiv);
  });
  return categoryContentDiv;
}

function createGalleryItemTitle(item) {
  return $(
    "<h3 class='category-title' id='" +
      item.id +
      "'>" +
      "<i class='fa " +
      item.icon +
      "'></i>" +
      "&nbsp;&nbsp;" +
      item.name +
      " (" +
      item.count +
      ")</h3>"
  );
}

function createSubGalleryItemTitle(configItem) {
  let details;
  if (configItem.details) {
    details = `<div class='box-title-details'>说明：${configItem.details}</div>`;
  } else {
    details = "";
  }

  return $(
    "<div class='box-header'>" +
      "<h3 class='box-title' id='" +
      configItem.id +
      "'>" +
      "&nbsp;&nbsp;&nbsp;&nbsp;" +
      configItem.name +
      " (" +
      configItem.count +
      ")</h4>" +
      "</h3>" +
      details +
      "" +
      "</div>"
  );
}

function createGalleryCharts(examples) {
  let chartsDiv = $("<div class='box-body'></div>");
  let len = examples && examples.length ? examples.length : 0;
  for (let i = 0; i < len; i++) {
    let html = createGalleryChart(examples[i]);
    if (html) {
      html.appendTo(chartsDiv);
    }
  }
  return chartsDiv;
}

function createGalleryChart(example) {
  let _path = window.examplePath || "example/";
  let _widgetpath = window.widgetPath || "//mars3d.cn/project/zhts/map.html";

  let target = _path + "editor.html",
    title = example.name,
    href = fileName2Id(example.fileName),
    thumbnail = (window.exampleIconPath || "../data/exampleIcon/") + (example.thumbnail || "");

  let isWidget = false;
  if (example.params) {
    target += "?" + (window.autoShowCode ? "code=true&" : "") + example.params;

    if (example.params.indexOf("widget=") != -1) {
      if (!window.showWidget) {
        return false;
      }
      isWidget = true;
      target = _widgetpath + "?onlyStart=true&name=" + title + "&" + example.params;
    }
  } else {
    target += "?" + (window.autoShowCode ? "code=true&" : "");
  }

  if (href) {
    target = target + "#" + href;
  }

  let msg = title + " v" + (example.version || "");

  let chartDiv = $("<div class='col-xlg-2 col-lg-3 col-md-4 col-sm-6 col-xs-12'><a target='_blank'href='" + _path + href + ".html'></a></div>");
  let chart = $('<div class="chart"></div>');
  let link = $("<a class='chart-link' target='_blank' href='" + target + "'></a>");
  let chartTitle = $("<h5 class='chart-title'  title='" + msg + "' >" + title + "</h5>");
  let thumb = $("<img class='chart-area' src='" + thumbnail + "' style='display: inline'>");

  if (example.plugins) {
    msg += "\n该功能属于独立" + example.plugins + "插件功能，在额外的js中。";
    chartTitle = $(
      "<h5 class='chart-title' title='" +
        msg +
        "'  >" +
        title +
        "<span style='color:rgba(0, 147, 255, 0.7)'>[" +
        example.plugins +
        "插件]</span></h5>"
    );
  }
  if (isWidget) {
    msg += "\n该功能属于项目内功能，此处仅做演示，具体交付依赖是否选择对应项目。";
    chartTitle = $("<h5 class='chart-title' title='" + msg + "' >" + title + "<span style='color:rgba(0, 147, 255, 0.7)'>[项目widget]</span></h5>");
  }

  //最新加的示例
  // if (window.mars3d.version == example.version) {
  //     $('<span class="newTitle" title="新添加示例">新</span>').appendTo(chart);
  // }
  chartDiv.attr("title", msg);

  chartTitle.appendTo(link);
  thumb.appendTo(link);
  link.appendTo(chart);
  chart.appendTo(chartDiv);

  return chartDiv;
}
function imgerrorfun() {
  let img = event.srcElement;
  img.src = "img/mapicon.jpg";
  img.onerror = null;
}
function openExampleView(href, title) {
  let width = document.documentElement.clientWidth - 230 + "px";
  let height = document.documentElement.clientHeight - 60 + "px";

  let _layerIdx = layer.open({
    type: 2,
    title: title,
    fix: true,
    maxmin: true,
    shadeClose: true,
    offset: ["60px", "230px"],
    area: [width, height],
    content: href,
    skin: "layer-mars-dialog animation-scale-up",
    success: function (layero) {},
  });

  //$("#layui-layer" + _layerIdx).css({
  //    "width": "calc(100% - 230px)",
  //    "height": "calc(100% - 80px)",
  //});
  $("#layui-layer" + _layerIdx + " .layui-layer-title").css({
    background: "rgba(30, 36, 50, 1)",
    "border-color": "rgba(32, 160, 255, 1)",
  });
}

function getThumbLocation() {
  let param = window.location.toString();
  return param.substr(0, param.lastIndexOf("/"));
}

//chart宽高自适应
function resizeCharts() {
  let charts = $("#charts-list .chart .chart-area");
  if (charts[0] && charts[0].offsetWidth) {
    charts.height(charts[0].offsetWidth * 0.8);
  } else {
    charts.height(260 * 0.8);
  }
  window.onresize = function () {
    resizeCharts();
  };
}

//根据url滚动到页面相应的位置
function scroll() {}

//绑定点击事件
function bindEvents() {
  let child = $("ul#sidebar-menu>li.treeview>ul>li");
  // var parent = $('ul.sidebar-menu>li').parent('ul')
  // //因为iManager只有1级所以，iManager点击的时候相当于一级菜单，其他的二级都要关闭.
  // if ($('ul.sidebar-menu>li#firstMenuiManager').find('ul').length == 0) {
  //   if (
  //     $('ul.sidebar-menu>li#firstMenuiManager').click(function () {
  //       $('ul#sidebar-menu>li>ul').slideUp(500)
  //     })
  //   ) {
  //     //
  //   }
  // }
  //一级菜单跳转
  child
    .parent("ul")
    .siblings("a")
    .click(function (evt) {
      if ($(this).siblings("ul").is(":visible") && $(this).siblings("ul").children("li").hasClass("active")) {
        evt.stopPropagation(); //阻止点击事件触发折叠的冒泡
      }
      window.location = evt.currentTarget.href;
    });

  //二级菜单跳转,不用 boot自带
  window.addEventListener("hashchange", function () {
    scroll();
  });
}

let openTimer; // 定义展开的延时
let animationSpeed = 500;
$(window).on("scroll", function () {
  if ($("ul.sidebar-menu>li").hasClass("active")) {
    let parent = $("ul.sidebar-menu>li").parent("ul");

    //设置0.1秒后再打开，目的是为了防止滚轮拉快 中途经过的展开和折叠效果还来不及完成而产生的重叠效果;
    if (openTimer) {
      clearTimeout(openTimer);
    }
    openTimer = setTimeout(function () {
      parent
        .children("li.active")
        .children("ul")
        .slideDown(animationSpeed, function () {
          parent.children("li.active").children("ul").css("display", "block");
        });
    }, 100);
  }
  $("ul.sidebar-menu>li").not("li.active").children("ul").css("display", "none");
});

function getVerDiff(oldver) {
  let index = 0;
  let arrNew = "序号,分类,子分类,功能名称,版本\n";

  exConfig.forEach((item, index1) => {
    if (!item.children) {
      return;
    }
    item.children.forEach((item2, index2) => {
      if (!item2.children) {
        return;
      }
      item2.children.forEach((item3, index3) => {
        if (!oldver || item3.version > oldver) {
          arrNew += `${++index},${item.name},${item2.name},${item3.name},${item3.version}\n`;
        }
      });
    });
  });

  return arrNew;
}

function getAllName() {
  let arrNew = "Mars3D功能清单：";
  let qianzhui = "1.";
  exConfig.forEach((item, index1) => {
    if (!item.children) {
      return;
    }
    arrNew += `\n\n${qianzhui}${index1 + 1}  ${item.name}`;

    item.children.forEach((item2, index2) => {
      if (!item2.children) {
        return;
      }
      arrNew += `\n${qianzhui}${index1 + 1}.${index2 + 1}  ${item2.name}\n`;

      item2.children.forEach((item3, index3) => {
        if (index3 === 0) {
          arrNew += `\t${item3.name}`;
        } else {
          arrNew += `,${item3.name}`;
        }
      });
      arrNew += `\n`;
    });
  });
  return arrNew;
}
