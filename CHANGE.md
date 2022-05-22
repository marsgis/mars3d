# Mars3D 更新日志  
-------------------------------------------
## 3.3.9 - 2022-5-16
#### Additions 🎉
- BillboardEntity、PointEntity、ModelEntity 支持其他 point、model、ellipse、path 附带对象
- RoamLine 增加 noPitchRoll 参数
- PolyUtil 类部分异步方法由 void 改为返回 Promise

#### Fixes 🔧
- 修复 Effect 在 addTo/remove 方法时记录未处理的问题
- 修复 diffHeight 负数时未显示



## 3.3.8 - 2022-5-10
#### Breaking Changes 📣
- Cesium 升级至 1.93
- 原生 JS 版功能示例、基础项目 中依赖的 jquery 升级至 v3+最新版

#### Additions 🎉
- 增加 Icon 类，可以外部自定义默认右键菜单的图标
- 优化 ToolButton 和 右键菜单的 icon 图标，支持 图片 url 路径、base64 字符串、svg 字符串、字体图标 class 名 等形式
- 优化 ModelCombine 增加 scaleX、scaleY、scaleZ 参数
- 优化 ModelPrimitive 增加 noPitchRoll 参数
- 增加 MultipleSkyBox 多天空盒
- 增加主库和插件库中第 3 方依赖 JS 库未引入时的错误提示，方便排查问题

#### Fixes 🔧
- 修复 v3.3.7 的 ts 定义错误



## 3.3.7 - 2022-5-2
#### Additions 🎉
- 增加 CanvasLabelEntity 文本点对象
- 对 GeoJsonLayer 增加支持加载 topojson 数据
- 增加 mars3d.Token.updateAll 方法，Map 增加 token 参数，方便外部更新覆盖
- 优化 ArcGisLayer，不依赖 Cesium 修改，改用内部 ArcGisImageryProvider 实现
- 修改 RotateOut、RotatePoint 于时钟脱离依赖，时钟停止也可有效运行

#### Fixes 🔧
- 优化 DivBillboardEntity 大量点的生成图片失败
- 编辑矢量对象时附加的 label 位置同步问题
- 修复 ModelPrimitive 动态运动对象的 modelMatrix 异常报错问题
- 修复 v3.3.6 产生的 Plan 相关矩形裁剪失效问题
- 修复 v3.3.6 产生的模型 url 路径中的“+”符号转义失效问题
- 修复 v3.3.6 产生的地形开挖、等高线删除最后一个失效问题



## 3.3.6 - 2022-4-22
#### Breaking Changes 📣
- 对 vue 功能示例、vue 基础项目 规范优化整改了一轮

#### Additions 🎉
- 增加了多个矢量对象材质
- Measure 量算方法增加 decimal 等参数，支持自定义显示的文本中保留的小数位
- 增加 GroupThing 类
- 支持直接对 EchartsLayer、MapVLayer 绑定单击等事件

#### Fixes 🔧
- 调试并修复 cesium v1.92 相关的兼容性问题
- 解决 PolylineCombine 的材质转换问题
- 矢量对象 toGeoJSON 时坐标为空报错
- Tooltip 贴地对象中显示偏移
- CircleEntity 的 radius 更新时未同步更新 outline



