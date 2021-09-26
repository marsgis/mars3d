/* 2017-10-20 13:00:05 | 修改 木遥（微信:  http://marsgis.cn/weixin.html ） */
//左侧层级是否包含示例
let containExample = false;

//侧边栏滚动支持
function sidebarScrollFix() {
  $("ul#sidebar-menu>li").hover(
    function (evt) {
      if (!$("body").hasClass("sidebar-collapse")) {
        return;
      }

      //调整一级菜单li下标题的布局位置至右侧
      let $titleBar = $(this).children("a").children(".sidebar-title-bar");
      $titleBar.css({
        top: $(this).offset().top - $(window).scrollTop() + "px",
        //fix由于侧边栏滚动条宽度引起的减少的宽度
        width: "233px",
      });

      //如果底部空间不够，动态增加侧边栏高度
      let visibleOffsetTop = $(this).offset().top - $(window).scrollTop();
      let offsetBottom = $(".sidebar-menu").height() - visibleOffsetTop;
      let requireVisibleHeight = $(this).height() + $(this).children("ul").height();
      if (offsetBottom <= requireVisibleHeight) {
        $(".sidebar-menu").css({
          height: requireVisibleHeight + $(window).height() + "px",
        });
      }

      //调整一级菜单li下子列表的布局位置至右侧
      let offsetTop = visibleOffsetTop + $(this).height();
      $(this)
        .children("ul")
        .css({
          top: offsetTop + "px",
        });

      //fix小尺寸屏幕下二级菜单高度高于窗口高度时显示不全的情况
      let $activeList = $(this).children("ul");
      let activeListOffsetBottom = Math.abs($(window).height() - visibleOffsetTop - $(this).height());
      let requireActiveListHeight = $activeList.height();
      if (activeListOffsetBottom < requireActiveListHeight) {
        $activeList.css({ height: requireActiveListHeight });
        //滚动条样式
        $activeList.addClass("scroll-list");
      }
    },
    function (evt) {
      if (!$("body").hasClass("sidebar-collapse")) {
        return;
      }
      //滚动条
      $(this).children("ul").removeClass("scroll-list");
      //恢复原来的高度
      $(this).children("ul").css({ height: "auto" });
    }
  );
  $(".main-sidebar").on("scroll", function (evt) {
    evt.stopPropagation();
  });

  $(window).on("resize", function () {
    $(".sidebar-menu").css({ height: "100%" });
  });
}

//创建菜单项
function createSideBarMenuItem(config, containAll) {
  if (!config) {
    return;
  }
  containExample = containAll;
  let li = $("<li id='bar_" + config.id + "' class='treeview '></li>");

  if (config.children) {
    createSideBarMenuTitle(config, true).appendTo(li);
    createSideBarSecondMenu(config.children).appendTo(li);
  } else {
    createSideBarMenuTitle(config, false).appendTo(li);
  }
  return li;
}

//创建二级菜单
function createSideBarSecondMenu(children) {
  let ul = $("<ul class='treeview-menu second-menu '></ul>");
  children.forEach((item, index) => {
    let li = $("<li class='menuTitle ' id='bar_" + item.id + "' ></li>");
    li.appendTo(ul);

    if (containExample && item.children) {
      createSideBarMenuSecondTitle(item, true).appendTo(li);
      createSideBarThirdMenu(item.children).appendTo(li);
    } else {
      createSideBarMenuSecondTitle(item, false).appendTo(li);
    }
  });
  return ul;
}

function fileName2Id(fileName) {
  let value = (fileName || "").replace(".html", "");
  return value;
}
function id2FileName(id) {
  let fileName = id + ".html";
  return fileName;
}

//创建三级菜单
function createSideBarThirdMenu(examples) {
  let ul = $("<ul class='treeview-menu third-menu'></ul>");
  let len = examples && examples.length ? examples.length : 0;
  for (let i = 0; i < len; i++) {
    let example = examples[i];
    let _id = fileName2Id(example.fileName);
    let li = $("<li class='menuTitle' id='bar_" + _id + "' ></li>");
    li.appendTo(ul);
    if (_id != "" && example.name) {
      createSideBarMenuThirdTitle(_id, example, false).appendTo(li);
    }
  }
  return ul;
}

function createSideBarMenuTitle(config, collapse) {
  let id = config.id || "";
  let icon = "",
    iconName = config.icon;
  if (iconName) {
    icon = "<i class='fa " + iconName + " iconName'></i>";
  }

  let href = "";
  if (location.href.indexOf("editor.html") != -1) {
    href = "../examples.html#" + id;
  } else {
    href = "#" + id;
  }

  let div = $("<a  href='" + href + "' >" + icon + "<span class='firstMenuTitle'>" + config.name + "(" + config.count + ")</span></a>");
  if (collapse) {
    div.append(createCollapsedIcon());
  }
  return div;
}

function createSideBarMenuSecondTitle(item, collapse) {
  let id = item.id || "";
  let icon = "",
    iconName = item.icon;
  if (iconName) {
    icon = "<i class='fa " + iconName + "'></i>";
  }

  let href = "";
  if (location.href.indexOf("editor.html") != -1) {
    href = "../examples.html#" + id;
  } else {
    href = "#" + id;
  }

  let div = $(
    "<a href='" + href + "' id='bar_" + item.id + "'>" + icon + "<span class='secondMenuTitle'>" + item.name + "(" + item.count + ")</span></a>"
  );

  if (collapse) {
    div.append(createCollapsedIcon());
  }
  return div;
}

function createSideBarMenuThirdTitle(id, item, collapse) {
  id = id || "";
  let icon = "",
    iconName = item.icon;
  if (iconName) {
    icon = "<i class='fa " + iconName + "'></i>";
  }

  let div = $("<a href='#' id='bar_" + id + "'>" + icon + "<span class='thirdMenuTitle'>" + item.name + "</span></a>");
  if (collapse) {
    div.append(createCollapsedIcon());
  }
  return div;
}

//创建右侧折叠菜单
function createCollapsedIcon() {
  return $("<span class='pull-right-container'> <i class='fa fa-angle-left pull-right'></i> </span>");
}

//只处理三层节点,后续可优化
function selectMenu(id, length) {
  let target = _getTarget(id, length);
  if (length !== 1) {
    //控制editor页面左侧导航栏一级菜单高亮
    _selectTarget(target.parent().parent().parent().parent());
    //控制示例页面左侧导航栏一级菜单高亮
    _selectTarget(target.parent().parent());
    //控制左侧导航栏最低级菜单高亮
    _selectTarget(target.parent());
    _selectTarget(target.find("ul"));
  }
}

function _getTarget(id, length) {
  let target;
  if (length) {
    if (length === 1) {
      $("section#sidebar li.active").removeClass("active");
      target = $("section#sidebar li#bar_" + id);
      target.children("ul").show();
    }
    if (length === 2) {
      $("section#sidebar li.active ul.active li").removeClass("active");
      target = $("section#sidebar li.treeview")
        .children("ul")
        .children("li#bar_" + id);
    }
  } else {
    $("section#sidebar #ul").addClass("active");
    $("section#sidebar li.active").removeClass("active");
    target = $("section#sidebar li#bar_" + id);
  }
  target && target.addClass("active");
  return target;
}

function _selectTarget(target) {
  if (!target || target.length < 1) {
    return;
  }
  let className = target.attr("class");
  if (className && className.indexOf("treeview-menu") > -1 && className.indexOf("menu-open") === -1) {
    target.addClass("menu-open");
    target.css("display", "block");
  }
  if (className && className.indexOf("treeview") > -1) {
    target.addClass("active");
  }
}
