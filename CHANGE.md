# Mars3D版本及更新日志


# 1. Mars3D的版本

 Mars3D的版本号包括三个部分，比如 **v3.2.1**版本中，**主版本号是 3，大版本号是 2，小版本号是 1**

版本号是根据本次发布中包含的变更的级别进行递增的。

- **主版本**(v3)：包含重要的新特性和架构性调整，在升级时会需要由开发人员提供少量的协助才能完成。当升级到新的主版本时，你可能需要运行升级脚本、重构代码、运行其它测试以及学习新的API。

- **大版本**(v3.2)：包含新增功能和API优化重构，大版本其中大部分功能是向后兼容的，只有少部分特性是不兼容的(更新日志会说明弃用的API)，参考说明或示例简单调整即可。

- **小版本**(v3.2.1)：包含新的小型特性优化，bug修改等。 小版本是完全向后兼容的，在升级期间，不需要开发人员提供协助。【授权版时：无论哪种授权方式，小版本均是免费更新】

## 历史版本下载
我们以切换到`v3.4.26`版本为例：
- npm 安装的项目，请打开package.json修改mars3d版本号`"mars3d": "~3.4.26"` ，再npm install重新安装
- 静态引入的，请复制链接[https://registry.npmjs.org/mars3d/-/mars3d-3.4.26.tgz](https://registry.npmjs.org/mars3d/-/mars3d-3.4.26.tgz) 后，在浏览器地址栏粘贴并修改版本号为指定版本后会回车进行下载。



# 2. 发布频率
 我们会定期发布新版本，以便随着 Mars3D 的不断演进，你可以提前计划并协调这些升级工作。  

> 这些日期仅供一般性参考，如有更改，恕不另行通知。

通常的发布周期如下：
- 主版本 没有时间规划，如果有架构性变化时会升主版本
- 约 每年 发布1个大版本
- 约 每2周 发布1个小版本，在第2周的周二发布（如果有紧急的 bugfix，则任何时候都可发布）
  

# 3. 弃用策略
"弃用 & API重构"（比如移除特定的 API 和特性）有时候是必须的，比如创新、更高效率、让最佳实践与时俱进、变更依赖关系甚至来自 Web 平台自身的变化。

要让这些转变尽可能的简单，我们会给你下列保证：
- 我们会尽量减少重大变更的数量，并尽可能提供迁移工具。
- 我们会遵循这里所讲的弃用策略，让你有时间把应用升级到最新的 API 和最佳实践。



# 4. 更新日志


---
## 3.11.1 - 2026-3-15

#### 优化 💪
- mars3d-cesium库升级到[v1.139](https://github.com/CesiumGS/cesium/releases/tag/1.139) 

#### 修复 🐞
- FrustumPrimitive、FrustumCombine的夹角计算规则有误差，修改计算规则
- 部分多环面toJSON未正确导出孔洞坐标
- 矢量图层isContinued连续绘制时提示id重复警告移除
- WFS图层配置rectangle切flyTo:true时未正常飞行定位



## 3.11.0 - 2026-2-14

#### 优化 💪
- ParallelogramEntity增加isRect参数可以限定为角度是90度的矩形
- mars3d-cesium库升级到[v1.138](https://github.com/CesiumGS/cesium/releases/tag/1.138) 

#### 修复 🐞
- Gif时序点编辑时无法拾取编辑第一个位置
- 地形夸张时贴地点计算时未贴夸张高度
- DivGraphic时序点编辑异常



--- 
## 3.10.11 - 2025-12-30
#### 优化 💪 
- DistanceLegend增加unit参数
- WfsLayer图层cql_filter参数支持动态变量
- mars3d-cesium库升级到[v1.136](https://github.com/CesiumGS/cesium/releases/tag/1.136) 

#### 新增 🌟
- 新增QueryIServer

#### 修复 🐞
- CamberRadar构造参数传入show:false无效



## 3.10.9 - 2025-11-28
#### 优化 💪 
- VolumeCloud新增clip参数

#### 修复 🐞
- VolumeDepthMeasure在3个坐标时分析失败

#### 弃用 & API重构 🔒
- VolumeCloud移除xCut、yCut、zCut参数(请改用clip)



## 3.10.8 - 2025-11-06
#### 新增 🌟
- 新增ShortestPath根据地形和最大坡度限制进行最短路径分析类

#### 优化 💪 
- ConeTrack的style中angle、length、heading等参数支持回调属性值
- mars3d-cesium库升级到[v1.135](https://github.com/CesiumGS/cesium/releases/tag/1.135) 

#### 修复 🐞
- DivGraphic编辑时smallTooltip错位
- Geocoder返回无坐标数据时崩溃



## 3.10.7 - 2025-10-24
#### 优化 💪 
- ColorRamp增加getImage取色带图片方法，可用于图例
- MeasureUtil.formatArea方法参数增加mile(平方海里)
- PolyUtil.interPolygonByDepth增加isInPoly参数可返回标准网格全量结果

#### 修复 🐞
- 2D二维模式下map.zoomOut方法异常




## 3.10.6 - 2025-10-10
#### 优化 💪 
- cesium内部材质entity与primitive材质不同属性名称的兼容处理
- flyTo方法增加onBefore参数
- RotateOut、RotatePoint增加暂停和继续方法
- mars3d-cesium库升级到[v1.134](https://github.com/CesiumGS/cesium/releases/tag/1.134) 

#### 修复 🐞
- CircleEntity的flyToOptions.radius参数无效
- zoomIn、zoomOut 2D模型下没有地球时无法缩放



## 3.10.5 - 2025-9-16
#### 优化 💪 
- FixedRoute增加autoStart参数

#### 修复 🐞
- DistanceMeasure的updateText参数中总长label未生效
- arcgis图层subdomains参数未生效
- Task时序任务返回的index值有误



## 3.10.4 - 2025-9-5
#### 优化 💪 
- WallEntity增加riseAnimationDuration参数和startRiseAnimation方法
- TilesetLayer增加opaquePass、renderState参数
- map增加tilePromise、terrainPromise属性
- MatrixMove2的radius自动根据视角缩放
- ModelEntity存在color值时自动填充颜色
- popup支持配置iframe方式(如显示实时视频)
- mars3d-cesium库升级到[v1.133](https://github.com/CesiumGS/cesium/releases/tag/1.133) 

#### 修复 🐞
- MatrixMove的enabled属性无效



## 3.10.3 - 2025-8-22
#### 优化 💪 
- bindContextMenu绑定菜单增加mergeMap参数控制是否合并一起显示map默认右键菜单
- MouseDownView自动判断鼠标按钮事件

#### 修复 🐞
- DivGraphic对象在移动端无法编辑
- ConeTrack的setStyle更新heading时位置错位
- WallEntity时序坐标时报错
- 默认右键菜单的粘贴矢量对象未支持时序坐标



## 3.10.2 - 2025-8-11
#### 优化 💪 
- Timeline的format参数支持直接传入时间格式化文本 
- 按住ctrl/alt/shift键进行click时，事件内支持返回ctrlKey/altKey/shiftKey:true的标识

#### 修复 🐞
- CircleEntity存在diffHeight时，高度编辑点失效
- GraphicLayer配置symbol为热力图时，切换show未同步进行显示隐藏处理
- map.setBasemapsOptions方法传空值时未清除原有配置



## 3.10.1 - 2025-8-3
#### 优化 💪 
- GroupGraphic支持设置availability属性对对所有子级生效
- Subtitles不展示文本时div进行隐藏(方便设置背景色)
- mars3d-cesium库升级到[v1.132](https://github.com/CesiumGS/cesium/releases/tag/1.132) 

#### 修复 🐞
- PitEntity的label默认初始化未显示
- Mask遮盖对象flyTo效果不对
- GraphicLayer初始加载json时readyPromise未触发
- HeatLayer热力图更新不在相同rectangle的positions时有偏移
- PolyUtil.isInPoly方法改为使用truf库算法(之前的改名为isInPoly2，判断地球背面的坐标存在错误)
- 手动修改map.clock.multiplier时ClockAnimate控件未自动更新



## 3.10.0 - 2025-7-6
#### 新增 🌟
- 新增标准[mars3d-plot](https://www.bilibili.com/video/BV1zSMMz8Etx/)军标插件（非公开）
- 新增了Sector扇形材质 
- 新增 HighFog 高度雾特效

#### 优化 💪
- OverviewMap增加sync参数
- CircleWave材质增加square、startAngle、endAngle、isDouble参数
- mars3d-cesium库升级到[v1.131](https://github.com/CesiumGS/cesium/releases/tag/1.131) 

#### 修复 🐞
- 梳理API文档结构，优化订正API描述
- 修复已知bug问题

#### 弃用 & API重构 🔒
- 放弃React功能示例及通用项目模版的维护,并下线官网React入口



--- 
## 3.9.12 - 2025-6-20
#### 优化 💪 
- 支持3DGS高斯泼溅模型时渲染(请升级mars3d-cesium库到v1.130.1)
- 矢量图层symbol.styleFieldOptions配置优化，支持属性表达式配置
- 默认右键菜单增加导入JSON文件菜单项
- 插件增加注册成功的F12打印log提示，便于排查问题

#### 修复 🐞
- 修复已知bug问题



## 3.9.11 - 2025-6-10
#### 新增 🌟
- GraphicLayer、GeoJsonLayer、BusineDataLayer新增配置symbol参数方式直接渲染热力图方式
- 新增WfsSingleLayer简单wfs图层，可以一次性加载wfs数据
- 新增PolyGradient2双色渐变面材质

#### 优化 💪 
- HeatLayer增加valueColumn参数，并positions支持类似点矢量数据相同构造数据的直接传入渲染
- TerrainClip、TerrainPlanClip、TerrainUplift增加stylePit参数
- RectSensor增加cameraHpr样式参数
- Pit新增stRotationDegree等参数
- mars3d-cesium库升级到[v1.130](https://github.com/CesiumGS/cesium/releases/tag/1.130) 

#### 修复 🐞
- toobar按钮控件setOptions修改insertIndex参数无效
- PolylineEntity外部传入的动态属性坐标时label位置未随之自动变化



## 3.9.9 - 2025-5-7
#### 优化 💪 
- mars3d-cesium库升级到[v1.129](https://github.com/CesiumGS/cesium/releases/tag/1.129) 

#### 修复 🐞
- v3.9.8产生的Polyline绘制错误
- v3.9.7产生的合并渲染矢量对象的单个拾取错误



## 3.9.8 - 2025-4-28
#### 优化 💪
- 增加availabilityChange事件
- 优化PolylineEntity对象startSnakeAnimation内部规则

#### 修复 🐞
- PitEntity、PlaneEntity的label默认初始化未显示
- Video2D的部分参数setOptions修改无效



## 3.9.7 - 2025-4-21
#### 新增 🌟
- 增加对矢量对象的 复制、剪切、粘贴 右键菜单功能

#### 优化 💪
- 矢量图层的symbol.styleFieldOptions参数支持JS语法字符串配置
- GeoJsonLayer等矢量图层filter参数支持JS语法字符串配置
- VideoPrimitive对象增加maskImage参数
- 优化时序对象的编辑等操作

#### 修复 🐞
- 修复v3.9.6产生的zIndex的顺序错误
- 热力图图层setOptions方法支持动态更新热力图效果相关参数



## 3.9.6 - 2025-4-15
#### 优化 💪
- DoubleSidedPlane支持文本材质

#### 修复 🐞
- PolylineEntity的startSnakeAnimation方法算法重写
- PathEntity在未加入图层时toJSON方法未导出坐标信息
- Mask遮盖对象toJSON坐标不对



## 3.9.5 - 2025-4-2
#### 优化 💪
- mars3d-cesium库升级到[v1.128](https://github.com/CesiumGS/cesium/releases/tag/1.128) 

#### 修复 🐞
- v3.9.4产生的MapCompare释放后事件报错
- v3.9.3产生的map触发2次load事件
- MultipleSkyBox销毁时报错


## 3.9.4 - 2025-3-25
#### 优化 💪
- MapCompare对比事件代码优化
- TilesetClip增加亮度参数，可以同时调整模型亮度

#### 修复 🐞
- Entity使用LineFlow等属性材质时多个颜色参数只显示了其中一个
- PlanePrimitive编辑时的材质方向与Entity不一致
- Measure的updateUnit更新单位方法，在距离时部分情况下无效


## 3.9.3 - 2025-3-18
#### 新增 🌟
- 新增 高度雾、闪电 特效

#### 修复 🐞
- 时序点坐标时编辑时异常
- Box编辑中心点按轴平移时移动时，其他点未同步移动
- 测量长度英文切换时起点的文本未同步修改

#### 弃用 & API重构 🔒
- 所有effect类名更名去掉Effect后缀，如Bloom改名BloomEffect


## 3.9.2 - 2025-3-11

#### 新增 🌟
- 矢量图层新增attr属性，支持对图层内所有矢量数据统一配置ajax动态属性。

#### 优化 💪
- ConeTrack、ConeTrackPrimitive支持标绘和编辑
- mars3d-cesium库升级到[v1.127](https://github.com/CesiumGS/cesium/releases/tag/1.127) 

#### 修复 🐞
- MapCompare控件show属性切换时优化
- Subtitles字幕在暂停时钟时正常显示
- CylinderWave材质未展示动画


## 3.9.1 - 2025-2-25
#### 修复 🐞
- 控件setStyle修改初始位置未生效
- FixedRoute修改polyline.showAll属性无效
- CircleEntity贴地属性下编辑时提示的半径错误
- 百度瓦片底图国外局域不进行纠偏



## 3.9.0 - 2025-2-15
#### 重要说明 📣
- 对矢量数据postion、positions属性和时序位置相关做了重大调整

#### 新增 🌟
- 点矢量对象postion新增支持传入[时序坐标](http://mars3d.cn/api/BaseGraphic.html#.TimePosition)进行动态展示
- 线面Entity矢量对象positions新增支持传入[时序坐标](http://mars3d.cn/api/BaseGraphic.html#.TimePolyPositions)进行动态展示,并支持addTimePositions方法加时序位置
- 矢量图层新增collision属性，支持文本及点矢量对象的碰撞检测自动隐藏不展示
- 增加内置ToolBar控件对象，增加对map工具按钮栏上下左右位置的配置position参数
- 新增QueryPOI、QueryRoute查询类，内部service参数控制选用天地图、百度、高德服务

#### 优化 💪
- GeodePoiLayer类更名PoiLayer，并支持 天地图、百度、高德服务类型参数
- Geocoder支持天地图、百度、高德不同类型
- mars3d-cesium库升级到[v1.126](https://github.com/CesiumGS/cesium/releases/tag/1.126) 

#### 弃用 & API重构 🔒
- 矢量对象属性变更：移除coordinate和coordinates（改用coord）、点矢量对象删除positions、points(可以用coord或graphic.isPoint判断区分点和线面)
- 矢量对象方法变更：addDynamicPosition改名addTimePosition ，移除getCoordinates和getCoordinate(改用getCoord)
- PathEntity、Route、FixedRoute取消positions等参数，改为其他点对象一样的[时序坐标](http://mars3d.cn/api/BaseGraphic.html#.TimePosition)方式
- 移除GraphicGroupLayer图层(改用GroupGraphic进行分组管理)
- GraphicLayer移除hasEdit属性、activateEdit、disableEdit方法，请改用isAutoEditing属性（因为含义为“是否自动激活编辑”而不是“是否允许编辑”）
- GeoJSON图层解析时MultiLineString、MultiPolygon默认采用GroupGraphic包一层（可传hasGroup:false），取对象方式有变化
- 移除map.keyboardRoam，解耦改为按需构造mars3d.thing.KeyboardRoam对象
- 移除了TdtPOI、BaiduPOI、GaodePOI、GaodeRoute类(改用QueryPOI、QueryRoute)
- 移除了GaodePOIGeocoder、GeodePoiLayer(改用PoiLayer)
- 移除了CircleScan材质，请直接用Image2
- map移除了toolbar属性(改用map.control.toolbar)



--- 
## 3.8.15 - 2025-01-28
#### 优化 💪
- 增加对vue3支持自动判断不双向绑定

#### 修复 🐞
- Graphic矢量数据setOptions修改popupOptions属性未合并
- 矢量数据图层聚合优化，show变更后未自动更新聚合状态等



## 3.8.13 - 2025-01-20
#### 优化 💪
- Timeline控件增加refresh刷新方法
- MapCompare控件增加是否同步视角参数
- PointMeasure增加popupOptions参数
- GraticuleLayer经纬网步长规则优化为正方形格
- ContextMenu右击graphic时自动处理
- map.proceedCameraViewList方法优化减去暂停前的播放时长

#### 修复 🐞
- effect特效toJSON修改过的属性值未导出
- FixedRoute存在暂停时间时重复播放index有问题
- VolumeDepthMeasure初始化传入minHeight、maxHeight值无效



## 3.8.12 - 2025-01-06
#### 优化 💪
- CubeView控件增加单击交互和相关参数
- mars3d-cesium库升级到[v1.125](https://github.com/CesiumGS/cesium/releases/tag/1.125) 

#### 修复 🐞
- Sector编辑按轴移动异常



## 3.8.11 - 2024-12-24
#### 优化 💪
- 所有对象setOptions方法增加第2个参数，可以控制内部是否merge合并
- CzmGeoJsonLayer、KmlLayer支持highlight参数
- LineBloom材质增加showRatio参数，可控制显示一半
- 地形编辑、模型编辑相关类增加area属性

#### 修复 🐞
- 修复v3.8.7增加挂载colorCorrection造成TilesetLayer图层导出JSON失败的问题



## 3.8.10 - 2024-12-11
#### 优化 💪
- Map.setOptions、setLayersOptions方法增加过滤图层参数
- 默认右键菜单增加图层及场景的配置导出
- WindLayer风向图图层重写
- 矢量图层loadJSON、GeoJSON图层加载json数据互相兼容格式 
- 矢量图层加载json数据toPrimitive参数(自动转为Primitive渲染)规则优化
- 矢量图层更新symbol时symbol.type切换时自动丢弃之前的styleOptions
- Popup、Tooltip增加useGraphicPostion参数控制是否使用graphic本身坐标 
- BillboardEntity、PointEntity等label增加combine参数控制是否使用Entity附带文本
- PolygonEntity增加outlineStyle.usePolyline参数控制是否使用polyline对象模拟边线
- mars3d-cesium库升级到[v1.124](https://github.com/CesiumGS/cesium/releases/tag/1.124) 

#### 修复 🐞
- 部分线面对象聚合异常
- DivGraphic移除时按轴平移对象未销毁
- GroupGraphic对象组flyTo错误
- 编辑矢量对象时，整体平移编辑点的按轴平移时部分异常

#### 弃用 & API重构 🔒
- Popup、Tooltip之前取矢量对象坐标全改为鼠标坐标，如需继续使用矢量对象本身坐标，请加useGraphicPostion:true参数



## 3.8.8 - 2024-11-26
#### 新增 🌟
- 新增ParallelogramEntity、ParallelogramPrimitive平行四边形矢量对象

#### 优化 💪
- Map增加getLayrsTree方法、矢量图层增加getGraphicsTree方法
- WFS图层内部增加自动取消已发出请求
- FrustumPrimitive增加near参数
- Map增加isDrawing属性
- LineFlow材质增加bgColor参数

#### 修复 🐞
- PointVisibility、ConeVisibility合并渲染可视域对象opacity参数无效
 

## 3.8.7 - 2024-11-14
#### 新增 🌟
- 恢复v3.4移除的 mars3d-supermap 插件及 超图S3M图层 示例

#### 优化 💪
- TilesetLayer增加挂载colorCorrection 颜色校正参数和属性

#### 弃用 & API重构 🔒
- TilesetLayer移除了luminanceAtZenith参数
- npm包中去掉`dist`子目录，与下载的静态包目录保持一致(如果`import "mars3d/dist/mars3d.css"`报错，请改为`import "mars3d/mars3d.css"`)



## 3.8.6 - 2024-11-5
#### 新增 🌟
- [矢量数据编辑](http://mars3d.cn/editor-vue.html?id=layer-graphic/draw/draw) 增加还原编辑、撤销编辑(还原到上一步)功能
- 新增 Task [时序任务执行](http://mars3d.cn/editor-vue.html?id=thing/other/task)管理器（可以指定时间内做指定的任意事情）
- 新增 Subtitles [字幕控件](http://mars3d.cn/editor-vue.html?id=control/basis/subtitles)
- 新增 DivGif 矢量对象便于gif图标的标绘及管理
- 矢量对象、图层、特效的availability时序显示属性支持直接传入相对开始时间的秒数，和配置duration时长参数

#### 优化 💪
- WfsLayer图层增加maxCacheCount参数，并优化减少请求数
- Map增加graphic参数，可以传入map.graphicLayer默认图层相关构造参数
- Map增加getAvailabilityList方法，可以获取当前地图下 图层、矢量对象、特效、控件 绑定的 所有availability列表清单
- mars3d-cesium库升级到[v1.123](https://github.com/CesiumGS/cesium/releases/tag/1.123) 

#### 修复 🐞
- map.setOptions修改targetFrameRate参数无效
- 三维模型编辑时保留初始绑定菜单与编辑菜单一起展示




## 3.8.5 - 2024-10-29
#### 新增 🌟
- 矢量图层聚合重写，支持所有数据类型的聚合，并使用新的cluster参数、clusterEnabled属性、clusterStop事件。(Tip:不参与聚合的类型：合并渲染对象、处于标绘或编辑状态的对象)

#### 优化 💪
- map的getCenter、getExtent、flyToExtent方法算法重写
- OverviewMap增加polygon视域范围面的展示，并优化视角同步效果
- RectangleEntity整体移动算法优化重写
- SectionMeasure剖面分析的距离由空间距离改为切面的水平距离
- Timeline增加format参数、ClockAnimate优化format参数
- v3.4移除的 ModelLayer 恢复还原并修改了参数，用于单个gltf模型时简洁快速管理

#### 修复 🐞
- BillboardEntity、BillboardPrimitive、PointEntity贴地在2D时不显示
- PathEntity的getIndex或index不对
- 图上量算的hasMoveEdit参数无效

#### 弃用 & API重构 🔒
- 矢量图层聚合相关全部重写，已移除clustering参数、clustering属性等，已由其他参数替代。



## 3.8.4 - 2024-10-15
#### 优化 💪
- VolumeDepthMeasure修改参数支持盒子可以按需显示
- Image2图片材质增加maskImage参数
- Video2D增加maskImage样式参数
- mars3d-cesium库升级到[v1.122](https://github.com/CesiumGS/cesium/releases/tag/1.122) (已知问题：添加矢量对象时存在黑屏闪烁问题)

#### 修复 🐞
- v3.8.3产生的wmts内部自动解析参数错误的问题
- BaseLayerPicker控件在外部更新底图和地形后的自动更新
- ModelPrimitive存在distanceDisplayBillboard属性时开始编辑会消失  [#IAUS4W](https://gitee.com/marsgis/mars3d/issues/IAUS4W)
- Satellite不存在model参数时cone的创建及更新方向异常
- PointPrimitive图层设置透明度无效
- DoubleSidedPlane 深度检测下没有遮挡

## 3.8.3 - 2024-9-25
#### 优化 💪
- PointVisibility、ConeVisibility 增加visibleAreaColor、hiddenAreaColor颜色自定义参数
- PathEntity不在时序范围内，使用取最近的一个状态的方向值
- TdtPOI、BaiduPOI、GaodePOI等key参数同时支持字符串或数组
- TilesetClip、TilesetFlat增加maxCanvasSize参数
- Geocoder参数优化并补充API
- WMTS增加tileMatrixBefore参数
- 标绘时的顶点吸附，改为允许空白处正常拾取标绘
- turf库升级到[v7.1](http://turfjs.org/) 

#### 修复 🐞
- 按轴平移时editMovePoint事件返回的cartesian坐标值不是最新的
- TerrainClip外裁剪时删除到最后一个报错
- BillboardEntity的color和opacity同时存在时color无效


## 3.8.2 - 2024-9-10
#### 新增 🌟
- 新增LineDashArrow虚线箭头线材质

#### 优化 💪
- 优化SatelliteSensor在不动时的渲染效率

#### 修复 🐞
- 非标准地形服务(天地图、ArcGIS地形)不支持准确贴地高度计算时报错的容错处理
- Polygon本身不贴地但outline边线贴地时报错的容错处理



## 3.8.1 - 2024-9-3
#### 优化 💪
- SatelliteSensor、RectSensor、ConicSensor增加slices参数并默认值改为最小，可以自定义传值优化效率和效果
- OutlineEffect增加closeOnClick参数
- mars3d-cesium库升级到[v1.121](https://github.com/CesiumGS/cesium/releases/tag/1.121) 

#### 修复 🐞
- PointLight绘制时，传入color无效 [#IALND0](https://gitee.com/marsgis/mars3d/issues/IALND0)
- 合并渲染对象调用openHighlight、closeHighlight方法无法指定index
- Video3D对象play属性赋值无效
- ModelPrimitive在highlight属性交互时模型会重绘闪烁
- CameraHistory在2D模式下无法限定范围



## 3.8.0 - 2024-8-20
#### 新增 🌟
- 新增BillboardIndicator可拖拽面板矢量对象
- 重写HeatLayer热力图图层类，支持全球渲染及缩放重新渲染
- PolylineEntity增加snakeAnimation流动生长(贪吃蛇)动画参数及相关方法
- 绘制线面对象，增加drawShowMeasure参数显示测量结果辅助标绘
- 瓦片图层支持自定义切片的加载，增加origin、resolutions、zOffset等相关相关参数

#### 优化 💪
- Image2材质增加rotation旋转角度属性
- TilesetLayer及矢量数据增加matrixMove、matrixRotate参数支持编辑时自定义轴参数
- WindLayer重写适配最新版Cesium（WebGL2渲染）
- ParticleSystem增加visibleDepth属性可以控制不被遮挡
- geojson数据加载时增加可自动转为Primitive渲染的toPrimitive参数

#### 修复 🐞
- TilesetBoxClip盒子裁剪clipOutSide参数无效 [#IAKIJP](https://gitee.com/marsgis/mars3d/issues/IAKIJP)

#### 弃用 & API重构 🔒
- 免费版SDK的Logo位置：将出现在屏幕四周随机位置 (如需无Logo请您[购买授权](http://mall.marsgis.cn/#/product/mars3d-sdk-1) 支持mars3d的可持续发展)
- 矢量数据编辑时按轴移动使用的matrixMoveRadius参数移除，可改用matrixMove参数



---
## 3.7.25- 2024-8-16
#### 修复 🐞
- CurveEntity曲线setHeight属性未生效
- CorridorEntity的坐标中高度值未生效
- Regular、Sector矢量对象的hasMoveEdit属性无效


## 3.7.24- 2024-8-6
#### 优化 💪
- PointPrimitive增加clampToGroundExact参数，clampToGround的默认是概略快速计算
- mars3d-cesium库升级到[v1.120](https://github.com/CesiumGS/cesium/releases/tag/1.120) 

#### 修复 🐞
- ViewShed和Video3D在图层设置show为false时显示异常
- BillboardEntity的distanceDisplayPoint.distanceDisplayCondition_far参数无效
- ModelEntity的flyTo飞行定位去掉自动计算的radius，改为与其他矢量数据规则一致
- Image2MaterialProperty属性材质的noWhite参数无效
- VideoPrimitive导入导出json支持记录网格编辑点信息
- Route在clampToTileset贴模型属性为true时Popup未贴模型


## 3.7.23- 2024-7-23
#### 优化 💪
- Video3D增加distanceDisplayCondition参数
- Sightline通视分析add方法增加objectsToExclude参数
- VolumeDepthMeasure的maxHeight改变含义，会影响挖方量
- ConeTrack的style.label改为在椎体中间
- 三角测量结果进行错位展示文本信息

#### 修复 🐞
- GraphicLayer矢量图层聚合时，后续增加的primitive未更新聚合值
- Map初始化内置控件被实例化2次
- 热力图跨省区域下存在偏移问题



## 3.7.22- 2024-7-16
#### 优化 💪
- BillboardPrimitive增加distanceDisplayPoint参数

#### 修复 🐞
- DivGraphic按轴移动时DIV本身遮挡了移动轴
- Tooltip直接构造时style下的offsetX、offsetY值未生效



## 3.7.21- 2024-7-5
#### 优化 💪
- 文本材质、CanvasLabelEntity 增加\n换行和字间距参数
- Mask增加style.global参数
- mars3d-cesium库升级到[v1.119](https://github.com/CesiumGS/cesium/releases/tag/1.119)

#### 修复 🐞
- GaodePOI增加chinaCRS参数，解决在map.chinaCRS是GCJ02时坐标无需做加偏纠偏处理



## 3.7.19 - 2024-6-26
#### 优化 💪
- 矢量数据增加matrixMoveRadius参数用于右键菜单中按轴移动编辑
- SectionMeasure剖面增加minDistance参数
- WmtsLayer增加getFeatureInfoFormat参数
- PointMeasure位置测量增加参数及优化显示

#### 修复 🐞
- ToolButton、Zoom控件的parentContainer参数无效
- 贴地PointEntity在二维视图下不显示(Cesium本身bug)



## 3.7.18 - 2024-6-17
#### 新增 🌟
- 新增了DivBillboardPrimitive对象

#### 优化 💪
- EllipsoidEntity的scanPlane动画改为与时序无关

#### 修复 🐞
- BrightnessEffect加载后backgroundImage失效 [#I9VRHT](https://gitee.com/marsgis/mars3d/issues/I9VRHT)
- MapSplit控件show属性控制无效
- ConeTrack在动态坐标下更新heading值有误



## 3.7.17 - 2024-6-5
#### 优化 💪
- ReflectionWater增加farDistance和farColor参数
- 重写mars3d.PolyUtil.getRectangle方法，增加最大高度返回值
- mars3d-cesium库升级到[v1.118](https://github.com/CesiumGS/cesium/releases/tag/1.118)

#### 修复 🐞
- RectSensor初始化是空坐标时后续不显示 [#I9TFU9](https://gitee.com/marsgis/mars3d/issues/I9TFU9)
- CZML图层部分情况下flyTo无效
- Video2D部分浏览器下一直未播放
- 点状对象flyTo的高度值不对
- v3.7.16修改造成的geojson图层flyTo失效



## 3.7.16 - 2024-5-28
#### 优化 💪
- 图层flyTo方法重构
- 矢量数据toJSON方法优化

#### 修复 🐞
- CzmlLayer图层的flyTo：true参数时定位错误 [#I9R9CD](https://gitee.com/marsgis/mars3d/issues/I9R9CD)
- shadows移除时未停止



## 3.7.15 - 2024-5-21
#### 优化 💪
- TerrainClip增加czm参数
- ModelEntity、ModelPrimitive增加splitDirection属性
- Sector增加对动态属性坐标的支持
- HeightMeasure结果默认按高度下降为负数、上升是正数显示
- GeoJsonLayer增加filter数据筛选方法参数

#### 修复 🐞
- polylin线绘制时，当有depthFail:true参数会绘制不出来  [#I9ODHK](https://gitee.com/marsgis/mars3d/issues/I9ODHK)
- shadows.remove报错 [#I9QYHI](https://gitee.com/marsgis/mars3d/issues/I9QYHI)



## 3.7.13 - 2024-5-14
#### 优化 💪
- NavigationHelpButton控件增加firstOpen、localStorageName参数
- Map增加readyPromise属性

#### 修复 🐞
- Shadows的change事件失效

#### 弃用 & API重构 🔒
- graphicLayer.removeGraphic 方法的第2个参数hasDestroy默认值改为true



## 3.7.12 - 2024-5-6
#### 优化 💪
- 优化TilesetClip、TilesetPlanClip 模型裁剪开挖功能
- 优化TerrainClip、TerrainPlanClip 地形开挖功能，并TerrainPlanClip支持按线切分看地形切割
- LimitHeight限高分析增加diffHeight参数
- WMS等瓦片图层卷帘时单击事件和Popup的不可见区域不触发
- Map增加availabilityEnabled参数，可以全局开关availability
- 增加tif、excel、csv文件的本地数据读取示例
- mars3d-cesium库升级到[v1.117](https://github.com/CesiumGS/cesium/releases/tag/1.117)

#### 修复 🐞
- Pit墙面的材质显示没有拉伸的效果  [#I9J143](https://gitee.com/marsgis/mars3d/issues/I9J143)
- Combine对象多次单击Popup时面板展示属性不对  [#I9HD5X](https://gitee.com/marsgis/mars3d/issues/I9HD5X)
- CirclePrimitive对象标绘时切换贴地属性和导出JSON时，坐标显示了历史值  [#I9J010](https://gitee.com/marsgis/mars3d/issues/I9J010)


#### 弃用 & API重构 🔒
- 标绘事件event的drawtype命名改名为drawType



## 3.7.11 - 2024-4-22
#### 优化 💪
- DivLightPoint增加billboard参数
- GraphicLayer增加loadJSON方法

#### 修复 🐞
- 优化Map.toJSON导出参数方法
- style.label在贴地和visibleDepth: false 会重影 [#I9G8R4](https://gitee.com/marsgis/mars3d/issues/I9G8R4)
- PolygonEntity在highlight中修改diffHeight无效 [#I9I1TN](https://gitee.com/marsgis/mars3d/issues/I9I1TN)
- RotatePoint.setOptions未生效 [#I9IN2V](https://gitee.com/marsgis/mars3d/issues/I9IN2V)




## 3.7.10 - 2024-4-15
#### 新增 🌟
- Map增加method参数(并将之前chinaCRS、lang、templateValues、token参数移动到method下)
- TerrainUplift地形抬升增加抬升动画方法movingAnimation
- 矢量数据支持从Ajax后端动态读取属性和点状坐标的配置

#### 优化 💪
- 图层popupOptions参数中增加showNull可以控制显示空值字段
- Popup增加toggle参数，控制是否打开状态下再次单击时关闭Popup [#I9F4AO](https://gitee.com/marsgis/mars3d/issues/I9F4AO)
- VolumeDepthMeasure支持传入历史计算的值，可以固化测量结果，避免地形精度和视角剔除带来的测量结果每次不同
- PolylinePrimitive增加style.depthFailMaterial参数

#### 修复 🐞
- Popup在timeRender为true时关闭按钮无法操作
- PolygonEntity调用setCallbackPositions方法setHeight参数丢失 [#I9EUH4](https://gitee.com/marsgis/mars3d/issues/I9EUH4)
- 体积计算方法measure.volume，在传参直接调用时会触发两次计算 [#I9F6PQ](https://gitee.com/marsgis/mars3d/issues/I9F6PQ)

#### 弃用 & API重构 🔒
- Map的之前chinaCRS、lang、templateValues、token参数移动到method参数下
- 移除IonLayer图层，合并至XyzLayer(增加assetId、ionToken、ionServer参数)
- TilesetLayer的ion资源时的ionAccessToken参数命名改为ionToken



## 3.7.9 - 2024-4-6
#### 优化 💪
- Map增加scene.logarithmicDepthBuffer参数
- FixedRoute的change事件增加index_original原始index返回值  [#I9B880](https://gitee.com/marsgis/mars3d/issues/I9B880)
- GraphicLayer矢量图层聚合增加clustering.minChanged参数
- mars3d-cesium库升级到[v1.116](https://github.com/CesiumGS/cesium/releases/tag/1.116)

#### 修复 🐞
- zoom控件缩放时，DivGraphic未重现渲染
- Mask遮盖对象直接直接构造使用
- 矢量图层clear后聚合失效
- TdtPOI.getAddress方法失效
- RadarWave材质透明度无效
- POI矩形和多边形查询无结果



## 3.7.7 - 2024-3-19
#### 优化 💪
- I3SLayer增加position、rotation、scale等参数
- Compass控件增加clickToNorth参数
- HeightTriangleMeasure三角测量结果增加角度值
- DoubleSidedPlane支持穿透显示对面的其他矢量对象
- Animation控件存在时Timeline自动避让
- Shadows 增加darkness参数

#### 修复 🐞
- Mask遮盖边线多面时未显示
- 多个Map或分屏对比时，TilesetClip等对象移除报错
- RectangleCombine的outline效果不是4个边线点
- ParticleSystem的setStyle更新image无效
- 模型编辑toJSON未导出id等参数
- ModelPrimitive的setStyle支持模型动画参数的修改



## 3.7.6 - 2024-3-11
#### 优化 💪
- PolyGradient材质增加isInner参数
- RainEffect增加maxHeight参数
- ArcGisTileLayer增加token参数
- MapVLayer图层增加聚合点的支持
- TilesetLayer增加ionAccessToken、ionServer参数

#### 修复 🐞
- v3.7.4产生的Tooltip的offsetX、offsetY参数无效
- RectangleEntity的setCallbackPositions方法无效
- VolumeDepthMeasure移除时附加对象未清除干净
- ModelPrimitive的setStyle方法更新runAnimations无效


## 3.7.5 - 2024-3-5
#### 新增 🌟
- 新增CubeView立方体视图控件

#### 优化 💪
- Map增加backgroundImage、backgroundType参数，并自动处理互斥关系
- 矢量数据高亮highlight参数增加enabled子参数，可以进行启用的控制
- HomeButton、FullscreenButton、NavigationHelpButton控件增加icon参数
- GroundSkyBox增加maxHeight参数
- 所有highlight相关类中增加highlight.enabled子参数
- map的scene构造参数增加了backgroundType、backgroundImage并自动处理了互斥关系
- 优化map.getCurrentOptions方法导出相关参数。
- mars3d-cesium库升级到[v1.114](https://github.com/CesiumGS/cesium/releases/tag/1.114)

#### 修复 🐞
- BloomTargetEffect造成地球背景图片消失
- Route的Popup关闭后无法打开


## 3.7.4 - 2024-2-22
#### 优化 💪
- Tooltip的显示的方向自适应
- TerrainLayer增加terrainType参数，优化参数结构
- 线面矢量对象编辑，增加hasMidPoint参数控制是否显示中间点
- GeoJsonLayer图层mask支持全球遮掩

#### 修复 🐞
- PolygonPrimitive对象`outline: true,outlineWidth: 1`属性时,面的渲染颜色有问题
- GroupGraphic对象内的矢量数据无法交互
- PointPrimitive的setStyle修改时pixelSize被重置为默认值了
- CircleEntity.isInPoly判断排除高度值的影响

#### 弃用 & API重构 🔒
- 矢量数据关联的popup实时更新事件，由postRender更名为popupRender



## 3.7.3 - 2024-2-5
#### 重要说明 📣
- 矢量数据clampToGround: true属性将同时支持贴模型和地形，HeightReference属性可以设置单独贴模型或贴地形等。
- TilesetLayer模型图层默认不允许鼠标穿透，增加 disableCollision参数设置是否允许相机进入模型的内部或下方。

#### 新增 🌟
- 增加 TilesetColorCorrection 模型单独颜色校正对象
- Map、TilesetLayer类增加 getHeight 贴地高度计算方法


#### 优化 💪
- 重写了PointUtil.getHeight、PointUtil.getSurfacePosition方法，相关参数有调整
- 矢量图层聚合图标回调增加相关对象的返回，并优化示例增加大数据异步生成
- mars3d-cesium库升级到[v1.114](https://github.com/CesiumGS/cesium/releases/tag/1.114)



## 3.7.2 - 2024-1-29
#### 优化 💪
- DivGraphic增加addClass、removeClass方法
- 增加PolyUtil.getMapExtentPositions方法，并对map.getExtent方法优化重写

#### 修复 🐞
- Combine合并渲染矢量对象的附加label只能加一个 [#I8YTK1](https://gitee.com/marsgis/mars3d/issues/I8YTK1)



## 3.7.1 - 2024-1-22
#### 优化 💪
- WMS图层、ArcGIS瓦片图层，在clampToTileset贴模型时单击拾取事件的支持。
- ModelPrimitive增加startFlicker、stopFlicker方法
- GraticuleLayer增加steps属性，和setOptions更新steps的支持。

#### 修复 🐞
- Map配置了terrainProviderViewModels:[],控件会提示 undefined  [#I8XEY4](https://gitee.com/marsgis/mars3d/issues/I8XEY4)
- LineFlow材质color改为原样传入



## 3.7.0 - 2024-1-15
#### 新增 🌟
- 新增 标绘 顶点吸附 功能，通过 map.onlyVertexPosition开启关闭
- 新增 DivPlane、JammingRadar、FixedJammingRadar 矢量对象
- 新增 DivIndicator 固定指向且可拖动面板的DIV示例

#### 优化 💪
- mars3d-cesium库升级到[v1.113](https://github.com/CesiumGS/cesium/releases/tag/1.113)
- primitive增加zIndex参数和属性
- entity.startFlicker方法增加step参数
- TilesetLayer增加assetId参数
- GroupLayer的layers参数支持图层对象传入
- TerrainClip的开挖对象取区域内最低点高度为开挖高度的相对0米
- TilesetClip增加clipOutSide参数和属性
- 聚合点增加clampToTileset参数

#### 修复 🐞
- Combine合并渲染矢量对象label文本的单击事件未正常拾取attr

#### 弃用 & API重构 🔒
- TilesetPlanClip类type参数更名为clipType
- KeyboardRoam的minPitch、maxPitch参数改为度数值
- 移除部分对V3.4之前相关老版本SDK的内部兼容参数写法，提高代码效率


---
## 3.6.18 - 2023-12-31
#### 优化 💪
- PolygonCombine 挖洞面 支持Cartesian3和LngLatPoint格式坐标
- Video3D 初始化options参数增加play是否播放
- 线面对象绘制时支持updateDrawPosition参数来自定义控制修改绘制的坐标

#### 修复 🐞
- GraphicLaye在 show:false时使用BillboardPrimitive聚合的时候未隐藏   [#I8QB9I](https://gitee.com/marsgis/mars3d/issues/I8QB9I)
- BusineDataLayer类传data切开启聚合时未聚合 [#I8Q6DT](https://gitee.com/marsgis/mars3d/issues/I8Q6DT)
- 修复v3.6.14增加编辑点的矢量对象类型和样式功能带来的编辑点异常问题。


## 3.6.17 - 2023-12-19
#### 修复 🐞
- lod、wfs图层部分情况下未加载，需要动一下视角才加载 [#I8NO0L](https://gitee.com/marsgis/mars3d/issues/I8NO0L)
- ConeTrack类修改位置后不显示  [#I8OS1G](https://gitee.com/marsgis/mars3d/issues/I8OS1G)
- 天地图地形计算贴地高度的报错优化
- clampToTileset 瓦片图层贴模型数量大于16个图层报错
- Water、Route 对象availability无效



## 3.6.16 - 2023-12-12
#### 新增 🌟
- 增加ThingType、ThingUtil 类
- map增加thing参数，支持地形压平 等thing对象通过参数初始化传入

#### 优化 💪
- measure.point增加popup自定义回调参数 [#I8MKV3](https://gitee.com/marsgis/mars3d/issues/I8MKV3)
- entity.startFlicker方法color颜色默认值改为自身颜色
- TdtLayer图层增加url配置服务前缀

#### 修复 🐞
- Route、FixedRoute 默认show:false时，更新show=true无效
- MapboxLayer的scaleFactor参数无效



## 3.6.15 - 2023-12-5
#### 优化 💪
- SnowEffect增加scale粒子大小参数
- mars3d-cesium库升级到[v1.112](https://github.com/CesiumGS/cesium/releases/tag/1.112)

#### 修复 🐞
- SnowCoverEffect初始化enabled:false时更新为true无效




## 3.6.14 - 2023-11-27
#### 新增 🌟
- 增加 EditPointType 类，DrawUtil类新增setEditPointStyle、setAllEditPointStyle方法，支持完全每种编辑点的矢量对象类型和样式

#### 优化 💪
- GraphicLayer增加 drawAddEventType 绘制时增加点的事件参数
- CzmGeoJsonLayer的flyTo方法改为一致的定位机制

#### 修复 🐞
- TdtDmLayer的show:false未生效 [#I8IKIN](https://gitee.com/marsgis/mars3d/issues/I8IKIN)
- [Satellite.setStyle](http://mars3d.cn/api/Satellite.html)方法更新cone无效
- Regular.setStyle更新border无效
- GraphicLayer再remove时聚合未销毁

#### 弃用 & API重构 🔒
- 重构了DrawUtil类，移除了setPointStyle等方法  [#I8J3D9](https://gitee.com/marsgis/mars3d/issues/I8J3D9)



## 3.6.13 - 2023-11-21
#### 优化 💪
- [GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)、[WfsLayer](http://mars3d.cn/api/WfsLayer.html) 等图层增加simplify参数
- 整理矢量对象的setHeight、addHeight参数代码，之前在部分情况存在重复addHeight或未addHeight的情况
- 优化 [TilesetClip](http://mars3d.cn/api/TilesetClip.html?classFilter=Tileset)、[TilesetFlat](http://mars3d.cn/api/TilesetFlat.html?classFilter=Tileset) 、[TilesetFlood](http://mars3d.cn/api/TilesetFlood.html?classFilter=Tileset) 模型压平、裁剪、淹没支持部分特殊模型。
- GraphicLayer 增加drawAddEventType 绘制参数

#### 修复 🐞
- FixedRoute的info记录的飞行前时second已飞行时间值不对
- 多环面对象导出GeoJSON格式有误   [#I8GUAL](https://gitee.com/marsgis/mars3d/issues/I8GUAL)
- KmlLayer.setOptions方法修改symbol无效   [#I8GL4C](https://gitee.com/marsgis/mars3d/issues/I8GL4C)
- ModelEntity.setStyle方法修改distanceDisplayBillboard无效   [#I8GB8S](https://gitee.com/marsgis/mars3d/issues/I8GB8S)
- Regular使用setStyle修改边框数量不生效  [#I8HRH5](https://gitee.com/marsgis/mars3d/issues/I8HRH5)



## 3.6.12 - 2023-11-13
#### 新增 🌟
- 新增 [ColorCorrectionEffect 颜色校正](http://mars3d.cn/editor-vue.html?id=effect/colorCorrection) 特效
- Effect相关类增加 [availability](http://mars3d.cn/api/BaseEffect.html?classFilter=Effect#availability) 属性
- Layer相关类增加 [availability](http://mars3d.cn/api/BaseLayer.html?classFilter=Layer#availability) 属性

#### 优化 💪
- 点状Entity对象在GraphicLayer的[drawEndEventType](http://mars3d.cn/api/GraphicLayer.html)参数下支持右键结束标绘  [#I8EULQ](https://gitee.com/marsgis/mars3d/issues/I8EULQ)
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)增加scaleX、scaleY、scaleZ参数   [#I8F5ZG](https://gitee.com/marsgis/mars3d/issues/I8F5ZG)

#### 修复 🐞
- 矢量对象在randomColor随机色时，高亮每次会变动颜色  [#I8ES0G](https://gitee.com/marsgis/mars3d/issues/I8ES0G)
- 多语言相关的一些内置文字处理，修复为支持多语言 [#I8F7WI](https://gitee.com/marsgis/mars3d/issues/I8F7WI)



## 3.6.11 - 2023-11-3
#### 新增 🌟
- 新增[LineCross](http://mars3d.cn/editor-vue.html?id=graphic\entity\circle)十字形间隔线材质
- [Water](http://mars3d.cn/api/Water.html?classFilter=Water)、[PolygonPrimitive](http://mars3d.cn/api/PolygonPrimitive.html?classFilter=PolygonPrimitive)等对象增加offsetHeight平移指定偏移高度参数
- [WaterCombine](http://mars3d.cn/api/WaterCombine.html?classFilter=WaterCombine)、[PolygonCombine](http://mars3d.cn/api/PolygonCombine.html?classFilter=PolygonCombine)等对象增加offsetHeight属性和setOffsetHeight方法
- [TilesetClip](http://mars3d.cn/api/TilesetClip.html?classFilter=Tileset)、[TilesetFlat](http://mars3d.cn/api/TilesetFlat.html?classFilter=Tileset) 、[TilesetFlood](http://mars3d.cn/api/TilesetFlood.html?classFilter=Tileset)模型压平、裁剪、淹没 增加precise参数，支持掩膜模式压平裁剪，支持大量数据

#### 优化 💪
- [ImageLayer](http://mars3d.cn/api/ImageLayer.html?classFilter=ImageLayer)增加加载完成回调
- mars3d-cesium库升级到[v1.111](https://github.com/CesiumGS/cesium/releases/tag/1.111)

#### 修复 🐞
- 导航球控件中提示文本的Lang多语言支持 [#I8AZGV](https://gitee.com/marsgis/mars3d/issues/I8AZGV)
- CircleEntity编辑时“半径”文本的Lang多语言支持 [#I8AN02](https://gitee.com/marsgis/mars3d/issues/I8AN02)
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=DivGraphic)在存在视距缩放属性时位置不对 [#I8C2WE](https://gitee.com/marsgis/mars3d/issues/I8C2WE)
- 矢量数据编辑时，2D模式下拖拽高度点遮挡了移动位置点
- 地形抬升中国大区域时边缘区域存在偏移情况 [#I88RBC](https://gitee.com/marsgis/mars3d/issues/I88RBC)
- 多语言相关的一些内置文字处理，修复为支持多语言 [#I8AZGV](https://gitee.com/marsgis/mars3d/issues/I8AZGV)

#### 弃用 & API重构 🔒
- [DynamicRiver](http://mars3d.cn/api/DynamicRiver.html) 的 offsetHeight 方法改名为 setOffsetHeight
- [Video2D](http://mars3d.cn/api/Video2D.html)、[Video3D](http://mars3d.cn/api/Video3D.html)、[ViewShed](http://mars3d.cn/api/ViewShed.html)、[ConeVisibility](http://mars3d.cn/api/ConeVisibility.html)、[SpotLight](http://mars3d.cn/api/SpotLight.html) 的heading由原来正北为0度，改为正东为0度



## 3.6.10 - 2023-10-23
#### 新增 🌟
- 所有combine类型Primitive大数据对象增加style.label参数

#### 优化 💪
- [ToolButton](http://mars3d.cn/api/ToolButton.html?classFilter=ToolButton)的title参数支持function回调方法
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html?classFilter=TilesetLayer)的marsJzwStyle支持object类型参数，可传入内置shader的3个高度变量
- [TdtDmLayer](http://mars3d.cn/api/TdtDmLayer.html?classFilter=TdtDmLayer)暴露label等参数

#### 修复 🐞
- v3.6.9 产生的DoubleSidedPlane、TextMaterial材质报错
- ContourLine在remove时未清除，变为全球等高线 [#I88ZB7](https://gitee.com/marsgis/mars3d/issues/I88ZB7)



## 3.6.9 - 2023-10-17
#### 新增 🌟
- primitive矢量数据增加了[readyPromise](http://mars3d.cn/api/BasePrimitive.html?classFilter=basep#readyPromise)属性

#### 优化 💪
- 重新设计了[lang](http://mars3d.cn/editor-vue.html?id=map/options/lang)多语言相关，支持自定义多语言
- [control](http://mars3d.cn/api/BaseControl.html?classFilter=control)控件类insertBefore参数支持配置div的id
- [Image2](http://mars3d.cn/api/Image2MaterialProperty.html?classFilter=Image2)材质增加repeat参数
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=DivGraphic)的pointerEvents参数优先级改为最高

#### 修复 🐞
- DivGraphic的setStyle方法更新clampToGround时，高度未贴地 [#I87I8L](https://gitee.com/marsgis/mars3d/issues/I87I8L)
- v3.6.8产生的toJSON、toGeoJSON方法错误
- CircleEntity的height高度失效
- TdtLayer的chinaCRS未生效
- geosjon数据导入时MultiPolygon对象的id重复后报错

#### 弃用 & API重构 🔒
- [lang](http://mars3d.cn/editor-vue.html?id=map/options/lang)相关重构，与之前不兼容，移除了LangType、重构了Lang类和map.lang相关属性及方法
- VolumeCloud的steps更名为detail，并增加了colors和steps参数



## 3.6.8 - 2023-10-9
#### 优化 💪
- 暴露mars3d.edit.*相关编辑类，方便外部继承使用
- 矢量数据toGeoJSON方法增加options的导入导出
- 优化矢量数据availability属性相关
- Map的terrain参数支持是否默认启用地形开挖、压平等配置
- mars3d-cesium库升级到[v1.110](https://github.com/CesiumGS/cesium/releases/tag/1.110) 【已知问题：PolygonPrimitive材质纹理默认值异常，v1.111.1已修复】

#### 修复 🐞
- FixedRoute在showStop:true时, 模型未展示 [#I860EZ](https://gitee.com/marsgis/mars3d/issues/I860EZ)
- DivGraphic的hasEditContextMenu属性无效 [#I850RG](https://gitee.com/marsgis/mars3d/issues/I850RG)
- 矢量图层支持clustering的setOptions更新
- ArcGisLayer的flyTo属性失效 [#I85S1D](https://gitee.com/marsgis/mars3d/issues/I85S1D)



## 3.6.7 - 2023-9-25
#### 优化 💪
- 增加pixelOffsetScaleByDistance参数的导入导出json支持
- SmallTooltip在空文本时不展示

#### 修复 🐞
- [WMTS图层](http://mars3d.cn/api/WmtsLayer.html)的subdomain参数存在时取配置信息出错
- [PolyUtil.computeSurfacePoints](http://mars3d.cn/api/PolyUtil.html?classFilter=Util#.computeSurfacePoints)计算时点数量不变



## 3.6.6 - 2023-9-18
#### 新增 🌟
- 新增[BrushLineEntity](http://mars3d.cn/api/BrushLineEntity.html?classFilter=BrushLineEntity)自由绘制线对象
- 新增[GroupGraphic](http://mars3d.cn/api/GroupGraphic.html?classFilter=GroupGraphic)矢量数据组对象

#### 优化 💪
- [BillboardEntity](http://mars3d.cn/api/BillboardEntity.html?classFilter=BillboardEntity)增加distanceDisplayPoint等参数
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html?classFilter=TilesetLayer)增加editUpAxis轴标识参数

#### 修复 🐞
- 解决v3.6.5产生的FixedRoute停止时的Popup移动问题
- 量算对象show改变时label未同步显示隐藏

#### 弃用 & API重构 🔒
- 更新了部分3dtiles模型在线数据，如果有偏差需要参考最新示例更改postion参数



## 3.6.5 - 2023-9-11
#### 新增 🌟
- xyz图层url中增加scale、origin模版(用于使用超图的瓦片底图服务)

#### 优化 💪
- 优化地形开挖、抬升等地形编辑相关功能效率(需要升级mars3d-cesium到1.109.1)
- ReflectionWater对象增加animationSpeed、specularIntensity参数

#### 修复 🐞
- Route的Popup弹窗视角很近时卡顿
- 矢量对象在closeLast=false时closeHighlight无效 [#I7ZE7Q](https://gitee.com/marsgis/mars3d/issues/I7ZE7Q)
- PointPrimitive在setStyle时改变了贴地高度 [#I7ZAOC](https://gitee.com/marsgis/mars3d/issues/I7ZAOC)
- wms等图层click时发送多次query请求
- Measure在setOptions赋值未更新到内部矢量图层 [#I7ZOQV](https://gitee.com/marsgis/mars3d/issues/I7ZOQV)


## 3.6.4 - 2023-9-5
#### 优化 💪
- [SnowEffect](http://mars3d.cn/api/SnowEffect.html?classFilter=SnowEffect)增加maxHeight参数
- [LocationBar](http://mars3d.cn/api/LocationBar.html?classFilter=LocationBar)的fps改为模版配置，并可从locationData取fps值
- mars3d-cesium库升级到[v1.109](https://github.com/CesiumGS/cesium/releases/tag/1.109) 无法跨域引入cdn版本Cesium v1.109,需要本地引入（v1.110版本已解决）。

#### 修复 🐞
- DivGraphic图层允许编辑时未自动处理pointerEvents
- DivLightPoint传setStyle方法传html时造成color参数无效
- 优化v3.6.3增加的availability相关支持


## 3.6.3 - 2023-8-29
#### 新增 🌟
- 对大部分矢量数据增加availability时序显示控制参数和属性
- 增加mars3d.PointUtil.getPropertyIndex方法

#### 优化 💪
- Compass双击事件定位视角改为目标中心点不动
- [ContourLine](http://mars3d.cn/api/ContourLine.html?classFilter=ContourLine)增加minHeight、maxHeight属性，可动态更改

#### 修复 🐞
- DivGraphic开始绘制时就取消绘制触发了完成回调
- RotatePoint在部分视角下报错



## 3.6.2 - 2023-8-21
#### 修复 🐞
- cesium原生相关控件的enabled参数未生效
- 矢量数据highlight配置更新label时未生效
- Primitive聚合时切换show状态无效 [#I7UMFQ](https://gitee.com/marsgis/mars3d/issues/I7UMFQ)



## 3.6.1 - 2023-8-14
#### 新增 🌟
- 增加 ColorRamp 色带类

#### 优化 💪
- Map增加isInView方法
- [CanvasWindLayer](http://mars3d.cn/api/CanvasWindLayer.html?classFilter=CanvasWindLayer)增加colors根据风速渲染不同颜色
- [Timeline](http://mars3d.cn/api/Timeline.html?classFilter=Timeline)增加zoom是否可以缩放参数
- [PolylineCombine](http://mars3d.cn/api/PolylineCombine.html?classFilter=PolylineCombine)等合并渲染对象支持openPopup方法
- [ModelEntity](http://mars3d.cn/api/ModelEntity.html?classFilter=ModelEntity)的moveTo方法增加orientation参数
- [GaodeRoute](http://mars3d.cn/api/ModelEntity.html?classFilter=ModelEntity)更新高德服务api至v5

#### 修复 🐞
- Route、FixedRoute的change事件未在图层上抛出
- DistanceMeasure的更新坐标为空时，label未清除
- 瓦片图层未加载完成时reload后无法移除 [#I7RE9N](https://gitee.com/marsgis/mars3d/issues/I7RE9N)
- GaodeRoute骑行路径查询无效 [#I7RU3Q](https://gitee.com/marsgis/mars3d/issues/I7RU3Q)



## 3.6.0 - 2023-8-4
#### 新增 🌟
- 新增[PointLight点光源](http://mars3d.cn/editor-vue.html?id=graphic/custom/pointLight)、[SpotLight聚光灯](http://mars3d.cn/editor-vue.html?id=graphic/custom/spotLight)、[VolumeCloud气象云三维体](http://mars3d.cn/editor-vue.html?id=graphic/custom/volumeCloud)、[PointVisibility](http://mars3d.cn/editor-vue.html?id=graphic/custom/visibility) 等矢量对象
- 新增[TilesetShake地震模拟](http://mars3d.cn/editor-vue.html?id=thing/tileset/shake)、[ViewDome开敞度分析](http://mars3d.cn/editor-vue.html?id=graphic/custom/viewDome)、[SkylineBody天际线体](http://mars3d.cn/editor-vue.html?id=graphic/custom/skylineBody)等模型相关分析
- 新增对[BillboardPrimitive](http://mars3d.cn/api/BillboardPrimitive.html?classFilter=BillboardPrimitive)、[PointPrimitive](http://mars3d.cn/api/PointPrimitive.html?classFilter=PointPrimitive)、[LabelPrimitive](http://mars3d.cn/api/LabelPrimitive.html?classFilter=LabelPrimitive)对象的聚合支持
- 瓦片图层新增clampToTileset贴模型功能

#### 优化 💪
- 重写了 [TerrainClip](http://mars3d.cn/api/TerrainClip.html?classFilter=TerrainClip)、[FloodByMaterial](http://mars3d.cn/api/FloodByMaterial.html?classFilter=FloodByMaterial)、[ContourLine](http://mars3d.cn/api/ContourLine.html?classFilter=ContourLine)地形相关分析类
- mars3d-cesium库升级到[v1.108](https://github.com/CesiumGS/cesium/releases/tag/1.108)

#### 弃用 & API重构 🔒
- 弃用mars3d-widget插件，原生JS技术栈下项目中直接改为使用源码(es5-widget.js)
- 弃用mars3d-supermap插件，正式放弃对不支持webgl2的超图S3M图层等功能的支持




---
## 3.5.18 - 2023-7-31
#### 优化 💪
- ClockAnimate与DistanceLegend或Timeline同时存在时的css自动处理改为兼容外部参数
- Route的change事件的优化


#### 修复 🐞
- Map的terrainLoadSuccess事件未触发






## 3.5.17 - 2023-7-24
#### 优化 💪
- Compass增加最大最小俯仰角参数
- MapSplit图层自动置顶

#### 修复 🐞
- Route路线polyline存在路线异常情况
- TextMaterialProperty存在颜色叠加异常



## 3.5.16 - 2023-7-17
#### 修复 🐞
- 地形开挖、压平、抬升的addArea方法增加simplify参数
- Timeline.zoomTo初始化未生效
- Route的endItem事件触发的点位顺序不对
- ModelEntity标绘时初始角度无效



## 3.5.15 - 2023-7-10
#### 优化 💪
- Animation控件增加ticks参数
- Pit的围合墙部分改为普通wall
- 优化经纬网文本的展示
- 矢量线面对象在切换是否贴地时编辑点的更新处理
- BingLayer、GeeLayer、IonLayer对[1.107](https://github.com/CesiumGS/cesium/releases/tag/1.107)版本的支持修复
- mars3d-cesium库升级到[v1.107](https://github.com/CesiumGS/cesium/releases/tag/1.107)

#### 修复 🐞
- PolylineEntity编辑时外部赋值坐标位置未生效
- ClockAnimate控件对时钟开始停止操作Timeline更新存在CSS偏移



## 3.5.14 - 2023-7-3
#### 优化 💪
- Video2D的编辑点优化
- QueryArcServer的query方法增加parameters参数

#### 修复 🐞
- DivGraphic在二三维切换时位置未刷新
- PathEntity在3个角度均传入时未固定
- 线面在clampToGround切换时编辑状态丢失
- 贴地对象在移动
- Regular、Sector对象toGeoJSON后无法重新加载
- 经纬网在180度时未正常显示



## 3.5.13 - 2023-6-26
#### 优化 💪
- 优化鼠标移动事件对FPS的影响
- Video3D支持动态属性坐标

#### 修复 🐞
- MapSplit控件拖动时处于鼠标右侧偏移



## 3.5.12 - 2023-6-19
#### 优化 💪
- Compass控件兼容移动端交互操作
- 增加setLangText方法

#### 修复 🐞
- Satellite卫星轨道在二维模式下最后一个坐标显示异常
- OutlineEffect与Tetrahedron同时存在时报错
- 贴模型计算贴地线时，offset偏移高度无效



## 3.5.11 - 2023-6-12
#### 优化 💪
- LabelPrimitive对象clampToGround贴地时，切换2D时的显示优化
- PointPrimitive支持clampToGround贴地属性
- mars3d-cesium库升级到[v1.106](https://github.com/CesiumGS/cesium/releases/tag/1.106)

#### 修复 🐞
- 修改v3.5.6产生的DistanceSurfaceMeasure 贴地长度量算异常
- TdtTerrainProvider天地图地形时的相关地形计算无效
- BaiduPOI等query对象的proxy属性无效
- TerrainClip在clipOutSide外切时放大区域显示异常


## 3.5.10 - 2023-6-5
#### 新增 🌟
- TilesetLayer增加luminanceAtZenith亮度属性
- map增加pauseCameraViewList和proceedCameraViewList方法

#### 优化 💪
- ImageLayer支持EPSG3857坐标系

#### 修复 🐞
- 修复v3.5.7产生的ModelPrimitive单击事件无效问题
- Route在时钟停止时未更新坐标位置
- 修复一些TS定义错误




## 3.5.9 - 2023-5-29
#### 新增 🌟
- GraphicLayer矢量图层增加drawEndEventType参数，支持标绘自定义结束事件
- Satellite支持通过标绘机制中设置样式等

#### 优化 💪
- GraphicLayer图层data数据支持symbol设置

#### 修复 🐞
- 修改v3.5.6产生的量算问题
- Water的outline无效
- BillboardEntity的model中方向参数无效




## 3.5.8 - 2023-5-23
#### 新增 🌟
- 增加VideoPrimitive对象

#### 优化 💪
- 重写了PolyUtil.centerOfMass取中心点算法

#### 修复 🐞
- Polygon面编辑时positions坐标赋值无效



## 3.5.7 - 2023-5-16
#### 优化 💪
- Map增加changeBasemap事件
- 矢量数据增加hasEditContextMenu参数
- State增加ADD状态

#### 修复 🐞
- 修改v3.5.6产生的贴地面无法量算问题

#### 弃用 & API重构 🔒
- 为了兼容cesium的[1.104](https://github.com/CesiumGS/cesium/blob/1.104/CHANGES.md)公示的将在`1.107`弃用的api变更，SDK以下方法返回值改为async承诺：
[createImageryProvider](http://mars3d.cn/api/LayerUtil.html#.createImageryProvider)、
[createTerrainProvider](http://mars3d.cn/api/LayerUtil.html#.createTerrainProvider) 等方法



## 3.5.6 - 2023-5-8
#### 优化 💪
- 矢量图层startDraw方法增加validDrawPosition外部自定义校验坐标参数
- 曲线增加sharpness参数

#### 修复 🐞
- 矢量图层zIndex参数在贴地线面图层间无效
- 量算对象更新positions属性赋值未更新计算结果
- 更新Google瓦片图层服务地址
- TerrainClip对象



## 3.5.5 - 2023-5-4
#### 新增 🌟
- 日照分析增加阴影率分析

#### 优化 💪
- BillboardPrimitive 支持 alignedAxis 属性参数
- Route、FixedRoute增加 autoMiddleDynamicPosition 参数
- 增加map.mouseEvent.pickImageryLayerFeatures方法，可以手动模拟了单击WMS等图层
- mars3d-cesium库升级到[v1.105](https://github.com/CesiumGS/cesium/releases/tag/1.105)




## 3.5.4 - 2023-4-24
#### 新增 🌟
- FrustumPrimitive增加支持camera参数
- TilesetPlanClip 增加对平面的旋转角度属性

#### 优化 💪
- 重新了TilesetClip、TilesetFlat类，恢复TilesetFlood类
- Map参数中支持scene.skyBox传参

#### 修复 🐞
- EllipsoidEntity导出geojson后再导入未显示扫描面
- PolygonEntity.setCallbackPositions方法兼容非笛卡尔坐标传参

#### 弃用 & API重构 🔒
- TilesetFlat中的flatHeight 参数更名为 editHeight



## 3.5.3 - 2023-4-17
#### 优化 💪
- Control控件加click触发事件
- 矢量对象的distanceDisplayCondition_far参数默认值改为Number.MAX_VALUE
- 量算对象toJSON方法增加量算结果的导出
- mars3d-cesium库升级到[v1.104](https://github.com/CesiumGS/cesium/releases/tag/1.104)

#### 修复 🐞
- GraphicType补充缺失的枚举项
- Map的control.terrainProviderViewModels参数失效
- FixedRoute未start前显示了path
- BillboardEntity的model未显示



## 3.5.2 - 2023-4-3
#### 优化 💪
- PathEntity的model增加mergeOrientation等参数

#### 修复 🐞
- v3.4.26产生的ModelEntity的label动态点时未同步移动
- Map切换basemap时图层未自动置为最底层

#### 弃用 & API重构 🔒
- 移除了 Map 的 mouse.transform 参数，内部自动处理




## 3.5.1 - 2023-3-27
#### 优化 💪
- OverviewMap鹰眼图增加center属性和change事件等
- GraphicGroupLayer保存和读取geojson时记录图层id等属性
- MapboxLayer图层增加token参数
- WMS、ArcGisLayer图层增加featureIndex参数
- 右键菜单相关event中增加graphic_parent返回值

#### 修复 🐞
- map.getLayersByAttr方法返回值有重复值和空值
- Route的点在无坐标时间内未消失
- ViewShed的show参数未生效
- RectanglePrimitive高度值未从坐标自动获取
- GraphicLayer矢量图层loadGeoJSON未读取其保存的id值

#### 弃用 & API重构 🔒
- DivGraphic去掉了CSS属性：user-select: none



## 3.5.0 - 2023-03-17
#### 重要说明 📣
- mars3d-cesium库升级到[v1.103](https://github.com/CesiumGS/cesium/releases/tag/1.103)
- 改用WebGL2进行渲染
- Cesium v1.97+ 采用了新的glTF架构代码重写，影响3dtiles部分功能无法使用和部分gltf/3dtiles数据报错

#### 新增 🌟
- 增加了[TerrainUplift](http://mars3d.cn/api/TerrainUplift.html)地形抬升、[TerrainFlat](http://mars3d.cn/api/TerrainFlat.html)地形压平功能
- 增加了[PitEntity](http://mars3d.cn/api/PitEntity.html)、 [ThickWall](http://mars3d.cn/api/ThickWall.html)、 [DoubleSidedPlane](http://mars3d.cn/api/DoubleSidedPlane.html)、 [VolumeDepthMeasure](http://mars3d.cn/api/VolumeDepthMeasure.html)、 [ReflectionWater](http://mars3d.cn/api/ReflectionWater.html) 等矢量对象
- 增加了[BaseLayerPicker](http://mars3d.cn/api/BaseLayerPicker.html)、[Animation](http://mars3d.cn/api/Animation.html)、[FullscreenButton](http://mars3d.cn/api/FullscreenButton.html) 等11个Cesium原生控件的包装类，便于统一控制
- 重写了[Satellite](http://mars3d.cn/api/Satellite.html)矢量对象(使用继承于Route类的方式)
- 重写了TilesetClip、TilesetFlat类(仅支持Cesium v1.97+的新架构方式)
- 增加了LineThreeDash 等矢量数据材质
- 增加了 I3SLayer 三维模型图层

#### 优化 💪
- [SnowCoverEffect](http://mars3d.cn/api/SnowCoverEffect.html)增加layer参数，可以对3dtiles模型单独生效

#### 弃用 & API重构 🔒
- Cesium v1.97+造成部分功能失效，已暂时移除：TilesetFlood、ModelCombine等类和部分示例
- Cesium v1.102+造成部分第3方插件webgl2不兼容，已暂时移除：超图S3M图层 等示例
- npm包除去cesium库的css自动引入，需要在项目引入mars3.css前加 ` import "mars3d-cesium/Build/Cesium/Widgets/widgets.css" ` 代码手动引入
- npm包依赖改为peerDependencies，需在项目内手动安装提示的依赖包，可以执行 ` npm install mars3d-cesium @turf/turf --save  ` 命令安装
- [SatelliteSensor](http://mars3d.cn/api/SatelliteSensor.html) 移除了 trackedEntity、autoHeading 参数（改用orientation）
- 移除了 PolylineSimplePrimitive类



---
## 3.4.26 - 2023-03-01
#### 优化 💪
- RectangleEntity回调坐标对象的编辑支持
- WFS图层改为等Map加载基本完成再去请求加载

#### 修复 🐞
- PolygonPrimitive对象编辑时diffHeight重复计算了
- PolygonCombine的outline边线颜色显示不对
- DivGraphic开启编辑后绑定的事件多次触发
- ModelEntity的label多个显示


## 3.4.23 - 2023-02-20
#### 优化 💪
- 支持对聚合对象的事件监听和获取对应聚合列表数据
- 标绘绘制时增加hasDrawDelPoint参数，控制是否开启右击删除点
- FixedRoute中重复点的特殊处理

#### 修复 🐞
- ConeTrack的distanceDisplayCondition参数无效
- PolyCombine对象的setStyle无法更新颜色
- EllipsoidEntity闪烁方法无效
- 按轴移动时未抛出updatePosition事件
- map.listens方法Cesium原生事件判断有误


## 3.4.22 - 2023-02-06
#### 优化 💪
- 面的中心点计算改用truf处理
- FixedRoute增加updateClock参数，多路线时可禁用内部对时钟的处理
- 动态点对象addDynamicPosition方法对长时间无数据时的优化
- 贴模型相关计算中矢量图层内部自动处理objectsToExclude属性
- 流动线材质speed参数传O可以保持不流动

#### 修复 🐞
- 按轴移动时抛出了多次editMovePoint事件
- PolygonPrimitive矢量边线materialType材质属性无法setStyle更新
- map.expImage导出的image/jpeg图片后缀一直是png
- map.zoomIn/zoomOut在2D模式时限定minimumZoomDistance/maximumZoomDistance最小最大距离
- map.setCameraView的duration为0时未触发完成回调参数



## 3.4.20 - 2023-01-09
#### 优化 💪
- PathEntity禁用编辑
- CzmlLayer增加autoUpdateClock参数
- 优化CircleWave材质执行效率

#### 修复 🐞
- 无地形时计算贴地点高度的异常处理
- TilesetLayer等图层flyToOptions参数无效
- 3.4.19产生的Popup弹窗不显示问题


## 3.4.19 - 2022-12-26
#### 优化 💪
- Route增加了clampToTileset等参数
- 文本材质增加speed参数，不为0时呈现文字滚动效果
- LocationBar视角变化后更新坐标为中心点坐标
- OutlineEffect、BloomTargetEffect的selected支持传入Primitive对象

#### 修复 🐞
- SmMvtLayer加载报错


## 3.4.17 - 2022-12-12
#### 优化 💪
- TilesetLayer增加 highlight.uniqueKey参数，可以按指定字段进行对应相关构件的整体高亮
- map地图增加zoomIn/zoomOut方法缩放事件zoom
- HeatLayer增加image类型渲染方式
- ToolButton控件增加setIcon方法修改图标

#### 修复 🐞
- 无地形时贴地对象的flyTo存在错误
- turf.buffer首尾判断存在异常修复



## 3.4.16 - 2022-12-5
#### 新增 🌟
- FixedRoute传入的路线增加heading、pitch参数支持
- PolygonEntity、CircleEntity、RectangleEntity支持clampToGround参数的动态更新

#### 优化 💪
- Popup对象的depthTest参数默认值改为false
- OverviewMap鹰眼底图禁用右键
- ParticleSystem增加complete事件
- 相关Effect特效对象的setOptions方法支持
- Route、FixedRoute对象的setOptions方法支持
- Map的zoomIn、zoomOut增加mandatory是否强制更新参数

#### 修复 🐞
- FixedRoute内的path自动保留
- FlatBillboard对象的销毁内存释放
- ViewShed可视域对象的框选不显示
- 火狐浏览器下DivGraphic右键和编辑坐标偏移问题
- 取消DivGraphic编辑时单击对象的位置变动
- WindLayer鼠标移动时渲染被影响
- Polygon编辑时setStyle时diffHeight值跳动


## 3.4.14 - 2022-11-22
#### 新增 🌟
- Map增加setOptions方法
- 相关Control控件对象的setOptions方法支持

#### 优化 💪
- Combine对象的setStyle方法优化
- Entity对象的setStyle方法中对setHeight和addHeight的支持
- 量算对象的默认传入坐标的直接显示
- 图层增加flyToOptions参数



## 3.4.13 - 2022-11-7
#### 新增 🌟
- 新增LineDotDash点划线材质

#### 优化 💪
- Video2D支持动态属性和setStyle更新url
- 公开矢量数据编辑对象的startMoveMatrix、stopMoveMatrix、stopRotateMatrix、stopRotateMatrix等方法
- Primitive点对象传modelMatrix时兼容允许编辑
- Map构造参数geocoder区分原生cesium和高德POI查询
- CanvasWindLayer增加worker参数支持多线程

#### 修复 🐞
- FlatBillboard在2D模式只显示最后一个对象
- FixedRoute的clockLoop:true在存在time字段时无效
- 移除QueryArcServer、QueryArcServer内置的popup: "all"，由外部控制
- S3MLayer的flyTo:false失效
- Combine矢量对象图片等材质失效
- 修复FixedRoute在3.4.11产生的贴地计算无效


## 3.4.11 - 2022-10-24
#### 优化 💪
- Timeline控件增加maxSpan最大刻度跨度参数、优化时间文本展示
- 贴地线面量算增加exact快速概略的计算模式参数
- 长度量算增加万米单位
- PolylineVolume管道矢量对象增加vscale、hscale参数
- HeatLayer图层增加arcDirection参数

#### 修复 🐞
- WallEntity在setStyle更新closure参数未生效
- DistanceLegend在大屏分辨率鼠标滚动比例显示异常
- ParticleSystem在时间跨度大时切换页面卡死
- ModelEntity等导出json时缺少billboard附加信息
- 修改v3.4.8修改LineFlow材质后产生的亮度暗问题


## 3.4.10 - 2022-10-17
#### 优化 💪
- 所有图层的setOptions方法重构和优化
- BloomTargetEffect增加objectsToExclude参数
- FixedRoute增加interpolationAlgorithm参数
- 优化MapCompare持续漫游时的联动平滑度
- FlatBillboard增加translucent参数
- CzmGeoJsonLayer、CzmlLayer图层增加process方法
- 矢量数据增加dblClick双击事件

#### 修复 🐞
- FlatBillboard的高宽大小无效
- PolylinePrimitive的colors参数失效
- RectanglePrimitive边线旋转角度无效
- WallScroll材质颜色透明度无效



## 3.4.8 - 2022-9-26
#### 新增 🌟
- 增加 天地图POI 查询类

#### 优化 💪
- map增加onlyPickTerrainPosition属性
- LineFlow材质增加mixt参数
- Sector增加noCenter参数
- TilesetLayer增加position.alt_offset参数

#### 修复 🐞
- Skyline的enabled参数无效
- div矢量对象的setStyle更新样式
- map.getExtent方法scale参数无效


#### 弃用 & API重构 🔒
- CamberRadar的4个角度参数由弧度值改为角度值
- 移除矢量数据编辑的styleType值，全部外部属性框中配置



## 3.4.7 - 2022-9-7
#### 优化 💪
- DivLightPoint 支持label的属性字段名称配置

#### 修复 🐞
- 更新被封的高德Key
- 地形加载完成事件失效
- 挖洞面编辑错误
- 修复v3.4.5新产生的矢量矢量图层flyTo失效问题
- 修复v3.4.5新产生的map.expImage指定高度时裁剪异常问题
- PolylineVolume在star样式时显示异常
- 矢量数据setOptions部分简单属性时合并属性未生效
- zoom在2.5D下缩放异常

#### 弃用 & API重构 🔒
- 移除模型矢量对象的 fixedHeading（传heading值即可）、noPitchRoll（传pitch:0和roll:0） 参数，自动判断优先级，如style设置heading/pitch/roll值，优先级高于orientation



## 3.4.5 - 2022-8-21
#### 优化 💪
- map.expImage支持高宽同时指定，自动裁剪中间区域
- map增加mouse.transform参数，来兼容body被缩放的情况
- 右键菜单支持绑定方法名字符串

#### 修复 🐞
- 异步Popup时的popupOpen事件处理
- map.getThing返回值一直为空



## 3.4.3 - 2022-8-8
#### 新增 🌟
- 增加BusineDataLayer业务数据图层

#### 优化 💪
- div对象增加按轴移动编辑
- 量算结果显示支持divGraphic等对象展示
- WallEntity增加fixedTop参数
- FontBillboardEntity 增加iconPadding参数
- mars3d-cesium库升级到[v1.96](https://github.com/CesiumGS/cesium/releases/tag/1.96)

#### 修复 🐞
- FixedRoute重新运行速度变慢的问题
- 棋盘材质颜色名称有误，无法更新
- 修复v3.4.0产生的PolygonEntity挖洞面失效问题
- Primitive对象面高亮时outline的增加或移除处理
- Primitive对象diffHeight参数未配置height时没显示
- Popup配置autoClose:false时多次单击重复弹窗



## 3.4.1 - 2022-7-25
#### 新增 🌟
- 新增MapCompare地图对比控件
- 优化MapSplit控件图层参数，支持构造参数传入和数组传入

#### 优化 💪
- PolylineVolume新增thicknes、slices、startAngle等参数，提供更多外观样式
- 修改所有MaterialProperty，公开所有属性便于修改
- TilesetLayer增加hasEdit属性，对无transform不支持编辑的模型做了判断

#### 修复 🐞
- 在isRestorePositions:true时RectangleEntity结束绘制时坐标值异常
- 编辑矢量对象时，不能覆盖screenSpaceCameraController.enableInputs原有值



## 3.4.0 - 2022-7-15
#### 重要说明 📣
- 发布v3.4
- 对 矢量数据 做了一轮非常大的整改，包括功能一致性、渲染效率等

#### 新增 🌟
- 新增了[BloomTargetEffect](http://mars3d.cn/api/BloomTargetEffect.html)对象泛光特效
- 新增[MatrixMove](http://mars3d.cn/api/MatrixMove.html)矩阵图上平移编辑类、[MatrixRotate](http://mars3d.cn/api/MatrixRotate.html)矩阵图上旋转编辑类
- gltf、3dtiles模型新增沿XYZ轴平移图上编辑和旋转角度图上编辑
- primitive等矢量对象，新增绘制、编辑、数据导入导出等功能
- 矢量图层增加全局透明度调整方法，支持调整图层内矢量数据的透明度
- 矢量数据标绘增加坐标沿XYZ轴平移图上编辑
- 新增开发了[Route](http://mars3d.cn/api/Route.html)、[FixedRoute](http://mars3d.cn/api/FixedRoute.html)飞行漫游路线类

#### 优化 💪
- 重写了[TilesetFlat](http://mars3d.cn/api/TilesetFlat.html) 压平功能，优化对部分模型进行支持
- 所有矢量数据采用统一的调试面板，可进行标绘、编辑、数据导入导出、数据量测试等操作
- 优化了部分矢量数据的渲染效率，大数据加载效率
- 矢量对象新增 materialOptions 参数，对材质参数优化包一层
- 材质对应的所有Property材质进行补全
- 重写了示例中矢量数据style样式属性编辑弹窗
- [ParticleSystem](http://mars3d.cn/api/ParticleSystem.html#.StyleOptions) 增加了heading、pitch、roll等参数，并优化了渲染效率
- TilesetLayer中增加clip、flat、flood、planClip参数

#### 弃用 & API重构 🔒
- 图层、矢量数据类弃用uuid属性，全部统一为[id](http://mars3d.cn/api/BaseGraphic.html#id)
- 移除 ModelLayer 图层，需要改用 [GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)
- 移除了RoamLine类，需要改用[FixedRoute](http://mars3d.cn/api/FixedRoute.html)类；移除了DynamicRoamLine需改用 [Route](http://mars3d.cn/api/Route.html)
- 移除了Entity类矢量数据中fromDraw静态方法
- 移除了Entity类矢量数据中entity参数和fromEntity静态方法
- Entity编辑中的对应样式类型 edittype 属性名称改为 styleType（影响到style编辑属性弹窗）
- 所有callback回调方法全部改为返回Promise方式，影响到一些方法的传参和返回值
- ArcGIS/WMS 瓦片图层的 maxLength/graphicConver 参数改名为 hasToGraphic,并增加featureToGraphic参数
- [PointUtil.getSurfaceHeight](http://mars3d.cn/api/PointUtil.html#.getSurfaceHeight) 改为Promise方式，同步请改用 [PointUtil.getHeight](http://mars3d.cn/api/PointUtil.html#.getHeight)方法
- [PolyUtil.interPolygon](http://mars3d.cn/api/PolyUtil.html#.interPolygon) 等方式中的`asyn`参数改名为`exact`
- 移除图层的noLayerManage标识，增加[isPrivate](http://mars3d.cn/api/BaseLayer.html?classFilter=basel#isPrivate)属性
- [ParticleSystem](http://mars3d.cn/api/ParticleSystem.html) 参数移除了target参数，options中部分参数全部统一到style中
- 矢量图层内[getGraphicByAttr](http://mars3d.cn/api/GraphicLayer.html#getGraphicByAttr)方法参数调整了顺序，与其他类似方法保持一致
- 移除内置的将3dtiles中的“+”符号转义处理，如有需要自行增加Cesium.Resource.ReplaceUrl = function(url){  return url.replace(/\+/gm, "%2B") }



---
## 3.3.18 - 2022-7-5
#### 优化 💪
- MapSplit移除时对图层的处理方式优化
- Tetrahedron 增加支持鼠标拾取
- DivLightPoint 增加支持大小和文本参数
- GeoJsonLayer反选遮罩层flyTo优化
- 增加enabledEvent可以禁用事件，大数据创建清除时建议开启
- ModelPrimitive类动态点时增加fixedHeading参数支持固定heading角度值
- mars3d-cesium库升级到[v1.95](https://github.com/CesiumGS/cesium/releases/tag/1.95)

#### 修复 🐞
- CanvasLabelEntity高亮无效
- mars3d-tdt插件npm包引入问题
- ToolButton控件enabled无法禁用



## 3.3.15 - 2022-6-20
#### 新增 🌟
- GeoJsonLayer增加chinaCRS参数，用于自动纠偏或加偏数据

#### 优化 💪
- 对部分矢量对象的getRectangle方法优化
- Primitive矢量对象的show属性更新机制优化
- RoamLine根据forwardExtrapolationType参数自动保留路线
- mars3d-cesium库升级到[v1.94](https://github.com/CesiumGS/cesium/releases/tag/1.94)

#### 修复 🐞
- BillboardEntity、PointEntity、ModelEntity附带对象的setOptions未更新
- Tooltip在screenSpaceCameraController禁用部分操作时不显示
- DivGraphic非全屏地图下的编辑时坐标错位
- CircleEntity 编辑时右键删除点圆还在显示
- RoamLine 中maxDistance与maxCount冲突的兼容处理



## 3.3.12 - 2022-6-6
#### 优化 💪
- DiffuseWall增加 maxScale 扩散的最大比例参数
- WFS图层增加update事件和isLoading
- HeatLayer公开max和min参数
- 优化Compass导航球控件双击定位规则
- PathEntity根据forwardExtrapolationType参数自动保留路线
- 右键菜单单击一级菜单时不关闭二级菜单

#### 修复 🐞
- 多边形、矩形 周长值属性有误
- BaiduLayer 的 readyPromise失效



## 3.3.11 - 2022-5-29
#### 重要说明 📣
- 发布了 功能示例 React版
- 重写了 Vue 功能示例、基础项目的UI

#### 优化 💪
- 热力图支持动态平滑变化的处理
- 优化WallScroll材质，增加方向等参数
- 矢量数据增加updatePosition事件
- 支持Popup与矢量数据在外部更新position后的位置联动

#### 修复 🐞
- v3.3.9产生的Slope分析结果未展示问题
- PolylinePrimitive的distanceDisplayCondition参数无效
- v3.3.8产生的RoamLine贴地方法计算有误

#### 弃用 & API重构 🔒
- Map的control参数下移除了defaultContextMenu 参数，改为 contextmenu.hasDefault 参数



## 3.3.8 - 2022-5-10
#### 重要说明 📣
- 原生 JS 版功能示例、基础项目 中依赖的 jquery 升级至 v3+最新版

#### 新增 🌟
- ModelCombine大数据模型类 增加 scaleX、scaleY、scaleZ 参数
- ModelPrimitive模型类 增加 noPitchRoll 参数
- 增加 MultipleSkyBox 多天空盒

#### 优化 💪
- 增加主库和插件库中第 3 方依赖 JS 库未引入时的错误提示，方便排查问题
- 优化 ToolButton 和 右键菜单的 icon 图标，支持 图片 url 路径、base64 字符串、svg 字符串、字体图标 class 名 等形式
- 增加 Icon 类，可以外部自定义默认右键菜单的图标
- RoamLine 增加 noPitchRoll 参数
- BillboardEntity、PointEntity、ModelEntity 支持其他 point、model、ellipse、path 附带对象
- PolyUtil 类部分异步方法由 void 改为返回 Promise
- mars3d-cesium库升级到[v1.93](https://github.com/CesiumGS/cesium/releases/tag/1.93)

#### 修复 🐞
- 修复 v3.3.7 的 ts 定义错误
- 修复 Effect 在 addTo/remove 方法时记录未处理的问题
- 修复 diffHeight 负数时未显示



## 3.3.7 - 2022-5-2
#### 新增 🌟
- 新增了 CanvasLabelEntity 文本点对象

#### 优化 💪
- 对 GeoJsonLayer 增加支持加载 topojson 数据
- 优化 ArcGisLayer，不依赖 Cesium 修改，改用内部 ArcGisImageryProvider 实现
- 增加 mars3d.Token.updateAll 方法，Map 增加 token 参数，方便外部更新覆盖
- 修改 RotateOut、RotatePoint 于时钟脱离依赖，时钟停止也可有效运行

#### 修复 🐞
- 优化 DivBillboardEntity 大量点的生成图片失败
- 编辑矢量对象时附加的 label 位置同步问题
- 修复 ModelPrimitive 动态运动对象的 modelMatrix 异常报错问题
- 修复 v3.3.6 产生的 Plan 相关矩形裁剪失效问题
- 修复 v3.3.6 产生的模型 url 路径中的“+”符号转义失效问题
- 修复 v3.3.6 产生的地形开挖、等高线删除最后一个失效问题



## 3.3.6 - 2022-4-22
#### 新增 🌟
- 增加了多个材质对象
- 增加 GroupThing 组合类

#### 优化 💪
- Measure 量算方法增加 decimal 等参数，支持自定义显示的文本中保留的小数位
- 支持直接对 EchartsLayer、MapVLayer 绑定单击等事件

#### 修复 🐞
- 修复 Cesium v1.92 相关的兼容性问题
- 解决 PolylineCombine 的材质转换问题
- 矢量对象 toGeoJSON 时坐标为空报错
- Tooltip 贴地对象中显示偏移
- CircleEntity 的 radius 更新时未同步更新 outline



## 3.3.0 - 2022-4-18
#### 重要说明 📣
- 发布了 [移动端 APP 项目模板](http://mall.marsgis.cn/#/product/mars3d-vue-app)

#### 新增 🌟
- 新增了 [TilesetBoxClip](http://mars3d.cn/api/TilesetBoxClip.html) 模型盒子裁剪功能
- 新增对 3dtiles 模型的卷帘对比支持
- 所有图层增加 readyPromise 属性，方便使用
- Primitive矢量数据新增 depthFail 参数支持遮挡部分的展示
- 增加 [MeasureUtil.getSurfaceArea](http://mars3d.cn/api/MeasureUtil.html#.getSurfaceArea) 方法
- 增加了 flv 视频协议、红蓝对抗演习 等示例

#### 优化 💪
- 军标对象增加 getOutlinePositions 静态方法，可外部调用计算边界点坐标
- [VolumeMeasure](http://mars3d.cn/api/VolumeMeasure.html) 方量分析增加一些参数
- 调整手机端标绘提示文字
- 标绘 startDraw 等方法返回值改为 Promise
- 优化 [TilesetPlanClip](http://mars3d.cn/api/TilesetPlanClip.html) 增加显示和编辑 plan 平面
- 更新 [Token](http://mars3d.cn/api/Token.html)  所有默认值
- mars3d-cesium库升级到[v1.92](https://github.com/CesiumGS/cesium/releases/tag/1.92)

#### 弃用 & API重构 🔒
- 因Cesium 升级至 1.92后，其Promise与之前版本不兼容，v3.3+依赖cesium v1.92+，相关版本兼容处理参考[教程](http://mars3d.cn/docs/issue/version/)
- 为了降低对Cesium源码修改的依赖，重新整理优化 mars3d-cesium 库，非常大的修改了一轮
- ArcGIS/WMS 瓦片图层的 maxLength 参数改名为 graphicConver
- 矢量数据的 clampToGround 方法更名为 autoSurfaceHeight(兼容旧名称)

#### 修复 🐞
-  [BillboardEntity.startBounce](http://mars3d.cn/api/BillboardEntity.html#startBounce)  弹跳时，已有偏移文本的处理优化
- 修改 Effect 特效移除再新增时的报错
- 热力图 diffHeight 参数优化
- 修复一些已知 bug



---

## 3.2.4 - 2022-3-3
#### 优化 💪
- ModelPrimitive 等类增加 clampToTileset 等参数
- mars3d-cesium库升级到[v1.91](https://github.com/CesiumGS/cesium/releases/tag/1.91)

#### 修复 🐞
- 修复 v3.2.3 产生的 symbol 配置的样式失效
- 修复 label 的 show:false 时默认显示



## 3.2.3 - 2022-2-27
#### 优化 💪
- 优化 RoamLine 的 endItem 事件
- QueryGeoServer 增加 queryBySql 方法，支持 cql_filter
- WfsLayer 增加 geometryName 参数

#### 修复 🐞
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=DivGraphic) 对象的 popup 和 tooltip 的 zIndex 处理



## 3.2.1 - 2022-2-13
#### 新增 🌟
- map新增了地形加载失败、地形加载成功、load初始化 事件

#### 优化 💪
- map 增加 toolbar 和 controls 中增加 ceisum 原生控件的获取，方便使用
- Map初始化地形加载失败时，自动切换至无地形进行展示，避免黑色球效果
- mars3d-cesium库升级到[v1.90](https://github.com/CesiumGS/cesium/releases/tag/1.90)

#### 修复 🐞
- 测试并修改 V3.2.0 产生的多个 bug 问题



## 3.2.0 - 2022-1-28
#### 重要说明 📣
- 发布了 v3.2 版
- Vue功能示例和基础项目架构由webpack迁移至vite框架

#### 新增 🌟
- 新增了 [CircleCombine](http://mars3d.cn/api/CircleCombine.html) 、[RectangleCombine](http://mars3d.cn/api/RectangleCombine.html)、[WallCombine](http://mars3d.cn/api/WallCombine.html) 等10多个合并渲染的大数据矢量对象
- 新增了[Tetrahedron](http://mars3d.cn/api/Tetrahedron.html)、[CloudPrimitive](http://mars3d.cn/api/CloudPrimitive.html)、[ViewShed](http://mars3d.cn/api/ViewShed.html) 等 graphic 矢量对象
- 新增瓦片图层颜色滤镜功能，增加 invertColor、filterColor等参数来修改瓦片颜色
- 重写了 [DivGraphic](http://mars3d.cn/api/DivGraphic.html) 的编辑处理，支持直接拖拽 div 对象

#### 优化 💪
- Map 的鼠标事件除 move 外 event 回调中均加上拾取的 mars3d 矢量对象和图层
- 模型剖切支持 plane 的显示和编辑
- [FloodByMaterial](http://mars3d.cn/api/FloodByMaterial.html) 淹没分析支持颜色的修改

#### 弃用 & API重构 🔒
- 重写了 Video2D、Video3D 视频投射矢量对象(API 全部变化了，参考 API 升级)
- 重写了 WindLayer 的参数，简化优化 API 结构(参考示例修改)
- 移除了 mars3d.thing.ViewShed3D(改用mars3d.graphic.ViewShed，参考示例升级)
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div) 的 className 参数更改到 style 下(参考 API 文档)
- LatLngPoint 改名为 LngLatPoint、LatLngArray 改名为 LngLatArray (批量替换下)

#### 修复 🐞
- Entity 对象中，初始无 lable 时后续更新 lable 文本无效的问题



---

## 3.1.23 - 2022-1-23
#### 新增 🌟
- 模型和矢量对象中增加 allowDrillPick 参数，允许鼠标穿透拾取进行交互
- Video3D 增加 maskImage 羽化图片参数

#### 优化 💪
- Map 类增加 mouse 鼠标操作相关配置参数，方便外部控制
- 优化地图 Zoom 的处理，限定最大最小距离
- 优化鼠标在无地球情况下拾取

#### 修复 🐞
- RectangleEntity 对象 flyTo 定位位置不对
- 优化 TS 和 API 文档对应 jsdoc 注释
- 进行一轮全面测试，并修复发现的多个 bug 问题
- 修复 v3.1.18 产生的单体化高亮失效问题
- 修改模型的 closeHighlight 方法无效问题



## 3.1.21 - 2022-1-8
#### 优化 💪
- 封装增加 mars3d.control.Timeline 控件，方便后续控制
- 优化 LocationBar 的不同屏幕宽度下的展示
- 优化 DivGraphic、Popup、右键菜单 的样式和展示
- LineFlowMaterialProperty 新增时长参数
- 标绘编辑增加 hasHeightEdit 属性控制是否修改高度值

#### 修复 🐞
- outline 边线高度支持读取 height 属性自适应
- PolygonEntity 的 setHeight、addHeight 属性无效



## 3.1.20 - 2022-1-4
#### 重要说明 📣
- 发布上线了 基础项目 Vue版

#### 新增 🌟
- 新增了 CylinderWaveMaterialProperty 材质属性

#### 优化 💪
- LineFlicker 材质增加背景色参数
- RoamLine 类增加 setOptions 方法、支持 model.highlight 配置
- 优化 ContextMenu 右键菜单二级菜单超出屏幕时的展示
- 进行了一次 API 文档的规范和检查改正
- mars3d-cesium库升级到[v1.89](https://github.com/CesiumGS/cesium/releases/tag/1.89)

#### 修复 🐞
- 解决 v3.1.18 产生的 Map 的控件相关参数 false 时显示的问题



## 3.1.18 - 2021-12-25
#### 新增 🌟
- 增加 ConeTrackPrimitive 圆锥追踪体矢量对象
- 增加 EffectType、ControlType 类
- 统一规范了所有Control，支持Map中control传参预加载构造、新增了type类型，相关新增移除事件等
- 统一规范了所有Effect，支持Map中effect传参预加载构造、新增了type类型，相关新增移除事件等

#### 优化 💪
- widget 的 disableOther 配置支持数组，释放指定的多个 widget

#### 修复 🐞
- 图层 flyTo 时自动取消飞行漫游路线的跟随视角等锁定
- 右键二级菜单 show 显示的是 0 个时自动隐藏处理
- 解决 v3.1.17 动态 primitive 点的运行错误



## 3.1.17 - 2021-12-19
#### 新增 🌟
- 矢量对象标绘事件中，增加修改或增加点的 index 值

#### 优化 💪
- 对 OsmBuildingsLayer 支持 customShader 等参数
- 优化 Map 类的 setPitchRange 方法处理
- Popup 增加 animation 动画参数对是否动画可控

#### 弃用 & API重构 🔒
- DivLayer 内方法均融合至 GraphicLayer，可以 DivLayer 批量替换为 GraphicLayer(v3.2 将移除 DivLayer)

#### 修复 🐞
- primitive 矢量对象 distanceDisplayCondition 参数无效
- 修复 v3.1.16 产生的 Popup 关闭时错误


## 3.1.16 - 2021-12-11
#### 新增 🌟
- 所有类的事件回调对象增加 stopPropagation 方法可以停止事件冒泡
- Map类增加 contextMenuOpen、contextMenuClose、contextMenuClick 右键菜单相关事件

#### 优化 💪
- 控件和 [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div) 对象支持 parentContainer 参数来指定自定义的父级 DOM

#### 弃用 & API重构 🔒
- 原有对象的 stopPropagation 更名为 eventParent，不仅用于关闭冒泡的父级还可以指定父级冒泡对象

#### 修复 🐞
- 修复 v3.1.12 修改产生的模型 OutlineEffect 效果对其他对象生效问题
- 修复 v3.1.12 产生的地形开挖高度失效
- 修复 v3.1.15 优化 RoamLine 的 flyToPoint 方法产生的视角切换异常问题
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div) 对象绑定的 tooltip 闪烁问题
- 线面对象的按距离显示属性显示异常
- RoamLine 默认传入 model.roll 和 pitch 未生效
- 解决 GroupLayer 抛出 2 次事件问题



## 3.1.15 - 2021-12-5
#### 重要说明 📣
- 发布上线了 功能示例 Vue版

#### 新增 🌟
- 增加 ClockAnimate 控件

#### 优化 💪
- 优化 RoamLine 的 flyToPoint 方法
- mars3d-cesium库升级到[v1.88](https://github.com/CesiumGS/cesium/releases/tag/1.88)

#### 修复 🐞
- 整理 API 文档，去除多层 options 的参数
- 修改矢量数据的鼠标样式
- GaodePOI 圆形查询筛选有误



## 3.1.14 - 2021-11-29
#### 新增 🌟
- map 增加 terrainChange、tileLoadProgress 事件
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div) 在 clampToGround:true 时支持随地形切换后贴地

#### 优化 💪
- TilesetFlat 优化模型高度值的读取
- PolygonCombine 的 outline 支持优化
- Zoom 控件支持增加 zoomOutIcon、zoomOutIcon 传入图片 url

#### 修复 🐞
- map 的 requestRenderMode 属性默认值改回 false
- RoamLine 的 addShading 方法 polyline 无效



## 3.1.13 - 2012-11-21
#### 新增 🌟
- PolygonPrimitive、PolygonCombine、RectanglePrimitive、CirclePrimitive 新增支持 ouline 宽度及材质设置

#### 优化 💪
- ModelEntity 对象 addDynamicPosition 时，增加 noPitchRoll 参数，可以设置模型只动态更改方向，内部固定模型的 Pitch 和 Roll 方向值为 0
- RoamLine 优化 clockLoop 参数，并支持导出 Json
- ViewShed3D 增加 terrain 参数控制是否开启地形的阴影效果

#### 修复 🐞
- 更新 mars3d.Token.bing 令牌值
- 解决 v3.1.12 产生的方量分析 bug
- RoamLine 的 addShading 方法报错



## 3.1.12 - 2021-11-14
#### 新增 🌟
- ModelPrimitive、TilesetLayer 支持 customShader 参数来设置自定义 shader 效果

#### 优化 💪
- ToolButton 的 icon 参数支持传入图片 url
- wms、wmts 等图层增加 getCapabilities 参数控制是否进行读取图层配置信息
- Shadows 增加 terrain 参数控制是否开启地形的阴影效果
- 优化 Sightline 通视分析效果
- mars3d-cesium库升级到[v1.87](https://github.com/CesiumGS/cesium/releases/tag/1.87)

#### 修复 🐞
- Cesium v1.87 下计算计算贴地(或贴模型)路线点异常问题
- 绘制 [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div) 时 success 回调参数无效
- 解决 OutlineEffect 的 Entity 类型数据拾取异常
- 飞行漫游对象的 gs 跟随视角设置视距无效
- PolygonEntity、CircleEntity 对象更新 outline 边线的宽度失效和导出 geojson 的未记录 outlineStyle 样式
- GraphicLayer 的 data 参数被构造 2 次



## 3.1.10 - 2021-10-29
#### 优化 💪
- 优化图层的 flyTo 处理，对 echarts 等图层增加 flyTo 支持
- 军事标绘positions支持 传入CallbackProperty回调属性
- xyz 图层增加 tms 属性，简化 tms 类型图层配置
- PolylinePrimitive 支持 colors 属性
- EllipsoidEntity 扫描效果支持暂停
- RectSensor 和 ConicSensor 增加 hideRayEllipsoid 属性



## 3.1.9 - 2021-10-24
#### 新增 🌟
- 增加了 WaterCombine大数据水面对象
- TilesetPlanClip中新增了对模型斜切
- 增加多个客户端空间分析示例

#### 优化 💪
- 默认右键菜单中增加量算功能
- 调整优化了矢量单体化示例
- 优化 [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div) 贴地效率
- TilesetLayer 中 highlight 参数增加 all 参数控制整体高亮

#### 修复 🐞
- PathEntity 更新为固定位置时的 availability 时间内部未自动处理问题
- DivLayer 默认 show:false 传参无效问题
- GraphicLayer 的 loadGeoJSON 方法 type 部分识别无效问题



## 3.1.7 - 2021-10-11
#### 新增 🌟
- 增加了行政区突出展示、智慧社区等多个功能示例

#### 优化 💪
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div) 增加支持 setHeight 和 addHeight 参数
- Image2 材质增加 color 颜色参数
- 优化 mars3d-wind 插件

#### 修复 🐞
- Popup 默认鼠标无法单击问题
- 解决 v3.1.6 的 getRectangle 为空时的错误



## 3.1.6 - 2021-10-3
#### 新增 🌟
- 矢量数据和图层中增加 getRectangle 方法获取数据的矩形边界

#### 优化 💪
- RotatePoint 增加鼠标交互操作修改
- GroupLayer 的 flyTo 方法支持定位所有子图层矢量数据边界
- GeojsonLayer 增加 graphicOptions 参数
- Popup 增加 autoCenter 参数
- RoamLine 增加 forwardExtrapolationType 等参数
- 公开 map.mouseEvent.moveDelay 参数控制鼠标移动事件的响应时间
- mars3d-cesium库升级到[v1.86](https://github.com/CesiumGS/cesium/releases/tag/1.86)

#### 修复 🐞
- 量算类的 label 属性失效
- map 在有 divGraphic 等矢量数据时销毁报错
- WMS 新增后快速移除报错
- RoamLine 跟随视角时暂停不了的问题
- ouline 样式无效
- 军事标绘优化夹角
- SmallTooltip 支持 enabled 关闭



## 3.1.4 - 2021-9-18
#### 优化 💪
- 矢量数据的 setHeight 和 addHeight 的属性支持字符串模版配置读取属性内值
- 增加 highlightOpen 和 highlightClose 事件，并优化 openHighlight 和 closeHighlight 方法
- ModelPlanClip 支持ModelPrimitive模型的裁剪

#### 修复 🐞
- FloodByGraphic 如果已传入需要的参数，可以直接 start 启动
- 对 cesiumlab 中通用模型工具处理的建筑物的特效的支持
- 修复 MouseDownView 不显示的问题
- 解决 rectangularSensor 与 czml 插件的命名冲突问题
- wms 等图层 proxy 参数支持字符串



## 3.1.3 - 2021-9-12
#### 新增 🌟
- 增加了描边 OutlineEffect 特效对象
- CircleEntity 和 RectangleEntity 对象的 toGeoJSON 方法支持导出边线
- GaodeRoute 支持途经点、避让区域参数

#### 优化 💪
- Tooltip 更改了默认模板，并支持 direction 显示方向配置
- Compass 的 bottom 支持配置 toolbar，自动跟随 cesium-viewer-toolbar
- PolygonCombine 增加 setColorStyle 方法
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div) 的相关事件中增加 mouseEvent 原始 DOM 事件对象属性
- ToolButton 增加鼠标移入移出事件
- RainEffect 增加粒子大小和方向参数
- Util 增加 formatDate 方法
- mars3d-cesium库升级到[v1.85](https://github.com/CesiumGS/cesium/releases/tag/1.85)

#### 修复 🐞
- TerrainClip 的细长型出现裁剪异常
- PolygonCombine 属性 opacity:1.0 时的显示为透明问题
- 贴地 Water 的透明度无效
- 图层异步加载中设置 show=false 后还显示数据的问题
- 修改 [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div) 导出导入失效问题



## 3.1.1 - 2021-8-27
#### 新增 🌟
- 点状Primitive对象类中新增addDynamicPosition动态点动画轨迹方法
- map 增加了 renderError 事件
- 增加 mars3d.LatLngPoint.FormatLength 全局变量，控制经度纬度的格式化时的长度

#### 优化 💪
- ModelEntity模型对象中addDynamicPosition方法新增的动态点时，增加到时时间停止后触发 stop 事件
- 重新梳理了右键菜单方法及其参数
- 反选遮罩层支持多面的 geojson

#### 修复 🐞
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div) 绑定的 popup 未正常显示
- PolylinePrimitive 的 zIndex 无效问题
- 瓦片图层单击后如果数据太大的卡顿问题
- WallScroll 扫描墙 材质横向透明度存在问题
- ModelPrimitive 类的 runAnimations 属性无效
- GaodePOI 分页存在问题，改为从 0 页开始(高德服务本身是从 1 开始)



## 3.1.0 - 2021-8-21
#### 重要说明 📣
- 发布了 v3.1 版

#### 新增 🌟
- 矢量数据增加 highlight 高亮相关属性和方法，支持鼠标移入或单击后的按指定样式高亮矢量对象
- 重写了 图上量算的所有矢量对象，采用继承Graphic矢量类的方式实现
- 重写了 [Popup](http://mars3d.cn/api/Popup.html) 和 [Tooltip](http://mars3d.cn/api/Tooltip.html) 类，采用继承DivGraphic类的方式实现
- 新增了 [OverviewMap](http://mars3d.cn/api/OverviewMap.html) 鹰眼地图控件
- 新增了 [Image2](http://mars3d.cn/api/MaterialType.html#.Image2)  图片材质，用于图片加载中的避免白色展示
- BillboardEntity 和 LabelEntity 类增加 [startBounce](http://mars3d.cn/api/BillboardEntity.html#startBounce)、[stopBounce](http://mars3d.cn/api/BillboardEntity.html#stopBounce) 执行弹跳动画方法
-  [ModelEntity](http://mars3d.cn/api/ModelEntity.html)  和  [ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html) 对象增加缩小后用像素点或图标展示

#### 优化 💪
- 矢量数据和图层增加 popupOpen、popupClose、tooltipOpen、tooltipClose 事件
- 矢量图层的进入编辑的方式修改，可以右键去激活编辑矢量数据
- 标绘编辑点支持在  [DrawUtil.setPointStyle](http://mars3d.cn/api/DrawUtil.html#.setPointStyle) 方法修改样式
- 导出 GeoJSON 等接口支持不导出高度值
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html)矢量对象增加 className、timeRender 属性、增加 postRender 事件
- 文字材质优化和增加边框参数
- 3dtiles 图层增加了自定义属性和 Shader 的相关方法

#### 弃用 & API重构 🔒
- Popup 和 Tooltip 重构，bindPopup 参数移除了 onAdd、onRemove、timeRender 等参数 (参考示例修改)
- Entity 类型矢量对象方法改名：highlight 改名为 startFlicker，unHighlight 改名为 stopFlicker
- 移除了geojson、wfs 等矢量图层的 dth 参数，改为 highlight 方式实现（参考示例修改）
- 移除了 3dtile 图层的 showClickFeature、pickFeatureStyle 参数，改为 highlight 方式实现（参考示例修改）
- 移除了 wms、arcgis 图层的 showClickFeature、pickFeatureStyle 参数，改为 highlight 方式实现（参考示例修改）

#### 修复 🐞
- 对全部功能示例进行全部一轮测试，并修复了发现的问题
- 修复 MouseDownView 的默认显示问题
- 快捷键事件失效问题
- zonnIn 放大穿过地表后报错



---

## 3.0.36 - 2021-08-18
#### 新增 🌟
- 增加 [PolylineCombine](http://mars3d.cn/api/PolylineCombine.html)大数据线对象

#### 优化 💪
- 增加了一批矢量数据应用功能示例
- [Compass](http://mars3d.cn/api/Compass.html)导航球增加自定义样式和 svg 的外部接口
- [WMTS图层](http://mars3d.cn/api/WmtsLayer.html)支持自动读取服务本身配置，可减少外部配置参数
- mars3d-cesium库升级到[v1.84](https://github.com/CesiumGS/cesium/releases/tag/1.84)


#### 修复 🐞
- 修改 DivLayer 图层移除报错
- 修复 PathEntity 更新动态点无效问题
- 屏蔽贴地面存在 outline 边线时的错误
- 修改 npm 版本的自动化编译及发布方式
- 修复动态路线的坐标定位错误
- 修复方量挖方量数字显示错误
- 修改 npm 包的 package.json 改回 dependencies 方式



## 3.0.32 - 2021-7-27

#### 新增 🌟
- 增加[Tle](http://mars3d.cn/api/Tle.html)算法类，用于卫星 TLE 和 SGP4 相关计算
- [PointPrimitive](http://mars3d.cn/api/PointPrimitive.html)对象新增对CallbackProperty动态坐标的支持
- Map 类增加 [zoomIn](http://mars3d.cn/api/Map.html#zoomIn) 和  [zoomOut](http://mars3d.cn/api/Map.html#zoomOut) 缩放地图方法
- 百度瓦片图层中增加 streetview 街景图层

#### 优化 💪
- [Satellite](http://mars3d.cn/api/Satellite.html)卫星对象支持外部动态 position 和 orientation 传值
- 对 [ConicSensor](http://mars3d.cn/api/ConicSensor.html) 和 [RectSensor](http://mars3d.cn/api/RectSensor.html) 对象，增加和优化了 length 和 rayEllipsoid 等属性
- 优化 [MapVLayer](http://mars3d.cn/api/MapVLayer.html) 的事件绑定 和 线面坐标的遮挡不显示处理
- 优化 [SatelliteSensor](http://mars3d.cn/api/SatelliteSensor.html)  的效率，length 属性支持外部定义传入

#### 弃用 & API重构 🔒
- 移除space插件中的 SpaceUtil 类

#### 修复 🐞
- 下侧状态栏老版本 cesium 中高程值显示为 NaN 问题
- 对贴地 Graphic 的 flyTo 兼容定位到视角中心。
- RoamLine 投影墙在坐标重复时的显示高度问题。
- 优化 map.getTileLayers 获取的图层，增加为显示的 config.json 中的 layers 图层
- [WindLayer](http://mars3d.cn/api/WindLayer.html) 移除和销毁时后的报错。



## 3.0.31 - 2021-7-20
#### 新增 🌟
- Map 类新增lang 多语言参数，用于切换SDK内的文字语言展示
- [Popup](http://mars3d.cn/api/Popup.html)  和 [Tooltip](http://mars3d.cn/api/Tooltip.html)  新增template参数，用于支持配置外部模板

#### 优化 💪
- [EchartsLayer](http://mars3d.cn/api/EchartsLayer.html) 图层升级支持 echarts5 (mars3d-echarts 插件)
- RoamLine 在启动前增加静态模型的显示
- ViewShed3D 增加部分事件方便外部使用
- 模型压平裁剪中优化对部分材质模型的支持

#### 弃用 & API重构 🔒
- 删除 Cesium 库内的汉化的修改，改为mars3d内处理
- 移除 mars3d.DrawUtil.message 对象，改为通过多语言参数控制处理
- Regular 和 Sector 矢量对象API变化，改为中心点和 radius、startAngle 等参数来绘制

#### 修复 🐞
- EllipsoidEntity 导出 geojson 时的 scanPlane 参数处理
- 修复 setSceneOptions 的视角变化和参数合并。



## 3.0.30 - 2021-07-11
#### 新增 🌟
- 增加 [PointUtil.getMidpoint](http://mars3d.cn/api/PointUtil.html#.getMidpoint)  方法，优化标绘的中点计算

#### 优化 💪
- 在[GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html) 图层加载 MultiPolygon 和 MultiLineString 时，只在最大坐标数的线面对象上显示文本注记
- 线面数据的 addHeight 属性支持传入数组
- 优化矢量数据的 style.label.position参数，支持模版等配置
- 对Entity类型数据，增加 availability、viewFrom、parent 等原生Entity相关参数

#### 弃用 & API重构 🔒
- 剔除内部的 zepto 库，全部改为原生JS代码来操作相关DOM
- 减少对 turf 的依赖，目前仅用到 turf 的 4 个方法（buffer 缓冲分析、booleanPointInPolygon 判断点在面内、convex 求外包围面、bezierSpline 计算贝塞尔曲线）。

#### 修复 🐞
- ArcGisWfsLayer 坐标系解析问题
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div) 类 setStyle 无效问题、z-index 问题
- Pit 底部改为 PolygonGeometry 解决凹面的渲染错误
- DynamicRoamLine 删除数据时\_removeDynamicPosition 的错误
- map 的 setsSeneOptions 支持 sceneMode 属性
- LimitHeight 的高度错误，改为 bottomHeight+height
- ConeTrack 大尺度下的偏移位置



## 3.0.29 - 2021-7-2
#### 优化 💪
- 对动态点增加贴模型参数，支持自动贴模型
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html#modelMatrix) 三维模型图层支持外部更新 modelMatrix
- RoamLine 的第一视角模式增加 offset3 个方向偏移值，可以进行驾驶舱内视角进行漫游
- mars3d-cesium库升级到[v1.83](https://github.com/CesiumGS/cesium/releases/tag/1.83)

#### 修复 🐞
- 修复[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html#isContinued)矢量图层的 isContinued:true 时支持连续测量
- [DivUpLabel](http://mars3d.cn/api/DivUpLabel.html) 字体参数无效的问题
- 修改 style.label 中的 setHeight 等高度参数的支持
- 修改矢量图层的 show 属性为 false 在数据加载前设置无效问题
- 除了线之外的面对象的 distanceDisplayCondition_far 值内部自动加 6378137 来保持效果一致。


## 3.0.28 - 2021-6-22
#### 新增 🌟
- 图层、控件等类中增加 stopPropagation 参数，用于控制事件是否冒泡
- 对 wmts 服务图层支持单击拾取矢量数据

#### 优化 💪
- DivGraphic矢量对象增加按视角自动计算叠加层次关系
- 绘制圆时增加半径距离的显示
- 比例尺控件，增加 distance 属性和 change 事件
- mars3d-cesium库升级到[v1.82](https://github.com/CesiumGS/cesium/releases/tag/1.82)

#### 修复 🐞
- 修复 map 上 once 绑定事件出错问题
- 修复曲线闭合属性切换未及时生效问题
- 修改面的边线大范围为与面贴合问题
- 修复量算种右键删除点的一些问题
- 模型压平支持自带矩阵的类型数据



## 3.0.27 - 2021-6-11
#### 新增 🌟
- Entity点对象类中新增 [addDynamicPosition](http://mars3d.cn/api/BasePointEntity.html#addDynamicPosition) 动态点动画轨迹方法
- 默认右键菜单中，增加场景特效菜单项

#### 优化 💪
- 矢量图层新增 isRestorePositions 参数，用于在标绘和编辑结束时，是否将坐标还原为普通静态坐标值
- 量算长度，新增 showAddText 是否显示每一段的增加部分距离参数
- wfs、arcgis 图层支持自动读取服务信息中的 crs 坐标系和 extent 边界信息
- 优化 CGCS2000 高斯投影坐标的处理

#### 修复 🐞
- 修复单体化 buffer 缓冲失效问题
- 修复 isInPoly 判断错误的问题
- 修改 [DivGraphic](http://mars3d.cn/api/DivGraphic.html) 中 stopPropagation 参数处理，可以不在 map 上冒泡抛出事件



## 3.0.26 - 2021-6-3
#### 新增 🌟
- 支持对CGCS2000投影坐标(EPSG:4502 到 EPSG:4554)的坐标显示和转换

#### 优化 💪
- 优化对 arcgis 服务、geojson 等的加载处理
- 优化了[LocationBar](http://mars3d.cn/api/LocationBar.html)状态栏控件，支持显示其他坐标系坐标，更改了 API 接口(升级需修改 config.json)

#### 弃用 & API重构 🔒
- 移除了 mars3d-esri 插件，将插件原有类简化并优化后融入到主库中。
- 移除了 mars3d-navigation 插件，主库中新增 [Compass](http://mars3d.cn/api/Compass.html) 和[DistanceLegend](http://mars3d.cn/api/DistanceLegend.html)   控件(升级需修改 config.json)。



## 3.0.23 - 2021-05-08
#### 新增 🌟
- 新增了 [PolygonCombine](http://mars3d.cn/api/PolygonCombine.html)、[ModelCombine](http://mars3d.cn/api/ModelCombine.html)  等大数据展示的合并渲染对象
- 新增了 [DivUpLabel](http://mars3d.cn/api/DivUpLabel.html)、[DivBoderLabel](http://mars3d.cn/api/DivBoderLabel.html) 等多个 DivGraphic子类对象及其功能示例
- 新增了 [ConeTrack](http://mars3d.cn/api/ConeTrack.html) 圆锥追踪体对象
- 新增了 [FrustumPrimitive](http://mars3d.cn/api/FrustumPrimitive.html) 四棱锥体对象
- 新增了瓦片图层自动纠偏功能



## 3.0.20 - 2021-04-19
#### 重要说明 📣
- 完成所有 V2 的功能示例的对应 V3 新版开发

#### 新增 🌟
- 材质统一管理：新增了 [MaterialType](http://mars3d.cn/api/MaterialType.html) 和 [MaterialUtil](http://mars3d.cn/api/MaterialUtil.html) 类来统一管理材质。
- 样式统一规范：梳理规范了所有矢量数据的style样式参数。
- 重写了 [GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)图层，采用可在 symobl 中配置 type 参数指定 Graphic 类型来渲染，默认为 primitive 方式。
- 重写了 [LodGraphicLayer](http://mars3d.cn/api/LodGraphicLayer.html)图层，采用 Graphic 方式渲染，默认内部为 primitive 方式，也可以按需自定义 type。

#### 优化 💪
- mars3d-cesium库升级到[v1.80](https://github.com/CesiumGS/cesium/releases/tag/1.80)

#### 弃用 & API重构 🔒
- 原有Cesium进行渲染的 GeoJsonLayer图层更名为 CzmGeoJsonLayer

#### 修复 🐞
- 完成一轮全面测试并修复多个 bug



## 3.0.0 - 2021-2-1
#### 重要说明 📣
- 发布了 v3.0 版
- 易学：使用和语法都按开发人员用户习惯最优设计，降低开发人员能力要求，只用初级水平开发人员即可上手。
- 规范：API 从顶层统一规范的从零重构、统一的 Map 地图对象，规范一致的调度机制，使用和学习极其简单。
- 高效率：提高了开发效率和平台的渲染效率。
- 新技术栈支持：对 sdk 增加了 TypeScript 定义，npm 包公开发布，功能示例、教程开源开放，全新的开发生态。
- 详细的 API 和教程：重新编写了详细的教程文档、自动根据 SDK 注释生成的最详尽的 API 文档，并完全免费开放。
- 功能示例和项目模板：并规划开发了 Vue 版、React 版功能示例和基础项目。

#### 新增 🌟
- 矢量数据：全新设计的矢量图层 [GraphicLayer](http://mars3d.cn/api/GraphicLayer.html) 和 [Graphic](http://mars3d.cn/api/BaseGraphic.html)  矢量数据体系，可以自由切换数据类型，提高渲染效率。
- 材质：新增了十多个全新动态材质，并使用 MaterialType 和 MaterialUtil 类来统一管理矢量数据的材质对象，简单易用。
- 模型分析：优化了模型压平、模型开挖、模型淹没，支持多个模型压平等并提高渲染效率。
- 地形分析：优化了地形开挖、等高线、坡度坡向等地形相关功能，支持多个地形开挖并提高渲染效率。

#### 弃用 & API重构 🔒
- v3.0版与v2.x版本还不兼容(API结构不同)，无法兼容平滑的升级，因为v3所有代码从零开始编写搭建的,不是基于之前的老版本修改的。



---


## 2.3.0 - 2020-12-31
#### 重要说明 📣
- 发布了 v2.3 版
- Cesium 升级至 [1.79](https://github.com/CesiumGS/cesium/releases/tag/1.79)


## 2.2.0 - 2020-10-1
#### 重要说明 📣
- 发布了 v2.2 版
- Cesium 升级至 [1.74](https://github.com/CesiumGS/cesium/releases/tag/1.74)

## 2.1.0 - 2020-7-1
#### 重要说明 📣
- 发布了 v2.1 版
- Cesium 升级至 [1.71](https://github.com/CesiumGS/cesium/releases/tag/1.71)

## 2.0.0 - 2020-1-1
#### 重要说明 📣
- 发布了 v2.0 版
- Cesium 升级至 [1.65](https://github.com/CesiumGS/cesium/releases/tag/1.65)



---


## 1.9.0 - 2019-10-1
#### 重要说明 📣
- 发布了 v1.9 版
- Cesium 升级至 [1.62](https://github.com/CesiumGS/cesium/releases/tag/1.62)

## 1.8.0 - 2019-6-1
#### 重要说明 📣
- 发布了 v1.8 版
- Cesium 升级至 [1.58](https://github.com/CesiumGS/cesium/releases/tag/1.58)

## 1.7.0 - 2019-1-1
#### 重要说明 📣
- 发布了 v1.7 版
- Cesium 升级至 [1.53](https://github.com/CesiumGS/cesium/releases/tag/1.53)

## 1.6.0 - 2018-10-1
#### 重要说明 📣
- 发布了 v1.6 版
- Cesium 升级至 [1.50](https://github.com/CesiumGS/cesium/releases/tag/1.50)

## 1.5.0 - 2018-7-1
#### 重要说明 📣
- 发布了 v1.5 版
- Cesium 升级至 [1.47](https://github.com/CesiumGS/cesium/releases/tag/1.47)

## 1.4.0 - 2018-4-1
#### 重要说明 📣
- 发布了 v1.4 版
- Cesium 升级至 [1.44](https://github.com/CesiumGS/cesium/releases/tag/1.44)

## 1.3.0 - 2018-1-1
#### 重要说明 📣
- 发布了 v1.3 版
- Cesium 升级至 [1.41](https://github.com/CesiumGS/cesium/releases/tag/1.41)

## 1.2.0 - 2017-11-1
#### 重要说明 📣
- 发布了 v1.2 版
- Cesium 升级至 [1.39](https://github.com/CesiumGS/cesium/releases/tag/1.39)

## 1.1.0 - 2017-10-1
#### 重要说明 📣
- 发布了 v1.1 版
- Cesium 升级至 [1.38](https://github.com/CesiumGS/cesium/releases/tag/1.38)

## 1.0.0 - 2017-8-25
#### 重要说明 📣
- 发布了 v1.0 版