## 3.3.0 - 2022-4-18
#### Breaking Changes 📣
- Cesium 升级至 1.92 ([1.92 的 Promise](https://community.cesium.com/t/cesiumjs-is-switching-from-when-js-to-native-promises-which-will-be-a-breaking-change-in-1-92/17213) 与之前版本不兼容 )
- 整理优化 mars3d-cesium 库，减少内部修改,增加对外接口等(mars3d v3.3.5+ 依赖 mars3d-cesium v1.92+)
- SDK 内部重新架构，并需要 Cesium 升级 v1.92+或引入[cesium-comp](http://mars3d.cn/lib/mars3d/plugins/compatible/cesium-when.js)

#### Additions 🎉
- 提供[移动端 APP 项目模板](http://mars3d.cn/details.html?id=app-vue)
- 支持[3dtiles 模型卷帘](http://mars3d.cn/editor.html?id=control/basis/mapSplit)
- 增加 TilesetBoxClip 模型盒子裁剪
- 所有图层增加 readyPromise 属性，方便使用
- 增加了 flv 视频协议、红蓝对抗演习 等示例
- 增加 MeasureUtil.getSurfaceArea 方法
- 军标对象增加 getOutlinePositions 静态方法，可外部调用计算边界点坐标
- VolumeMeasure 方量分析增加一些参数
- 矢量数据的 clampToGround 方法更名为 autoSurfaceHeight(兼容旧名称)
- 调整手机端标绘提示文字
- 标绘 startDraw 等方法返回值改为 Promise
- 优化 TilesetPlanClip 增加显示和编辑 plan 平面
- Primitive 中增加 depthFail 参数
- 更新 mars3d.Token 所有默认值
- ArcGIS/WMS 瓦片图层的 maxLength 参数改名为 graphicConver

#### Fixes 🔧
- BillboardEntity.startBounce 弹跳时，已有偏移文本的处理优化
- 修改 Effect 特效移除再添加时的报错
- 热力图 diffHeight 参数优化
- 修复一些已知 bug



---

## 3.2.4 - 2022-3-3
#### Breaking Changes 📣
- Cesium 升级至 1.91

#### Additions 🎉
- ModelPrimitive 等类增加 clampToTileset 等参数

#### Fixes 🔧
- 修复 v3.2.3 产生的 symbol 配置的样式失效
- 修复 label 的 show:false 时默认显示



## 3.2.3 - 2022-2-27
#### Breaking Changes 📣
- 功能示例 Vue 版和基础项目 Vue 版 2 个项目统一 UI 及架构等，形成稳定版
- 功能示例原生 JS 版优化(与 Vue 版保持一致性)

#### Additions 🎉
- 优化 RoamLine 的 endItem 事件
- QueryGeoServer 增加 queryBySql 方法，支持 cql_filter
- WfsLayer 增加 geometryName 参数

#### Fixes 🔧
- DivGraphic 对象的 popup 和 tooltip 的 zIndex 处理



## 3.2.1 - 2022-2-13
#### Breaking Changes 📣
- Cesium 升级至 1.90

#### Additions 🎉
- 增加地形加载失败和成功事件，地形加载失败内部自动切换至无地形。
- map 增加 toolbar 和 controls 中增加 ceisum 原生控件的获取，方便使用。
- map 增加 load 事件

#### Fixes 🔧
- 测试并修改 V3.2.0 产生的多个 bug 问题



## 3.2.0 - 2022-1-28
#### Breaking Changes 📣
- vue 版本示例和项目迁移至 vite 架构
- 增加 CircleCombine、RectangleCombine、WallCombine 等 10 个大数据合并渲染 graphic 矢量对象
- LatLngPoint 改名为 LngLatPoint、LatLngArray 改名为 LngLatArray (批量替换下)
- 移除了 mars3d.thing.ViewShed3D，增加了 mars3d.graphic.ViewShed 矢量对象 (参考示例升级)
- 重写了 Video2D、Video3D 视频投射矢量对象(API 全部变化了，参考 API 升级)
- 重写了 WindLayer 的参数，简化优化 API 结构(参考示例修改)

#### Additions 🎉
- 增加 Tetrahedron、CloudPrimitive 等 graphic 矢量对象
- 瓦片图层增加 invertColor、filterColor 滤镜颜色参数，支持修改瓦片颜色
- 重写 DivGraphic 的编辑处理，支持直接拖拽 div 对象
- DivGraphic 的 className 参数更改到 style 下(参考 API 文档)
- Map 的鼠标事件除 move 外 event 回调中均加上拾取的 mars3d 矢量对象和图层
- 模型剖切支持 plane 的显示和编辑
- FloodByMaterial 淹没分析支持颜色的修改

#### Fixes 🔧
- Entity 对象中，初始无 lable 时后续更新 lable 文本无效的问题


---

## 3.1.23 - 2022-1-23
#### Breaking Changes 📣
- 模型、矢量数据等增加 allowDrillPick 参数，允许鼠标穿透拾取进行交互
- Map 类增加 mouse 鼠标操作相关配置参数，方便外部控制

#### Additions 🎉
- Video3D 增加 maskImage 羽化图片参数
- 优化地图 Zoom 的处理，限定最大最小距离
- 优化鼠标在无地球情况下拾取

#### Fixes 🔧
- RectangleEntity 对象 flyTo 定位位置不对
- 优化 TS 和 API 文档对应 jsdoc 注释
- 进行一轮全面测试，并修复发现的多个 bug 问题
- 修复 v3.1.18 产生的单体化高亮失效问题
- 修改模型的 closeHighlight 方法无效问题



## 3.1.21 - 2022-1-8
#### Additions 🎉
- 封装增加 mars3d.control.Timeline 控件，方便后续控制
- 优化 LocationBar 的不同屏幕宽度下的展示
- 优化 DivGraphic、Popup、右键菜单 的样式和展示
- 标绘编辑增加 hasHeightEdit 属性控制是否修改高度值
- LineFlowMaterialProperty 支持时长参数

#### Fixes 🔧
- outline 边线高度支持读取 height 属性自适应
- PolygonEntity 的 setHeight、addHeight 属性无效


## 3.1.20 - 2022-1-4
- Cesium 升级至 1.89
- 上线[基础项目 Vue 版本](http://mars3d.cn/dev/guide/project/vue.html) 并部分开源

#### Additions 🎉
- 进行了一次 API 文档的规范和检查改正
- RoamLine 类增加 setOptions 方法、支持 model.highlight 配置
- 优化 ContextMenu 右键菜单二级菜单超出屏幕时的展示
- 增加 CylinderWaveMaterialProperty 材质属性
- LineFlicker 材质增加背景色参数

#### Fixes 🔧
- 解决 v3.1.18 产生的 Map 的控件相关参数 false 时显示的问题



## 3.1.18 - 2021-12-25
#### Breaking Changes 📣
- 对 Map 的控件相关做了优化，构造参数支持所有控件类型的配置，事件增加 addControl 等
- 对 Map 的增加 effect 构造参数，支持预先加载所有特效，事件增加 addEffect 等

#### Additions 🎉
- 增加 EffectType、ControlType 类
- 增加 ConeTrackPrimitive 矢量对象
- widget 的 disableOther 配置支持数组，释放指定的多个 widget

#### Fixes 🔧
- 图层 flyTo 时自动取消飞行漫游路线的跟随视角等锁定
- 右键二级菜单 show 显示的是 0 个时自动隐藏处理
- 解决 v3.1.17 动态 primitive 点的运行错误



## 3.1.17 - 2021-12-19
#### Additions 🎉
- DivLayer 内方法均融合至 GraphicLayer，可以 DivLayer 批量替换为 GraphicLayer(v3.2 将移除 DivLayer)
- 对标绘事件回调中增加修改或增加点的 index 值
- Popup 增加 animation 动画参数对是否动画可控
- 优化 Map 类的 setPitchRange 方法处理
- 对 OsmBuildingsLayer 支持 customShader 等参数

#### Fixes 🔧
- primitive 矢量对象 distanceDisplayCondition 参数无效
- 修复 v3.1.16 产生的 Popup 关闭时错误


## 3.1.16 - 2021-12-11
#### Breaking Changes 📣
- 事件回调对象增加 stopPropagation 方法可以停止事件冒泡
- 原有对象的 stopPropagation 更名为 eventParent，不仅用于关闭冒泡的父级还可以指定父级冒泡对象

#### Additions 🎉
- 增加 contextMenuOpen、contextMenuClose、contextMenuClick 右键菜单相关事件
- 控件和 DivGraphic 对象支持 parentContainer 参数来指定自定义的父级 DOM

#### Fixes 🔧
- 修复 v3.1.12 修改产生的模型 OutlineEffect 效果对其他对象生效问题
- 修复 v3.1.12 产生的地形开挖高度失效
- 修复 v3.1.15 优化 RoamLine 的 flyToPoint 方法产生的视角切换异常问题
- DivGraphic 对象绑定的 tooltip 闪烁问题
- 线面对象的按距离显示属性显示异常
- RoamLine 默认传入 model.roll 和 pitch 未生效
- 解决 GroupLayer 抛出 2 次事件问题



## 3.1.15 - 2021-12-5
#### Breaking Changes 📣
- 上线“功能示例 Vue 版本”并[开源](https://gitee.com/marsgis/mars3d-vue-example)
- 升级 Cesium 到 1.88 版本

#### Additions 🎉
- 增加 ClockAnimate 控件
- 优化 RoamLine 的 flyToPoint 方法

#### Fixes 🔧
- 整理 API 文档，去除多层 options 的参数
- 修改矢量数据的鼠标样式
- GaodePOI 圆形查询筛选有误



## 3.1.14 - 2021-11-29
#### Additions 🎉
- Zoom 控件支持增加 zoomOutIcon、zoomOutIcon 传入图片 url
- PolygonCombine 的 outline 支持优化
- DivGraphic 在 clampToGround:true 时支持随地形切换后贴地
- map 增加 terrainChange、tileLoadProgress 事件
- TilesetFlat 读取模型高度值的优化

#### Fixes 🔧
- map 的 requestRenderMode 属性默认值改回 false
- RoamLine 的 addShading 方法 polyline 无效



## 3.1.13 - 2012-11-21
#### Additions 🎉
- PolygonPrimitive、PolygonCombine、RectanglePrimitive、CirclePrimitive 增加支持 ouline 宽度及材质设置
- ModelEntity 对象 addDynamicPosition 时，增加 noPitchRoll 参数，可以设置模型只动态更改方向，内部固定模型的 Pitch 和 Roll 方向值为 0
- RoamLine 优化 clockLoop 参数，并支持导出 Json
- ViewShed3D 增加 terrain 参数控制是否开启地形的阴影效果

#### Fixes 🔧
- 更新 mars3d.Token.bing 令牌值
- 解决 v3.1.12 产生的方量分析 bug
- RoamLine 的 addShading 方法报错



## 3.1.12 - 2021-11-14
#### Breaking Changes 📣
- Cesium 升级至 1.87

#### Additions 🎉
- ModelPrimitive、TilesetLayer 支持 customShader 参数来自定义 shader 效果
- ToolButton 的 icon 参数支持传入图片 url
- Shadows 增加 terrain 参数控制是否开启地形的阴影效果
- wms、wmts 等图层增加 getCapabilities 参数控制
- 优化 Sightline 通视分析效果

#### Fixes 🔧
- Cesium v1.87 下计算计算贴地(或贴模型)路线点异常问题
- 绘制 DivGraphic 时 success 回调参数无效
- 解决 OutlineEffect 的 Entity 类型数据拾取异常
- 飞行漫游对象的 gs 跟随视角设置视距无效
- PolygonEntity、CircleEntity 对象更新 outline 边线的宽度失效和导出 geojson 的未记录 outlineStyle 样式
- GraphicLayer 的 data 参数被构造 2 次



## 3.1.10 - 2021-10-29
#### Breaking Changes 📣
- map 的 requestRenderMode 属性默认值改为 true

#### Additions 🎉
- 优化图层的 flyTo 处理，对 echarts 等图层增加 flyTo 支持
- 军事标绘支持 positions 传入数组坐标 CallbackProperty 回调属性
- xyz 图层增加 tms 属性，简化 tms 类型图层配置
- PolylinePrimitive 支持 colors 属性
- EllipsoidEntity 扫描效果支持暂停
- RectSensor 和 ConicSensor 增加 hideRayEllipsoid 属性



## 3.1.9 - 2021-10-24
#### Additions 🎉
- 增加大数据水面对象 WaterCombine
- 默认右键菜单中增加量算功能
- TilesetPlanClip 模型支持斜切
- 增加多个客户端空间分析示例
- 调整优化了矢量单体化示例
- 优化 DivGraphic 贴地效率
- TilesetLayer 中 highlight 参数增加 all 参数控制整体高亮

#### Fixes 🔧
- PathEntity 更新为固定位置时的 availability 时间内部未自动处理问题
- DivLayer 默认 show:false 传参无效问题
- GraphicLayer 的 loadGeoJSON 方法 type 部分识别无效问题



## 3.1.7 - 2021-10-11
#### Additions 🎉
- DivGraphic 增加支持 setHeight 和 addHeight 参数
- Image2 材质增加 color 颜色参数
- 优化 mars3d-wind 插件
- 增加了行政区突出展示 2、智慧社区等多个功能示例

#### Fixes 🔧
- Popup 默认鼠标无法单击问题
- 解决 v3.1.6 的 getRectangle 为空时的错误



## 3.1.6 - 2021-10-3
#### Additions 🎉
- 矢量数据和图层，增加 getRectangle 方法获取数据的矩形边界
- GroupLayer 的 flyTo 方法支持定位所有子图层矢量数据边界
- GeojsonLayer 增加 graphicOptions 参数
- Popup 增加 autoCenter 参数
- RoamLine 增加 forwardExtrapolationType 等参数
- RotatePoint 增加鼠标交互操作修改
- 公开 map.mouseEvent.moveDelay 参数控制鼠标移动事件的响应时间

#### Fixes 🔧
- 量算类的 label 属性失效
- map 在有 divGraphic 等矢量数据时销毁报错
- WMS 添加后快速移除报错 
- RoamLine 跟随视角时暂停不了的问题
- ouline 样式无效
- 军事标绘优化夹角
- SmallTooltip 支持 enabled 关闭



## 3.1.4 - 2021-9-18
#### Additions 🎉
- 矢量数据的 setHeight 和 addHeight 的属性支持字符串模版配置读取属性内值
- 增加 highlightOpen 和 highlightClose 事件，并优化 openHighlight 和 closeHighlight 方法。
- ModelPlanClip 支持 primitive 类型模型

#### Fixes 🔧
- FloodByGraphic 如果已传入需要的参数，可以直接 start 启动
- 对 cesiumlab 中通用模型工具处理的建筑物的特效的支持
- 修复 MouseDownView 不显示的问题
- 解决 rectangularSensor 与 czml 插件的命名冲突问题
- wms 等图层 proxy 参数支持字符串



## 3.1.3 - 2021-9-12
#### Breaking Changes 📣
- 增加了描边 OutlineEffect 特效对象
- Tooltip 更改了默认模板，并支持 direction 显示方向配置

#### Additions 🎉
- Compass 的 bottom 支持配置 toolbar，自动跟随 cesium-viewer-toolbar
- PolygonCombine 增加 setColorStyle 方法
- DivGraphic 的相关事件中增加 mouseEvent 原始 DOM 事件对象属性
- CircleEntity 和 RectangleEntity 对象 toGeoJSON 方法支持导出边线
- GaodeRoute 支持途经点、避让区域参数
- ToolButton 增加鼠标移入移出事件
- RainEffect 增加粒子大小和方向参数
- Util 增加 formatDate 方法

#### Fixes 🔧
- TerrainClip 的细长型出现裁剪异常
- PolygonCombine 属性 opacity:1.0 时的显示为透明问题
- 贴地 Water 的透明度无效
- 图层异步加载中设置 show=false 后还显示数据的问题
- 修改 DivGraphic 导出导入失效问题



## 3.1.1 - 2021-8-27
#### Additions 🎉
- BillboardPrimitive、PointPrimitive、ModelPrimitive 点状 Primitive 对象增加 addDynamicPosition 方法
- 模型 addDynamicPosition 添加的动态点时，增加到时时间停止后触发 stop 事件
- 重新梳理了右键菜单方法及其参数
- map 增加了 renderError 事件
- 增加 mars3d.LatLngPoint.FormatLength 全局变量，控制经度纬度的格式化时的长度
- 反选遮罩层支持多面的 geojson

#### Fixes 🔧
- DivGraphic 绑定的 popup 未正常显示
- PolylinePrimitive 的 zIndex 无效问题
- 瓦片图层单击后如果数据太大的卡顿问题
- WallScroll 扫描墙 材质横向透明度存在问题
- ModelPrimitive 类的 runAnimations 属性无效
- GaodePOI 分页存在问题，改为从 0 页开始(高德服务本身是从 1 开始)



## 3.1.0 - 2021-8-21
#### Breaking Changes 📣
- Popup 和 Tooltip 重构，bindPopup 参数移除了 onAdd、onRemove、timeRender 等参数，增加了 DivGraphic 支持的所有参数 (参考示例修改)。
- 矢量数据和图层增加 popupOpen、popupClose、tooltipOpen、tooltipClose 事件(替代原有 onAdd、onRemove 参数，参考示例修改)。
- Entity 类型矢量对象方法改名：highlight 改名为 startFlicker，unHighlight 改名为 stopFlicker
- 矢量数据增加 highlight 属性，增加 openHighlight、closeHighlight 方法，支持鼠标移入或单击后的按指定样式高亮对象
- 移除了 geojson\wfs 等图层的 dth 参数，改为 highlight 方式实现（参考示例修改）
- 移除了 3dtile 图层的 showClickFeature、pickFeatureStyle 参数，改为 highlight 方式实现（参考示例修改）
- 移除了 wms、arcgis 图层的 showClickFeature、pickFeatureStyle 参数，改为 highlight 方式实现（参考示例修改）

#### Additions 🎉
- 增加 OverviewMap 鹰眼地图控件
- DivGraphic 增加 className、timeRender 属性、增加 postRender 事件
- BillboardEntity 和 LabelEntity 类增加 startBounce、stopBounce 执行弹跳动画方法
- 导出 GeoJSON 等接口支持不导出高度值。
- 优化重写 measure 图上量算的内部实现，采用继承 Graphic 类的方式实现
- 矢量图层允许右键调用 startEditing 方法激活矢量数据编辑
- ModelEntity 和 ModelPrimitive 对象增加缩小后用像素点或图标展示
- 矢量图层的进入编辑的方式修改，可以右键去激活编辑矢量数据
- 文字材质优化和增加边框参数
- 3dtiles 图层增加了自定义属性和 Shader 的相关方法
- 增加 Image2 图片材质，可以避免图片加载中的白色问题
- 标绘编辑点支持在 DrawUtil.setPointStyle 方法修改样式

#### Fixes 🔧
- 对全部功能示例进行全部一轮测试，并修复了发现的问题
- 修复 MouseDownView 的默认显示问题
- 快捷键事件失效问题
- zonnIn 放大穿过地表后报错



---

## 3.0.36 - 2021-08-18
#### Additions 🎉
- 升级 Cesium 到 1.84
- Compass 导航球增加自定义样式和 svg 的外部接口
- wmts 支持自动读取服务本身配置，减少外部配置参数。
- 增加 PolylineCombine 大数据线对象
- 增加了一批矢量数据应用功能示例

#### Fixes 🔧
- 修改 DivLayer 图层移除报错
- 修复 PathEntity 更新动态点无效问题
- 屏蔽贴地面存在 outline 边线时的错误

#### Fixes 🔧
- 修改 npm 版本的自动化编译及发布方式
- 修复动态路线的坐标定位错误
- 修复方量挖方量数字显示错误
- 修改 npm 包的 package.json 改回 dependencies 方式



## 3.0.32 - 2021-7-27
#### Breaking Changes 📣
- space 插件中，移除 SpaceUtil 类，增加卫星 TLE 和 SGP4 相关算法类 Tle 类
- mars3d-echarts 插件升级支持 echarts5

#### Additions 🎉
- PointPrimitive 对象的 position 参数支持 CallbackProperty 值
- 百度增加 streetview 图层
- 优化 MapVLayer 的事件绑定 和 线面坐标的遮挡不显示处理
- 对 ConicSensor 和 RectSensor 对象，增加和优化了 length 和 rayEllipsoid 等属性
- 优化 SatelliteSensor 的效率，length 属性支持外部定义传入
- Satellite 支持外部动态 position 和 orientation 传值
- Map 类增加 zoomIn 和 zoomOut 方法

#### Fixes 🔧
- 下侧状态栏老版本 cesium 中高程值显示为 NaN 问题
- 对贴地 Graphic 的 flyTo 兼容定位到视角中心。
- RoamLine 投影墙在坐标重复时的显示高度问题。
- 优化 map.getTileLayers 获取的图层，增加为显示的 config.json 中的 layers 图层
- WindLayer 移除和销毁时后的报错。



## 3.0.31 - 2021-7-20
#### Breaking Changes 📣
- 删除 Cesium 库内的汉化，移除 mars3d.DrawUtil.message 对象，改为通过多语言参数控制处理。
- 修改 Regular 和 Sector 改为中心点和 radius、startAngle 等参数来绘制。
- 模型压平裁剪，优化对部分材质模型的支持。
- EchartsLayer 对 echarts 库的升级至 v5.1.2 版本

#### Additions 🎉
- Map 类支持 lang 多语言参数
- Popup 和 Tooltip 支持外部模板的传入。
- debugAxis 属性由 ModelEntity 提升到 BasePointEntity 类中
- RoamLine 在启动前增加静态模型的显示
- ViewShed3D 增加部分事件方便外部使用

#### Fixes 🔧
- EllipsoidEntity 导出 geojson 时的 scanPlane 参数处理
- 修复 setSceneOptions 的视角变化和参数合并。



## 3.0.30 - 2021-07-11
#### Breaking Changes 📣
- 剔除内部的 zepto 库，全部改为原生 js 操作 DOM。
- 减少对 turf 的依赖，目前仅用到 turf 的 4 个方法（buffer 缓冲分析、booleanPointInPolygon 判断点在面内、convex 求外包围面、bezierSpline 计算贝塞尔曲线）。

#### Additions 🎉
- 增加 getMidpoint 方法，优化标绘的中点计算。
- 对 entity 类型数据，增加 availability、viewFrom、parent 等原生 Entity 参数的传入。
- 线面数据的 addHeight 属性支持传入数组
- 矢量数据的 style.label.position 参数支持模版等配置
- GeoJsonLayer 加载 MultiPolygon 和 MultiLineString 时，支持只在最大坐标数的面或线上显示 Label 文本注记。

#### Fixes 🔧
- ArcGisWfsLayer 坐标系解析问题
- DivGraphic 类 setStyle 无效问题、z-index 问题
- Pit 底部改为 PolygonGeometry 解决凹面的渲染错误
- DynamicRoamLine 删除数据时\_removeDynamicPosition 的错误
- map 的 setsSeneOptions 支持 sceneMode 属性
- LimitHeight 的高度错误，改为 bottomHeight+height
- ConeTrack 大尺度下的偏移位置



## 3.0.29 - 2021-7-2
#### Breaking Changes 📣
- 升级 Cesium 到 1.83

#### Additions 🎉
- 对动态点增加贴模型参数，支持自动贴模型
- TilesetLayer 支持外部更新 modelMatrix
- RoamLine 的第一视角模式增加 offset3 个方向偏移值，可以进行驾驶舱内视角进行漫游。

#### Fixes 🔧
- 修复 isContinued:true 时支持连续测量
- DivUpLabel 字体参数无效的问题
- 修改 style.label 中的 setHeight 等高度参数的支持
- 修改矢量图层的 show 属性为 false 在数据加载前设置无效问题
- 除了线之外的面对象的 distanceDisplayCondition_far 值内部自动加 6378137 来保持效果一致。


## 3.0.28 - 2021-6-22
#### Breaking Changes 📣
- 升级 Cesium 到 1.82.1

#### Additions 🎉
- 比例尺控件，增加 distance 属性和 change 事件
- 图层、控件等对应增加 stopPropagation 参数控制事件是否冒泡
- DivGraphic 增加按视角自动计算叠加层次关系。
- 绘制圆时增加半径显示
- 对 wmts 服务图层支持 pickFeatures

#### Fixes 🔧
- 修复 map 上 once 绑定事件出错问题
- 修复曲线闭合属性切换未及时生效问题
- 修改面的边线大范围为与面贴合问题
- 修复量算种右键删除点的一些问题
- 模型压平支持自带矩阵的类型数据



## 3.0.27 - 2021-6-11
#### Additions 🎉
- Entity 点对象添加 轨迹位置动画接口方法
- 矢量图层标绘添加 isRestorePositions 参数，在标绘和编辑结束时，是否将坐标还原为普通值。
- wfs、arcgis 图层支持自动读取服务信息中的 crs 坐标系和 extent 边界信息。
- 修改默认右键菜单场景特效
- 量算长度，添加 showAddText 参数
- 优化 CGCS2000 高斯投影坐标的处理

#### Fixes 🔧
- 修复单体化 buffer 缓冲失效问题
- 修复 isInPoly 判断错误的问题
- 修改 DivGraphic 中 stopPropagation 参数处理，可以不在 map 上冒泡抛出事件



## 3.0.26 - 2021-6-3
#### Breaking Changes 📣
- 剔除了 mars3d-esri 插件，将插件原有类简化并优化后融入到主库中。
- 剔除了 mars3d-navigation 插件，主库中新增 Compass 和 DistanceLegend 控件(升级需修改 config.json)。
- 优化了状态栏控件，支持显示其他坐标系坐标，更改了 API 接口(升级需修改 config.json)

#### Additions 🎉
- 引入 proj4.js，并支持对大地 2000、西安 80 等坐标系的坐标转换
- 优化对 arcgis 服务、geojson 等的加载处理
- 修复测试人员测试发现的多个 bug



## 3.0.23 - 2021-05-08
#### Additions 🎉
- 添加 PolygonCombine、ModelCombine 等大数据展示的合并渲染对象
- 添加瓦片自动纠偏功能
- 添加 mars3d.graphic.DivUpLabel、DivBoderLabel 等 DivGraphic 对象，并新增了一些 DivGraphic 示例。
- 添加 ConeTrack 对象。
- 添加 FrustumPrimitive 对象。



## 3.0.20 - 2021-04-19
#### Breaking Changes 📣
- 升级 Cesium 到 1.80.0 版本
- 整理规范了 entity 和 primitive 的 style 样式，规范一致性传参，方便后续自由切换数据类型。
- 整理了矢量图层，原来的 GeoJsonLayer 更名为 CzmGeoJsonLayer

#### Additions 🎉
- 完成所有 V2 的功能的对应 V3 新版开发
- 整理梳理 material，新增了 MaterialType 和 MaterialUtil 类来统一管理。
- 设计了新的 GeoJsonLayer，采用可在 symobl 中配置 type 参数指定 Graphic 类型来渲染，默认为 primitive 方式。
- 重构了 LodGraphicLayer，采用 Graphic 方式渲染，默认内部为 primitive 方式，也可以按需自定义 type。

#### Fixes 🔧
- 完成一轮测试并修复多个 bug 形成稳定版本



## 3.0.0 - 2021-2-1
#### Breaking Changes 📣
1. 易学：使用和语法都按开发人员用户习惯最优设计，降低开发人员能力要求，只用初级水平开发人员即可上手。
2. 规范：API 从顶层统一规范的从零重构、统一的 Map 地图对象，规范一致的调度机制，使用和学习极其简单。
3. 高效率：提高了开发效率和平台的渲染效率。
4. 新技术栈支持：对 sdk 增加了 TypeScript 定义，npm 包公开发布，功能示例、教程开源开放，全新的开发生态。
5. 详细的 API 和教程：重新编写了详细的教程文档、自动根据 SDK 注释生成的最详尽的 API 文档，并完全免费开放。
6. 功能示例和项目模板：并规划开发了 Vue 版、React 版功能示例和基础项目。

#### Additions 🎉
- 发布了 v3 第一个测试版本。
- 矢量数据：全新设计的矢量图层 GraphicLayer 和 Graphic 矢量数据体系，可以自由切换数据类型，提高渲染效率。
- 材质：新增了十多个全新动态材质，并使用 MaterialType 和 MaterialUtil 类来统一管理矢量数据的材质对象，简单易用。
- 模型分析：优化了模型压平、模型开挖、模型淹没，支持多个模型压平等并提高渲染效率。
- 地形分析：优化了地形开挖、等高线、坡度坡向等地形相关功能，支持多个地形开挖并提高渲染效率。



---

## 2.0.0 - 2020-1-1

#### Breaking Changes 📣

- 发布了 v2.0



## 1.0.0 - 2017-8-25

#### Breaking Changes 📣

- 发布了 v1.0
