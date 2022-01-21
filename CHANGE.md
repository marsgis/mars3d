# Mars3D更新日志  

-------------------------------------------
## 3.1.23   2022-1-23 
#### Additions 🎉
- Video3D增加maskImage羽化图片参数
- 优化地图Zoom的处理，限定最大最小距离

#### Fixes 🔧  
- RectangleEntity对象flyTo定位位置不对
- 优化TS和API文档对应jsdoc注释
 


## 3.1.22   2022-1-15
#### Breaking Changes 📣
- 模型、矢量数据等增加allowDrillPick参数，允许鼠标穿透拾取进行交互
- Map类增加mouse鼠标操作相关配置参数，方便外部控制

#### Additions 🎉
- 优化鼠标在无地球情况下拾取

#### Fixes 🔧  
- 进行一轮全面测试，并修复发现的多个bug问题
- 修复 v3.1.18 产生的单体化高亮失效问题
- 修改模型的closeHighlight方法无效问题



## 3.1.21   2022-1-8
#### Additions 🎉
- 封装增加mars3d.control.Timeline控件，方便后续控制
- 优化LocationBar的不同屏幕宽度下的展示
- 优化DivGraphic、Popup、右键菜单 的样式和展示
- 标绘编辑增加hasHeightEdit属性控制是否修改高度值
- LineFlowMaterialProperty支持时长参数

#### Fixes 🔧  
- outline边线高度支持读取height属性自适应
- PolygonEntity的setHeight、addHeight属性无效



