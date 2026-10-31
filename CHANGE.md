# Mars3D版本及更新日志

# 1. Mars3D的版本

 Mars3D的版本号包括三个部分，比如 **v3.2.1**版本中，**主版本号是 3，大版本号是 2，小版本号是 1**

版本号是根据本次发布中包含的变更的级别进行递增的。

- **主版本**(v3)：包含重要的新特性和架构性调整，在升级时会需要由开发人员提供少量的协助才能完成。当升级到新的主版本时，你可能需要运行升级脚本、重构代码、运行其它测试以及学习新的API。

- **大版本**(v3.2)：包含新增功能和API优化重构，大版本其中大部分功能是向后兼容的，只有少部分特性是不兼容的（更新日志会说明弃用的API），参考说明或示例简单调整即可。

- **小版本**(v3.2.1)：包含新的小型特性优化，bug修改等。 小版本是完全向后兼容的，在升级期间，不需要开发人员提供协助。【授权版时：无论哪种授权方式，小版本均是免费更新】

## 历史版本下载
我们以切换到`v3.4.26`版本为例：
- npm 安装的项目，请打开package.json修改mars3d版本号`"mars3d": "~3.4.26"`，再npm install重新安装
- 静态引入的，请复制链接[https://registry.npmjs.org/mars3d/-/mars3d-3.4.26.tgz](https://registry.npmjs.org/mars3d/-/mars3d-3.4.26.tgz)后，在浏览器地址栏粘贴并修改版本号为指定版本后会回车进行下载。

# 2. 发布频率
 我们会定期发布新版本，以便随着 Mars3D 的不断演进，你可以提前计划并协调这些升级工作。

> 这些日期仅供一般性参考，如有更改，恕不另行通知。

通常的发布周期如下：
- 主版本 没有时间规划，如果有架构性变化时会升主版本
- 约每年发布1个大版本
- 约每月发布1个小版本（如果有紧急的 bugfix，则任何时候都可发布）

# 3. 弃用策略
"弃用 & API重构"（比如移除特定的 API 和特性）有时候是必须的，比如创新、更高效率、让最佳实践与时俱进、变更依赖关系甚至来自 Web 平台自身的变化。

要让这些转变尽可能的简单，我们会给你下列保证：
- 我们会尽量减少重大变更的数量，并尽可能提供迁移工具。
- 我们会遵循这里所讲的弃用策略，让你有时间把应用升级到最新的 API 和最佳实践。

# 4. 更新日志

---

## 3.12.0 - 2026-11-1
#### 重要说明 📣
- 请同步升级至 mars3d-cesium 至 ^1.146.0，**引擎与 SDK 必须配套构建和替换** 

#### 优化 💪
- [mars3d-cesium](https://www.npmjs.com/package/mars3d-cesium)自v1.146版本，对Cesium官方源码的补丁文件从 32 个减到 14 个（−56.25%），同期净减 695 行（+665/−1,360），对源码的改动只保留通用扩展接口与发布链路。
- 优化 SDK 打包：主文件 mars3d.js 由 4.89 MB 减小到 2.33 MB（约 52.4%），同时提升运行性能。
- 梳理 mars3d.d.ts 类型声明，补齐与运行时一致的公开成员。
- 全面校正 JSDoc 注释与实际实现不一致的问题（默认值、返回值、继承关系、失效选项等），并删除或标注尚未实现的选项与文档占位。API文档支持查询属性、方法名称，并修复子类未正常显示继承于父类相关方法的错误。
- 新增自动化测试体系：单元、契约与示例驱动测试, 真实 Chrome/Edge 端到端测试）、c8 覆盖率门槛、采集浏览器覆盖率并与 c8 合并, 串联静态检查 → 构建 → 声明校验 → 单测 → E2E。

#### 弃用 & API重构 🔒
- 请同步升级至 mars3d-cesium 至 ^1.146.0，**引擎与 SDK 必须配套构建和替换** ，不适配v1.145及之前版本。



---

## 3.11.9 - 2026-10-31

#### 优化 💪
- 批量修正 JSDoc 类型与注释（`Function`/`function`、可空返回值、默认值等），API 文档与声明文件更准确。
- 调整 API 文档生成模板、版权与构建脚本，产物说明。
- [CzmGeoJsonLayer](http://mars3d.cn/api/CzmGeoJsonLayer.html) 的 `load` 新增 `clear` 参数：传 `false` 时保留旧数据，直到新数据加载成功。
- [CzmGeoJsonLayer](http://mars3d.cn/api/CzmGeoJsonLayer.html) 重构异步加载：支持取消、替换与重复加载，`readyPromise` 按次独立，移除或销毁时以 `AbortError` 拒绝。
- 重写相机缩放导航，原 `ZoomNavigation` 逻辑并入 [Map](http://mars3d.cn/api/Map.html)，`zoomIn`/`zoomOut` 默认步长统一为 1，滚轮缩放交由 mars3d-cesium 处理（示例：[缩放控件](http://mars3d.cn/editor-vue.html?id=control/basis/zoom)）。
- 重构 [TerrainUplift](http://mars3d.cn/api/TerrainUplift.html)、[TerrainFlat](http://mars3d.cn/api/TerrainFlat.html)、[FloodByMaterial](http://mars3d.cn/api/FloodByMaterial.html)、[ContourLine](http://mars3d.cn/api/ContourLine.html) 的地形渲染实现以适配 Cesium 1.146，保持原有 API 与参数。

#### 修复 🐞
- 修复 [Map](http://mars3d.cn/api/Map.html) 的 `removeLayer`、`hasLayer` 在图层 id 为 `0` 时被误判为空的问题。
- 修复 [CzmGeoJsonLayer](http://mars3d.cn/api/CzmGeoJsonLayer.html) 移除后重新添加时旧加载未取消、数据源归属错误导致的重复或泄漏。
- 修复 [Pit](http://mars3d.cn/api/Pit.html) 异步构建过程中移除或重新添加对象后，旧构建结果继续生效的问题。
- 修复 [Video3D](http://mars3d.cn/api/Video3D.html) 视频播放 Promise 未捕获、销毁后仍访问 video 元素的问题。
- 修复 [DynamicRiver](http://mars3d.cn/api/DynamicRiver.html) 销毁时未释放高度动画与高度 primitive 的问题。
- 修复 [SatelliteSensor](http://mars3d.cn/api/SatelliteSensor.html) 修改样式后不生效的问题，支持样式动态更新。
- 修复 [TaskItem](http://mars3d.cn/api/TaskItem.html) 暂停后结束任务未清理、恢复后未标记激活的问题。
- 修复 [Util](http://mars3d.cn/api/Util.html) 的 `isMars3DCesium` 检测失效问题，改用 `Cesium.Model.lifecycleMars3DEvent` 判断。
- 修复 [WmsLayer](http://mars3d.cn/api/WmsLayer.html) 自定义参数名被强制小写、部分服务无法识别的问题。
- 修复 [Video2D](http://mars3d.cn/api/Video2D.html) 误用 `new` 调用 `Cesium.HeadingPitchRoll.fromDegrees` 的写法，避免部分环境下朝向计算异常。


## 3.11.8 - 2026-10-01
#### 修复 🐞
- 修复 [BasePrimitive](http://mars3d.cn/api/BasePrimitive.html) 停止编辑后 `label.show=false` 的标签重新显示，以及启动编辑时编辑实体事件重复触发的问题。
- 修复 [PointPolygonEntity](http://mars3d.cn/api/PointPolygonEntity.html) 编辑过程中位置点未同步更新，以及 [PathEntity](http://mars3d.cn/api/PathEntity.html)、[Route](http://mars3d.cn/api/Route.html) 导出 ajax 动态坐标时返回错误结果的问题。


## 3.11.7 - 2026-9-17
#### 优化 💪
- 优化[Util.getTextImage](http://mars3d.cn/api/Util.html#.getTextImage)方法绘制文本的背景间距
- mars3d-cesium库升级到[v1.145](https://github.com/CesiumGS/cesium/releases/tag/1.145)

## 3.11.6 - 2026-8-8
#### 优化 💪
- [ClockAnimate](http://mars3d.cn/api/ClockAnimate.html)增加maxSpeed参数
- mars3d-cesium库升级到[v1.144](https://github.com/CesiumGS/cesium/releases/tag/1.144)

## 3.11.5 - 2026-7-8
#### 优化 💪
- [WfsLayer](http://mars3d.cn/api/WfsLayer.html)图层请求由Cesium.Resource改为XMLHttpRequest，避免阻塞Cesium自身请求
- mars3d-cesium库升级到[v1.143](https://github.com/CesiumGS/cesium/releases/tag/1.143)

#### 修复 🐞
- 修复GraphicLayer在isContinued: true时clearDrawing方法第2次调用无效的问题

## 3.11.4 - 2026-6-5
#### 优化 💪
- mars3d-cesium库升级到[v1.142](https://github.com/CesiumGS/cesium/releases/tag/1.142)

#### 修复 🐞
- 修复[Route](http://mars3d.cn/api/Route.html)、[Satellite](http://mars3d.cn/api/Satellite.html)对象position直接传入动态属性坐标时的问题

## 3.11.3 - 2026-5-13
#### 优化 💪
- 优化[GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)的buildings参数，支持polygonC类型，属性字段支持模版字符串（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- [FrustumPrimitive](http://mars3d.cn/api/FrustumPrimitive.html)增加[getFarPlanePositions](http://mars3d.cn/api/FrustumPrimitive.html#getFarPlanePositions)方法
- [WmsLayer](http://mars3d.cn/api/WmsLayer.html)图层的queryParameters自动带入parameters中的cql_filter参数（示例：[WMS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wms)）
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html)支持drawShow参数，控制标绘时不显示本身（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）
- mars3d-cesium库升级到[v1.141](https://github.com/CesiumGS/cesium/releases/tag/1.141)

#### 修复 🐞
- 修复[FrustumPrimitive](http://mars3d.cn/api/FrustumPrimitive.html)的[getRayEarthPositions](http://mars3d.cn/api/FrustumPrimitive.html#getRayEarthPositions)方法导出坐标有偏差的问题
- 修复[PolygonEntity](http://mars3d.cn/api/PolygonEntity.html)多环面[toGeoJSON](http://mars3d.cn/api/PolygonEntity.html#toGeoJSON)未正确导出孔洞坐标的问题

## 3.11.2 - 2026-4-8
#### 新增 🌟
- 新增[HollowCylinder](http://mars3d.cn/api/HollowCylinder.html)中空圆柱体矢量对象（示例：[中空圆柱体](http://mars3d.cn/editor-vue.html?id=graphic/primitive/hollowCylinder)）

#### 优化 💪
- [LabelEntity](http://mars3d.cn/api/LabelEntity.html)、[BillboardEntity](http://mars3d.cn/api/BillboardEntity.html)增加bounce参数，自动执行弹跳效果
- mars3d-cesium库升级到[v1.140](https://github.com/CesiumGS/cesium/releases/tag/1.140)

#### 修复 🐞
- 修复[DivPlane](http://mars3d.cn/api/DivPlane.html)无法聚合的问题
- 修复多环面toJSON未正确导出孔洞坐标的问题

## 3.11.1 - 2026-3-17
#### 优化 💪
- mars3d-cesium库升级到[v1.139](https://github.com/CesiumGS/cesium/releases/tag/1.139)

#### 修复 🐞
- 修正[FrustumPrimitive](http://mars3d.cn/api/FrustumPrimitive.html)、[FrustumCombine](http://mars3d.cn/api/FrustumCombine.html)的夹角计算规则误差
- 修复部分多环面toJSON未正确导出孔洞坐标
- 移除矢量图层isContinued连续绘制时提示id重复的警告
- 修复WFS图层配置rectangle且flyTo:true时未正常飞行定位的问题

## 3.11.0 - 2026-2-14
#### 优化 💪
- [ParallelogramEntity](http://mars3d.cn/api/ParallelogramEntity.html)增加isRect参数，可限定为90度角的矩形
- mars3d-cesium库升级到[v1.138](https://github.com/CesiumGS/cesium/releases/tag/1.138)

#### 修复 🐞
- 修复Gif时序点编辑时无法拾取编辑第一个位置的问题
- 修复地形夸张时贴地点计算未使用夸张高度的问题
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)时序点编辑异常

---
## 3.10.11 - 2025-12-30
#### 新增 🌟
- 新增[QueryIServer](http://mars3d.cn/api/QueryIServer.html)（示例：[iServer矢量服务查询](http://mars3d.cn/editor-vue.html?id=query/iserver)）

#### 优化 💪
- [DistanceLegend](http://mars3d.cn/api/DistanceLegend.html)增加unit参数
- [WfsLayer](http://mars3d.cn/api/WfsLayer.html)图层cql_filter参数支持动态变量
- mars3d-cesium库升级到[v1.136](https://github.com/CesiumGS/cesium/releases/tag/1.136)

#### 修复 🐞
- 修复[CamberRadar](http://mars3d.cn/api/CamberRadar.html)构造参数传入[show](http://mars3d.cn/api/CamberRadar.html#show):false无效的问题

## 3.10.9 - 2025-11-28
#### 优化 💪
- [VolumeCloud](http://mars3d.cn/api/VolumeCloud.html)新增[clip](http://mars3d.cn/api/VolumeCloud.html#clip)参数（示例：[气象云三维体](http://mars3d.cn/editor-vue.html?id=graphic/custom/volumeCloud)）

#### 修复 🐞
- 修复[VolumeDepthMeasure](http://mars3d.cn/api/VolumeDepthMeasure.html)在3个坐标时分析失败的问题

#### 弃用 & API重构 🔒
- [VolumeCloud](http://mars3d.cn/api/VolumeCloud.html)移除xCut、yCut、zCut参数（请改用[clip](http://mars3d.cn/api/VolumeCloud.html#clip)）（示例：[气象云三维体](http://mars3d.cn/editor-vue.html?id=graphic/custom/volumeCloud)）

## 3.10.8 - 2025-11-6
#### 新增 🌟
- 新增[ShortestPath](http://mars3d.cn/api/ShortestPath.html)类，按地形和最大坡度限制进行最短路径分析（示例：[最短路径分析(基于地形坡度)](http://mars3d.cn/editor-vue.html?id=thing/terrain/shortestPath)）

#### 优化 💪
- [ConeTrack](http://mars3d.cn/api/ConeTrack.html)的[style](http://mars3d.cn/api/ConeTrack.html#style)中[angle](http://mars3d.cn/api/ConeTrack.html#angle)、length、[heading](http://mars3d.cn/api/ConeTrack.html#heading)等参数支持回调属性值
- mars3d-cesium库升级到[v1.135](https://github.com/CesiumGS/cesium/releases/tag/1.135)

#### 修复 🐞
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)编辑时smallTooltip错位的问题
- 修复[Geocoder](http://mars3d.cn/api/Geocoder.html)返回无坐标数据时崩溃

## 3.10.7 - 2025-10-24
#### 优化 💪
- [ColorRamp](http://mars3d.cn/api/ColorRamp.html)增加[getImage](http://mars3d.cn/api/ColorRamp.html#getImage)取色带图片方法，可用于图例
- [MeasureUtil.formatArea](http://mars3d.cn/api/MeasureUtil.html#.formatArea)方法参数增加mile（平方海里）
- [PolyUtil.interPolygonByDepth](http://mars3d.cn/api/PolyUtil.html#.interPolygonByDepth)增加[isInPoly](http://mars3d.cn/api/PolyUtil.html#.isInPoly)参数，可返回标准网格的完整结果

#### 修复 🐞
- 修复2D二维模式下map.zoomOut方法异常

## 3.10.6 - 2025-10-10
#### 优化 💪
- 兼容处理Cesium内部材质entity与primitive属性名称不同的情况
- flyTo方法增加onBefore参数
- [RotateOut](http://mars3d.cn/api/RotateOut.html)、[RotatePoint](http://mars3d.cn/api/RotatePoint.html)增加暂停和继续方法
- mars3d-cesium库升级到[v1.134](https://github.com/CesiumGS/cesium/releases/tag/1.134)

#### 修复 🐞
- 修复[CircleEntity](http://mars3d.cn/api/CircleEntity.html)的flyToOptions.radius参数无效的问题
- 修复2D二维模式下没有地球时zoomIn、zoomOut无法缩放的问题

## 3.10.5 - 2025-9-16
#### 优化 💪
- [FixedRoute](http://mars3d.cn/api/FixedRoute.html)增加autoStart参数（示例：[FixedRoute 固定轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/fixedRoute)）

#### 修复 🐞
- 修复[DistanceMeasure](http://mars3d.cn/api/DistanceMeasure.html)的[updateText](http://mars3d.cn/api/DistanceMeasure.html#updateText)参数中总长[label](http://mars3d.cn/api/DistanceMeasure.html#label)未生效的问题
- 修复ArcGis图层subdomains参数未生效的问题
- 修复[Task](http://mars3d.cn/api/Task.html)时序任务返回的[index](http://mars3d.cn/api/index.html)值有误

## 3.10.4 - 2025-9-5
#### 优化 💪
- [WallEntity](http://mars3d.cn/api/WallEntity.html)增加riseAnimationDuration参数和[startRiseAnimation](http://mars3d.cn/api/WallEntity.html#startRiseAnimation)方法（示例：[墙](http://mars3d.cn/editor-vue.html?id=graphic/entity/wall)）
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)增加opaquePass、renderState参数
- map增加tilePromise、terrainPromise属性
- MatrixMove2的radius根据视角自动缩放
- [ModelEntity](http://mars3d.cn/api/ModelEntity.html)存在color值时自动填充颜色
- [Popup](http://mars3d.cn/api/Popup.html)支持配置为iframe方式（如显示实时视频）
- mars3d-cesium库升级到[v1.133](https://github.com/CesiumGS/cesium/releases/tag/1.133)

#### 修复 🐞
- 修复[MatrixMove](http://mars3d.cn/api/MatrixMove.html)的[enabled](http://mars3d.cn/api/MatrixMove.html#enabled)属性无效的问题

## 3.10.3 - 2025-8-22
#### 优化 💪
- bindContextMenu增加mergeMap参数，控制是否与map默认右键菜单合并显示
- [MouseDownView](http://mars3d.cn/api/MouseDownView.html)自动判断鼠标按钮事件

#### 修复 🐞
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)对象在移动端无法编辑的问题
- 修复[ConeTrack](http://mars3d.cn/api/ConeTrack.html)的[setStyle](http://mars3d.cn/api/ConeTrack.html#setStyle)更新[heading](http://mars3d.cn/api/ConeTrack.html#heading)时位置错位的问题
- 修复[WallEntity](http://mars3d.cn/api/WallEntity.html)使用时序坐标报错
- 修复默认右键菜单粘贴矢量对象未支持时序坐标的问题

## 3.10.2 - 2025-8-11
#### 优化 💪
- [Timeline](http://mars3d.cn/api/Timeline.html)的format参数支持直接传入时间格式化文本
- 按住ctrl/alt/shift键做click时，事件内支持返回ctrlKey/altKey/shiftKey为true的标识

#### 修复 🐞
- 修复[CircleEntity](http://mars3d.cn/api/CircleEntity.html)存在diffHeight时高度编辑点失效的问题
- 修复[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)配置symbol为热力图时切换[show](http://mars3d.cn/api/GraphicLayer.html#show)未同步显示隐藏的问题
- 修复map.setBasemapsOptions方法传空值时未清除原有配置的问题

## 3.10.1 - 2025-8-3
#### 优化 💪
- [GroupGraphic](http://mars3d.cn/api/GroupGraphic.html)支持设置[availability](http://mars3d.cn/api/GroupGraphic.html#availability)属性，并对所有子级生效
- [Subtitles](http://mars3d.cn/api/Subtitles.html)不展示文本时隐藏div（方便设置背景色）
- mars3d-cesium库升级到[v1.132](https://github.com/CesiumGS/cesium/releases/tag/1.132)

#### 修复 🐞
- 修复[PitEntity](http://mars3d.cn/api/PitEntity.html)的[label](http://mars3d.cn/api/PitEntity.html#label)默认初始化未显示的问题
- 修复[Mask](http://mars3d.cn/api/Mask.html)遮盖对象[flyTo](http://mars3d.cn/api/Mask.html#flyTo)效果不对的问题
- 修复[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)初始加载json时[readyPromise](http://mars3d.cn/api/GraphicLayer.html#readyPromise)未触发的问题
- 修复[HeatLayer](http://mars3d.cn/api/HeatLayer.html)热力图更新不在相同[rectangle](http://mars3d.cn/api/HeatLayer.html#rectangle)的[positions](http://mars3d.cn/api/HeatLayer.html#positions)时有偏移的问题
- [PolyUtil.isInPoly](http://mars3d.cn/api/PolyUtil.html#.isInPoly)改为使用turf库算法（原算法改名为[isInPoly2](http://mars3d.cn/api/PolyUtil.html#.isInPoly2)，其判断地球背面坐标存在错误）
- 修复手动修改map.clock.multiplier时[ClockAnimate](http://mars3d.cn/api/ClockAnimate.html)控件未自动更新的问题

## 3.10.0 - 2025-7-6
#### 新增 🌟
- 新增标准[mars3d-plot](https://www.bilibili.com/video/BV1zSMMz8Etx/)军标插件（非公开）
- 新增[Sector](http://mars3d.cn/api/Sector.html)扇形材质
- 新增[HighFog](http://mars3d.cn/api/HighFog.html)高度雾特效（示例：[高度雾](http://mars3d.cn/editor-vue.html?id=effect/highFog)）

#### 优化 💪
- [OverviewMap](http://mars3d.cn/api/OverviewMap.html)增加[sync](http://mars3d.cn/api/OverviewMap.html#sync)参数
- CircleWave材质增加square、startAngle、endAngle、isDouble参数
- mars3d-cesium库升级到[v1.131](https://github.com/CesiumGS/cesium/releases/tag/1.131)

#### 修复 🐞
- 梳理API文档结构，订正API描述
- 修复若干已知问题

#### 弃用 & API重构 🔒
- 停止维护React功能示例及通用项目模版，下线官网React入口

---
## 3.9.12 - 2025-6-20
#### 优化 💪
- 支持3DGS高斯泼溅模型渲染（需将mars3d-cesium升级到v1.130.1）
- 优化矢量图层symbol.styleFieldOptions配置，支持属性表达式
- 默认右键菜单增加导入JSON文件菜单项
- 插件增加注册成功的F12打印log提示，便于排查问题

#### 修复 🐞
- 修复若干已知问题

## 3.9.11 - 2025-6-10
#### 新增 🌟
- [GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)、[GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)、[BusineDataLayer](http://mars3d.cn/api/BusineDataLayer.html)新增symbol参数配置方式，可直接渲染热力图（示例：[贴地热力图](http://mars3d.cn/editor-vue.html?id=layer-other/heatmap/heatLayer)）
- 新增[WfsSingleLayer](http://mars3d.cn/api/WfsSingleLayer.html)简单WFS图层，可一次性加载WFS数据
- 新增PolyGradient2双色渐变面材质（示例：[渐变行政区域面](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/polyGradient)）

#### 优化 💪
- [HeatLayer](http://mars3d.cn/api/HeatLayer.html)增加valueColumn参数，[positions](http://mars3d.cn/api/HeatLayer.html#positions)支持与点矢量数据相同的构造数据直接渲染（示例：[贴地热力图](http://mars3d.cn/editor-vue.html?id=layer-other/heatmap/heatLayer)）
- [TerrainClip](http://mars3d.cn/api/TerrainClip.html)、[TerrainPlanClip](http://mars3d.cn/api/TerrainPlanClip.html)、[TerrainUplift](http://mars3d.cn/api/TerrainUplift.html)增加stylePit参数（示例：[地形抬升](http://mars3d.cn/editor-vue.html?id=thing/terrain/terrainUp)）
- [RectSensor](http://mars3d.cn/api/RectSensor.html)增加cameraHpr样式参数（示例：[相控阵雷达范围](http://mars3d.cn/editor-vue.html?id=graphic/space/rectangularSensor)）
- [Pit](http://mars3d.cn/api/Pit.html)新增stRotationDegree等参数
- mars3d-cesium库升级到[v1.130](https://github.com/CesiumGS/cesium/releases/tag/1.130)

#### 修复 🐞
- 修复[Toolbar](http://mars3d.cn/api/Toolbar.html)按钮控件[setOptions](http://mars3d.cn/api/Toolbar.html#setOptions)修改insertIndex参数无效的问题
- 修复[PolylineEntity](http://mars3d.cn/api/PolylineEntity.html)外部传入动态属性坐标时[label](http://mars3d.cn/api/PolylineEntity.html#label)位置未自动变化的问题

## 3.9.9 - 2025-5-7
#### 优化 💪
- mars3d-cesium库升级到[v1.129](https://github.com/CesiumGS/cesium/releases/tag/1.129)

#### 修复 🐞
- 修复v3.9.8产生的Polyline绘制错误
- 修复v3.9.7产生的合并渲染矢量对象单个拾取错误

## 3.9.8 - 2025-4-28
#### 优化 💪
- 新增availabilityChange事件
- 优化[PolylineEntity](http://mars3d.cn/api/PolylineEntity.html)的[startSnakeAnimation](http://mars3d.cn/api/PolylineEntity.html#startSnakeAnimation)内部规则

#### 修复 🐞
- 修复[PitEntity](http://mars3d.cn/api/PitEntity.html)、[PlaneEntity](http://mars3d.cn/api/PlaneEntity.html)的label默认初始化未显示的问题
- 修复[Video2D](http://mars3d.cn/api/Video2D.html)的部分参数[setOptions](http://mars3d.cn/api/Video2D.html#setOptions)修改无效的问题

## 3.9.7 - 2025-4-21
#### 新增 🌟
- 新增矢量对象的复制、剪切、粘贴右键菜单

#### 优化 💪
- 矢量图层的symbol.styleFieldOptions参数支持JS语法字符串配置
- [GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)等矢量图层filter参数支持JS语法字符串配置（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- [VideoPrimitive](http://mars3d.cn/api/VideoPrimitive.html)增加maskImage参数（示例：[视频材质(面状)](http://mars3d.cn/editor-vue.html?id=graphic/video/material)）
- 优化时序对象的编辑操作

#### 修复 🐞
- 修复v3.9.6产生的zIndex顺序错误
- 修复热力图图层setOptions方法无法动态更新热力图效果相关参数的问题

## 3.9.6 - 2025-4-15
#### 优化 💪
- [DoubleSidedPlane](http://mars3d.cn/api/DoubleSidedPlane.html)支持文本材质

#### 修复 🐞
- 重写[PolylineEntity](http://mars3d.cn/api/PolylineEntity.html)的[startSnakeAnimation](http://mars3d.cn/api/PolylineEntity.html#startSnakeAnimation)算法
- 修复[PathEntity](http://mars3d.cn/api/PathEntity.html)未加入图层时[toJSON](http://mars3d.cn/api/PathEntity.html#toJSON)未导出坐标信息的问题
- 修复[Mask](http://mars3d.cn/api/Mask.html)遮盖对象[toJSON](http://mars3d.cn/api/Mask.html#toJSON)坐标不对的问题

## 3.9.5 - 2025-4-2
#### 优化 💪
- mars3d-cesium库升级到[v1.128](https://github.com/CesiumGS/cesium/releases/tag/1.128)

#### 修复 🐞
- 修复v3.9.4产生的[MapCompare](http://mars3d.cn/api/MapCompare.html)释放后事件报错
- 修复v3.9.3产生的map触发两次load事件
- 修复[MultipleSkyBox](http://mars3d.cn/api/MultipleSkyBox.html)销毁时报错

## 3.9.4 - 2025-3-25
#### 优化 💪
- 优化[MapCompare](http://mars3d.cn/api/MapCompare.html)的对比事件处理
- [TilesetClip](http://mars3d.cn/api/TilesetClip.html)增加亮度参数，可同时调整模型亮度（示例：[模型裁剪](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetClip)）

#### 修复 🐞
- 修复Entity使用LineFlow等属性材质时多个颜色参数只显示其中一个的问题
- 修复[PlanePrimitive](http://mars3d.cn/api/PlanePrimitive.html)编辑时材质方向与Entity不一致的问题
- 修复[Measure](http://mars3d.cn/api/Measure.html)的[updateUnit](http://mars3d.cn/api/Measure.html#updateUnit)方法在距离测量时部分情况下无效的问题

## 3.9.3 - 2025-3-18
#### 新增 🌟
- 新增高度雾、闪电特效（示例：[高度雾](http://mars3d.cn/editor-vue.html?id=effect/highFog)）

#### 修复 🐞
- 修复时序点坐标编辑异常
- 修复Box编辑中心点按轴平移时其他点未同步移动的问题
- 修复测量长度在英文切换时起点文本未同步修改的问题

#### 弃用 & API重构 🔒
- 所有effect类名去掉Effect后缀，如BloomTargetEffect更名为[BloomTarget](http://mars3d.cn/api/BloomTarget.html)

## 3.9.2 - 2025-3-11
#### 新增 🌟
- 矢量图层新增attr属性，可对图层内所有矢量数据统一配置ajax动态属性

#### 优化 💪
- [ConeTrack](http://mars3d.cn/api/ConeTrack.html)、[ConeTrackPrimitive](http://mars3d.cn/api/ConeTrackPrimitive.html)支持标绘和编辑
- mars3d-cesium库升级到[v1.127](https://github.com/CesiumGS/cesium/releases/tag/1.127)

#### 修复 🐞
- 优化[MapCompare](http://mars3d.cn/api/MapCompare.html)控件[show](http://mars3d.cn/api/MapCompare.html#show)属性切换时的表现
- 修复[Subtitles](http://mars3d.cn/api/Subtitles.html)字幕在暂停时钟时不能正常显示的问题
- 修复CylinderWave材质未展示动画的问题

## 3.9.1 - 2025-2-25
#### 修复 🐞
- 修复控件setStyle修改初始位置未生效的问题
- 修复[FixedRoute](http://mars3d.cn/api/FixedRoute.html)修改polyline.showAll属性无效的问题
- 修复[CircleEntity](http://mars3d.cn/api/CircleEntity.html)在贴地属性下编辑时提示的半径错误
- 修复百度瓦片底图在境外区域不进行纠偏

## 3.9.0 - 2025-2-15
#### 重要说明 📣
- 对矢量数据的position、positions属性及时序位置相关做了重大调整

#### 新增 🌟
- 点矢量对象position新增支持传入[时序坐标](http://mars3d.cn/api/BaseGraphic.html#.TimePosition)进行动态展示（示例：[time时序坐标](http://mars3d.cn/editor-vue.html?id=graphic/base/position-time)）
- 线面Entity矢量对象positions新增支持传入[时序坐标](http://mars3d.cn/api/BaseGraphic.html#.TimePolyPositions)进行动态展示，并支持addTimePositions方法添加时序位置（示例：[time时序坐标](http://mars3d.cn/editor-vue.html?id=graphic/base/position-time)）
- 矢量图层新增collision属性，文本及点矢量对象可通过碰撞检测自动隐藏
- 新增内置[Toolbar](http://mars3d.cn/api/Toolbar.html)控件，增加position参数配置工具按钮栏在map中的上下左右位置
- 新增[QueryPOI](http://mars3d.cn/api/QueryPOI.html)、[QueryRoute](http://mars3d.cn/api/QueryRoute.html)查询类，通过service参数选用天地图、百度、高德服务（示例：[POI点查询](http://mars3d.cn/editor-vue.html?id=query/poi)）

#### 优化 💪
- GeodePoiLayer类更名为PoiLayer，并支持天地图、百度、高德服务类型参数
- [Geocoder](http://mars3d.cn/api/Geocoder.html)支持天地图、百度、高德不同类型
- mars3d-cesium库升级到[v1.126](https://github.com/CesiumGS/cesium/releases/tag/1.126)

#### 弃用 & API重构 🔒
- 矢量对象属性变更：移除coordinate和coordinates（改用coord）；点矢量对象删除positions、points（可用coord或graphic.isPoint区分点和线面）
- 矢量对象方法变更：addDynamicPosition更名为addTimePosition；移除getCoordinates和getCoordinate（改用getCoord）（示例：[time时序坐标](http://mars3d.cn/editor-vue.html?id=graphic/base/position-time)）
- [PathEntity](http://mars3d.cn/api/PathEntity.html)、[Route](http://mars3d.cn/api/Route.html)、[FixedRoute](http://mars3d.cn/api/FixedRoute.html)取消positions等参数，改为其他点对象一样的[时序坐标](http://mars3d.cn/api/BaseGraphic.html#.TimePosition)方式（示例：[time时序坐标](http://mars3d.cn/editor-vue.html?id=graphic/base/position-time)）
- 移除GraphicGroupLayer图层（改用[GroupGraphic](http://mars3d.cn/api/GroupGraphic.html)进行分组管理）
- [GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)移除hasEdit属性及activateEdit、disableEdit方法，请改用[isAutoEditing](http://mars3d.cn/api/GraphicLayer.html#isAutoEditing)属性（其含义为“是否自动激活编辑”，而不是“是否允许编辑”）
- GeoJSON图层解析时，MultiLineString、MultiPolygon默认用[GroupGraphic](http://mars3d.cn/api/GroupGraphic.html)包一层（可传hasGroup:false），取对象方式有变化（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- 移除map.keyboardRoam，改为按需构造mars3d.thing.[KeyboardRoam](http://mars3d.cn/api/KeyboardRoam.html)对象（示例：[键盘漫游](http://mars3d.cn/editor-vue.html?id=thing/camera/keyboardRoam)）
- 移除TdtPOI、BaiduPOI、GaodePOI、GaodeRoute类（改用[QueryPOI](http://mars3d.cn/api/QueryPOI.html)、[QueryRoute](http://mars3d.cn/api/QueryRoute.html)）（示例：[POI点查询](http://mars3d.cn/editor-vue.html?id=query/poi)）
- 移除GaodePOIGeocoder、GeodePoiLayer（改用PoiLayer）
- 移除CircleScan材质，请直接使用Image2
- map移除toolbar属性（改用map.control.toolbar）

---
## 3.8.15 - 2025-1-28
#### 优化 💪
- 增加对Vue3的支持，自动判断并关闭双向绑定

#### 修复 🐞
- 修复Graphic矢量数据setOptions修改popupOptions属性未合并的问题
- 修复矢量数据图层聚合后show变更未自动更新聚合状态的问题

## 3.8.13 - 2025-1-20
#### 优化 💪
- [Timeline](http://mars3d.cn/api/Timeline.html)控件增加[refresh](http://mars3d.cn/api/Timeline.html#refresh)刷新方法
- [MapCompare](http://mars3d.cn/api/MapCompare.html)控件增加是否同步视角的参数
- [PointMeasure](http://mars3d.cn/api/PointMeasure.html)增加popupOptions参数
- 优化[GraticuleLayer](http://mars3d.cn/api/GraticuleLayer.html)经纬网步长规则，支持正方形格网
- 优化[ContextMenu](http://mars3d.cn/api/ContextMenu.html)右击graphic时的自动处理
- 优化map.proceedCameraViewList方法，减去暂停前的播放时长

#### 修复 🐞
- 修复effect特效toJSON未导出修改过的属性值的问题
- 修复[FixedRoute](http://mars3d.cn/api/FixedRoute.html)存在暂停时间时重复播放的[index](http://mars3d.cn/api/index.html)问题
- 修复[VolumeDepthMeasure](http://mars3d.cn/api/VolumeDepthMeasure.html)初始化传入[minHeight](http://mars3d.cn/api/VolumeDepthMeasure.html#minHeight)、[maxHeight](http://mars3d.cn/api/VolumeDepthMeasure.html#maxHeight)值无效的问题

## 3.8.12 - 2025-1-6
#### 优化 💪
- [CubeView](http://mars3d.cn/api/CubeView.html)控件增加单击交互和相关参数
- mars3d-cesium库升级到[v1.125](https://github.com/CesiumGS/cesium/releases/tag/1.125)

#### 修复 🐞
- 修复[Sector](http://mars3d.cn/api/Sector.html)编辑时按轴移动异常

## 3.8.11 - 2024-12-24
#### 优化 💪
- 所有对象setOptions方法增加第2个参数，可控制内部是否merge合并
- [CzmGeoJsonLayer](http://mars3d.cn/api/CzmGeoJsonLayer.html)、[KmlLayer](http://mars3d.cn/api/KmlLayer.html)支持highlight参数（示例：[KML图层(Cesium原生加载)](http://mars3d.cn/editor-vue.html?id=layer-graphic/file/kml)）
- LineBloom材质增加showRatio参数，可控制只显示一半
- 地形编辑、模型编辑相关类增加area属性

#### 修复 🐞
- 修复v3.8.7挂载[colorCorrection](http://mars3d.cn/api/TilesetLayer.html#colorCorrection)造成[TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)图层导出JSON失败的问题

## 3.8.10 - 2024-12-11
#### 优化 💪
- [Map.setOptions](http://mars3d.cn/api/Map.html#setOptions)、[setLayersOptions](http://mars3d.cn/api/Map.html#setLayersOptions)方法增加过滤图层参数
- 默认右键菜单增加图层及场景配置导出
- 重写[WindLayer](http://mars3d.cn/api/WindLayer.html)风向图图层
- 矢量图层loadJSON与GeoJSON图层加载json数据的格式互相兼容（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- 优化矢量图层加载json数据时toPrimitive参数（自动转为Primitive渲染）的规则
- 矢量图层更新symbol时，symbol.type切换后自动丢弃之前的styleOptions
- [Popup](http://mars3d.cn/api/Popup.html)、[Tooltip](http://mars3d.cn/api/Tooltip.html)增加useGraphicPostion参数，控制是否使用graphic本身坐标
- [BillboardEntity](http://mars3d.cn/api/BillboardEntity.html)、[PointEntity](http://mars3d.cn/api/PointEntity.html)等label增加combine参数，控制是否使用Entity附带文本
- [PolygonEntity](http://mars3d.cn/api/PolygonEntity.html)增加outlineStyle.usePolyline参数，控制是否用polyline对象模拟边线
- mars3d-cesium库升级到[v1.124](https://github.com/CesiumGS/cesium/releases/tag/1.124)

#### 修复 🐞
- 修复部分线面对象聚合异常
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)移除时按轴平移对象未销毁的问题
- 修复[GroupGraphic](http://mars3d.cn/api/GroupGraphic.html)对象组[flyTo](http://mars3d.cn/api/GroupGraphic.html#flyTo)错误
- 修复编辑矢量对象时整体平移编辑点按轴平移部分异常

#### 弃用 & API重构 🔒
- [Popup](http://mars3d.cn/api/Popup.html)、[Tooltip](http://mars3d.cn/api/Tooltip.html)之前取矢量对象坐标全改为鼠标坐标，如需继续使用矢量对象本身坐标，请加useGraphicPostion:true参数

## 3.8.8 - 2024-11-26
#### 新增 🌟
- 新增[ParallelogramEntity](http://mars3d.cn/api/ParallelogramEntity.html)、[ParallelogramPrimitive](http://mars3d.cn/api/ParallelogramPrimitive.html)平行四边形矢量对象

#### 优化 💪
- [Map](http://mars3d.cn/api/Map.html)增加[getLayrsTree](http://mars3d.cn/api/Map.html#getLayrsTree)方法、矢量图层增加getGraphicsTree方法
- WFS图层内部增加自动取消已发出的请求
- [FrustumPrimitive](http://mars3d.cn/api/FrustumPrimitive.html)增加near参数
- [Map](http://mars3d.cn/api/Map.html)增加[isDrawing](http://mars3d.cn/api/Map.html#isDrawing)属性
- LineFlow材质增加bgColor参数

#### 修复 🐞
- 修复[PointVisibility](http://mars3d.cn/api/PointVisibility.html)、[ConeVisibility](http://mars3d.cn/api/ConeVisibility.html)合并渲染可视域对象opacity参数无效的问题

## 3.8.7 - 2024-11-14
#### 新增 🌟
- 恢复v3.4移除的mars3d-supermap插件及超图S3M图层示例

#### 优化 💪
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)增加[colorCorrection](http://mars3d.cn/api/TilesetLayer.html#colorCorrection)颜色校正参数和属性

#### 弃用 & API重构 🔒
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)移除luminanceAtZenith参数
- npm包中去掉`dist`子目录，与下载的静态包目录保持一致(如果`import "mars3d/dist/mars3d.css"`报错，请改为`import "mars3d/mars3d.css"`)

## 3.8.6 - 2024-11-5
#### 新增 🌟
- [矢量数据编辑](http://mars3d.cn/editor-vue.html?id=layer-graphic/draw/draw)增加还原编辑、撤销编辑（还原到上一步）功能
- 新增[Task](http://mars3d.cn/api/Task.html)[时序任务执行](http://mars3d.cn/editor-vue.html?id=thing/other/task)管理器（可在指定时间内执行指定的事情）
- 新增 [Subtitles](http://mars3d.cn/api/Subtitles.html) [字幕控件](http://mars3d.cn/editor-vue.html?id=control/basis/subtitles)
- 新增 [DivGif](http://mars3d.cn/api/DivGif.html) 矢量对象便于gif图标的标绘及管理
- 矢量对象、图层、特效的availability时序显示属性支持直接传入相对开始时间的秒数，并支持配置duration时长参数

#### 优化 💪
- [WfsLayer](http://mars3d.cn/api/WfsLayer.html)图层增加maxCacheCount参数，并优化减少请求数
- [Map](http://mars3d.cn/api/Map.html)增加graphic参数，可传入map.graphicLayer默认图层的相关构造参数
- [Map](http://mars3d.cn/api/Map.html)增加getAvailabilityList方法，可获取当前地图下图层、矢量对象、特效、控件绑定的所有availability列表
- mars3d-cesium库升级到[v1.123](https://github.com/CesiumGS/cesium/releases/tag/1.123)

#### 修复 🐞
- 修复map.setOptions修改targetFrameRate参数无效的问题
- 修复三维模型编辑时初始绑定菜单未与编辑菜单一起展示的问题

## 3.8.5 - 2024-10-29
#### 新增 🌟
- 重写矢量图层聚合，支持所有数据类型的聚合，并使用新的cluster参数、clusterEnabled属性、clusterStop事件（Tip：不参与聚合的类型包括合并渲染对象、处于标绘或编辑状态的对象）

#### 优化 💪
- 重写map的getCenter、getExtent、flyToExtent方法算法
- [OverviewMap](http://mars3d.cn/api/OverviewMap.html)增加polygon视域范围面展示，并优化视角同步效果
- 重写[RectangleEntity](http://mars3d.cn/api/RectangleEntity.html)整体移动算法
- [SectionMeasure](http://mars3d.cn/api/SectionMeasure.html)剖面分析的距离由空间距离改为切面水平距离（示例：[剖面分析](http://mars3d.cn/editor-vue.html?id=thing/analysis/measure-section)）
- [Timeline](http://mars3d.cn/api/Timeline.html)增加format参数，[ClockAnimate](http://mars3d.cn/api/ClockAnimate.html)优化format参数
- 恢复v3.4移除的[ModelLayer](http://mars3d.cn/api/ModelLayer.html)并调整参数，用于单个gltf模型的简洁快速管理

#### 修复 🐞
- 修复[BillboardEntity](http://mars3d.cn/api/BillboardEntity.html)、[BillboardPrimitive](http://mars3d.cn/api/BillboardPrimitive.html)、[PointEntity](http://mars3d.cn/api/PointEntity.html)贴地在2D时不显示的问题
- 修复[PathEntity](http://mars3d.cn/api/PathEntity.html)的[getIndex](http://mars3d.cn/api/PathEntity.html#getIndex)或[index](http://mars3d.cn/api/index.html)返回不对的问题
- 修复图上量算的hasMoveEdit参数无效的问题

#### 弃用 & API重构 🔒
- 矢量图层聚合相关全部重写，移除clustering参数、clustering属性等，已由其他参数替代（示例：[对象聚合](http://mars3d.cn/editor-vue.html?id=layer-graphic/fun/clustering)）

## 3.8.4 - 2024-10-15
#### 优化 💪
- [VolumeDepthMeasure](http://mars3d.cn/api/VolumeDepthMeasure.html)修改参数，支持按需显示盒子
- Image2图片材质增加maskImage参数
- [Video2D](http://mars3d.cn/api/Video2D.html)增加maskImage样式参数（示例：[视频2D投射](http://mars3d.cn/editor-vue.html?id=graphic/video/video2D)）
- mars3d-cesium库升级到[v1.122](https://github.com/CesiumGS/cesium/releases/tag/1.122)（已知问题：添加矢量对象时存在黑屏闪烁）

#### 修复 🐞
- 修复v3.8.3产生的WMTS内部自动解析参数错误问题
- 修复[BaseLayerPicker](http://mars3d.cn/api/BaseLayerPicker.html)控件在外部更新底图和地形后未自动更新的问题
- 修复[ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)存在distanceDisplayBillboard属性时开始编辑会消失的问题[#IAUS4W](https://gitee.com/marsgis/mars3d/issues/IAUS4W)
- 修复[Satellite](http://mars3d.cn/api/Satellite.html)不存在[model](http://mars3d.cn/api/Satellite.html#model)参数时[cone](http://mars3d.cn/api/Satellite.html#cone)创建及更新方向异常
- 修复[PointPrimitive](http://mars3d.cn/api/PointPrimitive.html)图层设置透明度无效的问题
- 修复[DoubleSidedPlane](http://mars3d.cn/api/DoubleSidedPlane.html)在深度检测下没有遮挡的问题

## 3.8.3 - 2024-9-25
#### 优化 💪
- [PointVisibility](http://mars3d.cn/api/PointVisibility.html)、[ConeVisibility](http://mars3d.cn/api/ConeVisibility.html)增加visibleAreaColor、hiddenAreaColor颜色自定义参数
- [PathEntity](http://mars3d.cn/api/PathEntity.html)不在时序范围内时，取最近一个状态的方向值（示例：[Path轨迹](http://mars3d.cn/editor-vue.html?id=graphic/entity/path)）
- TdtPOI、BaiduPOI、GaodePOI等的key参数同时支持字符串或数组
- [TilesetClip](http://mars3d.cn/api/TilesetClip.html)、[TilesetFlat](http://mars3d.cn/api/TilesetFlat.html)增加maxCanvasSize参数（示例：[模型压平](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetFlat)）
- 优化[Geocoder](http://mars3d.cn/api/Geocoder.html)参数并补充API
- WMTS增加tileMatrixBefore参数（示例：[WMTS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wmts)）
- 优化标绘时的顶点吸附，允许在空白处正常拾取标绘
- turf库升级到[v7.1](http://turfjs.org/)

#### 修复 🐞
- 修复按轴平移时editMovePoint事件返回的cartesian坐标值不是最新的问题
- 修复[TerrainClip](http://mars3d.cn/api/TerrainClip.html)外裁剪时删除到最后一个报错
- 修复[BillboardEntity](http://mars3d.cn/api/BillboardEntity.html)的color和opacity同时存在时color无效的问题

## 3.8.2 - 2024-9-10
#### 新增 🌟
- 新增LineDashArrow虚线箭头线材质

#### 优化 💪
- 优化[SatelliteSensor](http://mars3d.cn/api/SatelliteSensor.html)在不动时的渲染效率（示例：[卫星视锥体](http://mars3d.cn/editor-vue.html?id=graphic/space/satelliteSensor)）

#### 修复 🐞
- 增加容错处理，非标准地形服务（天地图、ArcGIS地形）不支持准确贴地高度计算时不再报错
- 增加容错处理，Polygon本身不贴地但outline边线贴地时不再报错

## 3.8.1 - 2024-9-3
#### 优化 💪
- [SatelliteSensor](http://mars3d.cn/api/SatelliteSensor.html)、[RectSensor](http://mars3d.cn/api/RectSensor.html)、[ConicSensor](http://mars3d.cn/api/ConicSensor.html)增加slices参数并默认改为最小值，可自定义传值以优化效率和效果（示例：[卫星视锥体](http://mars3d.cn/editor-vue.html?id=graphic/space/satelliteSensor)）
- OutlineEffect增加closeOnClick参数
- mars3d-cesium库升级到[v1.121](https://github.com/CesiumGS/cesium/releases/tag/1.121)

#### 修复 🐞
- 修复[PointLight](http://mars3d.cn/api/PointLight.html)绘制时传入[color](http://mars3d.cn/api/PointLight.html#color)无效的问题[#IALND0](https://gitee.com/marsgis/mars3d/issues/IALND0)
- 修复合并渲染对象调用openHighlight、closeHighlight方法无法指定[index](http://mars3d.cn/api/index.html)的问题
- 修复[Video3D](http://mars3d.cn/api/Video3D.html)对象[play](http://mars3d.cn/api/Video3D.html#play)属性赋值无效的问题
- 修复[ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)在highlight属性交互时模型重绘闪烁的问题
- 修复[CameraHistory](http://mars3d.cn/api/CameraHistory.html)在2D模式下无法限定范围的问题

## 3.8.0 - 2024-8-20
#### 新增 🌟
- 新增[BillboardIndicator](http://mars3d.cn/api/BillboardIndicator.html)可拖拽面板矢量对象
- 重写[HeatLayer](http://mars3d.cn/api/HeatLayer.html)热力图图层类，支持全球渲染及缩放重新渲染（示例：[贴地热力图](http://mars3d.cn/editor-vue.html?id=layer-other/heatmap/heatLayer)）
- [PolylineEntity](http://mars3d.cn/api/PolylineEntity.html)增加snakeAnimation流动生长（贪吃蛇）动画参数及相关方法
- 绘制线面对象，增加drawShowMeasure参数显示测量结果辅助标绘
- 瓦片图层支持自定义切片加载，增加origin、resolutions、zOffset等相关参数

#### 优化 💪
- Image2材质增加rotation旋转角度属性
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)及矢量数据增加matrixMove、matrixRotate参数，支持编辑时自定义轴参数
- [WindLayer](http://mars3d.cn/api/WindLayer.html)重写适配最新版Cesium（WebGL2渲染）
- [ParticleSystem](http://mars3d.cn/api/ParticleSystem.html)增加visibleDepth属性，可控制不被遮挡
- GeoJSON数据加载时增加toPrimitive参数，可自动转为Primitive渲染（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）

#### 修复 🐞
- 修复[TilesetBoxClip](http://mars3d.cn/api/TilesetBoxClip.html)盒子裁剪clipOutSide参数无效的问题[#IAKIJP](https://gitee.com/marsgis/mars3d/issues/IAKIJP)

#### 弃用 & API重构 🔒
- 免费版SDK的Logo将出现在屏幕四周的随机位置（如需无Logo请[购买授权](http://mars3d.cn/goods.html?id=mars3d-sdk)支持mars3d的可持续发展）
- 移除矢量数据编辑时按轴移动使用的matrixMoveRadius参数，可改用matrixMove参数

---
## 3.7.25 - 2024-8-16
#### 修复 🐞
- 修复[CurveEntity](http://mars3d.cn/api/CurveEntity.html)曲线setHeight属性未生效的问题
- 修复[CorridorEntity](http://mars3d.cn/api/CorridorEntity.html)坐标中的高度值未生效的问题
- 修复[Regular](http://mars3d.cn/api/Regular.html)、[Sector](http://mars3d.cn/api/Sector.html)矢量对象的hasMoveEdit属性无效的问题

## 3.7.24 - 2024-8-6
#### 优化 💪
- [PointPrimitive](http://mars3d.cn/api/PointPrimitive.html)增加clampToGroundExact参数，clampToGround默认按概略快速计算
- mars3d-cesium库升级到[v1.120](https://github.com/CesiumGS/cesium/releases/tag/1.120)

#### 修复 🐞
- 修复[ViewShed](http://mars3d.cn/api/ViewShed.html)和[Video3D](http://mars3d.cn/api/Video3D.html)在图层设置show为false时显示异常
- 修复[BillboardEntity](http://mars3d.cn/api/BillboardEntity.html)的distanceDisplayPoint.distanceDisplayCondition_far参数无效的问题
- 修复[ModelEntity](http://mars3d.cn/api/ModelEntity.html)的[flyTo](http://mars3d.cn/api/ModelEntity.html#flyTo)飞行定位自动计算radius、与其他矢量数据规则不一致的问题
- 修复[Image2MaterialProperty](http://mars3d.cn/api/Image2MaterialProperty.html)属性材质的[noWhite](http://mars3d.cn/api/Image2MaterialProperty.html#noWhite)参数无效的问题
- 修复[VideoPrimitive](http://mars3d.cn/api/VideoPrimitive.html)导入导出json时未记录网格编辑点信息的问题
- 修复[Route](http://mars3d.cn/api/Route.html)在clampToTileset贴模型属性为true时[Popup](http://mars3d.cn/api/Popup.html)未贴模型的问题

## 3.7.23 - 2024-7-23
#### 优化 💪
- [Video3D](http://mars3d.cn/api/Video3D.html)增加distanceDisplayCondition参数
- [Sightline](http://mars3d.cn/api/Sightline.html)通视分析[add](http://mars3d.cn/api/Sightline.html#add)方法增加objectsToExclude参数（示例：[通视分析](http://mars3d.cn/editor-vue.html?id=thing/analysis/sightline)）
- [VolumeDepthMeasure](http://mars3d.cn/api/VolumeDepthMeasure.html)的[maxHeight](http://mars3d.cn/api/VolumeDepthMeasure.html#maxHeight)含义变更，会影响挖方量
- [ConeTrack](http://mars3d.cn/api/ConeTrack.html)的style.label改为显示在锥体中间
- 三角测量结果错位展示文本信息

#### 修复 🐞
- 修复[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)矢量图层聚合时后续增加的primitive未更新聚合值的问题
- 修复[Map](http://mars3d.cn/api/Map.html)初始化时内置控件被实例化两次的问题
- 修复热力图跨省区域下存在偏移的问题

## 3.7.22 - 2024-7-16
#### 优化 💪
- [BillboardPrimitive](http://mars3d.cn/api/BillboardPrimitive.html)增加distanceDisplayPoint参数

#### 修复 🐞
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)按轴移动时DIV本身遮挡移动轴的问题
- 修复[Tooltip](http://mars3d.cn/api/Tooltip.html)直接构造时[style](http://mars3d.cn/api/Tooltip.html#style)下的offsetX、offsetY值未生效的问题

## 3.7.21 - 2024-7-5
#### 优化 💪
- 文本材质、[CanvasLabelEntity](http://mars3d.cn/api/CanvasLabelEntity.html)增加\n换行和字间距参数
- [Mask](http://mars3d.cn/api/Mask.html)增加style.global参数
- mars3d-cesium库升级到[v1.119](https://github.com/CesiumGS/cesium/releases/tag/1.119)

#### 修复 🐞
- 修复GaodePOI在map.chinaCRS为GCJ02时坐标仍做加偏纠偏的问题（增加chinaCRS参数控制）

## 3.7.19 - 2024-6-26
#### 优化 💪
- 矢量数据增加matrixMoveRadius参数，用于右键菜单中按轴移动编辑
- [SectionMeasure](http://mars3d.cn/api/SectionMeasure.html)剖面增加minDistance参数（示例：[剖面分析](http://mars3d.cn/editor-vue.html?id=thing/analysis/measure-section)）
- [WmtsLayer](http://mars3d.cn/api/WmtsLayer.html)增加getFeatureInfoFormat参数（示例：[WMTS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wmts)）
- [PointMeasure](http://mars3d.cn/api/PointMeasure.html)位置测量增加参数并优化显示

#### 修复 🐞
- 修复[ToolButton](http://mars3d.cn/api/ToolButton.html)、[Zoom](http://mars3d.cn/api/Zoom.html)控件的parentContainer参数无效的问题
- 修复贴地[PointEntity](http://mars3d.cn/api/PointEntity.html)在二维视图下不显示的问题（Cesium本身bug）

## 3.7.18 - 2024-6-17
#### 新增 🌟
- 新增[DivBillboardPrimitive](http://mars3d.cn/api/DivBillboardPrimitive.html)对象

#### 优化 💪
- [EllipsoidEntity](http://mars3d.cn/api/EllipsoidEntity.html)的[scanPlane](http://mars3d.cn/api/EllipsoidEntity.html#scanPlane)动画改为与时序无关

#### 修复 🐞
- 修复BrightnessEffect加载后backgroundImage失效的问题[#I9VRHT](https://gitee.com/marsgis/mars3d/issues/I9VRHT)
- 修复[MapSplit](http://mars3d.cn/api/MapSplit.html)控件[show](http://mars3d.cn/api/MapSplit.html#show)属性控制无效的问题
- 修复[ConeTrack](http://mars3d.cn/api/ConeTrack.html)在动态坐标下更新[heading](http://mars3d.cn/api/ConeTrack.html#heading)值有误

## 3.7.17 - 2024-6-5
#### 优化 💪
- [ReflectionWater](http://mars3d.cn/api/ReflectionWater.html)增加farDistance和farColor参数（示例：[水面](http://mars3d.cn/editor-vue.html?id=graphic/primitive/water)）
- 重写[PolyUtil.getRectangle](http://mars3d.cn/api/PolyUtil.html#.getRectangle)方法，增加最大高度返回值
- mars3d-cesium库升级到[v1.118](https://github.com/CesiumGS/cesium/releases/tag/1.118)

#### 修复 🐞
- 修复[RectSensor](http://mars3d.cn/api/RectSensor.html)初始化时坐标为空的后续不显示问题[#I9TFU9](https://gitee.com/marsgis/mars3d/issues/I9TFU9)
- 修复CZML图层部分情况下flyTo无效的问题
- 修复[Video2D](http://mars3d.cn/api/Video2D.html)在部分浏览器下一直未播放的问题
- 修复点状对象flyTo的高度值不对的问题
- 修复v3.7.16修改造成的GeoJSON图层flyTo失效问题

## 3.7.16 - 2024-5-28
#### 优化 💪
- 重构图层flyTo方法
- 优化矢量数据toJSON方法

#### 修复 🐞
- 修复[CzmlLayer](http://mars3d.cn/api/CzmlLayer.html)图层配置[flyTo](http://mars3d.cn/api/CzmlLayer.html#flyTo):true参数时定位错误的问题[#I9R9CD](https://gitee.com/marsgis/mars3d/issues/I9R9CD)
- 修复shadows移除时未停止的问题

## 3.7.15 - 2024-5-21
#### 优化 💪
- [TerrainClip](http://mars3d.cn/api/TerrainClip.html)增加czm参数
- [ModelEntity](http://mars3d.cn/api/ModelEntity.html)、[ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)增加splitDirection属性
- [Sector](http://mars3d.cn/api/Sector.html)增加对动态属性坐标的支持
- [HeightMeasure](http://mars3d.cn/api/HeightMeasure.html)结果默认按高度下降为负数、上升为正数显示
- [GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)增加filter数据筛选方法及参数（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）

#### 修复 🐞
- 修复polyline线绘制时配置depthFail:true参数会绘制不出来的问题[#I9ODHK](https://gitee.com/marsgis/mars3d/issues/I9ODHK)
- 修复shadows.remove报错的问题[#I9QYHI](https://gitee.com/marsgis/mars3d/issues/I9QYHI)

## 3.7.13 - 2024-5-14
#### 优化 💪
- [NavigationHelpButton](http://mars3d.cn/api/NavigationHelpButton.html)控件增加firstOpen、localStorageName参数
- [Map](http://mars3d.cn/api/Map.html)增加[readyPromise](http://mars3d.cn/api/Map.html#readyPromise)属性

#### 修复 🐞
- 修复[Shadows](http://mars3d.cn/api/Shadows.html)的change事件失效的问题

#### 弃用 & API重构 🔒
- graphicLayer.removeGraphic方法的第2个参数hasDestroy默认值改为true

## 3.7.12 - 2024-5-6
#### 优化 💪
- 优化[TilesetClip](http://mars3d.cn/api/TilesetClip.html)、[TilesetPlanClip](http://mars3d.cn/api/TilesetPlanClip.html)模型裁剪开挖功能（示例：[模型裁剪](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetClip)）
- 优化[TerrainClip](http://mars3d.cn/api/TerrainClip.html)、[TerrainPlanClip](http://mars3d.cn/api/TerrainPlanClip.html)地形开挖功能，TerrainPlanClip支持按线切分查看地形切割
- [LimitHeight](http://mars3d.cn/api/LimitHeight.html)限高分析增加[diffHeight](http://mars3d.cn/api/LimitHeight.html#diffHeight)参数
- 修复WMS等瓦片图层卷帘时单击事件和[Popup](http://mars3d.cn/api/Popup.html)在不可见区域仍会触发的问题（示例：[WMS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wms)）
- [Map](http://mars3d.cn/api/Map.html)增加[availabilityEnabled](http://mars3d.cn/api/Map.html#availabilityEnabled)参数，可全局开关availability
- 增加tif、excel、csv文件的本地数据读取示例
- mars3d-cesium库升级到[v1.117](https://github.com/CesiumGS/cesium/releases/tag/1.117)

#### 修复 🐞
- 修复[Pit](http://mars3d.cn/api/Pit.html)墙面材质显示没有拉伸效果的问题[#I9J143](https://gitee.com/marsgis/mars3d/issues/I9J143)
- 修复Combine对象多次单击[Popup](http://mars3d.cn/api/Popup.html)时面板展示属性不对的问题[#I9HD5X](https://gitee.com/marsgis/mars3d/issues/I9HD5X)
- 修复[CirclePrimitive](http://mars3d.cn/api/CirclePrimitive.html)对象标绘时切换贴地属性及导出JSON时坐标显示历史值的问题[#I9J010](https://gitee.com/marsgis/mars3d/issues/I9J010)

#### 弃用 & API重构 🔒
- 标绘事件event的drawtype更名为drawType

## 3.7.11 - 2024-4-22
#### 优化 💪
- [DivLightPoint](http://mars3d.cn/api/DivLightPoint.html)增加billboard参数
- [GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)增加[loadJSON](http://mars3d.cn/api/GraphicLayer.html#loadJSON)方法

#### 修复 🐞
- 优化[Map.toJSON](http://mars3d.cn/api/Map.html#toJSON)导出参数的方法
- 修复style.label在贴地且visibleDepth: false时会重影的问题[#I9G8R4](https://gitee.com/marsgis/mars3d/issues/I9G8R4)
- 修复[PolygonEntity](http://mars3d.cn/api/PolygonEntity.html)在highlight中修改diffHeight无效的问题[#I9I1TN](https://gitee.com/marsgis/mars3d/issues/I9I1TN)
- 修复[RotatePoint.setOptions](http://mars3d.cn/api/RotatePoint.html#setOptions)未生效的问题[#I9IN2V](https://gitee.com/marsgis/mars3d/issues/I9IN2V)

## 3.7.10 - 2024-4-15
#### 新增 🌟
- [Map](http://mars3d.cn/api/Map.html)增加method参数（并将之前的chinaCRS、[lang](http://mars3d.cn/api/Map.html#lang)、[templateValues](http://mars3d.cn/api/Map.html#templateValues)、token参数移到method下）
- [TerrainUplift](http://mars3d.cn/api/TerrainUplift.html)地形抬升增加抬升动画方法[movingAnimation](http://mars3d.cn/api/TerrainUplift.html#movingAnimation)（示例：[地形抬升](http://mars3d.cn/editor-vue.html?id=thing/terrain/terrainUp)）
- 矢量数据支持从Ajax后端动态读取属性和点状坐标配置

#### 优化 💪
- 图层popupOptions参数中增加showNull，可控制是否显示空值字段
- [Popup](http://mars3d.cn/api/Popup.html)增加toggle参数，控制是否打开状态下再次单击时关闭Popup [#I9F4AO](https://gitee.com/marsgis/mars3d/issues/I9F4AO)
- [VolumeDepthMeasure](http://mars3d.cn/api/VolumeDepthMeasure.html)支持传入历史计算值，固化测量结果，避免地形精度和视角剔除导致每次测量结果不同
- [PolylinePrimitive](http://mars3d.cn/api/PolylinePrimitive.html)增加style.depthFailMaterial参数

#### 修复 🐞
- 修复[Popup](http://mars3d.cn/api/Popup.html)在timeRender为true时关闭按钮无法操作的问题
- 修复[PolygonEntity](http://mars3d.cn/api/PolygonEntity.html)调用[setCallbackPositions](http://mars3d.cn/api/PolygonEntity.html#setCallbackPositions)方法时setHeight参数丢失的问题[#I9EUH4](https://gitee.com/marsgis/mars3d/issues/I9EUH4)
- 修复体积计算方法measure.volume直接传参调用时会触发两次计算的问题[#I9F6PQ](https://gitee.com/marsgis/mars3d/issues/I9F6PQ)

#### 弃用 & API重构 🔒
- [Map](http://mars3d.cn/api/Map.html)原有的chinaCRS、[lang](http://mars3d.cn/api/Map.html#lang)、[templateValues](http://mars3d.cn/api/Map.html#templateValues)、token参数移到method参数下
- 移除IonLayer图层，合并至[XyzLayer](http://mars3d.cn/api/XyzLayer.html)（增加assetId、ionToken、ionServer参数）（示例：[标准XYZ金字塔瓦片](http://mars3d.cn/editor-vue.html?id=layer-tile/type/xyz)）
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)加载ion资源时的ionAccessToken参数更名为ionToken

## 3.7.9 - 2024-4-6
#### 优化 💪
- [Map](http://mars3d.cn/api/Map.html)增加scene.logarithmicDepthBuffer参数
- [FixedRoute](http://mars3d.cn/api/FixedRoute.html)的change事件增加index_original原始[index](http://mars3d.cn/api/index.html)返回值（示例：[FixedRoute 固定轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/fixedRoute)）[#I9B880](https://gitee.com/marsgis/mars3d/issues/I9B880)
- [GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)矢量图层聚合增加clustering.minChanged参数（示例：[对象聚合](http://mars3d.cn/editor-vue.html?id=layer-graphic/fun/clustering)）
- mars3d-cesium库升级到[v1.116](https://github.com/CesiumGS/cesium/releases/tag/1.116)

#### 修复 🐞
- 修复zoom控件缩放时[DivGraphic](http://mars3d.cn/api/DivGraphic.html)未重新渲染的问题
- 修复[Mask](http://mars3d.cn/api/Mask.html)遮盖对象无法直接构造使用的问题
- 修复矢量图层clear后聚合失效的问题
- 修复TdtPOI.getAddress方法失效的问题
- 修复RadarWave材质透明度无效的问题
- 修复POI矩形和多边形查询无结果的问题

## 3.7.7 - 2024-3-19
#### 优化 💪
- [I3SLayer](http://mars3d.cn/api/I3SLayer.html)增加position、rotation、scale等参数
- [Compass](http://mars3d.cn/api/Compass.html)控件增加clickToNorth参数
- [HeightTriangleMeasure](http://mars3d.cn/api/HeightTriangleMeasure.html)三角测量结果增加角度值
- [DoubleSidedPlane](http://mars3d.cn/api/DoubleSidedPlane.html)支持穿透显示对面的其他矢量对象
- [Animation](http://mars3d.cn/api/Animation.html)控件存在时[Timeline](http://mars3d.cn/api/Timeline.html)自动避让
- [Shadows](http://mars3d.cn/api/Shadows.html) 增加darkness参数

#### 修复 🐞
- 修复[Mask](http://mars3d.cn/api/Mask.html)遮盖边线多面时未显示的问题
- 修复多个[Map](http://mars3d.cn/api/Map.html)或分屏对比时[TilesetClip](http://mars3d.cn/api/TilesetClip.html)等对象移除报错
- 修复[RectangleCombine](http://mars3d.cn/api/RectangleCombine.html)的outline效果不是4个边线点的问题
- 修复[ParticleSystem](http://mars3d.cn/api/ParticleSystem.html)的[setStyle](http://mars3d.cn/api/ParticleSystem.html#setStyle)更新image无效的问题
- 修复模型编辑toJSON未导出id等参数的问题
- 修复[ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)的[setStyle](http://mars3d.cn/api/ModelPrimitive.html#setStyle)无法修改模型动画参数的问题

## 3.7.6 - 2024-3-11
#### 优化 💪
- PolyGradient材质增加isInner参数
- RainEffect增加maxHeight参数（示例：[雨天气](http://mars3d.cn/editor-vue.html?id=effect/rain)）
- [ArcGisTileLayer](http://mars3d.cn/api/ArcGisTileLayer.html)增加token参数
- [MapVLayer](http://mars3d.cn/api/MapVLayer.html)图层增加聚合点的支持
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)增加ionAccessToken、ionServer参数

#### 修复 🐞
- 修复v3.7.4产生的[Tooltip](http://mars3d.cn/api/Tooltip.html)的offsetX、offsetY参数无效问题
- 修复[RectangleEntity](http://mars3d.cn/api/RectangleEntity.html)的[setCallbackPositions](http://mars3d.cn/api/RectangleEntity.html#setCallbackPositions)方法无效的问题
- 修复[VolumeDepthMeasure](http://mars3d.cn/api/VolumeDepthMeasure.html)移除时附加对象未清除干净的问题
- 修复[ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)的[setStyle](http://mars3d.cn/api/ModelPrimitive.html#setStyle)方法更新runAnimations无效的问题

## 3.7.5 - 2024-3-5
#### 新增 🌟
- 新增[CubeView](http://mars3d.cn/api/CubeView.html)立方体视图控件

#### 优化 💪
- [Map](http://mars3d.cn/api/Map.html)增加backgroundImage、backgroundType参数，并自动处理互斥关系
- 矢量数据高亮highlight参数增加enabled子参数，可以进行启用的控制
- [HomeButton](http://mars3d.cn/api/HomeButton.html)、[FullscreenButton](http://mars3d.cn/api/FullscreenButton.html)、[NavigationHelpButton](http://mars3d.cn/api/NavigationHelpButton.html)控件增加icon参数
- [GroundSkyBox](http://mars3d.cn/api/GroundSkyBox.html)增加maxHeight参数
- 所有highlight相关类中增加highlight.enabled子参数
- map的scene构造参数增加backgroundType、backgroundImage并自动处理了互斥关系
- 优化map.getCurrentOptions方法导出相关参数
- mars3d-cesium库升级到[v1.114](https://github.com/CesiumGS/cesium/releases/tag/1.114)

#### 修复 🐞
- 修复BloomTargetEffect造成地球背景图片消失的问题
- 修复[Route](http://mars3d.cn/api/Route.html)的[Popup](http://mars3d.cn/api/Popup.html)关闭后无法打开的问题

## 3.7.4 - 2024-2-22
#### 优化 💪
- [Tooltip](http://mars3d.cn/api/Tooltip.html)的显示方向自适应
- [TerrainLayer](http://mars3d.cn/api/TerrainLayer.html)增加terrainType参数，优化参数结构
- 线面矢量对象编辑增加hasMidPoint参数，控制是否显示中间点
- [GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)图层mask支持全球遮掩（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）

#### 修复 🐞
- 修复[PolygonPrimitive](http://mars3d.cn/api/PolygonPrimitive.html)对象配置`outline: true, outlineWidth: 1`时面的渲染颜色有问题
- 修复[GroupGraphic](http://mars3d.cn/api/GroupGraphic.html)对象内的矢量数据无法交互的问题
- 修复[PointPrimitive](http://mars3d.cn/api/PointPrimitive.html)的[setStyle](http://mars3d.cn/api/PointPrimitive.html#setStyle)修改时pixelSize被重置为默认值的问题
- 修复[CircleEntity.isInPoly](http://mars3d.cn/api/CircleEntity.html#isInPoly)判断未排除高度值影响的问题

#### 弃用 & API重构 🔒
- 矢量数据关联的popup实时更新事件由postRender更名为popupRender

## 3.7.3 - 2024-2-5
#### 重要说明 📣
- 矢量数据的clampToGround: true属性将同时支持贴模型和地形，HeightReference属性可单独设置贴模型或贴地形
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)模型图层默认不允许鼠标穿透，增加disableCollision参数设置是否允许相机进入模型的内部或下方。

#### 新增 🌟
- 增加 [TilesetColorCorrection](http://mars3d.cn/api/TilesetColorCorrection.html) 模型单独颜色校正对象
- [Map](http://mars3d.cn/api/Map.html)、[TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)类增加getHeight贴地高度计算方法

#### 优化 💪
- 重写[PointUtil.getHeight](http://mars3d.cn/api/PointUtil.html#.getHeight)、[PointUtil.getSurfacePosition](http://mars3d.cn/api/PointUtil.html#.getSurfacePosition)方法，相关参数有调整
- 矢量图层聚合图标回调增加相关对象的返回，并优化示例支持大数据异步生成
- mars3d-cesium库升级到[v1.114](https://github.com/CesiumGS/cesium/releases/tag/1.114)

## 3.7.2 - 2024-1-29
#### 优化 💪
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html)增加[addClass](http://mars3d.cn/api/DivGraphic.html#addClass)、[removeClass](http://mars3d.cn/api/DivGraphic.html#removeClass)方法（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）
- 增加[PolyUtil.getMapExtentPositions](http://mars3d.cn/api/PolyUtil.html#.getMapExtentPositions)方法，并重写优化map.getExtent方法

#### 修复 🐞
- 修复Combine合并渲染矢量对象的附加label只能加一个的问题[#I8YTK1](https://gitee.com/marsgis/mars3d/issues/I8YTK1)

## 3.7.1 - 2024-1-22
#### 优化 💪
- WMS图层、ArcGIS瓦片图层支持在clampToTileset贴模型时的单击拾取事件（示例：[WMS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wms)）
- [ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)增加[startFlicker](http://mars3d.cn/api/ModelPrimitive.html#startFlicker)、[stopFlicker](http://mars3d.cn/api/ModelPrimitive.html#stopFlicker)方法
- [GraticuleLayer](http://mars3d.cn/api/GraticuleLayer.html)增加[steps](http://mars3d.cn/api/GraticuleLayer.html#steps)属性，并支持通过[setOptions](http://mars3d.cn/api/GraticuleLayer.html#setOptions)更新[steps](http://mars3d.cn/api/GraticuleLayer.html#steps)

#### 修复 🐞
- 修复[Map](http://mars3d.cn/api/Map.html)配置terrainProviderViewModels: []时控件提示undefined的问题[#I8XEY4](https://gitee.com/marsgis/mars3d/issues/I8XEY4)
- 修复LineFlow材质color被错误转换的问题，改为原样传入

## 3.7.0 - 2024-1-15
#### 新增 🌟
- 新增标绘顶点吸附功能，通过map.onlyVertexPosition开启关闭
- 新增[DivPlane](http://mars3d.cn/api/DivPlane.html)、[JammingRadar](http://mars3d.cn/api/JammingRadar.html)、[FixedJammingRadar](http://mars3d.cn/api/FixedJammingRadar.html)矢量对象（示例：[自定义干扰雷达](http://mars3d.cn/editor-vue.html?id=graphic/space/jammingRadar)）
- 新增DivIndicator固定指向且可拖动面板的DIV示例

#### 优化 💪
- mars3d-cesium库升级到[v1.113](https://github.com/CesiumGS/cesium/releases/tag/1.113)
- primitive增加zIndex参数和属性
- entity.startFlicker方法增加step参数
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)增加assetId参数
- [GroupLayer](http://mars3d.cn/api/GroupLayer.html)的layers参数支持图层对象传入
- [TerrainClip](http://mars3d.cn/api/TerrainClip.html)的开挖对象取区域内最低点高度为开挖高度的相对0米
- [TilesetClip](http://mars3d.cn/api/TilesetClip.html)增加[clipOutSide](http://mars3d.cn/api/TilesetClip.html#clipOutSide)参数和属性（示例：[模型裁剪](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetClip)）
- 聚合点增加clampToTileset参数

#### 修复 🐞
- 修复Combine合并渲染矢量对象label文本的单击事件未正常拾取attr的问题

#### 弃用 & API重构 🔒
- [TilesetPlanClip](http://mars3d.cn/api/TilesetPlanClip.html)类[type](http://mars3d.cn/api/TilesetPlanClip.html#type)参数更名为[clipType](http://mars3d.cn/api/TilesetPlanClip.html#clipType)
- [KeyboardRoam](http://mars3d.cn/api/KeyboardRoam.html)的[minPitch](http://mars3d.cn/api/KeyboardRoam.html#minPitch)、[maxPitch](http://mars3d.cn/api/KeyboardRoam.html#maxPitch)参数改为度数值（示例：[键盘漫游](http://mars3d.cn/editor-vue.html?id=thing/camera/keyboardRoam)）
- 移除部分对V3.4之前相关老版本SDK的内部兼容参数写法，提高代码效率

---
## 3.6.18 - 2023-12-31
#### 优化 💪
- [PolygonCombine](http://mars3d.cn/api/PolygonCombine.html)挖洞面支持Cartesian3和[LngLatPoint](http://mars3d.cn/api/LngLatPoint.html)格式坐标
- [Video3D](http://mars3d.cn/api/Video3D.html) 初始化[options](http://mars3d.cn/api/Video3D.html#options)参数增加[play](http://mars3d.cn/api/Video3D.html#play)是否播放
- 线面对象绘制时支持updateDrawPosition参数，自定义控制修改绘制的坐标

#### 修复 🐞
- 修复[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)在show:false时使用[BillboardPrimitive](http://mars3d.cn/api/BillboardPrimitive.html)聚合未隐藏的问题[#I8QB9I](https://gitee.com/marsgis/mars3d/issues/I8QB9I)
- 修复[BusineDataLayer](http://mars3d.cn/api/BusineDataLayer.html)类传data且开启聚合时未聚合的问题[#I8Q6DT](https://gitee.com/marsgis/mars3d/issues/I8Q6DT)
- 修复v3.6.14增加编辑点矢量对象类型和样式功能后带来的编辑点异常问题

## 3.6.17 - 2023-12-19
#### 修复 🐞
- 修复lod、wfs图层部分情况下未加载、需要动一下视角才加载的问题[#I8NO0L](https://gitee.com/marsgis/mars3d/issues/I8NO0L)
- 修复[ConeTrack](http://mars3d.cn/api/ConeTrack.html)类修改位置后不显示的问题[#I8OS1G](https://gitee.com/marsgis/mars3d/issues/I8OS1G)
- 优化天地图地形计算贴地高度时的报错
- 修复clampToTileset瓦片图层数量大于16个时贴模型报错
- 修复[Water](http://mars3d.cn/api/Water.html)、[Route](http://mars3d.cn/api/Route.html)对象availability无效的问题

## 3.6.16 - 2023-12-12
#### 新增 🌟
- 新增ThingType、[ThingUtil](http://mars3d.cn/api/ThingUtil.html)类
- map增加thing参数，支持地形压平等thing对象通过参数初始化传入（示例：[地形压平](http://mars3d.cn/editor-vue.html?id=thing/terrain/terrainFlat)）

#### 优化 💪
- measure.point增加popup自定义回调参数[#I8MKV3](https://gitee.com/marsgis/mars3d/issues/I8MKV3)
- entity.startFlicker方法的color默认值改为自身颜色
- [TdtLayer](http://mars3d.cn/api/TdtLayer.html)图层增加url配置服务前缀

#### 修复 🐞
- 修复[Route](http://mars3d.cn/api/Route.html)、[FixedRoute](http://mars3d.cn/api/FixedRoute.html)默认show:false时更新show=true无效的问题
- 修复[MapboxLayer](http://mars3d.cn/api/MapboxLayer.html)的scaleFactor参数无效的问题

## 3.6.15 - 2023-12-5
#### 优化 💪
- SnowEffect增加scale粒子大小参数（示例：[雪天气](http://mars3d.cn/editor-vue.html?id=effect/snow)）
- mars3d-cesium库升级到[v1.112](https://github.com/CesiumGS/cesium/releases/tag/1.112)

#### 修复 🐞
- 修复SnowCoverEffect初始化enabled:false时更新为true无效的问题

## 3.6.14 - 2023-11-27
#### 新增 🌟
- 新增EditPointType类，[DrawUtil](http://mars3d.cn/api/DrawUtil.html)类新增[setEditPointStyle](http://mars3d.cn/api/DrawUtil.html#.setEditPointStyle)、[setAllEditPointStyle](http://mars3d.cn/api/DrawUtil.html#.setAllEditPointStyle)方法，支持自定义每种编辑点的矢量对象类型和样式

#### 优化 💪
- [GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)增加drawAddEventType，绘制时增加点的事件参数
- [CzmGeoJsonLayer](http://mars3d.cn/api/CzmGeoJsonLayer.html)的[flyTo](http://mars3d.cn/api/CzmGeoJsonLayer.html#flyTo)方法改为一致的定位机制（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）

#### 修复 🐞
- 修复[TdtDmLayer](http://mars3d.cn/api/TdtDmLayer.html)的[show](http://mars3d.cn/api/TdtDmLayer.html#show):false未生效的问题[#I8IKIN](https://gitee.com/marsgis/mars3d/issues/I8IKIN)
- 修复[Satellite.setStyle](http://mars3d.cn/api/Satellite.html)方法更新cone无效的问题
- 修复[Regular.setStyle](http://mars3d.cn/api/Regular.html#setStyle)更新border无效的问题
- 修复[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)再次[remove](http://mars3d.cn/api/GraphicLayer.html#remove)时聚合未销毁的问题

#### 弃用 & API重构 🔒
- 重构[DrawUtil](http://mars3d.cn/api/DrawUtil.html)类，移除setPointStyle等方法[#I8J3D9](https://gitee.com/marsgis/mars3d/issues/I8J3D9)

## 3.6.13 - 2023-11-21
#### 优化 💪
- [GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)、[WfsLayer](http://mars3d.cn/api/WfsLayer.html)等图层增加simplify参数（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- 整理矢量对象的setHeight、addHeight参数代码，修复部分情况下重复addHeight或未addHeight的问题
- 优化[TilesetClip](http://mars3d.cn/api/TilesetClip.html?classFilter=Tileset)、[TilesetFlat](http://mars3d.cn/api/TilesetFlat.html?classFilter=Tileset)、[TilesetFlood](http://mars3d.cn/api/TilesetFlood.html?classFilter=Tileset)的模型压平、裁剪、淹没，支持部分特殊模型（示例：[模型淹没分析](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetFlood)）
- [GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)增加drawAddEventType绘制参数

#### 修复 🐞
- 修复[FixedRoute](http://mars3d.cn/api/FixedRoute.html)的[info](http://mars3d.cn/api/FixedRoute.html#info)记录中飞行前second已飞行时间值不对的问题
- 修复多环面对象导出GeoJSON格式有误的问题[#I8GUAL](https://gitee.com/marsgis/mars3d/issues/I8GUAL)
- 修复[KmlLayer.setOptions](http://mars3d.cn/api/KmlLayer.html#setOptions)方法修改symbol无效的问题[#I8GL4C](https://gitee.com/marsgis/mars3d/issues/I8GL4C)
- 修复[ModelEntity.setStyle](http://mars3d.cn/api/ModelEntity.html#setStyle)方法修改distanceDisplayBillboard无效的问题[#I8GB8S](https://gitee.com/marsgis/mars3d/issues/I8GB8S)
- 修复[Regular](http://mars3d.cn/api/Regular.html)使用[setStyle](http://mars3d.cn/api/Regular.html#setStyle)修改边框数量不生效的问题[#I8HRH5](https://gitee.com/marsgis/mars3d/issues/I8HRH5)

## 3.6.12 - 2023-11-13
#### 新增 🌟
- 新增[ColorCorrectionEffect 颜色校正](http://mars3d.cn/editor-vue.html?id=effect/colorCorrection)特效
- Effect相关类增加[availability](http://mars3d.cn/api/BaseEffect.html?classFilter=Effect#availability)属性
- Layer相关类增加[availability](http://mars3d.cn/api/BaseLayer.html?classFilter=Layer#availability)属性

#### 优化 💪
- 点状Entity对象在[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)的[drawEndEventType](http://mars3d.cn/api/GraphicLayer.html)参数下支持右键结束标绘[#I8EULQ](https://gitee.com/marsgis/mars3d/issues/I8EULQ)
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)增加scaleX、scaleY、scaleZ参数[#I8F5ZG](https://gitee.com/marsgis/mars3d/issues/I8F5ZG)

#### 修复 🐞
- 修复矢量对象在randomColor随机色时，高亮每次会变动颜色[#I8ES0G](https://gitee.com/marsgis/mars3d/issues/I8ES0G)
- 修复内置文字处理未支持多语言的问题[#I8F7WI](https://gitee.com/marsgis/mars3d/issues/I8F7WI)

## 3.6.11 - 2023-11-3
#### 新增 🌟
- 新增[LineCross](http://mars3d.cn/editor-vue.html?id=graphic/entity/circle)十字形间隔线材质
- [Water](http://mars3d.cn/api/Water.html?classFilter=Water)、[PolygonPrimitive](http://mars3d.cn/api/PolygonPrimitive.html?classFilter=PolygonPrimitive)等对象增加offsetHeight平移指定偏移高度参数
- [WaterCombine](http://mars3d.cn/api/WaterCombine.html?classFilter=WaterCombine)、[PolygonCombine](http://mars3d.cn/api/PolygonCombine.html?classFilter=PolygonCombine)等对象增加offsetHeight属性和setOffsetHeight方法
- [TilesetClip](http://mars3d.cn/api/TilesetClip.html?classFilter=Tileset)、[TilesetFlat](http://mars3d.cn/api/TilesetFlat.html?classFilter=Tileset)、[TilesetFlood](http://mars3d.cn/api/TilesetFlood.html?classFilter=Tileset)模型压平、裁剪、淹没 增加precise参数，支持掩膜模式压平裁剪，支持大量数据（示例：[模型淹没分析](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetFlood)）

#### 优化 💪
- [ImageLayer](http://mars3d.cn/api/ImageLayer.html?classFilter=ImageLayer)增加加载完成回调
- mars3d-cesium库升级到[v1.111](https://github.com/CesiumGS/cesium/releases/tag/1.111)

#### 修复 🐞
- 修复导航球控件提示文本未支持多语言的问题[#I8AZGV](https://gitee.com/marsgis/mars3d/issues/I8AZGV)
- 修复[CircleEntity](http://mars3d.cn/api/CircleEntity.html)编辑时“半径”文本未支持多语言的问题[#I8AN02](https://gitee.com/marsgis/mars3d/issues/I8AN02)
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=DivGraphic)在存在视距缩放属性时位置不对的问题[#I8C2WE](https://gitee.com/marsgis/mars3d/issues/I8C2WE)
- 修复矢量数据编辑时，2D模式下拖拽高度点遮挡了移动位置点
- 修复地形抬升中国大区域时边缘区域存在偏移情况[#I88RBC](https://gitee.com/marsgis/mars3d/issues/I88RBC)
- 修复内置文字处理未支持多语言的问题[#I8AZGV](https://gitee.com/marsgis/mars3d/issues/I8AZGV)

#### 弃用 & API重构 🔒
- [DynamicRiver](http://mars3d.cn/api/DynamicRiver.html)的offsetHeight方法改名为setOffsetHeight
- [Video2D](http://mars3d.cn/api/Video2D.html)、[Video3D](http://mars3d.cn/api/Video3D.html)、[ViewShed](http://mars3d.cn/api/ViewShed.html)、[ConeVisibility](http://mars3d.cn/api/ConeVisibility.html)、[SpotLight](http://mars3d.cn/api/SpotLight.html)的heading由原来正北为0度，改为正东为0度（示例：[视频2D投射](http://mars3d.cn/editor-vue.html?id=graphic/video/video2D)）

## 3.6.10 - 2023-10-23
#### 新增 🌟
- 所有combine类型Primitive大数据对象增加style.label参数

#### 优化 💪
- [ToolButton](http://mars3d.cn/api/ToolButton.html?classFilter=ToolButton)的title参数支持function回调方法
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html?classFilter=TilesetLayer)的marsJzwStyle支持object类型参数，可传入内置shader的3个高度变量
- [TdtDmLayer](http://mars3d.cn/api/TdtDmLayer.html?classFilter=TdtDmLayer)暴露label等参数

#### 修复 🐞
- v3.6.9产生的[DoubleSidedPlane](http://mars3d.cn/api/DoubleSidedPlane.html)、[TextMaterial](http://mars3d.cn/api/TextMaterial.html)材质报错
- 修复[ContourLine](http://mars3d.cn/api/ContourLine.html)在[remove](http://mars3d.cn/api/ContourLine.html#remove)时未清除，变为全球等高线[#I88ZB7](https://gitee.com/marsgis/mars3d/issues/I88ZB7)

## 3.6.9 - 2023-10-17
#### 新增 🌟
- primitive矢量数据增加[readyPromise](http://mars3d.cn/api/BasePrimitive.html?classFilter=basep#readyPromise)属性

#### 优化 💪
- 重新设计了[lang](http://mars3d.cn/editor-vue.html?id=map/options/lang)多语言相关，支持自定义多语言
- [control](http://mars3d.cn/api/BaseControl.html?classFilter=control)控件类insertBefore参数支持配置div的id
- [Image2](http://mars3d.cn/api/Image2MaterialProperty.html?classFilter=Image2)材质增加repeat参数
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=DivGraphic)的pointerEvents参数优先级改为最高（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）

#### 修复 🐞
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)的[setStyle](http://mars3d.cn/api/DivGraphic.html#setStyle)方法更新[clampToGround](http://mars3d.cn/api/DivGraphic.html#clampToGround)时，高度未贴地[#I87I8L](https://gitee.com/marsgis/mars3d/issues/I87I8L)
- v3.6.8产生的toJSON、toGeoJSON方法错误
- 修复[CircleEntity](http://mars3d.cn/api/CircleEntity.html)的[height](http://mars3d.cn/api/CircleEntity.html#height)高度失效的问题
- 修复[TdtLayer](http://mars3d.cn/api/TdtLayer.html)的chinaCRS未生效的问题
- 修复geojson数据导入时MultiPolygon对象的id重复后报错

#### 弃用 & API重构 🔒
- [lang](http://mars3d.cn/editor-vue.html?id=map/options/lang)相关重构，与之前不兼容，移除LangType、重构了Lang类和map.lang相关属性及方法
- [VolumeCloud](http://mars3d.cn/api/VolumeCloud.html)的steps更名为detail，并增加colors和steps参数（示例：[气象云三维体](http://mars3d.cn/editor-vue.html?id=graphic/custom/volumeCloud)）

## 3.6.8 - 2023-10-9
#### 优化 💪
- 暴露mars3d.edit.*相关编辑类，方便外部继承使用
- 矢量数据toGeoJSON方法增加options的导入导出（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- 优化矢量数据availability属性相关
- [Map](http://mars3d.cn/api/Map.html)的terrain参数支持是否默认启用地形开挖、压平等配置
- mars3d-cesium库升级到[v1.110](https://github.com/CesiumGS/cesium/releases/tag/1.110) 【已知问题：[PolygonPrimitive](http://mars3d.cn/api/PolygonPrimitive.html)材质纹理默认值异常，v1.111.1已修复】

#### 修复 🐞
- 修复[FixedRoute](http://mars3d.cn/api/FixedRoute.html)在showStop:true，模型未展示[#I860EZ](https://gitee.com/marsgis/mars3d/issues/I860EZ)
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)的hasEditContextMenu属性无效的问题[#I850RG](https://gitee.com/marsgis/mars3d/issues/I850RG)
- 修复矢量图层clustering不支持setOptions更新的问题
- 修复[ArcGisLayer](http://mars3d.cn/api/ArcGisLayer.html)的[flyTo](http://mars3d.cn/api/ArcGisLayer.html#flyTo)属性失效的问题[#I85S1D](https://gitee.com/marsgis/mars3d/issues/I85S1D)

## 3.6.7 - 2023-9-25
#### 优化 💪
- 增加pixelOffsetScaleByDistance参数的导入导出json支持
- SmallTooltip在空文本时不展示

#### 修复 🐞
- 修复[WMTS图层](http://mars3d.cn/api/WmtsLayer.html)的subdomain参数存在时取配置信息出错
- 修复[PolyUtil.computeSurfacePoints](http://mars3d.cn/api/PolyUtil.html?classFilter=Util#.computeSurfacePoints)计算时点数量不变

## 3.6.6 - 2023-9-18
#### 新增 🌟
- 新增[BrushLineEntity](http://mars3d.cn/api/BrushLineEntity.html?classFilter=BrushLineEntity)自由绘制线对象
- 新增[GroupGraphic](http://mars3d.cn/api/GroupGraphic.html?classFilter=GroupGraphic)矢量数据组对象

#### 优化 💪
- [BillboardEntity](http://mars3d.cn/api/BillboardEntity.html?classFilter=BillboardEntity)增加distanceDisplayPoint等参数
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html?classFilter=TilesetLayer)增加editUpAxis轴标识参数

#### 修复 🐞
- 解决v3.6.5产生的[FixedRoute](http://mars3d.cn/api/FixedRoute.html)停止时的[Popup](http://mars3d.cn/api/Popup.html)移动问题
- 修复量算对象show改变时label未同步显示隐藏

#### 弃用 & API重构 🔒
- 更新部分3dtiles模型在线数据，如果有偏差需要参考最新示例更改postion参数

## 3.6.5 - 2023-9-11
#### 新增 🌟
- xyz图层url中增加scale、origin模版（用于使用超图的瓦片底图服务）（示例：[标准XYZ金字塔瓦片](http://mars3d.cn/editor-vue.html?id=layer-tile/type/xyz)）

#### 优化 💪
- 优化地形开挖、抬升等地形编辑相关功能效率（需要升级mars3d-cesium到1.109.1）
- [ReflectionWater](http://mars3d.cn/api/ReflectionWater.html)对象增加animationSpeed、specularIntensity参数（示例：[水面](http://mars3d.cn/editor-vue.html?id=graphic/primitive/water)）

#### 修复 🐞
- 修复[Route](http://mars3d.cn/api/Route.html)的[Popup](http://mars3d.cn/api/Popup.html)弹窗视角很近时卡顿的问题
- 修复矢量对象在closeLast=false时closeHighlight无效的问题[#I7ZE7Q](https://gitee.com/marsgis/mars3d/issues/I7ZE7Q)
- 修复[PointPrimitive](http://mars3d.cn/api/PointPrimitive.html)在[setStyle](http://mars3d.cn/api/PointPrimitive.html#setStyle)时改变了贴地高度[#I7ZAOC](https://gitee.com/marsgis/mars3d/issues/I7ZAOC)
- 修复wms等图层click时发送多次query请求
- 修复[Measure](http://mars3d.cn/api/Measure.html)在[setOptions](http://mars3d.cn/api/Measure.html#setOptions)赋值未更新到内部矢量图层[#I7ZOQV](https://gitee.com/marsgis/mars3d/issues/I7ZOQV)

## 3.6.4 - 2023-9-5
#### 优化 💪
- `SnowEffect`增加maxHeight参数（示例：[雪天气](http://mars3d.cn/editor-vue.html?id=effect/snow)）
- [LocationBar](http://mars3d.cn/api/LocationBar.html?classFilter=LocationBar)的fps改为模版配置，并可从locationData取fps值
- mars3d-cesium库升级到[v1.109](https://github.com/CesiumGS/cesium/releases/tag/1.109)无法跨域引入cdn版本Cesium v1.109,需要本地引入（v1.110版本已解决）。

#### 修复 🐞
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)图层允许编辑时未自动处理[pointerEvents](http://mars3d.cn/api/DivGraphic.html#pointerEvents)
- 修复[DivLightPoint](http://mars3d.cn/api/DivLightPoint.html)传[setStyle](http://mars3d.cn/api/DivLightPoint.html#setStyle)方法传[html](http://mars3d.cn/api/DivLightPoint.html#html)时造成color参数无效的问题
- 优化v3.6.3增加的availability相关支持

## 3.6.3 - 2023-8-29
#### 新增 🌟
- 对大部分矢量数据增加availability时序显示控制参数和属性
- 增加mars3d.PointUtil.[getPropertyIndex](http://mars3d.cn/api/PointUtil.html#.getPropertyIndex)方法

#### 优化 💪
- [Compass](http://mars3d.cn/api/Compass.html)双击事件定位视角改为目标中心点不动
- [ContourLine](http://mars3d.cn/api/ContourLine.html?classFilter=ContourLine)增加minHeight、maxHeight属性，可动态更改（示例：[等高线](http://mars3d.cn/editor-vue.html?id=thing/terrain/contourLine)）

#### 修复 🐞
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)开始绘制时就取消绘制触发了完成回调
- 修复[RotatePoint](http://mars3d.cn/api/RotatePoint.html)在部分视角下报错

## 3.6.2 - 2023-8-21
#### 修复 🐞
- 修复cesium原生相关控件的enabled参数未生效的问题
- 修复矢量数据highlight配置更新label时未生效的问题
- 修复Primitive聚合时切换show状态无效的问题[#I7UMFQ](https://gitee.com/marsgis/mars3d/issues/I7UMFQ)

## 3.6.1 - 2023-8-14
#### 新增 🌟
- 增加 [ColorRamp](http://mars3d.cn/api/ColorRamp.html) 色带类

#### 优化 💪
- [Map](http://mars3d.cn/api/Map.html)增加isInView方法
- [CanvasWindLayer](http://mars3d.cn/api/CanvasWindLayer.html?classFilter=CanvasWindLayer)增加colors根据风速渲染不同颜色
- [Timeline](http://mars3d.cn/api/Timeline.html?classFilter=Timeline)增加zoom是否可以缩放参数
- [PolylineCombine](http://mars3d.cn/api/PolylineCombine.html?classFilter=PolylineCombine)等合并渲染对象支持openPopup方法
- [ModelEntity](http://mars3d.cn/api/ModelEntity.html?classFilter=ModelEntity)的moveTo方法增加orientation参数
- [GaodeRoute](http://mars3d.cn/api/ModelEntity.html?classFilter=ModelEntity)更新高德服务api至v5（示例：[Route实时轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/route)）

#### 修复 🐞
- 修复[Route](http://mars3d.cn/api/Route.html)、[FixedRoute](http://mars3d.cn/api/FixedRoute.html)的change事件未在图层上抛出
- 修复[DistanceMeasure](http://mars3d.cn/api/DistanceMeasure.html)的更新坐标为空时，[label](http://mars3d.cn/api/DistanceMeasure.html#label)未清除
- 修复瓦片图层未加载完成时reload后无法移除[#I7RE9N](https://gitee.com/marsgis/mars3d/issues/I7RE9N)
- 修复GaodeRoute骑行路径查询无效的问题[#I7RU3Q](https://gitee.com/marsgis/mars3d/issues/I7RU3Q)

## 3.6.0 - 2023-8-4
#### 新增 🌟
- 新增[PointLight点光源](http://mars3d.cn/editor-vue.html?id=graphic/custom/pointLight)、[SpotLight聚光灯](http://mars3d.cn/editor-vue.html?id=graphic/custom/spotLight)、[VolumeCloud气象云三维体](http://mars3d.cn/editor-vue.html?id=graphic/custom/volumeCloud)、[PointVisibility](http://mars3d.cn/editor-vue.html?id=graphic/custom/visibility)等矢量对象
- 新增[TilesetShake地震模拟](http://mars3d.cn/editor-vue.html?id=thing/tileset/shake)、[ViewDome开敞度分析](http://mars3d.cn/editor-vue.html?id=graphic/custom/viewDome)、[SkylineBody天际线体](http://mars3d.cn/editor-vue.html?id=graphic/custom/skylineBody)等模型相关分析
- 新增对[BillboardPrimitive](http://mars3d.cn/api/BillboardPrimitive.html?classFilter=BillboardPrimitive)、[PointPrimitive](http://mars3d.cn/api/PointPrimitive.html?classFilter=PointPrimitive)、[LabelPrimitive](http://mars3d.cn/api/LabelPrimitive.html?classFilter=LabelPrimitive)对象的聚合支持
- 瓦片图层新增clampToTileset贴模型功能

#### 优化 💪
- 重写[TerrainClip](http://mars3d.cn/api/TerrainClip.html?classFilter=TerrainClip)、[FloodByMaterial](http://mars3d.cn/api/FloodByMaterial.html?classFilter=FloodByMaterial)、[ContourLine](http://mars3d.cn/api/ContourLine.html?classFilter=ContourLine)地形相关分析类（示例：[等高线](http://mars3d.cn/editor-vue.html?id=thing/terrain/contourLine)）
- mars3d-cesium库升级到[v1.108](https://github.com/CesiumGS/cesium/releases/tag/1.108)

#### 弃用 & API重构 🔒
- 弃用mars3d-widget插件，原生JS技术栈下项目中直接改为使用源码(es5-widget.js)
- 弃用mars3d-supermap插件，正式放弃对不支持webgl2的超图S3M图层等功能的支持

---
## 3.5.18 - 2023-7-31
#### 优化 💪
- [ClockAnimate](http://mars3d.cn/api/ClockAnimate.html)与[DistanceLegend](http://mars3d.cn/api/DistanceLegend.html)或[Timeline](http://mars3d.cn/api/Timeline.html)同时存在时的css自动处理改为兼容外部参数
- [Route](http://mars3d.cn/api/Route.html)的change事件的优化（示例：[Route实时轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/route)）

#### 修复 🐞
- 修复[Map](http://mars3d.cn/api/Map.html)的terrainLoadSuccess事件未触发

## 3.5.17 - 2023-7-24
#### 优化 💪
- [Compass](http://mars3d.cn/api/Compass.html)增加最大最小俯仰角参数
- [MapSplit](http://mars3d.cn/api/MapSplit.html)图层自动置顶

#### 修复 🐞
- 修复[Route](http://mars3d.cn/api/Route.html)路线[polyline](http://mars3d.cn/api/Route.html#polyline)存在路线异常情况
- 修复[TextMaterialProperty](http://mars3d.cn/api/TextMaterialProperty.html)存在颜色叠加异常

## 3.5.16 - 2023-7-17
#### 修复 🐞
- 地形开挖、压平、抬升的addArea方法增加simplify参数
- 修复[Timeline.zoomTo](http://mars3d.cn/api/Timeline.html#zoomTo)初始化未生效的问题
- 修复[Route](http://mars3d.cn/api/Route.html)的endItem事件触发的点位顺序不对的问题
- 修复[ModelEntity](http://mars3d.cn/api/ModelEntity.html)标绘时初始角度无效的问题

## 3.5.15 - 2023-7-10
#### 优化 💪
- [Animation](http://mars3d.cn/api/Animation.html)控件增加ticks参数
- [Pit](http://mars3d.cn/api/Pit.html)的围合墙部分改为普通wall（示例：[墙](http://mars3d.cn/editor-vue.html?id=graphic/entity/wall)）
- 优化经纬网文本的展示
- 矢量线面对象在切换是否贴地时编辑点的更新处理
- [BingLayer](http://mars3d.cn/api/BingLayer.html)、[GeeLayer](http://mars3d.cn/api/GeeLayer.html)、IonLayer对[1.107](https://github.com/CesiumGS/cesium/releases/tag/1.107)版本的支持修复
- mars3d-cesium库升级到[v1.107](https://github.com/CesiumGS/cesium/releases/tag/1.107)

#### 修复 🐞
- 修复[PolylineEntity](http://mars3d.cn/api/PolylineEntity.html)编辑时外部赋值坐标位置未生效的问题
- 修复[ClockAnimate](http://mars3d.cn/api/ClockAnimate.html)控件对时钟开始停止操作[Timeline](http://mars3d.cn/api/Timeline.html)更新存在CSS偏移的问题

## 3.5.14 - 2023-7-3
#### 优化 💪
- [Video2D](http://mars3d.cn/api/Video2D.html)的编辑点优化（示例：[视频2D投射](http://mars3d.cn/editor-vue.html?id=graphic/video/video2D)）
- [QueryArcServer](http://mars3d.cn/api/QueryArcServer.html)的[query](http://mars3d.cn/api/QueryArcServer.html#query)方法增加parameters参数

#### 修复 🐞
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)在二三维切换时位置未刷新
- 修复[PathEntity](http://mars3d.cn/api/PathEntity.html)在3个角度均传入时未固定
- 修复线面在clampToGround切换时编辑状态丢失的问题
- 修复贴地对象在移动时的问题
- 修复[Regular](http://mars3d.cn/api/Regular.html)、[Sector](http://mars3d.cn/api/Sector.html)对象toGeoJSON后无法重新加载
- 修复经纬网在180度时未正常显示

## 3.5.13 - 2023-6-26
#### 优化 💪
- 优化鼠标移动事件对FPS的影响
- [Video3D](http://mars3d.cn/api/Video3D.html)支持动态属性坐标

#### 修复 🐞
- 修复[MapSplit](http://mars3d.cn/api/MapSplit.html)控件拖动时处于鼠标右侧偏移的问题

## 3.5.12 - 2023-6-19
#### 优化 💪
- [Compass](http://mars3d.cn/api/Compass.html)控件兼容移动端交互操作
- 增加setLangText方法

#### 修复 🐞
- 修复[Satellite](http://mars3d.cn/api/Satellite.html)卫星轨道在二维模式下最后一个坐标显示异常
- 修复OutlineEffect与[Tetrahedron](http://mars3d.cn/api/Tetrahedron.html)同时存在时报错
- 修复贴模型计算贴地线时，offset偏移高度无效的问题

## 3.5.11 - 2023-6-12
#### 优化 💪
- [LabelPrimitive](http://mars3d.cn/api/LabelPrimitive.html)对象clampToGround贴地时，切换2D时的显示优化
- [PointPrimitive](http://mars3d.cn/api/PointPrimitive.html)支持clampToGround贴地属性
- mars3d-cesium库升级到[v1.106](https://github.com/CesiumGS/cesium/releases/tag/1.106)

#### 修复 🐞
- 修改v3.5.6产生的[DistanceSurfaceMeasure](http://mars3d.cn/api/DistanceSurfaceMeasure.html) 贴地长度量算异常
- 修复[TdtTerrainProvider](http://mars3d.cn/api/TdtTerrainProvider.html)天地图地形时的相关地形计算无效的问题
- 修复BaiduPOI等query对象的proxy属性无效的问题
- 修复[TerrainClip](http://mars3d.cn/api/TerrainClip.html)在[clipOutSide](http://mars3d.cn/api/TerrainClip.html#clipOutSide)外切时放大区域显示异常

## 3.5.10 - 2023-6-5
#### 新增 🌟
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)增加luminanceAtZenith亮度属性
- map增加pauseCameraViewList和proceedCameraViewList方法

#### 优化 💪
- [ImageLayer](http://mars3d.cn/api/ImageLayer.html)支持EPSG3857坐标系

#### 修复 🐞
- 修复v3.5.7产生的[ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)单击事件无效问题
- 修复[Route](http://mars3d.cn/api/Route.html)在时钟停止时未更新坐标位置
- 修复一些TS定义错误

## 3.5.9 - 2023-5-29
#### 新增 🌟
- [GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)矢量图层增加drawEndEventType参数，支持标绘自定义结束事件
- [Satellite](http://mars3d.cn/api/Satellite.html)支持通过标绘机制中设置样式等（示例：[卫星综合对象](http://mars3d.cn/editor-vue.html?id=graphic/space/satellite)）

#### 优化 💪
- [GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)图层data数据支持symbol设置

#### 修复 🐞
- 修改v3.5.6产生的量算问题
- 修复[Water](http://mars3d.cn/api/Water.html)的outline无效的问题
- 修复[BillboardEntity](http://mars3d.cn/api/BillboardEntity.html)的model中方向参数无效的问题

## 3.5.8 - 2023-5-23
#### 新增 🌟
- 增加[VideoPrimitive](http://mars3d.cn/api/VideoPrimitive.html)对象（示例：[视频材质(面状)](http://mars3d.cn/editor-vue.html?id=graphic/video/material)）

#### 优化 💪
- 重写[PolyUtil.centerOfMass](http://mars3d.cn/api/PolyUtil.html#.centerOfMass)取中心点算法

#### 修复 🐞
- 修复Polygon面编辑时positions坐标赋值无效的问题

## 3.5.7 - 2023-5-16
#### 优化 💪
- [Map](http://mars3d.cn/api/Map.html)增加changeBasemap事件
- 矢量数据增加hasEditContextMenu参数
- State增加ADD状态

#### 修复 🐞
- 修改v3.5.6产生的贴地面无法量算问题

#### 弃用 & API重构 🔒
- 为了兼容cesium的[1.104](https://github.com/CesiumGS/cesium/blob/1.104/CHANGES.md)公示的将在`1.107`弃用的api变更，SDK以下方法返回值改为async承诺：[createImageryProvider](http://mars3d.cn/api/LayerUtil.html#.createImageryProvider)、[createTerrainProvider](http://mars3d.cn/api/LayerUtil.html#.createTerrainProvider)等方法

## 3.5.6 - 2023-5-8
#### 优化 💪
- 矢量图层startDraw方法增加validDrawPosition外部自定义校验坐标参数
- 曲线增加sharpness参数

#### 修复 🐞
- 修复矢量图层zIndex参数在贴地线面图层间无效的问题
- 修复量算对象更新positions属性赋值未更新计算结果
- 更新Google瓦片图层服务地址
- 修复[TerrainClip](http://mars3d.cn/api/TerrainClip.html)对象

## 3.5.5 - 2023-5-4
#### 新增 🌟
- 日照分析增加阴影率分析

#### 优化 💪
- [BillboardPrimitive](http://mars3d.cn/api/BillboardPrimitive.html) 支持alignedAxis属性参数
- [Route](http://mars3d.cn/api/Route.html)、[FixedRoute](http://mars3d.cn/api/FixedRoute.html)增加autoMiddleDynamicPosition参数（示例：[FixedRoute 固定轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/fixedRoute)）
- 增加map.mouseEvent.pickImageryLayerFeatures方法，可以手动模拟了单击WMS等图层（示例：[WMS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wms)）
- mars3d-cesium库升级到[v1.105](https://github.com/CesiumGS/cesium/releases/tag/1.105)

## 3.5.4 - 2023-4-24
#### 新增 🌟
- [FrustumPrimitive](http://mars3d.cn/api/FrustumPrimitive.html)增加支持camera参数
- [TilesetPlanClip](http://mars3d.cn/api/TilesetPlanClip.html) 增加对平面的旋转角度属性

#### 优化 💪
- 重新了[TilesetClip](http://mars3d.cn/api/TilesetClip.html)、[TilesetFlat](http://mars3d.cn/api/TilesetFlat.html)类，恢复[TilesetFlood](http://mars3d.cn/api/TilesetFlood.html)类（示例：[模型淹没分析](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetFlood)）
- [Map](http://mars3d.cn/api/Map.html)参数中支持scene.skyBox传参

#### 修复 🐞
- 修复[EllipsoidEntity](http://mars3d.cn/api/EllipsoidEntity.html)导出geojson后再导入未显示扫描面
- 修复[PolygonEntity.setCallbackPositions](http://mars3d.cn/api/PolygonEntity.html#setCallbackPositions)方法兼容非笛卡尔坐标传参

#### 弃用 & API重构 🔒
- [TilesetFlat](http://mars3d.cn/api/TilesetFlat.html)中的flatHeight参数更名为 [editHeight](http://mars3d.cn/api/TilesetFlat.html#editHeight)（示例：[模型压平](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetFlat)）

## 3.5.3 - 2023-4-17
#### 优化 💪
- Control控件加click触发事件
- 矢量对象的distanceDisplayCondition_far参数默认值改为Number.MAX_VALUE
- 量算对象toJSON方法增加量算结果的导出
- mars3d-cesium库升级到[v1.104](https://github.com/CesiumGS/cesium/releases/tag/1.104)

#### 修复 🐞
- 修复GraphicType补充缺失的枚举项
- 修复[Map](http://mars3d.cn/api/Map.html)的control.terrainProviderViewModels参数失效的问题
- 修复[FixedRoute](http://mars3d.cn/api/FixedRoute.html)未[start](http://mars3d.cn/api/FixedRoute.html#start)前显示了[path](http://mars3d.cn/api/FixedRoute.html#path)
- 修复[BillboardEntity](http://mars3d.cn/api/BillboardEntity.html)的model未显示

## 3.5.2 - 2023-4-3
#### 优化 💪
- [PathEntity](http://mars3d.cn/api/PathEntity.html)的model增加mergeOrientation等参数（示例：[Path轨迹](http://mars3d.cn/editor-vue.html?id=graphic/entity/path)）

#### 修复 🐞
- v3.4.26产生的[ModelEntity](http://mars3d.cn/api/ModelEntity.html)的[label](http://mars3d.cn/api/ModelEntity.html#label)动态点时未同步移动
- 修复[Map](http://mars3d.cn/api/Map.html)切换[basemap](http://mars3d.cn/api/Map.html#basemap)时图层未自动置为最底层

#### 弃用 & API重构 🔒
- 移除 [Map](http://mars3d.cn/api/Map.html) 的mouse.transform参数，内部自动处理

## 3.5.1 - 2023-3-27
#### 优化 💪
- [OverviewMap](http://mars3d.cn/api/OverviewMap.html)鹰眼图增加[center](http://mars3d.cn/api/OverviewMap.html#center)属性和change事件等
- GraphicGroupLayer保存和读取geojson时记录图层id等属性（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- [MapboxLayer](http://mars3d.cn/api/MapboxLayer.html)图层增加token参数
- WMS、[ArcGisLayer](http://mars3d.cn/api/ArcGisLayer.html)图层增加featureIndex参数（示例：[WMS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wms)）
- 右键菜单相关event中增加graphic_parent返回值

#### 修复 🐞
- 修复map.getLayersByAttr方法返回值有重复值和空值
- 修复[Route](http://mars3d.cn/api/Route.html)的点在无坐标时间内未消失
- 修复[ViewShed](http://mars3d.cn/api/ViewShed.html)的[show](http://mars3d.cn/api/ViewShed.html#show)参数未生效的问题
- 修复[RectanglePrimitive](http://mars3d.cn/api/RectanglePrimitive.html)高度值未从坐标自动获取
- 修复[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)矢量图层[loadGeoJSON](http://mars3d.cn/api/GraphicLayer.html#loadGeoJSON)未读取其保存的[id](http://mars3d.cn/api/GraphicLayer.html#id)值

#### 弃用 & API重构 🔒
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html)去掉CSS属性：user-select: none（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）

## 3.5.0 - 2023-3-17
#### 重要说明 📣
- mars3d-cesium库升级到[v1.103](https://github.com/CesiumGS/cesium/releases/tag/1.103)
- 改用WebGL2进行渲染
- Cesium v1.97+ 采用了新的glTF架构代码重写，影响3dtiles部分功能无法使用和部分gltf/3dtiles数据报错

#### 新增 🌟
- 增加[TerrainUplift](http://mars3d.cn/api/TerrainUplift.html)地形抬升、[TerrainFlat](http://mars3d.cn/api/TerrainFlat.html)地形压平功能（示例：[地形压平](http://mars3d.cn/editor-vue.html?id=thing/terrain/terrainFlat)）
- 增加[PitEntity](http://mars3d.cn/api/PitEntity.html)、 [ThickWall](http://mars3d.cn/api/ThickWall.html)、 [DoubleSidedPlane](http://mars3d.cn/api/DoubleSidedPlane.html)、 [VolumeDepthMeasure](http://mars3d.cn/api/VolumeDepthMeasure.html)、 [ReflectionWater](http://mars3d.cn/api/ReflectionWater.html)等矢量对象（示例：[水面](http://mars3d.cn/editor-vue.html?id=graphic/primitive/water)）
- 增加[BaseLayerPicker](http://mars3d.cn/api/BaseLayerPicker.html)、[Animation](http://mars3d.cn/api/Animation.html)、[FullscreenButton](http://mars3d.cn/api/FullscreenButton.html)等11个Cesium原生控件的包装类，便于统一控制
- 重写[Satellite](http://mars3d.cn/api/Satellite.html)矢量对象（使用继承于[Route](http://mars3d.cn/api/Route.html)类的方式）（示例：[卫星综合对象](http://mars3d.cn/editor-vue.html?id=graphic/space/satellite)）
- 重写[TilesetClip](http://mars3d.cn/api/TilesetClip.html)、[TilesetFlat](http://mars3d.cn/api/TilesetFlat.html)类（仅支持Cesium v1.97+的新架构方式）（示例：[模型压平](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetFlat)）
- 增加LineThreeDash等矢量数据材质
- 增加 [I3SLayer](http://mars3d.cn/api/I3SLayer.html) 三维模型图层

#### 优化 💪
- `SnowCoverEffect`增加layer参数，可以对3dtiles模型单独生效

#### 弃用 & API重构 🔒
- Cesium v1.97+造成部分功能失效，已暂时移除：[TilesetFlood](http://mars3d.cn/api/TilesetFlood.html)、ModelCombine等类和部分示例
- Cesium v1.102+造成部分第3方插件webgl2不兼容，已暂时移除：超图S3M图层 等示例
- npm包除去cesium库的css自动引入，需要在项目引入mars3.css前加` import "mars3d-cesium/Build/Cesium/Widgets/widgets.css" `代码手动引入
- npm包依赖改为peerDependencies，需在项目内手动安装提示的依赖包，可以执行` npm install mars3d-cesium @turf/turf --save  `命令安装
- [SatelliteSensor](http://mars3d.cn/api/SatelliteSensor.html)移除trackedEntity、autoHeading参数（改用orientation）（示例：[卫星视锥体](http://mars3d.cn/editor-vue.html?id=graphic/space/satelliteSensor)）
- 移除PolylineSimplePrimitive类

---
## 3.4.26 - 2023-3-1
#### 优化 💪
- [RectangleEntity](http://mars3d.cn/api/RectangleEntity.html)回调坐标对象的编辑支持
- WFS图层改为等[Map](http://mars3d.cn/api/Map.html)加载基本完成再去请求加载

#### 修复 🐞
- 修复[PolygonPrimitive](http://mars3d.cn/api/PolygonPrimitive.html)对象编辑时diffHeight重复计算了
- 修复[PolygonCombine](http://mars3d.cn/api/PolygonCombine.html)的outline边线颜色显示不对的问题
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)开启编辑后绑定的事件多次触发
- 修复[ModelEntity](http://mars3d.cn/api/ModelEntity.html)的[label](http://mars3d.cn/api/ModelEntity.html#label)多个显示

## 3.4.23 - 2023-2-20
#### 优化 💪
- 支持对聚合对象的事件监听和获取对应聚合列表数据（示例：[对象聚合](http://mars3d.cn/editor-vue.html?id=layer-graphic/fun/clustering)）
- 标绘绘制时增加hasDrawDelPoint参数，控制是否开启右击删除点
- [FixedRoute](http://mars3d.cn/api/FixedRoute.html)中重复点的特殊处理（示例：[FixedRoute 固定轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/fixedRoute)）

#### 修复 🐞
- 修复[ConeTrack](http://mars3d.cn/api/ConeTrack.html)的distanceDisplayCondition参数无效的问题
- 修复PolyCombine对象的setStyle无法更新颜色
- 修复[EllipsoidEntity](http://mars3d.cn/api/EllipsoidEntity.html)闪烁方法无效的问题
- 修复按轴移动时未抛出updatePosition事件
- 修复map.listens方法Cesium原生事件判断有误

## 3.4.22 - 2023-2-6
#### 优化 💪
- 面的中心点计算改用truf处理
- [FixedRoute](http://mars3d.cn/api/FixedRoute.html)增加updateClock参数，多路线时可禁用内部对时钟的处理（示例：[FixedRoute 固定轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/fixedRoute)）
- 动态点对象addDynamicPosition方法对长时间无数据时的优化
- 贴模型相关计算中矢量图层内部自动处理objectsToExclude属性
- 流动线材质speed参数传O可以保持不流动

#### 修复 🐞
- 修复按轴移动时抛出了多次editMovePoint事件
- 修复[PolygonPrimitive](http://mars3d.cn/api/PolygonPrimitive.html)矢量边线materialType材质属性无法[setStyle](http://mars3d.cn/api/PolygonPrimitive.html#setStyle)更新
- 修复map.expImage导出的image/jpeg图片后缀一直是png
- 修复map.zoomIn/zoomOut在2D模式时限定minimumZoomDistance/maximumZoomDistance最小最大距离
- 修复map.setCameraView的duration为0时未触发完成回调参数

## 3.4.20 - 2023-1-9
#### 优化 💪
- [PathEntity](http://mars3d.cn/api/PathEntity.html)禁用编辑（示例：[Path轨迹](http://mars3d.cn/editor-vue.html?id=graphic/entity/path)）
- [CzmlLayer](http://mars3d.cn/api/CzmlLayer.html)增加autoUpdateClock参数
- 优化CircleWave材质执行效率

#### 修复 🐞
- 修复无地形时计算贴地点高度的异常处理
- 修复[TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)等图层flyToOptions参数无效的问题
- 3.4.19产生的[Popup](http://mars3d.cn/api/Popup.html)弹窗不显示问题

## 3.4.19 - 2022-12-26
#### 优化 💪
- [Route](http://mars3d.cn/api/Route.html)增加clampToTileset等参数（示例：[Route实时轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/route)）
- 文本材质增加speed参数，不为0时呈现文字滚动效果
- [LocationBar](http://mars3d.cn/api/LocationBar.html)视角变化后更新坐标为中心点坐标
- OutlineEffect、BloomTargetEffect的selected支持传入Primitive对象

#### 修复 🐞
- 修复SmMvtLayer加载报错

## 3.4.17 - 2022-12-12
#### 优化 💪
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)增加highlight.uniqueKey参数，可以按指定字段进行对应相关构件的整体高亮
- map地图增加zoomIn/zoomOut方法缩放事件zoom
- [HeatLayer](http://mars3d.cn/api/HeatLayer.html)增加image类型渲染方式（示例：[贴地热力图](http://mars3d.cn/editor-vue.html?id=layer-other/heatmap/heatLayer)）
- [ToolButton](http://mars3d.cn/api/ToolButton.html)控件增加setIcon方法修改图标

#### 修复 🐞
- 修复无地形时贴地对象的flyTo存在错误
- 修复turf.buffer首尾判断存在异常修复

## 3.4.16 - 2022-12-5
#### 新增 🌟
- [FixedRoute](http://mars3d.cn/api/FixedRoute.html)传入的路线增加[heading](http://mars3d.cn/api/FixedRoute.html#heading)、[pitch](http://mars3d.cn/api/FixedRoute.html#pitch)参数支持（示例：[FixedRoute 固定轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/fixedRoute)）
- [PolygonEntity](http://mars3d.cn/api/PolygonEntity.html)、[CircleEntity](http://mars3d.cn/api/CircleEntity.html)、[RectangleEntity](http://mars3d.cn/api/RectangleEntity.html)支持clampToGround参数的动态更新

#### 优化 💪
- [Popup](http://mars3d.cn/api/Popup.html)对象的[depthTest](http://mars3d.cn/api/Popup.html#depthTest)参数默认值改为false
- [OverviewMap](http://mars3d.cn/api/OverviewMap.html)鹰眼底图禁用右键
- [ParticleSystem](http://mars3d.cn/api/ParticleSystem.html)增加complete事件
- 相关Effect特效对象的setOptions方法支持
- [Route](http://mars3d.cn/api/Route.html)、[FixedRoute](http://mars3d.cn/api/FixedRoute.html)对象的setOptions方法支持（示例：[FixedRoute 固定轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/fixedRoute)）
- [Map](http://mars3d.cn/api/Map.html)的[zoomIn](http://mars3d.cn/api/Map.html#zoomIn)、[zoomOut](http://mars3d.cn/api/Map.html#zoomOut)增加mandatory是否强制更新参数

#### 修复 🐞
- [FixedRoute](http://mars3d.cn/api/FixedRoute.html)内的[path](http://mars3d.cn/api/FixedRoute.html#path)自动保留
- 优化[FlatBillboard](http://mars3d.cn/api/FlatBillboard.html)对象销毁时的内存释放
- 修复[ViewShed](http://mars3d.cn/api/ViewShed.html)可视域对象的框选不显示的问题
- 修复火狐浏览器下[DivGraphic](http://mars3d.cn/api/DivGraphic.html)右键和编辑坐标偏移问题
- 取消[DivGraphic](http://mars3d.cn/api/DivGraphic.html)编辑时单击对象的位置变动
- 修复[WindLayer](http://mars3d.cn/api/WindLayer.html)鼠标移动时渲染被影响
- 修复Polygon编辑时setStyle时diffHeight值跳动

## 3.4.14 - 2022-11-22
#### 新增 🌟
- [Map](http://mars3d.cn/api/Map.html)增加[setOptions](http://mars3d.cn/api/Map.html#setOptions)方法
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
- [Video2D](http://mars3d.cn/api/Video2D.html)支持动态属性和[setStyle](http://mars3d.cn/api/Video2D.html#setStyle)更新url（示例：[视频2D投射](http://mars3d.cn/editor-vue.html?id=graphic/video/video2D)）
- 公开矢量数据编辑对象的startMoveMatrix、stopMoveMatrix、stopRotateMatrix、stopRotateMatrix等方法
- Primitive点对象传modelMatrix时兼容允许编辑
- [Map](http://mars3d.cn/api/Map.html)构造参数geocoder区分原生cesium和高德POI查询（示例：[POI点查询](http://mars3d.cn/editor-vue.html?id=query/poi)）
- [CanvasWindLayer](http://mars3d.cn/api/CanvasWindLayer.html)增加worker参数支持多线程

#### 修复 🐞
- 修复[FlatBillboard](http://mars3d.cn/api/FlatBillboard.html)在2D模式只显示最后一个对象
- 修复[FixedRoute](http://mars3d.cn/api/FixedRoute.html)的clockLoop:true在存在time字段时无效的问题
- 移除[QueryArcServer](http://mars3d.cn/api/QueryArcServer.html)、QueryArcServer内置的popup: "all"，由外部控制
- 修复S3MLayer的flyTo:false失效的问题
- 修复Combine矢量对象图片等材质失效的问题
- 修复[FixedRoute](http://mars3d.cn/api/FixedRoute.html)在3.4.11产生的贴地计算无效的问题

## 3.4.11 - 2022-10-24
#### 优化 💪
- [Timeline](http://mars3d.cn/api/Timeline.html)控件增加maxSpan最大刻度跨度参数、优化时间文本展示
- 贴地线面量算增加exact快速概略的计算模式参数
- 长度量算增加万米单位
- PolylineVolume管道矢量对象增加vscale、hscale参数（示例：[管道线](http://mars3d.cn/editor-vue.html?id=graphic/entity/polylineVolume)）
- [HeatLayer](http://mars3d.cn/api/HeatLayer.html)图层增加arcDirection参数（示例：[贴地热力图](http://mars3d.cn/editor-vue.html?id=layer-other/heatmap/heatLayer)）

#### 修复 🐞
- 修复[WallEntity](http://mars3d.cn/api/WallEntity.html)在[setStyle](http://mars3d.cn/api/WallEntity.html#setStyle)更新closure参数未生效的问题
- 修复[DistanceLegend](http://mars3d.cn/api/DistanceLegend.html)在大屏分辨率鼠标滚动比例显示异常
- 修复[ParticleSystem](http://mars3d.cn/api/ParticleSystem.html)在时间跨度大时切换页面卡死
- 修复[ModelEntity](http://mars3d.cn/api/ModelEntity.html)等导出json时缺少billboard附加信息
- 修改v3.4.8修改LineFlow材质后产生的亮度暗问题

## 3.4.10 - 2022-10-17
#### 优化 💪
- 所有图层的setOptions方法重构和优化
- BloomTargetEffect增加objectsToExclude参数
- [FixedRoute](http://mars3d.cn/api/FixedRoute.html)增加interpolationAlgorithm参数（示例：[FixedRoute 固定轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/fixedRoute)）
- 优化[MapCompare](http://mars3d.cn/api/MapCompare.html)持续漫游时的联动平滑度
- [FlatBillboard](http://mars3d.cn/api/FlatBillboard.html)增加translucent参数
- [CzmGeoJsonLayer](http://mars3d.cn/api/CzmGeoJsonLayer.html)、[CzmlLayer](http://mars3d.cn/api/CzmlLayer.html)图层增加process方法（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- 矢量数据增加dblClick双击事件

#### 修复 🐞
- 修复[FlatBillboard](http://mars3d.cn/api/FlatBillboard.html)的高宽大小无效的问题
- 修复[PolylinePrimitive](http://mars3d.cn/api/PolylinePrimitive.html)的colors参数失效的问题
- 修复[RectanglePrimitive](http://mars3d.cn/api/RectanglePrimitive.html)边线旋转角度无效的问题
- 修复WallScroll材质颜色透明度无效的问题

## 3.4.8 - 2022-9-26
#### 新增 🌟
- 增加 天地图POI查询类（示例：[POI点查询](http://mars3d.cn/editor-vue.html?id=query/poi)）

#### 优化 💪
- map增加onlyPickTerrainPosition属性
- LineFlow材质增加mixt参数
- [Sector](http://mars3d.cn/api/Sector.html)增加noCenter参数
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)增加position.alt_offset参数

#### 修复 🐞
- 修复[Skyline](http://mars3d.cn/api/Skyline.html)的[enabled](http://mars3d.cn/api/Skyline.html#enabled)参数无效的问题
- 修复div矢量对象的setStyle更新样式无效的问题
- 修复map.getExtent方法scale参数无效的问题

#### 弃用 & API重构 🔒
- [CamberRadar](http://mars3d.cn/api/CamberRadar.html)的4个角度参数由弧度值改为角度值（示例：[双曲面雷达范围](http://mars3d.cn/editor-vue.html?id=graphic/space/camberRadar)）
- 移除矢量数据编辑的styleType值，全部外部属性框中配置

## 3.4.7 - 2022-9-7
#### 优化 💪
- [DivLightPoint](http://mars3d.cn/api/DivLightPoint.html) 支持label的属性字段名称配置

#### 修复 🐞
- 更新被封的高德Key
- 修复地形加载完成事件失效的问题
- 修复挖洞面编辑错误
- 修复v3.4.5新产生的矢量图层flyTo失效问题
- 修复v3.4.5新产生的map.expImage指定高度时裁剪异常问题
- 修复PolylineVolume在star样式时显示异常
- 修复矢量数据setOptions部分简单属性时合并属性未生效的问题
- 修复zoom在2.5D下缩放异常

#### 弃用 & API重构 🔒
- 移除模型矢量对象的fixedHeading（传heading值即可）、noPitchRoll（传pitch:0和roll:0） 参数，自动判断优先级，如style设置heading/pitch/roll值，优先级高于orientation

## 3.4.5 - 2022-8-21
#### 优化 💪
- map.expImage支持高宽同时指定，自动裁剪中间区域
- map增加mouse.transform参数，来兼容body被缩放的情况
- 右键菜单支持绑定方法名字符串

#### 修复 🐞
- 修复异步[Popup](http://mars3d.cn/api/Popup.html)时的popupOpen事件处理
- 修复map.getThing返回值一直为空的问题

## 3.4.3 - 2022-8-8
#### 新增 🌟
- 增加[BusineDataLayer](http://mars3d.cn/api/BusineDataLayer.html)业务数据图层

#### 优化 💪
- div对象增加按轴移动编辑
- 量算结果显示支持divGraphic等对象展示
- [WallEntity](http://mars3d.cn/api/WallEntity.html)增加fixedTop参数（示例：[墙](http://mars3d.cn/editor-vue.html?id=graphic/entity/wall)）
- [FontBillboardEntity](http://mars3d.cn/api/FontBillboardEntity.html) 增加iconPadding参数
- mars3d-cesium库升级到[v1.96](https://github.com/CesiumGS/cesium/releases/tag/1.96)

#### 修复 🐞
- 修复[FixedRoute](http://mars3d.cn/api/FixedRoute.html)重新运行速度变慢的问题
- 修复棋盘材质颜色名称有误，无法更新
- 修复v3.4.0产生的[PolygonEntity](http://mars3d.cn/api/PolygonEntity.html)挖洞面失效问题
- 修复Primitive对象面高亮时outline的增加或移除处理
- 修复Primitive对象diffHeight参数未配置height时没显示的问题
- 修复[Popup](http://mars3d.cn/api/Popup.html)配置autoClose:false时多次单击重复弹窗

## 3.4.1 - 2022-7-25
#### 新增 🌟
- 新增[MapCompare](http://mars3d.cn/api/MapCompare.html)地图对比控件
- 优化[MapSplit](http://mars3d.cn/api/MapSplit.html)控件图层参数，支持构造参数传入和数组传入

#### 优化 💪
- PolylineVolume新增thicknes、slices、startAngle等参数，提供更多外观样式（示例：[管道线](http://mars3d.cn/editor-vue.html?id=graphic/entity/polylineVolume)）
- 修改所有MaterialProperty，公开所有属性便于修改
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)增加[hasEdit](http://mars3d.cn/api/TilesetLayer.html#hasEdit)属性，对无[transform](http://mars3d.cn/api/TilesetLayer.html#transform)不支持编辑的模型做了判断

#### 修复 🐞
- 修复在isRestorePositions:true时[RectangleEntity](http://mars3d.cn/api/RectangleEntity.html)结束绘制时坐标值异常
- 修复编辑矢量对象时，不能覆盖screenSpaceCameraController.enableInputs原有值

## 3.4.0 - 2022-7-15
#### 重要说明 📣
- 发布v3.4
- 对 矢量数据 做了一轮非常大的整改，包括功能一致性、渲染效率等

#### 新增 🌟
- 新增`BloomTargetEffect`对象泛光特效
- 新增[MatrixMove](http://mars3d.cn/api/MatrixMove.html)矩阵图上平移编辑类、`MatrixRotate`矩阵图上旋转编辑类
- gltf、3dtiles模型新增沿XYZ轴平移图上编辑和旋转角度图上编辑（示例：[标准XYZ金字塔瓦片](http://mars3d.cn/editor-vue.html?id=layer-tile/type/xyz)）
- primitive等矢量对象，新增绘制、编辑、数据导入导出等功能
- 矢量图层增加全局透明度调整方法，支持调整图层内矢量数据的透明度
- 矢量数据标绘增加坐标沿XYZ轴平移图上编辑（示例：[标准XYZ金字塔瓦片](http://mars3d.cn/editor-vue.html?id=layer-tile/type/xyz)）
- 新增开发了[Route](http://mars3d.cn/api/Route.html)、[FixedRoute](http://mars3d.cn/api/FixedRoute.html)飞行漫游路线类（示例：[FixedRoute 固定轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/fixedRoute)）

#### 优化 💪
- 重写[TilesetFlat](http://mars3d.cn/api/TilesetFlat.html)压平功能，优化对部分模型进行支持（示例：[模型压平](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetFlat)）
- 所有矢量数据采用统一的调试面板，可进行标绘、编辑、数据导入导出、数据量测试等操作
- 优化部分矢量数据的渲染效率，大数据加载效率
- 矢量对象新增materialOptions参数，对材质参数优化包一层
- 材质对应的所有Property材质进行补全
- 重写示例中矢量数据style样式属性编辑弹窗
- [ParticleSystem](http://mars3d.cn/api/ParticleSystem.html#.StyleOptions)增加heading、pitch、roll等参数，并优化渲染效率
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html)中增加[clip](http://mars3d.cn/api/TilesetLayer.html#clip)、[flat](http://mars3d.cn/api/TilesetLayer.html#flat)、[flood](http://mars3d.cn/api/TilesetLayer.html#flood)、[planClip](http://mars3d.cn/api/TilesetLayer.html#planClip)参数

#### 弃用 & API重构 🔒
- 图层、矢量数据类弃用uuid属性，全部统一为[id](http://mars3d.cn/api/BaseGraphic.html#id)
- 移除 [ModelLayer](http://mars3d.cn/api/ModelLayer.html) 图层，需要改用[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)
- 移除RoamLine类，需要改用[FixedRoute](http://mars3d.cn/api/FixedRoute.html)类；移除DynamicRoamLine需改用[Route](http://mars3d.cn/api/Route.html)（示例：[FixedRoute 固定轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/fixedRoute)）
- 移除Entity类矢量数据中fromDraw静态方法
- 移除Entity类矢量数据中entity参数和fromEntity静态方法
- Entity编辑中的对应样式类型edittype属性名称改为styleType（影响到style编辑属性弹窗）
- 所有callback回调方法全部改为返回Promise方式，影响到一些方法的传参和返回值
- ArcGIS/WMS瓦片图层的maxLength/graphicConver参数改名为hasToGraphic,并增加featureToGraphic参数（示例：[WMS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wms)）
- [PointUtil.getSurfaceHeight](http://mars3d.cn/api/PointUtil.html#.getSurfaceHeight)改为Promise方式，同步请改用[PointUtil.getHeight](http://mars3d.cn/api/PointUtil.html#.getHeight)方法
- [PolyUtil.interPolygon](http://mars3d.cn/api/PolyUtil.html#.interPolygon)等方式中的`asyn`参数改名为`exact`
- 移除图层的noLayerManage标识，增加[isPrivate](http://mars3d.cn/api/BaseLayer.html?classFilter=basel#isPrivate)属性
- [ParticleSystem](http://mars3d.cn/api/ParticleSystem.html)参数移除target参数，options中部分参数全部统一到style中
- 矢量图层内[getGraphicByAttr](http://mars3d.cn/api/GraphicLayer.html#getGraphicByAttr)方法参数调整了顺序，与其他类似方法保持一致
- 移除内置的将3dtiles中的“+”符号转义处理，如有需要自行增加Cesium.Resource.ReplaceUrl = function(url){ return url.replace(/\+/gm, "%2B") }

---
## 3.3.18 - 2022-7-5
#### 优化 💪
- [MapSplit](http://mars3d.cn/api/MapSplit.html)移除时对图层的处理方式优化
- [Tetrahedron](http://mars3d.cn/api/Tetrahedron.html) 增加支持鼠标拾取
- [DivLightPoint](http://mars3d.cn/api/DivLightPoint.html) 增加支持大小和文本参数
- [GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)反选遮罩层[flyTo](http://mars3d.cn/api/GeoJsonLayer.html#flyTo)优化（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- 增加enabledEvent可以禁用事件，大数据创建清除时建议开启
- [ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)类动态点时增加fixedHeading参数支持固定[heading](http://mars3d.cn/api/ModelPrimitive.html#heading)角度值
- mars3d-cesium库升级到[v1.95](https://github.com/CesiumGS/cesium/releases/tag/1.95)

#### 修复 🐞
- 修复[CanvasLabelEntity](http://mars3d.cn/api/CanvasLabelEntity.html)高亮无效的问题
- 修复mars3d-tdt插件npm包引入问题
- 修复[ToolButton](http://mars3d.cn/api/ToolButton.html)控件[enabled](http://mars3d.cn/api/ToolButton.html#enabled)无法禁用

## 3.3.15 - 2022-6-20
#### 新增 🌟
- [GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)增加chinaCRS参数，用于自动纠偏或加偏数据（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）

#### 优化 💪
- 对部分矢量对象的getRectangle方法优化
- Primitive矢量对象的show属性更新机制优化
- RoamLine根据forwardExtrapolationType参数自动保留路线
- mars3d-cesium库升级到[v1.94](https://github.com/CesiumGS/cesium/releases/tag/1.94)

#### 修复 🐞
- 修复[BillboardEntity](http://mars3d.cn/api/BillboardEntity.html)、[PointEntity](http://mars3d.cn/api/PointEntity.html)、[ModelEntity](http://mars3d.cn/api/ModelEntity.html)附带对象的setOptions未更新
- 修复[Tooltip](http://mars3d.cn/api/Tooltip.html)在screenSpaceCameraController禁用部分操作时不显示的问题
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html)非全屏地图下的编辑时坐标错位的问题
- 修复[CircleEntity](http://mars3d.cn/api/CircleEntity.html) 编辑时右键删除点圆还在显示
- 增加RoamLine中maxDistance与maxCount冲突的兼容处理

## 3.3.12 - 2022-6-6
#### 优化 💪
- [DiffuseWall](http://mars3d.cn/api/DiffuseWall.html)增加maxScale扩散的最大比例参数
- WFS图层增加update事件和isLoading
- [HeatLayer](http://mars3d.cn/api/HeatLayer.html)公开max和min参数（示例：[贴地热力图](http://mars3d.cn/editor-vue.html?id=layer-other/heatmap/heatLayer)）
- 优化[Compass](http://mars3d.cn/api/Compass.html)导航球控件双击定位规则
- [PathEntity](http://mars3d.cn/api/PathEntity.html)根据forwardExtrapolationType参数自动保留路线（示例：[Path轨迹](http://mars3d.cn/editor-vue.html?id=graphic/entity/path)）
- 右键菜单单击一级菜单时不关闭二级菜单

#### 修复 🐞
- 修复多边形、矩形 周长值属性有误
- 修复[BaiduLayer](http://mars3d.cn/api/BaiduLayer.html) 的 [readyPromise](http://mars3d.cn/api/BaiduLayer.html#readyPromise)失效的问题

## 3.3.11 - 2022-5-29
#### 重要说明 📣
- 发布 功能示例React版
- 重写Vue功能示例、基础项目的UI

#### 优化 💪
- 热力图支持动态平滑变化的处理（示例：[贴地热力图](http://mars3d.cn/editor-vue.html?id=layer-other/heatmap/heatLayer)）
- 优化WallScroll材质，增加方向等参数
- 矢量数据增加updatePosition事件
- 支持[Popup](http://mars3d.cn/api/Popup.html)与矢量数据在外部更新[position](http://mars3d.cn/api/Popup.html#position)后的位置联动

#### 修复 🐞
- v3.3.9产生的[Slope](http://mars3d.cn/api/Slope.html)分析结果未展示问题
- 修复[PolylinePrimitive](http://mars3d.cn/api/PolylinePrimitive.html)的distanceDisplayCondition参数无效的问题
- v3.3.8产生的RoamLine贴地方法计算有误

#### 弃用 & API重构 🔒
- [Map](http://mars3d.cn/api/Map.html)的[control](http://mars3d.cn/api/Map.html#control)参数下移除defaultContextMenu参数，改为contextmenu.hasDefault参数

## 3.3.8 - 2022-5-10
#### 重要说明 📣
- 原生JS版功能示例、基础项目 中依赖的jquery升级至v3+最新版

#### 新增 🌟
- ModelCombine大数据模型类 增加scaleX、scaleY、scaleZ参数
- [ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)模型类 增加noPitchRoll参数
- 增加 [MultipleSkyBox](http://mars3d.cn/api/MultipleSkyBox.html) 多天空盒

#### 优化 💪
- 增加主库和插件库中第3方依赖JS库未引入时的错误提示，方便排查问题
- 优化 [ToolButton](http://mars3d.cn/api/ToolButton.html) 和 右键菜单的icon图标，支持 图片url路径、base64字符串、svg字符串、字体图标class名 等形式
- 增加Icon类，可以外部自定义默认右键菜单的图标
- RoamLine增加noPitchRoll参数
- [BillboardEntity](http://mars3d.cn/api/BillboardEntity.html)、[PointEntity](http://mars3d.cn/api/PointEntity.html)、[ModelEntity](http://mars3d.cn/api/ModelEntity.html) 支持其他point、model、ellipse、path附带对象
- [PolyUtil](http://mars3d.cn/api/PolyUtil.html) 类部分异步方法由void改为返回Promise
- mars3d-cesium库升级到[v1.93](https://github.com/CesiumGS/cesium/releases/tag/1.93)

#### 修复 🐞
- 修复v3.3.7的ts定义错误
- 修复Effect在addTo/remove方法时记录未处理的问题
- 修复diffHeight负数时未显示

## 3.3.7 - 2022-5-2
#### 新增 🌟
- 新增 [CanvasLabelEntity](http://mars3d.cn/api/CanvasLabelEntity.html) 文本点对象

#### 优化 💪
- 对 [GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html) 增加支持加载topojson数据（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- 优化 [ArcGisLayer](http://mars3d.cn/api/ArcGisLayer.html)，不依赖Cesium修改，改用内部 [ArcGisImageryProvider](http://mars3d.cn/api/ArcGisImageryProvider.html) 实现
- 增加mars3d.Token.[updateAll](http://mars3d.cn/api/Token.html#.updateAll) 方法，[Map](http://mars3d.cn/api/Map.html) 增加token参数，方便外部更新覆盖
- 修改 [RotateOut](http://mars3d.cn/api/RotateOut.html)、[RotatePoint](http://mars3d.cn/api/RotatePoint.html) 于时钟脱离依赖，时钟停止也可有效运行

#### 修复 🐞
- 优化 [DivBillboardEntity](http://mars3d.cn/api/DivBillboardEntity.html) 大量点的生成图片失败
- 修复编辑矢量对象时附加的label位置同步问题
- 修复 [ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html) 动态运动对象的 [modelMatrix](http://mars3d.cn/api/ModelPrimitive.html#modelMatrix) 异常报错问题
- 修复v3.3.6产生的Plan相关矩形裁剪失效问题
- 修复v3.3.6产生的模型url路径中的“+”符号转义失效问题
- 修复v3.3.6产生的地形开挖、等高线删除最后一个失效问题

## 3.3.6 - 2022-4-22
#### 新增 🌟
- 增加多个材质对象
- 增加 [GroupThing](http://mars3d.cn/api/GroupThing.html) 组合类

#### 优化 💪
- [Measure](http://mars3d.cn/api/Measure.html) 量算方法增加decimal等参数，支持自定义显示的文本中保留的小数位
- 支持直接对 [EchartsLayer](http://mars3d.cn/api/EchartsLayer.html)、[MapVLayer](http://mars3d.cn/api/MapVLayer.html) 绑定单击等事件

#### 修复 🐞
- 修复Cesium v1.92相关的兼容性问题
- 解决 [PolylineCombine](http://mars3d.cn/api/PolylineCombine.html) 的材质转换问题
- 修复矢量对象toGeoJSON时坐标为空报错
- 修复[Tooltip](http://mars3d.cn/api/Tooltip.html) 贴地对象中显示偏移的问题
- 修复[CircleEntity](http://mars3d.cn/api/CircleEntity.html) 的 [radius](http://mars3d.cn/api/CircleEntity.html#radius) 更新时未同步更新outline

## 3.3.0 - 2022-4-18
#### 重要说明 📣
- 发布[移动端 APP 项目模板](http://mars3d.cn/goods.html?id=mars3d-vue-app)

#### 新增 🌟
- 新增[TilesetBoxClip](http://mars3d.cn/api/TilesetBoxClip.html)模型盒子裁剪功能（示例：[模型盒子裁剪](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetBoxClip)）
- 新增对3dtiles模型的卷帘对比支持
- 所有图层增加readyPromise属性，方便使用
- Primitive矢量数据新增depthFail参数支持遮挡部分的展示
- 增加[MeasureUtil.getSurfaceArea](http://mars3d.cn/api/MeasureUtil.html#.getSurfaceArea)方法
- 增加flv视频协议、红蓝对抗演习 等示例

#### 优化 💪
- 军标对象增加getOutlinePositions静态方法，可外部调用计算边界点坐标
- [VolumeMeasure](http://mars3d.cn/api/VolumeMeasure.html)方量分析增加一些参数
- 调整手机端标绘提示文字
- 标绘startDraw等方法返回值改为Promise
- 优化[TilesetPlanClip](http://mars3d.cn/api/TilesetPlanClip.html)增加显示和编辑plan平面
- 更新[Token](http://mars3d.cn/api/Token.html)所有默认值
- mars3d-cesium库升级到[v1.92](https://github.com/CesiumGS/cesium/releases/tag/1.92)

#### 修复 🐞
- 修复[BillboardEntity.startBounce](http://mars3d.cn/api/BillboardEntity.html#startBounce)弹跳时，已有偏移文本的处理优化
- 修改Effect特效移除再新增时的报错
- 优化热力图diffHeight参数
- 修复若干已知bug

#### 弃用 & API重构 🔒
- 因Cesium升级至1.92后，其Promise与之前版本不兼容，v3.3+依赖cesium v1.92+，相关版本兼容处理参考[教程](http://mars3d.cn/docs/issue/version/)
- 为了降低对Cesium源码修改的依赖，重新整理优化mars3d-cesium库，非常大的修改了一轮
- ArcGIS/WMS瓦片图层的maxLength参数改名为graphicConver（示例：[WMS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wms)）
- 矢量数据的clampToGround方法更名为autoSurfaceHeight（兼容旧名称）

---

## 3.2.4 - 2022-3-3
#### 优化 💪
- [ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html) 等类增加clampToTileset等参数
- mars3d-cesium库升级到[v1.91](https://github.com/CesiumGS/cesium/releases/tag/1.91)

#### 修复 🐞
- 修复v3.2.3产生的symbol配置的样式失效的问题
- 修复label的show:false时默认显示

## 3.2.3 - 2022-2-27
#### 优化 💪
- 优化RoamLine的endItem事件
- [QueryGeoServer](http://mars3d.cn/api/QueryGeoServer.html) 增加 [queryBySql](http://mars3d.cn/api/QueryGeoServer.html#queryBySql) 方法，支持cql_filter
- [WfsLayer](http://mars3d.cn/api/WfsLayer.html) 增加geometryName参数

#### 修复 🐞
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=DivGraphic)对象的popup和tooltip的zIndex处理

## 3.2.1 - 2022-2-13
#### 新增 🌟
- map新增地形加载失败、地形加载成功、load初始化 事件

#### 优化 💪
- map增加toolbar和controls中增加ceisum原生控件的获取，方便使用
- [Map](http://mars3d.cn/api/Map.html)初始化地形加载失败时，自动切换至无地形进行展示，避免黑色球效果
- mars3d-cesium库升级到[v1.90](https://github.com/CesiumGS/cesium/releases/tag/1.90)

#### 修复 🐞
- 修复V3.2.0产生的多个问题

## 3.2.0 - 2022-1-28
#### 重要说明 📣
- 发布v3.2版
- Vue功能示例和基础项目架构由webpack迁移至vite框架

#### 新增 🌟
- 新增[CircleCombine](http://mars3d.cn/api/CircleCombine.html)、[RectangleCombine](http://mars3d.cn/api/RectangleCombine.html)、[WallCombine](http://mars3d.cn/api/WallCombine.html)等10多个合并渲染的大数据矢量对象
- 新增[Tetrahedron](http://mars3d.cn/api/Tetrahedron.html)、[CloudPrimitive](http://mars3d.cn/api/CloudPrimitive.html)、[ViewShed](http://mars3d.cn/api/ViewShed.html)等graphic矢量对象
- 新增瓦片图层颜色滤镜功能，增加invertColor、filterColor等参数来修改瓦片颜色
- 重写[DivGraphic](http://mars3d.cn/api/DivGraphic.html)的编辑处理，支持直接拖拽div对象（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）

#### 优化 💪
- [Map](http://mars3d.cn/api/Map.html) 的鼠标事件除move外event回调中均加上拾取的mars3d矢量对象和图层
- 模型剖切支持plane的显示和编辑
- [FloodByMaterial](http://mars3d.cn/api/FloodByMaterial.html)淹没分析支持颜色的修改（示例：[淹没分析](http://mars3d.cn/editor-vue.html?id=thing/terrain/floodByMaterial)）

#### 修复 🐞
- 修复Entity对象中，初始无label时后续更新label文本无效的问题

#### 弃用 & API重构 🔒
- 重写 [Video2D](http://mars3d.cn/api/Video2D.html)、[Video3D](http://mars3d.cn/api/Video3D.html) 视频投射矢量对象（API全部变化了，参考API升级）（示例：[视频2D投射](http://mars3d.cn/editor-vue.html?id=graphic/video/video2D)）
- 重写 [WindLayer](http://mars3d.cn/api/WindLayer.html) 的参数，简化优化API结构（参考示例修改）
- 移除mars3d.thing.ViewShed3D（改用mars3d.graphic.[ViewShed](http://mars3d.cn/api/ViewShed.html)，参考示例升级）
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div)的className参数更改到style下（参考API文档）（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）
- LatLngPoint改名为 [LngLatPoint](http://mars3d.cn/api/LngLatPoint.html)、LatLngArray改名为 [LngLatArray](http://mars3d.cn/api/LngLatArray.html) （批量替换下）

---

## 3.1.23 - 2022-1-23
#### 新增 🌟
- 模型和矢量对象中增加allowDrillPick参数，允许鼠标穿透拾取进行交互
- [Video3D](http://mars3d.cn/api/Video3D.html) 增加maskImage羽化图片参数

#### 优化 💪
- [Map](http://mars3d.cn/api/Map.html) 类增加mouse鼠标操作相关配置参数，方便外部控制
- 优化地图 [Zoom](http://mars3d.cn/api/Zoom.html) 的处理，限定最大最小距离
- 优化鼠标在无地球情况下拾取

#### 修复 🐞
- 修复[RectangleEntity](http://mars3d.cn/api/RectangleEntity.html) 对象 [flyTo](http://mars3d.cn/api/RectangleEntity.html#flyTo) 定位位置不对的问题
- 优化TS和API文档对应jsdoc注释
- 全面测试并修复发现的多个问题
- 修复v3.1.18产生的单体化高亮失效问题
- 修改模型的closeHighlight方法无效问题

## 3.1.21 - 2022-1-8
#### 优化 💪
- 封装增加mars3d.control.[Timeline](http://mars3d.cn/api/Timeline.html) 控件，方便后续控制
- 优化 [LocationBar](http://mars3d.cn/api/LocationBar.html) 的不同屏幕宽度下的展示
- 优化 [DivGraphic](http://mars3d.cn/api/DivGraphic.html)、[Popup](http://mars3d.cn/api/Popup.html)、右键菜单 的样式和展示（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）
- [LineFlowMaterialProperty](http://mars3d.cn/api/LineFlowMaterialProperty.html) 新增时长参数
- 标绘编辑增加hasHeightEdit属性控制是否修改高度值

#### 修复 🐞
- 优化outline边线高度，支持读取height属性自适应
- 修复[PolygonEntity](http://mars3d.cn/api/PolygonEntity.html) 的setHeight、addHeight属性无效的问题

## 3.1.20 - 2022-1-4
#### 重要说明 📣
- 发布上线了 基础项目Vue版

#### 新增 🌟
- 新增 [CylinderWaveMaterialProperty](http://mars3d.cn/api/CylinderWaveMaterialProperty.html) 材质属性

#### 优化 💪
- LineFlicker材质增加背景色参数
- RoamLine类增加setOptions方法、支持model.highlight配置
- 优化 [ContextMenu](http://mars3d.cn/api/ContextMenu.html) 右键菜单二级菜单超出屏幕时的展示
- 进行了一次API文档的规范和检查改正
- mars3d-cesium库升级到[v1.89](https://github.com/CesiumGS/cesium/releases/tag/1.89)

#### 修复 🐞
- 解决v3.1.18产生的 [Map](http://mars3d.cn/api/Map.html) 的控件相关参数false时显示的问题

## 3.1.18 - 2021-12-25
#### 新增 🌟
- 增加 [ConeTrackPrimitive](http://mars3d.cn/api/ConeTrackPrimitive.html) 圆锥追踪体矢量对象
- 增加EffectType、ControlType类
- 统一规范了所有Control，支持[Map](http://mars3d.cn/api/Map.html)中[control](http://mars3d.cn/api/Map.html#control)传参预加载构造、新增type类型，相关新增移除事件等
- 统一规范了所有Effect，支持[Map](http://mars3d.cn/api/Map.html)中[effect](http://mars3d.cn/api/Map.html#effect)传参预加载构造、新增type类型，相关新增移除事件等

#### 优化 💪
- widget的disableOther配置支持数组，释放指定的多个widget

#### 修复 🐞
- 修复图层flyTo时自动取消飞行漫游路线的跟随视角等锁定
- 优化右键二级菜单，show为0个时自动隐藏
- 解决v3.1.17动态primitive点的运行错误

## 3.1.17 - 2021-12-19
#### 新增 🌟
- 矢量对象标绘事件中，增加修改或增加点的 [index](http://mars3d.cn/api/index.html) 值

#### 优化 💪
- 对 [OsmBuildingsLayer](http://mars3d.cn/api/OsmBuildingsLayer.html) 支持 [customShader](http://mars3d.cn/api/OsmBuildingsLayer.html#customShader) 等参数
- 优化 [Map](http://mars3d.cn/api/Map.html) 类的 [setPitchRange](http://mars3d.cn/api/Map.html#setPitchRange) 方法处理
- [Popup](http://mars3d.cn/api/Popup.html) 增加animation动画参数对是否动画可控

#### 修复 🐞
- 修复primitive矢量对象distanceDisplayCondition参数无效的问题
- 修复v3.1.16产生的 [Popup](http://mars3d.cn/api/Popup.html) 关闭时错误

#### 弃用 & API重构 🔒
- DivLayer内方法均融合至 [GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)，可以DivLayer批量替换为GraphicLayer（v3.2将移除DivLayer）

## 3.1.16 - 2021-12-11
#### 新增 🌟
- 所有类的事件回调对象增加stopPropagation方法可以停止事件冒泡
- [Map](http://mars3d.cn/api/Map.html)类增加contextMenuOpen、contextMenuClose、contextMenuClick右键菜单相关事件

#### 优化 💪
- 控件和[DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div)对象支持parentContainer参数来指定自定义的父级DOM（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）

#### 修复 🐞
- 修复v3.1.12修改产生的模型OutlineEffect效果对其他对象生效问题
- 修复v3.1.12产生的地形开挖高度失效的问题
- 修复v3.1.15优化RoamLine的flyToPoint方法产生的视角切换异常问题
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div)对象绑定的tooltip闪烁问题
- 修复线面对象的按距离显示属性显示异常
- 修复RoamLine默认传入model.roll和pitch未生效的问题
- 解决 [GroupLayer](http://mars3d.cn/api/GroupLayer.html) 抛出2次事件问题

#### 弃用 & API重构 🔒
- 原有对象的stopPropagation更名为eventParent，不仅用于关闭冒泡的父级还可以指定父级冒泡对象

## 3.1.15 - 2021-12-5
#### 重要说明 📣
- 发布上线了 功能示例Vue版

#### 新增 🌟
- 增加 [ClockAnimate](http://mars3d.cn/api/ClockAnimate.html) 控件

#### 优化 💪
- 优化RoamLine的flyToPoint方法
- mars3d-cesium库升级到[v1.88](https://github.com/CesiumGS/cesium/releases/tag/1.88)

#### 修复 🐞
- 整理API文档，去除多层options的参数
- 修改矢量数据的鼠标样式
- 修复GaodePOI圆形查询筛选有误

## 3.1.14 - 2021-11-29
#### 新增 🌟
- map增加terrainChange、tileLoadProgress事件
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div)在clampToGround:true时支持随地形切换后贴地（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）

#### 优化 💪
- [TilesetFlat](http://mars3d.cn/api/TilesetFlat.html) 优化模型高度值的读取（示例：[模型压平](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetFlat)）
- [PolygonCombine](http://mars3d.cn/api/PolygonCombine.html) 的outline支持优化
- [Zoom](http://mars3d.cn/api/Zoom.html) 控件支持增加zoomOutIcon、zoomOutIcon传入图片url

#### 修复 🐞
- map的requestRenderMode属性默认值改回false
- 修复RoamLine的addShading方法polyline无效的问题

## 3.1.13 - 2012-11-21
#### 新增 🌟
- [PolygonPrimitive](http://mars3d.cn/api/PolygonPrimitive.html)、[PolygonCombine](http://mars3d.cn/api/PolygonCombine.html)、[RectanglePrimitive](http://mars3d.cn/api/RectanglePrimitive.html)、[CirclePrimitive](http://mars3d.cn/api/CirclePrimitive.html)新增支持outline宽度及材质设置

#### 优化 💪
- [ModelEntity](http://mars3d.cn/api/ModelEntity.html) 对象addDynamicPosition时，增加noPitchRoll参数，可以设置模型只动态更改方向，内部固定模型的Pitch和Roll方向值为0
- RoamLine优化clockLoop参数，并支持导出Json
- ViewShed3D增加terrain参数控制是否开启地形的阴影效果

#### 修复 🐞
- 更新mars3d.Token.[bing](http://mars3d.cn/api/Token.html#.bing) 令牌值
- 解决v3.1.12产生的方量分析bug
- 修复RoamLine的addShading方法报错

## 3.1.12 - 2021-11-14
#### 新增 🌟
- [ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)、[TilesetLayer](http://mars3d.cn/api/TilesetLayer.html) 支持 [customShader](http://mars3d.cn/api/TilesetLayer.html#customShader) 参数来设置自定义shader效果

#### 优化 💪
- [ToolButton](http://mars3d.cn/api/ToolButton.html) 的icon参数支持传入图片url
- wms、wmts等图层增加getCapabilities参数控制是否进行读取图层配置信息（示例：[WMTS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wmts)）
- [Shadows](http://mars3d.cn/api/Shadows.html) 增加terrain参数控制是否开启地形的阴影效果
- 优化 [Sightline](http://mars3d.cn/api/Sightline.html) 通视分析效果（示例：[通视分析](http://mars3d.cn/editor-vue.html?id=thing/analysis/sightline)）
- mars3d-cesium库升级到[v1.87](https://github.com/CesiumGS/cesium/releases/tag/1.87)

#### 修复 🐞
- 修复Cesium v1.87下计算贴地（或贴模型）路线点异常问题
- 修复绘制[DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div)时success回调参数无效的问题
- 解决OutlineEffect的Entity类型数据拾取异常
- 修复飞行漫游对象的gs跟随视角设置视距无效的问题
- 修复[PolygonEntity](http://mars3d.cn/api/PolygonEntity.html)、[CircleEntity](http://mars3d.cn/api/CircleEntity.html) 对象更新outline边线的宽度失效和导出geojson的未记录outlineStyle样式
- 修复[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html) 的data参数被构造2次

## 3.1.10 - 2021-10-29
#### 优化 💪
- 优化图层的flyTo处理，对echarts等图层增加flyTo支持
- 军事标绘positions支持 传入CallbackProperty回调属性
- xyz图层增加tms属性，简化tms类型图层配置（示例：[标准XYZ金字塔瓦片](http://mars3d.cn/editor-vue.html?id=layer-tile/type/xyz)）
- [PolylinePrimitive](http://mars3d.cn/api/PolylinePrimitive.html) 支持colors属性
- [EllipsoidEntity](http://mars3d.cn/api/EllipsoidEntity.html) 扫描效果支持暂停
- [RectSensor](http://mars3d.cn/api/RectSensor.html) 和 [ConicSensor](http://mars3d.cn/api/ConicSensor.html) 增加hideRayEllipsoid属性（示例：[相控阵雷达范围](http://mars3d.cn/editor-vue.html?id=graphic/space/rectangularSensor)）

## 3.1.9 - 2021-10-24
#### 新增 🌟
- 增加 [WaterCombine](http://mars3d.cn/api/WaterCombine.html)大数据水面对象（示例：[水面](http://mars3d.cn/editor-vue.html?id=graphic/primitive/water)）
- [TilesetPlanClip](http://mars3d.cn/api/TilesetPlanClip.html)中新增对模型斜切
- 增加多个客户端空间分析示例

#### 优化 💪
- 默认右键菜单中增加量算功能
- 调整优化矢量单体化示例
- 优化[DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div)贴地效率（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html) 中 [highlight](http://mars3d.cn/api/TilesetLayer.html#highlight) 参数增加all参数控制整体高亮

#### 修复 🐞
- 修复[PathEntity](http://mars3d.cn/api/PathEntity.html) 更新为固定位置时的 [availability](http://mars3d.cn/api/PathEntity.html#availability) 时间内部未自动处理问题
- 修复DivLayer默认show:false传参无效问题
- 修复[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html) 的 [loadGeoJSON](http://mars3d.cn/api/GraphicLayer.html#loadGeoJSON) 方法 [type](http://mars3d.cn/api/GraphicLayer.html#type) 部分识别无效问题

## 3.1.7 - 2021-10-11
#### 新增 🌟
- 增加行政区突出展示、智慧社区等多个功能示例

#### 优化 💪
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div)增加支持setHeight和addHeight参数（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）
- Image2材质增加color颜色参数
- 优化mars3d-wind插件

#### 修复 🐞
- 修复[Popup](http://mars3d.cn/api/Popup.html) 默认鼠标无法单击问题
- 解决v3.1.6的getRectangle为空时的错误

## 3.1.6 - 2021-10-3
#### 新增 🌟
- 矢量数据和图层中增加getRectangle方法获取数据的矩形边界

#### 优化 💪
- [RotatePoint](http://mars3d.cn/api/RotatePoint.html) 增加鼠标交互操作修改
- [GroupLayer](http://mars3d.cn/api/GroupLayer.html) 的 [flyTo](http://mars3d.cn/api/GroupLayer.html#flyTo) 方法支持定位所有子图层矢量数据边界
- GeoJsonLayer增加graphicOptions参数（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- [Popup](http://mars3d.cn/api/Popup.html) 增加autoCenter参数
- RoamLine增加forwardExtrapolationType等参数
- 公开map.mouseEvent.moveDelay参数控制鼠标移动事件的响应时间
- mars3d-cesium库升级到[v1.86](https://github.com/CesiumGS/cesium/releases/tag/1.86)

#### 修复 🐞
- 修复量算类的label属性失效的问题
- 修复map在有divGraphic等矢量数据时销毁报错
- 修复WMS新增后快速移除报错
- 修复RoamLine跟随视角时暂停不了的问题
- 修复outline样式无效的问题
- 优化军事标绘的夹角
- SmallTooltip支持通过enabled关闭

## 3.1.4 - 2021-9-18
#### 优化 💪
- 矢量数据的setHeight和addHeight的属性支持字符串模版配置读取属性内值
- 增加highlightOpen和highlightClose事件，并优化openHighlight和closeHighlight方法
- [ModelPlanClip](http://mars3d.cn/api/ModelPlanClip.html) 支持[ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)模型的裁剪

#### 修复 🐞
- [FloodByGraphic](http://mars3d.cn/api/FloodByGraphic.html)已传入所需参数时可直接[start](http://mars3d.cn/api/FloodByGraphic.html#start)启动
- 支持cesiumlab中通用模型工具处理过的建筑物特效
- 修复 [MouseDownView](http://mars3d.cn/api/MouseDownView.html) 不显示的问题
- 解决rectangularSensor与czml插件的命名冲突问题
- wms等图层的proxy参数支持字符串

## 3.1.3 - 2021-9-12
#### 新增 🌟
- 增加描边OutlineEffect特效对象
- [CircleEntity](http://mars3d.cn/api/CircleEntity.html) 和 [RectangleEntity](http://mars3d.cn/api/RectangleEntity.html) 对象的toGeoJSON方法支持导出边线（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- GaodeRoute支持途经点、避让区域参数（示例：[Route实时轨迹路线](http://mars3d.cn/editor-vue.html?id=graphic/custom/route)）

#### 优化 💪
- [Tooltip](http://mars3d.cn/api/Tooltip.html) 更改了默认模板，并支持direction显示方向配置
- [Compass](http://mars3d.cn/api/Compass.html) 的bottom支持配置toolbar，自动跟随cesium-viewer-toolbar
- [PolygonCombine](http://mars3d.cn/api/PolygonCombine.html) 增加 [setColorStyle](http://mars3d.cn/api/PolygonCombine.html#setColorStyle) 方法
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div)的相关事件中增加mouseEvent原始DOM事件对象属性（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）
- [ToolButton](http://mars3d.cn/api/ToolButton.html) 增加鼠标移入移出事件
- RainEffect增加粒子大小和方向参数（示例：[雨天气](http://mars3d.cn/editor-vue.html?id=effect/rain)）
- [Util](http://mars3d.cn/api/Util.html) 增加 [formatDate](http://mars3d.cn/api/Util.html#.formatDate) 方法
- mars3d-cesium库升级到[v1.85](https://github.com/CesiumGS/cesium/releases/tag/1.85)

#### 修复 🐞
- 修复[TerrainClip](http://mars3d.cn/api/TerrainClip.html) 的细长型出现裁剪异常
- 修复[PolygonCombine](http://mars3d.cn/api/PolygonCombine.html) 属性opacity:1.0时的显示为透明问题
- 修复贴地 [Water](http://mars3d.cn/api/Water.html) 的透明度无效的问题
- 修复图层异步加载中设置show=false后还显示数据的问题
- 修改[DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div)导出导入失效问题

## 3.1.1 - 2021-8-27
#### 新增 🌟
- 点状Primitive对象类中新增addDynamicPosition动态点动画轨迹方法
- map增加renderError事件
- 增加mars3d.LatLngPoint.FormatLength全局变量，控制经度纬度的格式化时的长度

#### 优化 💪
- [ModelEntity](http://mars3d.cn/api/ModelEntity.html)模型对象中addDynamicPosition方法新增的动态点，到时间停止后触发stop事件
- 重新梳理右键菜单方法及其参数
- 反选遮罩层支持多面的geojson（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）

#### 修复 🐞
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div)绑定的popup未正常显示
- 修复[PolylinePrimitive](http://mars3d.cn/api/PolylinePrimitive.html) 的 [zIndex](http://mars3d.cn/api/PolylinePrimitive.html#zIndex) 无效问题
- 修复瓦片图层单击后如果数据太大的卡顿问题
- 修复WallScroll扫描墙 材质横向透明度存在问题
- 修复[ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html) 类的runAnimations属性无效的问题
- 修复GaodePOI分页存在问题，改为从0页开始（高德服务本身是从1开始）

## 3.1.0 - 2021-8-21
#### 重要说明 📣
- 发布v3.1版

#### 新增 🌟
- 矢量数据增加highlight高亮相关属性和方法，支持鼠标移入或单击后的按指定样式高亮矢量对象
- 重写 图上量算的所有矢量对象，采用继承Graphic矢量类的方式实现
- 重写[Popup](http://mars3d.cn/api/Popup.html)和[Tooltip](http://mars3d.cn/api/Tooltip.html)类，采用继承[DivGraphic](http://mars3d.cn/api/DivGraphic.html)类的方式实现（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）
- 新增[OverviewMap](http://mars3d.cn/api/OverviewMap.html)鹰眼地图控件
- 新增[Image2](http://mars3d.cn/api/MaterialType.html#.Image2)图片材质，用于图片加载中的避免白色展示
- [BillboardEntity](http://mars3d.cn/api/BillboardEntity.html) 和 [LabelEntity](http://mars3d.cn/api/LabelEntity.html) 类增加[startBounce](http://mars3d.cn/api/BillboardEntity.html#startBounce)、[stopBounce](http://mars3d.cn/api/BillboardEntity.html#stopBounce)执行弹跳动画方法
- [ModelEntity](http://mars3d.cn/api/ModelEntity.html)和[ModelPrimitive](http://mars3d.cn/api/ModelPrimitive.html)对象增加缩小后用像素点或图标展示

#### 优化 💪
- 矢量数据和图层增加popupOpen、popupClose、tooltipOpen、tooltipClose事件
- 矢量图层的进入编辑的方式修改，可以右键去激活编辑矢量数据
- 标绘编辑点支持在`DrawUtil.setPointStyle`方法修改样式
- 导出GeoJSON等接口支持不导出高度值（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html)矢量对象增加className、timeRender属性、增加postRender事件（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）
- 文字材质优化和增加边框参数
- 3dtiles图层增加自定义属性和Shader的相关方法

#### 修复 🐞
- 全面测试全部功能示例并修复发现的问题
- 修复 [MouseDownView](http://mars3d.cn/api/MouseDownView.html) 的默认显示问题
- 修复快捷键事件失效问题
- 修复zoomIn放大穿过地表后报错

#### 弃用 & API重构 🔒
- [Popup](http://mars3d.cn/api/Popup.html) 和 [Tooltip](http://mars3d.cn/api/Tooltip.html) 重构，bindPopup参数移除onAdd、onRemove、timeRender等参数 （参考示例修改）
- Entity类型矢量对象方法改名：highlight改名为startFlicker，unHighlight改名为stopFlicker
- 移除geojson、wfs等矢量图层的dth参数，改为highlight方式实现（参考示例修改）
- 移除3dtile图层的showClickFeature、pickFeatureStyle参数，改为highlight方式实现（参考示例修改）
- 移除wms、arcgis图层的showClickFeature、pickFeatureStyle参数，改为highlight方式实现（参考示例修改）

---

## 3.0.36 - 2021-8-18
#### 新增 🌟
- 增加[PolylineCombine](http://mars3d.cn/api/PolylineCombine.html)大数据线对象

#### 优化 💪
- 增加一批矢量数据应用功能示例
- [Compass](http://mars3d.cn/api/Compass.html)导航球增加自定义样式和svg的外部接口
- [WMTS图层](http://mars3d.cn/api/WmtsLayer.html)支持自动读取服务本身配置，可减少外部配置参数（示例：[WMTS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wmts)）
- mars3d-cesium库升级到[v1.84](https://github.com/CesiumGS/cesium/releases/tag/1.84)

#### 修复 🐞
- 修改DivLayer图层移除报错
- 修复 [PathEntity](http://mars3d.cn/api/PathEntity.html) 更新动态点无效问题
- 修复屏蔽贴地面存在outline边线时的错误
- 修改npm版本的自动化编译及发布方式
- 修复动态路线的坐标定位错误
- 修复方量挖方量数字显示错误
- 修改npm包的package.json改回dependencies方式

## 3.0.32 - 2021-7-27
#### 新增 🌟
- 增加[Tle](http://mars3d.cn/api/Tle.html)算法类，用于卫星TLE和SGP4相关计算（示例：[卫星综合对象](http://mars3d.cn/editor-vue.html?id=graphic/space/satellite)）
- [PointPrimitive](http://mars3d.cn/api/PointPrimitive.html)对象新增对CallbackProperty动态坐标的支持
- [Map](http://mars3d.cn/api/Map.html) 类增加[zoomIn](http://mars3d.cn/api/Map.html#zoomIn)和[zoomOut](http://mars3d.cn/api/Map.html#zoomOut)缩放地图方法
- 百度瓦片图层中增加streetview街景图层

#### 优化 💪
- [Satellite](http://mars3d.cn/api/Satellite.html)卫星对象支持外部动态position和orientation传值（示例：[卫星综合对象](http://mars3d.cn/editor-vue.html?id=graphic/space/satellite)）
- 对[ConicSensor](http://mars3d.cn/api/ConicSensor.html)和[RectSensor](http://mars3d.cn/api/RectSensor.html)对象，增加和优化length和rayEllipsoid等属性（示例：[相控阵雷达范围](http://mars3d.cn/editor-vue.html?id=graphic/space/rectangularSensor)）
- 优化[MapVLayer](http://mars3d.cn/api/MapVLayer.html)的事件绑定 和 线面坐标的遮挡不显示处理
- 优化[SatelliteSensor](http://mars3d.cn/api/SatelliteSensor.html)的效率，length属性支持外部定义传入（示例：[卫星视锥体](http://mars3d.cn/editor-vue.html?id=graphic/space/satelliteSensor)）

#### 修复 🐞
- 修复下侧状态栏老版本cesium中高程值显示为NaN问题
- 优化贴地Graphic的flyTo，兼容定位到视角中心
- 修复RoamLine投影墙在坐标重复时的显示高度问题。
- 优化map.getTileLayers获取的图层，增加为显示的config.json中的layers图层
- 修复[WindLayer](http://mars3d.cn/api/WindLayer.html)移除和销毁时后的报错。

#### 弃用 & API重构 🔒
- 移除space插件中的SpaceUtil类

## 3.0.31 - 2021-7-20
#### 新增 🌟
- [Map](http://mars3d.cn/api/Map.html) 类新增[lang](http://mars3d.cn/api/Map.html#lang) 多语言参数，用于切换SDK内的文字语言展示
- [Popup](http://mars3d.cn/api/Popup.html)和[Tooltip](http://mars3d.cn/api/Tooltip.html)新增template参数，用于支持配置外部模板

#### 优化 💪
- [EchartsLayer](http://mars3d.cn/api/EchartsLayer.html)图层升级支持echarts5 （mars3d-echarts插件）
- RoamLine在启动前增加静态模型的显示
- ViewShed3D增加部分事件方便外部使用
- 模型压平裁剪中优化对部分材质模型的支持（示例：[模型压平](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetFlat)）

#### 修复 🐞
- 修复[EllipsoidEntity](http://mars3d.cn/api/EllipsoidEntity.html)导出geojson时[scanPlane](http://mars3d.cn/api/EllipsoidEntity.html#scanPlane)参数未处理的问题
- 修复setSceneOptions未处理视角变化和参数合并的问题

#### 弃用 & API重构 🔒
- 删除Cesium库内的汉化的修改，改为mars3d内处理
- 移除mars3d.DrawUtil.message对象，改为通过多语言参数控制处理
- [Regular](http://mars3d.cn/api/Regular.html) 和 [Sector](http://mars3d.cn/api/Sector.html) 矢量对象API变化，改为中心点和radius、startAngle等参数来绘制

## 3.0.30 - 2021-7-11
#### 新增 🌟
- 增加[PointUtil.getMidpoint](http://mars3d.cn/api/PointUtil.html#.getMidpoint)方法，优化标绘的中点计算

#### 优化 💪
- 在[GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)图层加载MultiPolygon和MultiLineString时，只在最大坐标数的线面对象上显示文本注记（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- 线面数据的addHeight属性支持传入数组
- 优化矢量数据的style.label.position参数，支持模版等配置
- 对Entity类型数据，增加availability、viewFrom、parent等原生Entity相关参数

#### 修复 🐞
- 修复[ArcGisWfsLayer](http://mars3d.cn/api/ArcGisWfsLayer.html) 坐标系解析问题
- 修复[DivGraphic](http://mars3d.cn/api/DivGraphic.html?classFilter=Div)类setStyle无效问题、z-[index](http://mars3d.cn/api/index.html) 问题
- [Pit](http://mars3d.cn/api/Pit.html)底部改为PolygonGeometry，解决凹面的渲染错误
- 修复DynamicRoamLine删除数据时\_removeDynamicPosition的错误
- map的setSceneOptions支持sceneMode属性
- 修复[LimitHeight](http://mars3d.cn/api/LimitHeight.html) 的高度错误，改为 [bottomHeight](http://mars3d.cn/api/LimitHeight.html#bottomHeight)+[height](http://mars3d.cn/api/LimitHeight.html#height)
- 修复[ConeTrack](http://mars3d.cn/api/ConeTrack.html) 大尺度下的偏移位置

#### 弃用 & API重构 🔒
- 剔除内部的zepto库，全部改为原生JS代码来操作相关DOM
- 减少对turf的依赖，目前仅用到turf的4个方法（buffer缓冲分析、booleanPointInPolygon判断点在面内、convex求外包围面、bezierSpline计算贝塞尔曲线）。

## 3.0.29 - 2021-7-2
#### 优化 💪
- 对动态点增加贴模型参数，支持自动贴模型
- [TilesetLayer](http://mars3d.cn/api/TilesetLayer.html#modelMatrix)三维模型图层支持外部更新modelMatrix
- RoamLine的第一视角模式增加offset3个方向偏移值，可以进行驾驶舱内视角进行漫游
- mars3d-cesium库升级到[v1.83](https://github.com/CesiumGS/cesium/releases/tag/1.83)

#### 修复 🐞
- 修复[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html#isContinued)矢量图层的isContinued:true时支持连续测量
- 修复[DivUpLabel](http://mars3d.cn/api/DivUpLabel.html)字体参数无效的问题
- 修改style.label中的setHeight等高度参数的支持
- 修改矢量图层的show属性为false在数据加载前设置无效问题
- 修复除线以外的面对象distanceDisplayCondition_far值不一致的问题（内部自动加6378137保持效果一致）

## 3.0.28 - 2021-6-22
#### 新增 🌟
- 图层、控件等类中增加stopPropagation参数，用于控制事件是否冒泡
- 对wmts服务图层支持单击拾取矢量数据（示例：[WMTS服务](http://mars3d.cn/editor-vue.html?id=layer-tile/type/wmts)）

#### 优化 💪
- [DivGraphic](http://mars3d.cn/api/DivGraphic.html)矢量对象增加按视角自动计算叠加层次关系（示例：[DIV点对象](http://mars3d.cn/editor-vue.html?id=graphic/divGraphic/basis)）
- 绘制圆时增加半径距离的显示
- 比例尺控件，增加distance属性和change事件
- mars3d-cesium库升级到[v1.82](https://github.com/CesiumGS/cesium/releases/tag/1.82)

#### 修复 🐞
- 修复map上once绑定事件出错问题
- 修复曲线闭合属性切换未及时生效问题
- 修改面的边线大范围为与面贴合问题
- 修复量算种右键删除点的一些问题
- 模型压平支持自带矩阵的类型数据

## 3.0.27 - 2021-6-11
#### 新增 🌟
- Entity点对象类中新增`addDynamicPosition`动态点动画轨迹方法
- 默认右键菜单中，增加场景特效菜单项

#### 优化 💪
- 矢量图层新增isRestorePositions参数，用于在标绘和编辑结束时，是否将坐标还原为普通静态坐标值
- 量算长度，新增showAddText是否显示每一段的增加部分距离参数
- wfs、arcgis图层支持自动读取服务信息中的crs坐标系和extent边界信息
- 优化CGCS2000高斯投影坐标的处理

#### 修复 🐞
- 修复单体化buffer缓冲失效问题
- 修复isInPoly判断错误
- 修改[DivGraphic](http://mars3d.cn/api/DivGraphic.html)中stopPropagation参数处理，可以不在map上冒泡抛出事件

## 3.0.26 - 2021-6-3
#### 新增 🌟
- 支持对CGCS2000投影坐标（EPSG:4502到EPSG:4554）的坐标显示和转换

#### 优化 💪
- 优化对arcgis服务、geojson等的加载处理（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- 优化[LocationBar](http://mars3d.cn/api/LocationBar.html)状态栏控件，支持显示其他坐标系坐标，更改了API接口（升级需修改config.json）

#### 弃用 & API重构 🔒
- 移除mars3d-esri插件，将插件原有类简化并优化后融入到主库中。
- 移除mars3d-navigation插件，主库中新增[Compass](http://mars3d.cn/api/Compass.html)和[DistanceLegend](http://mars3d.cn/api/DistanceLegend.html)控件（升级需修改config.json）。

## 3.0.23 - 2021-5-8
#### 新增 🌟
- 新增[PolygonCombine](http://mars3d.cn/api/PolygonCombine.html)、`ModelCombine`等大数据展示的合并渲染对象
- 新增[DivUpLabel](http://mars3d.cn/api/DivUpLabel.html)、[DivBoderLabel](http://mars3d.cn/api/DivBoderLabel.html)等多个 [DivGraphic](http://mars3d.cn/api/DivGraphic.html)子类对象及其功能示例
- 新增[ConeTrack](http://mars3d.cn/api/ConeTrack.html)圆锥追踪体对象
- 新增[FrustumPrimitive](http://mars3d.cn/api/FrustumPrimitive.html)四棱锥体对象
- 新增瓦片图层自动纠偏功能

## 3.0.20 - 2021-4-19
#### 重要说明 📣
- 完成所有V2的功能示例的对应V3新版开发

#### 新增 🌟
- 材质统一管理：新增[MaterialType](http://mars3d.cn/api/MaterialType.html)和[MaterialUtil](http://mars3d.cn/api/MaterialUtil.html)类来统一管理材质。
- 样式统一规范：梳理规范了所有矢量数据的style样式参数。
- 重写[GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)图层，采用可在symobl中配置type参数指定Graphic类型来渲染，默认为primitive方式。（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）
- 重写[LodGraphicLayer](http://mars3d.cn/api/LodGraphicLayer.html)图层，采用Graphic方式渲染，默认内部为primitive方式，也可以按需自定义type。

#### 优化 💪
- mars3d-cesium库升级到[v1.80](https://github.com/CesiumGS/cesium/releases/tag/1.80)

#### 修复 🐞
- 修复完成一轮全面测试并修复多个bug

#### 弃用 & API重构 🔒
- 原有Cesium进行渲染的 [GeoJsonLayer](http://mars3d.cn/api/GeoJsonLayer.html)图层更名为 [CzmGeoJsonLayer](http://mars3d.cn/api/CzmGeoJsonLayer.html)（示例：[GeoJson图层](http://mars3d.cn/editor-vue.html?id=layer-graphic/geojson/basis)）

## 3.0.0 - 2021-2-1
#### 重要说明 📣
- 发布v3.0版
- 易学：使用和语法都按开发人员用户习惯最优设计，降低开发人员能力要求，只用初级水平开发人员即可上手。
- 规范：API从顶层统一规范的从零重构、统一的 [Map](http://mars3d.cn/api/Map.html) 地图对象，规范一致的调度机制，使用和学习极其简单。
- 高效率：提高了开发效率和平台的渲染效率。
- 新技术栈支持：对sdk增加TypeScript定义，npm包公开发布，功能示例、教程开源开放，全新的开发生态。
- 详细的API和教程：重新编写了详细的教程文档、自动根据SDK注释生成的最详尽的API文档，并完全免费开放。
- 功能示例和项目模板：并规划开发了Vue版、React版功能示例和基础项目。

#### 新增 🌟
- 矢量数据：全新设计的矢量图层[GraphicLayer](http://mars3d.cn/api/GraphicLayer.html)和[Graphic](http://mars3d.cn/api/BaseGraphic.html)矢量数据体系，可以自由切换数据类型，提高渲染效率。
- 材质：新增十多个全新动态材质，并使用 [MaterialType](http://mars3d.cn/api/MaterialType.html) 和 [MaterialUtil](http://mars3d.cn/api/MaterialUtil.html) 类来统一管理矢量数据的材质对象，简单易用。
- 模型分析：优化模型压平、模型开挖、模型淹没，支持多个模型压平等并提高渲染效率。（示例：[模型淹没分析](http://mars3d.cn/editor-vue.html?id=thing/tileset/tilesetFlood)）
- 地形分析：优化地形开挖、等高线、坡度坡向等地形相关功能，支持多个地形开挖并提高渲染效率。（示例：[等高线](http://mars3d.cn/editor-vue.html?id=thing/terrain/contourLine)）

#### 弃用 & API重构 🔒
- v3.0版与v2.x版本还不兼容（API结构不同），无法兼容平滑的升级，因为v3所有代码从零开始编写搭建，不是基于之前的老版本修改的。

---

## 2.3.0 - 2020-12-31
#### 重要说明 📣
- 发布v2.3版
- Cesium升级至[1.79](https://github.com/CesiumGS/cesium/releases/tag/1.79)

## 2.2.0 - 2020-10-1
#### 重要说明 📣
- 发布v2.2版
- Cesium升级至[1.74](https://github.com/CesiumGS/cesium/releases/tag/1.74)

## 2.1.0 - 2020-7-1
#### 重要说明 📣
- 发布v2.1版
- Cesium升级至[1.71](https://github.com/CesiumGS/cesium/releases/tag/1.71)

## 2.0.0 - 2020-1-1
#### 重要说明 📣
- 发布v2.0版
- Cesium升级至[1.65](https://github.com/CesiumGS/cesium/releases/tag/1.65)

---

## 1.9.0 - 2019-10-1
#### 重要说明 📣
- 发布v1.9版
- Cesium升级至[1.62](https://github.com/CesiumGS/cesium/releases/tag/1.62)

## 1.8.0 - 2019-6-1
#### 重要说明 📣
- 发布v1.8版
- Cesium升级至[1.58](https://github.com/CesiumGS/cesium/releases/tag/1.58)

## 1.7.0 - 2019-1-1
#### 重要说明 📣
- 发布v1.7版
- Cesium升级至[1.53](https://github.com/CesiumGS/cesium/releases/tag/1.53)

## 1.6.0 - 2018-10-1
#### 重要说明 📣
- 发布v1.6版
- Cesium升级至[1.50](https://github.com/CesiumGS/cesium/releases/tag/1.50)

## 1.5.0 - 2018-7-1
#### 重要说明 📣
- 发布v1.5版
- Cesium升级至[1.47](https://github.com/CesiumGS/cesium/releases/tag/1.47)

## 1.4.0 - 2018-4-1
#### 重要说明 📣
- 发布v1.4版
- Cesium升级至[1.44](https://github.com/CesiumGS/cesium/releases/tag/1.44)

## 1.3.0 - 2018-1-1
#### 重要说明 📣
- 发布v1.3版
- Cesium升级至[1.41](https://github.com/CesiumGS/cesium/releases/tag/1.41)

## 1.2.0 - 2017-11-1
#### 重要说明 📣
- 发布v1.2版
- Cesium升级至[1.39](https://github.com/CesiumGS/cesium/releases/tag/1.39)

## 1.1.0 - 2017-10-1
#### 重要说明 📣
- 发布v1.1版
- Cesium升级至[1.38](https://github.com/CesiumGS/cesium/releases/tag/1.38)

## 1.0.0 - 2017-8-25
#### 重要说明 📣
- 发布v1.0版
