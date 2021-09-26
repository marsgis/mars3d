/* 2017-12-4 15:15:45 | 修改 木遥（微信:  http://marsgis.cn/weixin.html ） */
$(document).ready(function () {
  initPage();
  bindEvents();
  // sidebarScrollFix()
});

let aceEditor;
let containExamples = true;

function initPage() {
  initEditor();
  screenResize();
}

function screenResize() {
  window.onresize = function () {
    mapHeight();
  };
}

function findConfig(locationParam, search) {
  if (search && search.length > 1) {
    search = search.substr(1);
  }

  let exConfig = haoutil.storage.get("exConfig");
  if (!exConfig) {
    return;
  }

  exConfig = JSON.parse(exConfig);
  if (!exConfig || !exConfig.length) {
    return;
  }

  for (let index1 = 0; index1 < exConfig.length; index1++) {
    let item = exConfig[index1];
    if (!item.children) {
      return;
    }
    for (let index2 = 0; index2 < item.children.length; index2++) {
      let item2 = item.children[index2];
      if (!item2.children) {
        return;
      }
      for (let index3 = 0; index3 < item2.children.length; index3++) {
        let item3 = item2.children[index3];
        if (search) {
          if (item3.fileName == locationParam && item3.params == search) {
            document.title = item3.name + " 【" + item2.name + " " + item.name + "】 | Mars3D示例 | 合肥火星科技有限公司";
            return;
          }
        } else {
          if (item3.fileName == locationParam) {
            document.title = item3.name + " 【" + item2.name + " " + item.name + "】 | Mars3D示例 | 合肥火星科技有限公司";
            return;
          }
        }
      }
    }
  }
}

//初始化编辑器
function initCodeEditor() {
  if (!aceEditor) {
    aceEditor = ace.edit("editor");
    aceEditor.setTheme("ace/theme/xcode");
    aceEditor.getSession().setMode("ace/mode/html");
    aceEditor.getSession().setUseWrapMode(true);
    aceEditor.setShowPrintMargin(false);
    aceEditor.$blockScrolling = Infinity;
  }
  aceEditor.setValue($("#editor").val());
  aceEditor.clearSelection();
  aceEditor.moveCursorTo(0, 0);
}

//初始化编辑器以及预览内容
function initEditor() {
  loadExampleHtml();
  initCodeEditor();
}

function loadExampleHtml() {
  let locationParam = getLocationParam();
  if (!locationParam) {
    return;
  }

  findConfig(locationParam, window.location.search);

  locationParam = id2FileName(locationParam);

  let href = window.location.pathname;
  let mapUrl = href.substr(0, href.lastIndexOf("/") + 1);
  mapUrl = mapUrl + locationParam + window.location.search;
  if (!mapUrl) {
    return;
  }

  let cacheVersion = "20210501";
  if (mapUrl.indexOf("?") == -1) {
    mapUrl += "?time=" + cacheVersion;
  } else if (mapUrl.indexOf("time=" + cacheVersion) == -1) {
    mapUrl += "&time=" + cacheVersion;
  }

  console.log("加载示例页面：" + mapUrl);

  var html = $.ajax({
    url: mapUrl,
    async: false,
    error: function (error) {
      haoutil.msg("该页面不存在，请检查地址！");
      html = "";
    },
  }).responseText;
  if (html && html != "") {
    html = html.replace(new RegExp(/[\s]*<meta[^>]*?\/?>/, "gm"), "");

    $("#editor").val(html);
    loadPreview(html);
  }
}

function getLocationParam() {
  let param = window.location.toString();
  if (param.indexOf("#") === -1) {
    return "11_online_tdt";
  }
  param = param.split("#");
  if (param && param.length > 0) {
    return param[1];
  }
}

//运行代码
function run() {
  let iframeContent = $("#editor").val();
  if (editor) {
    iframeContent = aceEditor.getValue();
  }
  loadPreview(iframeContent);
}

//填充预览效果内容
function loadPreview(content) {
  let iFrame = createIFrame(),
    iframeDocument = iFrame.contentWindow.document;

  iframeDocument.open();
  iframeDocument.write(content);
  iframeDocument.close();

  let doc = document;
  iFrame.addEventListener("load", function () {
    mapHeight();
    //setTimeout(function () {
    //    doc.title = iframeDocument.title;
    //}, 100);
  });
  mapHeight();
}

function loadIFrameForSrc(url) {
  createIFrame();
  $("#innerPage").attr("src", url);

  mapHeight();
}

function createIFrame() {
  let preViewPane = $("#previewPane");
  preViewPane.empty();
  let iframe = document.createElement("iframe");
  $(iframe).attr("id", "innerPage");
  $(iframe).attr("name", "innerPage");
  preViewPane.append(iframe);
  return iframe;
}

//重置编辑器
function refresh() {
  initEditor();
  run();
}

// function initSelect() {
//   let hash = window.location.hash
//   let id
//   if (hash.indexOf('#') === -1) {
//     id = $('section#sidebar .thirdMenu a.link').first().attr('id')
//     window.location.hash = id ? '#' + id : window.location.hash
//   } else {
//     id = hash.split('#')[1]
//   }
//   selectMenu(id)
// }

function mapHeight() {
  let doc = $("#innerPage").contents();
  doc.find("html").height("100%");
  doc.find("body").height("100%");
}

function bindEvents() {
  $("#sidebar ul.third-menu a").click(function (evt) {
    let target = $(evt.target).parent().parent();
    let nodeId = evt.target.id;
    //如果点击的是span节点还要往上一层
    if (evt.target.localName === "span") {
      nodeId = target.attr("id");
    }

    if (nodeId) {
      //阻止冒泡防止上层事件响应导致修改url hash值
      evt.preventDefault();
      window.location.hash = "#" + nodeId;
      initEditor();
      evt.stopPropagation();
    }
  });
  let codePane = $("#codePane");
  let previewPane = $("#previewPane");
  let expand = !!1;
  $("#showCodeBtn").click(function () {
    if (expand) {
      //编辑器和预览宽度5:7
      $(this).text(" 收缩").css({ left: "500px" });
      $(this).addClass(" fa-compress");
      $(this).removeClass("fa-arrows-alt");
      codePane.show(10, function () {
        previewPane.removeClass("col-md-12");
        previewPane.addClass("col-md-7");
        codePane.addClass("col-md-5");

        $("#showCodeBtn").css({ left: $("#codePane").width() + 5 + "px" });
        if (aceEditor) {
          aceEditor.resize();
        }
      });
    } else {
      //预览独占一行
      $(this).text(" 源码").css({ left: "0px" });
      $(this).addClass("fa-arrows-alt");
      $(this).removeClass(" fa-compress");
      codePane.hide(200, function () {
        codePane.removeClass("col-md-5");
        previewPane.removeClass("col-md-7");
        previewPane.addClass("col-md-12");
      });
    }
    expand = !expand;
  });

  if (haoutil.system.getRequestByName("code")) {
    $("#showCodeBtn").click();
  }

  // window.addEventListener('hashchange', function () {
  //   let hash = window.location.hash
  //   if (hash.indexOf('#') !== -1) {
  //     let id = hash.split('#')[1]
  //     selectMenu(id)
  //   }
  // })
}