## 3.1.20   2022-1-4 
#### Breaking Changes 📣
- Cesium升级至1.89
- 上线[基础项目Vue版本](http://mars3d.cn/dev/guide/project/vue.html) 并部分开源


#### Additions 🎉
- 进行了一次API文档的规范和检查改正
- RoamLine类增加setOptions方法、支持model.highlight配置
- 优化ContextMenu右键菜单二级菜单超出屏幕时的展示
- 增加CylinderWaveMaterialProperty材质属性
- LineFlicker材质增加背景色参数

#### Fixes 🔧  
- 解决v3.1.18产生的Map的控件相关参数false时显示的问题



## 3.1.18   2021-12-25
#### Breaking Changes 📣
- 对Map的控件相关做了优化，构造参数支持所有控件类型的配置，事件增加addControl等
- 对Map的增加effect构造参数，支持预先加载所有特效，事件增加addEffect等

#### Additions 🎉
- 增加EffectType、ControlType类
- 增加ConeTrackPrimitive矢量对象
- mars3d-widget的disableOther配置支持数组，释放指定的多个widget

#### Fixes 🔧  
- 图层flyTo时自动取消飞行漫游路线的跟随视角等锁定
- 右键二级菜单show显示的是0个时自动隐藏处理
- 解决v3.1.17动态primitive点的运行错误




## 3.1.17 2021-12-19 
#### Additions 🎉
- DivLayer内方法均融合至GraphicLayer，可以将DivLayer批量替换为GraphicLayer(v3.2将移除DivLayer)
- 对标绘事件回调中增加修改或增加点的index值
- Popup增加animation动画参数对是否动画可控
- 优化Map类的setPitchRange方法处理
- 对OsmBuildingsLayer支持customShader等参数

#### Fixes 🔧  
- primitive矢量对象distanceDisplayCondition参数无效
- 修复v3.1.16产生的Popup关闭时错误



## 3.1.16 2021-12-11
#### Breaking Changes 📣
- 事件回调对象增加stopPropagation方法可以停止事件冒泡
- 原有对象的stopPropagation更名为eventParent，不仅用于关闭冒泡的父级还可以指定父级冒泡对象

#### Additions 🎉
- 增加contextMenuOpen、contextMenuClose、contextMenuClick右键菜单相关事件
- 控件和DivGraphic对象支持parentContainer参数来指定自定义的父级DOM


#### Fixes 🔧  
- 修复v3.1.12修改产生的模型OutlineEffect效果对其他对象生效问题
- 修复v3.1.12产生的地形开挖高度失效
- 修复v3.1.15优化RoamLine的flyToPoint方法产生的视角切换异常问题
- DivGraphic对象绑定的tooltip闪烁问题
- 线面对象的按距离显示属性显示异常
- RoamLine默认传入model.roll和pitch未生效
- 解决GroupLayer抛出2次事件问题



## 3.1.15   2021-12-5
#### Breaking Changes 📣
- 上线 功能示例Vue版本 并[开源](https://gitee.com/marsgis/mars3d-vue-example)
- 升级 Cesium 到 1.88 版本

#### Additions 🎉
- 增加ClockAnimate控件
- 优化RoamLine的flyToPoint方法

#### Fixes 🔧  
- 整理API文档，去除多层options的参数
- 修改矢量数据的鼠标样式
- GaodePOI圆形查询筛选有误


## 3.1.14 2021-11-29
#### Additions 🎉
- Zoom控件支持增加zoomOutIcon、zoomOutIcon传入图片url
- PolygonCombine的outline支持优化
- DivGraphic在clampToGround:true时支持随地形切换后贴地
- map增加terrainChange、tileLoadProgress事件
- TilesetFlat读取模型高度值的优化

#### Fixes 🔧  
- map的requestRenderMode属性默认值改回false 
- RoamLine的addShading方法polyline无效



## 3.1.13   2012-11-21
#### Additions 🎉
- PolygonPrimitive、PolygonCombine、RectanglePrimitive、CirclePrimitive增加支持ouline宽度及材质设置
- ModelEntity对象addDynamicPosition时，增加noPitchRoll参数，可以设置模型只动态更改方向，内部固定模型的Pitch和Roll方向值为0 
- RoamLine优化clockLoop参数，并支持导出Json
- ViewShed3D增加terrain参数控制是否开启地形的阴影效果

#### Fixes 🔧  
- 更新 mars3d.Token.bing 令牌
- 解决v3.1.12产生的方量分析bug
- RoamLine的addShading方法报错



## 3.1.12 2021-11-14

#### Breaking Changes 📣
- Cesium升级至1.87

#### Additions 🎉
- ModelPrimitive、TilesetLayer 支持customShader参数来自定义shader效果
- ToolButton的icon参数支持传入图片url
- Shadows增加terrain参数控制是否开启地形的阴影效果

#### Fixes 🔧  
- Cesium v1.87下计算计算贴地(或贴模型)路线点异常问题
- 绘制DivGraphic时success回调参数无效
- 解决OutlineEffect的Entity类型数据拾取异常
- 飞行漫游对象的gs跟随视角设置视距无效
- PolygonEntity、CircleEntity对象更新outline边线的宽度失效和导出geojson的未记录outlineStyle样式 
- GraphicLayer的data参数被构造2次



## 3.1.11 2021-11-7
#### Additions 🎉
- wms、wmts等图层增加getCapabilities参数控制
- 优化Sightline通视分析效果

#### Fixes 🔧  
- 修改已知bug



## 3.1.10 2021-10-29

#### Additions 🎉
- map的requestRenderMode属性默认值改为true 
- 优化图层的flyTo处理，对echarts等图层增加flyTo支持
- 军事标绘支持positions传入数组坐标CallbackProperty回调属性
- xyz图层增加tms属性，简化tms类型图层配置
- PolylinePrimitive支持colors属性
- EllipsoidEntity扫描效果支持暂停
 

## 3.1.9 2021-10-24

#### Additions 🎉
- 增加大数据水面对象 WaterCombine
- 默认右键菜单中增加量算功能
- TilesetPlanClip 模型支持斜切
- 增加多个客户端空间分析示例
- 调整优化了矢量单体化示例

#### Fixes 🔧  
- PathEntity更新为固定位置时的availability时间内部未自动处理问题
- DivLayer默认show:false传参无效问题
- GraphicLayer的loadGeoJSON方法type部分识别无效问题




## 3.1.8 2021-10-18

#### Additions 🎉
- 优化DivGraphic贴地效率
- TilesetLayer中highlight参数增加all参数控制整体高亮



## 3.1.7  2021-10-11 

#### Additions 🎉
- DivGraphic增加支持setHeight和addHeight参数
- Image2材质增加color颜色参数
- 优化mars3d-wind插件
- 增加了行政区突出展示2、智慧社区等多个功能示例

#### Fixes 🔧  
- Popup默认鼠标无法单击问题
- 解决v3.1.6的getRectangle为空时的错误



## 3.1.6    2021-10-3

#### Additions 🎉
- 矢量数据和图层，增加getRectangle方法获取数据的矩形边界
- GroupLayer的flyTo方法支持定位所有子图层矢量数据边界
- GeojsonLayer增加graphicOptions参数
- Popup增加autoCenter参数
- RoamLine增加forwardExtrapolationType等参数
- RotatePoint增加鼠标交互操作修改

#### Fixes 🔧  
- RoamLine跟随视角时暂停不了的问题
- ouline样式无效
- 军事标绘优化夹角
- SmallTooltip支持enabled关闭

 

## 3.1.5 2021-9-26
 
#### Additions 🎉
- 公开map.mouseEvent.moveDelay参数控制鼠标移动事件的响应时间

#### Fixes 🔧  
- 量算类的label属性失效
- map在有divGraphic等矢量数据时销毁报错
- WMS添加后快速移除报错



## 3.1.4    2021-9-18  

#### Additions 🎉
- 矢量数据的setHeight和addHeight的属性支持字符串模版配置读取属性内值
- 增加highlightOpen和highlightClose事件，并优化openHighlight和closeHighlight方法。
- ModelPlanClip支持primitive类型模型

#### Fixes 🔧  
- FloodByGraphic如果已传入需要的参数，可以直接start启动
- 对cesiumlab中通用模型工具处理的建筑物的特效的支持
- 修复MouseDownView不显示的问题
- 解决rectangularSensor与czml插件的命名冲突问题
- wms等图层proxy参数支持字符串


## 3.1.3  2021-9-12   

#### Breaking Changes 📣
- 增加了描边OutlineEffect特效对象
- Tooltip更改了默认模板，并支持direction显示方向配置

#### Additions 🎉
- Compass的bottom支持配置toolbar，自动跟随cesium-viewer-toolbar
- PolygonCombine增加setColorStyle方法
- DivGraphic的相关事件中增加mouseEvent原始DOM事件对象属性
- CircleEntity和RectangleEntity对象toGeoJSON方法支持导出边线
- GaodeRoute支持途经点、避让区域参数

#### Fixes 🔧  
- TerrainClip的细长型出现裁剪异常
- PolygonCombine属性opacity:1.0时的显示为透明问题
- 贴地Water的透明度无效
- 图层异步加载中设置show=false后还显示数据的问题


## 3.1.2  2021-9-4   

#### Additions 🎉
- ToolButton增加鼠标移入移出事件
- RainEffect增加粒子大小和方向参数
- Util增加formatDate方法

#### Fixes 🔧  
- 修改DivGraphic导出导入失效问题



## 3.1.1  2021-8-27 

#### Additions 🎉
- BillboardPrimitive、PointPrimitive、ModelPrimitive点状Primitive对象增加addDynamicPosition方法
- 模型addDynamicPosition添加的动态点时，增加到时时间停止后触发stop事件
- 重新梳理了右键菜单方法及其参数
- map增加了renderError事件
- 增加mars3d.LatLngPoint.FormatLength全局变量，控制经度纬度的格式化时的长度
- 反选遮罩层支持多面的geojson

#### Fixes 🔧  
- DivGraphic绑定的popup未正常显示
- PolylinePrimitive的zIndex无效问题
- 瓦片图层单击后如果数据太大的卡顿问题
- WallScroll扫描墙 材质横向透明度存在问题
- ModelPrimitive类的runAnimations属性无效
- GaodePOI分页存在问题，改为从0页开始(高德服务本身是从1开始)



## 3.1.0  2021-8-21

#### Breaking Changes 📣
- Popup和Tooltip重构，bindPopup参数移除了onAdd、onRemove、timeRender等参数，增加了DivGraphic支持的所有参数 (参考示例修改)。
- 矢量数据和图层增加popupOpen、popupClose、tooltipOpen、tooltipClose事件(替代原有onAdd、onRemove参数，参考示例修改)。
- Entity类型矢量对象方法改名：highlight改名为startFlicker，unHighlight改名为stopFlicker
- 矢量数据增加highlight属性，增加openHighlight、closeHighlight方法，支持鼠标移入或单击后的按指定样式高亮对象
- 移除了geojson\wfs等图层的dth参数，改为highlight方式实现（参考示例修改）
- 移除了3dtile图层的showClickFeature、pickFeatureStyle参数，改为highlight方式实现（参考示例修改）
- 移除了wms、arcgis图层的showClickFeature、pickFeatureStyle参数，改为highlight方式实现（参考示例修改）

#### Additions 🎉
- 增加OverviewMap鹰眼地图控件
- DivGraphic 增加className、timeRender属性、增加postRender事件
- BillboardEntity和LabelEntity类增加startBounce、stopBounce执行弹跳动画方法 
- 导出GeoJSON等接口支持不导出高度值。
- 优化重写measure图上量算的内部实现，采用继承Graphic类的方式实现
- 矢量图层允许右键调用startEditing方法激活矢量数据编辑
- ModelEntity和ModelPrimitive对象增加缩小后用像素点或图标展示
- 矢量图层的进入编辑的方式修改，可以右键去激活编辑矢量数据
- 文字材质优化和增加边框参数
- 3dtiles图层增加了自定义属性和Shader的相关方法
- 增加Image2图片材质，可以避免图片加载中的白色问题
- 标绘编辑点支持在DrawUtil.setPointStyle方法修改样式

#### Fixes 🔧  
- 对全部功能示例进行全部一轮测试，并修复了发现的问题
- 修复MouseDownView的默认显示问题
- 快捷键事件失效问题
- zonnIn放大穿过地表后报错


-------------------------------------------
 


## 3.0.36  2021-08-18 
#### Additions 🎉
- 升级Cesium到1.84
- Compass导航球增加自定义样式和svg的外部接口
- wmts支持自动读取服务本身配置，减少外部配置参数。
- 增加PolylineCombine大数据线对象
- 增加了一批矢量数据应用功能示例

#### Fixes 🔧 
- 修改DivLayer图层移除报错
- 修复PathEntity更新动态点无效问题
- 屏蔽贴地面存在outline边线时的错误



## 3.0.33至3.0.35  2021-08-04 
#### Fixes 🔧 
- 修改npm版本的自动化编译及发布方式
- 修复动态路线的坐标定位错误
- 修复方量挖方量数字显示错误
- 修改npm包的package.json改回dependencies方式



## 3.0.32  2021-7-27
#### Breaking Changes 📣
- space插件中，移除SpaceUtil类，增加卫星TLE和SGP4相关算法类Tle类
- mars3d-echarts插件升级支持echarts5

#### Additions 🎉
- PointPrimitive对象的position参数支持CallbackProperty值
- 百度增加streetview图层
- 优化MapVLayer的事件绑定 和 线面坐标的遮挡不显示处理
- 对ConicSensor和RectSensor对象，增加和优化了length和rayEllipsoid等属性
- 优化SatelliteSensor的效率，length属性支持外部定义传入
- Satellite支持外部动态position和orientation传值
- Map类增加zoomIn和zoomOut方法
 
#### Fixes 🔧 
- 下侧状态栏老版本cesium中高程值显示为NaN问题
- 对贴地Graphic的flyTo兼容定位到视角中心。
- RoamLine投影墙在坐标重复时的显示高度问题。
- 优化map.getTileLayers获取的图层，增加为显示的config.json中的layers图层
- WindLayer移除和销毁时后的报错。
 

## 3.0.31  2021-7-20

#### Breaking Changes 📣
- 删除Cesium库内的汉化，移除 mars3d.DrawUtil.message对象，改为通过多语言参数控制处理。
- 修改Regular和Sector改为中心点和radius、startAngle等参数来绘制。
- 模型压平裁剪，优化对部分材质模型的支持。
- EchartsLayer对echarts库的升级至v5.1.2版本
 
#### Additions 🎉
- Map类支持lang多语言参数
- Popup和Tooltip支持外部模板的传入。
- debugAxis属性由ModelEntity提升到BasePointEntity类中
- RoamLine在启动前增加静态模型的显示
- ViewShed3D增加部分事件方便外部使用
 
#### Fixes 🔧 
- EllipsoidEntity导出geojson时的scanPlane参数处理
- 修复setSceneOptions的视角变化和参数合并。




## 3.0.30    2021-07-11

#### Breaking Changes 📣
- 剔除内部的zepto库，全部改为原生js操作DOM。
- 减少对turf的依赖，目前仅用到turf的4个方法（buffer 缓冲分析、booleanPointInPolygon 判断点在面内、convex求外包围面、bezierSpline 计算贝塞尔曲线）。

#### Additions 🎉
- 增加getMidpoint方法，优化标绘的中点计算。
- 对entity类型数据，增加availability、viewFrom、parent等原生Entity参数的传入。
- 线面数据的addHeight属性支持传入数组
- 矢量数据的style.label.position参数支持模版等配置
- GeoJsonLayer加载MultiPolygon和MultiLineString时，支持只在最大坐标数的面或线上显示Label文本注记。

#### Fixes 🔧
- ArcGisWfsLayer坐标系解析问题
- DivGraphic类setStyle无效问题、z-index问题
- Pit底部改为PolygonGeometry解决凹面的渲染错误
- DynamicRoamLine删除数据时_removeDynamicPosition的错误
- map的setsSeneOptions支持 sceneMode 属性
- LimitHeight的高度错误，改为bottomHeight+height
- ConeTrack大尺度下的偏移位置



## 3.0.29 2021-7-2
#### Breaking Changes 📣
- 升级Cesium到1.83

#### Additions 🎉
- 对动态点增加贴模型参数，支持自动贴模型
- TilesetLayer支持外部更新modelMatrix
- RoamLine的第一视角模式增加offset3个方向偏移值，可以进行驾驶舱内视角进行漫游。

#### Fixes 🔧
- 修复isContinued:true时支持连续测量
- DivUpLabel字体参数无效的问题
- 修改style.label中的setHeight等高度参数的支持
- 修改矢量图层的show属性为false在数据加载前设置无效问题
- 除了线之外的面对象的distanceDisplayCondition_far值内部自动加6378137来保持效果一致。

 

## 3.0.28  2021-6-22
#### Breaking Changes 📣
- 升级Cesium到1.82.1

#### Additions 🎉
- 比例尺控件，增加distance属性和change事件
- 图层、控件等对应增加stopPropagation参数控制事件是否冒泡
- DivGraphic增加按视角自动计算叠加层次关系。
- 绘制圆时增加半径显示
- 对wmts服务图层支持pickFeatures

#### Fixes 🔧
- 修复map上once绑定事件出错问题
- 修复曲线闭合属性切换未及时生效问题
- 修改面的边线大范围为与面贴合问题
- 修复量算种右键删除点的一些问题
- 模型压平支持自带矩阵的类型数据



## 3.0.27  2021-6-11
#### Additions 🎉
- Entity点对象添加 轨迹位置动画接口方法
- 矢量图层标绘添加isRestorePositions参数，在标绘和编辑结束时，是否将坐标还原为普通值。
-  wfs、arcgis图层支持自动读取服务信息中的crs坐标系和extent边界信息。
- 修改默认右键菜单场景特效
- 量算长度，添加showAddText参数
- 优化CGCS2000高斯投影坐标的处理

#### Fixes 🔧
- 修复单体化buffer缓冲失效问题
- 修复isInPoly判断错误的问题
- 修改DivGraphic中stopPropagation参数处理，可以不在map上冒泡抛出事件



## 3.0.26  2021-6-3
#### Breaking Changes 📣
- 剔除了mars3d-esri插件，将插件原有类简化并优化后融入到主库中。
- 剔除了mars3d-navigation插件，主库中新增Compass和DistanceLegend控件(升级需修改config.json)。
- 优化了状态栏控件，支持显示其他坐标系坐标，更改了API接口(升级需修改config.json)

#### Additions 🎉
- 引入proj4.js，并支持对大地2000、西安80等坐标系的坐标转换
- 优化对arcgis服务、geojson等的加载处理
- 将V2版本剩下的多个示例改造并迁移完成。



## 3.0.25   - 2021-05-25
#### Fixes 🔧
- 修复测试人员测试发现的多个bug



## 3.0.24   - 2021-05-18
#### Fixes 🔧
- 修复测试人员测试发现的多个bug



## 3.0.23   - 2021-05-08
#### Additions 🎉
-  添加PolygonCombine、ModelCombine 等大数据展示的合并渲染对象

## 3.0.22   - 2021-05-03 
#### Additions 🎉
-  添加瓦片自动纠偏功能

#### Fixes 🔧
- 修复v3.0.21中矩形绘制完成自动删除的问题



## 3.0.21  - 2021-04-28
#### Additions 🎉
- 添加mars3d.graphic.DivUpLabel、DivBoderLabel 等 DivGraphic对象，并新增了一些DivGraphic示例。
- 添加 ConeTrack对象。
- 添加 FrustumPrimitive对象。

#### Fixes 🔧
- 修复多个bug
 


## 3.0.20   - 2021-04-19  
#### Breaking Changes 📣
- 升级 Cesium 到 1.80.0 版本

#### Fixes 🔧
- 完成一轮测试并修复多个bug



## 3.0.19   - 2021-04-15 
#### Breaking Changes 📣
- 整理规范了entity和primitive的style样式，规范一致性传参，方便后续自由切换数据类型。
- 整理了矢量图层，原来的GeoJsonLayer更名为CzmGeoJsonLayer

#### Additions 🎉 
- 整理梳理material，新增了MaterialType和MaterialUtil类来统一管理。
- 设计了新的GeoJsonLayer，采用可在symobl中配置type参数指定Graphic类型来渲染，默认为primitive方式。
- 重构了LodGraphicLayer，采用Graphic方式渲染，默认内部为primitive方式，也可以按需自定义type。 



## 3.0.18   - 2021-04-08
#### Breaking Changes 📣
- 按“规范、高效率、易学易用”为准则架构，从零开始重构开发的v3.0新版本，并开放开源免费使用。
- 规范重写了API文档，按jsdoc规范补充了所有SDK内的注释，自动生成的API文档更全面更详细。

#### Additions 🎉 
- 全新设计了矢量数据体系，采用Graphic矢量数据（统一的规范和style设计）和GraphicLayer矢量数据图层来统一管理。
- 优化了模型压平、模型开挖、模型淹没，支持多个模型压平等并提高渲染效率。
- 优化了地形开挖、等高线、坡度坡向等地形相关功能，支持多个地形开挖并提高渲染效率。



## 3.0.1至3.0.17  2021-04-06
#### Additions 🎉 
- 并不断迁移及整理v2的功能到新版本
- 修复测试人员测试发现的多个bug
- 形成稳定版本



## 3.0.0  - 2021-2-1
#### Breaking Changes 📣
- 发布了v3第一个测试版本。


-------------------------------------------

## 2.0.0  - 2020-1-1
#### Breaking Changes 📣
- 发布了v2.0
 


## 1.0.0  - 2017-8-25
#### Breaking Changes 📣
- 发布了v1.0