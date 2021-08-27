/**
 * 国内偏移坐标系 枚举
 */
declare const enum ChinaCRS {
    /**
     * 标准无偏坐标系
     */
    WGS84 = "WGS84",
    /**
     * 国测局(GCJ02)偏移坐标系
     */
    GCJ02 = "GCJ02",
    /**
     * 百度(BD09) 偏移坐标系
     */
    BAIDU = "BD09"
}

/**
 * 坐标系 枚举
 */
declare const enum CRS {
    /**
     * Web墨卡托投影坐标系
     */
    EPSG3857 = "EPSG:3857",
    /**
     * WGS84地理坐标系
     */
    EPSG4326 = "EPSG:4326",
    /**
     * 中国大地2000 （CGCS2000）地理坐标系
     */
    EPSG4490 = "EPSG:4490",
    /**
     * CGCS2000 Gauss-Kruger Zone 平面投影，3度分带，横坐标前加带号。
     * 范围：EPSG:4513 到 EPSG:4533
     */
    CGCS2000_GK_Zone_3 = "CGCS2000_GK_Zone_3",
    /**
     * CGCS2000 Gauss-Kruger Zone 平面投影，6度分带，横坐标前加带号。
     * 范围：EPSG:4491 到 EPSG:4501
     */
    CGCS2000_GK_Zone_6 = "CGCS2000_GK_Zone_6",
    /**
     * CGCS2000 Gauss-Kruger CM 平面投影，3度分带，横坐标前不加带号。
     * 范围：EPSG:4534 到 EPSG:4554
     */
    CGCS2000_GK_CM_3 = "CGCS2000_GK_CM_3",
    /**
     * CGCS2000 Gauss-Kruger CM 平面投影，6度分带，横坐标前不加带号。
     * 范围：EPSG:4502 到 EPSG:4512
     */
    CGCS2000_GK_CM_6 = "CGCS2000_GK_CM_6"
}

/**
 * 事件类型 枚举（所有事件统一的入口）
 */
declare const enum EventType {
    /**
     * 添加对象
     */
    add = "add",
    /**
     * 移除对象
     */
    remove = "remove",
    /**
     * 添加矢量数据时[图层上监听时使用]
     */
    addGraphic = "addGraphic",
    /**
     * 移除矢量数据时[图层上监听时使用]
     */
    removeGraphic = "removeGraphic",
    /**
     * 添加图层[map上监听时使用]
     */
    addLayer = "addLayer",
    /**
     * 移除图层[map上监听时使用]
     */
    removeLayer = "removeLayer",
    /**
     * 更新了对象
     */
    update = "update",
    /**
     * 更新了style对象
     */
    updateStyle = "updateStyle",
    /**
     * 更新了attr对象
     */
    updateAttr = "updateAttr",
    /**
     * 显示了对象
     */
    show = "show",
    /**
     * 隐藏了对象
     */
    hide = "hide",
    /**
     * 开始
     */
    start = "start",
    /**
     * 变化了
     */
    change = "change",
    /**
     * 多个数据异步分析时，完成其中一个时的回调事件
     */
    endItem = "endItem",
    /**
     * 多个数据异步分析时，完成所有的回调事件
     */
    end = "end",
    /**
     * 完成
     */
    stop = "stop",
    /**
     * 完成加载，但未做任何其他处理前
     */
    loadBefore = "loadBefore",
    /**
     * 完成加载，执行所有内部处理后
     */
    load = "load",
    /**
     * 出错了
     */
    error = "error",
    /**
     * 完成加载配置信息
     */
    loadConfig = "loadConfig",
    /**
     * popup弹窗打开后
     */
    popupOpen = "popupOpen",
    /**
     * popup弹窗关闭
     */
    popupClose = "popupClose",
    /**
     * tooltip弹窗打开后
     */
    tooltipOpen = "tooltipOpen",
    /**
     * tooltip弹窗关闭
     */
    tooltipClose = "tooltipClose",
    /**
     * 左键单击  鼠标事件
     */
    click = "click",
    /**
     * 左键单击到矢量或模型数据时 鼠标事件
     */
    clickGraphic = "clickGraphic",
    /**
     * 左键单击到wms或arcgis瓦片服务的对应矢量数据时
     */
    clickTileGraphic = "clickTileGraphic",
    /**
     * 左键单击地图空白（未单击到矢量或模型数据）时 鼠标事件
     */
    clickMap = "clickMap",
    /**
     * 左键双击  鼠标事件
     */
    dblClick = "dblClick",
    /**
     * 左键鼠标按下 鼠标事件
     */
    leftDown = "leftDown",
    /**
     * 左键鼠标按下后释放   鼠标事件
     */
    leftUp = "leftUp",
    /**
     * 鼠标移动   鼠标事件
     */
    mouseMove = "mouseMove",
    /**
     * 鼠标移动（拾取目标，并延迟处理） 鼠标事件
     */
    mouseMoveTarget = "mouseMoveTarget",
    /**
     * 鼠标滚轮滚动  鼠标事件
     */
    wheel = "wheel",
    /**
     * 右键单击 鼠标事件
     */
    rightClick = "rightClick",
    /**
     * 右键鼠标按下  鼠标事件
     */
    rightDown = "rightDown",
    /**
     * 右键鼠标按下后释放   鼠标事件
     */
    rightUp = "rightUp",
    /**
     * 中键单击 鼠标事件
     */
    middleClick = "middleClick",
    /**
     * 中键鼠标按下  鼠标事件
     */
    middleDown = "middleDown",
    /**
     * 中键鼠标按下后释放 鼠标事件
     */
    middleUp = "middleUp",
    /**
     * 在触摸屏上两指缩放开始 鼠标事件
     */
    pinchStart = "pinchStart",
    /**
     * 在触摸屏上两指缩放结束  鼠标事件
     */
    pinchEnd = "pinchEnd",
    /**
     * 在触摸屏上两指移动 鼠标事件
     */
    pinchMove = "pinchMove",
    /**
     * 鼠标按下 [左中右3键都触发] 鼠标事件
     */
    mouseDown = "mouseDown",
    /**
     * 鼠标按下后释放 [左中右3键都触发] 鼠标事件
     */
    mouseUp = "mouseUp",
    /**
     * 鼠标移入 鼠标事件
     */
    mouseOver = "mouseOver",
    /**
     * 鼠标移出 鼠标事件
     */
    mouseOut = "mouseOut",
    /**
     * 按键按下 键盘事件
     */
    keydown = "keydown",
    /**
     * 按键按下后释放 键盘事件
     */
    keyup = "keyup",
    /**
     * 开始绘制 标绘事件
     */
    drawStart = "drawStart",
    /**
     * 正在移动鼠标中，绘制过程中鼠标移动了点 标绘事件
     */
    drawMouseMove = "drawMouseMove",
    /**
     * 绘制过程中增加了点 标绘事件
     */
    drawAddPoint = "drawAddPoint",
    /**
     * 绘制过程中删除了最后一个点 标绘事件
     */
    drawRemovePoint = "drawRemovePoint",
    /**
     * 创建完成 标绘事件
     */
    drawCreated = "drawCreated",
    /**
     * 开始编辑 标绘事件
     */
    editStart = "editStart",
    /**
     * 移动鼠标按下左键（LEFT_DOWN）标绘事件
     */
    editMouseDown = "editMouseDown",
    /**
     * 正在移动鼠标中，正在编辑拖拽修改点中（MOUSE_MOVE） 标绘事件
     */
    editMouseMove = "editMouseMove",
    /**
     * 编辑修改了点（LEFT_UP）标绘事件
     */
    editMovePoint = "editMovePoint",
    /**
     * 编辑删除了点 标绘事件
     */
    editRemovePoint = "editRemovePoint",
    /**
     * 图上编辑修改了相关style属性 标绘事件
     */
    editStyle = "editStyle",
    /**
     * 停止编辑 标绘事件
     */
    editStop = "editStop",
    /**
     * 标绘事件
     */
    move = "move",
    /**
     * 3dtiles模型，模型瓦片初始化完成
     * 该回调只执行一次
     */
    initialTilesLoaded = "initialTilesLoaded",
    /**
     * 3dtiles模型,当前批次模型加载完成
     * 该回调会执行多次，视角变化后重新加载一次完成后都会回调
     */
    allTilesLoaded = "allTilesLoaded",
    /**
     * 栅格瓦片图层，添加单个瓦片，开始加载瓦片（请求前）
     */
    addTile = "addTile",
    /**
     * 栅格瓦片图层，添加单个瓦片 加载瓦片完成
     */
    addTileSuccess = "addTileSuccess",
    /**
     * 栅格瓦片图层，添加单个瓦片 加载瓦片出错了
     */
    addTileError = "addTileError",
    /**
     * 栅格瓦片图层，移除单个瓦片
     */
    removeTile = "removeTile",
    /**
     * 相机开启移动前 场景事件
     */
    cameraMoveStart = "cameraMoveStart",
    /**
     * 相机移动完成后 场景事件
     */
    cameraMoveEnd = "cameraMoveEnd",
    /**
     * 相机位置完成 场景事件
     */
    cameraChanged = "cameraChanged",
    /**
     * 场景更新前 场景事件
     */
    preUpdate = "preUpdate",
    /**
     * 场景更新后 场景事件
     */
    postUpdate = "postUpdate",
    /**
     * 场景渲染前 场景事件
     */
    preRender = "preRender",
    /**
     * 场景渲染后 场景事件
     */
    postRender = "postRender",
    /**
     * 场景渲染失败（需要刷新页面）
     */
    renderError = "renderError",
    /**
     * 场景模式(2D/3D/哥伦布)变换前 场景事件
     */
    morphStart = "morphStart",
    /**
     * 完成场景模式(2D/3D/哥伦布)变换 场景事件
     */
    morphComplete = "morphComplete",
    /**
     * 时钟跳动 场景事件
     */
    clockTick = "clockTick"
}

/**
 * 矢量数据类型
 */
declare const enum GraphicType {
    label,
    labelP,
    point,
    pointP,
    billboard,
    divBillboard,
    fontBillboard,
    billboardP,
    model,
    modelP,
    modelCombine,
    plane,
    planeP,
    box,
    boxP,
    circle,
    circleP,
    ellipse,
    cylinder,
    cylinderP,
    coneTrack,
    ellipsoid,
    ellipsoidP,
    polyline,
    curve,
    polylineP,
    polylineSP,
    polylineCombine,
    polylineVolume,
    polylineVolumeP,
    path,
    corridor,
    corridorP,
    wall,
    wallP,
    polygon,
    polygonP,
    polygonCombine,
    rectangle,
    rectangleP,
    frustum,
    water,
    div,
    divLightPoint,
    divUpLabel,
    divBoderLabel,
    particleSystem,
    video2D,
    video3D,
    flatBillboard,
    lightCone,
    scrollWall,
    diffuseWall,
    dynamicRiver,
    road,
    rectangularSensor,
    pit,
    attackArrow,
    attackArrowPW,
    attackArrowYW,
    doubleArrow,
    fineArrow,
    fineArrowYW,
    straightArrow,
    lune,
    sector,
    regular,
    isosTriangle,
    closeVurve,
    gatheringPlace,
    camberRadar,
    conicSensor,
    rectSensor,
    satelliteSensor,
    satellite
}

/**
 * 多语种文本配置，
 * 值为数组，对应{@link LangType}按照固定顺序排列,如：[中文简体,中文繁體,English]
 * @example
 * mars3d.Lang["_单击开始绘制"][mars3d.LangType.ZH] ="新的中文提示语句";
 */
declare const Lang: string;

/**
 * 语言类型  枚举
 */
declare const enum LangType {
    /**
     * 简体中文
     */
    ZH = 0,
    /**
     * 繁体中文(香港、台湾等地区)
     */
    ZHHK = 1,
    /**
     * English英文  en
     */
    EN = 2
}

/**
 * 图层类型
 */
declare const enum LayerType {
    tdt,
    baidu,
    gaode,
    tencent,
    osm,
    google,
    bing,
    mapbox,
    ion,
    image,
    xyz,
    arcgis,
    arcgis_cache,
    wms,
    wmts,
    tms,
    gee,
    tileinfo,
    grid,
    terrain,
    group,
    graphic,
    graphicGroup,
    div,
    geojson,
    lodGraphic,
    wfs,
    arcgis_wfs,
    arcgis_wfs_single,
    model,
    tileset或3dtiles,
    czmGeojson,
    kml,
    czml,
    graticule,
    gaodePOI,
    osmBuildings,
    tdt_dm,
    supermap_s3m,
    supermap_img,
    supermap_mvt,
    mapv,
    echarts,
    heat,
    canvasWind,
    wind
}

/**
 * 材质 类型枚举
 * @example
 * //Entity矢量对象
 * let graphic = new mars3d.graphic.PolylineEntity({
 *   positions: [
 *     [117.169646, 31.769171],
 *     [117.194579, 31.806466],
 *   ],
 *   style: {
 *     width: 5,
 *     material: mars3d.MaterialUtil.createMaterialProperty(mars3d.MaterialType.LineFlow, {
 *       color: '#00ff00',
 *       image: 'img/textures/LinkPulse.png',
 *       speed: 5,
 *     }),
 *   },
 * })
 * graphicLayer.addGraphic(graphic)
 *
 * //Primitive矢量对象
 * var primitive = new mars3d.graphic.PolylinePrimitive({
 *   positions: [
 *     [117.348938, 31.805369, 7.63],
 *     [117.429496, 31.786715, 8.41],
 *   ],
 *   style: {
 *     width: 5,
 *     material: mars3d.MaterialUtil.createMaterial(mars3d.MaterialType.LineFlow, {
 *       color: '#1a9850',
 *       image: 'img/textures/ArrowOpacity.png',
 *       speed: 10,
 *     }),
 *   },
 * })
 * graphicLayer.addGraphic(primitive)
 */
declare module "MaterialType" {
    /**
     * 通用：纯色颜色 材质
     * @property [color = Cesium.Color.WHITE] - 颜色
     */
    const Color: string;
    /**
     * 通用：图片 材质
     * @property image - 图片对象或图片地址
     * @property [repeat = new Cesium.Cartesian2(1.0, 1.0)] - A {@link Cartesian2} Property specifying the number of times the image repeats in each direction.
     * @property [color = Cesium.Color.WHITE] - The color applied to the image
     * @property [transparent = false] - Set to true when the image has transparency (for example, when a png has transparent sections)
     */
    const Image: string;
    /**
     * 通用：网格 材质
     * @property [color = Cesium.Color.WHITE] - A Property specifying the grid {@link Color}.
     * @property [cellAlpha = 0.1] - A numeric Property specifying cell alpha values.
     * @property [lineCount = new Cesium.Cartesian2(8, 8)] - A {@link Cartesian2} Property specifying the number of grid lines along each axis.
     * @property [lineThickness = new Cesium.Cartesian2(1.0, 1.0)] - A {@link Cartesian2} Property specifying the thickness of grid lines along each axis.
     * @property [lineOffset = new Cesium.Cartesian2(0.0, 0.0)] - A {@link Cartesian2} Property specifying starting offset of grid lines along each axis.
     */
    const Grid: string;
    /**
     * 通用：棋盘 材质
     * @property [evenColor = Cesium.Color.WHITE] - A Property specifying the first {@link Cesium.Color}.
     * @property [oddColor = Cesium.Color.BLACK] - A Property specifying the second {@link Cesium.Color}.
     * @property [repeat = new Cesium.Cartesian2(2.0, 2.0)] - A {@link Cesium.Cartesian2} Property specifying how many times the tiles repeat in each direction.
     */
    const Checkerboard: string;
    /**
     * 通用：条纹 材质
     * @property [orientation = Cesium.StripeOrientation.HORIZONTAL] - 条纹方向
     * @property [evenColor = Cesium.Color.WHITE] - A Property specifying the first {@link Color}.
     * @property [oddColor = Cesium.Color.BLACK] - A Property specifying the second {@link Color}.
     * @property [offset = 0] - A numeric Property specifying how far into the pattern to start the material.
     * @property [repeat = 1] - A numeric Property specifying how many times the stripes repeat.
     */
    const Stripe: string;
    /**
     * 通用：水面 材质
     * @property [baseWaterColor = new Cesium.Color(0.2, 0.3, 0.6, 1.0)] - 基础颜色
     * @property [blendColor = new Cesium.Color(0.0, 1.0, 0.699, 1.0)] - 从水中混合到非水域时使用的rgba颜色对象。
     * @property [specularMap] - 单一通道纹理用来指示水域的面积。
     * @property [normalMap] - 水正常扰动的法线图。
     * @property [frequency = 100] - 控制波数的数字。
     * @property [animationSpeed = 0.01] - 控制水的动画速度的数字。
     * @property [amplitude = 10] - 控制水波振幅的数字。
     * @property [specularIntensity = 0.5] - 控制镜面反射强度的数字。
     * @property [fadeFactor = 1.0] - fadeFactor
     */
    const Water: string;
    /**
     * 线：虚线 材质
     * @property [color = Cesium.Color.WHITE] - A Property specifying the {@link Color} of the line.
     * @property [gapColor = Cesium.Color.TRANSPARENT] - A Property specifying the {@link Color} of the gaps in the line.
     * @property [dashLength = 16.0] - A numeric Property specifying the length of the dash pattern in pixels.
     * @property [dashPattern = 255.0] - A numeric Property specifying a 16 bit pattern for the dash
     */
    const PolylineDash: string;
    /**
     * 线：衬色线 材质
     * @property [color = Cesium.Color.WHITE] - A Property specifying the {@link Color} of the line.
     * @property [outlineColor = Cesium.Color.BLACK] - A Property specifying the {@link Color} of the outline.
     * @property [outlineWidth = 1.0] - A numeric Property specifying the width of the outline, in pixels.
     */
    const PolylineOutline: string;
    /**
     * 线：箭头 材质
     * @property [color = Cesium.Color.WHITE] - 颜色
     */
    const PolylineArrow: string;
    /**
     * 线：高亮线 材质
     * @property [color = Cesium.Color.WHITE] - A Property specifying the {@link Color} of the line.
     * @property [glowPower = 0.25] - 高亮强度,占总线宽的百分比表示。
     * @property [taperPower = 1.0] - A numeric Property specifying the strength of the tapering effect, as a percentage of the total line length.  If 1.0 or higher, no taper effect is used.
     */
    const PolylineGlow: string;
    /**
     * 通用：图片 材质2 (没有加载完成前的白色闪烁，但也不支持纯白色的图片)
     * @property image - 图片对象或图片地址
     * @property [opacity = 1.0] - 透明度
     */
    const Image2: string;
    /**
     * 线状: 流动图片效果 材质（适用于线和墙）
     * @property image - 背景图片URL
     * @property [color = new Cesium.Color(1, 0, 0, 1.0)] - 背景图片颜色
     * @property [repeat = new Cesium.Cartesian2(1.0, 1.0)] - 横纵方向重复次数
     * @property [axisY = false] - 是否Y轴朝上
     * @property [speed = 10] - 速度，值越大越快
     * @property [hasImage2 = false] - 是否有2张图片的混合模式
     * @property [image2] - 第2张背景图片URL地址
     * @property [color2 = new Cesium.Color(1, 1, 1)] - 第2张背景图片颜色
     */
    const LineFlow: string;
    /**
     * 线状: 流动颜色效果 材质
     * @property [color = new Cesium.Color(1, 0, 0, 1.0)] - 颜色
     * @property [speed = 2] - 速度，值越大越快
     * @property [percent = 0.04] - 比例
     * @property [alpha = 0.1] - 透明程度 0.0-1.0
     */
    const LineFlowColor: string;
    /**
     * 线状: OD线效果 材质
     * @property [color = new Cesium.Color(1, 0, 0, 1.0)] - 运动对象的颜色
     * @property [options.bgColor] - 线的背景颜色
     * @property [startTime = 0] - 开始的时间
     * @property [speed = 20] - 速度，值越大越快
     * @property [options.bidirectional = 0] - 运行形式：0 正向运动 1 反向运动 2 双向运动
     */
    const ODLine: string;
    /**
     * 线状: 闪烁线 材质
     * @property [color = new Cesium.Color(1.0, 0.0, 0.0, 0.7)] - 线颜色
     * @property [speed = 10] - 速度，值越大越快
     */
    const LineFlicker: string;
    /**
     * 线状: 轨迹线 材质
     * @property [color = new Cesium.Color(1.0, 0.0, 0.0, 0.7)] - 线颜色
     * @property [speed = 5.0] - 速度，值越大越快
     */
    const LineTrail: string;
    /**
     * 墙体:  走马灯围墙 材质
     * @property [image] - 背景图片URL
     * @property [color = new Cesium.Color(1.0, 0.0, 0.0, 0.7)] - 颜色
     * @property [count = 1] - 数量
     * @property [speed = 5.0] - 速度，值越大越快
     */
    const WallScroll: string;
    /**
     * 面状: 用于面状对象的 扫描线放大效果 材质
     * @property [color = new Cesium.Color(1.0, 1.0, 0.0, 1.0)] - 扫描线颜色
     * @property [speed = 10] - 扫描速度，值越大越快
     */
    const ScanLine: string;
    /**
     * 圆形: 扫描效果 材质
     * @property image - 扫描图片URL地址
     * @property [color = new Cesium.Color(1.0, 0.0, 0.0, 1.0)] - 颜色
     */
    const CircleScan: string;
    /**
     * 圆形: 扩散波纹效果 材质
     * @property [color = new Cesium.Color(1.0, 1.0, 0.0, 1.0)] - 颜色
     * @property [speed = 10] - 速度，值越大越快
     * @property [count = 1] - 圆圈个数
     * @property [gradient = 0.1] - 透明度的幂方（0-1）,0表示无虚化效果，1表示虚化成均匀渐变
     */
    const CircleWave: string;
    /**
     * 圆形: 雷达线(圆+旋转半径线) 材质
     * @property [color = new Cesium.Color(0.0, 1.0, 1.0, 0.7)] - 颜色
     * @property [speed = 5.0] - 速度，值越大越快
     */
    const RadarLine: string;
    /**
     * 圆形: 波纹雷达扫描效果 材质
     * @property [color = new Cesium.Color(0.0, 1.0, 1.0, 0.7)] - 颜色
     * @property [speed = 5.0] - 速度，值越大越快
     */
    const RadarWave: string;
    /**
     * 面状: 文字贴图 材质
     * @property text - 文本内容
     * @property [font_family = "楷体"] - 字体 ,可选项：微软雅黑,宋体,楷体,隶书,黑体,
     * @property [font_size = 30] - 字体大小
     * @property [font_weight = "normal"] - 是否加粗 ,可选项：bold (解释：是),normal (解释：否),
     * @property [font_style = "normal"] - 是否斜体 ,可选项：italic (解释：是),normal (解释：否),
     * @property [font = '30px normal normal 楷体'] - 上叙4个属性的一次性指定CSS字体的属性。
     * @property [color = new Cesium.Color(1.0, 1.0, 0.0, 1.0)] - 填充颜色。
     * @property [stroke = true] - 是否描边文本。
     * @property [strokeColor = new Cesium.Color(1.0, 1.0, 1.0, 0.8)] - 描边的颜色。
     * @property [strokeWidth = 2] - 描边的宽度。
     * @property [backgroundColor = new Cesium.Color(1.0, 1.0, 1.0, 0.1)] - 画布的背景色。
     * @property [padding = 10] - 要在文本周围添加的填充的像素大小。
     * @property [textBaseline = 'top'] - 文本的基线。
     */
    const Text: string;
    /**
     * 矩形面： 轮播图  材质
     * @property image - 图片URL
     * @property [color = Cesium.Color.WHITE] - 颜色和透明度
     * @property [speed = 10] - 速度，值越大越快
     * @property [pure = false] - 是否纯色
     */
    const RectSlide: string;
    /**
     * 面状： 渐变面  材质
     * @property [color = new Cesium.Color(1.0, 1.0, 0.0, 0.5)] - 颜色
     * @property [alphaPower = 1.5] - 透明度系数
     * @property [diffusePower = 1.6] - 漫射系数
     */
    const PolyGradient: string;
    /**
     * 面状： 柏油路面效果  材质
     * @property [asphaltColor = new Cesium.Color(0.15, 0.15, 0.15, 1.0)] - 沥青的颜色
     * @property [bumpSize = 0.02] - 块大小
     * @property [roughness = 0.2] - 粗糙度
     */
    const PolyAsphalt: string;
    /**
     * 面状：混合效果 材质
     * @property [lightColor = new Cesium.Color(1.0, 1.0, 1.0, 0.5)] - 浅色的颜色
     * @property [darkColor = new Cesium.Color(0.0, 0.0, 1.0, 0.5)] - 深色的颜色
     * @property [frequency = 10.0] - 频率
     */
    const PolyBlob: string;
    /**
     * 面状：碎石面效果 材质
     * @property [lightColor = new Cesium.Color(0.25, 0.25, 0.25, 0.75)] - 浅色的颜色
     * @property [darkColor = new Cesium.Color(0.75, 0.75, 0.75, 0.75)] - 深色的颜色
     * @property [frequency = 10.0] - 频率
     */
    const PolyFacet: string;
    /**
     * 面状：草地面效果 材质
     * @property [grassColor = new Cesium.Color(0.25, 0.4, 0.1, 1.0)] - 草地的颜色
     * @property [dirtColor = new Cesium.Color(0.1, 0.1, 0.1, 1.0)] - 泥土的颜色
     * @property [patchiness = 1.5] - 斑块分布
     */
    const PolyGrass: string;
    /**
     * 面状：木材面效果 材质
     * @property [lightWoodColor = new Cesium.Color(0.6, 0.3, 0.1, 1.0)] - 浅色的颜色
     * @property [darkWoodColor = new Cesium.Color(0.4, 0.2, 0.07, 1.0)] - 深色的颜色
     * @property [ringFrequency = 3.0] - 环频率
     * @property [noiseScale = new Cesium.Cartesian2(0.7, 0.5)] - 噪波比例
     * @property [grainFrequency = 27.0] - 颗粒的频率
     */
    const PolyWood: string;
    /**
     * 球体: 电弧球体效果  材质
     * @property [color = new Cesium.Color(0.0, 1.0, 1.0, 0.7)] - 颜色
     * @property [speed = 5.0] - 速度，值越大越快
     */
    const EllipsoidElectric: string;
    /**
     * 球体: 波纹球体效果 材质
     * @property [color = new Cesium.Color(0.0, 1.0, 1.0, 0.7)] - 颜色
     * @property [speed = 5.0] - 速度，值越大越快
     */
    const EllipsoidWave: string;
    /**
     * 圆锥: 条纹波纹扩散效果
     * @property [color = new Cesium.Color(2, 1, 0.0, 0.8)] - 颜色
     * @property [repeat = 30] - 圈数量
     * @property [frameRate = 60] - 每秒刷新次数
     */
    const CylinderWave: string;
}

/**
 * 状态 枚举
 */
declare const enum State {
    /**
     * 初始化
     */
    INITIALIZED = "inited",
    /**
     * 已添加到地图上
     */
    ADDED = "added",
    /**
     * 已移除地图
     */
    REMOVED = "removed",
    /**
     * 已销毁对象
     */
    DESTROY = "destroy"
}

/**
 * 地形类型
 */
declare const enum TerrainType {
    /**
     * 无地形
     */
    NONE = "none",
    /**
     * 标准xyz瓦片地形
     */
    XYZ = "xyz",
    /**
     * arcgis地形
     */
    ARCGIS = "arcgis",
    /**
     * ION在线地形(cesium官方服务)
     */
    ION = "ion",
    /**
     * GoogleEarth Enterprise 地形服务
     */
    GEE = "gee",
    /**
     * VR 地形
     */
    VR = "vr"
}

/**
 * SDK中涉及到的所有第3放地图服务的Token令牌key，
 * 【重要提示：为了避免后期失效，请全部重新赋值换成自己的key】
 */
declare module "Token" {
    /**
     * Cesium官方的Ion服务key，
     * 官网： {@link https://cesium.com/ion/signin/}
     */
    const enum ion {
    }
    /**
     * mapbox地图key，
     * 官网：{@link https://account.mapbox.com}
     */
    const enum mapbox {
    }
    /**
     * 微软Bing地图key，
     * 官网： {@link https://www.bingmapsportal.com/Application}
     */
    const enum bing {
    }
    /**
     * 天地图key数组，
     * 官网： {@link https://console.tianditu.gov.cn/api/key}
     */
    const enum tiandituArr {
    }
    /**
     * 天地图key，
     */
    const enum tianditu {
    }
    /**
     * 高德key数组，
     * 官网： {@link https://console.amap.com/dev/key/app}
     */
    const enum gaodeArr {
    }
    /**
     * 高德key，
     */
    const enum gaode {
    }
    /**
     * 百度key数组，
     * 官网： {@link http://lbsyun.baidu.com/apiconsole/key#/home}
     */
    const enum baiduArr {
    }
    /**
     * 百度key，
     */
    const enum baidu {
    }
}

/**
 * 控件 基类
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.insertIndex = null] - 可以自定义插入到父容器中的index顺序，默认是插入到最后面。
 * @param [options.insertBefore = null] - 可以自定义插入到指定兄弟容器的前面，与insertIndex二选一。
 */
declare class BaseControl extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        insertIndex?: Int;
        insertBefore?: HTMLElement;
    });
    /**
     * 设置DOM容器的显示隐藏
     */
    show: boolean;
    /**
     * 当前控件的DOM对象
     */
    readonly container: HTMLElement;
    /**
     * 父容器DOM对象
     */
    readonly parentContainer: HTMLElement;
    /**
     * 父容器DOM对象的ID
     */
    readonly parentContainerId: string;
    /**
     * 添加到地图上，同 map.addControl
     * @param map - 地图对象
     * @returns 当前对象本身，可以链式调用
     */
    addTo(map: Map): this;
    /**
     * 从地图上移除，同map.removeControl
     * @param destroy - 是否调用destroy释放
     * @returns 无
     */
    remove(destroy: boolean): void;
    /**
     * 对象添加到地图前创建一些对象的钩子方法，
     * 只会调用一次
     * @returns 无
     */
    _mountedHook(): void;
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @returns 无
     */
    _addedHook(): void;
    /**
     * 对象从地图上移除的创建钩子方法，
     * 每次remove时都会调用
     * @returns 无
     */
    _removedHook(): void;
    /**
     * 设置新的css样式信息
     * @param style - css样式
     * @returns 无
     */
    setStyle(style: any): void;
    /**
     * 设置对象的启用和禁用状态。
     */
    enabled: boolean;
    /**
     * 销毁当前对象
     * @param [noDel = false] - false:会自动delete释放所有属性，true：不delete绑定的变量
     * @returns 无
     */
    destroy(noDel?: boolean): void;
}

/**
 * 导航球控件
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.rotation = true] - 是否启用调整俯仰角（按中间区域往四周拖拽）
 * @param [options.className = 'mars3d-compass'] - 样式名称，可以外部自定义样式。
 * @param [options.top] - css定位top位置, 如 top: '10px'
 * @param [options.bottom] - css定位bottom位置
 * @param [options.left] - css定位left位置
 * @param [options.right] - css定位right位置
 * @param [options.outerSvg] - 外部圆环区域的SVG图片
 * @param [options.innerSvg] - 中心球区域的SVG图片
 * @param [options.rotationArcSvg] - rotation为true时，按中间区域往四周拖拽时，调整俯仰角的对外部圆环的半弧遮盖SVG图片
 */
declare class Compass extends BaseControl {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        rotation?: boolean;
        className?: string;
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
        outerSvg?: string;
        innerSvg?: string;
        rotationArcSvg?: string;
    });
    /**
     * 更新 外部圆环区域的SVG图片
     * @param svg - SVG图片
     * @returns 无
     */
    setOuterSvg(svg: string): void;
    /**
     * 更新 中心球区域的SVG图片
     * @param svg - SVG图片
     * @returns 无
     */
    setInnerSvg(svg: string): void;
    /**
     * 更新 按中间区域往四周拖拽时，调整俯仰角的对外部圆环的半弧遮盖SVG图片，rotation为true时有效
     * @param svg - SVG图片
     * @returns 无
     */
    setRotationSvg(svg: string): void;
    /**
     * 对象添加到地图前创建一些对象的钩子方法，
     * 只会调用一次
     * @returns 无
     */
    _mountedHook(): void;
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @returns 无
     */
    _addedHook(): void;
    /**
     * 对象从地图上移除的创建钩子方法，
     * 每次remove时都会调用
     * @returns 无
     */
    _removedHook(): void;
}

declare namespace DistanceLegend {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * distanceLegend.on(mars3d.EventType.change, function (event) {
     *   console.log('比例尺发生变化', event)
     * })
     * @property change - 比例尺发生变化
     */
    type EventType = {
        change: string;
    };
}

/**
 * 比例尺 控件
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.top] - css定位top位置, 如 top: '10px'
 * @param [options.bottom] - css定位bottom位置
 * @param [options.left] - css定位left位置
 * @param [options.right] - css定位right位置
 */
declare class DistanceLegend extends BaseControl {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        top?: string;
        bottom?: string;
        left?: string;
        right?: string;
    });
    /**
     * 当前比例尺值（单位：米）
     */
    readonly distance: number;
    /**
     * 对象添加到地图前创建一些对象的钩子方法，
     * 只会调用一次
     * @returns 无
     */
    _mountedHook(): void;
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @returns 无
     */
    _addedHook(): void;
    /**
     * 对象从地图上移除的创建钩子方法，
     * 每次remove时都会调用
     * @returns 无
     */
    _removedHook(): void;
}

declare namespace LocationBar {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.change, function (event) {
     *   console.log('数据变化了', event)
     * })
     * @property change - 数据变化了
     */
    type EventType = {
        change: string;
    };
}

/**
 * 鼠标经纬度等信息状态栏,
 * 一般在页面下侧区域
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.fps = false] - 是否显示实时FPS帧率
 * @param [options.latDecimal = LatLngPoint.FormatLength] - 保留的{lat}和{lng}的小数位
 * @param [options.template] - 展示的内容格式化字符串, 为数组时按多语言顺序定义，如[中文、繁体、英文]
 * 支持以下模版配置：
 * 【鼠标所在位置】 经度:{lng}， 纬度:{lat}， 海拔：{alt}米，
 * 【相机的】 方向角度：{heading}， 俯仰角度：{pitch}， 视高：{cameraHeight}米，
 * 【地图的】 层级：{level}，
 * @param [options.crs] - 按指定坐标系显示坐标值,  配置后template可以加模板：【鼠标所在位置对应的crs坐标系】 X或经度值：{crsx}， Y或纬度值：{crsy}
 * @param [options.crsDecimal = 1] - 保留的{crsx}和{crsy}的小数位
 * @param [options.cacheTime = 100] - 鼠标移动的缓存时间
 * @param [options.style] - 可以CSS样式，如:
 * @param [options.style.top] - css定位top位置, 如 top: '10px'
 * @param [options.style.bottom] - css定位bottom位置
 * @param [options.style.left] - css定位left位置
 * @param [options.style.right] - css定位right位置
 */
declare class LocationBar extends BaseControl {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        fps?: boolean;
        latDecimal?: number;
        template?: Sring | Sring[];
        crs?: string | CRS;
        crsDecimal?: number;
        cacheTime?: number;
        style?: {
            top?: string;
            bottom?: string;
            left?: string;
            right?: string;
        };
    });
    /**
     * 显示的数据
     */
    readonly locationData: any;
}

/**
 * 卷帘对比 控件
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.leftLayer] - 左侧区域瓦片图层
 * @param [options.leftLayer] - 右侧区域瓦片图层
 */
declare class MapSplit extends BaseControl {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        leftLayer?: BaseTileLayer;
        leftLayer?: BaseTileLayer;
    });
    /**
     * 左侧区域瓦片图层
     */
    leftLayer: BaseTileLayer;
    /**
     * 右侧区域瓦片图层
     */
    rightLayer: BaseTileLayer;
    /**
     * 对瓦片图层设置卷帘方向
     * @param layer - 图层
     * @param splitDirection - 图层显示的方向
     * @returns 无
     */
    setLayerSplitDirection(layer: BaseTileLayer | GroupLayer, splitDirection: Cesium.ImagerySplitDirection): void;
    /**
     * 对象添加到地图前创建一些对象的钩子方法，
     * 只会调用一次
     * @returns 无
     */
    _mountedHook(): void;
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @returns 无
     */
    _addedHook(): void;
    /**
     * 对象从地图上移除的创建钩子方法，
     * 每次remove时都会调用
     * @returns 无
     */
    _removedHook(): void;
}

/**
 * 鼠标旋转、放大时的按键效果美化图标
 */
declare class MouseDownView extends BaseControl {
}

/**
 * 鹰眼地图 控件
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param options.basemap - 瓦片底图图层配置
 * @param [options.layers] - 可以叠加显示的图层配置
 * @param [options.scene] - 鹰眼地图场景参数
 * @param [options.rectangle] - 矩形区域样式信息，不配置时不显示矩形。
 * @param [options.style] - 可以CSS样式，如:
 * @param [options.style.top] - css定位top位置, 如 top: '10px'
 * @param [options.style.bottom] - css定位bottom位置
 * @param [options.style.left] - css定位left位置
 * @param [options.style.right] - css定位right位置
 */
declare class OverviewMap extends BaseControl {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        basemap: Map.basemapOptions;
        layers?: Map.layerOptions[];
        scene?: Map.sceneOptions;
        rectangle?: RectangleEntity.StyleOptions;
        style?: {
            top?: string;
            bottom?: string;
            left?: string;
            right?: string;
        };
    });
    /**
     * 鹰眼小地图对象
     */
    smallMap: Map;
    /**
     * 对象添加到地图前创建一些对象的钩子方法，
     * 只会调用一次
     * @returns 无
     */
    _mountedHook(): void;
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @returns 无
     */
    _addedHook(): void;
    /**
     * 对象从地图上移除的创建钩子方法，
     * 每次remove时都会调用
     * @returns 无
     */
    _removedHook(): void;
}

declare namespace ToolButton {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * control.on(mars3d.EventType.click, function (event) {
     *   console.log('单击了按钮', event)
     * })
     * @property click - 单击了按钮
     */
    type EventType = {
        click: string;
    };
}

/**
 * 工具栏 单个按钮控件
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.title = ''] - 按钮标题
 * @param [options.icon = 'fa fa-tasks'] - 按钮字体图标class名
 * @param [options.click] - 按钮单击后的回调方法
 */
declare class ToolButton extends BaseControl {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        title?: string;
        icon?: string;
        click?: (...params: any[]) => any;
    });
    /**
     * 父容器DOM对象
     */
    readonly parentContainer: HTMLElement;
}

/**
 * 放大缩小按钮控件
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.zoomOutClass = 'fa fa-minus'] - 缩小按钮字体图标class名
 * @param [options.zoomInClass = 'fa fa-plus'] - 放大按钮字体图标class名
 */
declare class Zoom extends BaseControl {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        zoomOutClass?: string;
        zoomInClass?: string;
    });
    /**
     * 父容器DOM对象
     */
    readonly parentContainer: HTMLElement;
}

/**
 * 基础类，SDK中几乎所有类的基类，都是继承该基类的。
 * @param options - 参数名称
 */
declare class BaseClass {
    constructor(options: any);
    /**
     * 销毁当前对象
     * @param [noDel = false] - false:会自动delete释放所有属性，true：不delete绑定的变量
     * @returns 无
     */
    destroy(noDel?: boolean): void;
    /**
     * 绑定指定类型事件监听器
     * @param types - 事件类型
     * @param fn - 绑定的监听器回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 当前对象本身,可以链式调用
     */
    on(types: EventType | EventType[], fn: (...params: any[]) => any, context: any): this;
    /**
     * 解除绑定指定类型事件监听器
     * @param types - 事件类型
     * @param fn - 绑定的监听器回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 当前对象本身,可以链式调用
     */
    off(types: EventType | EventType[], fn: (...params: any[]) => any, context: any): this;
    /**
     * 触发指定类型的事件。
     * @param type - 事件类型
     * @param data - 传输的数据或对象，可在事件回调方法中event对象中获取进行使用
     * @param [propagate = null] - 将事件传播给父类 (用addEventParent设置)
     * @returns 当前对象本身,可以链式调用
     */
    fire(type: EventType, data: any, propagate?: BaseClass): this;
    /**
     * 是否有绑定指定的事件
     * @param type - 事件类型
     * @param [propagate = null] - 是否判断指定的父类 (用addEventParent设置的)
     * @returns 是否存在
     */
    listens(type: EventType, propagate?: BaseClass): boolean;
    /**
     * 绑定一次性执行的指定类型事件监听器
     * 与on类似，监听器只会被触发一次，然后被删除。
     * @param types - 事件类型
     * @param fn - 绑定的监听器回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 当前对象本身,可以链式调用
     */
    once(types: EventType | EventType[], fn: (...params: any[]) => any, context: any): this;
    /**
     * 添加抛出事件到父类，它将接收传播的事件
     * @param obj - 父类对象
     * @returns 当前对象本身,可以链式调用
     */
    addEventParent(obj: any): this;
    /**
     * 移除抛出事件到父类
     * @param obj - 父类对象
     * @returns 当前对象本身,可以链式调用
     */
    removeEventParent(obj: any): this;
    /**
     * 是否绑定了抛出事件到指定父类
     * @param obj - 父类对象
     * @returns 当前对象本身,可以链式调用
     */
    hasEventParent(obj: any): this;
}

declare namespace BaseThing {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.add, function (event) {
     *   console.log('添加了对象', event)
     * })
     * @property add - 添加对象
     * @property remove - 移除对象
     */
    type EventType = {
        add: string;
        remove: string;
    };
}

/**
 * Thing对象(如特效、分析、管理类等) 的基类
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.stopPropagation = false] - 当前类中事件是否停止冒泡, false时：事件冒泡到map中。
 */
declare class BaseThing extends BaseClass {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        stopPropagation?: boolean;
    });
    /**
     * 内置唯一标识ID
     */
    readonly uuid: string;
    /**
     * 当前对象的状态
     */
    readonly state: State;
    /**
     * 是否已添加到地图
     */
    readonly isAdded: boolean;
    /**
     * 对象的id标识
     */
    id: string | number;
    /**
     * 设置对象的启用和禁用状态。
     */
    enabled: boolean;
    /**
     * 添加到地图上，同 map.addThing
     * @param map - 地图对象
     * @returns 当前对象本身，可以链式调用
     */
    addTo(map: Map): this;
    /**
     * 从地图上移除，同map.removeThing
     * @param destroy - 是否调用destroy释放
     * @returns 无
     */
    remove(destroy: boolean): void;
    /**
     * 对象添加到地图前创建一些对象的钩子方法，
     * 只会调用一次
     * @returns 无
     */
    _mountedHook(): void;
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @returns 无
     */
    _addedHook(): void;
    /**
     * 对象从地图上移除的创建钩子方法，
     * 每次remove时都会调用
     * @returns 无
     */
    _removedHook(): void;
    /**
     * 销毁当前对象
     * @param [noDel = false] - false:会自动delete释放所有属性，true：不delete绑定的变量
     * @returns 无
     */
    destroy(noDel?: boolean): void;
}

/**
 * 近地天空盒, 在场景周围绘制星星等太空背景。
 * 天空盒子是用真正的赤道平均春分点(TEME)轴定义的。仅在3D中支持。当转换为2D或哥伦布视图时，天空盒会淡出。
 * 天空盒子的大小不能超过{@link Cesium.Scene#maximumCubeMapSize}。
 * @example
 * scene.skyBox = new mars3d.GroundSkyBox({
 *   sources : {
 *     positiveX : 'skybox_px.png',
 *     negativeX : 'skybox_nx.png',
 *     positiveY : 'skybox_py.png',
 *     negativeY : 'skybox_ny.png',
 *     positiveZ : 'skybox_pz.png',
 *     negativeZ : 'skybox_nz.png'
 *   }
 * });
 * @param options - 对象，具有以下属性:
 * @param [options.sources] - 天空盒的6个立方体映射面的图片url
 * @param [options.sources.positiveX] - 映射面的图片url
 * @param [options.sources.negativeX] - 映射面的图片url
 * @param [options.sources.positiveY] - 映射面的图片url
 * @param [options.sources.negativeY] - 映射面的图片url
 * @param [options.sources.positiveZ] - 映射面的图片url
 * @param [options.sources.negativeZ] - 映射面的图片url
 * @param [options.show = true] - 是否显示
 */
declare class GroundSkyBox extends Cesium.SkyBox {
    constructor(options: {
        sources?: {
            positiveX?: string;
            negativeX?: string;
            positiveY?: string;
            negativeY?: string;
            positiveZ?: string;
            negativeZ?: string;
        };
        show?: boolean;
    });
}

/**
 * 坐标数组处理类
 */
declare class LatLngArray {
    /**
     * 根据传入的各种对象数据数组，转换返回Cartesian3数组
     * @param value - 坐标位置数组
     * @returns 转换返回的Cartesian3数组
     */
    static toCartesians(value: String[] | any[][] | LatLngPoint[]): Cesium.Cartesian3[];
    /**
     * 根据传入的各种对象数据数组，转换返回LatLngPoint数组
     * @param value - 坐标位置数组
     * @returns 转换返回的LatLngPoint数组
     */
    static toPoints(value: String[] | any[][] | Cesium.Cartesian3[]): LatLngPoint[];
    /**
     * 根据传入的各种对象数据数组，转换返回经纬度坐标数组
     * @param value - 坐标位置数组
     * @param noAlt - 是否包含高度值
     * @returns 经纬度坐标数组,示例：[ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7] ]
     */
    static toArray(value: String[] | any[][] | Cesium.Cartesian3[], noAlt: boolean): any[][];
}

/**
 * 坐标点类（含经度、纬度、高度）
 * @param lng - 经度值, -180 至 180
 * @param lat - 纬度值, -90 至 90
 * @param alt - 高度（单位：米）
 */
declare class LatLngPoint {
    constructor(lng: number, lat: number, alt: number);
    /**
     * 经度值, -180 至 180
     */
    lng: number;
    /**
     * 纬度值, -180 至 180
     */
    lat: number;
    /**
     * 高度（单位：米）
     */
    alt: number;
    /**
     * 复制一份对象
     * @returns 无
     */
    clone(): void;
    /**
     * 格式化对象内的经纬度的小数位为6位，高度小数位为1位。
     * @returns 当前对象本身，可以链式调用
     */
    format(): this;
    /**
     * 转换为数组对象
     * @param noAlt - 是否包含高度值
     * @returns 数组对象，示例[113.123456,31.123456,30.1]
     */
    toArray(noAlt: boolean): any[];
    /**
     * 转换为字符串对象
     * @returns 符串，示例 "113.123456,31.123456,30.1"
     */
    toString(): string;
    /**
     * 转换为笛卡尔坐标
     * @param clone - 是否复制
     * @returns 笛卡尔坐标
     */
    toCartesian(clone: boolean): Cesium.Cartesian3;
    /**
     * 转换为 地理坐标(弧度制)
     * @returns 地理坐标(弧度制)
     */
    toCartographic(): Cesium.Cartographic;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: LatLngPoint): boolean;
    /**
     * 根据传入的各种对象数据，转换返回LatLngPoint对象
     * @param position - 坐标位置
     * @param [time = Cesium.JulianDate.now()] - Cesium坐标时，getValue传入的时间值
     * @returns 转换返回的LatLngPoint对象
     */
    static parse(position: string | any[] | any | Cesium.Cartesian3 | any, time?: Cesium.JulianDate): LatLngPoint;
    /**
     * 根据数组数据，转换返回LatLngPoint对象
     * 示例：[113.123456,31.123456,30.1]
     * @param arr - 坐标位置
     * @returns 转换返回的LatLngPoint对象
     */
    static fromArray(arr: any[]): LatLngPoint;
    /**
     * 根据传入字符串，转换返回LatLngPoint对象
     * 示例："113.123456,31.123456,30.1"
     * @param str - 坐标位置字符串，逗号分割。
     * @returns 转换返回的LatLngPoint对象
     */
    static fromString(str: string): LatLngPoint;
    /**
     * 根据传入的笛卡尔坐标，转换返回LatLngPoint对象
     * @param cartesian - 坐标位置
     * @param [time = Cesium.JulianDate.now()] - Cesium坐标时，getValue传入的时间值
     * @returns 转换返回的LatLngPoint对象
     */
    static fromCartesian(cartesian: Cesium.Cartesian3 | any, time?: Cesium.JulianDate): LatLngPoint;
    /**
     * 根据传入的地理坐标(弧度制)，转换返回LatLngPoint对象
     * @param cartographic - 地理坐标(弧度制)
     * @returns 转换返回的LatLngPoint对象
     */
    static fromCartographic(cartographic: Cesium.Cartographic): LatLngPoint;
    /**
     * 经度纬度的格式化时的长度，默认为6
     */
    static FormatLength: number;
    /**
     * 高度的格式化时的长度，默认为1
     */
    static FormatAltLength: number;
}

/**
 * 特效 基类
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 */
declare class BaseEffect extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
    });
    /**
     * 特效对象
     */
    readonly target: Cesium.PostProcessStage;
    /**
     * 特效对象的uniforms
     * 一个对象，它的属性被用来设置片段着色器shader。
     * <p>
     * 对象属性值可以是常量或函数。这个函数将在每一帧后处理阶段执行之前被调用。
     * </p>
     * <p>
     *  常量值也可以是图像的URI、数据URI，或者可以用作纹理的HTML元素，如HTMLImageElement或HTMLCanvasElement。
     * </p>
     * <p>
     * 如果这个后处理阶段是{@link Cesium.PostProcessStageComposite}中不串行执行的部分，那么常量值也可以是复合程序中另一个阶段的名称。这将设置统一的输出纹理与该名称的舞台。
     * </p>
     */
    readonly uniforms: any;
}

/**
 * 黑白效果
 * @param options - 参数对象，包括以下：
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.gradations = 4.0] - 渐变
 */
declare class BlackAndWhiteEffect extends BaseEffect {
    constructor(options: {
        enabled?: boolean;
        gradations?: number;
    });
    /**
     * 渐变
     */
    gradations: number;
}

/**
 * 泛光效果, 使明亮的区域更亮，黑暗的区域更暗。
 * @param options - 参数对象，包括以下：
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.contrast = 128] - 对比度,取值范围[-255.0,255.0]
 * @param [options.brightness = -0.3] - 亮度, 将输入纹理的RGB值转换为色相、饱和度和亮度(HSB)，然后将该值添加到亮度中。
 * @param [options.delta = 1.0] - 增量
 * @param [options.sigma = 3.78] - delta和sigma用于计算高斯滤波器的权值。方程是 <code>exp((-0.5 * delta * delta) / (sigma * sigma))</code>。
 * @param [options.stepSize = 5.0] - 步长,是下一个texel的距离
 */
declare class BloomEffect extends BaseEffect {
    constructor(options: {
        enabled?: boolean;
        contrast?: number;
        brightness?: number;
        delta?: number;
        sigma?: number;
        stepSize?: number;
    });
    /**
     * 对比度,取值范围[-255.0,255.0]
     */
    contrast: number;
    /**
     * 亮度, 将输入纹理的RGB值转换为色相、饱和度和亮度(HSB)，然后将该值添加到亮度中
     */
    brightness: number;
    /**
     * 增量.方程是 <code>exp((-0.5 * delta * delta) / (sigma * sigma))</code>。
     */
    delta: number;
    /**
     * delta和sigma用于计算高斯滤波器的权值。方程是 <code>exp((-0.5 * delta * delta) / (sigma * sigma))</code>。
     */
    sigma: number;
    /**
     * 步长,是下一个texel的距离
     */
    stepSize: number;
}

/**
 * 亮度
 * @param options - 参数对象，包括以下：
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.brightness = 2.0] - 亮度值
 */
declare class BrightnessEffect extends BaseEffect {
    constructor(options: {
        enabled?: boolean;
        brightness?: number;
    });
    /**
     * 亮度, 将输入纹理的RGB值转换为色相、饱和度和亮度(HSB)，然后将该值添加到亮度中
     */
    brightness: number;
}

/**
 * 云团 效果
 * @param options - 参数对象，包括以下：
 */
declare class CloudVolumeEffect extends BaseEffect {
    constructor(options: any);
    /**
     * 最大云彩距离
     */
    maxDis: number;
    /**
     * 第一个值:最低高度（相机低于这个高度就不显示云彩）,第二个是最大高度
     */
    cloudLimit: number;
    /**
     * 最大透明度
     */
    maxAlpha: number;
    /**
     * 密度系数
     */
    density: number;
    /**
     * 光追步长
     */
    setpDis: number;
}

/**
 * 景深
 * @param options - 参数对象，包括以下：
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.focalDistance = 87] - 焦距，是以米为单位的距离来设定相机的焦距。
 * @param [options.delta = 1.0] - 增量
 * @param [options.sigma = 3.78] - delta和sigma用于计算高斯滤波器的权值。方程是 <code>exp((-0.5 * delta * delta) / (sigma * sigma))</code>。
 * @param [options.stepSize = 5.0] - 步长,是下一个texel的距离
 */
declare class DepthOfFieldEffect extends BaseEffect {
    constructor(options: {
        enabled?: boolean;
        focalDistance?: number;
        delta?: number;
        sigma?: number;
        stepSize?: number;
    });
    /**
     * 焦距，是以米为单位的距离来设定相机的焦距。
     */
    focalDistance: number;
    /**
     * 增量.方程是 <code>exp((-0.5 * delta * delta) / (sigma * sigma))</code>。
     */
    delta: number;
    /**
     * delta和sigma用于计算高斯滤波器的权值。方程是 <code>exp((-0.5 * delta * delta) / (sigma * sigma))</code>。
     */
    sigma: number;
    /**
     * 步长,是下一个texel的距离
     */
    stepSize: number;
}

/**
 * 雾场景效果
 * @param options - 参数对象，包括以下：
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.fogByDistance = new Cesium.Cartesian4(10, 0.0, 1000, 0.9)] - 雾强度
 * @param [options.color = Cesium.Color.WHITE] - 雾颜色
 * @param [options.maxHeight = 9000] - 最高限定高度，超出该高度不显示雾场景效果
 */
declare class FogEffect extends BaseEffect {
    constructor(options: {
        enabled?: boolean;
        fogByDistance?: Cesium.Cartesian4;
        color?: Cesium.Color;
        maxHeight?: number;
    });
    /**
     * 雾强度
     */
    fogByDistance: Cesium.Cartesian4;
    /**
     * 雾颜色
     */
    color: Cesium.Color;
    /**
     * 最高限定高度，超出该高度不显示雾场景效果
     */
    maxHeight: number;
}

/**
 * 倒影效果
 * @param options - 参数对象，包括以下：
 * @param [options.enabled = true] - 对象的启用状态
 */
declare class InvertedEffect extends BaseEffect {
    constructor(options: {
        enabled?: boolean;
    });
}

/**
 * 马赛克效果
 * @param options - 参数对象，包括以下：
 * @param [options.enabled = true] - 对象的启用状态
 */
declare class MosaicEffect extends BaseEffect {
    constructor(options: {
        enabled?: boolean;
    });
}

/**
 * 夜视效果
 * @param options - 参数对象，包括以下：
 * @param [options.enabled = true] - 对象的启用状态
 */
declare class NightVisionEffect extends BaseEffect {
    constructor(options: {
        enabled?: boolean;
    });
}

/**
 * 下雨效果
 * @param options - 参数对象，包括以下：
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.speed = 10] - 速度
 */
declare class RainEffect extends BaseEffect {
    constructor(options: {
        enabled?: boolean;
        speed?: number;
    });
    /**
     * 速度
     */
    speed: number;
}

/**
 * 地面积雪 效果
 * @param options - 参数对象，包括以下：
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.alpha = 1.0] - 覆盖强度  0-1
 * @param [options.maxHeight = 9000] - 最高限定高度，超出该高度不显示积雪效果
 */
declare class SnowCoverEffect extends BaseEffect {
    constructor(options: {
        enabled?: boolean;
        alpha?: number;
        maxHeight?: number;
    });
    /**
     * 最高限定高度，超出该高度不显示积雪效果
     */
    maxHeight: number;
    /**
     * 覆盖强度  0-1
     */
    alpha: number;
}

/**
 * 下雪效果
 * @param options - 参数对象，包括以下：
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.speed = 10] - 速度
 */
declare class SnowEffect extends BaseEffect {
    constructor(options: {
        enabled?: boolean;
        speed?: number;
    });
    /**
     * 速度
     */
    speed: number;
}

declare namespace BaseGraphic {
    /**
     * 矢量数据 通用构造参数
     * @property [id = uuid()] - 矢量数据id标识
     * @property [name = ''] - 矢量数据名称
     * @property [show = true] - 矢量数据是否显示
     * @property position - 【点状】矢量数据时的坐标位置，具体看子类实现
     * @property positions - 【线面状（多点）】矢量数据时的坐标位置，具体看子类实现
     * @property style - 矢量数据的 样式信息，具体见各类数据的说明
     * @property [attr] - 矢量数据的 属性信息，可以任意附加属性。
     * @property [geojson] - 允许直接传入geojson格式规范数据，内部自动解析。【部分矢量对象】
     * @property [popup] - 当矢量数据支持popup弹窗时，绑定的值
     * @property [popupOptions] - popup弹窗时的配置参数
     * @property [tooltip] - 当矢量数据支持tooltip弹窗时，绑定的值
     * @property [tooltipOptions] - tooltip弹窗时的配置参数
     * @property [contextmenuItems] - 当矢量数据支持右键菜单时，绑定的值
     * @property [stopPropagation = false] - 当前类中事件是否停止冒泡, false时：事件冒泡到layer种。
     */
    type ConstructorOptions = {
        id?: string | number;
        name?: string;
        show?: boolean;
        position: LatLngPoint | Cesium.Cartesian3;
        positions: LatLngPoint[] | Cesium.Cartesian3[];
        style: any;
        attr?: any;
        geojson?: any;
        popup?: any;
        popupOptions?: Popup.StyleOptions;
        tooltip?: any;
        tooltipOptions?: Popup.StyleOptions;
        contextmenuItems?: any;
        stopPropagation?: boolean;
    };
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * graphic.on(mars3d.EventType.click, function (event) {
     *   console.log('单击了矢量数据对象', event)
     * })
     * @property add - 添加对象
     * @property remove - 移除对象
     * @property show - 显示了对象
     * @property hide - 隐藏了对象
     * @property popupOpen - popup弹窗打开后
     * @property popupClose - popup弹窗关闭
     * @property tooltipOpen - tooltip弹窗打开后
     * @property tooltipClose - tooltip弹窗关闭
     */
    type EventType = {
        add: string;
        remove: string;
        show: string;
        hide: string;
        popupOpen: string;
        popupClose: string;
        tooltipOpen: string;
        tooltipClose: string;
    };
}

/**
 * 矢量数据 基础类
 * @param options - 描述初始化构造参数选项的对象
 */
declare class BaseGraphic extends BaseClass {
    constructor(options: BaseGraphic.ConstructorOptions);
    /**
     * 矢量数据类型
     */
    readonly type: string;
    /**
     * 内置唯一标识ID
     */
    readonly uuid: string;
    /**
     * 对象的id标识
     */
    id: string | number;
    /**
     * 当前对象的状态
     */
    readonly state: State;
    /**
     * 是否已添加到图层
     */
    readonly isAdded: boolean;
    /**
     * 是否已经销毁了
     */
    readonly isDestroy: boolean;
    /**
     * 显示隐藏状态
     */
    show: boolean;
    /**
     * 名称
     */
    name: string;
    /**
     * 属性信息
     */
    attr: any;
    /**
     * 样式信息
     */
    style: any;
    /**
     * 中心点坐标（笛卡尔坐标）
     */
    readonly center: Cesium.Cartesian3;
    /**
     * 中心点坐标
     */
    readonly centerPoint: LatLngPoint;
    /**
     * 添加到图层上，同  layer.addGraphic
     * @param layer - 图层对象
     * @returns 当前对象本身，可以链式调用
     */
    addTo(layer: GraphicLayer): this;
    /**
     * 从图层上移除，同 layer.removeGraphic
     * @param hasDestory - 是否调用destroy释放
     * @returns 无
     */
    remove(hasDestory: boolean): void;
    /**
     * 绑定Cesium内部对象进行相关管理。
     * @param item - Cesium对象
     * @returns 当前对象本身，可以链式调用
     */
    bindPickId(item: any): this;
    /**
     * 对象添加到图层前创建一些对象的钩子方法，
     * 只会调用一次
     * @returns 无
     */
    _mountedHook(): void;
    /**
     * 对象添加到图层上的创建钩子方法，
     * 每次add时都会调用
     * @param style - 完整样式信息
     * @returns 无
     */
    _addedHook(style: any): void;
    /**
     * 对象从图层上移除的创建钩子方法，
     * 每次remove时都会调用
     * @returns 无
     */
    _removedHook(): void;
    /**
     * 重新赋值参数，同构造方法参数一致。
     * @param options - 参数,与类的构造方法参数相同
     * @returns 当前对象本身，可以链式调用
     */
    setOptions(options: any): this;
    /**
     * 设置 样式信息 的钩子方法
     * @param newStyle - 本次更新的部分样式信息,内部会合并属性
     * @returns 当前对象本身，可以链式调用
     */
    setStyle(newStyle: any): this;
    /**
     * 将矢量数据导出为GeoJSON格式规范对象。
     * @param [options] - 参数对象:
     * @param [options.noAlt] - 不导出高度值
     * @returns GeoJSON格式规范对象
     */
    toGeoJSON(options?: {
        noAlt?: boolean;
    }): any;
    /**
     * 将矢量数据的坐标、样式及属性等信息导出为对象，可以用于存储。
     * @returns 导出的坐标、样式及属性等信息
     */
    toJSON(): any;
    /**
     * 获取矢量数据位置的 矩形边界值
     * @param [isFormat = true] - 是否格式化，格式化时示例： { xmin: 73.16895, xmax: 134.86816, ymin: 12.2023, ymax: 54.11485 }
     * @returns isFormat：true时，返回格式化对象，isFormat：false时返回Cesium.Rectangle对象
     */
    getExtent(isFormat?: boolean): Cesium.Rectangle | any;
    /**
     * 飞行定位至 数据所在的视角
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.minHeight] - 定位时相机的最小高度值，用于控制避免异常数据
     * @param [options.maxHeight] - 定位时相机的最大高度值，用于控制避免异常数据
     * @param options.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param options.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param options.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 当前对象本身，可以链式调用
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        minHeight?: number;
        maxHeight?: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): this;
    /**
     * 绑定鼠标移入或单击后的 对象高亮
     * @param [options] - 高亮的样式，具体见各{@link GraphicType}矢量数据的style参数。
     * @param [options.type] - 事件类型，默认为鼠标移入高亮，也可以指定'click'单击高亮.
     * @returns 无
     */
    bindHighlight(options?: {
        type?: string;
    }): void;
    /**
     * 解绑鼠标移入或单击后的高亮处理
     * @returns 无
     */
    unbindHighlight(): void;
    /**
     * 是否存在Popup绑定
     * @returns 是否存在Popup绑定
     */
    hasPopup(): boolean;
    /**
     * 绑定鼠标单击对象后的弹窗。
     * @param content - 弹窗内容html字符串，或者回调方法。
     * @param options - 控制参数
     * @returns 当前对象本身，可以链式调用
     */
    bindPopup(content: string | ((...params: any[]) => any), options: Popup.StyleOptions): this;
    /**
     * 解除绑定的鼠标单击对象后的弹窗。
     * @param [stopPropagation = false] - 单击事件中是否继续冒泡查找
     * @returns 当前对象本身，可以链式调用
     */
    unbindPopup(stopPropagation?: boolean): this;
    /**
     * 打开绑定的弹窗
     * @param [position = this.center] - 矢量对象 或 显示的位置
     * @param [event] - 用于抛出事件时的相关额外属性
     * @returns 当前对象本身，可以链式调用
     */
    openPopup(position?: LatLngPoint | Cesium.Cartesian3, event?: any): this;
    /**
     * 关闭弹窗
     * @returns 当前对象本身，可以链式调用
     */
    closePopup(): this;
    /**
     * 是否绑定了tooltip
     * @returns 是否绑定
     */
    hasTooltip(): boolean;
    /**
     * 绑定鼠标移入的弹窗
     * @param content - 弹窗内容html字符串，或者回调方法。
     * @param options - 控制参数
     * @returns 当前对象本身，可以链式调用
     */
    bindTooltip(content: string | ((...params: any[]) => any), options: Popup.StyleOptions): this;
    /**
     * 解除绑定的鼠标移入对象后的弹窗。
     * @param [stopPropagation = false] - 单击事件中是否继续冒泡查找
     * @returns 当前对象本身，可以链式调用
     */
    unbindTooltip(stopPropagation?: boolean): this;
    /**
     * 打开绑定的tooltip弹窗
     * @param [position = this.center] - 显示的位置,默认为矢量对象所在点或中心点位置
     * @param [event] - 用于抛出事件时的相关额外属性
     * @returns 当前对象本身，可以链式调用
     */
    openTooltip(position?: LatLngPoint | Cesium.Cartesian3, event?: any): this;
    /**
     * 关闭弹窗
     * @returns 当前对象本身，可以链式调用
     */
    closeTooltip(): this;
    /**
     * 是否有绑定的右键菜单
     * @returns 当前对象本身，可以链式调用
     */
    hasContextMenu(): this;
    /**
     * 获取绑定的右键菜单数组
     * @returns 右键菜单数组
     */
    getContextMenu(): object[];
    /**
     * 绑定右键菜单
     * @example
     * graphic.bindContextMenu([
     *         {
     *           text: '删除对象',
     *           iconCls: 'fa fa-trash-o',
     *           callback: function (e) {
     *             let graphic = e.graphic
     *             if (graphic) {
     *               graphic.remove()
     *             }
     *           },
     *         },
     *       ])
     * @param content - 右键菜单配置数组，数组中每一项包括：
     * @param [content.text] - 菜单文字
     * @param [content.iconCls] - 小图标css
     * @param [content.show] - 菜单项是否显示的回调方法
     * @param [content.callback] - 菜单项单击后的回调方法
     * @param [content.children] - 当有二级子菜单时，配置数组。
     * @param [options = {}] - 参数对象(预留，目前未用)
     * @returns 当前对象本身，可以链式调用
     */
    bindContextMenu(content: {
        text?: string;
        iconCls?: string;
        show?: ((...params: any[]) => any) | boolean;
        callback?: (...params: any[]) => any;
        children?: object[];
    }[], options?: any): this;
    /**
     * 解除绑定的右键菜单
     * @param [stopPropagation = false] - 单击事件中是否继续冒泡查找
     * @returns 当前对象本身，可以链式调用
     */
    unbindContextMenu(stopPropagation?: boolean): this;
    /**
     * 打开右键菜单
     * @param [position = this.center] - 矢量对象 或 显示的位置
     * @returns 当前对象本身，可以链式调用
     */
    openContextMenu(position?: Cesium.Cartesian3): this;
    /**
     * 关闭右键菜单
     * @returns 当前对象本身，可以链式调用
     */
    closeContextMenu(): this;
    /**
     * 显示小提示窗，一般用于鼠标操作的提示。
     * @param position - 显示的屏幕坐标位置 或 笛卡尔坐标位置
     * @param message - 显示的内容
     * @returns 当前对象本身，可以链式调用
     */
    openSmallTooltip(position: Cesium.Cartesian2 | Cesium.Cartesian3, message: any): this;
    /**
     * 关闭小提示窗
     * @returns 当前对象本身，可以链式调用
     */
    closeSmallTooltip(): this;
    /**
     * 销毁当前对象
     * @param [noDel = false] - false:会自动delete释放所有属性，true：不delete绑定的变量
     * @returns 无
     */
    destroy(noDel?: boolean): void;
}

/**
 * 大数据合并渲染Primitive对象基类
 */
declare class BaseCombine extends BasePrimitive {
    /**
     * 数据集合数组
     */
    instances: object[];
    /**
     * 根据 pickId 获取对应绑定的数据据对象
     * @param pickId - 单个对象的pickid
     * @returns 对应绑定的数据对象
     */
    getPickedObject(pickId: string): any;
}

declare namespace FlatBillboard {
    /**
     * 平放的图标 单个数据对象
     * @property image - 图标URL
     * @property position - 位置坐标
     * @property [angle = 0] - 图标的角度（角度值，0-360）
     */
    type DataOptions = {
        image: string;
        position: Cesium.Cartesian3;
        angle?: number;
    };
}

/**
 * 平放的图标 数据集合 (多个图标一起合并渲染)
 * @param options - 参数对象，包括以下：
 * @param options.instances - 数据集合数组
 * @param options.style - 样式信息
 * @param [options.style.width = 50] - 图标宽度
 * @param [options.style.height = width] - 图标高度
 * @param [options.style.distanceDisplayCondition = new Cesium.DistanceDisplayCondition(0, 5000000)] - 指定数据将显示在与摄像机的多大距离
 * @param [options.scale3d = 0.8] - 二维和三维模式切换后图标的缩放比例。因为二三维模式使用不同渲染方式，可能存在大小偏差，可以该参数调优。
 */
declare class FlatBillboard extends BaseCombine {
    constructor(options: {
        instances: FlatBillboard.DataOptions[];
        style: {
            width?: number;
            height?: number;
            distanceDisplayCondition?: Cesium.DistanceDisplayCondition;
        };
        scale3d?: number;
    });
    /**
     * 数据集合数组
     */
    instances: FlatBillboard.DataOptions[];
    /**
     * 指定数据将显示在与摄像机的多大距离
     */
    distanceDisplayCondition: Cesium.DistanceDisplayCondition;
    /**
     * 清除数据
     * @returns 无
     */
    clear(): void;
}

declare namespace ModelCombine {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * graphic.on(mars3d.EventType.load, function (event) {
     *   console.log('模型加载完成', event)
     * })
     * @property 通用 - 支持的父类的事件类型
     * @property load - 完成加载，执行所有内部处理后
     */
    type EventType = {
        通用: BasePrimitive.EventType;
        load: string;
    };
}

/**
 * 大数据 gltf小模型集合 (合并渲染) Primitive图元 矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.url] - glTF模型的URI的字符串或资源属性。
 * @param [options.instances] - 集合信息数组，单个对象包括：
 * @param options.instances.position - 坐标位置
 * @param [options.instances.style] - 样式信息(目前仅支持方向和比例参数)
 * @param [options.instances.attr] - 矢量数据的 属性信息，可以任意附加属性。
 * @param [options.batchTable] - 实例化的3D贴图的批处理表。
 * @param [options.requestType] - 请求类型，用于确定请求的优先级
 * @param [options.gltf] - 一个glTF JSON对象，或者一个二进制的glTF缓冲区。
 * @param [options.basePath = ''] - glTF JSON中路径相对的基本路径。
 * @param [options.dynamic = false] - 提示实例模型矩阵是否会频繁更新。
 * @param [options.allowPicking = true] - 当true时，每个glTF和Primitive都可以用{@link Cesium.Scene#pick}来拾取。
 * @param [options.asynchronous = true] - 确定模型WebGL资源创建是否将分散在几个帧或块上，直到所有glTF文件加载完成。
 * @param [options.incrementallyLoadTextures = true] - 确定模型加载后纹理是否会继续流进来。
 * @param [options.shadows = ShadowMode.ENABLED] - 指定模型是投射还是接收来自光源的阴影。
 * @param [options.imageBasedLightingFactor = new Cartesian2(1.0, 1.0)] - 指定来自基于图像的漫反射和镜面照明的贡献。
 * @param [options.lightColor] - 光的颜色当遮光模型。当undefined场景的浅色被使用代替。
 * @param [options.luminanceAtZenith = 0.2] - 太阳在天顶的亮度，单位是千坎德拉每平方米，用于这个模型的程序环境地图。
 * @param [options.sphericalHarmonicCoefficients] - 三阶球面调和系数用于基于图像的漫射色彩照明。
 * @param [options.specularEnvironmentMaps] - 一个KTX文件的URL，该文件包含高光照明的立方体映射和复杂的高光mipmaps。
 * @param [options.backFaceCulling = true] - 是否剔除面向背面的几何图形。当为真时，背面剔除由glTF材质的双面属性决定;当为false时，禁用背面剔除。
 * @param [options.debugShowBoundingVolume = false] - 仅供调试。查看模型的包围边界球。
 * @param [options.debugWireframe = false] - 仅供调试。查看模型的三角网线框图。
 *
 *
 * //以下是 模型动画相关
 * @param [options.startTime] - 场景时间开始播放动画。当undefined时，动画从下一帧开始。
 * @param [options.delay = 0.0] - 从startTime开始播放的延迟，以秒为单位。
 * @param [options.stopTime] - 场景时间停止播放动画。当这是undefined，动画播放它的整个持续时间。
 * @param [options.removeOnStop = false] - 当true时，动画在停止播放后被删除。
 * @param [options.multiplier = 1.0] - 大于1.0的值增加动画播放的速度相对于场景时钟的速度;小于1.0会降低速度。
 * @param [options.reverse = false] - 当true时，动画会反向播放。
 * @param [options.loop = Cesium.ModelAnimationLoop.REPEAT] - 决定动画是否循环以及如何循环。
 */
declare class ModelCombine extends BaseCombine {
    constructor(options: {
        url?: Cesium.Resource | string;
        instances?: {
            position: LatLngPoint | Cesium.Cartesian3;
            style?: ModelPrimitive.StyleOptions;
            attr?: any;
        }[];
        batchTable?: Cesium3DTileBatchTable;
        requestType?: any;
        gltf?: any | ArrayBuffer | Uint8Array;
        basePath?: Cesium.Resource | string;
        dynamic?: boolean;
        allowPicking?: boolean;
        asynchronous?: boolean;
        incrementallyLoadTextures?: boolean;
        shadows?: Cesium.ShadowMode;
        imageBasedLightingFactor?: Cartesian2;
        lightColor?: Cartesian3;
        luminanceAtZenith?: number;
        sphericalHarmonicCoefficients?: Cesium.Cartesian3[];
        specularEnvironmentMaps?: string;
        backFaceCulling?: boolean;
        debugShowBoundingVolume?: boolean;
        debugWireframe?: boolean;
        startTime?: Cesium.JulianDate;
        delay?: number;
        stopTime?: JulianDate;
        removeOnStop?: boolean;
        multiplier?: number;
        reverse?: boolean;
        loop?: Cesium.ModelAnimationLoop;
    });
}

/**
 * 大数据面集合 (合并渲染) Primitive图元 矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param [options.instances] - 面信息数组，单个对象包括：
 * @param options.instances.positions - 坐标位置
 * @param [options.instances.style] - 样式信息
 * @param [options.instances.attr] - 矢量数据的 属性信息，可以任意附加属性。
 * @param [options.style] - 所有面的公共样式信息
 * @param [options.highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式
 */
declare class PolygonCombine extends BaseCombine {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        instances?: {
            positions: LatLngPoint[] | Cesium.Cartesian3[];
            style?: PolygonPrimitive.StyleOptions;
            attr?: any;
        }[];
        style?: PolygonPrimitive.StyleOptions;
        highlight?: PolygonPrimitive.StyleOptions;
    });
    /**
     * 样式信息
     */
    readonly style: any;
    /**
     * 高亮对象。
     * @param [highlightStyle] - 高亮的样式，具体见各{@link GraphicType}矢量数据的style参数。
     * @returns 无
     */
    openHighlight(highlightStyle?: any): void;
    /**
     * 清除已选中的高亮
     * @returns 无
     */
    closeHighlight(): void;
}

/**
 * 大数据线集合 (合并渲染) Primitive图元 矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param [options.instances] - 线信息 数组，单个对象包括：
 * @param options.instances.positions - 坐标位置
 * @param [options.instances.style] - 样式信息
 * @param [options.instances.attr] - 矢量数据的 属性信息，可以任意附加属性。
 * @param [options.style] - 所有线的公共样式信息
 */
declare class PolylineCombine extends BaseCombine {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        instances?: {
            positions: LatLngPoint[] | Cesium.Cartesian3[];
            style?: PolylinePrimitive.StyleOptions;
            attr?: any;
        }[];
        style?: PolylinePrimitive.StyleOptions;
    });
    /**
     * 样式信息
     */
    readonly style: any;
}

declare namespace DivBoderLabel {
    /**
     * 动态边框文本 支持的样式信息
     * @property text - 文本内容
     * @property [font_size = 15] - 字体大小
     * @property [font_family = "楷体"] - 字体 ,可选项：微软雅黑,宋体,楷体,隶书,黑体 等
     * @property [color = "#ccc"] - 文本CSS颜色
     * @property [boderColor = "rgb(21, 209, 242)"] - 边框CSS颜色
     * @property [width] - 面板宽度（px像素值），默认根据文本内容和字体大小自动计算
     * @property [height] - 面板高度（px像素值），默认根据文本内容和字体大小自动计算
     * @property [其他] - 支持父类的其他样式
     */
    type StyleOptions = {
        text: string;
        font_size?: number;
        font_family?: string;
        color?: string;
        boderColor?: string;
        width?: number;
        height?: number;
        其他?: DivGraphic.StyleOptions;
    };
}

/**
 * 动态边框文本 DIV点
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.depthTest = true] - 是否打开深度判断（true时判断是否在球背面）
 * @param [options.hasCache = true] - 是否启用缓存机制，如为true，在视角未变化时不重新渲染。
 * @param [options.stopPropagation = false] - DIV中的鼠标事件是否停止冒泡
 * @param [options.pointerEvents] - DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。
 * @param [options.hasEdit = true] - 是否允许编辑
 * @param [options.testPoint] - 测试点 的对应样式 ，可以进行用于比较测试div的位置，方便调试CSS。
 */
declare class DivBoderLabel extends DivGraphic {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: DivBoderLabel.StyleOptions;
        attr?: any;
        depthTest?: boolean;
        hasCache?: boolean;
        stopPropagation?: boolean;
        pointerEvents?: boolean;
        hasEdit?: boolean;
        testPoint?: PointEntity.StyleOptions;
    });
    /**
     * 通过标绘 来创建DivGraphic
     * @param layer - 图层
     * @param options - DivGraphic的构造参数
     * @returns DIV点对象
     */
    static fromDraw(layer: DivLayer, options: any): DivGraphic;
}

declare namespace DivGraphic {
    /**
     * DIV点 支持的样式信息
     * @property html - Html文本
     * @property [horizontalOrigin] - 横向方向的定位
     * @property [verticalOrigin] - 垂直方向的定位
     * @property [offsetX] - 用于非规则div时，横向偏移的px像素值
     * @property [offsetY] - 用于非规则div时，垂直方向偏移的px像素值
     * @property [scaleByDistance = false] - 是否按视距缩放
     * @property [scaleByDistance_far = 1000000] - 上限
     * @property [scaleByDistance_farValue = 0.1] - 比例值
     * @property [scaleByDistance_near = 1000] - 下限
     * @property [scaleByDistance_nearValue = 1] - 比例值
     * @property [distanceDisplayCondition = false] - 是否按视距显示
     * @property [distanceDisplayCondition_far = 10000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [clampToGround = false] - 是否贴地
     * @property [css_transform_origin = 'left bottom 0'] - DIV的 transform-origin css值
     */
    type StyleOptions = {
        html: string | Element;
        horizontalOrigin?: Cesium.HorizontalOrigin;
        verticalOrigin?: Cesium.VerticalOrigin;
        offsetX?: number;
        offsetY?: number;
        scaleByDistance?: boolean;
        scaleByDistance_far?: number;
        scaleByDistance_farValue?: number;
        scaleByDistance_near?: number;
        scaleByDistance_nearValue?: number;
        distanceDisplayCondition?: boolean;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        clampToGround?: boolean;
        css_transform_origin?: string;
    };
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * graphic.on(mars3d.EventType.click, function (event) {
     *   console.log('单击了矢量数据对象', event)
     * })
     * @property 通用 - 支持的父类的事件类型
     * @property change - 变化了
     * @property click - 左键单击 鼠标事件
     * @property rightClick - 右键单击 鼠标事件
     * @property mouseOver - 鼠标移入 鼠标事件
     * @property mouseOut - 鼠标移出 鼠标事件
     * @property popupOpen - popup弹窗打开后
     * @property popupClose - popup弹窗关闭
     * @property tooltipOpen - tooltip弹窗打开后
     * @property tooltipClose - tooltip弹窗关闭
     * @property drawStart - 开始绘制 标绘事件
     * @property drawMouseMove - 正在移动鼠标中，绘制过程中鼠标移动了点 标绘事件
     * @property drawCreated - 创建完成 标绘事件
     * @property editStart - 开始编辑 标绘事件
     * @property editMouseMove - 正在移动鼠标中，正在编辑拖拽修改点中（MOUSE_MOVE） 标绘事件
     * @property editStop - 停止编辑 标绘事件
     */
    type EventType = {
        通用: BaseGraphic.EventType;
        change: string;
        click: string;
        rightClick: string;
        mouseOver: string;
        mouseOut: string;
        popupOpen: string;
        popupClose: string;
        tooltipOpen: string;
        tooltipClose: string;
        drawStart: string;
        drawMouseMove: string;
        drawCreated: string;
        editStart: string;
        editMouseMove: string;
        editStop: string;
    };
}

/**
 * DIV点
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.depthTest = true] - 是否打开深度判断（true时判断是否在球背面）
 * @param [options.hasCache = true] - 是否启用缓存机制，如为true，在视角未变化时不重新渲染。
 * @param [options.hasZIndex = true] - 是否自动调整DIV的层级顺序，true时内部会给div设置0至9999999的zIndex值（如果与外部UI层有遮挡，外部DIV的zIndex请设置大于9999999的值），false时不设置。
 * @param [options.stopPropagation = false] - DIV中的鼠标事件是否停止冒泡
 * @param [options.pointerEvents] - DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。默认根据是否绑定事件等自动判断。
 * @param [options.hasEdit = true] - 是否允许编辑
 * @param [options.className] - 自定义的样式名
 * @param [options.testPoint] - 测试点 的对应样式 ，可以进行用于比较测试div的位置，方便调试CSS。
 */
declare class DivGraphic extends BaseGraphic {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: DivGraphic.StyleOptions;
        attr?: any;
        depthTest?: boolean;
        hasCache?: boolean;
        hasZIndex?: boolean;
        stopPropagation?: boolean;
        pointerEvents?: boolean;
        hasEdit?: boolean;
        className?: string;
        testPoint?: PointEntity.StyleOptions;
    });
    /**
     * 位置坐标 （笛卡尔坐标）, 赋值时可以传入LatLngPoint对象
     */
    position: Cesium.Cartesian3;
    /**
     * 位置坐标 （笛卡尔坐标）
     */
    readonly point: LatLngPoint;
    /**
     * 位置坐标(数组对象)，示例[113.123456,31.123456,30.1]
     */
    readonly coordinate: any[];
    /**
     * 是否显示测试点，可以进行用于比较测试div的位置，方便调试CSS。
     */
    testPoint: boolean;
    /**
     * DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。
     */
    pointerEvents: boolean;
    /**
     * 对象是否存在鼠标事件相关绑定
     */
    readonly hasBindEvent: boolean;
    /**
     * 是否打开深度判断（true时判断是否在球背面）
     */
    depthTest: boolean;
    /**
     * 是否贴地
     */
    clampToGround: boolean;
    /**
     * 对应的DOM元素
     */
    readonly container: Element;
    /**
     * 对应的DOM元素的id
     */
    readonly containerId: string;
    /**
     * 设置或获取当前对象对应的Html
     */
    html: string | Element;
    /**
     * 更新刷新下DIV的位置，可以外部主动驱动来更新。
     * @returns 当前对象本身，可以链式调用
     */
    updateDivPosition(): this;
    /**
     * 隐藏当前对象
     * @returns 无
     */
    hide(): void;
    /**
     * 设置并添加动画轨迹位置，按“指定时间”运动到达“指定位置”。
     * @param point - 指定位置坐标
     * @param [currTime = Cesium.JulianDate.now()] - 指定时间, 默认为当前时间5秒后。当为String时，可以传入'2021-01-01 12:13:00'; 当为Number时，可以传入当前时间延迟的秒数。
     * @returns 当前对象本身，可以链式调用
     */
    addDynamicPosition(point: LatLngPoint | Cesium.Cartesian3, currTime?: Cesium.JulianDate | string | number): this;
    /**
     * 位置坐标(数组对象)，示例[113.123456,31.123456,30.1]
     * @param noAlt - true时不导出高度值
     * @returns 位置坐标(数组对象)
     */
    getCoordinate(noAlt: boolean): any[];
    /**
     * 高亮对象。
     * @param [highlightStyle] - 高亮的样式，具体见各{@link GraphicType}矢量数据的style参数。
     * @returns 无
     */
    openHighlight(highlightStyle?: any): void;
    /**
     * 清除已选中的高亮
     * @returns 无
     */
    closeHighlight(): void;
    /**
     * 开始绘制创建矢量数据，绘制的数据会加载在layer图层。
     * @param layer - 图层
     * @returns 无
     */
    startDraw(layer: DivLayer): void;
    /**
     * 停止绘制，如有未完成的绘制会自动删除
     * @returns 无
     */
    stopDraw(): void;
    /**
     * 完成绘制和编辑，如有未完成的绘制会自动完成。
     * 在移动端需要调用此方法来类似PC端双击结束。
     * @returns 无
     */
    endDraw(): void;
    /**
     * 启用或禁用popup、tooltip、contextmenu内部控件，
     * 主要用于标绘时来关闭避免交互冲突。
     * @param value - 是否启用
     * @returns 无
     */
    enableControl(value: boolean): void;
    /**
     * 开始编辑对象
     * @returns 无
     */
    startEditing(): void;
    /**
     * 停止编辑，释放正在编辑的对象。
     * @returns 无
     */
    stopEditing(): void;
    /**
     * 通过标绘 来创建DivGraphic
     * @param layer - 图层
     * @param options - DivGraphic的构造参数
     * @returns DIV点对象
     */
    static fromDraw(layer: DivLayer, options: any): DivGraphic;
    /**
     * 中心点坐标（笛卡尔坐标）
     */
    readonly center: Cesium.Cartesian3;
}

declare namespace DivLightPoint {
    /**
     * 动画的扩散div点 支持的样式信息
     * @property [color = '#f33349'] - CSS颜色
     * @property [其他] - 支持父类的其他样式
     */
    type StyleOptions = {
        color?: string;
        其他?: DivGraphic.StyleOptions;
    };
}

/**
 * 动画的扩散div点
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.depthTest = true] - 是否打开深度判断（true时判断是否在球背面）
 * @param [options.hasCache = true] - 是否启用缓存机制，如为true，在视角未变化时不重新渲染。
 * @param [options.stopPropagation = false] - DIV中的鼠标事件是否停止冒泡
 * @param [options.pointerEvents] - DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。
 * @param [options.hasEdit = true] - 是否允许编辑
 * @param [options.testPoint] - 测试点 的对应样式 ，可以进行用于比较测试div的位置，方便调试CSS。
 */
declare class DivLightPoint extends DivGraphic {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: DivLightPoint.StyleOptions;
        attr?: any;
        depthTest?: boolean;
        hasCache?: boolean;
        stopPropagation?: boolean;
        pointerEvents?: boolean;
        hasEdit?: boolean;
        testPoint?: PointEntity.StyleOptions;
    });
    /**
     * 通过标绘 来创建DivGraphic
     * @param layer - 图层
     * @param options - DivGraphic的构造参数
     * @returns DIV点对象
     */
    static fromDraw(layer: DivLayer, options: any): DivGraphic;
}

declare namespace DivUpLabel {
    /**
     * 竖立的文本 支持的样式信息
     * @property text - 文本内容
     * @property [color = "white"] - 文本CSS颜色
     * @property [font_size = 15] - 字体大小
     * @property [font_family = "楷体"] - 字体 ,可选项：微软雅黑,宋体,楷体,隶书,黑体 等
     * @property [lineHeight = 100] - 底部线的高度值（单位：px像素）
     * @property [circleSize = 10] - 底部圆圈的大小（单位：px像素）
     * @property [其他] - 支持父类的其他样式
     */
    type StyleOptions = {
        text: string;
        color?: string;
        font_size?: number;
        font_family?: string;
        lineHeight?: number;
        circleSize?: number;
        其他?: DivGraphic.StyleOptions;
    };
}

/**
 * 竖立的文本 DIV点
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.depthTest = true] - 是否打开深度判断（true时判断是否在球背面）
 * @param [options.hasCache = true] - 是否启用缓存机制，如为true，在视角未变化时不重新渲染。
 * @param [options.stopPropagation = false] - DIV中的鼠标事件是否停止冒泡
 * @param [options.pointerEvents] - DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。
 * @param [options.hasEdit = true] - 是否允许编辑
 * @param [options.testPoint] - 测试点 的对应样式 ，可以进行用于比较测试div的位置，方便调试CSS。
 */
declare class DivUpLabel extends DivGraphic {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: DivUpLabel.StyleOptions;
        attr?: any;
        depthTest?: boolean;
        hasCache?: boolean;
        stopPropagation?: boolean;
        pointerEvents?: boolean;
        hasEdit?: boolean;
        testPoint?: PointEntity.StyleOptions;
    });
    /**
     * 通过标绘 来创建DivGraphic
     * @param layer - 图层
     * @param options - DivGraphic的构造参数
     * @returns DIV点对象
     */
    static fromDraw(layer: DivLayer, options: any): DivGraphic;
}

declare namespace ParticleSystem {
    /**
     * 粒子效果 支持的样式信息
     * @property [image] - 粒子的图片URL
     * @property [emitter = new CircleEmitter(2.0)] - 系统的粒子发射器。
     * @property [emissionRate = 5] - 每秒发射的粒子数。
     * @property [bursts] - {@link ParticleBurst}的数组，周期性地发射粒子爆发。
     * @property [loop = true] - 粒子系统完成后是否应该循环爆发。
     * @property [particleSize = 25] - 粒子图片的Size大小（单位：像素）
     * @property [imageSize = new Cartesian2(1.0, 1.0)] - 粒子图片的Size大小（单位：像素），与particleSize二选一。
     * @property [minimumImageSize] - 设置最小边界，宽度和高度，在此之上随机缩放粒子图像的像素尺寸。
     * @property [maximumImageSize] - 设置最大边界，宽度和高度，在其以下随机缩放粒子图像的像素尺寸。
     * @property [sizeInMeters] - 设置粒子的大小是米还是像素。true以米为单位设置粒子的大小;否则，大小以像素为单位。
     * @property [scale = 1.0] - 设置在粒子生命周期内应用于粒子图像的比例。
     * @property [startScale] - 粒子在出生时的比例（单位：相对于imageSize大小的倍数）
     * @property [endScale] - 粒子在死亡时的比例（单位：相对于imageSize大小的倍数）
     * @property [color = Color.WHITE] - 设置一个粒子在其生命周期内的颜色。
     * @property [startColor] - 粒子出生时的颜色
     * @property [endColor] - 当粒子死亡时的颜色
     * @property [speed = 1.0] - 如果设置，则使用此值覆盖最小速度和最大速度输入。
     * @property [minimumSpeed] - 设定以每秒米为单位的最小范围，超过这个范围粒子的实际速度将被随机选择。
     * @property [maximumSpeed] - 设定以每秒米为单位的最大范围，低于这个范围粒子的实际速度将被随机选择。
     * @property [lifetime = Number.MAX_VALUE] - 粒子系统释放粒子的时间，单位是秒。
     * @property [particleLife = 5.0] - 如果设置了这个值，将覆盖minimumParticleLife和maximumParticleLife输入。
     * @property [minimumParticleLife] - 设定一个粒子生命可能持续时间的最小界限(以秒为单位)，在此之上一个粒子的实际生命将被随机选择。
     * @property [maximumParticleLife] - 设置一个粒子生命可能持续时间的最大界限(以秒为单位)，低于这个时间的粒子的实际生命将被随机选择。
     * @property [mass = 1.0] - 设定粒子的最小和最大质量，单位为千克。
     * @property [minimumMass] - 设定粒子质量的最小边界，单位为千克。一个粒子的实际质量将被选为高于这个值的随机数量。
     * @property [maximumMass] - 设置粒子的最大质量，单位为千克。一个粒子的实际质量将被选为低于这个值的随机数量。
     * @property [updateCallback] - 每一帧调用一个回调函数来更新一个粒子。
     */
    type StyleOptions = {
        image?: string;
        emitter?: ParticleEmitter;
        emissionRate?: number;
        bursts?: ParticleBurst[];
        loop?: boolean;
        particleSize?: number;
        imageSize?: Cartesian2;
        minimumImageSize?: Cartesian2;
        maximumImageSize?: Cartesian2;
        sizeInMeters?: boolean;
        scale?: number;
        startScale?: number;
        endScale?: number;
        color?: Color;
        startColor?: Color;
        endColor?: Color;
        speed?: number;
        minimumSpeed?: number;
        maximumSpeed?: number;
        lifetime?: number;
        particleLife?: number;
        minimumParticleLife?: number;
        maximumParticleLife?: number;
        mass?: number;
        minimumMass?: number;
        maximumMass?: number;
        updateCallback?: ParticleSystem.updateCallback;
    };
}

/**
 * 粒子效果 对象
 * @param options - 参数对象，包括以下：
 * @param options.position - 坐标位置
 * @param [options.modelMatrix] - 将图元(所有几何实例)从模型转换为世界坐标的4x4变换矩阵,可以替代position。
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.gravity = 0] - 重力因子，会修改速度矢量以改变方向或速度（基于物理的效果）
 * @param [options.target = new Cesium.Cartesian3(0, 0, 0)] - 粒子的方向，粒子喷射的目标方向。
 * @param [options.transZ = 0] - 离地高度，Z轴方向上的偏离距离（单位：米）
 * @param [options.transX = 0] - X轴方向上的偏离距离（单位：米）
 * @param [options.transY = 0] - Y轴方向上的偏离距离（单位：米）
 * @param [options.maxHeight = 5000] - 最大视角高度（单位：米），超出该高度不显示粒子效果
 * @param [options.hasDefUpdate = true] - 是否内部自动处理 updateCallback
 */
declare class ParticleSystem extends BasePointPrimitive {
    constructor(options: {
        position: LatLngPoint | Cesium.Cartesian3;
        modelMatrix?: Cesium.Matrix4;
        style: ParticleSystem.StyleOptions;
        attr?: any;
        gravity?: number;
        target?: Cesium.Cartesian3;
        transZ?: number;
        transX?: number;
        transY?: number;
        maxHeight?: number;
        hasDefUpdate?: boolean;
    });
    /**
     * 最大视角高度（单位：米），超出该高度不显示粒子效果
     */
    maxHeight: number;
    /**
     * 重力因子，会修改速度矢量以改变方向或速度（基于物理的效果）
     */
    gravity: number;
    /**
     * X轴方向上的偏离距离（单位：米）
     */
    transX: number;
    /**
     * Y轴方向上的偏离距离（单位：米）
     */
    transY: number;
    /**
     * 离地高度，Z轴方向上的偏离距离（单位：米）
     */
    transZ: number;
    /**
     * 粒子的方向，粒子喷射的目标方向。
     */
    target: Cesium.Cartesian3;
    /**
     * 粒子图片的Size大小（单位：像素）
     */
    particleSize: number;
}

declare namespace Popup {
    /**
     * Popup对象 支持的配置信息
     * @property html - Html文本({content}部分，整体展示的DOM由template和html属性共同组成)
     * @property template - 公共部分外框部分html内容，需要加2处：
     * (1)用于填充html的地方写上{content}标识；
     * (2)关闭按钮加class样式：closeButton。
     * 传空字符串时，不用内置模版。
     * @property [horizontalOrigin] - 横向方向的定位
     * @property [verticalOrigin] - 垂直方向的定位
     * @property [offsetX] - 用于非规则div时，横向偏移的px像素值
     * @property [offsetY] - 用于非规则div时，垂直方向偏移的px像素值
     * @property [scaleByDistance = false] - 是否按视距缩放
     * @property [scaleByDistance_far = 1000000] - 上限
     * @property [scaleByDistance_farValue = 0.1] - 比例值
     * @property [scaleByDistance_near = 1000] - 下限
     * @property [scaleByDistance_nearValue = 1] - 比例值
     * @property [distanceDisplayCondition = false] - 是否按视距显示
     * @property [distanceDisplayCondition_far = 10000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [clampToGround = false] - 是否贴地
     * @property [css_transform_origin = 'left bottom 0'] - DIV的 transform-origin css值
     */
    type StyleOptions = {
        html: string;
        template: string;
        horizontalOrigin?: Cesium.HorizontalOrigin;
        verticalOrigin?: Cesium.VerticalOrigin;
        offsetX?: number;
        offsetY?: number;
        scaleByDistance?: boolean;
        scaleByDistance_far?: number;
        scaleByDistance_farValue?: number;
        scaleByDistance_near?: number;
        scaleByDistance_nearValue?: number;
        distanceDisplayCondition?: boolean;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        clampToGround?: boolean;
        css_transform_origin?: string;
    };
}

/**
 * Popup对象div点
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.depthTest = true] - 是否打开深度判断（true时判断是否在球背面）
 * @param [options.hasCache = true] - 是否启用缓存机制，如为true，在视角未变化时不重新渲染。
 * @param [options.hasZIndex = true] - 是否自动调整DIV的层级顺序。
 * @param [options.stopPropagation = true] - DIV中的鼠标事件是否停止冒泡
 * @param [options.pointerEvents = true] - DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。
 * @param [options.hasEdit = false] - 是否允许编辑
 * @param [options.testPoint] - 测试点 的对应样式 ，可以进行用于比较测试div的位置，方便调试CSS。
 */
declare class Popup extends DivGraphic {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: Popup.StyleOptions;
        attr?: any;
        depthTest?: boolean;
        hasCache?: boolean;
        hasZIndex?: boolean;
        stopPropagation?: boolean;
        pointerEvents?: boolean;
        hasEdit?: boolean;
        testPoint?: PointEntity.StyleOptions;
    });
    /**
     * 关联的触发对象
     */
    readonly target: BaseGraphic | BaseLayer | Map;
    /**
     * 通过标绘 来创建DivGraphic
     * @param layer - 图层
     * @param options - DivGraphic的构造参数
     * @returns DIV点对象
     */
    static fromDraw(layer: DivLayer, options: any): DivGraphic;
}

/**
 * Tooltip对象div点
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.depthTest = true] - 是否打开深度判断（true时判断是否在球背面）
 * @param [options.hasCache = true] - 是否启用缓存机制，如为true，在视角未变化时不重新渲染。
 * @param [options.hasZIndex = true] - 是否自动调整DIV的层级顺序。
 * @param [options.stopPropagation = true] - DIV中的鼠标事件是否停止冒泡
 * @param [options.pointerEvents = true] - DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。
 * @param [options.hasEdit = false] - 是否允许编辑
 * @param [options.testPoint] - 测试点 的对应样式 ，可以进行用于比较测试div的位置，方便调试CSS。
 */
declare class Tooltip extends Popup {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: Popup.StyleOptions;
        attr?: any;
        depthTest?: boolean;
        hasCache?: boolean;
        hasZIndex?: boolean;
        stopPropagation?: boolean;
        pointerEvents?: boolean;
        hasEdit?: boolean;
        testPoint?: PointEntity.StyleOptions;
    });
    /**
     * 通过标绘 来创建DivGraphic
     * @param layer - 图层
     * @param options - DivGraphic的构造参数
     * @returns DIV点对象
     */
    static fromDraw(layer: DivLayer, options: any): Popup;
}

declare namespace Video3D {
    /**
     * 视频融合（投射3D，贴物体表面） 支持的样式信息
     * @property opacity - 混合系数 0.0 - 1.0
     * @property camera - 相机方向参数
     * @property camera.direction - direction方向
     * @property camera.up - up方向
     * @property camera.right - right方向
     * @property aspectRatio - 相机视野的宽高比例（垂直张角）
     * @property fov - 张角(弧度值)
     * @property fovDegree - 张角(角度值，0-180度)
     * @property [hiddenAreaColor = new Cesium.Color(0, 0, 0, 0.5)] - 无视频投影区域的颜色
     * @property [color] - 当type为颜色时的，投射的颜色值
     * @property [text] - 当为text文本时的，传入的文本内容
     * @property [textStyles] - 当为text文本时的，文本样式，包括:
     * @property [textStyles.font = '23px 楷体'] - 使用的CSS字体。
     * @property [textStyles.textBaseline = 'top'] - 文本的基线。
     * @property [textStyles.fill = true] - 是否填充文本。
     * @property [textStyles.stroke = true] - 是否描边文本。
     * @property [textStyles.fillColor = new Cesium.Color(1.0, 1.0, 0.0, 1.0)] - 填充颜色。
     * @property [textStyles.strokeColor = new Cesium.Color(1.0, 1.0, 1.0, 0.8)] - 描边的颜色。
     * @property [textStyles.strokeWidth = 2] - 描边的宽度。
     * @property [textStyles.backgroundColor = new Cesium.Color(1.0, 1.0, 1.0, 0.1)] - 画布的背景色。
     * @property [textStyles.padding = 10] - 要在文本周围添加的填充的像素大小。
     */
    type StyleOptions = {
        opacity: number;
        camera: {
            direction: Cesium.Cartesian3;
            up: Cesium.Cartesian3;
            right: Cesium.Cartesian3;
        };
        aspectRatio: number;
        fov: number;
        fovDegree: number;
        hiddenAreaColor?: Cesium.Color;
        color?: Cesium.Color;
        text?: string;
        textStyles?: {
            font?: string;
            textBaseline?: string;
            fill?: boolean;
            stroke?: boolean;
            fillColor?: Cesium.Color;
            strokeColor?: Cesium.Color;
            strokeWidth?: number;
            backgroundColor?: vColor;
            padding?: number;
        };
    };
    /**
     * 类型
     */
    enum Type {
        Video,
        Image,
        Color,
        Text
    }
    /**
     * 旋转的方向
     */
    enum RatateDirection {
        LEFT,
        RIGHT,
        TOP,
        BOTTOM,
        ALONG,
        INVERSE
    }
}

/**
 * 视频融合（投射3D，贴物体表面）
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 视点位置
 * @param options.cameraPosition - 相机位置
 * @param options.type - 投射的类型
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.url] - 当为图片或视频类型时，传入的图片或视频的路径
 * @param [options.dom] - 当为视频类型时，传入了视频容器DOM，与url二选一
 * @param [options.showFrustum = true] - 是否显示视椎体框线
 */
declare class Video3D extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        cameraPosition: LatLngPoint | Cesium.Cartesian3;
        type: Video3D.Type;
        style: Video3D.StyleOptions;
        attr?: any;
        url?: string;
        dom?: HTMLElement | any;
        showFrustum?: boolean;
    });
    /**
     * 相机位置(笛卡尔坐标)
     */
    cameraPosition: Cesium.Cartesian3;
    /**
     * 相机位置
     */
    cameraPoint: LatLngPoint;
    /**
     * 相机位置 (数组对象)，示例[113.123456,31.123456,30.1]
     */
    cameraCoordinate: LatLngPoint;
    /**
     * 混合系数0-1
     */
    opacity: number;
    /**
     * 相机视野的宽高比例（垂直张角）
     */
    aspectRatio: number;
    /**
     * 相机水平张角 (弧度值)
     */
    fov: number;
    /**
     * 相机水平张角(角度值，0-180度)
     */
    fovDegree: number;
    /**
     * 是否显示视椎体框线
     */
    showFrustum: boolean;
    /**
     * 暂停或播放 视频
     */
    play: boolean;
    /**
     * 无视频投影区域的颜色
     */
    hiddenAreaColor: Cesium.Color;
    /**
     * 当type为颜色时的，投射的颜色值
     */
    color: Cesium.Color;
    /**
     * 相机
     */
    readonly camera: Cesium.Color;
    /**
     * 将矢量数据的坐标、样式及属性等信息导出为对象，可以用于存储。
     * @returns 导出的坐标、样式及属性等信息
     */
    toJSON(): any;
    /**
     * 旋转相机
     * @param axis - 旋转的方向
     * @param [rotateDegree = 0.5] - 旋转的角度
     * @returns 无
     */
    rotateCamera(axis: Video3D.RatateDirection, rotateDegree?: number): void;
    /**
     * 定位至相机的第一视角
     * @returns 无
     */
    flyTo(): void;
}

declare namespace BaseEntity {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * graphic.on(mars3d.EventType.click, function (event) {
     *   console.log('单击了矢量数据对象', event)
     * })
     * @property 通用 - 支持的父类的事件类型
     * @property click - 左键单击 鼠标事件
     * @property rightClick - 右键单击 鼠标事件
     * @property mouseOver - 鼠标移入 鼠标事件
     * @property mouseOut - 鼠标移出 鼠标事件
     * @property popupOpen - popup弹窗打开后
     * @property popupClose - popup弹窗关闭
     * @property tooltipOpen - tooltip弹窗打开后
     * @property tooltipClose - tooltip弹窗关闭
     * @property drawStart - 开始绘制 标绘事件
     * @property drawMouseMove - 正在移动鼠标中，绘制过程中鼠标移动了点 标绘事件
     * @property drawAddPoint - 绘制过程中增加了点 标绘事件
     * @property drawRemovePoint - 绘制过程中删除了最后一个点 标绘事件
     * @property drawCreated - 创建完成 标绘事件
     * @property editStart - 开始编辑 标绘事件
     * @property editMouseDown - 移动鼠标按下左键（LEFT_DOWN）标绘事件
     * @property editMouseMove - 正在移动鼠标中，正在编辑拖拽修改点中（MOUSE_MOVE） 标绘事件
     * @property editMovePoint - 编辑修改了点（LEFT_UP）标绘事件
     * @property editRemovePoint - 编辑删除了点 标绘事件
     * @property editStyle - 图上编辑修改了相关style属性 标绘事件
     * @property editStop - 停止编辑 标绘事件
     */
    type EventType = {
        通用: BaseGraphic.EventType;
        click: string;
        rightClick: string;
        mouseOver: string;
        mouseOut: string;
        popupOpen: string;
        popupClose: string;
        tooltipOpen: string;
        tooltipClose: string;
        drawStart: string;
        drawMouseMove: string;
        drawAddPoint: string;
        drawRemovePoint: string;
        drawCreated: string;
        editStart: string;
        editMouseDown: string;
        editMouseMove: string;
        editMovePoint: string;
        editRemovePoint: string;
        editStyle: string;
        editStop: string;
    };
}

/**
 * Entity实体 矢量对象 基类
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class BaseEntity extends BaseGraphic {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 加载Entity数据的内部Cesium容器
     */
    readonly dataSource: Cesium.CustomDataSource;
    /**
     * 矢量数据对应的 Cesium内部对象
     */
    readonly entity: Cesium.Entity;
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.XXXGraphics;
    /**
     * 附加的label文本对象
     */
    readonly label: Cesium.Label | Cesium.LabelGraphics;
    /**
     * 是否正在编辑状态
     */
    readonly isEditing: boolean;
    /**
     * 高亮对象。
     * @param [highlightStyle] - 高亮的样式，具体见各{@link GraphicType}矢量数据的style参数。
     * @returns 无
     */
    openHighlight(highlightStyle?: any): void;
    /**
     * 清除已选中的高亮
     * @returns 无
     */
    closeHighlight(): void;
    /**
     * 高亮闪烁 Enity实体对象
     * @param options - 参数
     * @param [options.time = null] - 闪烁的时长(秒)，未设置时不自动停止。
     * @param [options.color = Cesium.Color.YELLOW] - 高亮的颜色
     * @param [options.maxAlpha = 0.3] - 闪烁的最大透明度，从 0 到 maxAlpha 渐变
     * @param [options.onEnd = null] - 播放完成后的回调方法
     * @returns 高亮闪烁控制 对象
     */
    startFlicker(options: {
        time?: number;
        color?: Cesium.Color;
        maxAlpha?: number;
        onEnd?: (...params: any[]) => any;
    }): FlickerEntity;
    /**
     * 停止高亮闪烁
     * @returns 无
     */
    stopFlicker(): void;
    /**
     * 设置透明度
     * @param value - 透明度
     * @returns 无
     */
    setOpacity(value: number): void;
    /**
     * 开始绘制矢量数据，绘制的数据会加载在layer图层。
     * @param layer - 图层
     * @returns 无
     */
    startDraw(layer: GraphicLayer): void;
    /**
     * 停止绘制
     * @returns 无
     */
    stopDraw(): void;
    /**
     * 移除绘制的坐标中的重复点，比如快速单击或双击产生的冗余坐标。
     * @returns 无
     */
    removeNearPoint(): void;
    /**
     * 完成绘制和编辑，如有未完成的绘制会自动完成。
     * 在移动端需要调用此方法来类似PC端双击结束。
     * @returns 无
     */
    endDraw(): void;
    /**
     * 启用或禁用所有内部控件（含tooltip、popup、contextmenu）
     * @param value - 是否启用
     * @returns 无
     */
    enableControl(value: boolean): void;
    /**
     * 开始编辑对象
     * @returns 无
     */
    startEditing(): void;
    /**
     * 停止编辑，释放正在编辑的对象。
     * @returns 无
     */
    stopEditing(): void;
}

/**
 * 单个坐标的点状Entity矢量数据 基类
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param [options.orientation] - 指定实体方向的属性。
 * @param [options.drawShow = true] - 绘制时，是否自动隐藏entity，可避免拾取坐标存在问题。
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.entity] - 传入外部已经构造好的Entity对象
 * @param [options.hasEdit = true] - 是否允许编辑
 * @param [options.maxCacheCount = 50] - 当使用addDynamicPosition设置为动画轨迹位置时，保留的坐标点数量
 * @param [options.clampToTileset] - 当使用addDynamicPosition设置为动画轨迹位置时，是否进行贴模型。
 * @param [options.frameRate = 30] - 当使用addDynamicPosition设置为动画轨迹位置时，并clampToTileset：true时，多少帧计算一次贴模型高度
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class BasePointEntity extends BaseEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        orientation?: Cesium.Property;
        drawShow?: boolean;
        addHeight?: number;
        entity?: Cesium.Entity;
        hasEdit?: boolean;
        maxCacheCount?: number;
        clampToTileset?: boolean;
        frameRate?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 编辑处理类
     */
    readonly EditClass: EditPoint;
    /**
     * 位置坐标 （笛卡尔坐标）, 赋值时可以传入LatLngPoint对象
     */
    position: Cesium.Cartesian3;
    /**
     * 位置坐标
     */
    readonly point: LatLngPoint;
    /**
     * 位置坐标(数组对象)，示例[113.123456,31.123456,30.1]
     */
    readonly coordinate: any[];
    /**
     * 中心点坐标 （笛卡尔坐标）
     */
    readonly center: Cesium.Cartesian3;
    /**
     * 中心点坐标
     */
    readonly centerPoint: LatLngPoint;
    /**
     * 三维空间中的旋转。
     */
    readonly orientation: Cesium.Quaternion;
    /**
     * 四周方向角，0-360度角度值
     */
    heading: number;
    /**
     * 俯仰角，上下摇摆的角度，0-360度角度值
     */
    pitch: number;
    /**
     * 滚转角，左右摆动的角度，0-360度角度值
     */
    roll: number;
    /**
     * 坐标对应的高度值（单位：米）
     */
    height: number;
    /**
     * 获取当前转换计算模型矩阵。如果方向或位置未定义，则返回undefined。
     */
    readonly modelMatrix: Cesium.Matrix4;
    /**
     * 是否显示3个方向轴，用于对比测试
     */
    debugAxis: boolean;
    /**
     * 显示3个方向轴时的对应轴长度，用于对比测试
     */
    debugAxisLength: number;
    /**
     * 贴模型分析时，排除的不进行贴模型计算的模型对象，默认是当前本身，可以是： primitives, entities 等
     */
    readonly objectsToExclude: object[] | undefined;
    /**
     * 更新 三维空间中的Quaternion旋转对象。
     * @returns 更新后的Quaternion旋转对象
     */
    updateOrientation(): Cesium.Quaternion;
    /**
     * 清除addDynamicPosition添加的动态轨迹
     * @returns 当前对象本身，可以链式调用
     */
    clearDynamicPosition(): this;
    /**
     * 设置并添加动画轨迹位置，按“指定时间”运动到达“指定位置”。
     * @param point - 指定位置坐标
     * @param [currTime = Cesium.JulianDate.now()] - 指定时间, 默认为当前时间5秒后。当为String时，可以传入'2021-01-01 12:13:00'; 当为Number时，可以传入当前时间延迟的秒数。
     * @returns 当前对象本身，可以链式调用
     */
    addDynamicPosition(point: LatLngPoint | Cesium.Cartesian3, currTime?: Cesium.JulianDate | string | number): this;
    /**
     * 异步计算更新坐标进行贴地(或贴模型)
     * @param [options = {}] - 参数对象:
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    clampToGround(options?: {
        has3dtiles?: boolean;
        objectsToExclude?: object[];
        callback: getSurfaceHeight_callback;
    }): this;
    /**
     * 位置坐标(数组对象)，示例[113.123456,31.123456,30.1]
     * @param noAlt - true时不导出高度值
     * @returns 位置坐标(数组对象)
     */
    getCoordinate(noAlt: boolean): any[];
    /**
     * 显示隐藏状态
     */
    show: boolean;
}

/**
 * 多个坐标的线面状  Entity矢量数据 基类
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param [options.hasMoveEdit = true] - 绘制时，是否可以整体平移
 * @param [options.minPointNum = 2] - 绘制时，至少需要点的个数
 * @param [options.maxPointNum = 9999] - 绘制时，最多允许点的个数
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.hasEdit = true] - 是否允许编辑
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class BasePolyEntity extends BaseEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[] | Cesium.PositionProperty;
        hasMoveEdit?: boolean;
        minPointNum?: number;
        maxPointNum?: number;
        addHeight?: number;
        hasEdit?: boolean;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 编辑处理类
     */
    readonly EditClass: EditPoly;
    /**
     * 中心点坐标 （笛卡尔坐标）
     */
    readonly center: Cesium.Cartesian3;
    /**
     * 围合面的内部中心点坐标
     */
    readonly centerOfMass: Cesium.Cartesian3;
    /**
     * 边线的中心点坐标
     */
    readonly centerOfLine: Cesium.Cartesian3;
    /**
     * 距离（单位：米）
     */
    readonly distance: number;
    /**
     * 面积（单位：平方米）
     */
    readonly area: number;
    /**
     * 位置坐标数组 （笛卡尔坐标）, 赋值时可以传入LatLngPoint数组对象
     */
    positions: Cesium.Cartesian3[];
    /**
     * 实际显示的坐标数组 （笛卡尔坐标），
     * 如标绘中时positions对应的可能只是控制点坐标或CallbackProperty属性
     */
    readonly positionsShow: Cesium.Cartesian3[];
    /**
     * 位置坐标数组
     */
    readonly points: LatLngPoint[];
    /**
     * 位置坐标(数组对象)，示例 [ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7] ]
     */
    readonly coordinates: any[][];
    /**
     * 坐标数据对应的矩形边界
     */
    readonly rectangle: Cesium.Rectangle;
    /**
     * 位置坐标(数组对象)，示例 [ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7] ]
     * @param noAlt - true时不导出高度值
     * @returns 位置坐标(数组对象)
     */
    getCoordinates(noAlt: boolean): any[][];
    /**
     * 判断点是否在当前对象的坐标点围成的多边形内
     * @param position - 需要判断的点
     * @returns 是否在多边形内
     */
    isInPoly(position: Cesium.Cartesian3 | LatLngPoint): boolean;
    /**
     * 异步计算更新坐标进行贴地(或贴模型)
     * @param [options = {}] - 参数对象:
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param [options.offset = 0] - 可以按需增加偏移高度（单位：米），便于可视
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    clampToGround(options?: {
        has3dtiles?: boolean;
        objectsToExclude?: object[];
        offset?: number;
        callback: surfaceLineWork_callback;
    }): this;
}

declare namespace BillboardEntity {
    /**
     * 图标点 支持的样式信息
     * @property [image] - 用于矢量对象的 图像、URI或Canvas
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [scale = 1] - 图像大小的比例
     * @property [rotation = 0] - 旋转角度（弧度值），正北为0，逆时针旋转
     * @property [rotationDegree = 0] - 旋转角度（度数值，0-360度），与rotation二选一
     * @property [horizontalOrigin] - 横向方向的定位
     * @property [verticalOrigin] - 垂直方向的定位
     * @property [width] - 指定广告牌的宽度(以像素为单位)，覆盖图片本身大小。
     * @property [height] - 指定广告牌的高度(以像素为单位)，覆盖图片本身大小。
     * @property [hasPixelOffset = false] - 是否存在偏移量
     * @property [pixelOffsetX = 0] - 横向偏移像素
     * @property [pixelOffsetY = 0] - 纵向偏移像素
     * @property [pixelOffset = Cartesian2.ZERO] - 指定像素偏移量。
     * @property [scaleByDistance = false] - 是否按视距缩放 或 设置基于与相机的距离缩放点
     * @property [scaleByDistance_far = 1000000] - 上限
     * @property [scaleByDistance_farValue = 0.1] - 比例值
     * @property [scaleByDistance_near = 1000] - 下限
     * @property [scaleByDistance_nearValue = 1] - 比例值
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定该广告牌将显示在与摄像机的多大距离
     * @property [distanceDisplayCondition_far = 10000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [clampToGround = false] - 是否贴地
     * @property [heightReference = Cesium.HeightReference.NONE] - 指定高度相对于什么的属性。
     * @property [visibleDepth = true] - 是否被遮挡
     * @property [disableDepthTestDistance] - 指定从相机到禁用深度测试的距离。
     * @property [color = Color.WHITE] - 附加的颜色
     * @property [eyeOffset = Cartesian3.ZERO] - 眼偏移量
     * @property [alignedAxis = Cartesian3.ZERO] - 指定单位旋转向量轴。
     * @property [sizeInMeters] - 指定该广告牌的大小是否应该以米来度量。
     * @property [translucencyByDistance] - 用于基于与相机的距离设置半透明度。
     * @property [pixelOffsetScaleByDistance] - 用于基于与相机的距离设置pixelOffset。
     * @property [imageSubRegion] - 定义用于广告牌的图像的子区域，而不是从左下角开始以像素为单位的整个图像。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        image?: string | HTMLCanvasElement;
        opacity?: number;
        scale?: number;
        rotation?: number;
        rotationDegree?: number;
        horizontalOrigin?: Cesium.HorizontalOrigin;
        verticalOrigin?: Cesium.VerticalOrigin;
        width?: number;
        height?: number;
        hasPixelOffset?: boolean;
        pixelOffsetX?: number;
        pixelOffsetY?: number;
        pixelOffset?: Cartesian2 | Number[];
        scaleByDistance?: boolean | Cesium.NearFarScalar;
        scaleByDistance_far?: number;
        scaleByDistance_farValue?: number;
        scaleByDistance_near?: number;
        scaleByDistance_nearValue?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        clampToGround?: boolean;
        heightReference?: Cesium.HeightReference;
        visibleDepth?: boolean;
        disableDepthTestDistance?: number;
        color?: Cesium.Color;
        eyeOffset?: Cesium.Cartesian3;
        alignedAxis?: Cesium.Cartesian3;
        sizeInMeters?: boolean;
        translucencyByDistance?: Cesium.NearFarScalar;
        pixelOffsetScaleByDistance?: Cesium.NearFarScalar;
        imageSubRegion?: Cesium.BoundingRectangle;
        setHeight?: number;
        addHeight?: number;
        highlight?: BillboardEntity.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 图标点  Entity对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.drawShow = true] - 绘制时，是否自动隐藏entity，可避免拾取坐标存在问题。
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class BillboardEntity extends BasePointEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        style: BillboardEntity.StyleOptions;
        attr?: any;
        drawShow?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.BillboardGraphics;
    /**
     * 图像、URI或Canvas
     */
    image: string | HTMLCanvasElement;
    /**
     * 设置透明度
     * @param value - 透明度
     * @returns 无
     */
    setOpacity(value: number): void;
    /**
     * 开始执行弹跳动画
     * @param [options] - 参数，包括
     * @param [options.maxHeight = 50] - 弹跳的最大高度, 单位：像素
     * @param [options.step = 1] - 弹跳增量, 控制速度，单位：像素
     * @param [options.autoStop] - 是否自动停止，true时：会逐渐减弱至停止状态
     * @returns 无
     */
    startBounce(options?: {
        maxHeight?: number;
        step?: number;
        autoStop?: boolean;
    }): void;
    /**
     * 停止弹跳动画
     * @returns 无
     */
    stopBounce(): void;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): BillboardEntity;
}

declare namespace BoxEntity {
    /**
     * 盒子 支持的样式信息
     * @property [dimensions] - 指定盒子的长度、宽度和高度。
     * @property [dimensions_x = 100] - 盒子长度
     * @property [dimensions_y = 100] - 盒子宽度
     * @property [dimensions_z = 100] - 盒子高度
     * @property [heading = 0] - 方向角 （度数值，0-360度）
     * @property [pitch = 0] - 俯仰角（度数值，0-360度）
     * @property [roll = 0] - 翻滚角（度数值，0-360度）
     * @property [fill = true] - 是否填充
     * @property [materialType = "Color"] - 填充类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material = Cesium.Color.WHITE] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [color = "#00FF00"] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [outline = false] - 是否边框
     * @property [outlineWidth = 1.0] - 边框宽度
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 100000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [hasShadows = false] - 是否投射阴影
     * @property [shadows = Cesium.ShadowMode.DISABLED] - 是投射还是接收来自光源的阴影。
     * @property [clampToGround = false] - 是否贴地
     * @property [heightReference = Cesium.HeightReference.NONE] - 指定从实体位置到它的相对高度。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        dimensions?: Cesium.Cartesian3;
        dimensions_x?: number;
        dimensions_y?: number;
        dimensions_z?: number;
        heading?: number;
        pitch?: number;
        roll?: number;
        fill?: boolean;
        materialType?: string;
        material材质参数?: any;
        material?: Cesium.MaterialProperty | Cesium.Color;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineWidth?: string;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        clampToGround?: boolean;
        heightReference?: Cesium.HeightReference;
        setHeight?: number;
        addHeight?: number;
        highlight?: BoxEntity.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 盒子  Entity对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.orientation] - 实体方向
 * @param [options.drawShow = true] - 绘制时，是否自动隐藏entity，可避免拾取坐标存在问题。
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class BoxEntity extends BasePointEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        style: BoxEntity.StyleOptions;
        attr?: any;
        orientation?: Cesium.Property;
        drawShow?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.BoxGraphics;
    /**
     * 编辑处理类
     */
    readonly EditClass: EditBox;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): BoxEntity;
}

declare namespace ConeTrack {
    /**
     * 圆锥追踪体 支持的样式信息
     * @property [angle] - 圆锥追踪体张角（角度值，取值范围 0.01-89.99）
     * @property [bottomRadius = 100] - 不指定angle时，也可以直接指定圆锥底部半径（单位：米）
     * @property [length = 100] - 圆锥追踪体长度值（单位：米），没有指定targetPosition时有效
     * @property [heading = 0] - 方向角 （度数值，0-360度），没有指定targetPosition时有效
     * @property [pitch = 0] - 俯仰角（度数值，0-360度），没有指定targetPosition时有效
     * @property [roll = 0] - 翻滚角（度数值，0-360度），没有指定targetPosition时有效
     * @property [其他] - 支持父类其他样式
     */
    type StyleOptions = {
        angle?: number;
        bottomRadius?: number;
        length?: number;
        heading?: number;
        pitch?: number;
        roll?: number;
        其他?: CylinderEntity.StyleOptions;
    };
}

/**
 * 圆锥追踪体
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param [options.targetPosition] - 追踪的目标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class ConeTrack extends CylinderEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        targetPosition?: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        style: ConeTrack.StyleOptions;
        attr?: any;
    });
    /**
     * 追踪的目标位置(确定了方向和距离)
     */
    targetPosition: Cesium.Cartesian3;
    /**
     * 追踪的目标位置
     */
    readonly targetPoint: LatLngPoint;
    /**
     * 夹角，半场角度，取值范围 0.01-89.99
     */
    angle: number;
}

declare namespace CorridorEntity {
    /**
     * 走廊 支持的样式信息
     * @property [width = 100] - 走廊宽度，指定走廊边缘之间的距离。
     * @property [cornerType = "ROUNDED"] - 指定边角的样式。String可选项：ROUNDED (解释：圆滑),MITERED (解释：斜接),BEVELED (解释：斜切),
     * @property [height = 0] - 高程，圆相对于椭球面的高度。
     * @property [heightReference = Cesium.HeightReference.NONE] - 指定高度相对于什么的属性。
     * @property [diffHeight = 100] - 高度差（走廊本身的高度），与extrudedHeight二选一。
     * @property [extrudedHeight] - 指定走廊挤压面相对于椭球面的高度。
     * @property [extrudedHeightReference = Cesium.HeightReference.NONE] - 指定挤压高度相对于什么的属性。
     * @property [fill = true] - 是否填充。
     * @property [materialType = "Color"] - 填充类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material = Cesium.Color.WHITE] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [color = "#3388ff"] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [material = Cesium.Color.WHITE] - 指定用于填充的材质，指定material后fillType和color属性将被覆盖。
     * @property [outline = false] - 是否边框
     * @property [outlineWidth = 1] - 边框宽度
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 100000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [granularity = Cesium.Math.RADIANS_PER_DEGREE] - 指定每个纬度和经度之间的距离。
     * @property [hasShadows = false] - 是否投射阴影
     * @property [shadows = Cesium.ShadowMode.DISABLED] - 指定走廊是投射还是接收来自光源的阴影。
     * @property [clampToGround = false] - 是否贴地
     * @property [classificationType = Cesium.ClassificationType.BOTH] - 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。
     * @property [zIndex = 0] - 层级顺序，用于排序。只有在高度和挤压高度未定义，并且走廊是静态的情况下才有效果。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        width?: number;
        cornerType?: string | Cesium.CornerType;
        height?: number;
        heightReference?: Cesium.HeightReference;
        diffHeight?: number;
        extrudedHeight?: number;
        extrudedHeightReference?: Cesium.HeightReference;
        fill?: boolean;
        materialType?: string;
        material材质参数?: any;
        material?: Cesium.MaterialProperty | Cesium.Color;
        color?: string | Cesium.Color;
        opacity?: number;
        material?: Cesium.MaterialProperty | Cesium.Color;
        outline?: boolean;
        outlineWidth?: number;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        granularity?: number;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        clampToGround?: string;
        classificationType?: Cesium.ClassificationType;
        zIndex?: number;
        setHeight?: number;
        addHeight?: number;
        highlight?: CorridorEntity.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 走廊  Entity矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.hasMoveEdit = true] - 绘制时，是否可以整体平移
 * @param [options.minPointNum = 2] - 绘制时，至少需要点的个数
 * @param [options.maxPointNum = 9999] - 绘制时，最多允许点的个数
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class CorridorEntity extends BasePolyEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[] | Cesium.PositionProperty;
        style: CorridorEntity.StyleOptions;
        attr?: any;
        hasMoveEdit?: boolean;
        minPointNum?: number;
        maxPointNum?: number;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.CorridorGraphics;
    /**
     * 编辑处理类
     */
    readonly EditClass: EditCorridor;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): CorridorEntity;
    /**
     * 位置坐标数组 （笛卡尔坐标）, 赋值时可以传入LatLngPoint数组对象
     */
    positions: Cesium.Cartesian3[];
}

/**
 * 曲线
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.hasMoveEdit = true] - 绘制时，是否可以整体平移
 * @param [options.minPointNum = 2] - 绘制时，至少需要点的个数
 * @param [options.maxPointNum = 9999] - 绘制时，最多允许点的个数
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class CurveEntity extends PolylineEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[] | Cesium.PositionProperty;
        style: PolylineEntity.StyleOptions;
        attr?: any;
        hasMoveEdit?: boolean;
        minPointNum?: number;
        maxPointNum?: number;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): CurveEntity;
}

declare namespace DivBillboardEntity {
    /**
     * HTML转图片后的图标点Entity 支持的样式信息
     * @property [图标点的参数] - 支持父类的所有样式信息
     * @property html - Html内容
     */
    type StyleOptions = {
        图标点的参数?: BillboardEntity.StyleOptions;
        html: string;
    };
}

/**
 * HTML转图片后的 图标点Entity，
 * 需要引入html2canvas或domtoimage插件进行DOM转图片
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.drawShow = true] - 绘制时，是否自动隐藏entity，可避免拾取坐标存在问题。
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class DivBillboardEntity extends BillboardEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        style: DivBillboardEntity.StyleOptions;
        attr?: any;
        drawShow?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): DivBillboardEntity;
}

/**
 * 标绘处理对应的编辑基类
 */
declare class EditBase {
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: any;
}

/**
 * BoxEntity对象，标绘处理对应的编辑类
 */
declare class EditBox extends EditBase {
    /**
     * 位置坐标 （笛卡尔坐标）
     */
    position: Cesium.Cartesian3;
}

declare namespace FontBillboardEntity {
    /**
     * Font CSS字体点转图片后的图标点  Entity 支持的样式信息
     * @property [图标点的参数] - 支持父类的所有样式信息
     * @property [iconClass = "fa fa-automobile"] - 字体css样式
     * @property [iconSize = 50] - 字体大小
     * @property [color = '#ff0000'] - 字体颜色
     */
    type StyleOptions = {
        图标点的参数?: BillboardEntity.StyleOptions;
        iconClass?: string;
        iconSize?: number;
        color?: string;
    };
}

/**
 * Font CSS字体点转图片后的图标点  Entity,
 * 需要引入html2canvas或domtoimage插件进行DOM转图片
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.drawShow = true] - 绘制时，是否自动隐藏entity，可避免拾取坐标存在问题。
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class FontBillboardEntity extends BasePointEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        style: FontBillboardEntity.StyleOptions;
        attr?: any;
        drawShow?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): FontBillboardEntity;
}

declare namespace LabelEntity {
    /**
     * 文本点 支持的样式信息
     * @property [text = "文字"] - 文本内容，换行可以用换行符'\n'。
     * @property [scale = 1.0] - 指定缩放比例。
     * @property [horizontalOrigin] - 横向方向的定位
     * @property [verticalOrigin] - 垂直方向的定位
     * @property [font_family = "楷体"] - 字体 ,可选项：微软雅黑,宋体,楷体,隶书,黑体 等
     * @property [font_size = 30] - 字体大小
     * @property [font_weight = "normal"] - 是否加粗 ,可选项：bold (解释：是),normal (解释：否),
     * @property [font_style = "normal"] - 是否斜体 ,可选项：italic (解释：是),normal (解释：否),
     * @property [font = '30px normal normal 楷体'] - 上叙4个属性的一次性指定CSS字体的属性。
     * @property [fill = true] - 是否填充
     * @property [color = "#ffffff"] - 文本颜色
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [outline = false] - 是否衬色
     * @property [outlineColor = "#000000"] - 衬色颜色
     * @property [outlineOpacity = 0.6] - 衬色透明度
     * @property [outlineWidth = 2.0] - 衬色宽度
     * @property [background = false] - 是否背景
     * @property [backgroundColor = "#000000"] - 背景颜色
     * @property [backgroundOpacity = 0.5] - 背景透明度
     * @property [backgroundPadding = new Cesium.Cartesian2(7, 5)] - 背景内边距，指定文字与填充边界内容之间的空间(以像素为单位)。
     * @property [hasPixelOffset = false] - 是否存在偏移量
     * @property [pixelOffsetX = 0] - 横向偏移像素
     * @property [pixelOffsetY = 0] - 纵向偏移像素
     * @property [pixelOffset = Cartesian2.ZERO] - A {@link Cartesian2} Property specifying the pixel offset.
     * @property [pixelOffsetScaleByDistance] - A {@link NearFarScalar} Property used to set pixelOffset based on distance from the camera.
     * @property [eyeOffset = Cartesian3.ZERO] - A {@link Cartesian3} Property specifying the eye offset.
     * @property [scaleByDistance = false] - 是否按视距缩放 或 设定基于与相机的距离设置比例。
     * @property [scaleByDistance_far = 1000000] - 上限
     * @property [scaleByDistance_farValue = 0.1] - 比例值
     * @property [scaleByDistance_near = 1000] - 下限
     * @property [scaleByDistance_nearValue = 1] - 比例值
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 100000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [clampToGround = false] - 是否贴地
     * @property [heightReference = Cesium.HeightReference.NONE] - 指定高度相对于什么的属性。
     * @property [visibleDepth = true] - 是否被遮挡
     * @property [disableDepthTestDistance] - 指定从相机到禁用深度测试的距离。
     * @property [translucencyByDistance] - 用于基于与相机的距离设置半透明度。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     */
    type StyleOptions = {
        text?: string;
        scale?: number;
        horizontalOrigin?: Cesium.HorizontalOrigin;
        verticalOrigin?: Cesium.VerticalOrigin;
        font_family?: string;
        font_size?: number;
        font_weight?: string;
        font_style?: string;
        font?: string;
        fill?: boolean;
        color?: string;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        outlineWidth?: number;
        background?: boolean;
        backgroundColor?: string | Cesium.Color;
        backgroundOpacity?: number;
        backgroundPadding?: number | Cesium.Cartesian2;
        hasPixelOffset?: boolean;
        pixelOffsetX?: number;
        pixelOffsetY?: number;
        pixelOffset?: Cesium.Cartesian2 | Number[];
        pixelOffsetScaleByDistance?: Cesium.NearFarScalar;
        eyeOffset?: Cesium.Cartesian3;
        scaleByDistance?: boolean | Cesium.NearFarScalar;
        scaleByDistance_far?: number;
        scaleByDistance_farValue?: number;
        scaleByDistance_near?: number;
        scaleByDistance_nearValue?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        clampToGround?: boolean;
        heightReference?: Cesium.HeightReference;
        visibleDepth?: boolean;
        disableDepthTestDistance?: number;
        translucencyByDistance?: Cesium.NearFarScalar;
        setHeight?: number;
        addHeight?: number;
    };
}

/**
 * 文字  Entity对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.drawShow = true] - 绘制时，是否自动隐藏entity，可避免拾取坐标存在问题。
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class LabelEntity extends BasePointEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        style: LabelEntity.StyleOptions;
        attr?: any;
        drawShow?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.LabelGraphics;
    /**
     * 文本内容
     */
    readonly text: string;
    /**
     * 开始执行弹跳动画
     * @param [options] - 参数，包括
     * @param [options.maxHeight = 50] - 弹跳的最大高度, 单位：像素
     * @param [options.step = 1] - 弹跳增量, 控制速度，单位：像素
     * @param [options.autoStop] - 是否自动停止，true时：会逐渐减弱至停止状态
     * @returns 无
     */
    startBounce(options?: {
        maxHeight?: number;
        step?: number;
        autoStop?: boolean;
    }): void;
    /**
     * 停止弹跳动画
     * @returns 无
     */
    stopBounce(): void;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): LabelEntity;
    /**
     * 附加的label文本对象
     */
    readonly label: Cesium.Label | Cesium.LabelGraphics;
}

declare namespace PathEntity {
    /**
     * path路径 支持的样式信息
     * @property [width = 1.0] - 以像素为单位指定宽度的数字属性。
     * @property [color = "#FFFF00"] - 颜色
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [material = Cesium.Color.WHITE] - 指定用于填充的材质，指定material后fillType和color属性将被覆盖。
     * @property [leadTime] - 指定要在保留path对象前面显示的秒数。
     * @property [trailTime] - 指定要显示的对象后面的秒数。
     * @property [resolution = 60] - 指定在对位置进行采样时步进的最大秒数。
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 100000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        width?: number;
        color?: string;
        opacity?: number;
        material?: Cesium.MaterialProperty | Cesium.Color;
        leadTime?: number;
        trailTime?: number;
        resolution?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        setHeight?: number;
        addHeight?: number;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * path路径  Entity矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置（含时序的点集合）
 * @param [options.orientation] - 实体方向
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.label] - 设置是否显示 文本 和对应的样式
 * @param [options.model] - 设置是否显示 gltf模型 和对应的样式
 * @param [options.point] - 设置是否显示 像素点 和对应的样式，如果不设置gltf模型时，可以选择该项。
 * @param [options.billboard] - 设置是否显示 图标 和对应的样式，如果不设置gltf模型时，可以选择该项。
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class PathEntity extends BasePointEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: Cesium.SampledPositionProperty;
        orientation?: Cesium.Property;
        style: PathEntity.StyleOptions;
        attr?: any;
        label?: LabelEntity.StyleOptions;
        model?: ModelEntity.StyleOptions;
        point?: PointEntity.StyleOptions;
        billboard?: BillboardEntity.StyleOptions;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.PathGraphics;
    /**
     * 获取当前时间的三维空间中的旋转。
     */
    readonly orientationShow: Cesium.Quaternion;
    /**
     * 获取当前时间的方向角
     */
    readonly hpr: Cesium.HeadingPitchRoll;
    /**
     * 俯仰角，上下摇摆的角度，0-360度角度值
     */
    pitch: number;
    /**
     * 滚转角，左右摆动的角度，0-360度角度值
     */
    roll: number;
    /**
     * 定位至当前时间所在的位置 (非相机位置)
     * @param [options = {}] - 具有以下属性的对象:
     * @param options.radius - 相机距离目标点的距离（单位：米）
     * @param options.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param options.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param options.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [options.duration] - 飞行持续时间（秒）。如果省略，内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.endTransform] - 表示飞行完成后摄像机将位于的参考帧的变换矩阵。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机的飞行角度高于该值，请在飞行过程中调整俯仰角度以向下看，并将地球保持在视口中。
     * @param [options.flyOverLongitude] - 地球上2点之间总是有两种方式。此选项会迫使相机选择战斗方向以在该经度上飞行。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 无
     */
    flyToPoint(options?: {
        radius: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        easingFunction?: EasingFunction.Callback;
    }): void;
    /**
     * 位置坐标 （笛卡尔坐标）, 赋值时可以传入LatLngPoint对象
     */
    position: Cesium.Cartesian3;
}

declare namespace PlaneEntity {
    /**
     * 平面 支持的样式信息
     * @property [dimensions] - 指定平面的宽度和高度。
     * @property [dimensions_x = 100] - 长度
     * @property [dimensions_y = 100] - 宽度
     * @property [plane] - 指定平面的法线和距离。
     * @property [plane_normal = "z"] - 方向 ,可选项：x (解释：X轴),y (解释：Y轴),z (解释：Z轴),
     * @property [plane_distance = 0] - 偏移距离
     * @property [heading = 0] - 方向角 （度数值，0-360度）
     * @property [pitch = 0] - 俯仰角（度数值，0-360度）
     * @property [roll = 0] - 翻滚角（度数值，0-360度）
     * @property [fill = true] - 是否填充
     * @property [materialType = "Color"] - 填充类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material = Cesium.Color.WHITE] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [randomColor = false] - 是否随机颜色
     * @property [color = "#00FF00"] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [outline = false] - 是否边框
     * @property [outlineWidth = 1] - 边框宽度
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 100000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [hasShadows = false] - 是否阴影
     * @property [shadows = Cesium.ShadowMode.DISABLED] - 指定平面是投射还是接收来自光源的阴影。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        dimensions?: Cesium.Cartesian2;
        dimensions_x?: number;
        dimensions_y?: number;
        plane?: Cesium.Plane;
        plane_normal?: string;
        plane_distance?: number;
        heading?: number;
        pitch?: number;
        roll?: number;
        fill?: boolean;
        materialType?: string;
        material材质参数?: any;
        material?: Cesium.MaterialProperty | Cesium.Color;
        randomColor?: boolean;
        color?: string;
        opacity?: number;
        outline?: boolean;
        outlineWidth?: string;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        setHeight?: number;
        addHeight?: number;
        highlight?: PlaneEntity.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 平面  Entity对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.orientation] - 实体方向
 * @param [options.drawShow = true] - 绘制时，是否自动隐藏entity，可避免拾取坐标存在问题。
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class PlaneEntity extends BasePointEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        style: PlaneEntity.StyleOptions;
        attr?: any;
        orientation?: Cesium.Property;
        drawShow?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.PlaneGraphics;
    /**
     * 编辑处理类
     */
    readonly EditClass: EditPlane;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PlaneEntity;
}

declare namespace PointEntity {
    /**
     * 像素点 支持的样式信息
     * @property [pixelSize = 10] - 像素大小
     * @property [color = "#3388ff"] - 颜色
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [outline = false] - 是否边框
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [outlineWidth = 2] - 边框宽度
     * @property [scaleByDistance = false] - 是否按视距缩放 或 指定用于基于距离缩放点。
     * @property [scaleByDistance_far = 1000000] - 上限
     * @property [scaleByDistance_farValue = 0.1] - 比例值
     * @property [scaleByDistance_near = 1000] - 下限
     * @property [scaleByDistance_nearValue = 1] - 比例值
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 10000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [visibleDepth = true] - 是否被遮挡
     * @property [disableDepthTestDistance] - 指定从相机到禁用深度测试的距离。
     * @property [translucencyByDistance] - 用于基于与相机的距离设置半透明度。
     * @property [clampToGround = false] - 是否贴地
     * @property [heightReference = Cesium.HeightReference.NONE] - 指定高度相对于什么的属性。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        pixelSize?: number;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        outlineWidth?: number;
        scaleByDistance?: boolean | Cesium.NearFarScalar;
        scaleByDistance_far?: number;
        scaleByDistance_farValue?: number;
        scaleByDistance_near?: number;
        scaleByDistance_nearValue?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        visibleDepth?: boolean;
        disableDepthTestDistance?: number;
        translucencyByDistance?: Cesium.NearFarScalar;
        clampToGround?: boolean;
        heightReference?: Cesium.HeightReference;
        setHeight?: number;
        addHeight?: number;
        highlight?: PointEntity.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 像素点 Entity对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.drawShow = true] - 绘制时，是否自动隐藏entity，可避免拾取坐标存在问题。
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class PointEntity extends BasePointEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        style: PointEntity.StyleOptions;
        attr?: any;
        drawShow?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.PointGraphics;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PointEntity;
}

declare namespace PolylineEntity {
    /**
     * 线 支持的样式信息
     * @property [materialType = "Color"] - 线型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material = Cesium.Color.WHITE] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [width = 4] - 线宽
     * @property [color = "#3388ff"] - 颜色
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [randomColor = false] - 是否随机颜色
     * @property [depthFailMaterial] - 指定当折线位于地形之下时用于绘制折线的材质。
     * @property [closure = false] - 是否闭合
     * @property [outline = false] - 是否衬色
     * @property [outlineColor = "#ffffff"] - 衬色颜色
     * @property [outlineWidth = 2] - 衬色宽度
     * @property [depthFail = false] - 是否显示遮挡
     * @property [depthFailColor = "#ff0000"] - 遮挡处颜色
     * @property [depthFailOpacity = 0.2] - 遮挡处透明度
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 100000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [arcType = Cesium.ArcType.GEODESIC] - 折线段必须遵循的线的类型。
     * @property [granularity = Cesium.Math.RADIANS_PER_DEGREE] - 如果arcType不是arcType.none，则指定每个纬度和经度之间的角距离的数字属性。
     * @property [hasShadows = false] - 是否阴影
     * @property [shadows = Cesium.ShadowMode.DISABLED] - 指定对象是投射还是接收来自光源的阴影。
     * @property [clampToGround = false] - 是否贴地
     * @property [classificationType = Cesium.ClassificationType.BOTH] - 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。
     * @property [zIndex = 0] - 层级顺序,指定用于排序地面几何的zIndex。只有当' clampToGround '为真且支持地形上的折线时才会有效果。
     * @property [setHeight = 0] - 指定坐标高度值，或数组指定每个点的高度（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值，或数组指定每个点增加的高度（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示，额外支持：
     * @property [label.position] - 文字所在位置，默认是矢量对象本身的center属性值。支持配置 'center'：围合面的内部中心点坐标，'{xxxx}'配置属性字段, 或者直接指定坐标值。
     * @property [label.showAll] - MultiPolygon和MultiLineString时，是否显示所有注记，默认只在最大坐标数的面或线上显示。
     */
    type StyleOptions = {
        materialType?: string;
        material材质参数?: any;
        material?: Cesium.MaterialProperty | Cesium.Color;
        width?: number;
        color?: string | Cesium.Color;
        opacity?: number;
        randomColor?: boolean;
        depthFailMaterial?: Cesium.MaterialProperty | Color;
        closure?: boolean;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        outlineWidth?: number;
        depthFail?: boolean;
        depthFailColor?: string;
        depthFailOpacity?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        arcType?: Cesium.ArcType;
        granularity?: number;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        clampToGround?: boolean;
        classificationType?: Cesium.ClassificationType;
        zIndex?: number;
        setHeight?: number | Number[];
        addHeight?: number | Number[];
        highlight?: PolylineEntity.StyleOptions;
        label?: {
            position?: string | LatLngPoint;
            showAll?: boolean;
        };
    };
}

/**
 * 线  Entity矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.hasMoveEdit = true] - 绘制时，是否可以整体平移
 * @param [options.minPointNum = 2] - 绘制时，至少需要点的个数
 * @param [options.maxPointNum = 9999] - 绘制时，最多允许点的个数
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class PolylineEntity extends BasePolyEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[] | Cesium.PositionProperty;
        style: PolylineEntity.StyleOptions;
        attr?: any;
        hasMoveEdit?: boolean;
        minPointNum?: number;
        maxPointNum?: number;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.PolylineGraphics;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineEntity;
    /**
     * 位置坐标数组 （笛卡尔坐标）, 赋值时可以传入LatLngPoint数组对象
     */
    positions: Cesium.Cartesian3[];
}

declare namespace PolylineVolumeEntity {
    /**
     * 管道线 支持的样式信息
     * @property [radius = 10] - 半径
     * @property [shape = "pipeline"] - 形状类型 或 定义要挤压的形状。类型可选项：pipeline (解释：空心管),circle (解释：实心管),star (解释：星状管),
     * @property [fill = true] - 是否填充
     * @property [color = "#FFFF00"] - 颜色
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [material = Cesium.Color.WHITE] - 指定用于填充的材质，指定material后fillType和color属性将被覆盖。
     * @property [outline = false] - 是否边线
     * @property [outlineWidth = 1.0] - 边线宽度
     * @property [outlineColor = "#ffffff"] - 边线颜色
     * @property [outlineOpacity = opacity] - 边框透明度
     * @property [cornerType = CornerType.ROUNDED] - 指定边角的样式。
     * @property [granularity = Cesium.Math.RADIANS_PER_DEGREE] - 指定每个纬度点和经度点之间的角距离。
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 100000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [hasShadows = false] - 是否投射阴影
     * @property [shadows = Cesium.ShadowMode.DISABLED] - 指定管道是否投射或接收来自光源的阴影。
     * @property [setHeight = 0] - 指定坐标高度值，或数组指定每个点的高度（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值，或数组指定每个点增加的高度（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        radius?: number;
        shape?: string | Cesium.Cartesian2[];
        fill?: boolean;
        color?: string;
        opacity?: number;
        material?: Cesium.MaterialProperty | Cesium.Color;
        outline?: boolean;
        outlineWidth?: number;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        cornerType?: Cesium.CornerType;
        granularity?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        setHeight?: number | Number[];
        addHeight?: number | Number[];
        highlight?: PolylineVolumeEntity.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 管道线  Entity矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.hasMoveEdit = true] - 绘制时，是否可以整体平移
 * @param [options.minPointNum = 2] - 绘制时，至少需要点的个数
 * @param [options.maxPointNum = 9999] - 绘制时，最多允许点的个数
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class PolylineVolumeEntity extends BasePolyEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[] | Cesium.PositionProperty;
        style: PolylineVolumeEntity.StyleOptions;
        attr?: any;
        hasMoveEdit?: boolean;
        minPointNum?: number;
        maxPointNum?: number;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.PolylineVolumeEntity;
    /**
     * 编辑处理类
     */
    readonly EditClass: EditPoly;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineVolumeEntity;
    /**
     * 位置坐标数组 （笛卡尔坐标）, 赋值时可以传入LatLngPoint数组对象
     */
    positions: Cesium.Cartesian3[];
}

declare namespace RectangleEntity {
    /**
     * 矩形 支持的样式信息
     * @property [fill = true] - 是否填充
     * @property [materialType = "Color"] - 填充类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material = Cesium.Color.WHITE] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [color = "#3388ff"] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [outline = false] - 是否边框
     * @property [outlineWidth = 1] - 边框宽度
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [outlineStyle] - 边框的完整自定义样式，会覆盖outlineWidth、outlineColor等参数。
     * @property [height = 0] - 高程，圆相对于椭球面的高度。
     * @property [heightReference = Cesium.HeightReference.NONE] - 指定高度相对于什么的属性。
     * @property [diffHeight = 100] - 高度差（走廊本身的高度），与extrudedHeight二选一。
     * @property [extrudedHeight] - 指定走廊挤压面相对于椭球面的高度。
     * @property [extrudedHeightReference = Cesium.HeightReference.NONE] - 指定挤压高度相对于什么的属性。
     * @property [rotation = 0] - 旋转角度（弧度值），正北为0，逆时针旋转
     * @property [rotationDegree = 0] - 旋转角度（度数值，0-360度），与rotation二选一
     * @property [stRotation = 0] - 矩形纹理的角度（弧度值），正北为0，逆时针旋转
     * @property [stRotationDegree = 0] - 矩形纹理的角度（度数值，0-360度），与stRotation二选一
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 100000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [hasShadows = false] - 是否阴影
     * @property [shadows = Cesium.ShadowMode.DISABLED] - 指定矩形是投射还是接收来自光源的阴影。
     * @property [granularity = Cesium.Math.RADIANS_PER_DEGREE] - 指定矩形上各点之间的角距离。
     * @property [clampToGround = false] - 是否贴地
     * @property [classificationType = Cesium.ClassificationType.BOTH] - 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。
     * @property [zIndex = 0] - 层级顺序，指定用于排序地面几何的zIndex。只有当矩形为常量且没有指定height或extrdedheight时才有效果。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        fill?: boolean;
        materialType?: string;
        material材质参数?: any;
        material?: Cesium.MaterialProperty | Cesium.Color;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineWidth?: number;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        outlineStyle?: PolylineEntity.StyleOptions;
        height?: number;
        heightReference?: Cesium.HeightReference;
        diffHeight?: number;
        extrudedHeight?: number;
        extrudedHeightReference?: Cesium.HeightReference;
        rotation?: number;
        rotationDegree?: number;
        stRotation?: number;
        stRotationDegree?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        granularity?: number;
        clampToGround?: string;
        classificationType?: Cesium.ClassificationType;
        zIndex?: number;
        setHeight?: number;
        addHeight?: number;
        highlight?: RectangleEntity.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 矩形  Entity矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param options.rectangle - 矩形范围，与positions二选一。
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.hasMoveEdit = true] - 绘制时，是否可以整体平移
 * @param [options.minPointNum = 2] - 绘制时，至少需要点的个数
 * @param [options.maxPointNum = 9999] - 绘制时，最多允许点的个数
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class RectangleEntity extends BasePolyEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[] | Cesium.PositionProperty;
        rectangle: Cesium.Rectangle | Cesium.PositionProperty;
        style: RectangleEntity.StyleOptions;
        attr?: any;
        hasMoveEdit?: boolean;
        minPointNum?: number;
        maxPointNum?: number;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.RectangleGraphics;
    /**
     * 编辑处理类
     */
    readonly EditClass: EditRectangle;
    /**
     * 矩形的边线坐标集合（笛卡尔坐标）
     */
    outlinePositions: Cesium.Cartesian3[];
    /**
     * 矩形的边线坐标集合（经纬度二维数组），示例 [ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7], …… ]
     */
    readonly outlineCoordinates: any[][];
    /**
     * 坐标数据对应的矩形边界对象
     */
    rectangle: Cesium.Rectangle;
    /**
     * 获取矩形的4个边线坐标集合（笛卡尔坐标）
     * @param [closure = true] - 是否闭合，true时会添加第0个点进行闭合。
     * @returns 边线坐标数组
     */
    getOutlinePositions(closure?: boolean): Cesium.Cartesian3[];
    /**
     * 获取矩形的4个边线坐标集合（经纬度二维数组）
     * @param [closure = true] - 是否闭合，true时会添加第0个点进行闭合。
     * @returns 边线坐标数组（经纬度二维数组）
     */
    getOutlineCoordinates(closure?: boolean): any[][];
    /**
     * 判断点是否在矩形内
     * @param position - 需要判断的点
     * @returns 是否在矩形内
     */
    isInPoly(position: Cesium.Cartesian3 | LatLngPoint): boolean;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): RectangleEntity;
    /**
     * 中心点坐标 （笛卡尔坐标）
     */
    readonly center: Cesium.Cartesian3;
    /**
     * 距离（单位：米）
     */
    readonly distance: number;
    /**
     * 面积（单位：平方米）
     */
    readonly area: number;
    /**
     * 位置坐标数组 （笛卡尔坐标）, 赋值时可以传入LatLngPoint数组对象
     */
    positions: Cesium.Cartesian3[];
    /**
     * 位置坐标数组
     */
    readonly points: LatLngPoint[];
    /**
     * 飞行定位至 数据所在的视角
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.minHeight] - 定位时相机的最小高度值，用于控制避免异常数据
     * @param [options.maxHeight] - 定位时相机的最大高度值，用于控制避免异常数据
     * @param options.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param options.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param options.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 当前对象本身，可以链式调用
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        minHeight?: number;
        maxHeight?: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): this;
}

declare namespace RectangularSensor {
    /**
     * 相控阵雷达 支持的样式信息
     * @property radius - 半径
     * @property [xHalfAngle = 0] - 传感器水平半角（弧度值）
     * @property [xHalfAngleDegree = 0] - 传感器水平半角（度数值，0-360度），与xHalfAngle二选一
     * @property [yHalfAngle = 0] - 传感器垂直半角（弧度值）
     * @property [yHalfAngleDegree = 0] - 传感器垂直半角（度数值，0-360度），与yHalfAngle二选一
     * @property [color = "#00FF00"] - 颜色
     * @property [opacity = 0.4] - 透明度
     * @property [material = new Cesium.Color(0.0, 1.0, 1.0, 0.4)] - 指定用于填充的材质，指定material后color属性将被覆盖。
     * @property [lineColor = "#ffffff"] - 边线颜色
     * @property [lineOpacity = 0.6] - 边线透明度
     * @property [heading = 0] - 方向角 （度数值，0-360度）
     * @property [pitch = 0] - 俯仰角（度数值，0-360度）
     * @property [roll = 0] - 翻滚角（度数值，0-360度）
     * @property [showScanPlane = true] - 是否显示扫描面
     * @property [scanPlaneColor = new Cesium.Color(0.0, 1.0, 1.0, 1.0)] - 扫描面颜色
     * @property [scanPlaneOpacity = 0.9] - 扫描面透明度
     * @property [scanPlaneMode = 'vertical'] - 扫描面方向模式,可选值：vertical（解释：垂直方向）、horizontal（解释：水平方向）
     * @property [scanPlaneRate = 3] - 扫描速率
     * @property [showSectorLines = true] - 是否显示扇面的线
     * @property [showSectorSegmentLines = true] - 是否显示扇面和圆顶面连接的线
     * @property [showLateralSurfaces = true] - 是否显示侧面
     * @property [lateralSurfaceMaterial] - 侧面材质
     * @property [showDomeSurfaces = true] - 是否显示圆顶表面
     * @property [domeSurfaceMaterial] - 圆顶表面材质
     * @property [showDomeLines = true] - 是否显示圆顶面线
     * @property [showIntersection = true] - 是否显示与地球相交的线
     * @property [intersectionColor = Cesium.Color.WHITE] - 与地球相交的线的颜色
     * @property [intersectionWidth = 5.0] - 与地球相交的线的宽度（像素）
     * @property [slice = 32] - 切分程度
     * @property [depthTest = true] - 是否被遮挡
     */
    type StyleOptions = {
        radius: number;
        xHalfAngle?: number;
        xHalfAngleDegree?: number;
        yHalfAngle?: number;
        yHalfAngleDegree?: number;
        color?: string;
        opacity?: number;
        material?: Cesium.MaterialProperty | Cesium.Color;
        lineColor?: string | Cesium.Color;
        lineOpacity?: number;
        heading?: number;
        pitch?: number;
        roll?: number;
        showScanPlane?: boolean;
        scanPlaneColor?: string | Cesium.Color;
        scanPlaneOpacity?: number;
        scanPlaneMode?: number;
        scanPlaneRate?: number;
        showSectorLines?: boolean;
        showSectorSegmentLines?: boolean;
        showLateralSurfaces?: boolean;
        lateralSurfaceMaterial?: Cesium.MaterialProperty;
        showDomeSurfaces?: boolean;
        domeSurfaceMaterial?: Cesium.MaterialProperty;
        showDomeLines?: boolean;
        showIntersection?: boolean;
        intersectionColor?: Cesium.Color;
        intersectionWidth?: Cesium.Color;
        slice?: number;
        depthTest?: boolean;
    };
}

/**
 * 相控阵雷达  Entity对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.orientation] - 实体方向
 * @param [options.drawShow = true] - 绘制时，是否自动隐藏entity，可避免拾取坐标存在问题。
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class RectangularSensor extends BasePointEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        style: RectangularSensor.StyleOptions;
        attr?: any;
        orientation?: Cesium.Property;
        drawShow?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: RectangularSensorGraphics;
    /**
     * 圆的半径（单位：米）
     */
    radius: number;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): RectangularSensor;
}

declare namespace Video2D {
    /**
     * 视频融合（投射2D平面） 支持的样式信息
     * @property [面的参数] - 支持父类的所有样式信息
     * @property camera - 相机方向参数
     * @property camera.direction - direction方向
     * @property camera.up - up方向
     * @property camera.right - right方向
     * @property dis - 投射距离
     * @property fov - 张角(弧度值)
     * @property fovDegree - 张角(角度值，0-180度)
     * @property aspectRatio - 相机视野的宽高比例（垂直张角）
     * @property stRotation - UV旋转(弧度值)
     * @property stRotationDegree - UV旋转(角度值，0-360度)
     */
    type StyleOptions = {
        面的参数?: PolygonEntity.StyleOptions;
        camera: {
            direction: Cesium.Cartesian3;
            up: Cesium.Cartesian3;
            right: Cesium.Cartesian3;
        };
        dis: number;
        fov: number;
        fovDegree: number;
        aspectRatio: number;
        stRotation: number;
        stRotationDegree: number;
    };
    /**
     * 旋转的方向
     */
    enum RatateDirection {
        LEFT,
        RIGHT,
        TOP,
        BOTTOM,
        ALONG,
        INVERSE
    }
}

/**
 * 视频融合（投射2D平面）,
 * 根据相机位置、方向等参数，在相机前面生成一个PolygonEntity面，然后贴视频纹理
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的部分参数
 * @param options.position - 坐标位置
 * @param options.dom - 视频对应的video标签
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.showFrustum = true] - 是否显示视椎体框线
 * @param [options.reverse = false] - 是否反转计算得到的坐标
 */
declare class Video2D extends PolygonEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3 | Cesium.PositionProperty;
        dom: HTMLElement;
        style: Video2D.StyleOptions;
        attr?: any;
        showFrustum?: boolean;
        reverse?: boolean;
    });
    /**
     * 位置坐标 （笛卡尔坐标）, 赋值时可以传入LatLngPoint对象
     */
    position: Cesium.Cartesian3;
    /**
     * 位置坐标 （笛卡尔坐标）
     */
    readonly point: LatLngPoint;
    /**
     * 位置坐标(数组对象)，示例[113.123456,31.123456,30.1]
     */
    readonly coordinate: any[];
    /**
     * 暂停或播放 视频
     */
    play: boolean;
    /**
     * 多边形纹理的角度（弧度值），正北为0，逆时针旋转
     */
    stRotation: number;
    /**
     * 相机水平张角 (弧度值)
     */
    fov: number;
    /**
     * 相机水平张角(角度值，0-180度)
     */
    fovDegree: number;
    /**
     * 相机视野的宽高比例（垂直张角）
     */
    aspectRatio: number;
    /**
     * 投射距离（单位：米）
     */
    dis: number;
    /**
     * 是否显示视椎体框线
     */
    showFrustum: boolean;
    /**
     * 将矢量数据的坐标、样式及属性等信息导出为对象，可以用于存储。
     * @returns 导出的坐标、样式及属性等信息
     */
    toJSON(): any;
    /**
     * 定位至相机的第一视角
     * @returns 无
     */
    flyTo(): void;
    /**
     * 旋转相机
     * @param axis - 旋转的方向
     * @param [rotateDegree = 0.05] - 旋转的角度
     * @returns 无
     */
    rotateCamera(axis: Video2D.RatateDirection, rotateDegree?: number): void;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): Video2D;
    /**
     * 位置坐标数组 （笛卡尔坐标）, 赋值时可以传入LatLngPoint数组对象 或 Cesium.PolygonHierarchy
     */
    positions: Cesium.Cartesian3[];
}

declare namespace WallEntity {
    /**
     * 墙 支持的样式信息
     * @property [diffHeight = 100] - 墙高
     * @property [minimumHeights] - 没有指定diffHeight时，可以指定用于墙壁底部而不是球体表面的高度数组。
     * @property [maximumHeights] - 没有指定diffHeight时，可以指定用于墙顶的高度数组，而不是每个位置的高度。
     * @property [fill = true] - 是否填充
     * @property [materialType = "Color"] - 填充类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material = Cesium.Color.WHITE] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [color = "#00FF00"] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [closure = false] - 是否闭合
     * @property [outline = false] - 是否边框
     * @property [outlineWidth = 1] - 边框宽度
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 100000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [hasShadows = false] - 是否阴影
     * @property [shadows = Cesium.ShadowMode.DISABLED] - 指定墙壁是投射还是接收来自光源的阴影。
     * @property [granularity = Cesium.Math.RADIANS_PER_DEGREE] - 指定每个纬度点和经度点之间的角距离。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示，额外支持：
     * @property [label.position] - 文字所在位置，默认是矢量对象本身的center属性值。支持配置 'center'：围合面的内部中心点坐标，'{xxxx}'配置属性字段, 或者直接指定坐标值。
     * @property [label.showAll] - MultiPolygon和MultiLineString时，是否显示所有注记，默认只在最大坐标数的面或线上显示。
     */
    type StyleOptions = {
        diffHeight?: number;
        minimumHeights?: number[];
        maximumHeights?: number[];
        fill?: boolean;
        materialType?: string;
        material材质参数?: any;
        material?: Cesium.MaterialProperty | Cesium.Color;
        color?: string;
        opacity?: number;
        closure?: boolean;
        outline?: boolean;
        outlineWidth?: string;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        granularity?: number;
        setHeight?: number;
        addHeight?: number;
        highlight?: WallEntity.StyleOptions;
        label?: {
            position?: string | LatLngPoint;
            showAll?: boolean;
        };
    };
}

/**
 * 墙  Entity矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.hasMoveEdit = true] - 绘制时，是否可以整体平移
 * @param [options.minPointNum = 2] - 绘制时，至少需要点的个数
 * @param [options.maxPointNum = 9999] - 绘制时，最多允许点的个数
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class WallEntity extends BasePolyEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[] | Cesium.PositionProperty;
        style: WallEntity.StyleOptions;
        attr?: any;
        hasMoveEdit?: boolean;
        minPointNum?: number;
        maxPointNum?: number;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 矢量数据对应的 Cesium内部对象的具体类型对象
     */
    readonly entityGraphic: Cesium.WallGraphics;
    /**
     * 编辑处理类
     */
    readonly EditClass: EditWall;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): WallEntity;
    /**
     * 位置坐标数组 （笛卡尔坐标）, 赋值时可以传入LatLngPoint数组对象
     */
    positions: Cesium.Cartesian3[];
}

/**
 * 攻击箭头  Entity矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.hasMoveEdit = true] - 绘制时，是否可以整体平移
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class AttackArrow extends PolygonEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[] | Cesium.PositionProperty;
        style: PolygonEntity.StyleOptions;
        attr?: any;
        hasMoveEdit?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): AttackArrow;
}

/**
 * 攻击箭头(平尾)  Entity矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.hasMoveEdit = true] - 绘制时，是否可以整体平移
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class AttackArrowPW extends PolygonEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[] | Cesium.PositionProperty;
        style: PolygonEntity.StyleOptions;
        attr?: any;
        hasMoveEdit?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): AttackArrowPW;
}

/**
 * 攻击箭头（燕尾）  Entity矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.hasMoveEdit = true] - 绘制时，是否可以整体平移
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class AttackArrowYW extends PolygonEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[] | Cesium.PositionProperty;
        style: PolygonEntity.StyleOptions;
        attr?: any;
        hasMoveEdit?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): AttackArrowYW;
}

/**
 * 闭合曲面(3个点)   Entity矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.hasMoveEdit = true] - 绘制时，是否可以整体平移
 * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
 * @param [options.availability] - 与该对象关联的可用性(如果有的话)。
 * @param [options.description] - 指定此实体的HTML描述的字符串属性（infoBox中展示）。
 * @param [options.viewFrom] - 观察这个物体时建议的初始偏移量。
 * @param [options.parent] - 要与此实体关联的父实体。
 * @param [options.onBeforeCreate] - 在 new Cesium.Entity(addattr) 前的回调方法，可以对addattr做额外个性化处理。
 */
declare class CloseVurve extends PolygonEntity {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[] | Cesium.PositionProperty;
        style: PolygonEntity.StyleOptions;
        attr?: any;
        hasMoveEdit?: boolean;
        addHeight?: number;
        availability?: Cesium.TimeIntervalCollection;
        description?: Cesium.Property | string;
        viewFrom?: Cesium.Property;
        parent?: Cesium.Entity;
        onBeforeCreate?: (...params: any[]) => any;
    });
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): CloseVurve;
}

/**
 * 角度量算对象，
 * 非直接调用，由 Measure 类统一创建及管理
 * @param options - 参数对象，包括以下：
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.label] - 测量结果文本的样式
 */
declare class AngleMeasure extends PolylineEntity {
    constructor(options: {
        style: PolylineEntity.StyleOptions;
        attr?: any;
        label?: LabelEntity.StyleOptions;
    });
    /**
     * 测量结果
     */
    readonly measured: any;
    /**
     * 更新测量结果的文本
     * @param unit - 计量单位,{@link MeasureUtil#formatDistance} 可选值：auto、m、km、mile、zhang 等。auto时根据距离值自动选用k或km
     * @returns 无
     */
    updateText(unit: string): void;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineEntity;
}

/**
 * 面积测量对象，
 * 非直接调用，由 Measure 类统一创建及管理
 * @param options - 参数对象，包括以下：
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.label] - 测量结果文本的样式
 */
declare class AreaMeasure extends PolygonEntity {
    constructor(options: {
        style: PolygonEntity.StyleOptions;
        attr?: any;
        label?: LabelEntity.StyleOptions;
    });
    /**
     * 测量结果
     */
    readonly measured: any;
    /**
     * 更新测量结果的文本
     * @param unit - 计量单位,{@link MeasureUtil#formatArea} 可选值：计量单位，可选值：auto、m、km、mu、ha 。auto时根据面积值自动选用m或km
     * @returns 无
     */
    updateText(unit: string): void;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineEntity;
    /**
     * 开始绘制矢量数据，绘制的数据会加载在layer图层。
     * @param layer - 图层
     * @returns 无
     */
    startDraw(layer: GraphicLayer): void;
}

/**
 * 贴地面积量算对象，
 * 非直接调用，由 Measure 类统一创建及管理
 * @param options - 参数对象，包括以下：
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.label] - 测量结果文本的样式
 */
declare class AreaSurfaceMeasure extends AreaMeasure {
    constructor(options: {
        style: PolygonEntity.StyleOptions;
        attr?: any;
        label?: LabelEntity.StyleOptions;
    });
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineEntity;
}

/**
 * 距离量算对象，
 * 非直接调用，由 Measure 类统一创建及管理
 * @param options - 参数对象，包括以下：
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.label] - 测量结果文本的样式
 */
declare class DistanceMeasure extends PolylineEntity {
    constructor(options: {
        style: PolylineEntity.StyleOptions;
        attr?: any;
        label?: LabelEntity.StyleOptions;
    });
    /**
     * 测量结果
     */
    readonly measured: any;
    /**
     * 更新测量结果的文本
     * @param unit - 计量单位,{@link MeasureUtil#formatDistance} 可选值：auto、m、km、mile、zhang 等。auto时根据距离值自动选用k或km
     * @returns 无
     */
    updateText(unit: string): void;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineEntity;
}

/**
 * 贴地距离量算对象
 * 非直接调用，由 Measure 类统一创建及管理
 * @param options - 参数对象，包括以下：
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.label] - 测量结果文本的样式
 */
declare class DistanceSurfaceMeasure extends DistanceMeasure {
    constructor(options: {
        style: PolylineEntity.StyleOptions;
        attr?: any;
        label?: LabelEntity.StyleOptions;
    });
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineEntity;
}

/**
 * 高度量算对象，
 * 非直接调用，由 Measure 类统一创建及管理
 * @param options - 参数对象，包括以下：
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.label] - 测量结果文本的样式
 */
declare class HeightMeasure extends PolylineEntity {
    constructor(options: {
        style: PolylineEntity.StyleOptions;
        attr?: any;
        label?: LabelEntity.StyleOptions;
    });
    /**
     * 测量结果
     */
    readonly measured: any;
    /**
     * 更新测量结果的文本
     * @param unit - 计量单位,{@link MeasureUtil#formatDistance} 可选值：auto、m、km、mile、zhang 等。auto时根据距离值自动选用k或km
     * @returns 无
     */
    updateText(unit: string): void;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineEntity;
}

/**
 * 三角高度量算对象，
 * 非直接调用，由 Measure 类统一创建及管理
 * @param options - 参数对象，包括以下：
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.label] - 测量结果文本的样式
 */
declare class HeightTriangleMeasure extends HeightMeasure {
    constructor(options: {
        style: PolylineEntity.StyleOptions;
        attr?: any;
        label?: LabelEntity.StyleOptions;
    });
    /**
     * 更新测量结果的文本
     * @param unit - 计量单位,{@link MeasureUtil#formatDistance} 可选值：auto、m、km、mile、zhang 等。auto时根据距离值自动选用k或km
     * @returns 无
     */
    updateText(unit: string): void;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineEntity;
}

/**
 * 坐标量算对象，
 * 非直接调用，由 Measure 类统一创建及管理
 * @param options - 参数对象，包括以下：
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class PointMeasure extends PointEntity {
    constructor(options: {
        style: PointEntity.StyleOptions;
        attr?: any;
    });
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineEntity;
}

/**
 * 剖面量算对象
 * 非直接调用，由 Measure 类统一创建及管理
 * @param options - 参数对象，包括以下：
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.label] - 测量结果文本的样式
 */
declare class SectionMeasure extends DistanceMeasure {
    constructor(options: {
        style: PolylineEntity.StyleOptions;
        attr?: any;
        label?: LabelEntity.StyleOptions;
    });
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineEntity;
}

/**
 * 体积量算对象（方量），
 * 非直接调用，由 Measure 类统一创建及管理。<br />
 *
 * 1. 挖方量: 计算“基准面”到地表之间的凸出部分进行挖掉的体积。<br />
 * 2. 填方量：计算“基准面”与“墙底部”之间的缺少部分进行填平的体积。
 * @param options - 参数对象，包括以下：
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.polygonWallStyle] - 围墙面的样式
 * @param [options.label] - 测量结果文本的样式
 * @param [options.heightLabel = true] - 是否显示各边界点高度值文本
 * @param [options.offsetLabel = false] - 是否显示各边界点高度差文本
 * @param [options.labelHeight] - 各边界点高度结果文本的样式
 */
declare class VolumeMeasure extends AreaMeasure {
    constructor(options: {
        style: PolygonEntity.StyleOptions;
        attr?: any;
        polygonWallStyle?: PolygonEntity.StyleOptions;
        label?: LabelEntity.StyleOptions;
        heightLabel?: boolean;
        offsetLabel?: boolean;
        labelHeight?: LabelEntity.StyleOptions;
    });
    /**
     * 面内的最高地表高度
     */
    readonly polygonMaxHeight: number;
    /**
     * 基准面 高度，
     * 1. 挖方量: 计算“基准面”到地表之间的凸出部分进行挖掉的体积。<br />
     * 2. 填方量：计算“基准面”与“墙底部”之间的缺少部分进行填平的体积。
     */
    height: number;
    /**
     * 底部高度，
     * 会影响 填方量：计算“基准面高度”与“底部高度”之间的缺少部分进行填平的体积。
     */
    minHeight: number;
    /**
     * 最高高度，对应墙的高度，
     * 不影响测量结果，只是显示效果的区别。
     */
    maxHeight: number;
    /**
     * 更新测量结果的文本
     * @param unit - 计量单位,{@link MeasureUtil#formatArea} 可选值：计量单位，可选值：auto、m、km、mu、ha 。auto时根据面积值自动选用m或km
     * @returns 无
     */
    updateText(unit: string): void;
    /**
     * 通过鼠标拾取高度，赋值给基准面
     * @param callback - 拾取完成后的回调方法
     * @returns 无
     */
    selecteHeight(callback: (...params: any[]) => any): void;
    /**
     * 通过标绘 来创建矢量对象
     * @param layer - 图层
     * @param options - 矢量对象的构造参数
     * @returns 矢量对象
     */
    static fromDraw(layer: GraphicLayer, options: any): PolylineEntity;
}

/**
 * 单个坐标的点状 Primitive图元 矢量对象 基类
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.position - 坐标位置
 * @param [options.modelMatrix] - 将图元(所有几何实例)从模型转换为世界坐标的4x4变换矩阵,可以替代position。
 */
declare class BasePointPrimitive extends BasePrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        modelMatrix?: Cesium.Matrix4;
    });
    /**
     * 位置坐标 （笛卡尔坐标）, 赋值时可以传入LatLngPoint对象
     */
    position: Cesium.Cartesian3;
    /**
     * 位置坐标
     */
    readonly point: LatLngPoint;
    /**
     * 位置坐标(数组对象)，示例[113.123456,31.123456,30.1]
     */
    readonly coordinate: any[];
    /**
     * 中心点坐标 （笛卡尔坐标）
     */
    readonly center: Cesium.Cartesian3;
    /**
     * 中心点坐标
     */
    readonly centerPoint: LatLngPoint;
    /**
     * 坐标对应的高度值（单位：米）
     */
    height: number;
    /**
     * 将图元(所有几何实例)从模型转换为世界坐标的4x4变换矩阵。
     */
    readonly modelMatrix: Cesium.Matrix4;
    /**
     * 四周方向角，0-360度角度值
     */
    heading: number;
    /**
     * 俯仰角，上下摇摆的角度，0-360度角度值
     */
    pitch: number;
    /**
     * 滚转角，左右搬动的角度，0-360度角度值
     */
    roll: number;
    /**
     * 异步计算更新坐标进行贴地(或贴模型)
     * @param [options = {}] - 参数对象:
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    clampToGround(options?: {
        has3dtiles?: boolean;
        objectsToExclude?: object[];
        callback: getSurfaceHeight_callback;
    }): this;
    /**
     * 位置坐标(数组对象)，示例[113.123456,31.123456,30.1]
     * @param noAlt - true时不导出高度值
     * @returns 位置坐标(数组对象)
     */
    getCoordinate(noAlt: boolean): any[];
}

/**
 * 多个坐标的线面状 Primitive图元 矢量对象 基类
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.positions - 坐标位置
 */
declare class BasePolyPrimitive extends BasePrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[];
    });
    /**
     * 中心点坐标 （笛卡尔坐标）
     */
    readonly center: Cesium.Cartesian3;
    /**
     * 围合面的内部中心点坐标
     */
    readonly centerOfMass: Cesium.Cartesian3;
    /**
     * 边线的中心点坐标
     */
    readonly centerOfLine: Cesium.Cartesian3;
    /**
     * 距离（单位：米）
     */
    readonly distance: number;
    /**
     * 面积（单位：平方米）
     */
    readonly area: number;
    /**
     * 位置坐标数组 （笛卡尔坐标）, 赋值时可以传入LatLngPoint数组对象
     */
    positions: Cesium.Cartesian3[];
    /**
     * 位置坐标数组
     */
    readonly points: LatLngPoint[];
    /**
     * 位置坐标(数组对象)，示例 [ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7] ]
     */
    readonly coordinates: any[][];
    /**
     * 坐标数据对应的矩形边界
     */
    readonly rectangle: Cesium.Rectangle;
    /**
     * 位置坐标(数组对象)，示例 [ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7] ]
     * @param noAlt - true时不导出高度值
     * @returns 位置坐标(数组对象)
     */
    getCoordinates(noAlt: boolean): any[][];
    /**
     * 判断点是否在当前对象的坐标点围成的多边形内
     * @param position - 需要判断的点
     * @returns 是否在多边形内
     */
    isInPoly(position: Cesium.Cartesian3 | LatLngPoint): boolean;
    /**
     * 异步计算更新坐标进行贴地(或贴模型)
     * @param [options = {}] - 参数对象:
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param [options.offset = 0] - 可以按需增加偏移高度（单位：米），便于可视
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    clampToGround(options?: {
        has3dtiles?: boolean;
        objectsToExclude?: object[];
        offset?: number;
        callback: surfaceLineWork_callback;
    }): this;
}

declare namespace BasePrimitive {
    /**
     * Primitive 通用参数（不含Billboard、Label、Point、Model、Polyline）
     * @property [appearance] - [cesium原生]用于渲染图元的外观。
     * @property [attributes] - [cesium原生]每个实例的属性。
     * @property [depthFailAppearance] - 当深度测试失败时，用于为该图元着色的外观。
     * @property [vertexCacheOptimize = false] - 当true，几何顶点优化前和后顶点着色缓存。
     * @property [interleave = false] - 当true时，几何顶点属性被交叉，这可以略微提高渲染性能，但会增加加载时间。
     * @property [compressVertices = true] - 当true时，几何顶点被压缩，这将节省内存。提升效率。
     * @property [releaseGeometryInstances = true] - 当true时，图元不保留对输入geometryInstances的引用以节省内存。
     * @property [allowPicking = true] - 当true时，每个几何图形实例只能通过{@link Scene#pick}进行挑选。当false时，保存GPU内存。
     * @property [cull = true] - 当true时，渲染器会根据图元的边界体积来剔除它们的截锥和地平线。设置为false，如果你手动剔除图元，可以获得较小的性能提升。
     * @property [asynchronous = true] - 确定该图元是异步创建还是阻塞创建，直到就绪。
     * @property [debugShowBoundingVolume = false] - 仅供调试。确定该图元命令的边界球是否显示。
     * @property [debugShowShadowVolume = false] - 仅供调试。贴地时，确定是否绘制了图元中每个几何图形的阴影体积。必须是true创建卷之前要释放几何图形或选项。releaseGeometryInstance必须是false。
     */
    type ConstructorOptions = {
        appearance?: Cesium.Appearance;
        attributes?: Cesium.Appearance;
        depthFailAppearance?: Appearance;
        vertexCacheOptimize?: boolean;
        interleave?: boolean;
        compressVertices?: boolean;
        releaseGeometryInstances?: boolean;
        allowPicking?: boolean;
        cull?: boolean;
        asynchronous?: boolean;
        debugShowBoundingVolume?: boolean;
        debugShowShadowVolume?: boolean;
    };
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * graphic.on(mars3d.EventType.click, function (event) {
     *   console.log('单击了矢量数据对象', event)
     * })
     * @property 通用 - 支持的父类的事件类型
     * @property click - 左键单击 鼠标事件
     * @property rightClick - 右键单击 鼠标事件
     * @property mouseOver - 鼠标移入 鼠标事件
     * @property mouseOut - 鼠标移出 鼠标事件
     * @property popupOpen - popup弹窗打开后
     * @property popupClose - popup弹窗关闭
     * @property tooltipOpen - tooltip弹窗打开后
     * @property tooltipClose - tooltip弹窗关闭
     */
    type EventType = {
        通用: BaseGraphic.EventType;
        click: string;
        rightClick: string;
        mouseOver: string;
        mouseOut: string;
        popupOpen: string;
        popupClose: string;
        tooltipOpen: string;
        tooltipClose: string;
    };
}

/**
 * Primitive图元 矢量对象 基类
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - Primitive通用参数
 */
declare class BasePrimitive extends BaseGraphic {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
    });
    /**
     * 当加载primitive数据的内部Cesium容器
     */
    primitiveCollection: Cesium.PrimitiveCollection;
    /**
     * 矢量数据对应的 Cesium内部对象
     */
    readonly primitive: Cesium.Primitive;
    /**
     * 返回实例可修改的属性。{@link Cesium.GeometryInstance}
     * @example
     * var attributes = primitiveGraphic.geometryInstanceAttributes;
     * attributes.color = Cesium.ColorGeometryInstanceAttribute.toValue(Cesium.Color.AQUA);
     * attributes.show = Cesium.ShowGeometryInstanceAttribute.toValue(true);
     */
    readonly geometryInstanceAttributes: any;
    /**
     * 附加的label文本对象
     */
    readonly label: Cesium.Label;
    /**
     * 高亮对象。
     * @param [highlightStyle] - 高亮的样式，具体见各{@link GraphicType}矢量数据的style参数。
     * @returns 无
     */
    openHighlight(highlightStyle?: any): void;
    /**
     * 清除已选中的高亮
     * @returns 无
     */
    closeHighlight(): void;
}

declare namespace BillboardPrimitive {
    /**
     * 图标点 Primitive矢量数据 支持的样式信息
     * @property [所有] - 与 BillboardEntity 相同
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        所有?: BillboardEntity.StyleOptions;
        highlight?: BillboardPrimitive.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 图标点 Primitive矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class BillboardPrimitive extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: BillboardPrimitive.StyleOptions;
        attr?: any;
    });
    /**
     * 当加载primitive数据的内部Cesium容器
     */
    readonly primitiveCollection: Cesium.BillboardCollection;
    /**
     * 图像、URI或Canvas
     */
    image: string | HTMLCanvasElement;
}

declare namespace BoxPrimitive {
    /**
     * 盒子 支持的样式信息
     * @property [dimensions] - 指定盒子的长度、宽度和高度。
     * @property [dimensions_x = 100] - 盒子长度
     * @property [dimensions_y = 100] - 盒子宽度
     * @property [dimensions_z = 100] - 盒子高度
     * @property [heading = 0] - 方向角 （度数值，0-360度）
     * @property [pitch = 0] - 俯仰角（度数值，0-360度）
     * @property [roll = 0] - 翻滚角（度数值，0-360度）
     * @property [materialType = "Color"] - 填充材质类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [color = "#00FF00"] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [outline = false] - 是否边框
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [materialSupport = MaterialAppearance.MaterialSupport.TEXTURED] - 将被支持的材质类型。
     *
     * //以下是 这是MaterialAppearance的参数
     * @property [flat = false] - 当true时，在片段着色器中使用平面着色，不考虑光照。
     * @property [faceForward = !closed] - 当true时，片段着色器根据需要翻转表面的法线，以确保法线面向查看器以避免黑点。
     * @property [translucent = true] - 当true时，几何图形将显示为半透明，因此{@link Cesium.PerInstanceColorAppearance#renderState}将启用alpha混合。
     * @property [closed = false] - 当true时，几何图形将被关闭，因此{@link Cesium.PerInstanceColorAppearance#renderState}启用了背面剔除。
     * @property [vertexShaderSource] - 可选的GLSL顶点着色器源，覆盖默认的顶点着色器。
     * @property [fragmentShaderSource] - 可选的GLSL片段着色器源覆盖默认的片段着色器。
     * @property [renderState] - 可选渲染状态，以覆盖默认渲染状态。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        dimensions?: Cesium.Cartesian3;
        dimensions_x?: number;
        dimensions_y?: number;
        dimensions_z?: number;
        heading?: number;
        pitch?: number;
        roll?: number;
        materialType?: string;
        material材质参数?: any;
        material?: Material;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        materialSupport?: MaterialAppearance.MaterialSupportType;
        flat?: boolean;
        faceForward?: boolean;
        translucent?: boolean;
        closed?: boolean;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: any;
        setHeight?: number;
        addHeight?: number;
        highlight?: BoxPrimitive.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 盒子 Primitive图元矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.modelMatrix] - 将图元(所有几何实例)从模型转换为世界坐标的4x4变换矩阵,可以替代position。
 */
declare class BoxPrimitive extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: BoxPrimitive.StyleOptions;
        attr?: any;
        modelMatrix?: Cesium.Matrix4;
    });
}

declare namespace CirclePrimitive {
    /**
     * 圆 支持的样式信息
     * @property [radius = 100] - 半径
     * @property [height = 0] - 高程，圆相对于椭球面的高度。
     * @property [diffHeight = 100] - 高度差（圆柱本身的高度），与extrudedHeight二选一。
     * @property [extrudedHeight] - 指定圆的挤压面相对于椭球面的高度。
     * @property [stRotation = 0] - 椭圆纹理的角度（弧度值），正北为0，逆时针旋转
     * @property [stRotationDegree = 0] - 椭圆纹理的角度（度数值，0-360度），与stRotation二选一
     * @property [granularity = Cesium.Math.RADIANS_PER_DEGREE] - 指定椭圆上各点之间的角距离。
     * @property [materialType = "Color"] - 填充材质类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [color = "#00FF00"] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [outline = false] - 是否边框
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [materialSupport = Cesium.MaterialAppearance.MaterialSupport.TEXTURED] - 将被支持的材质类型。
     * @property [clampToGround = false] - 是否贴地
     * @property [classificationType = Cesium.ClassificationType.BOTH] - 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。
     * @property [classification = false] - 是否为ClassificationPrimitive ，分类基元 表示Scene要高亮显示的包围几何的体积
     *
     * //以下是 这是MaterialAppearance的参数
     * @property [flat = false] - 当true时，在片段着色器中使用平面着色，不考虑光照。
     * @property [faceForward = !closed] - 当true时，片段着色器根据需要翻转表面的法线，以确保法线面向查看器以避免黑点。
     * @property [translucent = true] - 当true时，几何图形将显示为半透明，因此{@link Cesium.PerInstanceColorAppearance#renderState}将启用alpha混合。
     * @property [closed = false] - 当true时，几何图形将被关闭，因此{@link Cesium.PerInstanceColorAppearance#renderState}启用了背面剔除。
     * @property [vertexShaderSource] - 可选的GLSL顶点着色器源，覆盖默认的顶点着色器。
     * @property [fragmentShaderSource] - 可选的GLSL片段着色器源覆盖默认的片段着色器。
     * @property [renderState] - 可选渲染状态，以覆盖默认渲染状态。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        radius?: number;
        height?: number;
        diffHeight?: number;
        extrudedHeight?: number;
        stRotation?: number;
        stRotationDegree?: number;
        granularity?: number;
        materialType?: string;
        material材质参数?: any;
        material?: Material;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        materialSupport?: Cesium.MaterialAppearance.MaterialSupportType;
        clampToGround?: string;
        classificationType?: Cesium.ClassificationType;
        classification?: boolean;
        flat?: boolean;
        faceForward?: boolean;
        translucent?: boolean;
        closed?: boolean;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: any;
        setHeight?: number;
        addHeight?: number;
        highlight?: CirclePrimitive.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 圆 Primitive图元矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.modelMatrix] - 将图元(所有几何实例)从模型转换为世界坐标的4x4变换矩阵,可以替代position。
 */
declare class CirclePrimitive extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: CirclePrimitive.StyleOptions;
        attr?: any;
        modelMatrix?: Cesium.Matrix4;
    });
    /**
     * 圆的半径（单位：米）
     */
    radius: number;
    /**
     * 判断点是否在圆内
     * @param position - 需要判断的点
     * @returns 是否在圆内
     */
    isInPoly(position: Cesium.Cartesian3 | LatLngPoint): boolean;
    /**
     * 飞行定位至 数据所在的视角
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.minHeight] - 定位时相机的最小高度值，用于控制避免异常数据
     * @param [options.maxHeight] - 定位时相机的最大高度值，用于控制避免异常数据
     * @param options.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param options.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param options.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 当前对象本身，可以链式调用
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        minHeight?: number;
        maxHeight?: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): this;
}

declare namespace CorridorPrimitive {
    /**
     * 走廊  Primitive图元 支持的样式信息
     * @property [width = 100] - 走廊宽度，指定走廊边缘之间的距离。
     * @property [cornerType = "ROUNDED"] - 指定边角的样式。String可选项：ROUNDED (解释：圆滑),MITERED (解释：斜接),BEVELED (解释：斜切),
     * @property [materialType = "Color"] - 填充材质类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [color = "#3388ff"] - 颜色
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [outline = false] - 是否边框
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [height = 0] - 高程，圆相对于椭球面的高度。
     * @property [diffHeight = 100] - 高度差（走廊本身的高度），与extrudedHeight二选一。
     * @property [extrudedHeight] - 指定走廊挤压面相对于椭球面的高度。
     * @property [hasShadows = false] - 是否阴影
     * @property [shadows = Cesium.ShadowMode.DISABLED] - 指定对象是投射还是接收来自光源的阴影。
     * @property [clampToGround = false] - 是否贴地
     * @property [classificationType = Cesium.ClassificationType.BOTH] - 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。
     * @property [classification = false] - 是否为ClassificationPrimitive ，分类基元 表示Scene要高亮显示的包围几何的体积
     *
     *
     * //以下是 这是MaterialAppearance的参数
     * @property [flat = false] - 当true时，在片段着色器中使用平面着色，不考虑光照。
     * @property [faceForward = !closed] - 当true时，片段着色器根据需要翻转表面的法线，以确保法线面向查看器以避免黑点。
     * @property [translucent = true] - 当true时，几何图形将显示为半透明，因此{@link Cesium.PerInstanceColorAppearance#renderState}将启用alpha混合。
     * @property [closed = false] - 当true时，几何图形将被关闭，因此{@link Cesium.PerInstanceColorAppearance#renderState}启用了背面剔除。
     * @property [vertexShaderSource] - 可选的GLSL顶点着色器源，覆盖默认的顶点着色器。
     * @property [fragmentShaderSource] - 可选的GLSL片段着色器源覆盖默认的片段着色器。
     * @property [renderState] - 可选渲染状态，以覆盖默认渲染状态。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        width?: number;
        cornerType?: string | Cesium.CornerType;
        materialType?: string;
        material材质参数?: any;
        material?: Material;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        height?: number;
        diffHeight?: number;
        extrudedHeight?: number;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        clampToGround?: boolean;
        classificationType?: Cesium.ClassificationType;
        classification?: boolean;
        flat?: boolean;
        faceForward?: boolean;
        translucent?: boolean;
        closed?: boolean;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: any;
        setHeight?: number;
        addHeight?: number;
        label?: LabelPrimitive.StyleOptions;
    };
}

/**
 * 走廊  Primitive图元 矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class CorridorPrimitive extends BasePolyPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[];
        style: CorridorPrimitive.StyleOptions;
        attr?: any;
    });
}

declare namespace FrustumPrimitive {
    /**
     * 四棱锥体 支持的样式信息
     * @property [angle] - 四棱锥体张角（角度值，取值范围 0.01-89.99）
     * @property [angle2 = angle] - 四棱锥体张角2，（角度值，取值范围 0.01-89.99）
     * @property [length = 100] - 长度值（单位：米），没有指定targetPosition时有效
     * @property [heading = 0] - 方向角 （度数值，0-360度），没有指定targetPosition时有效
     * @property [pitch = 0] - 俯仰角（度数值，0-360度），没有指定targetPosition时有效
     * @property [roll = 0] - 翻滚角（度数值，0-360度），没有指定targetPosition时有效
     * @property [materialType = "Color"] - 填充材质类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [color = "#00FF00"] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [outline = false] - 是否边框
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [materialSupport = MaterialAppearance.MaterialSupport.TEXTURED] - 将被支持的材质类型。
     * @property [flat = false] - 当true时，在片段着色器中使用平面着色，不考虑光照。
     * @property [faceForward = !closed] - 当true时，片段着色器根据需要翻转表面的法线，以确保法线面向查看器以避免黑点。
     * @property [translucent = true] - 当true时，几何图形将显示为半透明，因此{@link Cesium.PerInstanceColorAppearance#renderState}将启用alpha混合。
     * @property [closed = false] - 当true时，几何图形将被关闭，因此{@link Cesium.PerInstanceColorAppearance#renderState}启用了背面剔除。
     * @property [vertexShaderSource] - 可选的GLSL顶点着色器源，覆盖默认的顶点着色器。
     * @property [fragmentShaderSource] - 可选的GLSL片段着色器源覆盖默认的片段着色器。
     * @property [renderState] - 可选渲染状态，以覆盖默认渲染状态。
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        angle?: number;
        angle2?: number;
        length?: number;
        heading?: number;
        pitch?: number;
        roll?: number;
        materialType?: string;
        material材质参数?: any;
        material?: Material;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        materialSupport?: MaterialAppearance.MaterialSupportType;
        flat?: boolean;
        faceForward?: boolean;
        translucent?: boolean;
        closed?: boolean;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: any;
        highlight?: FrustumPrimitive.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 四棱锥体  Primitive图元矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.position - 坐标位置
 * @param [options.targetPosition] - 追踪的目标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class FrustumPrimitive extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        targetPosition?: LatLngPoint | Cesium.Cartesian3;
        style: FrustumPrimitive.StyleOptions;
        attr?: any;
    });
    /**
     * 圆锥追踪的目标(确定了方向和距离)
     */
    targetPosition: Cesium.Cartesian3;
    /**
     * 圆锥追踪的目标位置坐标
     */
    readonly targetPoint: LatLngPoint;
    /**
     * 夹角，半场角度，取值范围 0.01-89.99
     */
    angle: number;
    /**
     * 夹角2，半场角度，取值范围 0.01-89.99
     */
    angle2: number;
    /**
     * 求当前位置射线与地球相交点
     */
    readonly groundPosition: Cesium.Cartesian3;
    /**
     * 获取射线向地面与地球的4个交点坐标
     * @param [time = Cesium.JulianDate.now()] - 指定的时间值
     * @returns 坐标数组
     */
    getRayEarthPositions(time?: Cesium.JulianDate): Cesium.Cartesian3[];
    /**
     * 四周方向角，0-360度角度值
     */
    heading: number;
    /**
     * 俯仰角，上下摇摆的角度，0-360度角度值
     */
    pitch: number;
    /**
     * 滚转角，左右搬动的角度，0-360度角度值
     */
    roll: number;
}

declare namespace LabelPrimitive {
    /**
     * 文字 支持的样式信息（与LabelEntity相同）
     * @property [所有] - 与LabelEntity相同
     */
    type StyleOptions = {
        所有?: LabelEntity.StyleOptions;
    };
}

/**
 * 文字 Primitive矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class LabelPrimitive extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: LabelPrimitive.StyleOptions;
        attr?: any;
    });
    /**
     * 当加载primitive数据的内部Cesium容器
     */
    readonly primitiveCollection: Cesium.LabelCollection;
    /**
     * 文本内容
     */
    readonly text: string;
}

declare namespace LightCone {
    /**
     * 光锥体 支持的样式信息
     * @property [color = '#00ffff'] - 颜色
     * @property [radius = 100] - 锥体底部半径。(单位：米)
     * @property [height = 1000] - 锥体高度，相对于椭球面的高度。(单位：米)
     */
    type StyleOptions = {
        color?: string | Cesium.Color;
        radius?: number;
        height?: number;
    };
}

/**
 * 光锥体
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class LightCone extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: LightCone.StyleOptions;
        attr?: any;
    });
    /**
     * 颜色
     */
    color: Cesium.Color;
}

declare namespace ModelPrimitive {
    /**
     * gltf小模型 支持的样式信息
     * @property [url] - glTF模型的URI的字符串或资源属性。
     * @property [scale = 1] - 整体缩放比例
     * @property [scaleX = 1] - X轴方向缩放比例
     * @property [scaleY = 1] - Y轴方向缩放比例
     * @property [scaleZ = 1] - Z轴方向缩放比例
     * @property [heading = 0] - 方向角 （度数值，0-360度）
     * @property [pitch = 0] - 俯仰角（度数值，0-360度）
     * @property [roll = 0] - 翻滚角（度数值，0-360度）
     * @property [minimumPixelSize = 0.0] - 指定模型的近似最小像素大小，而不考虑缩放。
     * @property [maximumScale] - 模型的最大比例尺寸。minimumPixelSize的上限。
     * @property [fill = false] - 是否填充，指定与模型渲染颜色混合
     * @property [color = "#3388ff"] - 颜色
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [colorBlendMode = ColorBlendMode.HIGHLIGHT] - 指定颜色如何与模型混合。
     * @property [colorBlendAmount = 0.5] - 当colorBlendMode为MIX时指定颜色强度的数字属性。0.0的值表示模型渲染的颜色，1.0的值表示纯色，任何介于两者之间的值表示两者的混合。
     * @property [silhouette = false] - 是否轮廓
     * @property [silhouetteColor = "#ffffff"] - 轮廓颜色
     * @property [silhouetteSize = 2] - 轮廓宽度
     * @property [silhouetteAlpha = 0.8] - 轮廓透明度
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [distanceDisplayCondition_far = 100000] - 最大距离
     * @property [distanceDisplayPoint] - 当视角距离超过一定距离后(distanceDisplayCondition_far定义的) 后显示为 像素点 对象的样式，仅在distanceDisplayCondition设置时有效。
     * @property [distanceDisplayBillboard] - 当视角距离超过一定距离后(distanceDisplayCondition_far定义的) 后显示为 图标 对象的样式，仅在distanceDisplayCondition设置时有效。
     * @property [hasShadows = true] - 是否阴影
     * @property [shadows = ShadowMode.ENABLED] - 指定模型是投射还是接收来自光源的阴影。
     * @property [clampToGround = false] - 是否贴地
     * @property [heightReference = Cesium.HeightReference.NONE] - 指定高度相对于什么的属性。
     * @property [incrementallyLoadTextures = true] - 确定模型加载后纹理是否会继续流进来。
     * @property [runAnimations = true] - 指定模型中指定的glTF动画是否应该启动。
     * @property [clampAnimations = true] - 指定在没有关键帧的情况下，glTF动画是否应该保持最后一个姿势。
     * @property [imageBasedLightingFactor = new Cartesian2(1.0, 1.0)] - 指定来自基于图像的漫反射和镜面照明的贡献。
     * @property [lightColor] - 在为模型着色时指定光的颜色的属性。当undefined场景的浅色被使用代替。
     * @property [nodeTransformations] - 一个对象，其中键是节点的名称，值是{@link TranslationRotationScale}属性，描述要应用到该节点的转换。该转换是在节点的现有转换之后(如glTF中指定的那样)应用的，并且不会替换节点的现有转换。
     * @property [articulations] - An object, where keys are composed of an articulation name, a single space, and a stage name, and the values are numeric properties.
     * @property [clippingPlanes] - 用于裁剪模型的Plane平面集合
     * @property [allowPicking = true] - 当true时，每个glTF和Primitive都可以用{@link Cesium.Scene#pick}来拾取。
     * @property [asynchronous = true] - 确定模型WebGL资源创建是否将分散在几个帧或块上，直到所有glTF文件加载完成。
     * @property [dequantizeInShader = true] - 确定一个{@link https://github.com/google/draco|Draco}编码的模型是否在GPU上被去量化。这减少了编码模型的总内存使用量。
     * @property [backFaceCulling = true] - 是否剔除面向背面的几何图形。当为真时，背面剔除是由材料的双面属性决定的;当为false时，禁用背面剔除。如果{@link Model#color}是半透明的，或者{@link Model#silhouette}大于0.0，则背面不会被剔除。
     * @property [debugShowBoundingVolume = false] - 仅供调试。查看模型的包围边界球。
     * @property [debugWireframe = false] - 仅供调试。查看模型的三角网线框图。
     *
     * //以下是 以下是 模型动画相关
     * @property [startTime] - 场景时间开始播放动画。当undefined时，动画从下一帧开始。
     * @property [delay = 0.0] - 从startTime开始播放的延迟，以秒为单位。
     * @property [stopTime] - 场景时间停止播放动画。当这是undefined，动画播放它的整个持续时间。
     * @property [removeOnStop = false] - 当true时，动画在停止播放后被删除。
     * @property [multiplier = 1.0] - 大于1.0的值增加动画播放的速度相对于场景时钟的速度;小于1.0会降低速度。
     * @property [reverse = false] - 当true时，动画会反向播放。
     * @property [loop = Cesium.ModelAnimationLoop.REPEAT] - 决定动画是否循环以及如何循环。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        url?: string | Cesium.Resource;
        scale?: number;
        scaleX?: number;
        scaleY?: number;
        scaleZ?: number;
        heading?: number;
        pitch?: number;
        roll?: number;
        minimumPixelSize?: number;
        maximumScale?: number;
        fill?: boolean;
        color?: string | Cesium.Color;
        opacity?: number;
        colorBlendMode?: Cesium.ColorBlendMode;
        colorBlendAmount?: number;
        silhouette?: boolean;
        silhouetteColor?: string | Cesium.Color;
        silhouetteSize?: number;
        silhouetteAlpha?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_near?: number;
        distanceDisplayCondition_far?: number;
        distanceDisplayPoint?: PointEntity.StyleOptions;
        distanceDisplayBillboard?: BillboardEntity.StyleOptions;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        clampToGround?: boolean;
        heightReference?: Cesium.HeightReference;
        incrementallyLoadTextures?: boolean;
        runAnimations?: boolean;
        clampAnimations?: boolean;
        imageBasedLightingFactor?: Cesium.Cartesian2;
        lightColor?: Color;
        nodeTransformations?: Cesium.PropertyBag | {
            [key: string]: Cesium.TranslationRotationScale;
        };
        articulations?: Cesium.PropertyBag | {
            [key: string]: number;
        };
        clippingPlanes?: Cesium.ClippingPlaneCollection;
        allowPicking?: boolean;
        asynchronous?: boolean;
        dequantizeInShader?: boolean;
        backFaceCulling?: boolean;
        debugShowBoundingVolume?: boolean;
        debugWireframe?: boolean;
        startTime?: Cesium.JulianDate;
        delay?: number;
        stopTime?: JulianDate;
        removeOnStop?: boolean;
        multiplier?: number;
        reverse?: boolean;
        loop?: Cesium.ModelAnimationLoop;
        setHeight?: number;
        addHeight?: number;
        highlight?: ModelPrimitive.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * graphic.on(mars3d.EventType.load, function (event) {
     *   console.log('模型加载完成', event)
     * })
     * @property 通用 - 支持的父类的事件类型
     * @property load - 完成加载，执行所有内部处理后
     */
    type EventType = {
        通用: BasePrimitive.EventType;
        load: string;
    };
}

/**
 * gltf小模型 Primitive图元矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.modelMatrix] - 将图元(所有几何实例)从模型转换为世界坐标的4x4变换矩阵,可以替代position。
 * @param [options.appearance] - [cesium原生]用于渲染图元的外观。
 * @param [options.attributes] - [cesium原生]每个实例的属性。
 */
declare class ModelPrimitive extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: ModelPrimitive.StyleOptions;
        attr?: any;
        modelMatrix?: Cesium.Matrix4;
        appearance?: Cesium.Appearance;
        attributes?: Cesium.Appearance;
    });
    /**
     * 模型整体的缩放比例
     */
    scale: number;
    /**
     * X轴方向缩放比例
     */
    scaleX: number;
    /**
     * Y轴方向缩放比例
     */
    scaleY: number;
    /**
     * Z轴方向缩放比例
     */
    scaleZ: number;
    /**
     * 将图元(所有几何实例)从模型转换为世界坐标的4x4变换矩阵。
     */
    readonly modelMatrix: Cesium.Matrix4;
}

declare namespace PlanePrimitive {
    /**
     * 平面 支持的样式信息
     * @property [dimensions] - 指定平面的宽度和高度。
     * @property [dimensions_x = 100] - 长度
     * @property [dimensions_y = 100] - 宽度
     * @property [plane_normal = "z"] - 方向 ,可选项：x (解释：X轴),y (解释：Y轴),z (解释：Z轴),
     * @property [heading = 0] - 方向角 （度数值，0-360度）
     * @property [pitch = 0] - 俯仰角（度数值，0-360度）
     * @property [roll = 0] - 翻滚角（度数值，0-360度）
     * @property [color = "#00FF00"] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [materialType = "Color"] - 填充材质类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [materialSupport = MaterialAppearance.MaterialSupport.TEXTURED] - 将被支持的材质类型。
     * @property [outline = false] - 是否边框
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     *
     * //以下是 这是MaterialAppearance的参数
     * @property [flat = false] - 当true时，在片段着色器中使用平面着色，不考虑光照。
     * @property [faceForward = !closed] - 当true时，片段着色器根据需要翻转表面的法线，以确保法线面向查看器以避免黑点。
     * @property [translucent = true] - 当true时，几何图形将显示为半透明，因此{@link Cesium.PerInstanceColorAppearance#renderState}将启用alpha混合。
     * @property [closed = false] - 当true时，几何图形将被关闭，因此{@link Cesium.PerInstanceColorAppearance#renderState}启用了背面剔除。
     * @property [vertexShaderSource] - 可选的GLSL顶点着色器源，覆盖默认的顶点着色器。
     * @property [fragmentShaderSource] - 可选的GLSL片段着色器源覆盖默认的片段着色器。
     * @property [renderState] - 可选渲染状态，以覆盖默认渲染状态。
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        dimensions?: Cesium.Cartesian2;
        dimensions_x?: number;
        dimensions_y?: number;
        plane_normal?: string;
        heading?: number;
        pitch?: number;
        roll?: number;
        color?: string | Cesium.Color;
        opacity?: number;
        materialType?: string;
        material材质参数?: any;
        material?: Material;
        materialSupport?: MaterialAppearance.MaterialSupportType;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        flat?: boolean;
        faceForward?: boolean;
        translucent?: boolean;
        closed?: boolean;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: any;
        highlight?: PlanePrimitive.StyleOptions;
        label?: LabelEntity.StyleOptions;
    };
}

/**
 * 平面 Primitive图元矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.modelMatrix] - 将图元(所有几何实例)从模型转换为世界坐标的4x4变换矩阵,可以替代position。
 */
declare class PlanePrimitive extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: PlanePrimitive.StyleOptions;
        attr?: any;
        modelMatrix?: Cesium.Matrix4;
    });
    /**
     * 用于指定位置的矩阵
     */
    readonly modelMatrix: Cesium.Matrix4;
}

declare namespace PointPrimitive {
    /**
     * 像素点 支持的样式信息
     * @property [pixelSize = 10] - 像素大小
     * @property [color = "#3388ff"] - 颜色
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [outline = false] - 是否边框
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [outlineWidth = 2] - 边框宽度
     * @property [scaleByDistance = false] - 是否按视距缩放 或 指定用于基于距离缩放点。
     * @property [scaleByDistance_far = 1000000] - 上限
     * @property [scaleByDistance_farValue = 0.1] - 比例值
     * @property [scaleByDistance_near = 1000] - 下限
     * @property [scaleByDistance_nearValue = 1] - 比例值
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 10000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * @property [visibleDepth = true] - 是否被遮挡
     * @property [disableDepthTestDistance] - 指定从相机到禁用深度测试的距离。
     * @property [translucencyByDistance] - 用于基于与相机的距离设置半透明度。
     * @property [setHeight = 0] - 指定坐标高度值（常用于图层中配置）
     * @property [addHeight = 0] - 在现有坐标基础上增加的高度值（常用于图层中配置）
     * @property [label] - 支持附带文字的显示
     */
    type StyleOptions = {
        pixelSize?: number;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        outlineWidth?: number;
        scaleByDistance?: boolean | Cesium.NearFarScalar;
        scaleByDistance_far?: number;
        scaleByDistance_farValue?: number;
        scaleByDistance_near?: number;
        scaleByDistance_nearValue?: number;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        visibleDepth?: boolean;
        disableDepthTestDistance?: number;
        translucencyByDistance?: Cesium.NearFarScalar;
        setHeight?: number;
        addHeight?: number;
        label?: LabelPrimitive.StyleOptions;
    };
}

/**
 * 像素点 Primitive矢量数据
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.frameRate = 30] - 当postion为CallbackProperty时，多少帧获取一次数据。用于控制效率，如果卡顿就把该数值调大一些。
 */
declare class PointPrimitive extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: PointPrimitive.StyleOptions;
        attr?: any;
        frameRate?: number;
    });
    /**
     * 当加载primitive数据的内部Cesium容器
     */
    readonly primitiveCollection: Cesium.PointPrimitiveCollection;
    /**
     * 位置坐标 （笛卡尔坐标）, 赋值时可以传入LatLngPoint对象
     */
    position: Cesium.Cartesian3;
}

declare namespace PolygonPrimitive {
    /**
     * 面   Primitive图元 支持的样式信息
     * @property [materialType = "Color"] - 填充材质类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [color = "#3388ff"] - 颜色
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [randomColor = false] - 是否随机颜色
     * @property [image] - 当为贴图时，贴图的url
     * @property [stRotation = 0] - 多边形纹理的角度（弧度值），正北为0，逆时针旋转
     * @property [stRotationDegree = 0] - 多边形纹理的角度（度数值，0-360度），与stRotation二选一
     * @property [outline = false] - 是否边框
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [height = 0] - 高程，圆相对于椭球面的高度。
     * @property [diffHeight = 100] - 高度差（走廊本身的高度），与extrudedHeight二选一。
     * @property [extrudedHeight] - 指定走廊挤压面相对于椭球面的高度。
     * @property [granularity = Cesium.Math.RADIANS_PER_DEGREE] - 指定每个纬度点和经度点之间的角距离。
     * @property [closeTop = true] - 当为false时，离开一个挤压多边形的顶部打开。
     * @property [closeBottom = true] - 当为false时，离开挤压多边形的底部打开。
     * @property [arcType = Cesium.ArcType.GEODESIC] - 多边形的边缘必须遵循的线条类型。
     * @property [hasShadows = false] - 是否阴影
     * @property [shadows = Cesium.ShadowMode.DISABLED] - 指定对象是投射还是接收来自光源的阴影。
     * @property [clampToGround = false] - 是否贴地
     * @property [classificationType = Cesium.ClassificationType.BOTH] - 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。
     * @property [classification = false] - 是否为ClassificationPrimitive ，分类基元 表示Scene要高亮显示的包围几何的体积
     *
     * //以下是 这是MaterialAppearance的参数
     * @property [flat = false] - 当true时，在片段着色器中使用平面着色，不考虑光照。
     * @property [faceForward = !closed] - 当true时，片段着色器根据需要翻转表面的法线，以确保法线面向查看器以避免黑点。
     * @property [translucent = true] - 当true时，几何图形将显示为半透明，因此{@link Cesium.PerInstanceColorAppearance#renderState}将启用alpha混合。
     * @property [closed = false] - 当true时，几何图形将被关闭，因此{@link Cesium.PerInstanceColorAppearance#renderState}启用了背面剔除。
     * @property [vertexShaderSource] - 可选的GLSL顶点着色器源，覆盖默认的顶点着色器。
     * @property [fragmentShaderSource] - 可选的GLSL片段着色器源覆盖默认的片段着色器。
     * @property [renderState] - 可选渲染状态，以覆盖默认渲染状态。
     * @property [buffer] - 对坐标进行缓冲扩大buffer指定的半径范围，单位：米。如用于单体化建筑物扩大点方便鼠标拾取。
     * @property [setHeight] - 指定坐标高度值，或数组指定每个点的高度（常用于图层中配置）
     * @property [addHeight] - 在现有坐标基础上增加的高度值，或数组指定每个点增加的高度（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示 ，额外支持：
     * @property [label.position] - 文字所在位置，默认是矢量对象本身的center属性值。支持配置 'center'：围合面的内部中心点坐标，'{xxxx}'配置属性字段, 或者直接指定坐标值。
     * @property [label.showAll] - MultiPolygon和MultiLineString时，是否显示所有注记，默认只在最大坐标数的面或线上显示。
     */
    type StyleOptions = {
        materialType?: string;
        material材质参数?: any;
        material?: Material;
        color?: string | Cesium.Color;
        opacity?: number;
        randomColor?: boolean;
        image?: string;
        stRotation?: number;
        stRotationDegree?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        height?: number;
        diffHeight?: number;
        extrudedHeight?: number;
        granularity?: number;
        closeTop?: boolean | boolean;
        closeBottom?: boolean | boolean;
        arcType?: Cesium.ArcType;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        clampToGround?: boolean;
        classificationType?: Cesium.ClassificationType;
        classification?: boolean;
        flat?: boolean;
        faceForward?: boolean;
        translucent?: boolean;
        closed?: boolean;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: any;
        buffer?: number;
        setHeight?: number | Number[];
        addHeight?: number | Number[];
        highlight?: PolygonPrimitive.StyleOptions;
        label?: {
            position?: string | LatLngPoint;
            showAll?: boolean;
        };
    };
}

/**
 * 面  Primitive图元 矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class PolygonPrimitive extends BasePolyPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[];
        style: PolygonPrimitive.StyleOptions;
        attr?: any;
    });
    /**
     * 位置坐标数组 （笛卡尔坐标）, 赋值时可以传入LatLngPoint数组对象
     */
    positions: Cesium.Cartesian3[];
    /**
     * 中心点坐标 （笛卡尔坐标）
     */
    readonly center: Cesium.Cartesian3;
}

declare namespace PolylinePrimitive {
    /**
     * 线 Primitive图元 支持的样式信息
     * @property [width = 4] - 线宽
     * @property [materialType = "Color"] - 填充材质类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [color = "#3388ff"] - 颜色
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [randomColor = false] - 是否随机颜色
     * @property [closure = false] - 是否闭合
     * @property [distanceDisplayCondition = false] - 是否按视距显示 或 指定此框将显示在与摄像机的多大距离。
     * @property [distanceDisplayCondition_far = 100000] - 最大距离
     * @property [distanceDisplayCondition_near = 0] - 最小距离
     * x
     * @property [hasShadows = false] - 是否阴影
     * @property [shadows = Cesium.ShadowMode.DISABLED] - 指定对象是投射还是接收来自光源的阴影。
     * @property [clampToGround = false] - 是否贴地
     * @property [classificationType = Cesium.ClassificationType.BOTH] - 指定贴地时的覆盖类型，是只对地形、3dtiles 或 两者同时。
     * @property [setHeight] - 指定坐标高度值，或数组指定每个点的高度（常用于图层中配置）
     * @property [addHeight] - 在现有坐标基础上增加的高度值，或数组指定每个点增加的高度（常用于图层中配置）
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示 ，额外支持：
     * @property [label.position] - 文字所在位置，默认是矢量对象本身的center属性值。支持配置 'center'：围合面的内部中心点坐标，'{xxxx}'配置属性字段, 或者直接指定坐标值。
     * @property [label.showAll] - MultiPolygon和MultiLineString时，是否显示所有注记，默认只在最大坐标数的面或线上显示。
     */
    type StyleOptions = {
        width?: number;
        materialType?: string;
        material材质参数?: any;
        material?: Material;
        color?: string | Cesium.Color;
        opacity?: number;
        randomColor?: boolean;
        closure?: boolean;
        distanceDisplayCondition?: boolean | Cesium.DistanceDisplayCondition;
        distanceDisplayCondition_far?: number;
        distanceDisplayCondition_near?: number;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        clampToGround?: boolean;
        classificationType?: Cesium.ClassificationType;
        setHeight?: number | Number[];
        addHeight?: number | Number[];
        highlight?: PolylineSimplePrimitive.StyleOptions;
        label?: {
            position?: string | LatLngPoint;
            showAll?: boolean;
        };
    };
}

/**
 * 线 Primitive图元 矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class PolylinePrimitive extends BasePolyPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[];
        style: PolylinePrimitive.StyleOptions;
        attr?: any;
    });
    /**
     * 当加载primitive数据的内部Cesium容器
     */
    primitiveCollection: Cesium.PrimitiveCollection;
}

/**
 * 简单线 Primitive图元 矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class PolylineSimplePrimitive extends BasePolyPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[];
        style: PolylinePrimitive.StyleOptions;
        attr?: any;
    });
}

declare namespace Road {
    /**
     * 道路 支持的样式信息
     * @property image - 图片材质URL
     * @property [width = 20] - 道路 宽度。(单位：米)
     * @property [height = 0] - 道路 高度，相对于椭球面的高度。(单位：米)
     * @property [axisY = true] - 是否uv交换（图片横竖切换）
     */
    type StyleOptions = {
        image: string;
        width?: number;
        height?: number;
        axisY?: boolean;
    };
}

/**
 * 道路  矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class Road extends DynamicRiver {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[];
        style: Road.StyleOptions;
        attr?: any;
    });
}

declare namespace WallPrimitive {
    /**
     * 墙  Primitive图元 支持的样式信息
     * @property [diffHeight = 100] - 墙高
     * @property [materialType = "Color"] - 填充材质类型 ,可选项：{@link MaterialType}
     * @property [material材质参数] - 根据具体{@link MaterialType}来确定
     * @property [material] - 指定用于填充的材质，指定material后`materialType`和`material材质参数`将被覆盖。
     * @property [color = "#3388ff"] - 颜色
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0
     * @property [outline = false] - 是否边框
     * @property [outlineColor = "#ffffff"] - 边框颜色
     * @property [outlineOpacity = 0.6] - 边框透明度
     * @property [hasShadows = false] - 是否阴影
     * @property [shadows = Cesium.ShadowMode.DISABLED] - 指定折线是投射还是接收来自光源的阴影。
     *
     * //以下是 这是MaterialAppearance的参数
     * @property [flat = false] - 当true时，在片段着色器中使用平面着色，不考虑光照。
     * @property [faceForward = !closed] - 当true时，片段着色器根据需要翻转表面的法线，以确保法线面向查看器以避免黑点。
     * @property [translucent = true] - 当true时，几何图形将显示为半透明，因此{@link Cesium.PerInstanceColorAppearance#renderState}将启用alpha混合。
     * @property [closed = false] - 当true时，几何图形将被关闭，因此{@link Cesium.PerInstanceColorAppearance#renderState}启用了背面剔除。
     * @property [vertexShaderSource] - 可选的GLSL顶点着色器源，覆盖默认的顶点着色器。
     * @property [fragmentShaderSource] - 可选的GLSL片段着色器源覆盖默认的片段着色器。
     * @property [renderState] - 可选渲染状态，以覆盖默认渲染状态。
     * @property [highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式，创建Graphic后也可以openHighlight、closeHighlight方法来手动调用
     * @property [label] - 支持附带文字的显示 ，额外支持：
     * @property [label.position] - 文字所在位置，默认是矢量对象本身的center属性值。支持配置 'center'：围合面的内部中心点坐标，'{xxxx}'配置属性字段, 或者直接指定坐标值。
     * @property [label.showAll] - MultiPolygon和MultiLineString时，是否显示所有注记，默认只在最大坐标数的面或线上显示。
     */
    type StyleOptions = {
        diffHeight?: number;
        materialType?: string;
        material材质参数?: any;
        material?: Material;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        outlineOpacity?: number;
        hasShadows?: boolean;
        shadows?: Cesium.ShadowMode;
        flat?: boolean;
        faceForward?: boolean;
        translucent?: boolean;
        closed?: boolean;
        vertexShaderSource?: string;
        fragmentShaderSource?: string;
        renderState?: any;
        highlight?: WallPrimitive.StyleOptions;
        label?: {
            position?: string | LatLngPoint;
            showAll?: boolean;
        };
    };
}

/**
 * 墙 Primitive图元 矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class WallPrimitive extends BasePolyPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[];
        style: WallPrimitive.StyleOptions;
        attr?: any;
    });
}

/**
 * 水域面 Primitive图元 矢量对象
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.通用参数P] - 支持所有Primitive通用参数
 * @param options.positions - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class Water extends PolygonPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        通用参数P?: BasePrimitive.ConstructorOptions;
        positions: LatLngPoint[] | Cesium.Cartesian3[];
        style: PolygonPrimitive.StyleOptions;
        attr?: any;
    });
}

declare namespace BaseRoamLine {
    /**
     * wall 类型shading 支持的参数，
     * 效果是飞机飞行轨迹线下的投射墙体效果。
     * @property [type = 'wall'] - 类型
     * @property [通用参数] - wall墙体对象支持的所有参数
     * @property [maxDistance] - 设置保留的轨迹长度值（单位：米），不设置时保留所有的轨迹
     */
    type WallShadingOptions = {
        type?: string;
        通用参数?: WallEntity.StyleOptions;
        maxDistance?: number;
    };
    /**
     * cylinder 类型shading 支持的参数，
     * 效果是飞机飞行时的圆锥体投射效果。
     * @property [type = 'cylinder'] - 类型
     * @property [通用参数] - 圆锥对象支持的所有参数
     */
    type CylinderShadingOptions = {
        type?: string;
        通用参数?: CylinderEntity.StyleOptions;
    };
    /**
     * circle 类型shading 支持的参数，
     *  比如步行时的人员所在位置的扩散圆圈效果
     * @property [type = 'circle'] - 类型
     * @property [通用参数] - 圆锥对象支持的所有参数
     */
    type CircleShadingOptions = {
        type?: string;
        通用参数?: CircleEntity.StyleOptions;
    };
    /**
     * polyline 类型shading  支持的参数，
     *  【历史】走过的轨迹线，可以替代本身的path来设置贴地线的效果
     * @property [type = 'polyline'] - 类型
     * @property [通用参数] - 线对象支持的所有参数
     * @property [maxDistance] - 设置保留的轨迹长度值（单位：米），不设置时保留所有的轨迹
     */
    type PolylineShadingOptions = {
        type?: string;
        通用参数?: PolylineEntity.StyleOptions;
        maxDistance?: number;
    };
    /**
     * polylineGoing 类型shading  支持的参数，
     *  【将来】将要走的轨迹线，可以替代本身的path来设置贴地线的效果
     * @property [type = 'polylineGoing'] - 类型
     * @property [通用参数] - 线对象支持的所有参数
     */
    type PolylineGoingShadingOptions = {
        type?: string;
        通用参数?: PolylineEntity.StyleOptions;
    };
}

/**
 * 漫游路线管理类 基类
 */
declare class BaseRoamLine extends BaseGraphic {
    /**
     * 动态时序坐标位置，
     * Cesium原生动态属性对象
     */
    readonly property: Cesium.SampledPositionProperty;
    /**
     * 加载Entity数据的内部Cesium容器
     */
    readonly dataSource: Cesium.CustomDataSource;
    /**
     * 当前时间对应的坐标位置 （笛卡尔坐标）
     */
    readonly position: Cesium.Cartesian3;
    /**
     * 贴模型分析时，排除的不进行贴模型计算的模型对象，默认是当前本身，可以是： primitives, entities 等
     */
    readonly objectsToExclude: object[] | undefined;
    /**
     * 中心点坐标（笛卡尔坐标）,popup/tooltip等功能会使用
     */
    readonly center: Cesium.SampledPositionProperty;
    /**
     * 已经飞行过的点的 index
     */
    readonly indexForFlyOK: Int;
    /**
     * 获取三维空间中的旋转。
     */
    readonly orientation: Cesium.Quaternion;
    /**
     * 获取当前hpr角度。
     */
    readonly hpr: Cesium.HeadingPitchRoll;
    /**
     * 获取当前转换计算模型矩阵。如果方向或位置未定义，则返回undefined。
     */
    readonly matrix: Cesium.Matrix4;
    /**
     * 四周方向角，弧度值
     */
    readonly headingRadians: number;
    /**
     * 四周方向角，0-360度角度值
     */
    readonly heading: number;
    /**
     * 俯仰角，上下摇摆的角度，弧度值
     */
    readonly pitchRadians: number;
    /**
     * 俯仰角，上下摇摆的角度，0-360度角度值
     */
    pitch: number;
    /**
     * 滚转角，左右摆动的角度，弧度值
     */
    readonly rollRadians: number;
    /**
     * 滚转角，左右摆动的角度，0-360度角度值
     */
    roll: number;
    /**
     * 求当前位置射线与地球相交点
     */
    readonly groundPosition: Cesium.Cartesian3;
    /**
     * 倍速
     */
    multiplier: number;
    /**
     * 是否暂停状态
     */
    isPause: boolean;
    /**
     * 获取当前矩阵
     * @param offest - 偏移值
     * @param offest.x - X轴方向偏移值,单位：米
     * @param offest.y - Y轴方向偏移值,单位：米
     * @param offest.z - Z轴方向偏移值,单位：米
     * @returns 当前矩阵
     */
    computeModelMatrix(offest: {
        x: number;
        y: number;
        z: number;
    }): Cesium.Matrix4;
    /**
     * 更新角度
     * @param isAuto - 是否基于轨迹自动计算角度
     * @param [opts] - isAuto为false时，赋值的新角度值
     * @param [opts.pitch] - 俯仰角，上下摇摆的角度，0-360度角度值
     * @param [opts.roll] - 滚转角，左右摆动的角度，0-360度角度值
     * @returns 无
     */
    updateAngle(isAuto: boolean, opts?: {
        pitch?: number;
        roll?: number;
    }): void;
    /**
     * 更新视角模式
     * @param cameraOptions - 参数，包括：
     * @param cameraOptions.type - 视角模式类型，包括：'':无、'gs':跟随视角、'dy':第一视角、'sd':上帝视角
     * @param [cameraOptions.radius] - 'gs'跟随视角时的 初始俯仰距离值（单位：米）
     * @param [cameraOptions.heading] - 'gs'跟随视角时的 初始方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param [cameraOptions.pitch] - 'gs'跟随视角时的 初始俯仰角度值，绕纬度线旋转角度, 0至360 *
     * @param [cameraOptions.followedX = 50] - 'dy'锁定第一视角时，距离运动点的距离（后方）
     * @param [cameraOptions.followedZ = 10] - 'dy'锁定第一视角或'sd'上帝视角时，距离运动点的高度（上方）
     * @returns 无
     */
    setCameraOptions(cameraOptions: {
        type: string;
        radius?: number;
        heading?: number;
        pitch?: number;
        followedX?: number;
        followedZ?: followedZ;
    }): void;
    /**
     * 按类型 添加单个投影
     * @param item - 参数，按类型分别支持：
     * @param [item.wall] - wall类型所支持的参数
     * @param [item.cylinder] - cylinder类型所支持的参数
     * @param [item.circle] - circle类型所支持的参数
     * @param [item.polyline] - polyline类型所支持的参数
     * @param [item.polylineGoing] - polylineGoing类型所支持的参数
     * @returns 构造完成的投影对象
     */
    addShading(item: {
        wall?: BaseRoamLine.WallShadingOptions;
        cylinder?: BaseRoamLine.CylinderShadingOptions;
        circle?: BaseRoamLine.CircleShadingOptions;
        polyline?: BaseRoamLine.PolylineShadingOptions;
        polylineGoing?: BaseRoamLine.PolylineGoingShadingOptions;
    }): Cesium.Entity | undefined;
    /**
     * 移除单个投影
     * @param entity - 可以  构造的投影矢量对象 或 传入type类型 ，未传入时删除最后添加的一个投影
     * @returns 无
     */
    removeShading(entity: Cesium.Entity | string | null): void;
    /**
     * 添加wall 轨迹墙投影
     * @param options - 投影构造参数
     * @returns 构造完成的投影对象
     */
    addWallShading(options: BaseRoamLine.WallShadingOptions): Cesium.Entity | undefined;
    /**
     * 添加cylinder 圆锥立体投影
     * @param options - 投影构造参数
     * @returns 构造完成的投影对象
     */
    addCylinderShading(options: BaseRoamLine.CylinderShadingOptions): Cesium.Entity | undefined;
    /**
     * 添加circle扩散圆投影
     * @param options - 投影构造参数
     * @returns 构造完成的投影对象
     */
    addCircleShading(options: BaseRoamLine.CircleShadingOptions): Cesium.Entity | undefined;
    /**
     * 添加 polyline 或 polylineGoing 路线 投影
     * @param options - 投影构造参数
     * @returns 构造完成的投影对象
     */
    addPolylineShading(options: BaseRoamLine.PolylineShadingOptions | BaseRoamLine.PolylineGoingShadingOptions): Cesium.Entity | undefined;
    /**
     * 视角定位至路线范围
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.minHeight] - 定位时相机的最小高度值，用于控制避免异常数据
     * @param [options.maxHeight] - 定位时相机的最大高度值，用于控制避免异常数据
     * @param options.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param options.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param options.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 无
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        minHeight?: number;
        maxHeight?: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): void;
    /**
     * 定位至当前时间所在的位置 (非相机位置)
     * @param [options = {}] - 具有以下属性的对象:
     * @param options.radius - 相机距离目标点的距离（单位：米）
     * @param options.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param options.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param options.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [options.duration] - 飞行持续时间（秒）。如果省略，内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.endTransform] - 表示飞行完成后摄像机将位于的参考帧的变换矩阵。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机的飞行角度高于该值，请在飞行过程中调整俯仰角度以向下看，并将地球保持在视口中。
     * @param [options.flyOverLongitude] - 地球上2点之间总是有两种方式。此选项会迫使相机选择战斗方向以在该经度上飞行。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 无
     */
    flyToPoint(options?: {
        radius: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        easingFunction?: EasingFunction.Callback;
    }): void;
    /**
     * 暂停
     * @returns 无
     */
    pause(): void;
    /**
     * 继续
     * @returns 无
     */
    proceed(): void;
    /**
     * 将轨迹数据转换为CZML格式数据
     * @returns CZML格式数据
     */
    toCZML(): any;
}

declare namespace DynamicRoamLine {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * graphic.on(mars3d.EventType.change, function (event) {
     *   console.log('坐标发生了变化', event)
     * })
     * @property 通用 - 支持的父类的事件类型
     * @property change - 变化了
     * @property click - 左键单击 鼠标事件
     * @property rightClick - 右键单击 鼠标事件
     * @property mouseOver - 鼠标移入 鼠标事件
     * @property mouseOut - 鼠标移出 鼠标事件
     * @property popupOpen - popup弹窗打开后
     * @property popupClose - popup弹窗关闭
     * @property tooltipOpen - tooltip弹窗打开后
     * @property tooltipClose - tooltip弹窗关闭
     */
    type EventType = {
        通用: BaseGraphic.EventType;
        change: string;
        click: string;
        rightClick: string;
        mouseOver: string;
        mouseOut: string;
        popupOpen: string;
        popupClose: string;
        tooltipOpen: string;
        tooltipClose: string;
    };
}

/**
 * 动态漫游路线管理类 【动态传入的数据】
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param [options.maxCacheCount = 50] - 保留的坐标点数量
 * @param [options.hasCache = true] - 是否记录缓存，提高效率
 * @param [options.fixedFrameTransform = Cesium.Transforms.eastNorthUpToFixedFrame] - 参考系
 * @param [options.label] - 设置是否显示 文本 和对应的样式
 * @param [options.model] - 设置是否显示 gltf模型 和对应的样式
 * @param [options.billboard] - 设置是否显示 图标 和对应的样式，如果不设置gltf模型时，可以选择该项。
 * @param [options.point] - 设置是否显示 图标 和对应的样式，如果不设置gltf模型时，可以选择该项。
 * @param [options.circle] - 设置是否显示 圆对象 和对应的样式
 * @param [options.shadow] - 设置投影或附加的对象，支持类型：
 * @param [options.shadow.wall] - wall类型所支持的参数
 * @param [options.shadow.cylinder] - cylinder类型所支持的参数
 * @param [options.shadow.circle] - circle类型所支持的参数
 * @param [options.shadow.polyline] - polyline类型所支持的参数
 * @param [options.shadow.polylineGoing] - polylineGoing类型所支持的参数
 * @param [options.camera] - 视角模式设置，包括：
 * @param [options.camera.type] - 视角模式类型，包括：'':无、'gs':跟随视角、'dy':第一视角、'sd':上帝视角
 * @param [options.camera.radius] - 'gs'跟随视角时的 初始俯仰距离值（单位：米）
 * @param [options.camera.heading] - 'gs'跟随视角时的 初始方向角度值，绕垂直于地心的轴旋转角度, 0至360
 * @param [options.camera.pitch] - 'gs'跟随视角时的 初始俯仰角度值，绕纬度线旋转角度, 0至360
 * @param [options.camera.followedX = 50] - 锁定第一视角时，距离运动点的距离（后方）
 * @param [options.camera.followedZ = 10] - 'dy'锁定第一视角或'sd'上帝视角时，距离运动点的高度（上方）
 * @param [options.camera.offsetX = 0] - 'dy'锁定第一视角时，锁定点的本身的X轴方向（前后）偏移值
 * @param [options.camera.offsetY = 0] - 'dy'锁定第一视角时，锁定点的本身的Y轴方向（横向）偏移值
 * @param [options.camera.offsetZ = 0] - 'dy'锁定第一视角时，锁定点的本身的Z轴方向（高度）偏移值
 * @param [options.clampToTileset = false] - 是否贴3dtiles模型上（贴模型效率较慢，按需开启）
 * @param [options.frameRate = 30] - 当clampToTileset：true时，控制贴模型的效率，多少帧计算一次贴模型高度,
 * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，默认是当前本身，可以是： primitives, entities, 或 3D Tiles features
 */
declare class DynamicRoamLine extends BaseRoamLine {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        maxCacheCount?: number;
        hasCache?: boolean;
        fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame;
        label?: LabelEntity.StyleOptions;
        model?: ModelEntity.StyleOptions;
        billboard?: BillboardEntity.StyleOptions;
        point?: PointEntity.StyleOptions;
        circle?: CircleEntity.StyleOptions;
        shadow?: {
            wall?: BaseRoamLine.WallShadingOptions;
            cylinder?: BaseRoamLine.CylinderShadingOptions;
            circle?: BaseRoamLine.CircleShadingOptions;
            polyline?: BaseRoamLine.PolylineShadingOptions;
            polylineGoing?: BaseRoamLine.PolylineGoingShadingOptions;
        }[];
        camera?: {
            type?: string;
            radius?: number;
            heading?: number;
            pitch?: number;
            followedX?: number;
            followedZ?: number;
            offsetX?: number;
            offsetY?: number;
            offsetZ?: number;
        };
        clampToTileset?: boolean;
        frameRate?: number;
        objectsToExclude?: object[];
    });
    /**
     * 将轨迹数据转换为CZML格式数据
     * @example
     * //更新车辆的轨迹
     * let path = [{"lng":117.086419,"lat":31.803459,"time":"2020-11-25 10:00:00"},{"lng":117.061666,"lat":31.812281,"time":"2020-11-25 10:01:02"}]
     * car.updatePath(path)
     *
     * //或
     * let path = [{"longitude":117.086419,"latitude":31.803459,"datetime":"2020-11-25 10:00:00"},{"longitude":117.061666,"latitude":31.812281,"datetime":"2020-11-25 10:01:02"}]
     * car.updatePath(path, {
     *   timeColumn: 'datetime',
     *   getPosition: function (item) {
     *     return Cesium.Cartesian3.fromDegrees(parseFloat(item.longitude), parseFloat(item.lat), 0)
     *   },
     * })
     * @param points - 轨迹点数据数组，包含时间、经度、纬度值 即可。
     * @param [options = {}] - 参数对象:
     * @param [options.timeColumn = 'time'] - 时间字段的名称
     * @param [options.getPosition] - 构造单条数据内的构造坐标点的回调方法，如果points数据中已有position或lat\lng\alt字段也可以不传回调方法。
     * @returns 无
     */
    updatePath(points: object[], options?: {
        timeColumn?: any;
        getPosition?: (...params: any[]) => any;
    }): void;
    /**
     * 动态时序坐标位置，
     * Cesium原生动态属性对象
     */
    readonly property: Cesium.SampledPositionProperty;
}

declare namespace RoamLine {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * graphic.on(mars3d.EventType.change, function (event) {
     *   console.log('坐标发生了变化', event)
     * })
     * @property 通用 - 支持的父类的事件类型
     * @property start - 开始
     * @property change - 变化了
     * @property endItem - 完成points其中一个点时的回调事件
     * @property end - 完成所有漫游的回调事件
     * @property click - 左键单击 鼠标事件
     * @property rightClick - 右键单击 鼠标事件
     * @property mouseOver - 鼠标移入 鼠标事件
     * @property mouseOut - 鼠标移出 鼠标事件
     * @property popupOpen - popup弹窗打开后
     * @property popupClose - popup弹窗关闭
     * @property tooltipOpen - tooltip弹窗打开后
     * @property tooltipClose - tooltip弹窗关闭
     */
    type EventType = {
        通用: BaseGraphic.EventType;
        start: string;
        change: string;
        endItem: string;
        end: string;
        click: string;
        rightClick: string;
        mouseOver: string;
        mouseOut: string;
        popupOpen: string;
        popupClose: string;
        tooltipOpen: string;
        tooltipClose: string;
    };
}

/**
 * 飞行漫游路线管理类 【静态一次性传入的数据】
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.positions - 轨迹的 坐标数组
 * @param options.speed - 轨迹的 速度( 单位：千米/小时)
 * @param [options.timeField = 'time'] - 当points数组中已有时间值，请传入该值的字段名称，同时speed将失效，已实际传入时间字段为准。
 * @param [options.offsetHeight = 0] - 轨迹偏移增加的高度
 * @param [options.startTime = clock.currentTime] - 轨迹的开始时间
 * @param [options.pauseTime = 0] - 每个点的停留时长（单位：秒）
 * @param [options.multiplier = 1] - 轨迹播放的倍率
 * @param [options.hasCache = true] - 是否记录缓存，提高效率
 * @param [options.fixedFrameTransform = Cesium.Transforms.eastNorthUpToFixedFrame] - 参考系
 * @param [options.interpolation = false] - 是否LagrangePolynomialApproximation插值，对轨迹进行圆弧状插值
 * @param [options.interpolationDegree = 2] - 当interpolation为true时，使用的插值程度。
 * @param [options.showStop = false] - 是否在start前或stop后显示模型等对象
 * @param [options.label] - 设置是否显示 文本 和对应的样式
 * @param [options.showGroundHeight = false] - 是否求准确的 地面海拔 和 离地高度 (没有此需求时可以关闭，提高效率)
 * @param [options.model] - 设置是否显示 gltf模型 和对应的样式
 * @param [options.billboard] - 设置是否显示 图标 和对应的样式，如果不设置gltf模型时，可以选择该项。
 * @param [options.point] - 设置是否显示 图标 和对应的样式，如果不设置gltf模型时，可以选择该项。
 * @param [options.path] - 设置是否显示 轨迹路线 和对应的样式
 * @param [options.circle] - 设置是否显示 圆对象 和对应的样式
 * @param [options.shadow] - 设置投影或附加的对象，支持类型：
 * @param [options.shadow.wall] - wall类型所支持的参数
 * @param [options.shadow.cylinder] - cylinder类型所支持的参数
 * @param [options.shadow.circle] - circle类型所支持的参数
 * @param [options.shadow.polyline] - polyline类型所支持的参数
 * @param [options.shadow.polylineGoing] - polylineGoing类型所支持的参数
 * @param [options.camera] - 视角模式设置，包括：
 * @param [options.camera.type] - 视角模式类型，包括：'':无、'gs':跟随视角、'dy':第一视角、'sd':上帝视角
 * @param [options.camera.radius] - 'gs'跟随视角时的 初始俯仰距离值（单位：米）
 * @param [options.camera.heading] - 'gs'跟随视角时的 初始方向角度值，绕垂直于地心的轴旋转角度, 0至360
 * @param [options.camera.pitch] - 'gs'跟随视角时的 初始俯仰角度值，绕纬度线旋转角度, 0至360 *
 * @param [options.camera.followedX = 50] - 锁定第一视角时，距离运动点的距离（后方）
 * @param [options.camera.followedZ = 10] - 'dy'锁定第一视角或'sd'上帝视角时，距离运动点的高度（上方）
 * @param [options.camera.offsetX = 0] - 'dy'锁定第一视角时，锁定点的本身的X轴方向（前后）偏移值
 * @param [options.camera.offsetY = 0] - 'dy'锁定第一视角时，锁定点的本身的Y轴方向（横向）偏移值
 * @param [options.camera.offsetZ = 0] - 'dy'锁定第一视角时，锁定点的本身的Z轴方向（高度）偏移值
 * @param [options.clockRange] - 指定播放的模式
 * @param [options.clockLoop = false] - 是否循环播放，等价于clockRange:Cesium.ClockRange.LOOP_STOP
 * @param [options.autoStop = false] - 是否自动停止，等价于clockRange:Cesium.ClockRange.UNBOUNDED
 *
 * //以下是 clampToGround中使用的
 * @param [options.splitNum = 100] - 当clampToGround计算时，插值数，等比分割的个数
 * @param [options.minDistance = null] - 当clampToGround计算时，插值最小间隔(单位：米)，优先级高于splitNum
 * @param [options.offset = 0] - 当clampToGround计算时，可以按需增加偏移高度（单位：米），便于可视
 * @param [options.clampToTileset = false] - 是否贴3dtiles模型上（贴模型效率较慢，按需开启）
 * @param [options.frameRate = 30] - 当clampToTileset：true时，控制贴模型的效率，多少帧计算一次贴模型高度,
 * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，默认是当前本身，可以是： primitives, entities, 或 3D Tiles features
 */
declare class RoamLine extends BaseRoamLine {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        positions: any[][] | LatLngPoint[];
        speed: any[][] | number;
        timeField?: string;
        offsetHeight?: number;
        startTime?: string | Cesium.JulianDate;
        pauseTime?: number | ((...params: any[]) => any);
        multiplier?: number;
        hasCache?: boolean;
        fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame;
        interpolation?: boolean;
        interpolationDegree?: boolean;
        showStop?: boolean;
        label?: LabelEntity.StyleOptions;
        showGroundHeight?: boolean;
        model?: ModelEntity.StyleOptions;
        billboard?: BillboardEntity.StyleOptions;
        point?: PointEntity.StyleOptions;
        path?: PathEntity.StyleOptions;
        circle?: CircleEntity.StyleOptions;
        shadow?: {
            wall?: BaseRoamLine.WallShadingOptions;
            cylinder?: BaseRoamLine.CylinderShadingOptions;
            circle?: BaseRoamLine.CircleShadingOptions;
            polyline?: BaseRoamLine.PolylineShadingOptions;
            polylineGoing?: BaseRoamLine.PolylineGoingShadingOptions;
        }[];
        camera?: {
            type?: string;
            radius?: number;
            heading?: number;
            pitch?: number;
            followedX?: number;
            followedZ?: number;
            offsetX?: number;
            offsetY?: number;
            offsetZ?: number;
        };
        clockRange?: Cesium.ClockRange;
        clockLoop?: boolean;
        autoStop?: boolean;
        splitNum?: number;
        minDistance?: number;
        offset?: number;
        clampToTileset?: boolean;
        frameRate?: number;
        objectsToExclude?: object[];
    });
    /**
     * 当前飞行过的positions轨迹点数组的index顺序
     */
    readonly currIndex: number;
    /**
     * 是否已启动
     */
    readonly isStart: boolean;
    /**
     * 当前实时信息
     */
    readonly info: any;
    /**
     * 开始飞行漫游
     * @returns 无
     */
    start(): void;
    /**
     * 停止飞行漫游
     * @returns 无
     */
    stop(): void;
    /**
     * 计算贴地线
     * @param callback - 计算完成的回调方法
     * @returns 无
     */
    clampToGround(callback: (...params: any[]) => any): void;
    /**
     * 获取剖面数据
     * @param callback - 计算完成的回调方法
     * @returns 无
     */
    getTerrainHeight(callback: (...params: any[]) => any): void;
    /**
     * 动态时序坐标位置，
     * Cesium原生动态属性对象
     */
    readonly property: Cesium.SampledPositionProperty;
}

declare namespace BaseGraphicLayer {
    /**
     * 矢量数据图层 通用构造参数
     * @property [id = uuid()] - 图层id标识
     * @property [pid = -1] - 图层父级的id，一般图层管理中使用
     * @property [name = '未命名'] - 图层名称
     * @property [show = true] - 图层是否显示
     * @property [center] - 图层自定义定位视角{@link Map#setCameraView}
     * @property center.lng - 经度值, 180 - 180
     * @property center.lat - 纬度值, -90 - 90
     * @property center.alt - 高度值
     * @property center.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0-360
     * @property center.pitch - 俯仰角度值，绕纬度线旋转角度, 0-360
     * @property center.roll - 翻滚角度值，绕经度线旋转角度, 0-360
     * @property [extent = null] - 图层自定义定位的矩形区域，与center二选一即可。 {@link Map#flyToExtent}
     * @property extent.xmin - 最小经度值, -180 至 180
     * @property extent.xmax - 最大纬度值, -180 至 180
     * @property extent.ymin - 最小纬度值, -90 至 90
     * @property extent.ymax - 最大纬度值, -90 至 90
     * @property [extent.height = 0] - 矩形高度值
     * @property [flyTo] - 加载完成数据后是否自动飞行定位到数据所在的区域。
     * @property [popup] - 绑定的popup弹窗值，也可以bindPopup方法绑定，支持：'all'、数组、字符串模板，当为数组时支持：
     * @property popup.field - 字段名称
     * @property popup.name - 显示的对应自定义名称
     * @property [popup.type] - 默认为label文本，也可以支持：'button'按钮，'html' html内容。
     * @property [popup.callback] - 当type为'button'按钮时，单击后触发的事件。
     * @property [popup.html] - 当type为'html'时，对于拼接的html内容。
     * @property [popup.format] - 使用window上有效的格式化js方法名称或function回调方法，来格式化字符串值。
     * @property [popup.unit] - 追加的计量单位 或 其他字符串后缀。
     * @property [popupOptions] - popup弹窗时的配置参数
     * @property [tooltip] - 绑定的tooltip弹窗值，也可以bindTooltip方法绑定，参数与popup属性完全相同。
     * @property [tooltipOptions] - tooltip弹窗时的配置参数
     * @property [contextmenuItems] - 绑定的右键菜单值，也可以bindContextMenu方法绑定
     * @property [opacity = 1.0] - 透明度（部分图层），取值范围：0.0-1.0
     * @property [zIndex] - 控制图层的叠加层次（部分图层），默认按加载的顺序进行叠加，但也可以自定义叠加顺序，数字大的在上面。
     */
    type ConstructorOptions = {
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        center?: {
            lng: number;
            lat: number;
            alt: number;
            heading: number;
            pitch: number;
            roll: number;
        };
        extent?: {
            xmin: number;
            xmax: number;
            ymin: number;
            ymax: number;
            height?: number;
        };
        flyTo?: boolean;
        popup?: {
            field: string;
            name: string;
            type?: string;
            callback?: string;
            html?: string;
            format?: string | ((...params: any[]) => any);
            unit?: string;
        };
        popupOptions?: Popup.StyleOptions;
        tooltip?: string | any[] | ((...params: any[]) => any);
        tooltipOptions?: Popup.StyleOptions;
        contextmenuItems?: any;
        opacity?: number;
        zIndex?: number;
    };
    /**
     * 图层类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * layer.on(mars3d.EventType.click, function (event) {
     *   console.log('单击了矢量数据对象', event)
     * })
     * @property add - 添加对象
     * @property remove - 移除对象
     * @property show - 显示了对象
     * @property hide - 隐藏了对象
     * @property click - 左键单击 鼠标事件
     * @property rightClick - 右键单击 鼠标事件
     * @property mouseOver - 鼠标移入 鼠标事件
     * @property mouseOut - 鼠标移出 鼠标事件
     * @property popupOpen - popup弹窗打开后
     * @property popupClose - popup弹窗关闭
     * @property tooltipOpen - tooltip弹窗打开后
     * @property tooltipClose - tooltip弹窗关闭
     */
    type EventType = {
        add: string;
        remove: string;
        show: string;
        hide: string;
        click: string;
        rightClick: string;
        mouseOver: string;
        mouseOut: string;
        popupOpen: string;
        popupClose: string;
        tooltipOpen: string;
        tooltipClose: string;
    };
}

/**
 * 矢量数据图层 Base基类
 * @param options - 描述初始化构造参数选项的对象
 */
declare class BaseGraphicLayer extends BaseLayer {
    constructor(options: BaseGraphicLayer.ConstructorOptions);
    /**
     * 绑定鼠标移入或单击后的 对象高亮
     * @param [options] - 高亮的样式，具体见各{@link GraphicType}矢量数据的style参数。
     * @param [options.type] - 事件类型，默认为鼠标移入高亮，也可以指定'click'单击高亮.
     * @returns 无
     */
    bindHighlight(options?: {
        type?: string;
    }): void;
    /**
     * 解绑鼠标移入或单击后的高亮处理
     * @returns 无
     */
    unbindHighlight(): void;
    /**
     * 是否存在Popup绑定，判断图层及内部所有矢量数据
     * @returns 是否存在Popup绑定
     */
    hasPopup(): boolean;
    /**
     * 绑定鼠标单击对象后的弹窗。
     * @param content - 弹窗内容html字符串，或者回调方法。
     * @param options - 控制参数
     * @returns 当前对象本身，可以链式调用
     */
    bindPopup(content: string | ((...params: any[]) => any), options: Popup.StyleOptions): this;
    /**
     * 解除绑定的鼠标单击对象后的弹窗。
     * @param [stopPropagation = false] - 单击事件中是否继续冒泡查找
     * @returns 当前对象本身，可以链式调用
     */
    unbindPopup(stopPropagation?: boolean): this;
    /**
     * 打开绑定的弹窗
     * @param position - 矢量对象 或 显示的位置
     * @returns 当前对象本身，可以链式调用
     */
    openPopup(position: BaseGraphic | LatLngPoint | Cesium.Cartesian3): this;
    /**
     * 关闭弹窗
     * @returns 当前对象本身，可以链式调用
     */
    closePopup(): this;
    /**
     * 是否绑定了tooltip
     * @returns 是否绑定
     */
    hasTooltip(): boolean;
    /**
     * 绑定鼠标移入的弹窗
     * @param content - 弹窗内容html字符串，或者回调方法。
     * @param options - 控制参数
     * @returns 当前对象本身，可以链式调用
     */
    bindTooltip(content: string | ((...params: any[]) => any), options: Popup.StyleOptions): this;
    /**
     * 解除绑定的鼠标移入对象后的弹窗。
     * @param [stopPropagation = false] - 单击事件中是否继续冒泡查找
     * @returns 当前对象本身，可以链式调用
     */
    unbindTooltip(stopPropagation?: boolean): this;
    /**
     * 打开绑定的tooltip弹窗
     * @param position - graphic矢量对象 或 显示的位置
     * @returns 当前对象本身，可以链式调用
     */
    openTooltip(position: BaseGraphic | LatLngPoint | Cesium.Cartesian3): this;
    /**
     * 关闭弹窗
     * @returns 当前对象本身，可以链式调用
     */
    closeTooltip(): this;
    /**
     * 是否有绑定的右键菜单
     * @returns 当前对象本身，可以链式调用
     */
    hasContextMenu(): this;
    /**
     * 获取绑定的右键菜单数组
     * @returns 右键菜单数组
     */
    getContextMenu(): object[];
    /**
     * 绑定右键菜单
     * @example
     * //在layer上绑定右键菜单
     *       graphicLayer.bindContextMenu([
     *         {
     *           text: '删除对象',
     *           iconCls: 'fa fa-trash-o',
     *           callback: function (e) {
     *             let graphic = e.graphic
     *             if (graphic) {
     *               graphicLayer.removeGraphic(graphic)
     *             }
     *           },
     *         },
     *         {
     *           text: '计算长度',
     *           iconCls: 'fa fa-medium',
     *           show: function (e) {
     *             let graphic = e.graphic
     *             return graphic.type === 'polyline'
     *           },
     *           callback: function (e) {
     *             let graphic = e.graphic
     *             let strDis = mars3d.MeasureUtil.formatDistance(graphic.distance)
     *             haoutil.alert('该对象的长度为:' + strDis)
     *           },
     *         },
     *       ])
     * @param content - 右键菜单配置数组，数组中每一项包括：
     * @param [content.text] - 菜单文字
     * @param [content.iconCls] - 小图标css
     * @param [content.show] - 菜单项是否显示的回调方法
     * @param [content.callback] - 菜单项单击后的回调方法
     * @param [content.children] - 当有二级子菜单时，配置数组。
     * @param [options = {}] - 参数对象(预留，目前未用)
     * @returns 当前对象本身，可以链式调用
     */
    bindContextMenu(content: {
        text?: string;
        iconCls?: string;
        show?: ((...params: any[]) => any) | boolean;
        callback?: (...params: any[]) => any;
        children?: object[];
    }[], options?: any): this;
    /**
     * 解除绑定的右键菜单
     * @param [stopPropagation = false] - 单击事件中是否继续冒泡查找
     * @returns 当前对象本身，可以链式调用
     */
    unbindContextMenu(stopPropagation?: boolean): this;
    /**
     * 打开右键菜单
     * @param position - 矢量对象 或 显示的位置
     * @returns 当前对象本身，可以链式调用
     */
    openContextMenu(position: BaseGraphic | Cesium.Cartesian3): this;
    /**
     * 关闭右键菜单
     * @returns 当前对象本身，可以链式调用
     */
    closeContextMenu(): this;
    /**
     * 显示小提示窗，一般用于鼠标操作的提示。
     * @param position - 显示的屏幕坐标位置 或 笛卡尔坐标位置
     * @param message - 显示的内容
     * @returns 当前对象本身，可以链式调用
     */
    openSmallTooltip(position: Cesium.Cartesian2 | Cesium.Cartesian3, message: any): this;
    /**
     * 关闭小提示窗
     * @returns 当前对象本身，可以链式调用
     */
    closeSmallTooltip(): this;
}

/**
 * 图层对象 的基类
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 图层id标识
 * @param [options.pid = -1] - 图层父级的id，一般图层管理中使用
 * @param [options.name = '未命名'] - 图层名称
 * @param [options.show = true] - 图层是否显示
 * @param [options.opacity = 1] - 透明度，取值范围：0.0-1.0
 * @param [options.center] - 图层自定义定位视角
 * @param [options.popup] - 当图层支持popup弹窗时，绑定的值
 * @param [options.popupOptions] - popup弹窗时的配置参数
 * @param [options.tooltip] - 当图层支持tooltip弹窗时，绑定的值
 * @param [options.tooltipOptions] - tooltip弹窗时的配置参数
 * @param [options.contextmenuItems] - 当图层支持右键菜单时，绑定的值
 * @param [options.stopPropagation = false] - 当前类中事件是否停止冒泡, false时：事件冒泡到map中。
 */
declare class BaseLayer extends BaseClass {
    constructor(options: {
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        opacity?: number;
        center?: any;
        popup?: string | any[] | ((...params: any[]) => any) | any;
        popupOptions?: Popup.StyleOptions;
        tooltip?: string | any[] | ((...params: any[]) => any) | any;
        tooltipOptions?: Popup.StyleOptions;
        contextmenuItems?: any;
        stopPropagation?: boolean;
    });
    /**
     * 内置唯一标识ID
     */
    readonly uuid: string;
    /**
     * 对象的pid标识
     */
    pid: string | number;
    /**
     * 对象的id标识
     */
    id: string | number;
    /**
     * 名称 标识
     */
    name: string;
    /**
     * 图层类型
     */
    readonly type: string;
    /**
     * 当前对象的状态
     */
    readonly state: State;
    /**
     * 是否已添加到地图
     */
    readonly isAdded: boolean;
    /**
     * 是否已经销毁了
     */
    readonly isDestroy: boolean;
    /**
     * 显示隐藏状态
     */
    show: boolean;
    /**
     * 是否可以调整透明度
     */
    readonly hasOpacity: boolean;
    /**
     * 透明度，取值范围：0.0-1.0
     */
    opacity: number;
    /**
     * 添加到地图上，同 map.addThing
     * @param map - 地图对象
     * @returns 当前对象本身，可以链式调用
     */
    addTo(map: Map): this;
    /**
     * 从地图上移除，同map.removeThing
     * @param destroy - 是否调用destroy释放
     * @returns 无
     */
    remove(destroy: boolean): void;
    /**
     * 对象添加到地图前创建一些对象的钩子方法，
     * 只会调用一次
     * @returns 无
     */
    _mountedHook(): void;
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @returns 无
     */
    _addedHook(): void;
    /**
     * 对象从地图上移除的创建钩子方法，
     * 每次remove时都会调用
     * @returns 无
     */
    _removedHook(): void;
    /**
     * 显示错误弹窗，
     * 调用cesium的cesiumWidget.showErrorPanel
     * @param title - 标题
     * @param error - 错误内容对象
     * @returns 当前对象本身，可以链式调用
     */
    showError(title: string, error: any): this;
    /**
     * 入场动画后再执行flyTo，直接调用flyTo可能造成入场动画失败。
     * @returns 当前对象本身，可以链式调用
     */
    flyToByAnimationEnd(): this;
    /**
     * 飞行定位至图层数据所在的视角
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 当前对象本身，可以链式调用
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): this;
    /**
     * 更新图层参数
     * @param options - 与类的构造方法参数相同
     * @returns 当前对象本身，可以链式调用
     */
    setOptions(options: any): this;
    /**
     * 将图层转为Json简单对象，用于存储后再传参加载
     * @returns Json简单对象
     */
    toJSON(): any;
    /**
     * 销毁当前对象
     * @param [noDel = false] - false:会自动delete释放所有属性，true：不delete绑定的变量
     * @returns 无
     */
    destroy(noDel?: boolean): void;
}

declare namespace CzmGeoJsonLayer {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * layer.on(mars3d.EventType.load, function (event) {
     *   console.log('矢量数据对象加载完成', event)
     * })
     * @property 通用 - 支持的父类的事件类型
     * @property load - 完成加载，执行所有内部处理后
     * @property addGraphic - 添加矢量数据时
     */
    type EventType = {
        通用: BaseGraphicLayer.EventType;
        load: string;
        addGraphic: string;
    };
}

/**
 * GeoJSON数据图层(ceisum原生)，该类中矢量数据是使用ceisum原生方法加载的entity对象。
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.url] - geojson文件或服务url地址
 * @param [options.data] - geojson格式规范数据对象，与url二选一即可。
 * @param [options.format] - 可以对加载的geojson数据进行格式化或转换操作
 * @param [options.symbol] - 矢量数据的style样式
 * @param options.symbol.styleOptions - 点数据时的Style样式，可以附加 model {@link ModelEntity.StyleOptions} 或 point {@link PointEntity.StyleOptions}
 * @param options.symbol.styleOptions - 线数据时的Style样式，可以附加 corridor {@link CorridorEntity.StyleOptions}
 * @param options.symbol.styleOptions - 面数据时的Style样式
 * @param [options.symbol.styleField] - 按 styleField 属性设置不同样式。
 * @param [options.symbol.styleFieldOptions] - 按styleField值与对应style样式的键值对象。
 * @param [options.symbol.callback] - 自定义判断处理返回style ，示例：callback: function (attr, entity, styleOpt){  return { color: "#ff0000" };  }
 */
declare class CzmGeoJsonLayer extends BaseGraphicLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        url?: string;
        data?: any;
        format?: (...params: any[]) => any;
        symbol?: {
            styleOptions: PolygonEntity.StyleOptions;
            styleOptions: PolygonEntity.StyleOptions;
            styleOptions: PolygonEntity.StyleOptions;
            styleField?: string;
            styleFieldOptions?: any;
            callback?: (...params: any[]) => any;
        };
    });
    /**
     * GeoJsonDataSource 对象
     */
    readonly layer: Cesium.GeoJsonDataSource;
    /**
     * Entity矢量数据 集合
     */
    readonly entities: Cesium.EntityCollection;
    /**
     * 当存在 文字primitive 数据的内部Cesium容器
     */
    readonly labelCollection: Cesium.LabelCollection;
    /**
     * 是否可以调整图层顺序（在同类型图层间）
     */
    readonly hasZIndex: boolean;
    /**
     * 图层顺序，数字大的在上面。（当hasZIndex为true时）
     */
    zIndex: number;
    /**
     * 是否贴地
     */
    readonly clampToGround: boolean;
    /**
     * 加载新数据 或 刷新数据
     * @param [newOptions = {}] - 新设定的参数，会与类的构造参数合并。
     * @param [newOptions.url] - geojson文件或服务url地址
     * @param [newOptions.data] - geojson格式规范数据对象，与url二选一即可。
     * @param [newOptions.类参数] - 包含当前类支持的所有参数
     * @param [newOptions.通用参数] - 包含父类支持的所有参数
     * @returns 当前对象本身，可以链式调用
     */
    load(newOptions?: {
        url?: string;
        data?: any;
        类参数?: any;
        通用参数?: BaseGraphicLayer.ConstructorOptions;
    }): this;
    /**
     * 加载新数据 或 刷新数据
     * @param symbol - 设置新的symbol 矢量数据样式.  {@link GraphicType}
     * @param symbol.styleOptions - Style样式，每种不同类型数据都有不同的样式，具体见各矢量数据的style参数。{@link GraphicType}
     * @param [symbol.styleField] - 按 styleField 属性设置不同样式。
     * @param [symbol.styleFieldOptions] - 按styleField值与对应style样式的键值对象。
     * @returns 当前对象本身，可以链式调用
     */
    updateStyle(symbol: {
        styleOptions: any;
        styleField?: string;
        styleFieldOptions?: any;
    }): this;
    /**
     * 添加label文本注记
     * @param position - 坐标位置
     * @param labelattr - label文本的属性
     * @param attr - 属性信息
     * @returns label文本对象
     */
    lblAddFun(position: Cesium.Cartesian3 | Cesium.XXXPositionProperty, labelattr: any, attr: any): Cesium.Label;
    /**
     * 设置透明度
     * @param value - 透明度
     * @returns 无
     */
    setOpacity(value: number): void;
    /**
     * 获取Entity矢量对象上绑定的 数据
     * @param entity - Entity矢量对象
     * @returns 数据
     */
    getEntityAttr(entity: Cesium.Entity): any;
    /**
     * 清除所有数据
     * @returns 当前对象本身，可以链式调用
     */
    clear(): this;
    /**
     * 飞行定位至图层数据所在的视角
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 当前对象本身，可以链式调用
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): this;
}

/**
 * CZML数据图层
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.url] - CZML文件或服务url地址
 * @param [options.data] - CZML格式规范数据对象，与url二选一即可。
 * @param [options.format] - 可以对加载的CZML数据进行格式化或转换操作
 */
declare class CzmlLayer extends CzmGeoJsonLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        url?: string;
        data?: any;
        format?: (...params: any[]) => any;
    });
    /**
     * 加载新数据 或 刷新数据
     * @param [newOptions = {}] - 新设定的参数，会与类的构造参数合并。
     * @param [newOptions.data] - CZML格式规范数据对象，与url二选一即可。
     * @param [newOptions.url] - CZML文件或服务url地址
     * @param [options.proxy] - 加载资源时要使用的代理服务url。
     * @param [options.templateValues] - 一个对象，用于替换Url中的模板值的键/值对
     * @param [options.queryParameters] - 一个对象，其中包含在检索资源时将发送的查询参数。比如：queryParameters: {'access_token': '123-435-456-000'}
     * @param [options.headers] - 一个对象，将发送的其他HTTP标头。比如：headers: { 'X-My-Header': 'valueOfHeader' }
     * @param [newOptions.类参数] - 包含当前类支持的所有参数
     * @param [newOptions.通用参数] - 包含父类支持的所有参数
     * @returns 当前对象本身，可以链式调用
     */
    load(newOptions?: {
        data?: any;
        url?: string;
        类参数?: any;
        通用参数?: BaseGraphicLayer.ConstructorOptions;
    }): this;
    /**
     * 获取Entity矢量对象上绑定的 数据
     * @param entity - Entity矢量对象
     * @returns 数据
     */
    getEntityAttr(entity: Cesium.Entity): any;
}

/**
 * KML数据图层
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.url] - KML文件或服务url地址
 * @param [options.data] - 已解析的KML文档或包含二进制KMZ数据或已解析的KML文档的Blob，与url二选一即可。
 * @param [options.format] - 可以对加载的KML数据进行格式化或转换操作
 * @param [options.symbol] - 矢量数据的style样式
 * @param options.symbol.styleOptions - 点数据时的Style样式，可以附加 model {@link ModelEntity.StyleOptions} 或 point {@link PointEntity.StyleOptions}
 * @param options.symbol.styleOptions - 线数据时的Style样式，可以附加 corridor {@link CorridorEntity.StyleOptions}
 * @param options.symbol.styleOptions - 面数据时的Style样式
 * @param [options.symbol.styleField] - 按 styleField 属性设置不同样式。
 * @param [options.symbol.styleFieldOptions] - 按styleField值与对应style样式的键值对象。
 * @param [options.symbol.callback] - 自定义判断处理返回style ，示例：callback: function (attr, entity, styleOpt){  return { color: "#ff0000" };  }
 */
declare class KmlLayer extends CzmGeoJsonLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        url?: string;
        data?: Document | Blob;
        format?: (...params: any[]) => any;
        symbol?: {
            styleOptions: PolygonEntity.StyleOptions;
            styleOptions: PolygonEntity.StyleOptions;
            styleOptions: PolygonEntity.StyleOptions;
            styleField?: string;
            styleFieldOptions?: any;
            callback?: (...params: any[]) => any;
        };
    });
    /**
     * 加载新数据 或 刷新数据
     * @param [newOptions = {}] - 新设定的参数，会与类的构造参数合并。
     * @param [newOptions.data] - 已解析的KML文档或包含二进制KMZ数据或已解析的KML文档的Blob，与url二选一即可。
     * @param [newOptions.url] - KML文件或服务url地址
     * @param [options.proxy] - 加载资源时要使用的代理服务url。
     * @param [options.templateValues] - 一个对象，用于替换Url中的模板值的键/值对
     * @param [options.queryParameters] - 一个对象，其中包含在检索资源时将发送的查询参数。比如：queryParameters: {'access_token': '123-435-456-000'}
     * @param [options.headers] - 一个对象，将发送的其他HTTP标头。比如：headers: { 'X-My-Header': 'valueOfHeader' }
     * @param [newOptions.类参数] - 包含当前类支持的所有参数
     * @param [newOptions.通用参数] - 包含父类支持的所有参数
     * @returns 当前对象本身，可以链式调用
     */
    load(newOptions?: {
        data?: Document | Blob;
        url?: string;
        类参数?: any;
        通用参数?: BaseGraphicLayer.ConstructorOptions;
    }): this;
    /**
     * 获取Entity矢量对象上绑定的 数据
     * @param entity - Entity矢量对象
     * @returns 数据
     */
    getEntityAttr(entity: Cesium.Entity): any;
}

/**
 * ArcGIS WFS服务图层，
 * 按瓦片网格分块分层加载。
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param options.url - ArcGIS服务地址, 示例：'http://server.mars3d.cn/arcgis/rest/services/mars/hefei/MapServer/37',
 * @param [options.token] - 用于通过ArcGIS MapServer服务进行身份验证的ArcGIS令牌。
 * @param [options.where] - 用于筛选数据的where查询条件
 * @param [options.wkid] - 当非标准EPSG标号时，可以指定wkid值。
 * @param [options.parameters] - 要在URL中 传递给WFS服务GetFeature请求的其他参数。
 * @param [options.headers] - 将被添加到HTTP请求头。
 * @param [options.proxy] - 加载资源时使用的代理。
 * @param [options.IdField = 'id'] - 数据中唯一标识的属性字段名称,默认读取 id或objectid或OBJECTID
 * @param options.debuggerTileInfo - 是否开启测试显示瓦片信息
 * @param [options.minimumLevel = 0] - 图层所支持的最低层级，当地图小于该级别时，平台不去请求服务数据。【影响效率的重要参数】
 * @param [options.maximumLevel] - 图层所支持的最大层级,当地图大于该级别时，平台不去请求服务数据。
 * @param options.rectangle - 瓦片数据的矩形区域范围
 * @param options.rectangle.xmin - 最小经度值, -180 至 180
 * @param options.rectangle.xmax - 最大纬度值, -180 至 180
 * @param options.rectangle.ymin - 最小纬度值, -90 至 90
 * @param options.rectangle.ymax - 最大纬度值, -90 至 90
 * @param options.bbox - bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可。
 * @param options.debuggerTileInfo - 是否开启测试显示瓦片信息
 * @param [options.buildings] - 标识当前图层为建筑物白膜类型数据
 * @param [options.buildings.bottomHeight] - 建筑物底部高度（如:0） 属性字段名称（如:{bottomHeight}）
 * @param [options.buildings.cloumn = 1] - 层数，楼的实际高度 = height*cloumn
 * @param [options.buildings.height = 3.5] - 层高的  固定层高数值（如:10） 或 属性字段名称（如:{height}）
 * @param options.clustering - 设置聚合相关参数[entity点类型时]：
 * @param [options.clustering.enabled = false] - 是否开启聚合
 * @param [options.clustering.pixelRange = 20] - 多少像素矩形范围内聚合
 * @param [options.clustering.clampToGround = true] - 是否贴地
 * @param [options.clustering.radius = 28] - 圆形图标的整体半径大小（单位：像素）
 * @param [options.clustering.radiusIn = radius-5] - 圆形图标的内圆半径大小（单位：像素）
 * @param [options.clustering.fontColor = '#ffffff'] - 数字的颜色
 * @param [options.clustering.color = 'rgba(181, 226, 140, 0.6)'] - 圆形图标的背景颜色，默认自动处理
 * @param [options.clustering.colorIn = 'rgba(110, 204, 57, 0.5)'] - 圆形图标的内圆背景颜色，默认自动处理
 * @param [options.symbol] - 矢量数据的style样式,为Function时是完全自定义的回调处理 symbol(attr, style, feature)
 * @param [options.symbol.type] - 标识数据类型，默认是根据数据生成 point、polyline、polygon
 * @param options.symbol.styleOptions - Style样式，每种不同类型数据都有不同的样式，具体见各矢量数据的style参数。{@link GraphicType}
 * @param [options.symbol.styleField] - 按 styleField 属性设置不同样式。
 * @param [options.symbol.styleFieldOptions] - 按styleField值与对应style样式的键值对象。
 * @param [options.symbol.callback] - 自定义判断处理返回style ，示例：callback: function (attr, styleOpt){  return { color: "#ff0000" };  }
 */
declare class ArcGisWfsLayer extends LodGraphicLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        url: string;
        token?: string;
        where?: string;
        wkid?: number;
        parameters?: any;
        headers?: any;
        proxy?: Cesium.Proxy;
        IdField?: string;
        debuggerTileInfo: boolean;
        minimumLevel?: number;
        maximumLevel?: number;
        rectangle: {
            xmin: number;
            xmax: number;
            ymin: number;
            ymax: number;
        };
        bbox: Number[];
        debuggerTileInfo: boolean;
        buildings?: {
            bottomHeight?: string;
            cloumn?: string;
            height?: string | number;
        };
        clustering: {
            enabled?: boolean;
            pixelRange?: number;
            clampToGround?: boolean;
            radius?: number;
            radiusIn?: number;
            fontColor?: string;
            color?: string;
            colorIn?: string;
        };
        symbol?: {
            type?: GraphicType;
            styleOptions: any;
            styleField?: string;
            styleFieldOptions?: any;
            callback?: (...params: any[]) => any;
        };
    });
    /**
     * 更新where条件后 刷新数据
     * @param where - 筛选条件
     * @returns 无
     */
    setWhere(where: string): void;
}

/**
 * ArcGIS WFS服务图层，
 * 一次性请求加载，适合少量数据时使用。
 * @param options - 参数对象，包括以下：
 * @param options.url - ArcGIS服务地址, 示例：'http://server.mars3d.cn/arcgis/rest/services/mars/hefei/MapServer/37',
 * @param [options.token] - 用于通过ArcGIS MapServer服务进行身份验证的ArcGIS令牌。
 * @param [options.where] - 用于筛选数据的where查询条件
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.format] - 可以对加载的geojson数据进行格式化或转换操作
 * @param [options.buildings] - 标识当前图层为建筑物白膜类型数据
 * @param [options.buildings.bottomHeight] - 建筑物底部高度（如:0） 属性字段名称（如:{bottomHeight}）
 * @param [options.buildings.cloumn = 1] - 层数，楼的实际高度 = height*cloumn
 * @param [options.buildings.height = 3.5] - 层高的  固定层高数值（如:10） 或 属性字段名称（如:{height}）
 * @param [options.symbol] - 矢量数据的style样式,为Function时是完全自定义的回调处理 symbol(attr, style, feature)
 * @param options.symbol.styleOptions - 点数据时的Style样式，可以附加 model {@link ModelEntity.StyleOptions} 或 point {@link PointEntity.StyleOptions}
 * @param options.symbol.styleOptions - 线数据时的Style样式，可以附加 corridor {@link CorridorEntity.StyleOptions}
 * @param options.symbol.styleOptions - 面数据时的Style样式
 * @param [options.symbol.styleField] - 按 styleField 属性设置不同样式。
 * @param [options.symbol.styleFieldOptions] - 按styleField值与对应style样式的键值对象。
 * @param [options.symbol.callback] - 自定义判断处理返回style ，示例：callback: function (attr, entity, styleOpt){  return { color: "#ff0000" };  }
 */
declare class ArcGisWfsSingleLayer extends GeoJsonLayer {
    constructor(options: {
        url: string;
        token?: string;
        where?: string;
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        format?: (...params: any[]) => any;
        buildings?: {
            bottomHeight?: string;
            cloumn?: string;
            height?: string | number;
        };
        symbol?: {
            styleOptions: PolygonEntity.StyleOptions;
            styleOptions: PolygonEntity.StyleOptions;
            styleOptions: PolygonEntity.StyleOptions;
            styleField?: string;
            styleFieldOptions?: any;
            callback?: (...params: any[]) => any;
        };
    });
    /**
     * 更新where条件后 刷新数据
     * @param where - 筛选条件
     * @returns 无
     */
    setWhere(where: string): void;
    /**
     * 加载新数据 或 刷新数据
     * @param [newOptions] - 新设定的参数，会与类的构造参数合并。
     * @param [newOptions.url] - geojson文件或服务url地址
     * @param [newOptions.data] - geojson格式规范数据对象，与url二选一即可。
     * @param [newOptions.类参数] - 包含当前类支持的所有参数
     * @param [newOptions.通用参数] - 包含父类支持的所有参数
     * @returns 当前对象本身，可以链式调用
     */
    load(newOptions?: {
        url?: string;
        data?: any;
        类参数?: any;
        通用参数?: BaseGraphicLayer.ConstructorOptions;
    }): this;
}

/**
 * DIV图层
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.hasEdit = false] - 是否可编辑
 * @param [options.isAutoEditing = true] - 完成标绘时是否自动启动编辑(需要hasEdit:true时)
 * @param [options.isContinued = false] - 是否连续标绘
 * @param [options.data = null] - 需要自动加载的数据，内部自动生成Graphic对象。{@link GraphicUtil#.create}
 * @param [options.pointerEvents = true] - DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。
 */
declare class DivLayer extends GraphicLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        hasEdit?: boolean;
        isAutoEditing?: boolean;
        isContinued?: boolean;
        data?: any | object[];
        pointerEvents?: boolean;
    });
    /**
     * 容纳 {@link DivGraphic} 数据的DOM容器
     */
    readonly container: Element;
    /**
     * 当加载 DivGraphic 数据的DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。
     */
    pointerEvents: boolean;
}

/**
 * 高德在线POI图层
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.key = mars3d.Token.gaodeArr] - 高德KEY,在实际项目中请使用自己申请的高德KEY，因为我们的key不保证长期有效。
 * @param [options.minimumLevel = 0] - 图层所支持的最低层级，当地图小于该级别时，平台不去请求服务数据。【影响效率的重要参数】
 * @param [options.maximumLevel] - 图层所支持的最大层级,当地图大于该级别时，平台不去请求服务数据。
 * @param options.rectangle - 瓦片数据的矩形区域范围
 * @param options.rectangle.xmin - 最小经度值, -180 至 180
 * @param options.rectangle.xmax - 最大纬度值, -180 至 180
 * @param options.rectangle.ymin - 最小纬度值, -90 至 90
 * @param options.rectangle.ymax - 最大纬度值, -90 至 90
 * @param options.bbox - bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可。
 * @param options.debuggerTileInfo - 是否开启测试显示瓦片信息
 * @param options.clustering - 设置聚合相关参数：
 * @param [options.clustering.enabled = false] - 是否开启聚合
 * @param [options.clustering.pixelRange = 20] - 多少像素矩形范围内聚合
 * @param [options.clustering.clampToGround = true] - 是否贴地
 * @param [options.clustering.radius = 28] - 圆形图标的整体半径大小（单位：像素）
 * @param [options.clustering.radiusIn = radius-5] - 圆形图标的内圆半径大小（单位：像素）
 * @param [options.clustering.fontColor = '#ffffff'] - 数字的颜色
 * @param [options.clustering.color = 'rgba(181, 226, 140, 0.6)'] - 圆形图标的背景颜色，默认自动处理
 * @param [options.clustering.colorIn = 'rgba(110, 204, 57, 0.5)'] - 圆形图标的内圆背景颜色，默认自动处理
 * @param [options.symbol] - 矢量数据的style样式
 * @param options.symbol.styleOptions - 点的Style样式。
 * @param [options.symbol.styleField] - 按 styleField 属性设置不同样式。
 * @param [options.symbol.styleFieldOptions] - 按styleField值与对应style样式的键值对象。
 */
declare class GeodePoiLayer extends LodGraphicLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        key?: String[];
        minimumLevel?: number;
        maximumLevel?: number;
        rectangle: {
            xmin: number;
            xmax: number;
            ymin: number;
            ymax: number;
        };
        bbox: Number[];
        debuggerTileInfo: boolean;
        clustering: {
            enabled?: boolean;
            pixelRange?: number;
            clampToGround?: boolean;
            radius?: number;
            radiusIn?: number;
            fontColor?: string;
            color?: string;
            colorIn?: string;
        };
        symbol?: {
            styleOptions: BillboardEntity.StyleOptions | PointEntity.StyleOptions;
            styleField?: string;
            styleFieldOptions?: any;
        };
    });
    /**
     * 获取配置的高德Key（多个时轮询）
     */
    readonly key: string;
}

declare namespace GeoJsonLayer {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * layer.on(mars3d.EventType.load, function (event) {
     *   console.log('矢量数据对象加载完成', event)
     * })
     * @property 通用 - 支持的base父类的事件类型
     * @property 通用 - 支持的父类的事件类型
     * @property load - 完成加载，执行所有内部处理后
     */
    type EventType = {
        通用: GraphicLayer.EventType;
        通用: GraphicLayer.EventType;
        load: string;
    };
}

/**
 * 加载展示 GeoJSON数据 的图层
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.url] - SDK标绘生产的geojson文件或服务url地址
 * @param [options.data] - SDK标绘生产的geojson格式规范数据对象，与url二选一即可。
 * @param [options.crs] - 原始数据的坐标系，如'EPSG:3857'
 * @param [options.format] - 可以对加载的geojson数据进行格式化或转换操作
 * @param [options.onCreateGraphic] - 解析geojson后，外部自定义方法来创建Graphic对象
 * @param [options.proxy] - 加载资源时要使用的代理服务url。
 * @param [options.templateValues] - 一个对象，用于替换Url中的模板值的键/值对
 * @param [options.queryParameters] - 一个对象，其中包含在检索资源时将发送的查询参数。比如：queryParameters: {'access_token': '123-435-456-000'}
 * @param [options.headers] - 一个对象，将发送的其他HTTP标头。比如：headers: { 'X-My-Header': 'valueOfHeader' }
 * @param [options.symbol] - 矢量数据的style样式,为Function时是完全自定义的回调处理 symbol(attr, style, feature)
 * @param [options.symbol.type] - 标识数据类型，默认是根据数据生成 point、polyline、polygon
 * @param options.symbol.styleOptions - Style样式，每种不同类型数据都有不同的样式，具体见各{@link GraphicType}矢量数据的style参数。
 * @param [options.symbol.styleField] - 按 styleField 属性设置不同样式。
 * @param [options.symbol.styleFieldOptions] - 按styleField值与对应style样式的键值对象。
 * @param [options.symbol.callback] - 自定义判断处理返回style ，示例：callback: function (attr, styleOpt){  return { color: "#ff0000" };  }
 * @param [options.buildings] - 标识当前图层为建筑物白膜类型数据
 * @param [options.buildings.bottomHeight] - 建筑物底部高度（如:0） 属性字段名称（如:{bottomHeight}）
 * @param [options.buildings.cloumn = 1] - 层数，楼的实际高度 = height*cloumn
 * @param [options.buildings.height = 3.5] - 层高的  固定层高数值（如:10） 或 属性字段名称（如:{height}）
 * @param [options.mask] - 标识是否绘制区域边界的反选遮罩层
 */
declare class GeoJsonLayer extends GraphicLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        url?: string;
        data?: any;
        crs?: string;
        format?: (...params: any[]) => any;
        onCreateGraphic?: (...params: any[]) => any;
        proxy?: string;
        templateValues?: any;
        queryParameters?: any;
        headers?: any;
        symbol?: {
            type?: GraphicType;
            styleOptions: any;
            styleField?: string;
            styleFieldOptions?: any;
            callback?: (...params: any[]) => any;
        };
        buildings?: {
            bottomHeight?: string;
            cloumn?: string;
            height?: string | number;
        };
        mask?: boolean | any;
    });
    /**
     * 加载新数据 或 刷新数据
     * @param [newOptions] - 新设定的参数，会与类的构造参数合并。
     * @param [newOptions.url] - geojson文件或服务url地址
     * @param [newOptions.data] - geojson格式规范数据对象，与url二选一即可。
     * @param [newOptions.类参数] - 包含当前类支持的所有参数
     * @param [newOptions.通用参数] - 包含父类支持的所有参数
     * @returns 当前对象本身，可以链式调用
     */
    load(newOptions?: {
        url?: string;
        data?: any;
        类参数?: any;
        通用参数?: BaseGraphicLayer.ConstructorOptions;
    }): this;
}

/**
 * 矢量数据图层组，主要用于 多图层的标绘
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 图层id标识
 * @param [options.pid = -1] - 图层父级的id，一般图层管理中使用
 * @param [options.name = '未命名'] - 图层名称
 * @param [options.show = true] - 图层是否显示
 * @param [options.center] - 图层自定义定位视角
 * @param [options.layers] - 子图层数组，每个子图层的配置见按各类型图层配置即可。
 */
declare class GraphicGroupLayer extends GroupLayer {
    constructor(options: {
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        center?: any;
        layers?: GraphicLayer[];
    });
    /**
     * 是否可以编辑
     */
    readonly hasEdit: boolean;
    /**
     * 当前激活的图层
     */
    selectedLayer: GraphicLayer;
    /**
     * 创建并添加指定名称的图层
     * @param name - 图层名称
     * @returns 创建完成的图层
     */
    createLayer(name: string): GraphicLayer;
    /**
     * 删除指定名称的图层
     * @param name - 图层名称
     * @returns 是否删除成功
     */
    deleteLayer(name: string): boolean;
    /**
     * 删除所有没有数据的矢量图层
     * @returns 当前对象本身，可以链式调用
     */
    deleteEmptyLayer(): this;
    /**
     * 移动矢量对象到新分组
     * @param graphic - 矢量对象
     * @param layer - 图层
     * @returns 无
     */
    moveToLayer(graphic: BaseGraphic, layer: GraphicLayer): void;
    /**
     * 获取图层内 所有矢量数据
     * @returns 矢量数据数组
     */
    getGraphics(): BaseGraphic[];
    /**
     * 根据id或uuid取矢量数据对象
     * @param id - 矢量数据id或uuid
     * @returns 矢量数据对象
     */
    getGraphicById(id: string | number): BaseGraphic;
    /**
     * 遍历所有矢量数据并将其作为参数传递给回调函数
     * @param method - 回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 当前对象本身,可以链式调用
     */
    eachGraphic(method: (...params: any[]) => any, context: any): this;
    /**
     * 清除图层内所有矢量数据
     * @param [hasDestory = false] - 是否释放矢量对象
     * @returns 无
     */
    clear(hasDestory?: boolean): void;
    /**
     * 将图层数据导出为GeoJSON格式规范对象。
     * @param [options] - 参数对象:
     * @param [options.noAlt] - 不导出高度值
     * @returns GeoJSON格式规范对象
     */
    toGeoJSON(options?: {
        noAlt?: boolean;
    }): any;
    /**
     * 加载转换GeoJSON格式规范数据为Graphic后加载到图层中。
     * @param geojson - GeoJSON格式规范数据
     * @param [options] - 加载控制参数,包含：
     * @param [options.clear = false] - 是否清除图层已有数据
     * @param [options.flyTo = false] - 是否加载完成后进行飞行到数据区域
     * @param [options.style] - 可以设置指定style样式
     * @param [options.layer] - 指定导入所有数据到指定的图层
     * @returns 转换后的Graphic对象数组
     */
    loadGeoJSON(geojson: string | any, options?: {
        clear?: boolean;
        flyTo?: boolean;
        style?: any;
        layer?: string;
    }): BaseGraphic[];
    /**
     * 开始绘制矢量数据，绘制的数据会加载在当前图层。
     * @param options - Graphic构造参数,包含：
     * @param options.type - 类型
     * @param [options.其他] - 按type支持{@link GraphicType}类的构造方法参数
     * @returns 创建完成的矢量数据对象
     */
    startDraw(options: {
        type: GraphicType;
        其他?: any;
    }): BaseGraphic;
    /**
     * 停止绘制，如有未完成的绘制会自动删除
     * @returns 当前对象本身,可以链式调用
     */
    stopDraw(): this;
    /**
     * 激活编辑，绑定相关处理，同 hasEdit=true
     * @returns 当前对象本身,可以链式调用
     */
    activateEdit(): this;
    /**
     * 释放编辑，解除绑定相关事件，同 hasEdit=false
     * @returns 当前对象本身,可以链式调用
     */
    disableEdit(): this;
}

declare namespace GraphicLayer {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * layer.on(mars3d.EventType.load, function (event) {
     *   console.log('矢量数据对象加载完成', event)
     * })
     * @property 通用 - 支持的父类的事件类型
     * @property addGraphic - 添加矢量数据时
     * @property removeGraphic - 移除矢量数据时
     * @property drawStart - 开始绘制 标绘事件
     * @property drawMouseMove - 正在移动鼠标中，绘制过程中鼠标移动了点 标绘事件
     * @property drawAddPoint - 绘制过程中增加了点 标绘事件
     * @property drawRemovePoint - 绘制过程中删除了最后一个点 标绘事件
     * @property drawCreated - 创建完成 标绘事件
     * @property editStart - 开始编辑 标绘事件
     * @property editMouseDown - 移动鼠标按下左键（LEFT_DOWN）标绘事件
     * @property editMouseMove - 正在移动鼠标中，正在编辑拖拽修改点中（MOUSE_MOVE） 标绘事件
     * @property editMovePoint - 编辑修改了点（LEFT_UP）标绘事件
     * @property editRemovePoint - 编辑删除了点 标绘事件
     * @property editStyle - 图上编辑修改了相关style属性 标绘事件
     * @property editStop - 停止编辑 标绘事件
     */
    type EventType = {
        通用: BaseGraphicLayer.EventType;
        addGraphic: string;
        removeGraphic: string;
        drawStart: string;
        drawMouseMove: string;
        drawAddPoint: string;
        drawRemovePoint: string;
        drawCreated: string;
        editStart: string;
        editMouseDown: string;
        editMouseMove: string;
        editMovePoint: string;
        editRemovePoint: string;
        editStyle: string;
        editStop: string;
    };
}

/**
 * 矢量数据图层
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.hasEdit = false] - 是否自动激活编辑（true时，单击后自动激活编辑）
 * @param [options.isAutoEditing = true] - 完成标绘时是否自动启动编辑(需要hasEdit:true时)
 * @param [options.isContinued = false] - 是否连续标绘
 * @param [options.isRestorePositions = false] - 在标绘和编辑结束时，是否将坐标还原为普通值，true: 停止编辑时会有闪烁，但效率要好些。
 * @param [options.data = null] - 需要自动加载的数据，内部自动生成Graphic对象。{@link GraphicUtil#.create}
 * @param options.clustering - 点数据时，设置聚合相关参数：
 * @param [options.clustering.enabled = false] - 是否开启聚合
 * @param [options.clustering.pixelRange = 20] - 多少像素矩形范围内聚合
 * @param [options.clustering.clampToGround = true] - 是否贴地
 * @param [options.clustering.radius = 26] - 内置样式时，圆形图标的半径大小（单位：像素）
 * @param [options.clustering.fontColor = '#ffffff'] - 内置样式时，数字的颜色
 * @param [options.clustering.color = 'rgba(181, 226, 140, 0.6)'] - 内置样式时，圆形图标的背景颜色
 * @param [options.clustering.opacity = 0.5] - 内置样式时，圆形图标的透明度
 * @param [options.clustering.borderWidth = 5] - 圆形图标的边框宽度（单位：像素），0不显示
 * @param [options.clustering.borderColor = 'rgba(110, 204, 57, 0.5)'] - 内置样式时，圆形图标的边框颜色
 * @param [options.clustering.borderOpacity = 0.6] - 内置样式时，圆形图标边框的透明度
 * @param [options.clustering.getImage] - 自定义聚合的图标样式，例如：getImage:function(count) { return image}
 * @param [options.stopPropagation = false] - 当前类中事件是否停止冒泡, false时：事件冒泡到map中。
 */
declare class GraphicLayer extends BaseGraphicLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        hasEdit?: boolean;
        isAutoEditing?: boolean;
        isContinued?: boolean;
        isRestorePositions?: boolean;
        data?: any | object[];
        clustering: {
            enabled?: boolean;
            pixelRange?: number;
            clampToGround?: boolean;
            radius?: number;
            fontColor?: string;
            color?: string;
            opacity?: number;
            borderWidth?: number;
            borderColor?: string;
            borderOpacity?: number;
            getImage?: (...params: any[]) => any;
        };
        stopPropagation?: boolean;
    });
    /**
     * 是否聚合(点数据时)
     */
    clustering: boolean;
    /**
     * 当加载Entity类型数据的内部Cesium容器 {@link BaseEntity}
     */
    readonly dataSource: Cesium.CustomDataSource;
    /**
     * 当加载普通 primitive类型数据的内部Cesium容器 {@link BasePrimitive}
     */
    primitiveCollection: Cesium.PrimitiveCollection;
    /**
     * 当加载 DivGraphic 数据的内部DOM容器 {@link DivGraphic}
     */
    readonly container: Element;
    /**
     * 当加载 DivGraphic 数据的DIV是否可以鼠标交互，为false时可以穿透操作及缩放地图，但无法进行鼠标交互及触发相关事件。
     */
    pointerEvents: boolean;
    /**
     * 是否可以调整图层顺序（在同类型图层间）
     */
    readonly hasZIndex: boolean;
    /**
     * 图层顺序，数字大的在上面。（当hasZIndex为true时）
     */
    zIndex: number;
    /**
     * 图层内的Graphic矢量数据个数
     */
    readonly length: number;
    /**
     * 图层内的Graphic集合对象
     */
    readonly graphics: BaseGraphic[];
    /**
     * 是否自动激活编辑（true时，单击后自动激活编辑）
     */
    readonly hasEdit: boolean;
    /**
     * 是否正在编辑状态
     */
    readonly isEditing: boolean;
    /**
     * 对象从地图上移除的创建钩子方法，
     * 每次remove时都会调用
     * @returns 无
     */
    _removedHook(): void;
    /**
     * 将图层数据导出为GeoJSON格式规范对象。
     * @param [options] - 参数对象:
     * @param [options.noAlt] - 不导出高度值
     * @returns GeoJSON格式规范对象
     */
    toGeoJSON(options?: {
        noAlt?: boolean;
    }): any;
    /**
     * 加载转换GeoJSON格式规范数据为Graphic后加载到图层中。
     * @param geojson - GeoJSON格式规范数据
     * @param [options] - 加载控制参数,包含：
     * @param [options.clear = false] - 是否清除图层已有数据
     * @param [options.flyTo = false] - 是否加载完成后进行飞行到数据区域
     * @param [options.style] - 可以设置指定style样式
     * @returns 转换后的Graphic对象数组
     */
    loadGeoJSON(geojson: string | any, options?: {
        clear?: boolean;
        flyTo?: boolean;
        style?: any;
    }): BaseGraphic[];
    /**
     * 添加Graphic矢量数据
     * @param graphic - 矢量数据
     * @returns 添加后的Graphic对象
     */
    addGraphic(graphic: BaseGraphic | BaseGraphic[]): BaseGraphic | BaseGraphic[];
    /**
     * 移除Graphic矢量数据
     * @param graphic - 矢量数据
     * @param [hasDestory = false] - 是否释放矢量对象
     * @returns 当前对象本身，可以链式调用
     */
    removeGraphic(graphic: BaseGraphic, hasDestory?: boolean): this;
    /**
     * 根据id或uuid取矢量数据对象
     * @param id - 矢量数据id或uuid
     * @returns 矢量数据对象
     */
    getGraphicById(id: string | number): BaseGraphic;
    /**
     * 根据 指定属性 获取 单个矢量数据对象（多个匹配时取首个）
     * @param attrName - 属性名称值（如id、name等）
     * @param attrVal - 属性值
     * @returns 矢量数据对象
     */
    getGraphicByAttr(attrName: any | string | number, attrVal: string): BaseGraphic;
    /**
     * 根据 指定属性 获取  矢量数据对象 数组
     * @param attrName - 属性名称值（如id、name等）
     * @param attrVal - 属性值
     * @returns 矢量数据对象
     */
    getGraphicsByAttr(attrName: any | string | number, attrVal: string): BaseGraphic[];
    /**
     * 遍历所有矢量数据并将其作为参数传递给回调函数
     * @param method - 回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 当前对象本身,可以链式调用
     */
    eachGraphic(method: (...params: any[]) => any, context: any): this;
    /**
     * 获取图层内 所有矢量数据
     * @returns 矢量数据数组
     */
    getGraphics(): BaseGraphic[];
    /**
     * 清除图层内所有矢量数据
     * @param [hasDestory = false] - 是否释放矢量对象
     * @returns 无
     */
    clear(hasDestory?: boolean): void;
    /**
     * 异步计算更新坐标进行贴地(或贴模型)
     * @param [options = {}] - 参数对象:
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @param options.endItem - 异步计算高度完成后 的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    clampToGround(options?: {
        has3dtiles?: boolean;
        objectsToExclude?: object[];
        callback: (...params: any[]) => any;
        endItem: (...params: any[]) => any;
    }): this;
    /**
     * 开始绘制矢量数据，绘制的数据会加载在当前图层。
     * @param options - Graphic构造参数,包含：
     * @param options.type - 类型
     * @param [options.其他] - 按type支持 {@link GraphicType} 类的构造方法参数
     * @returns 创建完成的矢量数据对象
     */
    startDraw(options: {
        type: GraphicType;
        其他?: any;
    }): BaseGraphic;
    /**
     * 停止绘制，如有未完成的绘制会自动删除
     * @returns 当前对象本身,可以链式调用
     */
    stopDraw(): this;
    /**
     * 完成绘制和编辑，如有未完成的绘制会自动完成。
     * 在移动端需要调用此方法来类似PC端双击结束。
     * @returns 当前对象本身,可以链式调用
     */
    endDraw(): this;
    /**
     * 激活编辑，绑定相关处理，同 hasEdit=true
     * @returns 当前对象本身,可以链式调用
     */
    activateEdit(): this;
    /**
     * 释放编辑，解除绑定相关事件，同 hasEdit=false
     * @returns 当前对象本身,可以链式调用
     */
    disableEdit(): this;
    /**
     * 激活编辑指定的矢量数据
     * @param graphic - 需要激活编辑的矢量数据
     * @param [event] - 内部使用，传递事件
     * @returns 当前对象本身,可以链式调用
     */
    startEditing(graphic: BaseGraphic, event?: any): this;
    /**
     * 停止编辑，释放正在编辑的对象。
     * @param [graphic] - 需要停止编辑的矢量数据，默认为上一次正在编辑的对象
     * @returns 当前对象本身,可以链式调用
     */
    stopEditing(graphic?: BaseGraphic): this;
    /**
     * 飞行定位至图层数据所在的视角
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 当前对象本身，可以链式调用
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): this;
}

/**
 * 经纬网
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.lineStyle] - 线的样式
 * @param [options.labelStyle] - 文本的样式
 * @param [options.numLines = 10] - 网格数
 */
declare class GraticuleLayer extends BaseLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        lineStyle?: PolylinePrimitive.StyleOptions;
        labelStyle?: LabelEntity.StyleOptions;
        numLines?: number;
    });
    /**
     * 对象添加到地图前创建一些对象的钩子方法，
     * 只会调用一次
     * @returns 无
     */
    _mountedHook(): void;
}

declare namespace LodGraphicLayer {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * layer.on(mars3d.EventType.addGraphic, function (event) {
     *   console.log('添加了矢量数据', event)
     * })
     * @property 通用 - 支持的父类的事件类型
     * @property addGraphic - 添加矢量数据时
     * @property removeGraphic - 移除矢量数据时
     */
    type EventType = {
        通用: BaseGraphicLayer.EventType;
        addGraphic: string;
        removeGraphic: string;
    };
}

/**
 * 矢量数据LOD分层分块加载类
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.IdField = 'id'] - 数据中唯一标识的属性字段名称
 * @param options.queryGridData - 获取网格内对应数据的的外部处理回调方法
 * @param options.createGraphic - 根据数据创建矢量对象的外部处理回调方法
 * @param options.updateGraphic - 根据数据更新矢量对象的外部处理回调方法，一般动态数据时可以用
 * @param options.debuggerTileInfo - 是否开启测试显示瓦片信息
 * @param [options.minimumLevel = 0] - 图层所支持的最低层级，当地图小于该级别时，平台不去请求服务数据。【影响效率的重要参数】
 * @param [options.maximumLevel] - 图层所支持的最大层级,当地图大于该级别时，平台不去请求服务数据。
 * @param options.rectangle - 瓦片数据的矩形区域范围
 * @param options.rectangle.xmin - 最小经度值, -180 至 180
 * @param options.rectangle.xmax - 最大纬度值, -180 至 180
 * @param options.rectangle.ymin - 最小纬度值, -90 至 90
 * @param options.rectangle.ymax - 最大纬度值, -90 至 90
 * @param options.bbox - bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可。
 * @param options.clustering - 设置聚合相关参数：
 * @param [options.clustering.enabled = false] - 是否开启聚合
 * @param [options.clustering.pixelRange = 20] - 多少像素矩形范围内聚合
 * @param [options.clustering.clampToGround = true] - 是否贴地
 * @param [options.clustering.radius = 28] - 圆形图标的整体半径大小（单位：像素）
 * @param [options.clustering.radiusIn = radius-5] - 圆形图标的内圆半径大小（单位：像素）
 * @param [options.clustering.fontColor = '#ffffff'] - 数字的颜色
 * @param [options.clustering.color = 'rgba(181, 226, 140, 0.6)'] - 圆形图标的背景颜色，默认自动处理
 * @param [options.clustering.colorIn = 'rgba(110, 204, 57, 0.5)'] - 圆形图标的内圆背景颜色，默认自动处理
 * @param [options.symbol] - 矢量数据的style样式,为Function时是完全自定义的回调处理 symbol(attr, style, feature)
 * @param options.symbol.styleOptions - 点数据时的Style样式，可以附加 model {@link ModelEntity.StyleOptions} 或 point {@link PointEntity.StyleOptions}
 * @param options.symbol.styleOptions - 线数据时的Style样式，可以附加 corridor {@link CorridorEntity.StyleOptions}
 * @param options.symbol.styleOptions - 面数据时的Style样式
 * @param [options.symbol.styleField] - 按 styleField 属性设置不同样式。
 * @param [options.symbol.styleFieldOptions] - 按styleField值与对应style样式的键值对象。
 * @param [options.symbol.callback] - 自定义判断处理返回style ，示例：callback: function (attr, styleOpt){  return { color: "#ff0000" };  }
 */
declare class LodGraphicLayer extends GraphicLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        IdField?: string;
        queryGridData: (...params: any[]) => any;
        createGraphic: (...params: any[]) => any;
        updateGraphic: (...params: any[]) => any;
        debuggerTileInfo: boolean;
        minimumLevel?: number;
        maximumLevel?: number;
        rectangle: {
            xmin: number;
            xmax: number;
            ymin: number;
            ymax: number;
        };
        bbox: Number[];
        clustering: {
            enabled?: boolean;
            pixelRange?: number;
            clampToGround?: boolean;
            radius?: number;
            radiusIn?: number;
            fontColor?: string;
            color?: string;
            colorIn?: string;
        };
        symbol?: {
            styleOptions: PolygonEntity.StyleOptions;
            styleOptions: PolygonEntity.StyleOptions;
            styleOptions: PolygonEntity.StyleOptions;
            styleField?: string;
            styleFieldOptions?: any;
            callback?: (...params: any[]) => any;
        };
    });
    /**
     * 根据LOD分块信息去请求对应的Tile瓦块内的数据
     * @param grid - 瓦片信息对象
     * @param callback - 数据获取完成后调用该回调方法。如:callback(grid, arrdata)
     * @returns 无
     */
    queryGridData(grid: any, callback: (...params: any[]) => any): void;
    /**
     * 根据 attr属性 创建 矢量对象
     * @param grid - 瓦片信息对象
     * @param attr - 数据的属性信息
     * @returns 矢量对象
     */
    createGraphic(grid: any, attr: any): Graphic;
    /**
     * 根据 attr属性 更新 矢量对象，主要是属性是动态变化的场景下使用。
     * @param graphic - 矢量对象
     * @param attr - 数据的属性信息
     * @returns 无
     */
    updateGraphic(graphic: Graphic, attr: any): void;
    /**
     * 清除图层内所有矢量数据
     * @param [hasDestory = false] - 是否释放矢量对象
     * @returns 无
     */
    clear(hasDestory?: boolean): void;
    /**
     * 重新加载数据
     * @returns 无
     */
    reload(): void;
}

/**
 * gltf小模型图层
 * @example
 * //方式1：单个模型时，直接按下面传入position即可
 * let gltfLayer = new mars3d.layer.ModelLayer({
 *   name: '上海浦东',
 *   url: 'http://data.mars3d.cn/gltf/mars/shanghai/scene.gltf',
 *   style: { scale: 520, heading: 215 }, //style同标绘的model类型
 *   position: [121.507762, 31.233975, 200],
 * })
 * map.addLayer(gltfLayer)
 *
 * //方式2：多个模型时，可以传入data属性构造
 * let gltfLayer = new mars3d.layer.ModelLayer({
 *   name: '骨骼动画',
 *   data: [
 *     {
 *       url: 'http://data.mars3d.cn/gltf/mars/fengche.gltf',
 *       position: [117.170624, 31.840666, 278.66],
 *       style: { scale: 200, heading: 270 },
 *     },
 *     {
 *       url: 'http://data.mars3d.cn/gltf/mars/firedrill/xiaofangyuan-run.gltf',
 *       position: [117.184442, 31.842172, 33.92],
 *       style: { scale: 300 },
 *     },
 *   ],
 * })
 * map.addLayer(gltfLayer)
 *
 *
 * //方式3： 多个同属性(url和style完全相同)模型时，可以直接简化，传入positions属性。
 * let gltfLayer = new mars3d.layer.ModelLayer({
 *   name: '风力发电机',
 *   url: 'http://data.mars3d.cn/gltf/mars/fengche.gltf',
 *   style: { scale: 40, heading: 135, minimumPixelSize: 30, clampToGround: true },
 *   positions: [
 *     { lng: 112.227630577, lat: 39.0613382363999, alt: 1815 },
 *     { lng: 112.229302206, lat: 39.0579481036999, alt: 1827 },
 *     { lng: 112.226596341, lat: 39.0584773033999, alt: 1849 },
 *   ],
 * })
 * map.addLayer(gltfLayer)
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param options.url - 【方式1】模型的url地址
 * @param options.position - 模型所在位置坐标
 * @param options.style - 模型的样式配置
 * @param options.data - 【方式2】多个模型时，可以传入data数组构造：
 * @param options.data.url - 模型的url地址
 * @param options.data.position - 模型所在位置坐标
 * @param options.data.style - 模型的样式配置
 * @param options.positions - 【方式3】多个同属性(url和style完全相同)模型时，可以直接简化，传入positions属性。
 * @param [options.hasEdit = false] - 是否可编辑
 * @param [options.isAutoEditing = true] - 完成标绘时是否自动启动编辑(需要hasEdit:true时)
 * @param [options.isContinued = false] - 是否连续标绘
 */
declare class ModelLayer extends GraphicLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        url: string;
        position: LatLngPoint | Cesium.Cartesian3;
        style: any;
        data: {
            url: string;
            position: LatLngPoint | Cesium.Cartesian3;
            style: any;
        }[];
        positions: LatLngPointp[] | Cesium.Cartesian3[];
        hasEdit?: boolean;
        isAutoEditing?: boolean;
        isContinued?: boolean;
    });
    /**
     * 加载gltf模型数据的内部Cesium容器
     */
    readonly layer: Cesium.CustomDataSource;
}

/**
 * OSM在线 建筑物模型
 * @param options - 参数对象， 构造参数建议从{@link http://mars3d.cn/example/g20_3dtiles_edit.html|模型编辑页面}设置后保存参数后拷贝json参数即可。参数包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.style] - 模型样式， 使用{@link https://github.com/CesiumGS/3d-tiles/tree/master/specification/Styling|3D Tiles Styling language}.
 * @param [options.highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式
 * @param [options.highlight.type] - 鼠标移入高亮 或 单击高亮(type:'click')
 * @param [options.highlight.color = '#FFFF00'] - 颜色，支持rgba字符串
 * @param [options.highlight.opacity = 1.0] - 透明度
 */
declare class OsmBuildingsLayer extends TilesetLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        style?: any | Cesium.Cesium3DTileStyle;
        highlight?: {
            type?: string;
            color?: string;
            opacity?: number;
        };
    });
}

declare namespace TilesetLayer {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * layer.on(mars3d.EventType.load, function (event) {
     *   console.log('矢量数据对象加载完成', event)
     * })
     * @property 通用 - 支持的父类的事件类型
     * @property initialTilesLoaded - 3dtiles模型，模型瓦片初始化完成 该回调只执行一次
     * @property allTilesLoaded - 3dtiles模型
     * @property loadBefore - 完成加载，但未做任何其他处理前
     * @property load - 完成加载，执行所有内部处理后
     */
    type EventType = {
        通用: BaseGraphicLayer.EventType;
        initialTilesLoaded: string;
        allTilesLoaded: string;
        loadBefore: string;
        load: string;
    };
}

/**
 * 3dtiles 三维模型图层。
 * @param options - 参数对象， 构造参数建议从{@link http://mars3d.cn/example/g20_3dtiles_edit.html|模型编辑页面}设置后保存参数后拷贝json参数即可。参数包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param options.url - tileset的主JSON文件的 url
 * @param [options.maximumScreenSpaceError = 16] - 用于驱动细化细节级别的最大屏幕空间错误。数值加大，能让最终成像变模糊
 * @param [options.maximumMemoryUsage = 512] - 数据集可以使用的最大内存量(以MB计)。这个参数默认是512，也即是当几何体和纹理资源大于512MB的时候，Cesium就会淘汰掉当前帧中没有visited的所有块，这个值其实很小，也是cesium为了避免资源占用过高的一个保障，不过上述我们也估算过最差情况下，没有做纹理crn压缩的情况下，这个值很容易被超过，导致很多人误以为cesium的淘汰没有效果。这个值如果设置的过小，导致cesium几乎每帧都在尝试淘汰数据，增加了遍历的时间，也同时增加了崩溃的风险。这个值如果设置的过大，cesium的淘汰机制失效，那么容易导致显存超过显卡内存，也会导致崩溃。 这个值应该处于最差视角下资源占用 和 显存最大量之间。结论：这个参数要根据当前显卡显存来配置，如果我们场景只显示这一个模型数据，这个可以设置到显存的50 % 左右，比如我的显存是6G，这个可以设置到3000左右。那么既保证不超过显存限制，又可以最大利用显存缓存，配合crn压缩之后，这个几乎可以保证你第二次查看模型同一位置的时候，看不到加载过程，非常棒。
 * @param [options.shadows = ShadowMode.ENABLED] - 确定tileset是否投射或接收来自光源的阴影。
 * @param [options.cullWithChildrenBounds = true] - 优化选择。是否使用子绑定卷的并集来筛选贴图。
 * @param [options.cullRequestsWhileMoving = true] - 优化选择。不要要求贴图，当他们回来的时候可能不会使用，因为相机的运动。这个优化只适用于固定瓷砖组。
 * @param [options.cullRequestsWhileMovingMultiplier = 60.0] - 优化选择。在移动时选择请求时使用的倍增器。越大的选择性越强，越小的选择性越弱。值越小能够更快的剔除。
 * @param [options.preloadWhenHidden = false] - 当true时，tileset.show是false，也去预加载数据。
 * @param [options.preloadFlightDestinations = true] - 优化选择。当摄像机在飞行时，在摄像机的飞行目的地预加载贴图。
 * @param [options.preferLeaves = false] - 优化选择。最好先加载上叶子节点数据。这个参数默认是false，同等条件下，叶子节点会优先加载。但是Cesium的tile加载优先级有很多考虑条件，这个只是其中之一，如果skipLevelOfDetail=false，这个参数几乎无意义。所以要配合skipLevelOfDetail=true来使用，此时设置preferLeaves=true。这样我们就能最快的看见符合当前视觉精度的块，对于提升大数据以及网络环境不好的前提下有一点点改善意义。
 * @param [options.dynamicScreenSpaceError = false] - 优化选择。减少远离摄像头的贴图的屏幕空间误差。true时会在真正的全屏加载完之后才清晰化模型.
 * @param [options.dynamicScreenSpaceErrorDensity = 0.00278] - 密度用来调整动态画面空间误差，类似于雾密度。
 * @param [options.dynamicScreenSpaceErrorFactor = 4.0] - 用于增加计算的动态屏幕空间误差的因素。
 * @param [options.dynamicScreenSpaceErrorHeightFalloff = 0.25] - 瓷砖密度开始下降时的高度之比。
 * @param [options.progressiveResolutionHeightFraction = 0.3] - 优化选择。如果在(0.0,0.5)之间，在屏幕空间或以上的瓷砖错误降低屏幕分辨率 <code>progressiveResolutionHeightFraction*screenHeight</code> 将优先。这可以帮助得到一个快速层的瓷砖下来，而全分辨率的瓷砖继续加载。
 * @param [options.foveatedScreenSpaceError = true] - 优化选择。通过暂时提高屏幕边缘的贴图的屏幕空间误差，优先加载屏幕中央的贴图。一旦所有由{@link cesium3dtilesset#foveatedConeSize}确定的屏幕中央的贴图被加载，屏幕空间错误就会恢复正常。
 * @param [options.foveatedConeSize = 0.1] - 优化选择。当{@link cesium3dtilesset#foveatedScreenSpaceError}为true时使用，以控制决定哪些贴图被延迟的锥大小。装在这个圆锥体里的瓷砖会立即被装入。锥外的贴图有可能被延迟，这取决于它们在锥外的距离和它们的屏幕空间误差。这是由{@link Cesium3DTileset#foveatedInterpolationCallback}和{@link Cesium3DTileset#foveatedMinimumScreenSpaceErrorRelaxation}控制的。设置为0.0意味着圆锥将是由相机位置和它的视图方向形成的线。将此设置为1.0意味着圆锥将包含相机的整个视场，禁用此效果。
 * @param [options.foveatedMinimumScreenSpaceErrorRelaxation = 0.0] - 优化选择。当{@link cesium3dtilesset#foveatedScreenSpaceError}为true时使用，以控制中心锥形以外的贴图的初始屏幕空间误差松弛。屏幕空间错误将基于所提供的{@link Cesium3DTileset#foveatedInterpolationCallback}从tileset值开始直到{@link Cesium3DTileset#maximumScreenSpaceError}。
 * @param [options.foveatedInterpolationCallback = Math.lerp] - 优化选择。当{@link cesium3dtilesset#foveatedScreenSpaceError}为true时使用，以控制中心锥形以外的贴图的初始屏幕空间误差松弛。优化选择。当{@link Cesium3DTileset#foveatedScreenSpaceError}为true时使用，以控制凸出圆锥外的贴图的屏幕空间误差提高多少，插值在{@link Cesium3DTileset#foveatedminimumscreenspaceerror}和{@link Cesium3DTileset#maximumScreenSpaceError}之间。
 * @param [options.foveatedTimeDelay = 0.2] - 优化选择。当{@link cesium3dtilesset#foveatedScreenSpaceError}为true时使用，以控制中心锥形以外的贴图的初始屏幕空间误差松弛。优化选择。优化选择。当{@link cesium3dtilesset#foveatedScreenSpaceError}为true时使用，以控制在延迟tile开始加载前摄像机停止移动后等待多长时间(秒)。这个时间延迟阻止了在相机移动时请求屏幕边缘的贴图。将此设置为0.0将立即请求任何给定视图中的所有贴图。
 * @param [options.skipLevelOfDetail = false] - 优化选择。确定在遍历过程中是否应应用跳过详细信息的级别。是Cesium在1.5x 引入的一个优化参数，这个参数在金字塔数据加载中，可以跳过一些级别，这样整体的效率会高一些，数据占用也会小一些。但是带来的异常是：1） 加载过程中闪烁，看起来像是透过去了，数据载入完成后正常。2，有些异常的面片，这个还是因为两级LOD之间数据差异较大，导致的。当这个参数设置false，两级之间的变化更平滑，不会跳跃穿透，但是清晰的数据需要更长，而且还有个致命问题，一旦某一个tile数据无法请求到或者失败，导致一直不清晰。所以我们建议：对于网络条件好，并且数据总量较小的情况下，可以设置false，提升数据显示质量。
 * @param [options.baseScreenSpaceError = 1024] - 当skipLevelOfDetail为true时，跳过详细级别之前必须达到的屏幕空间错误。
 * @param [options.skipScreenSpaceErrorFactor = 16] - 当skipLevelOfDetail = true时，一个定义要跳过的最小屏幕空间错误的乘法器。与skipLevels一起使用，以决定加载哪些贴图。
 * @param [options.skipLevels = 1] - 当skipLevelOfDetail是true，一个常量定义了加载tiles时要跳过的最小级别数。当它为0时，不会跳过任何级别。与skipScreenSpaceErrorFactor一起使用，以决定加载哪些贴图。
 * @param [options.immediatelyLoadDesiredLevelOfDetail = false] - 当skipLevelOfDetail为true时，只有满足最大屏幕空间错误的tiles才会被下载。跳过因素将被忽略，并且只加载所需的块。
 * @param [options.loadSiblings = false] - 当skipLevelOfDetail = true时，判断遍历过程中是否总是下载可见块的兄弟块。如果为true则不会在已加载完模型后，自动从中心开始超清化模型。
 * @param [options.clippingPlanes] - {@link ClippingPlaneCollection}用于选择性地禁用tile集的渲染。
 * @param [options.classificationType] - 确定地形、3D贴图或两者都将被这个贴图集分类。有关限制和限制的详细信息，请参阅{@link cesium3dtilesset #classificationType}。
 * @param [options.pointCloudShading] - 基于几何误差和光照构造一个{@link PointCloudShading}对象来控制点衰减的选项。
 * @param [options.imageBasedLightingFactor = new Cartesian2(1.0, 1.0)] - 缩放来自地球、天空、大气和星星天空盒的漫反射和高光图像照明。
 * @param [options.lightColor] - 光的颜色当遮光模型。当undefined场景的浅色被使用代替。
 * @param [options.luminanceAtZenith = 0.2] - 太阳在天顶的亮度，单位是千坎德拉每平方米，用于这个模型的程序环境地图。
 * @param [options.sphericalHarmonicCoefficients] - 三阶球面调和系数用于基于图像的漫射色彩照明。
 * @param [options.specularEnvironmentMaps] - 一个KTX文件的URL，该文件包含高光照明的立方体映射和复杂的高光mipmaps。
 * @param [options.backFaceCulling = true] - 是否剔除面向背面的几何图形。当为真时，背面剔除由glTF材质的双面属性决定;当为false时，禁用背面剔除。
 * @param [options.debugHeatmapTilePropertyName] - 是否剔除面向背面的几何图形。当为真时，背面剔除由glTF材质的双面属性决定;作为热图着色的tile变量。所有渲染的贴图都将相对于其他指定的变量值着色。
 * @param [options.pickPrimitive] - 要在拾取过程中呈现的原语，而不是tile集合。
 * @param [options.position] - 模型新的中心点位置（移动模型）
 * @param options.position.lng - 经度值, 180 - 180
 * @param options.position.lat - 纬度值, -90 - 90
 * @param options.position.alt - 高度值（单位：米）
 * @param [options.rotation] - 模型的旋转方向
 * @param options.rotation.x - X方向，角度值0-360
 * @param options.rotation.y - Y方向，角度值0-360
 * @param options.rotation.z - 四周方向，角度值0-360
 * @param [options.scale = 1] - 缩放比例
 * @param [options.axis = ''] - 轴方向
 * @param [options.modelMatrix] - 模型的矩阵位置，内部无坐标位置的模型使用，此时position和rotation等参数均无效。
 * @param [options.updateMatrix] - 外部自定义修复模型矩阵位置
 * @param [options.chinaCRS] - 标识模型的国内坐标系（用于自动纠偏或加偏）
 * @param [options.style] - 模型样式， 使用{@link https://github.com/CesiumGS/3d-tiles/tree/master/specification/Styling|3D Tiles Styling language}.
 * @param [options.marsJzwStyle = false] - 开启或设置建筑物特效样式。
 * @param [options.highlight] - 鼠标移入或单击(type:'click')后的对应高亮的部分样式
 * @param [options.highlight.type] - 鼠标移入高亮 或 单击高亮(type:'click')
 * @param [options.highlight.color = '#FFFF00'] - 颜色，支持rgba字符串
 * @param [options.highlight.opacity = 1.0] - 透明度
 * @param [options.clampToGround] - 是否贴地,true时自动调用贴地计算，但此属性只适合标准的与地形数据匹配的模型，并不精确，建议通过模型编辑页面调试给具体高度值。
 */
declare class TilesetLayer extends BaseGraphicLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        url: Resource | string;
        maximumScreenSpaceError?: number;
        maximumMemoryUsage?: number;
        shadows?: ShadowMode;
        cullWithChildrenBounds?: boolean;
        cullRequestsWhileMoving?: boolean;
        cullRequestsWhileMovingMultiplier?: number;
        preloadWhenHidden?: boolean;
        preloadFlightDestinations?: boolean;
        preferLeaves?: boolean;
        dynamicScreenSpaceError?: boolean;
        dynamicScreenSpaceErrorDensity?: number;
        dynamicScreenSpaceErrorFactor?: number;
        dynamicScreenSpaceErrorHeightFalloff?: number;
        progressiveResolutionHeightFraction?: number;
        foveatedScreenSpaceError?: boolean;
        foveatedConeSize?: number;
        foveatedMinimumScreenSpaceErrorRelaxation?: number;
        foveatedInterpolationCallback?: Cesium3DTileset.foveatedInterpolationCallback;
        foveatedTimeDelay?: number;
        skipLevelOfDetail?: boolean;
        baseScreenSpaceError?: number;
        skipScreenSpaceErrorFactor?: number;
        skipLevels?: number;
        immediatelyLoadDesiredLevelOfDetail?: boolean;
        loadSiblings?: boolean;
        clippingPlanes?: ClippingPlaneCollection;
        classificationType?: ClassificationType;
        pointCloudShading?: any;
        imageBasedLightingFactor?: Cartesian2;
        lightColor?: Cartesian3;
        luminanceAtZenith?: number;
        sphericalHarmonicCoefficients?: Cartesian3[];
        specularEnvironmentMaps?: string;
        backFaceCulling?: boolean;
        debugHeatmapTilePropertyName?: string;
        pickPrimitive?: any;
        position?: {
            lng: number;
            lat: number;
            alt: number;
        };
        rotation?: {
            x: number;
            y: number;
            z: number;
        };
        scale?: number;
        axis?: string | Cesium.Axis;
        modelMatrix?: Cesium.Matrix4;
        updateMatrix?: (...params: any[]) => any;
        chinaCRS?: ChinaCRS;
        style?: any | Cesium.Cesium3DTileStyle | ((...params: any[]) => any);
        marsJzwStyle?: boolean | string;
        highlight?: {
            type?: string;
            color?: string;
            opacity?: number;
        };
        clampToGround?: boolean;
    });
    /**
     * 原始的旋转角度，示例：{ x: 0, y: 0, z: 0 }
     */
    readonly orginRotation: any;
    /**
     * 模型对应的 Cesium3DTileset对象
     */
    readonly tileset: Cesium.Cesium3DTileset;
    /**
     * 鼠标移入或单击(type:'click')后的对应高亮的部分样式,空值时不高亮
     */
    readonly highlight: any;
    /**
     * 开启或设置建筑物特效样式。
     */
    marsJzwStyle: boolean | any;
    /**
     * 模型样式，
     * 使用{@link https://github.com/CesiumGS/3d-tiles/tree/master/specification/Styling|3D Tiles Styling language}.
     */
    style: any | Cesium.Cesium3DTileStyle | ((...params: any[]) => any);
    /**
     * 模型原始的中心点坐标
     */
    readonly orginCenterPoint: LatLngPoint;
    /**
     * 模型原始的中心点坐标 （笛卡尔坐标）
     */
    readonly orginCenterPosition: Cesium.Cartesian3;
    /**
     * 模型当前中心点坐标 （笛卡尔坐标）
     */
    readonly position: Cesium.Cartesian3;
    /**
     * 模型当前中心点坐标
     */
    center: LatLngPoint;
    /**
     * 调整修改模型高度
     */
    height: LatLngPoint;
    /**
     * 旋转方向，示例：{ x: 0, y: 0, z: 0 }
     */
    rotation: any;
    /**
     * X轴上的旋转方向
     */
    rotation_x: number;
    /**
     * Y轴上的旋转方向
     */
    rotation_y: number;
    /**
     * Z轴上的旋转方向
     */
    rotation_z: number;
    /**
     * 轴方向
     */
    axis: string | Cesium.Axis;
    /**
     * 缩放比例
     */
    scale: number;
    /**
     * 模型自动贴地计算及处理,
     * 因为模型在设计或生产时，模型的视角中心位置不一定在0,0,0点，此方法不是唯一准确的。
     * @param [addHeight = 1] - 计算完成的贴地高度基础上增加的高度值。
     * @returns 无
     */
    clampToGround(addHeight?: number): void;
    /**
     * 重新计算当前矩阵（需要是否存在世界矩阵时）
     * @returns 计算完成的矩阵
     */
    updateMatrix(): Cesium.Matrix4 | undefined;
    /**
     * 重新计算当前矩阵，普通方式, 此种方式[x，y不能多次更改]
     * @returns 计算完成的矩阵
     */
    updateMatrix2(): Cesium.Matrix4;
    /**
     * 获取构件节点位置，现对于原始矩阵变化后的新位置
     * @param position - 原始位置
     * @returns 新位置
     */
    getPositionByOrginMatrix(position: Cesium.Cartesian3): Cesium.Cartesian3;
    /**
     * 设置透明度
     * @param value - 透明度
     * @returns 无
     */
    setOpacity(value: number): void;
    /**
     * 设置自定义Shader到Feature上
     * @param customShader - Shader代码
     * @returns 当前图层本身图层
     */
    setCustomShader(customShader: string): TilesetLayer;
    /**
     * 设置属性信息到Feature上
     * @param idField - 数据中唯一标识的属性字段名称
     * @param properties - 属性值数组
     * @returns 当前图层本身图层
     */
    setProperties(idField: string, properties: object[]): TilesetLayer;
    /**
     * 高亮对象。
     * @param [highlightStyle] - 高亮的样式，具体见各{@link GraphicType}矢量数据的style参数。
     * @returns 无
     */
    openHighlight(highlightStyle?: any): void;
    /**
     * 清除已选中的高亮
     * @returns 无
     */
    closeHighlight(): void;
    /**
     * 绑定鼠标单击对象后的弹窗。
     * @param content - 弹窗内容html字符串，或者回调方法。
     * @param options - 控制参数
     * @returns 当前对象本身，可以链式调用
     */
    bindPopup(content: string | any[] | ((...params: any[]) => any), options: Popup.StyleOptions): this;
    /**
     * 飞行定位至图层数据所在的视角
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 当前对象本身，可以链式调用
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): this;
}

/**
 * WFS图层
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param options.url - WFS服务地址
 * @param options.layer - 图层名称（命名空间:图层名称），多个图层名称用逗号隔开
 * @param [options.parameters] - 要在URL中 传递给WFS服务GetFeature请求的其他参数。
 * @param [options.headers] - 将被添加到HTTP请求头。
 * @param [options.proxy] - 加载资源时使用的代理。
 * @param [options.IdField = 'id'] - 数据中唯一标识的属性字段名称
 * @param options.debuggerTileInfo - 是否开启测试显示瓦片信息
 * @param [options.minimumLevel = 0] - 图层所支持的最低层级，当地图小于该级别时，平台不去请求服务数据。【影响效率的重要参数】
 * @param [options.maximumLevel] - 图层所支持的最大层级,当地图大于该级别时，平台不去请求服务数据。
 * @param options.rectangle - 瓦片数据的矩形区域范围
 * @param options.rectangle.xmin - 最小经度值, -180 至 180
 * @param options.rectangle.xmax - 最大纬度值, -180 至 180
 * @param options.rectangle.ymin - 最小纬度值, -90 至 90
 * @param options.rectangle.ymax - 最大纬度值, -90 至 90
 * @param options.bbox - bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可。
 * @param options.debuggerTileInfo - 是否开启测试显示瓦片信息
 * @param [options.buildings] - 标识当前图层为建筑物白膜类型数据
 * @param [options.buildings.bottomHeight] - 建筑物底部高度（如:0） 属性字段名称（如:{bottomHeight}）
 * @param [options.buildings.cloumn = 1] - 层数，楼的实际高度 = height*cloumn
 * @param [options.buildings.height = 3.5] - 层高的  固定层高数值（如:10） 或 属性字段名称（如:{height}）
 * @param options.clustering - 设置聚合相关参数[entity点类型时]：
 * @param [options.clustering.enabled = false] - 是否开启聚合
 * @param [options.clustering.pixelRange = 20] - 多少像素矩形范围内聚合
 * @param [options.clustering.clampToGround = true] - 是否贴地
 * @param [options.clustering.radius = 28] - 圆形图标的整体半径大小（单位：像素）
 * @param [options.clustering.radiusIn = radius-5] - 圆形图标的内圆半径大小（单位：像素）
 * @param [options.clustering.fontColor = '#ffffff'] - 数字的颜色
 * @param [options.clustering.color = 'rgba(181, 226, 140, 0.6)'] - 圆形图标的背景颜色，默认自动处理
 * @param [options.clustering.colorIn = 'rgba(110, 204, 57, 0.5)'] - 圆形图标的内圆背景颜色，默认自动处理
 * @param [options.symbol] - 矢量数据的style样式,为Function时是完全自定义的回调处理 symbol(attr, style, feature)
 * @param [options.symbol.type] - 标识数据类型，默认是根据数据生成 point、polyline、polygon
 * @param options.symbol.styleOptions - Style样式，每种不同类型数据都有不同的样式，具体见各矢量数据的style参数。{@link GraphicType}
 * @param [options.symbol.styleField] - 按 styleField 属性设置不同样式。
 * @param [options.symbol.styleFieldOptions] - 按styleField值与对应style样式的键值对象。
 * @param [options.symbol.callback] - 自定义判断处理返回style ，示例：callback: function (attr, styleOpt){  return { color: "#ff0000" };  }
 */
declare class WfsLayer extends LodGraphicLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        url: string;
        layer: string;
        parameters?: any;
        headers?: any;
        proxy?: Cesium.Proxy;
        IdField?: string;
        debuggerTileInfo: boolean;
        minimumLevel?: number;
        maximumLevel?: number;
        rectangle: {
            xmin: number;
            xmax: number;
            ymin: number;
            ymax: number;
        };
        bbox: Number[];
        debuggerTileInfo: boolean;
        buildings?: {
            bottomHeight?: string;
            cloumn?: string;
            height?: string | number;
        };
        clustering: {
            enabled?: boolean;
            pixelRange?: number;
            clampToGround?: boolean;
            radius?: number;
            radiusIn?: number;
            fontColor?: string;
            color?: string;
            colorIn?: string;
        };
        symbol?: {
            type?: GraphicType;
            styleOptions: any;
            styleField?: string;
            styleFieldOptions?: any;
            callback?: (...params: any[]) => any;
        };
    });
}

/**
 * 图层组，可以用于将多个图层组合起来方便控制（比如将 卫星底图 和 文字注记层 放在一起控制管理），或用于 图层管理 的图层分组节点（虚拟节点）。
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 图层id标识
 * @param [options.pid = -1] - 图层父级的id，一般图层管理中使用
 * @param [options.name = '未命名'] - 图层名称
 * @param [options.show = true] - 图层是否显示
 * @param [options.opacity = 1] - 透明度，取值范围：0.0-1.0
 * @param [options.center] - 图层自定义定位视角
 * @param [options.layers] - 子图层数组，每个子图层的配置见按各类型图层配置即可。
 */
declare class GroupLayer extends BaseGraphicLayer {
    constructor(options: {
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        opacity?: number;
        center?: any;
        layers?: object[];
    });
    /**
     * 子图层对象数组
     */
    readonly arrLayer: BaseLayer[];
    /**
     * 是否空组 ，空组目前就图层管理用于图层分组节点（虚拟节点）。
     */
    readonly hasEmptyGroup: boolean;
    /**
     * 是否有子图层
     */
    readonly hasChildLayer: boolean;
    /**
     * 子图层的个数
     */
    readonly length: Int;
    /**
     * 是否可以调整透明度
     */
    readonly hasOpacity: boolean;
    /**
     * 是否可以调整图层顺序（在同类型图层间）
     */
    readonly hasZIndex: boolean;
    /**
     * 图层顺序，数字大的在上面。（当hasZIndex为true时）
     */
    zIndex: number;
    /**
     * 添加子图层，并绑定关联关系。
     * @param childlayer - 子图层对象
     * @returns 当前对象本身，可以链式调用
     */
    addLayer(childlayer: BaseLayer): this;
    /**
     * 移除子图层，并解除关联关系。
     * @param childlayer - 子图层对象
     * @returns 当前对象本身，可以链式调用
     */
    removeLayer(childlayer: BaseLayer): this;
    /**
     * 遍历每一个子图层并将其作为参数传递给回调函数
     * @param method - 回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 当前对象本身,可以链式调用
     */
    eachLayer(method: (...params: any[]) => any, context: any): this;
    /**
     * 获取所有子图层对象
     * @returns } 所有子图层对象
     */
    getLayers(): BaseLayer[];
    /**
     * 根据ID或取图层
     * @param id - 图层id或uuid
     * @returns 图层对象
     */
    getLayerById(id: string | number): BaseLayer;
    /**
     * 根据id或name属性获取图层
     * @param name - 图层id或uuid或name值
     * @returns 图层对象
     */
    getLayer(name: string | number): BaseLayer;
    /**
     * 是否有同名的子图层，一般用于新增时判断
     * @param name - 图层名称
     * @param [excludedLayer = null] - 可以指定不进行判断的图层，比如当前图层本身
     * @returns 是否同名
     */
    hasLayer(name: string, excludedLayer?: BaseLayer): boolean;
}

/**
 * 地形服务图层，一个地图中只会生效一个地形服务图层（单选）
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 图层id标识
 * @param [options.pid = -1] - 图层父级的id，一般图层管理中使用
 * @param [options.name = '未命名'] - 图层名称
 * @param [options.show = true] - 图层是否显示（多个地形服务时，请只设置一个TerrainLayer图层的show为tue）
 * @param options.terrain - 地形服务配置
 * @param [options.terrain.type = 'xyz'] - 地形类型
 * @param options.terrain.url - 地形服务地址
 * @param [options.terrain.requestVertexNormals = true] - 是否应该从服务器请求额外的光照信息，如果可用，以每个顶点法线的形式。
 * @param [options.terrain.requestWaterMask = false] - 是否应该向服务器请求每个瓦的水掩膜(如果有的话)。
 * @param [options.terrain.requestMetadata = true] - 是否应该从服务器请求每个块元数据(如果可用)。
 */
declare class TerrainLayer extends BaseLayer {
    constructor(options: {
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        terrain: {
            type?: TerrainType;
            url: string | Cesium.Resource;
            requestVertexNormals?: boolean;
            requestWaterMask?: boolean;
            requestMetadata?: boolean;
        };
    });
}

/**
 * AraGIS生成的金字塔瓦片数据
 * @example
 * let tileLayer = new mars3d.layer.ArcGisCacheLayer({
 *   url: 'http://data.mars3d.cn/tile/hf/guihua/_alllayers/{z}/{y}/{x}.png',
 *   minimumLevel: 1,
 *   maximumLevel: 17,
 *   minimumTerrainLevel: 1,
 *   // "maximumTerrainLevel": 17, //如果需要大于maximumTerrainLevel层时不显示瓦片，则取消注释
 *   rectangle: { xmin: 116.846, xmax: 117.642, ymin: 31.533, ymax: 32.185 }, // 控制切片如果在矩形坐标内才显示，如果不在矩形坐标内不显示
 * })
 * map.addLayer(tileLayer)
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.upperCase] - url请求的瓦片图片名称是否大写。
 */
declare class ArcGisCacheLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        upperCase?: boolean;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

declare namespace ArcGisLayer {
    /**
     * ArcGIS服务图层支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * layer.on(mars3d.EventType.loadConfig, function (event) {
     *   console.log('loadConfig', event)
     * })
     * @property loadConfig - 加载metadata配置信息完成事件
     * @property click - 鼠标单击事件【enablePickFeatures:true时,支持单击获取对应的矢量对象】
     */
    type EventType = {
        loadConfig: string;
        click: string;
    };
}

/**
 * ArcGIS标准服务图层
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param options.url - ArcGIS MapServer服务的网址。
 * @param [options.layers] - 要显示的图层的逗号分隔列表，如果应显示所有图层，则未定义。
 * @param [options.layerDefs] - 可以对动态服务加条件筛选数据，示例："{\"0\":\"用地编号 = 'R'\"}"
 * @param [options.maxTileLevel] - 指定在小于此层级时用瓦片加载，大于该层级用动态服务.可以在瓦片服务类型时，同时使用瓦片和动态服务。
 * @param [options.wkid] - 当非标准EPSG标号时，可以指定wkid值。
 * @param [options.token] - 用于通过ArcGIS MapServer服务进行身份验证的ArcGIS令牌。
 * @param [options.tileDiscardPolicy] - 于确定图块是否为 无效，应将其丢弃。如果未指定此值，则为默认 {@link DiscardMissingTileImagePolicy} 用于平铺的地图服务器，并且{@link NeverTileDiscardPolicy} 用于非平铺地图服务器。在前一种情况下， 我们要求最大图块级别的图块0,0并检查像素（0,0），（200,20），（20,200）， （80,110）和（160，130）。如果所有这些像素都是透明的，则丢弃检查为 禁用，并且不会丢弃任何图块。如果它们中的任何一种具有不透明的颜色， 在这些像素位置具有相同值的图块将被丢弃。的最终结果 对于标准ArcGIS Server，这些默认值应该是正确的图块丢弃。确保 不会丢弃任何图块，为此构造并传递 {@link NeverTileDiscardPolicy} 参数。
 * @param [options.usePreCachedTilesIfAvailable = true] - 如果为true，则表示服务器已预先缓存 如果可用，则使用图块。如果为false，则将忽略所有预缓存的图块，并且 使用了'导出'服务。
 * @param [options.maxLength = 5000] - 单击获取到的数据，最大数据长度。大数据解析很卡，可以设定阀值屏蔽大数据，避免卡顿。
 * @param [options.highlight] - 鼠标单击高亮显示对应的矢量数据 及其样式
 * @param [options.highlight.type] - 构造成的矢量数据类型。
 * @param [options.highlight.其他] - style样式，每种不同类型数据都有不同的样式，具体见各{@link GraphicType}矢量数据的style参数。
 */
declare class ArcGisLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        url: Cesium.Resource | string;
        layers?: string;
        layerDefs?: string;
        maxTileLevel?: number;
        wkid?: number;
        token?: string;
        tileDiscardPolicy?: TileDiscardPolicy;
        usePreCachedTilesIfAvailable?: boolean;
        maxLength?: number;
        highlight?: {
            type?: GraphicType;
            其他?: any;
        };
    });
    /**
     * 绑定鼠标单击对象后的弹窗。
     * @param content - 弹窗内容html字符串，或者回调方法。
     * @param options - 控制参数
     * @returns 当前对象本身，可以链式调用
     */
    bindPopup(content: string | ((...params: any[]) => any), options: Popup.StyleOptions): this;
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * 百度地图
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.layer] - 图层类型，以及以下内容:<br />
 * <ul>
 *     <li><code>vec</code>: 电子图层</li>
 *     <li><code>img_d</code>: 卫星影像</li>
 *     <li><code>img_z</code>: 影像注记</li>
 *     <li><code>custom</code>: 自定义样式图层</li>
 *     <li><code>time</code>: 实时路况信息</li>
 *     <li><code>streetview</code>: 街景覆盖图层</li>
 * </ul>
 * @param [options.bigfont] - 当layer为vec或img_z时，来标识使用是否大写字体。
 * @param [options.style] - 当layer为custom时，标识的样式，可选值：dark,midnight,grayscale,hardedge,light,redalert,googlelite,grassgreen,pink,darkgreen,bluish
 * @param [options.url = null] - 当未指定layer类型时，可以传入外部指定url的服务地址，常用于离线服务。
 */
declare class BaiduLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        layer?: string;
        bigfont?: boolean;
        style?: string;
        url?: string;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

declare namespace BaseTileLayer {
    /**
     * 栅格Tile瓦片图层 通用构造参数
     * @property [id = uuid()] - 图层id标识
     * @property [pid = -1] - 图层父级的id，一般图层管理中使用
     * @property [name = '未命名'] - 图层名称
     * @property [show = true] - 图层是否显示
     * @property [center] - 图层自定义定位视角 {@link Map#setCameraView}
     * @property center.lng - 经度值, 180 - 180
     * @property center.lat - 纬度值, -90 - 90
     * @property center.alt - 高度值
     * @property center.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0-360
     * @property center.pitch - 俯仰角度值，绕纬度线旋转角度, 0-360
     * @property center.roll - 翻滚角度值，绕经度线旋转角度, 0-360
     * @property [flyTo] - 加载完成数据后是否自动飞行定位到数据所在的区域。
     * @property [minimumLevel = 0] - 瓦片所支持的最低层级，如果数据没有第0层，该参数必须配置,当地图小于该级别时，平台不去请求服务数据。
     * @property [maximumLevel] - 瓦片所支持的最大层级,大于该层级时会显示上一层拉伸后的瓦片，当地图大于该级别时，平台不去请求服务数据。
     * @property [minimumTerrainLevel] - 展示影像图层的最小地形细节级别，小于该级别时，平台不显示影像数据。
     * @property [maximumTerrainLevel] - 展示影像图层的最大地形细节级别，大于该级别时，平台不显示影像数据。
     * @property rectangle - 瓦片数据的矩形区域范围
     * @property rectangle.xmin - 最小经度值, -180 至 180
     * @property rectangle.xmax - 最大纬度值, -180 至 180
     * @property rectangle.ymin - 最小纬度值, -90 至 90
     * @property rectangle.ymax - 最大纬度值, -90 至 90
     * @property bbox - bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可。
     * @property [crs = CRS.EPSG:3857] - 瓦片数据的坐标系信息，默认为墨卡托投影
     * @property [chinaCRS] - 标识瓦片的国内坐标系（用于自动纠偏或加偏），自动将瓦片转为map对应的chinaCRS类型坐标系。
     * @property [subdomains = 'abc'] - URL模板中用于 {s} 占位符的子域。 如果此参数是单个字符串，则字符串中的每个字符都是一个子域。如果是 一个数组，数组中的每个元素都是一个子域。
     * @property [customTags] - 允许替换网址模板中的自定义关键字。该对象必须具有字符串作为键，并且必须具有值。
     * @property [tileWidth = 256] - 图像图块的像素宽度。
     * @property [tileHeight = 256] - 图像图块的像素高度。
     * @property [hasAlphaChannel = true] - 如果此图像提供者提供的图像为真 包括一个Alpha通道；否则为假。如果此属性为false，则为Alpha通道，如果 目前，将被忽略。如果此属性为true，则任何没有Alpha通道的图像都将 它们的alpha随处可见。当此属性为false时，内存使用情况 和纹理上传时间可能会减少。
     * @property [enablePickFeatures = true] - 如果为true，则 {@link UrlTemplateImageryProvider#pickFeatures} 请求 pickFeaturesUrl 并尝试解释响应中包含的功能。
     *        如果为 false{@link UrlTemplateImageryProvider#pickFeatures} 会立即返回未定义（表示没有可拾取的内容） 功能）而无需与服务器通信。如果您知道数据，则将此属性设置为false 源不支持选择功能，或者您不希望该提供程序的功能可供选择。注意 可以通过修改 {@link UriTemplateImageryProvider#enablePickFeatures}来动态覆盖 属性。
     * @property [getFeatureInfoFormats] - 在某处获取功能信息的格式 调用 {@link UrlTemplateImageryProvider#pickFeatures} 的特定位置。如果这 参数未指定，功能选择已禁用。
     * @property [popup] - 当pickFeatures有效返回时，图层支持popup弹窗，绑定的弹窗值（如wms动态服务），支持：'all'、数组、字符串模板，当为数组时支持：
     * @property popup.field - 字段名称
     * @property popup.name - 显示的对应自定义名称
     * @property [popup.type] - 默认为label文本，也可以支持：'button'按钮，'html' html内容。
     * @property [popup.callback] - 当type为'button'按钮时，单击后触发的事件。
     * @property [popup.html] - 当type为'html'时，对于拼接的html内容。
     * @property [popup.format] - 使用window的外部格式化js方法，格式化字符串值。
     * @property [popup.unit] - 追加的计量单位值。
     * @property [popupOptions] - popup弹窗时的配置参数
     * @property [opacity = 1.0] - 透明度，取值范围：0.0-1.0。
     * @property [alpha = 1.0] - 同opacity。
     * @property [nightAlpha = 1.0] - 当 enableLighting 为 true 时 ，在地球的夜晚区域的透明度，取值范围：0.0-1.0。
     * @property [dayAlpha = 1.0] - 当 enableLighting 为 true 时，在地球的白天区域的透明度，取值范围：0.0-1.0。
     * @property [brightness = 1.0] - 亮度，取值范围：0.0-1.0。
     * @property [contrast = 1.0] - 对比度。 1.0使用未修改的图像颜色，小于1.0会降低对比度，而大于1.0则会提高对比度。
     * @property [hue = 0.0] - 色调。 0.0 时未修改的图像颜色。
     * @property [saturation = 1.0] - 饱和度。 1.0使用未修改的图像颜色，小于1.0会降低饱和度，而大于1.0则会增加饱和度。
     * @property [gamma = 1.0] - 伽马校正值。 1.0使用未修改的图像颜色。
     * @property [maximumAnisotropy = maximum supported] - 使用的最大各向异性水平 用于纹理过滤。如果未指定此参数，则支持最大各向异性 将使用WebGL堆栈。较大的值可使影像在水平方向上看起来更好 视图。
     * @property [cutoutRectangle] - 制图矩形，用于裁剪此ImageryLayer的一部分。
     * @property [colorToAlpha] - 用作Alpha的颜色。
     * @property [colorToAlphaThreshold = 0.004] - 颜色到Alpha的阈值。
     * @property [proxy] - 加载资源时要使用的代理服务url。
     * @property [templateValues] - 一个对象，用于替换Url中的模板值的键/值对
     * @property [queryParameters] - 一个对象，其中包含在检索资源时将发送的查询参数。比如：queryParameters: {'access_token': '123-435-456-000'},
     * @property [headers] - 一个对象，将发送的其他HTTP标头。比如：headers: { 'X-My-Header': 'valueOfHeader' },
     * @property [zIndex] - 控制图层的叠加层次，默认按加载的顺序进行叠加，但也可以自定义叠加顺序，数字大的在上面。
     */
    type ConstructorOptions = {
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        center?: {
            lng: number;
            lat: number;
            alt: number;
            heading: number;
            pitch: number;
            roll: number;
        };
        flyTo?: boolean;
        minimumLevel?: number;
        maximumLevel?: number;
        minimumTerrainLevel?: number;
        maximumTerrainLevel?: number;
        rectangle: {
            xmin: number;
            xmax: number;
            ymin: number;
            ymax: number;
        };
        bbox: Number[];
        crs?: CRS;
        chinaCRS?: ChinaCRS;
        subdomains?: string | String[];
        customTags?: any;
        tileWidth?: number;
        tileHeight?: number;
        hasAlphaChannel?: boolean;
        enablePickFeatures?: boolean;
        getFeatureInfoFormats?: GetFeatureInfoFormat[];
        popup?: {
            field: string;
            name: string;
            type?: string;
            callback?: string;
            html?: string;
            format?: string;
            unit?: string;
        };
        popupOptions?: Popup.StyleOptions;
        opacity?: number;
        alpha?: number | ((...params: any[]) => any);
        nightAlpha?: number | ((...params: any[]) => any);
        dayAlpha?: number | ((...params: any[]) => any);
        brightness?: number | ((...params: any[]) => any);
        contrast?: number | ((...params: any[]) => any);
        hue?: number | ((...params: any[]) => any);
        saturation?: number | ((...params: any[]) => any);
        gamma?: number | ((...params: any[]) => any);
        maximumAnisotropy?: number;
        cutoutRectangle?: Cesium.Rectangle;
        colorToAlpha?: Cesium.Color;
        colorToAlphaThreshold?: number;
        proxy?: string;
        templateValues?: any;
        queryParameters?: any;
        headers?: any;
        zIndex?: number;
    };
    /**
     * 当前栅格瓦片图层支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * layer.on(mars3d.EventType.addTile, function (event) {
     *   console.log('addTile', event)
     * })
     * @property add - 添加对象
     * @property remove - 移除对象
     * @property show - 显示了对象
     * @property hide - 隐藏了对象
     * @property load - 瓦片图层初始化完成
     * @property addTile - 栅格瓦片图层，开始加载瓦片
     * @property addTileSuccess - 栅格瓦片图层，加载瓦片完成
     * @property addTileError - 栅格瓦片图层，加载瓦片出错了
     * @property click - 鼠标单击事件【WMS等动态服务enablePickFeatures:true时,支持单击获取对应的矢量对象】
     * @property popupOpen - 当存在popup时，popup弹窗打开后
     * @property popupClose - 当存在popup时，popup弹窗关闭
     */
    type EventType = {
        add: string;
        remove: string;
        show: string;
        hide: string;
        load: string;
        addTile: string;
        addTileSuccess: string;
        addTileError: string;
        click: string;
        popupOpen: string;
        popupClose: string;
    };
}

/**
 * 栅格Tile瓦片图层 基类
 * @param options - 描述初始化构造参数选项的对象
 */
declare class BaseTileLayer extends BaseLayer {
    constructor(options: BaseTileLayer.ConstructorOptions);
    /**
     * 瓦片图层对应的内部ImageryLayer对象
     */
    readonly layer: Cesium.ImageryLayer;
    /**
     * 瓦片图层对应的内部ImageryProvider对象
     */
    readonly imageryProvider: Cesium.XXXImageryProvider;
    /**
     * 透明度，同opacity。从0.0到1.0。
     */
    alpha: number;
    /**
     * 亮度，取值范围：0.0-1.0。
     */
    brightness: number;
    /**
     * 对比度。 1.0使用未修改的图像颜色，小于1.0会降低对比度，而大于1.0则会提高对比度。
     */
    contrast: number;
    /**
     * 色调。 0.0 时未修改的图像颜色。
     */
    hue: number;
    /**
     * 饱和度。 1.0使用未修改的图像颜色，小于1.0会降低饱和度，而大于1.0则会增加饱和度。
     */
    saturation: number;
    /**
     * 伽马校正值。 1.0使用未修改的图像颜色。
     */
    gamma: number;
    /**
     * 是否可以调整图层顺序（在同类型图层间）
     */
    readonly hasZIndex: boolean;
    /**
     * 图层顺序，数字大的在上面。（当hasZIndex为true时）
     */
    zIndex: number;
    /**
     * 瓦片数据范围
     */
    rectangle: Cesium.Rectangle;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
    /**
     * 重新加载图层
     * @returns 无
     */
    reload(): void;
    /**
     * 设置透明度
     * @param value - 透明度
     * @returns 无
     */
    setOpacity(value: number): void;
    /**
     * 绑定鼠标移入或单击后的 对象高亮
     * @param [options] - 高亮的样式，具体见各{@link GraphicType}矢量数据的style参数。
     * @param [options.type] - 事件类型，默认为鼠标移入高亮，也可以指定'click'单击高亮.
     * @returns 无
     */
    bindHighlight(options?: {
        type?: string;
    }): void;
    /**
     * 解绑鼠标移入或单击后的高亮处理
     * @returns 无
     */
    unbindHighlight(): void;
    /**
     * 高亮对象。
     * @param [highlightStyle] - 高亮的样式，具体见各{@link GraphicType}矢量数据的style参数。
     * @returns 无
     */
    openHighlight(highlightStyle?: any): void;
    /**
     * 清除已选中的高亮
     * @returns 无
     */
    closeHighlight(): void;
    /**
     * 透明度，取值范围：0.0-1.0
     */
    opacity: number;
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @returns 无
     */
    _addedHook(): void;
    /**
     * 飞行定位至图层数据所在的视角
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 当前对象本身，可以链式调用
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): this;
}

/**
 * 微软bing地图
 * @property [options.key = mars3d.Token.bing] - 您的应用程序的Bing Maps密钥，可以在{@link https://www.bingmapsportal.com/}中创建
 * @property [mapStyle = Cesium.BingMapsStyle.AERIAL] - 要加载的必应地图图像的类型。
 * @property [tileProtocol] - 加载图块时要使用的协议，例如' http'或' https'。 默认情况下，将使用与页面相同的协议来加载图块。
 * @property [culture = 'zh-Hans'] - 请求Bing Maps图像时要使用的区域性标记。不支持所有文化。请参阅   {@link http://msdn.microsoft.com/en-us/library/hh441729.aspx}了解有关支持的文化的信息。
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.url = 'https://dev.virtualearth.net'] - 托管影像图像的Bing Maps服务器的网址。
 * @param [options.tileDiscardPolicy] - 于确定图块是否为无效，应将其丢弃。如果未指定此值，则为默认 {@link DiscardMissingTileImagePolicy} 用于平铺的地图服务器，并且{@link NeverTileDiscardPolicy} 用于非平铺地图服务器。在前一种情况下， 我们要求最大图块级别的图块0,0并检查像素（0,0），（200,20），（20,200）， （80,110）和（160，130）。如果所有这些像素都是透明的，则丢弃检查为 禁用，并且不会丢弃任何图块。如果它们中的任何一种具有不透明的颜色， 在这些像素位置具有相同值的图块将被丢弃。的最终结果 对于标准ArcGIS Server，这些默认值应该是正确的图块丢弃。确保 不会丢弃任何图块，为此构造并传递 {@link NeverTileDiscardPolicy} 参数。
 */
declare class BingLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        url?: Cesium.Resource | string;
        tileDiscardPolicy?: TileDiscardPolicy;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
    /**
     * 要加载的必应地图图像的类型。
    */
    mapStyle?: Cesium.BingMapsStyle;
    /**
     * 加载图块时要使用的协议，例如' http'或' https'。 默认情况下，将使用与页面相同的协议来加载图块。
    */
    tileProtocol?: string;
    /**
     * 请求Bing Maps图像时要使用的区域性标记。不支持所有文化。请参阅   {@link http://msdn.microsoft.com/en-us/library/hh441729.aspx}了解有关支持的文化的信息。
    */
    culture?: string;
}

/**
 * 空白图层，目前主要在Lod矢量数据加载作为事件触发使用。
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的相关参数
 */
declare class EmptyTileLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
    });
    /**
     * 判断级别是否在当前图层的最大最小层级范围内
     * @param level - 判断的级别
     * @returns 是否在限定的范围内
     */
    isInRange(level: number): boolean;
    /**
     * 判断所有瓦片 是否都在最大最小层级范围外，用于判断清除数据
     * @param level - 判断的级别
     * @returns 是否都在范围外
     */
    isAllOutRange(level: number): boolean;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * 高德
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.layer] - 图层类型，以及以下内容:<br />
 * <ul>
 *     <li><code>vec</code>: 电子图层</li>
 *     <li><code>img_d</code>: 卫星影像</li>
 *     <li><code>img_z</code>: 影像注记</li>
 *     <li><code>time</code>: 实时路况信息</li>
 * </ul>
 * @param [options.url = null] - 当未指定layer类型时，可以传入外部指定url的服务地址，常用于离线服务。
 * @param [options.bigfont] - 当layer为vec时，来标识使用是否大写字体。
 */
declare class GaodeLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        layer?: string;
        url?: string;
        bigfont?: boolean;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * GoogleEarth Enterprise企业版本 影像服务
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param options.url - 承载瓦片服务的谷歌地球企业服务器的url
 */
declare class GeeLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        url: Cesium.Resource | string;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * 谷歌
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.layer] - 图层类型，以及以下内容:<br />
 * <ul>
 *     <li><code>vec</code>: 电子图层</li>
 *     <li><code>img_d</code>: 卫星影像</li>
 *     <li><code>img_z</code>: 影像注记</li>
 *     <li><code>ter</code>: 地形渲染图</li>
 * </ul>
 * @param [options.chinaCRS = 'GCJ02'] - 可以加ChinaCRS.WGS84标识切换到无偏底图（仅layer：img_d 时有效）
 */
declare class GoogleLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        layer?: string;
        chinaCRS?: ChinaCRS;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * 网格线
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.cells = 2] - 网格单元格的数量。
 * @param [options.color = rgba(255,255,255,1)] - 绘制网格线的颜色。
 * @param [options.glowColor = color.withAlpha(0.3)] - 为网格线绘制渲染线发光效果的颜色。
 * @param [options.glowWidth = 3] - 用于渲染线发光效果的线的宽度。
 * @param [options.backgroundColor = 'rgba(0,0,0,0)'] - 背景填充颜色。
 * @param [options.canvasSize = 256] - 用于渲染的画布的大小。
 */
declare class GridLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        cells?: number;
        color?: string;
        glowColor?: string;
        glowWidth?: number;
        backgroundColor?: string;
        canvasSize?: number;
    });
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * 单张图片图层
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param options.url - 图片url地址
 * @param options.rectangle - 瓦片数据的矩形区域范围
 * @param options.rectangle.xmin - 最小经度值, -180 至 180
 * @param options.rectangle.xmax - 最大纬度值, -180 至 180
 * @param options.rectangle.ymin - 最小纬度值, -90 至 90
 * @param options.rectangle.ymax - 最大纬度值, -90 至 90 *
 * @param options.bbox - bbox规范的瓦片数据的矩形区域范围,与rectangle二选一即可。
 */
declare class ImageLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        url: Cesium.Resource | string;
        rectangle: {
            xmin: number;
            xmax: number;
            ymin: number;
            ymax: number;
        };
        bbox: Number[];
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * cesium ion资源地图，官网： {@link https://cesium.com/ion/signin/}
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param options.assetId - ION服务 assetId
 * @param [options.accessToken = mars3d.Token.ion] - ION服务 token令牌
 * @param [options.server = Ion.defaultServer] - Cesium ion API服务器的资源。
 */
declare class IonLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        assetId: number;
        accessToken?: string;
        server?: string | Resource;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * Mapbox地图服务
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.url = 'https://api.mapbox.com/styles/v1/'] - Mapbox服务器网址。
 * @param [options.username = 'marsgis'] - 地图帐户的用户名。
 * @param options.styleId - Mapbox样式ID。
 * @param [options.accessToken = mars3d.Token.mapbox] - 图像的Token公共访问令牌。
 * @param [options.tilesize = 512] - 图像块的大小。
 * @param [options.scaleFactor = true] - 确定贴图是否以 @2x 比例因子渲染。
 */
declare class MapboxLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        url?: Cesium.Resource | string;
        username?: string;
        styleId: string;
        accessToken?: string;
        tilesize?: number;
        scaleFactor?: boolean;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * OSM开源地图
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 */
declare class OsmLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * 天地图
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.layer] - 图层类型，以及以下内容:<br />
 * <ul>
 *     <li><code>vec_d</code>: 电子图层</li>
 *     <li><code>vec_z</code>: 电子注记</li>
 *     <li><code>img_d</code>: 卫星影像</li>
 *     <li><code>img_z</code>: 影像注记</li>
 *     <li><code>ter_d</code>: 地形渲染图</li>
 *     <li><code>ter_z</code>: 地形渲染图注记</li>
 * </ul>
 * @param [options.key = mars3d.Token.tiandituArr] - 天地图服务Token，可以自行注册官网： {@link https://console.tianditu.gov.cn/api/key}
 * @param [options.crs = 'EPSG3857'] - 标识不同坐标系。
 */
declare class TdtLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        layer?: string;
        key?: String[];
        crs?: CRS;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * 腾讯
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.layer] - 图层类型，以及以下内容:<br />
 * <ul>
 *     <li><code>vec</code>: 电子图层</li>
 *     <li><code>img_d</code>: 卫星影像</li>
 *     <li><code>img_z</code>: 影像注记</li>
 *     <li><code>custom</code>: 地形渲染图</li>
 * </ul>
 * @param [options.style] - 当layer为custom时，标识的样式，可选值：灰白地图:3,暗色地图:4
 */
declare class TencentLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        layer?: string;
        style?: string;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * 瓦片信息，一般用于测试
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.color = rgba(255,0,0,1)] - 画瓦片边框线和标签的颜色
 */
declare class TileInfoLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        color?: string;
    });
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * TileMapService 提供由MapTiler，GDAL2Tiles等生成的切片图像
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.url = '.'] - 服务地址
 * @param [options.fileExtension = 'png'] - 服务器上图像的文件扩展名。
 * @param [options.flipXY] - gdal2tiles.py的旧版本将tilemapresource.xml中的X和Y值翻转了。指定此选项将执行相同的操作，从而允许加载这些不正确的图块集。
 */
declare class TmsLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        url?: Resource | string | Promise<Resource> | Promise<String>;
        fileExtension?: string;
        flipXY?: boolean;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * WMS服务
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param options.url - WMS服务的URL。URL支持相同的关键字 {@link XyzLayer}.
 * @param options.layers - 要包含的图层，用逗号分隔。
 * @param [options.parameters = WebMapServiceImageryProvider.DefaultParameters] - 要在URL中 传递给WMS服务GetMap请求的其他参数。
 * @param [options.getFeatureInfoParameters = WebMapServiceImageryProvider.GetFeatureInfoDefaultParameters] - 要在GetFeatureInfo URL中传递给WMS服务器的其他参数。
 * @param [options.crs] - CRS规范，用于WMS规范>= 1.3.0。
 * @param [options.srs] - SRS规范，与WMS规范1.1.0或1.1.1一起使用
 * @param [options.clock] - 一个时钟实例，用于确定时间维度的值。指定' times '时需要。
 * @param [options.times] - TimeIntervalCollection 的数据属性是一个包含时间动态维度及其值的对象。
 * @param [options.maxLength = 5000] - 单击获取到的数据，最大数据长度。大数据解析很卡，可以设定阀值屏蔽大数据，避免卡顿。
 * @param [options.highlight] - 鼠标单击高亮显示对应的矢量数据 及其样式
 * @param [options.highlight.type] - 构造成的矢量数据类型。
 * @param [options.highlight.其他] - style样式，每种不同类型数据都有不同的样式，具体见各{@link GraphicType}矢量数据的style参数。
 */
declare class WmsLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        url: Cesium.Resource | string;
        layers: string;
        parameters?: any;
        getFeatureInfoParameters?: any;
        crs?: string;
        srs?: string;
        clock?: Cesium.Clock;
        times?: Cesium.TimeIntervalCollection;
        maxLength?: number;
        highlight?: {
            type?: GraphicType;
            其他?: any;
        };
    });
    /**
     * 绑定鼠标单击对象后的弹窗。
     * @param content - 弹窗内容html字符串，或者回调方法。
     * @param options - 控制参数
     * @returns 当前对象本身，可以链式调用
     */
    bindPopup(content: string | ((...params: any[]) => any), options: Popup.StyleOptions): this;
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @returns 无
     */
    _addedHook(): void;
}

/**
 * WMTS服务
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param options.url - WMTS GetTile操作(用于kvp编码的请求)或tile-URL模板(用于RESTful请求)的基本URL。tile-URL模板应该包含以下变量:&#123;style&#125;, &#123;TileMatrixSet&#125;, &#123;TileMatrix&#125;, &#123;TileRow&#125;, &#123;TileCol&#125; 前两个是可选的，如果实际值是硬编码的或者服务器不需要。 &#123;s&#125;关键字可用于指定子域。
 * @param [options.format = 'image/jpeg'] - 要从服务器检索的瓦片图像的MIME类型。
 * @param options.layer - WMTS请求的层名。
 * @param options.style - WMTS请求的样式名称。
 * @param options.tileMatrixSetID - 用于WMTS请求的TileMatrixSet的标识符。
 * @param [options.tileMatrixLabels] - 瓦片矩阵中用于WMTS请求的标识符列表，每个瓦片矩阵级别一个。
 * @param [options.clock] - 一个时钟实例，用于确定时间维度的值。指定' times '时需要。
 * @param [options.times] - TimeIntervalCollection 的数据属性是一个包含时间动态维度及其值的对象。
 * @param [options.enablePickFeatures = false] - 如果为true，则请求 pickFeaturesUrl 并尝试解释响应中包含的功能。
 * @param [options.pickFeaturesUrl] - enablePickFeatures为true时，用于单击查看矢量对象功能的对应wms服务url。
 * @param [options.pickFeatures] - 外部自定义单击请求对应矢量数据的处理。与pickFeaturesUrl二选一
 * @param [options.highlight] - 鼠标单击高亮显示对应的矢量数据 及其样式。需要enablePickFeatures等参数有效配置。
 * @param [options.highlight.type] - 构造成的矢量数据类型。
 * @param [options.highlight.其他] - style样式，每种不同类型数据都有不同的样式，具体见各{@link GraphicType}矢量数据的style参数。
 */
declare class WmtsLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        url: Cesium.Resource | string;
        format?: string;
        layer: string;
        style: string;
        tileMatrixSetID: string;
        tileMatrixLabels?: String[];
        clock?: Cesium.Clock;
        times?: Cesium.TimeIntervalCollection;
        enablePickFeatures?: boolean;
        pickFeaturesUrl?: Cesium.Resource | string;
        pickFeatures?: (...params: any[]) => any;
        highlight?: {
            type?: GraphicType;
            其他?: any;
        };
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @returns 无
     */
    _addedHook(): void;
}

/**
 * 标准xyz金字塔
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param options.url - 用于请求瓦片图块的URL模板。它具有以下关键字:
 * <ul>
 *     <li><code>{z}</code>: 切片方案中切片的级别。零级是四叉树金字塔的根。</li>
 *     <li><code>{x}</code>:切片方案中的图块X坐标，其中0是最西端的图块。</li>
 *     <li><code>{y}</code>: 切片方案中的图块Y坐标，其中0是最北的图块。</li>
 *     <li><code>{s}</code>:可用的子域之一，用于克服浏览器对每个主机的并发请求数的限制。</li>
 *     <li><code>{reverseX}</code>: 切片方案中的图块X坐标，其中0是最东的图块。</li>
 *     <li><code>{reverseY}</code>:切片方案中的图块Y坐标，其中0是最南端的图块。</li>
 *     <li><code>{reverseZ}</code>:在切片方案中切片的级别，其中级别0是四叉树金字塔的最大级别。为了使用reverseZ，必须定义maximumLevel。</li>
 *     <li><code>{westDegrees}</code>: 瓦片图块在测地角度上的西边缘。</li>
 *     <li><code>{southDegrees}</code>:瓦片图块在测地角度上的南边缘。</li>
 *     <li><code>{eastDegrees}</code>:以大地测量度表示的图块的东边缘。</li>
 *     <li><code>{northDegrees}</code>: 瓦片图块在测地角度上的北边缘。</li>
 *     <li><code>{westProjected}</code>:图块方案的墨卡托投影坐标中图块的西边缘。</li>
 *     <li><code>{southProjected}</code>: 图块方案的墨卡托投影坐标中图块的南边缘。</li>
 *     <li><code>{eastProjected}</code>: :图块方案的墨卡托投影坐标中图块的东边缘。</li>
 *     <li><code>{northProjected}</code>:图块方案的墨卡托投影坐标中图块的北边缘。</li>
 *     <li><code>{width}</code>:每个图块的宽度（以像素为单位）。</li>
 *     <li><code>{height}</code>: 每个图块的高度（以像素为单位）。</li>
 * </ul>
 * @param [options.urlSchemeZeroPadding] - 为每个图块坐标获取URL方案零填充。格式为' 000'，其中每个坐标将在左侧用零填充，以匹配传递的零字符串的宽度。例如设置:
 * urlSchemeZeroPadding:{'{x}':'0000'}将导致'x'值为12，以在生成的URL中返回{x}的字符串'0012'。传递的对象具有以下关键字:
 * <ul>
 *  <li> <code>{z}</code>: 切片方案中图块级别的零填充。</li>
 *  <li> <code>{x}</code>: 切片方案中图块X坐标的零填充。</li>
 *  <li> <code>{y}</code>: 切片方案中图块Y坐标的零填充。</li>
 *  <li> <code>{reverseX}</code>: 在平铺方案中图块reverseX坐标的零填充。</li>
 *  <li> <code>{reverseY}</code>: 在切片方案中，图块反向Y坐标的零填充。</li>
 *  <li> <code>{reverseZ}</code>: 在切片方案中，图块的reverseZ坐标的零填充。</li>
 * </ul>
 * @param [options.pickFeaturesUrl] - 用于选择功能的URL模板。如果未指定此属性，
 *                 {@link Cesium.UrlTemplateImageryProvider#pickFeatures} 会立即返回undefined，表示没有 功能选择。
 *      网址模板支持 <code>url</code>参数支持的所有关键字参数，以及以下内容:
 * <ul>
 *     <li><code>{i}</code>: 所选位置的像素列（水平坐标），其中最西端的像素为0。</li>
 *     <li><code>{j}</code>: 所选位置的像素行（垂直坐标），其中最北端的像素为0。</li>
 *     <li><code>{reverseI}</code>: 所选位置的像素列（水平坐标），其中最东端的像素为0。</li>
 *     <li><code>{reverseJ}</code>: 所选位置的像素行（垂直坐标），其中最南端的像素为0。</li>
 *     <li><code>{longitudeDegrees}</code>: 所选位置的经度（以度为单位）。</li>
 *     <li><code>{latitudeDegrees}</code>: 所选位置的纬度（以度为单位）。</li>
 *     <li><code>{longitudeProjected}</code>:在平铺方案的投影坐标中所拾取位置的经度。</li>
 *     <li><code>{latitudeProjected}</code>: 在平铺方案的投影坐标中所拾取位置的纬度。</li>
 *     <li><code>{format}</code>: 获取功能信息的格式，如 {@link GetFeatureInfoFormat}中所指定。</li>
 * </ul>
 */
declare class XyzLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        url: Cesium.Resource | string;
        urlSchemeZeroPadding?: any;
        pickFeaturesUrl?: Cesium.Resource | string;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): any;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
}

/**
 * 键盘漫游控制类
 */
declare class KeyboardRoam extends BaseControl {
    /**
     * 平移步长 (米)
     */
    moveStep: number;
    /**
     * 相机原地旋转步长，值越大步长越小。
     */
    dirStep: number;
    /**
     * 相机围绕目标点旋转速率，0.3 - 2.0
     */
    rotateStep: number;
    /**
     * 最小仰角  0 - 1
     */
    minPitch: number;
    /**
     * 最大仰角  0 - 1
     */
    maxPitch: number;
    /**
     * 最低高度（单位：米）
     */
    minHeight: number;
    /**
     * 重新赋值参数，同构造方法参数一致。
     * @param options - 参数,与类的构造方法参数相同
     * @returns 当前对象本身，可以链式调用
     */
    setOptions(options: any): this;
    /**
     * 开始自动向前平移镜头，不改变相机朝向
     * @returns 无
     */
    startMoveForward(): void;
    /**
     * 停止自动向前平移镜头，不改变相机朝向
     * @returns 无
     */
    stopMoveForward(): void;
    /**
     * 开始自动向后平移镜头，不改变相机朝向
     * @returns 无
     */
    startMoveBackward(): void;
    /**
     * 停止自动向后平移镜头，不改变相机朝向
     * @returns 无
     */
    stopMoveBackward(): void;
    /**
     * 开始自动向右平移镜头，不改变相机朝向
     * @returns 无
     */
    startMoveRight(): void;
    /**
     * 停止自动向右平移镜头，不改变相机朝向
     * @returns 无
     */
    stopMoveRight(): void;
    /**
     * 开始自动向左平移镜头，不改变相机朝向
     * @returns 无
     */
    startMoveLeft(): void;
    /**
     * 停止自动向左平移镜头，不改变相机朝向
     * @returns 无
     */
    stopMoveLeft(): void;
    /**
     * 相对于屏幕中心点 转动
     * @param type - 旋转的方向
     * @returns 无
     */
    moveCamera(type: MoveType): void;
    /**
     * 相对于相机本身 转动
     * @param type - 旋转的方向
     * @returns 无
     */
    rotateCamera(type: MoveType): void;
    /**
     * 相机旋转的类型
     * @property ENLARGE - 向屏幕中心靠近
     * @property NARROW - 向屏幕中心远离
     * @property LEFT_ROTATE - 相机原地左旋转
     * @property RIGHT_ROTATE - 相机原地右旋转
     * @property TOP_ROTATE - 相机原地上旋转
     * @property BOTTOM_ROTATE - 相机原地下旋转
     */
    static MoveType: {
        ENLARGE: Int;
        NARROW: Int;
        LEFT_ROTATE: Int;
        RIGHT_ROTATE: Int;
        TOP_ROTATE: Int;
        BOTTOM_ROTATE: Int;
    };
}

/**
 * 地图鼠标事件 统一管理类
 */
declare class MouseEvent {
    /**
     * 是否开启鼠标移动事件的拾取矢量数据
     */
    enabledMoveTarget: boolean;
    /**
     * 是否不拾取数据
     */
    noPickEntity: boolean;
}

declare namespace Map {
    /**
     * 场景参数
     * @property center - 默认相机视角
     * @property center.lng - 经度值, 180 - 180
     * @property center.lat - 纬度值, -90 - 90
     * @property center.alt - 高度值
     * @property center.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0-360
     * @property center.pitch - 俯仰角度值，绕纬度线旋转角度, 0-360
     * @property center.roll - 翻滚角度值，绕经度线旋转角度, 0-360
     * @property [extent] - 矩形范围 相机视角,与center二选一
     * @property extent.xmin - 最小经度值, -180 至 180
     * @property extent.xmax - 最大纬度值, -180 至 180
     * @property extent.ymin - 最小纬度值, -90 至 90
     * @property extent.ymax - 最大纬度值, -90 至 90
     * @property [removeDblClick = false] - 是否移除Cesium默认的双击事件
     * @property [ionToken = null] - Cesium Ion服务的 Token令牌
     * @property [resolutionScale = 1.0] - 获取或设置渲染分辨率的缩放比例。小于1.0的值可以改善性能不佳的设备上的性能，而值大于1.0则将以更高的速度呈现分辨率，然后缩小比例，从而提高视觉保真度。例如，如果窗口小部件的尺寸为640x480，则将此值设置为0.5将导致场景以320x240渲染，然后在设置时按比例放大设置为2.0将导致场景以1280x960渲染，然后按比例缩小。
     *
     * 以下是Cesium.Scene对象相关参数
     * @property showSun - 是否显示太阳
     * @property showMoon - 是否显示月亮
     * @property showSkyBox - 是否显示天空盒
     * @property showSkyAtmosphere - 是否显示地球大气层外光圈
     * @property fog - 是否启用雾化效果
     * @property fxaa - 是否开启快速抗锯齿
     * @property highDynamicRange - 是否关闭高动态范围渲染(不关闭时地图会变暗)
     * @property backgroundColor - 空间背景色 ，css颜色值
     *
     * 以下是Cesium.Viewer所支持的options【控件相关的写在另外的control属性中】
     * @property [sceneMode = Cesium.SceneMode.SCENE3D] - 初始场景模式。
     * @property [scene3DOnly = false] - 为 true 时，每个几何实例将仅以3D渲染以节省GPU内存。
     * @property [shouldAnimate = true] - 是否开启时钟动画
     * @property [shadows = false] - 是否启用日照阴影
     * @property [useDefaultRenderLoop = true] - 如果此小部件应控制渲染循环，则为true，否则为false。
     * @property [targetFrameRate] - 使用默认渲染循环时的目标帧速率。
     * @property [useBrowserRecommendedResolution = true] - 如果为true，则以浏览器建议的分辨率渲染，并忽略 window.devicePixelRatio 。
     * @property [automaticallyTrackDataSourceClocks = true] - 如果为true，则此小部件将自动跟踪新添加的数据源的时钟设置，并在数据源的时钟发生更改时进行更新。如果要独立配置时钟，请将其设置为false。
     * @property [contextOptions] - WebGL创建属性 传递给 Cesium.Scene 的 options 。{@link Cesium.Scene}.
     * @property [orderIndependentTranslucency = true] - 如果为true，并且配置支持它，则使用顺序无关的半透明性。
     * @property [terrainShadows = Cesium.ShadowMode.RECEIVE_ONLY] - 确定地形是否投射或接收来自光源的阴影。
     * @property [mapMode2D = Cesium.MapMode2D.INFINITE_SCROLL] - 确定2D地图是可旋转的还是可以在水平方向无限滚动。
     * @property [requestRenderMode = false] - 如果为真，渲染帧只会在需要时发生，这是由场景中的变化决定的。启用可以减少你的应用程序的CPU/GPU使用量，并且在移动设备上使用更少的电池，但是需要使用 {@link Scene#requestRender} 在这种模式下显式地渲染一个新帧。在许多情况下，在API的其他部分更改场景后，这是必要的。参见 {@link https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/|Improving Performance with Explicit Rendering}.
     * @property [maximumRenderTimeChange = 0.0] - 如果requestRenderMode为true，这个值定义了在请求渲染之前允许的模拟时间的最大变化。参见 {@link https://cesium.com/blog/2018/01/24/cesium-scene-rendering-performance/|Improving Performance with Explicit Rendering}.
     *
     * 以下是Cesium.Globe对象相关参数
     * @property globe - globe地球相关参数
     * @property [globe.show = true] - 是否显示地球
     * @property [globe.baseColor = '#546a53'] - 地球背景色 ，css颜色值
     * @property [globe.depthTestAgainstTerrain = false] - 是否启用深度监测,可以开启来测试矢量对象是否在地形下面或被遮挡。
     * @property [globe.showGroundAtmosphere = true] - 是否在地球上绘制的地面大气
     * @property [globe.enableLighting = false] - 是否显示昼夜区域
     * @property [globe.tileCacheSize = 100] - 地形图块缓存的大小，表示为图块数。任何其他只要不需要渲染，就会释放超出此数目的图块这个框架。较大的数字将消耗更多的内存，但显示细节更快例如，当缩小然后再放大时。
     * @property [globe.terrainExaggeration = 1.0] - 地形夸张倍率，用于放大地形的标量。请注意，地形夸张不会修改其他相对于椭球的图元。
     * @property [globe.terrainExaggerationRelativeHeight = 0.0] - 地形被夸大的高度。默认为0.0（相对于椭球表面缩放）。高于此高度的地形将向上缩放，低于此高度的地形将向下缩放。请注意，地形夸大不会修改任何其他图元，因为它们是相对于椭球体定位的。
     *
     * 以下是Cesium.ScreenSpaceCameraController对象相关参数
     * @property cameraController - 相机操作相关参数
     * @property [cameraController.zoomFactor = 3.0] - 鼠标滚轮放大的步长参数
     * @property [cameraController.constrainedAxis = true] - 为false时 解除在南北极区域鼠标操作限制
     * @property [cameraController.minimumZoomDistance = 1.0] - 变焦时相机位置的最小量级（以米为单位）。默认为1
     * @property [cameraController.maximumZoomDistance = 50000000.0] - 变焦时相机位置的最大值（以米为单位）
     * @property [cameraController.minimumCollisionTerrainHeight = 80000] - 低于此高度时绕鼠标键绕圈，大于时绕视图中心点绕圈。
     * @property [cameraController.enableRotate = true] - 2D和3D视图下，是否允许用户旋转相机
     * @property [cameraController.enableTranslate = true] - 2D和哥伦布视图下，是否允许用户平移地图
     * @property [cameraController.enableTilt = true] - 3D和哥伦布视图下，是否允许用户倾斜相机
     * @property [cameraController.enableZoom = true] - 是否允许 用户放大和缩小视图
     * @property [cameraController.enableCollisionDetection = true] - 是否允许 地形相机的碰撞检测
     *
     * 以下是Cesium.Clock时钟相关参数
     * @property clock - 时钟相关参数
     * @property [clock.currentTime = null] - 当前的时间
     * @property [clock.multiplier = 1.0] - 当前的速度
     */
    type sceneOptions = {
        center: {
            lng: number;
            lat: number;
            alt: number;
            heading: number;
            pitch: number;
            roll: number;
        };
        extent?: {
            xmin: number;
            xmax: number;
            ymin: number;
            ymax: number;
        };
        removeDblClick?: boolean;
        ionToken?: string;
        resolutionScale?: number;
        showSun: boolean;
        showMoon: boolean;
        showSkyBox: boolean;
        showSkyAtmosphere: boolean;
        fog: boolean;
        fxaa: boolean;
        highDynamicRange: boolean;
        backgroundColor: string;
        sceneMode?: Cesium.SceneMode;
        scene3DOnly?: boolean;
        shouldAnimate?: boolean;
        shadows?: boolean;
        useDefaultRenderLoop?: boolean;
        targetFrameRate?: number;
        useBrowserRecommendedResolution?: boolean;
        automaticallyTrackDataSourceClocks?: boolean;
        contextOptions?: any;
        orderIndependentTranslucency?: boolean;
        terrainShadows?: Cesium.ShadowMode;
        mapMode2D?: Cesium.MapMode2D;
        requestRenderMode?: boolean;
        maximumRenderTimeChange?: number;
        globe: {
            show?: boolean;
            baseColor?: string;
            depthTestAgainstTerrain?: boolean;
            showGroundAtmosphere?: boolean;
            enableLighting?: boolean;
            tileCacheSize?: number;
            terrainExaggeration?: number;
            terrainExaggerationRelativeHeight?: number;
        };
        cameraController: {
            zoomFactor?: number;
            constrainedAxis?: boolean;
            minimumZoomDistance?: number;
            maximumZoomDistance?: number;
            minimumCollisionTerrainHeight?: number;
            enableRotate?: boolean;
            enableTranslate?: boolean;
            enableTilt?: boolean;
            enableZoom?: boolean;
            enableCollisionDetection?: boolean;
        };
        clock: {
            currentTime?: string | Cesium.JulianDate;
            multiplier?: number;
        };
    };
    /**
     * 控件参数
     *
     * 以下是mars3d.control定义的控件
     * @property [defaultContextMenu = true] - 是否绑定默认的地图右键菜单
     * @property [mouseDownView = false] - 鼠标滚轮缩放美化样式   {@link MouseDownView}
     * @property [locationBar] - 鼠标提示控件,    {@link LocationBar}
     * @property [locationBar.fps] - 是否显示实时FPS帧率
     * @property [locationBar.format] - 显示内容的格式化html展示的内容格式化字符串。  支持以下模版配置：【鼠标所在位置】 经度:{lng}， 纬度:{lat}， 海拔：{alt}米， 【相机的】 方向角度：{heading}， 俯仰角度：{pitch}， 视高：{cameraHeight}米， 【地图的】 层级：{level}，
     * @property [compass] - 导航球控件   {@link Compass}
     * @property [distanceLegend] - 比例尺控件   {@link DistanceLegend}
     *
     * 以下是Cesium.Viewer所支持的控件相关的options
     * @property [infoBox = true] - 是否显示 点击要素之后显示的信息
     * @property [selectionIndicator = true] - 选择模型时，是否显示绿色框
     * @property [animation = true] - 是否创建 左下角仪表动画面板
     * @property [timeline = true] - 是否创建 下侧时间线控件面板
     * @property [baseLayerPicker = true] - 是否显示 basemaps底图切换按钮
     * @property [fullscreenButton = true] - 是否显示 全屏按钮
     * @property [vrButton = false] - 是否显示 右下角vr虚拟现实按钮
     * @property [geocoder = true] - 是否显示 地名查找控件按钮
     * @property [homeButton = true] - 是否显示  视角复位按钮
     * @property [sceneModePicker = true] - 是否显示  二三维视图切换按钮
     * @property [projectionPicker = false] - 是否显示  用于在透视和正投影之间进行切换按钮
     * @property [navigationHelpButton = true] - 是否显示  帮助按钮
     * @property [navigationInstructionsInitiallyVisible = true] - 在用户明确单击按钮之前是否自动显示navigationHelpButton
     * @property [showRenderLoopErrors = true] - 如果为true，则在发生渲染循环错误时，此小部件将自动向包含错误的用户显示HTML面板。
     */
    type controlOptions = {
        defaultContextMenu?: boolean;
        mouseDownView?: boolean;
        locationBar?: {
            fps?: boolean;
            format?: string | ((...params: any[]) => any);
        };
        compass?: any;
        distanceLegend?: any;
        infoBox?: boolean;
        selectionIndicator?: boolean;
        animation?: boolean;
        timeline?: boolean;
        baseLayerPicker?: boolean;
        fullscreenButton?: boolean;
        vrButton?: boolean;
        geocoder?: boolean | GeocoderService[];
        homeButton?: boolean;
        sceneModePicker?: boolean;
        projectionPicker?: boolean;
        navigationHelpButton?: boolean;
        navigationInstructionsInitiallyVisible?: boolean;
        showRenderLoopErrors?: boolean;
    };
    /**
     * 地形服务配置
     * @property type - 地形类型
     * @property url - 地形服务地址
     * @property [show = false] - 是否启用显示地形
     * @property [requestVertexNormals = false] - 是否应该从服务器请求额外的光照信息，如果可用，以每个顶点法线的形式。
     * @property [requestWaterMask = false] - 是否应该向服务器请求每个瓦的水掩膜(如果有的话)。
     * @property [requestMetadata = true] - 是否应该从服务器请求每个块元数据(如果可用)。
     */
    type terrainOptions = {
        type: TerrainType;
        url: string | Cesium.Resource;
        show?: boolean;
        requestVertexNormals?: boolean;
        requestWaterMask?: boolean;
        requestMetadata?: boolean;
    };
    /**
     * 底图图层配置
     * @property type - 图层类型
     * @property [通用参数] - 与BaseTileLayer类构造参数相同
     * @property [其他参数] - 每种不同type都有自己的不同属性，具体参考{@link LayerType}找到type对应的图层类,查看其构造参数
     */
    type basemapOptions = {
        type: string;
        通用参数?: BaseTileLayer.ConstructorOptions;
        其他参数?: any;
    };
    /**
     * 可以叠加显示的图层配置
     * @property type - 图层类型
     * @property [id] - 图层id标识
     * @property [pid = -1] - 图层父级的id，一般图层管理中使用
     * @property [name = '未命名'] - 图层名称
     * @property [show = true] - 图层是否显示
     * @property [center] - 图层自定义定位视角，默认根据数据情况自动定位。
     * @property [popup] - 当图层支持popup弹窗时，绑定的值
     * @property [popupOptions] - popup弹窗时的配置参数
     * @property [tooltip] - 当图层支持tooltip弹窗时，绑定的值
     * @property [tooltipOptions] - tooltip弹窗时的配置参数
     * @property [其他参数] - 每种type都有自己的不同属性，具体参考{@link LayerType}找到type对应的图层类,查看其构造参数
     */
    type layerOptions = {
        type: string;
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        center?: any;
        popup?: any;
        popupOptions?: Popup.StyleOptions;
        tooltip?: any;
        tooltipOptions?: Popup.StyleOptions;
        其他参数?: any;
    };
    /**
     * Map支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * map.on(mars3d.EventType.click, function (event) {
     *   console.log('单击了地图对象', event)
     * })
     * @property addLayer - 添加图层
     * @property removeLayer - 移除图层
     * @property cameraMoveStart - 相机开启移动前 场景事件
     * @property cameraMoveEnd - 相机移动完成后 场景事件
     * @property cameraChanged - 相机位置完成 场景事件
     * @property preUpdate - 场景更新前 场景事件
     * @property postUpdate - 场景更新后 场景事件
     * @property preRender - 场景渲染前 场景事件
     * @property postRender - 场景渲染后 场景事件
     * @property morphStart - 场景模式(2D/3D/哥伦布)变换前 场景事件
     * @property morphComplete - 完成场景模式(2D/3D/哥伦布)变换 场景事件
     * @property clockTick - 时钟跳动 场景事件
     * @property renderError - 场景渲染失败（需要刷新页面）
     * @property click - 左键单击 鼠标事件
     * @property clickGraphic - 左键单击到矢量或模型数据时 鼠标事件
     * @property clickTileGraphic - 左键单击到wms或arcgis瓦片服务的对应矢量数据时
     * @property clickMap - 左键单击地图空白（未单击到矢量或模型数据）时 鼠标事件
     * @property dblClick - 左键双击 鼠标事件
     * @property leftDown - 左键鼠标按下 鼠标事件
     * @property leftUp - 左键鼠标按下后释放 鼠标事件
     * @property mouseMove - 鼠标移动 鼠标事件
     * @property mouseMoveTarget - 鼠标移动（拾取目标，并延迟处理） 鼠标事件
     * @property wheel - 鼠标滚轮滚动 鼠标事件
     * @property rightClick - 右键单击 鼠标事件
     * @property rightDown - 右键鼠标按下 鼠标事件
     * @property rightUp - 右键鼠标按下后释放 鼠标事件
     * @property middleClick - 中键单击 鼠标事件
     * @property middleDown - 中键鼠标按下 鼠标事件
     * @property middleUp - 中键鼠标按下后释放 鼠标事件
     * @property pinchStart - 在触摸屏上两指缩放开始 鼠标事件
     * @property pinchEnd - 在触摸屏上两指缩放结束 鼠标事件
     * @property pinchMove - 在触摸屏上两指移动 鼠标事件
     * @property mouseDown - 鼠标按下 [左中右3键都触发] 鼠标事件
     * @property mouseUp - 鼠标按下后释放 [左中右3键都触发] 鼠标事件
     * @property mouseOver - 鼠标移入 鼠标事件
     * @property mouseOut - 鼠标移出 鼠标事件
     * @property keydown - 按键按下 键盘事件
     * @property keyup - 按键按下后释放 键盘事件
     * @property popupOpen - popup弹窗打开后
     * @property popupClose - popup弹窗关闭
     * @property tooltipOpen - tooltip弹窗打开后
     * @property tooltipClose - tooltip弹窗关闭
     */
    type EventType = {
        addLayer: string;
        removeLayer: string;
        cameraMoveStart: string;
        cameraMoveEnd: string;
        cameraChanged: string;
        preUpdate: string;
        postUpdate: string;
        preRender: string;
        postRender: string;
        morphStart: string;
        morphComplete: string;
        clockTick: string;
        renderError: string;
        click: string;
        clickGraphic: string;
        clickTileGraphic: string;
        clickMap: string;
        dblClick: string;
        leftDown: string;
        leftUp: string;
        mouseMove: string;
        mouseMoveTarget: string;
        wheel: string;
        rightClick: string;
        rightDown: string;
        rightUp: string;
        middleClick: string;
        middleDown: string;
        middleUp: string;
        pinchStart: string;
        pinchEnd: string;
        pinchMove: string;
        mouseDown: string;
        mouseUp: string;
        mouseOver: string;
        mouseOut: string;
        keydown: string;
        keyup: string;
        popupOpen: string;
        popupClose: string;
        tooltipOpen: string;
        tooltipClose: string;
    };
}

/**
 * 地图类 ，这是构造三维地球的一切的开始起点。
 * @param id - 地图div容器的id 或 已构造好的Viewer对象
 * @param [options = {}] - 参数对象:
 * @param options.scene - 场景参数
 * @param options.control - 控件参数
 * @param options.terrain - 地形服务配置
 * @param options.basemaps - 底图图层配置
 * @param options.layers - 可以叠加显示的图层配置
 * @param [options.templateValues] - 图层中统一的url模版，。比如可以将服务url前缀统一使用模板，方便修改或动态配置。
 * @param [options.chinaCRS = ChinaCRS.WGS84] - 标识当前三维场景的国内坐标系（用于部分图层内对比判断来自动纠偏或加偏）
 * @param [options.lang] - 使用的语言（如中文、英文等）。
 */
declare class Map extends BaseClass {
    constructor(id: string | Cesium.Viewer, options?: {
        scene: Map.sceneOptions;
        control: Map.controlOptions;
        terrain: Map.terrainOptions;
        basemaps: Map.basemapOptions[];
        layers: Map.layerOptions[];
        templateValues?: any;
        chinaCRS?: ChinaCRS;
        lang?: LangType;
    });
    /**
     * 地图对应的Cesium原生的Viewer对象
     */
    readonly viewer: Cesium.Viewer;
    /**
     * 获取地图DOM容器。
     */
    readonly container: Element;
    /**
     * 获取场景。
     */
    readonly scene: Cesium.Scene;
    /**
     * 获取相机
     */
    readonly camera: Cesium.Camera;
    /**
     * 获取Canvas画布
     */
    readonly canvas: HTMLCanvasElement;
    /**
     * 获取将在地球上渲染的ImageryLayer图像图层的集合
     */
    readonly imageryLayers: Cesium.ImageryLayerCollection;
    /**
     * 获取要可视化的 DataSource 实例集。
     */
    readonly dataSources: Cesium.DataSourceCollection;
    /**
     * 获取未绑定到特定数据源的实体的集合。这是 dataSourceDisplay.defaultDataSource.entities 的快捷方式。
     */
    readonly entities: Cesium.EntityCollection;
    /**
     * 获取时钟。
     */
    readonly clock: Cesium.Clock;
    /**
     * 获取 CesiumWidget
     */
    readonly cesiumWidget: Cesium.CesiumWidget;
    /**
     * 获取或设置相机当前正在跟踪的Entity实例。
     */
    trackedEntity: Cesium.Entity;
    /**
     * 获取或设置当前的地形服务
     */
    terrainProvider: Cesium.TerrainProvider;
    /**
     * 是否开启地形
     */
    hasTerrain: boolean;
    /**
     * 获取或设置当前显示的底图，设置时可以传入图层id或name
     */
    basemap: string | number | BaseTileLayer;
    /**
     * 是否只拾取模型上的点
     */
    onlyPickModelPosition: boolean;
    /**
     * 获取鼠标事件控制器
     */
    readonly mouseEvent: MouseEvent;
    /**
     * 获取键盘漫游控制器
     */
    readonly keyboardRoam: KeyboardRoam;
    /**
     * 获取config.json预先传入的构造完成的控件对象
     */
    readonly controls: KeyboardRoam;
    /**
     * 默认绑定的图层，简单场景时快捷方便使用
     */
    readonly graphicLayer: GraphicLayer;
    /**
     * 获取当前地图层级（概略），一般为0-21层
     */
    readonly level: Int;
    /**
     * 是否固定光照，
     *  true：可避免gltf、3dtiles模型随时间存在亮度不一致。
     */
    fixedLight: boolean;
    /**
     * 使用的语言（如中文、英文等）。
     */
    readonly lang: LangType;
    /**
     * 设置Scene场景参数
     * @param options - 参数
     * @returns 当前对象本身，可以链式调用
     */
    setSceneOptions(options: Map.sceneOptions): this;
    /**
     * 获取地图的配置参数，即new Map传入的参数。
     * @returns 地图的配置参数
     */
    getOptions(): any;
    /**
     * 获取平台内置的右键菜单
     * @returns 右键菜单
     */
    getDefaultContextMenu(): object[];
    /**
     * 取地图屏幕中心点坐标
     * @returns 屏幕中心点坐标
     */
    getCenter(): LatLngPoint;
    /**
     * 提取地球当前视域边界,示例：{ xmin: 70,  xmax: 140,  ymin: 0,  ymax: 55, height: 0, }
     * @param [options = {}] - 参数对象:
     * @param [options.formatNum = false] - 是否格式化小数位，只保留6位小数
     * @returns 当前视域边界
     */
    getExtent(options?: {
        formatNum?: boolean;
    }): any;
    /**
     * 截图，导出地图场景图片
     * @param [options = {}] - 参数对象:
     * @param [options.download = true] - 是否自动下载图片
     * @param [options.filename = '场景出图_' + width + 'x' + height] - 图片名称
     * @param [options.width = canvas.width] - 图片的高度像素值
     * @param [options.height = canvas.height] - 图片的高度像素值
     * @param [options.type = 'image/jpeg'] - 图片格式
     * @param [options.encoderOptions = 0.92] - 在指定图片格式为 image/jpeg 或 image/webp的情况下，可以从 0 到 1 的区间内选择图片的质量。如果超出取值范围，将会使用默认值 0.92。其他参数会被忽略。
     * @param [options.callback] - 截图完成后的回调方法
     * @returns 无
     */
    expImage(options?: {
        download?: boolean;
        filename?: string;
        width?: number;
        height?: number;
        type?: string;
        encoderOptions?: number;
        callback?: (...params: any[]) => any;
    }): void;
    /**
     * 设置鼠标状态为“+”号效果，比如标绘时切换
     * @param val - 是否“+”号效果
     * @returns 无
     */
    setCursor(val: boolean): void;
    /**
     * 获取坐标位置的3dtiles模型对象
     * @param positions - 坐标  或 坐标数组
     * @returns 3dtiles模型对象
     */
    pick3DTileset(positions: Cesium.Cartesian3 | Cesium.Cartesian3[]): Cesium.Cesium3DTileset;
    /**
     * 重新设置basemps底图图层，对options.basemaps重新赋值
     * @param arr - 底图图层配置
     * @returns 图层数组
     */
    setBasemapsOptions(arr: Map.basemapOptions[]): BaseLayer[];
    /**
     * 重新设置layers图层，对options.layers重新赋值
     * @param arr - 可以叠加显示的图层配置
     * @returns 图层数组
     */
    setLayersOptions(arr: Map.layerOptions[]): BaseLayer[];
    /**
     * 获取图层ID值，按顺序取值。
     * 没有id的图层，会自动使用本方法进行id赋值处理
     * @returns 图层ID
     */
    getNextLayerId(): Int;
    /**
     * 添加图层到地图上
     * @param layer - 图层对象
     * @param showVal - 如果传值，覆盖图层的show属性
     * @returns 当前对象本身，可以链式调用
     */
    addLayer(layer: BaseLayer, showVal: boolean): this;
    /**
     * 移除图层
     * @param layer - 需要移除的图层
     * @param hasDestory - 是否释放
     * @returns 当前对象本身，可以链式调用
     */
    removeLayer(layer: BaseLayer, hasDestory: boolean): this;
    /**
     * 是否有指定的图层存在（就是已经addLayer的图层）
     * @param layer - 指定的图层或图层ID
     * @returns 是否存在
     */
    hasLayer(layer: BaseLayer | string): boolean;
    /**
     * 遍历每一个图层并将其作为参数传递给回调函数
     * @param method - 回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 当前对象本身,可以链式调用
     */
    eachLayer(method: (...params: any[]) => any, context: any): this;
    /**
     * 根据ID或取图层
     * @param id - 图层id或uuid
     * @returns 图层对象
     */
    getLayerById(id: string | number): BaseLayer;
    /**
     * 根据指定属性获取图层
     * @param key - 图层值（如id、name值） 或  配置的图层参数对象
     * @param [attrName = 'id'] - 属性名称
     * @returns 图层对象
     */
    getLayer(key: any | string | number, attrName?: string): BaseLayer;
    /**
     * 获取所有图层
     * @param options - 参数对象，包括以下：
     * @param [options.basemaps = false] - 是否包含basemps中配置的所有图层
     * @param [options.layers = false] - 是否包含layers中配置的所有图层
     * @param [options.filter = false] - 是否排除layers和baseps的图层
     * @returns 图层数组
     */
    getLayers(options: {
        basemaps?: boolean;
        layers?: boolean;
        filter?: boolean;
    }): BaseLayer[];
    /**
     * 获取所有basemps底图图层
     * @param [removeEmptyGroup = false] - 是否移除 空图层组
     * @returns 图层数组
     */
    getBasemaps(removeEmptyGroup?: boolean): BaseLayer[];
    /**
     * 获取所有瓦片图层，可以用于卷帘对比
     * @returns 图层数组
     */
    getTileLayers(): BaseLayer[];
    /**
     * 添加控件到地图上
     * @param control - 控件对象
     * @param enabledVal - 如果传值，覆盖控件的enabled属性
     * @returns 当前对象本身，可以链式调用
     */
    addControl(control: BaseControl, enabledVal: boolean): this;
    /**
     * 移除控件
     * @param control - 需要移除的控件
     * @param hasDestory - 是否释放
     * @returns 当前对象本身，可以链式调用
     */
    removeControl(control: BaseControl, hasDestory: boolean): this;
    /**
     * 是否有指定的控件存在（就是已经addControl的控件）
     * @param control - 指定的控件或控件ID
     * @returns 是否存在
     */
    hasControl(control: BaseLayer | string): boolean;
    /**
     * 遍历每一个控件并将其作为参数传递给回调函数
     * @param method - 回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 当前对象本身,可以链式调用
     */
    eachControl(method: (...params: any[]) => any, context: any): this;
    /**
     * 根据指定属性获取控件
     * @param key - 属性值（如id、name值）
     * @param [attrName = 'id'] - 属性名称
     * @returns 控件对象
     */
    getControl(key: any | string | number, attrName?: string): BaseControl;
    /**
     * 添加特效对象到地图上
     * @param item - 特效对象
     * @returns 当前对象本身，可以链式调用
     */
    addEffect(item: BaseEffect): this;
    /**
     * 移除特效对象
     * @param item - 需要移除的特效对象
     * @param hasDestory - 是否释放
     * @returns 当前对象本身，可以链式调用
     */
    removeEffect(item: BaseEffect, hasDestory: boolean): this;
    /**
     * 根据指定属性获取Thing对象
     * @param key - 属性值（如id、name值）
     * @param [attrName = 'id'] - 属性名称
     * @returns Thing对象
     */
    getEffect(key: string | any, attrName?: string): BaseEffect;
    /**
     * 添加Thing对象到地图上
     * @param item - Thing对象
     * @returns 当前对象本身，可以链式调用
     */
    addThing(item: BaseThing): this;
    /**
     * 移除Thing对象
     * @param item - 需要移除的Thing对象
     * @param hasDestory - 是否释放
     * @returns 当前对象本身，可以链式调用
     */
    removeThing(item: BaseThing, hasDestory: boolean): this;
    /**
     * 是否有指定的Thing对象存在（就是已经addThing的图层）
     * @param thing - 指定的Thing对象或Thing对象ID
     * @returns 是否存在
     */
    hasThing(thing: BaseThing | string): boolean;
    /**
     * 遍历每一个Thing对象并将其作为参数传递给回调函数
     * @param method - 回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 当前对象本身,可以链式调用
     */
    eachThing(method: (...params: any[]) => any, context: any): this;
    /**
     * 根据指定属性获取Thing对象
     * @param key - 属性值（如id、name值）
     * @param [attrName = 'id'] - 属性名称
     * @returns Thing对象
     */
    getThing(key: string | any, attrName?: string): BaseThing;
    /**
     * 根据设置的lang参数，获取当前key对应语言的文本内容。
     * @param key - 文本key
     * @returns lang参数指定的对应文本内容
     */
    getLangText(key: string): void;
    /**
     * 放大地图
     * @param [relativeAmount = 2] - 相对量
     * @returns 当前对象本身，可以链式调用
     */
    zoomIn(relativeAmount?: number): this;
    /**
     * 缩小地图
     * @param [relativeAmount = 2] - 相对量
     * @returns 当前对象本身，可以链式调用
     */
    zoomOut(relativeAmount?: number): this;
    /**
     * 设置鼠标操作习惯方式。
     * 默认为中键旋转，右键拉伸远近。传`rightTilt:true`可以设置为右键旋转，中键拉伸远近。
     * @param [rightTilt = false] - 是否右键旋转
     * @returns 无
     */
    changeMouseModel(rightTilt?: boolean): void;
    /**
     * 设置鼠标操作限定的Pitch范围
     * @param max - 最大值（角度值）
     * @param [min = -90] - 最小值（角度值）
     * @returns 无
     */
    setPitchRange(max: number, min?: number): void;
    /**
     * 设置相机pitch值，保持地图中心位置不变。
     * @param pitch - 俯仰角度值， 0至360
     * @param [options] - 具有以下属性的对象:
     * @param [options.heading] - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param [options.duration] - 飞行持续时间（秒）。如果省略，内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @returns 无
     */
    setPitch(pitch: number, options?: {
        heading?: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
    }): void;
    /**
     * 清除鼠标操作限定的Pitch范围
     * @returns 无
     */
    clearPitchRange(): void;
    /**
     * 停止视角定位等操作
     * @returns 当前对象本身，可以链式调用
     */
    cancelFlight(): this;
    /**
     * 获取当前相机视角参数，
     * 示例：{"lat":30.526361,"lng":116.335987,"alt":45187,"heading":0,"pitch":-45}
     * @param [options = {}] - 参数对象:
     * @param [options.simplify = true] - 是否简化，false时保留角度1位小数位
     * @returns 当前相机视角参数
     */
    getCameraView(options?: {
        simplify?: boolean;
    }): any;
    /**
     * 将相机本身定位至指定位置
     * @param cameraView - 飞行参数
     * @param cameraView.lng - 经度值, 180 - 180
     * @param cameraView.lat - 纬度值, -90 - 90
     * @param cameraView.alt - 高度值
     * @param cameraView.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0-360
     * @param cameraView.pitch - 俯仰角度值，绕纬度线旋转角度, 0-360
     * @param cameraView.roll - 翻滚角度值，绕经度线旋转角度, 0-360
     * @param [options = {}] - 参数对象:
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 无
     */
    setCameraView(cameraView: {
        lng: number;
        lat: number;
        alt: number;
        heading: number;
        pitch: number;
        roll: number;
    }, options?: {
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): void;
    /**
     * 将相机本身定位至指定位置，同 setCameraView 方法
     * 为了兼容老版本用户习惯和center参数名称一致而用的别名方法。
     * @param cameraView - 飞行参数，同 setCameraView 方法
     * @param [options = {}] - 参数对象，同 setCameraView 方法
     * @returns 无
     */
    centerAt(cameraView: any, options?: any): void;
    /**
     * 飞行到默认视角，
     * 一般为config.json中的center参数配置的视角。
     * @param [options = {}] - 参数对象:
     * @param [options.duration = null] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @returns 无
     */
    flyHome(options?: {
        duration?: number;
    }): void;
    /**
     * 定位到多个相机视角位置，按数组顺序播放
     * @param arr - 视角参数数组，每个对象包含：
     * @param arr.lng - 经度值, -180 至 180
     * @param arr.lat - 纬度值, -90 至 90
     * @param arr.alt - 高度值
     * @param arr.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param arr.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param arr.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [arr.duration = null] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [arr.stop = 1] - 该步骤飞行结束的停留时间（单位：秒）。
     * @param [arr.onStart] - 该步骤飞行开始前的回调方法
     * @param [arr.onEnd] - 该步骤飞行开始结束后的回调方法
     * @param [options = {}] - 参数对象:
     * @param [options.complete] - 全部飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction = Cesium.EasingFunction.LINEAR_NONE] - 控制在飞行过程中如何插值时间。
     * @returns 无
     */
    setCameraViewList(arr: {
        lng: number;
        lat: number;
        alt: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        stop?: number;
        onStart?: (...params: any[]) => any;
        onEnd?: (...params: any[]) => any;
    }[], options?: {
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): void;
    /**
     * 飞行至Cesium相关矢量对象处，是Cesium本身的flyTo方法。
     *
     * 将相机移至提供的一个或多个实体或数据源。如果数据源仍在加载过程中，或者可视化仍在加载中，此方法在执行飞行之前等待数据准备就绪。
     * 偏移量是在以边界球中心为中心的局部东北向上参考框中的航向/俯仰/范围。航向角和俯仰角是在局部的东西向北参考系中定义的。航向是从y轴到x轴的角度。间距是从xy平面开始的旋转。正螺距角度在平面上方。负俯仰角在平面下方。范围是到中心的距离。如果范围是零，则将计算范围以使整个边界球都可见。
     *
     * 在2D模式下，必须有一个俯视图。摄像机将被放置在目标上方并向下看。上方的高度目标将是范围。航向将根据偏移量确定。如果标题不能根据偏移量确定，航向将为北。
     * @param target - 需要定位的Cesium内部对象。您还可以传递一个： Cesium.Entity|Cesium.Entity[]|Cesium.EntityCollection|Cesium.DataSource|Cesium.ImageryLayer|Cesium.Cesium3DTileset|Cesium.TimeDynamicPointCloud|Promise.<Entity|Entity[]|Cesium.EntityCollection|Cesium.DataSource|Cesium.ImageryLayer|Cesium.Cesium3DTileset|Cesium.TimeDynamicPointCloud>
     * @param [options] - 具有以下属性的对象:
     * @param [options.duration = 3.0] - 飞行持续时间（秒）。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.offset] - 在局部东北朝上的参考框中，距目标的偏移量为中心。
     * @returns 如果飞行成功则解析为true的承诺，如果当前未在场景中可视化目标或取消飞行，则为false的Promise。 //TODO:清理实体提及
     */
    flyTo(target: any, options?: {
        duration?: number;
        maximumHeight?: number;
        offset?: HeadingPitchRange;
    }): Promise<Boolean>;
    /**
     * 飞行定位到 Graphic矢量对象 处
     * @param graphic - 矢量对象
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.minHeight] - 定位时相机的最小高度值，用于控制避免异常数据
     * @param [options.maxHeight] - 定位时相机的最大高度值，用于控制避免异常数据
     * @param options.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param options.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param options.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 无
     */
    flyToGraphic(graphic: BaseGraphic, options?: {
        radius: number;
        scale?: number;
        minHeight?: number;
        maxHeight?: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): void;
    /**
     * 定位至坐标数组
     * @param positions - 坐标数组
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.minHeight] - 定位时相机的最小高度值，用于控制避免异常数据
     * @param [options.maxHeight] - 定位时相机的最大高度值，用于控制避免异常数据
     * @param options.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param options.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param options.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 无
     */
    flyToPositions(positions: Cesium.Cartesian3[], options?: {
        radius: number;
        scale?: number;
        minHeight?: number;
        maxHeight?: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): void;
    /**
     * 相机飞行定位至矩形区域
     * @param extent - 飞行参数, Object时可以传入：
     * @param extent.xmin - 最小经度值, -180 至 180
     * @param extent.xmax - 最大纬度值, -180 至 180
     * @param extent.ymin - 最小纬度值, -90 至 90
     * @param extent.ymax - 最大纬度值, -90 至 90
     * @param [extent.height = 0] - 矩形高度值
     * @param [options = {}] - 参数对象:
     * @param [options.scale] - 缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.minHeight] - 定位时相机的最小高度值，用于控制避免异常数据
     * @param [options.maxHeight] - 定位时相机的最大高度值，用于控制避免异常数据
     * @param options.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param options.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param options.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 无
     */
    flyToExtent(extent: {
        xmin: number;
        xmax: number;
        ymin: number;
        ymax: number;
        height?: number;
    }, options?: {
        scale?: number;
        minHeight?: number;
        maxHeight?: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): void;
    /**
     * 定位至目标点(非相机位置)
     * @param point - 目标点位置（视角中心点）
     * @param [options = {}] - 具有以下属性的对象:
     * @param options.radius - 相机距离目标点的距离（单位：米）
     * @param options.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param options.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param options.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [options.duration] - 飞行持续时间（秒）。如果省略，内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.clampToGround] - 是否贴地对象,true时异步计算实际高度值后进行定位。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 表示飞行完成后摄像机将位于的参考帧的变换矩阵。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机的飞行角度高于该值，请在飞行过程中调整俯仰角度以向下看，并将地球保持在视口中。
     * @param [options.flyOverLongitude] - 地球上2点之间总是有两种方式。此选项会迫使相机选择战斗方向以在该经度上飞行。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 无
     */
    flyToPoint(point: LatLngPoint | Cesium.Cartesian3, options?: {
        radius: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        clampToGround?: boolean;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        easingFunction?: EasingFunction.Callback;
    }): void;
    /**
     * 是否在调用了openFlyAnimation正在进行开场动画
     * @returns 是否在开场动画
     */
    isFlyAnimation(): boolean;
    /**
     * 执行开场动画，动画播放地球飞行定位到指定区域
     * @param [options = {}] - 参数对象:
     * @param [options.center = getCameraView()] - 飞行到的指定区域视角参数
     * @param [options.callback = null] - 飞行结束的回调方法
     * @returns 无
     */
    openFlyAnimation(options?: {
        center?: any;
        callback?: (...params: any[]) => any;
    }): void;
    /**
     * 执行旋转地球动画
     * @param [options = {}] - 参数对象:
     * @param [options.duration = 10] - 动画时长（单位：秒）
     * @param [options.center = getCameraView()] - 飞行到的指定区域视角参数
     * @param [options.callback = null] - 飞行结束的回调方法
     * @returns 无
     */
    rotateAnimation(options?: {
        duration?: number;
        center?: any;
        callback?: (...params: any[]) => any;
    }): void;
    /**
     * 清除已高亮的矢量对象
     * @returns 无
     */
    closeHighlight(): void;
    /**
     * 高亮矢量对象
     * @param [graphic] - 矢量对象
     * @param [highlightStyle] - 高亮的样式，具体见各{@link GraphicType}矢量数据的style参数。
     * @returns 无
     */
    openHighlight(graphic?: BaseGraphic, highlightStyle?: any): void;
    /**
     * 打开Popup弹窗
     * @param position - 矢量对象 或 显示的位置
     * @param content - 弹窗内容html字符串，或者 回调方法 或者矢量对象/图层。
     * @param options - 配置参数
     * @returns 当前对象本身，可以链式调用
     */
    openPopup(position: LatLngPoint | Cesium.Cartesian3, content: string | ((...params: any[]) => any) | BaseGraphic | BaseGraphicLayer, options: Popup.StyleOptions): this;
    /**
     * 关闭Popup弹窗
     * @returns 当前对象本身，可以链式调用
     */
    closePopup(): this;
    /**
     * 打开Tooltip弹窗
     * @param [position] - 矢量对象 或 显示的位置
     * @param content - 弹窗内容html字符串，或者 回调方法
     * @param options - 配置参数
     * @returns 当前对象本身，可以链式调用
     */
    openTooltip(position?: LatLngPoint | Cesium.Cartesian3, content: string | ((...params: any[]) => any), options: Popup.StyleOptions): this;
    /**
     * 关闭Tooltip弹窗
     * @returns 当前对象本身，可以链式调用
     */
    closeTooltip(): this;
    /**
     * 获取绑定的右键菜单数组
     * @returns 右键菜单数组
     */
    getContextMenu(): object[];
    /**
     * 绑定地图的默认右键菜单
     * @example
     * //内置的默认右键菜单获取方法
     *     var defaultContextmenuItems =map.getDefaultContextMenu()
     *     map.bindContextMenu(defaultContextmenuItems)
     * @param content - 右键菜单配置数组，数组中每一项包括：
     * @param [content.text] - 菜单文字
     * @param [content.iconCls] - 小图标css
     * @param [content.show] - 菜单项是否显示的回调方法
     * @param [content.callback] - 菜单项单击后的回调方法
     * @param [content.children] - 当有二级子菜单时，配置数组。
     * @param [options = {}] - 参数对象(预留，目前未用)
     * @returns 当前对象本身，可以链式调用
     */
    bindContextMenu(content: {
        text?: string;
        iconCls?: string;
        show?: ((...params: any[]) => any) | boolean;
        callback?: (...params: any[]) => any;
        children?: object[];
    }[], options?: any): this;
    /**
     * 解除绑定的右键菜单
     * @returns 当前对象本身，可以链式调用
     */
    unbindContextMenu(): this;
    /**
     * 打开右键菜单
     * @param [position] - 显示的位置
     * @returns 当前对象本身，可以链式调用
     */
    openContextMenu(position?: Cesium.Cartesian3): this;
    /**
     * 关闭右键菜单
     * @returns 当前对象本身，可以链式调用
     */
    closeContextMenu(): this;
    /**
     * 显示小提示窗，一般用于鼠标操作的提示。
     * @param position - 显示的屏幕坐标位置 或 笛卡尔坐标位置
     * @param message - 显示的内容
     * @returns 当前对象本身，可以链式调用
     */
    openSmallTooltip(position: Cesium.Cartesian2 | Cesium.Cartesian3, message: any): this;
    /**
     * 关闭小提示窗
     * @returns 当前对象本身，可以链式调用
     */
    closeSmallTooltip(): this;
    /**
     * 销毁地图
     * @returns 无
     */
    destroy(): void;
    /**
     * 绑定指定类型事件监听器
     * @param types - 事件类型
     * @param fn - 绑定的监听器回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 当前对象本身,可以链式调用
     */
    on(types: EventType | EventType[], fn: (...params: any[]) => any, context: any): this;
    /**
     * 解除绑定指定类型事件监听器
     * @param types - 事件类型
     * @param fn - 绑定的监听器回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 当前对象本身,可以链式调用
     */
    off(types: EventType | EventType[], fn: (...params: any[]) => any, context: any): this;
}

/**
 * 材质属性(Entity使用) 基础类
 * @param options - 参数对象
 */
declare class BaseMaterialProperty {
    constructor(options: any);
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 圆形扫描效果 材质属性
 * @param options - 参数对象，包括以下：
 * @param options.image - 背景图片URL
 * @param [options.color = new Cesium.Color(1, 0, 0, 0.5))] - 颜色
 */
declare class CircleScanMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        image: string;
        color?: string | Cesium.Color;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
    /**
     * 颜色
     */
    color: Cesium.Color;
    /**
     * 背景图片URL
     */
    image: string;
}

/**
 * 圆形扩散波纹效果 材质属性
 * @param options - 参数对象，包括以下：
 * @param [options.color = Cesium.Color.YELLOW] - 颜色
 * @param [options.speed = 10] - 速度
 * @param [options.count = 1] - 圆圈个数
 * @param [options.gradient = 0.1] - 透明度的幂方（0-1）,0表示无虚化效果，1表示虚化成均匀渐变
 */
declare class CircleWaveMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        color?: string | Cesium.Color;
        speed?: number;
        count?: number;
        gradient?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
    /**
     * 颜色
     */
    color: Cesium.Color;
    /**
     * 速度
     */
    speed: number;
    /**
     * 圆圈个数
     */
    count: number;
    /**
     * 透明度的幂方（0-1）,0表示无虚化效果，1表示虚化成均匀渐变
     */
    gradient: number;
    /**
     * 颜色
     */
    color: Cesium.Color;
    /**
     * 线的背景颜色
     */
    bgColor: Cesium.Color;
    /**
     * 速度
     */
    speed: number;
    /**
     * 颜色
     */
    color: Cesium.Color;
    /**
     * 速度
     */
    speed: number;
    /**
     * 基础颜色
     */
    baseWaterColor: Cesium.Color;
    /**
     * 从水中混合到非水域时使用的rgba颜色对象。
     */
    blendColor: Cesium.Color;
    /**
     * 单一通道纹理用来指示水域的面积。
     */
    specularMap: string;
    /**
     * 水正常扰动的法线图。
     */
    normalMap: string;
}

/**
 * 球体: 电弧球体效果  材质
 * @param options - 参数对象，包括以下：
 * @param [options.color = new Cesium.Color(1, 0, 0, 1.0)] - 颜色
 * @param [options.speed = 5.0] - 速度，值越大越快
 */
declare class EllipsoidElectricMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        color?: Cesium.Color;
        speed?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 球体: 波纹球体效果  材质
 * @param options - 参数对象，包括以下：
 * @param [options.color = new Cesium.Color(1, 0, 0, 1.0)] - 颜色
 * @param [options.speed = 5.0] - 速度，值越大越快
 */
declare class EllipsoidWaveMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        color?: Cesium.Color;
        speed?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 通用：图片 材质2  材质属性,  没有加载完成前的白色闪烁，但也不支持纯白色的图片
 * @param options - 参数对象，包括以下：
 * @param options.image - 背景图片URL
 * @param [options.opacity = 1] - 透明度
 */
declare class Image2MaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        image: string;
        opacity?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
    /**
     * 透明度，0-1
     */
    opacity: number;
    /**
     * 背景图片URL
     */
    image: string;
}

/**
 * 线状: 闪烁线 材质
 * @param options - 参数对象，包括以下：
 * @param [options.color = new Cesium.Color(1, 0, 0, 1.0)] - 颜色
 * @param [options.speed = 2] - 速度，值越大越快
 */
declare class LineFlickerMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        color?: Cesium.Color;
        speed?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 线状 流动效果 材质
 * @param options - 参数对象，包括以下：
 * @param [options.color = new Cesium.Color(1, 0, 0, 1.0)] - 颜色
 * @param [options.speed = 2] - 速度，值越大越快
 * @param [options.percent = 0.04] - 比例
 * @param [options.alpha = 0.1] - 透明程度 0.0-1.0
 */
declare class LineFlowColorMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        color?: Cesium.Color;
        speed?: number;
        percent?: number;
        alpha?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 线状 流动效果 材质
 * @param options - 参数对象，包括以下：
 * @param options.image - 背景图片URL
 * @param [options.color = new Cesium.Color(1, 0, 0, 1.0)] - 背景图片颜色
 * @param [options.repeat = new Cesium.Cartesian2(1.0, 1.0)] - 横纵方向重复次数
 * @param [options.axisY = false] - 是否Y轴朝上
 * @param [options.speed = 10] - 速度，建议取值范围1-100
 * @param [options.hasImage2 = false] - 是否有2张图片的混合模式
 * @param [options.image2] - 第2张背景图片URL地址
 * @param [options.color2 = new Cesium.Color(1, 1, 1)] - 第2张背景图片颜色
 */
declare class LineFlowMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        image: string;
        color?: string | Cesium.Color;
        repeat?: Cesium.Cartesian2;
        axisY?: boolean;
        speed?: number;
        hasImage2?: boolean;
        image2?: string;
        color2?: string | Cesium.Color;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 线状: 轨迹线 材质
 * @param options - 参数对象，包括以下：
 * @param [options.color = new Cesium.Color(1, 0, 0, 1.0)] - 颜色
 * @param [options.speed = 5.0] - 速度，值越大越快
 */
declare class LineTrailMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        color?: Cesium.Color;
        speed?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 线状 OD线效果 材质
 * @param options - 参数对象，包括以下：
 * @param [options.color = 随机色] - 运动对象的颜色
 * @param [options.bgColor] - 线的背景颜色
 * @param [options.speed = 20 + 10 * Math.random()] - 速度
 * @param [options.startTime = Math.random] - 开始的时间系数
 * @param [options.bidirectional = 0] - 运行形式：0 正向运动 1 反向运动 2 双向运动
 */
declare class ODLineMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        color?: string | Cesium.Color;
        bgColor?: string | Cesium.Color;
        speed?: number;
        startTime?: number;
        bidirectional?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 面状： 渐变面 材质
 * @param options - 参数对象，包括以下：
 * @param [options.color = new Cesium.Color(1.0, 1.0, 0.0, 0.5)] - 颜色
 * @param [options.alphaPower = 1.5] - 透明度系数
 * @param [options.diffusePower = 1.6] - 漫射系数
 */
declare class PolyGradientMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        color?: string | Cesium.Color;
        alphaPower?: number;
        diffusePower?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 圆形: 雷达线(圆+旋转半径线) 材质
 * @param options - 参数对象，包括以下：
 * @param [options.color = new Cesium.Color(1, 0, 0, 1.0)] - 颜色
 * @param [options.speed = 5.0] - 速度，值越大越快
 */
declare class RadarLineMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        color?: Cesium.Color;
        speed?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 圆形: 雷达线(圆+旋转半径线) 材质
 * @param options - 参数对象，包括以下：
 * @param [options.color = new Cesium.Color(1, 0, 0, 1.0)] - 颜色
 * @param [options.speed = 5.0] - 速度，值越大越快
 */
declare class RadarWaveMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        color?: Cesium.Color;
        speed?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 矩形面： 轮播图  材质
 * @param options - 参数对象，包括以下：
 * @param options.image - 图片URL
 * @param [options.color = Cesium.Color.WHITE] - 颜色和透明度
 * @param [options.speed = 1] - 速度，值越大越快
 * @param [options.pure = false] - 是否纯色
 */
declare class RectSlideMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        image: string;
        color?: Cesium.Color;
        speed?: number;
        pure?: boolean;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 面状: 用于面状对象的 扫描线放大效果 材质属性
 * @param options - 参数对象，包括以下：
 * @param [options.color = Cesium.Color.YELLOW] - 颜色
 * @param [options.speed = 10] - 速度
 */
declare class ScanLineMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        color?: string | Cesium.Color;
        speed?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 文字贴图 entity材质
 * @param options - 参数对象，包括以下：
 * @param [options.text] - 文本内容
 * @param [options.font_family = "楷体"] - 字体 ,可选项：微软雅黑,宋体,楷体,隶书,黑体,
 * @param [options.font_size = 30] - 字体大小
 * @param [options.font_weight = "normal"] - 是否加粗 ,可选项：bold (解释：是),normal (解释：否),
 * @param [options.font_style = "normal"] - 是否斜体 ,可选项：italic (解释：是),normal (解释：否),
 * @param [options.font = '30px normal normal 楷体'] - 上叙4个属性的一次性指定CSS字体的属性。
 * @param [options.fill = true] - 是否填充
 * @param [options.color = "#ffff00"] - 文本颜色
 * @param [options.stroke = true] - 是否描边文本。
 * @param [options.strokeColor = new Cesium.Color(1.0, 1.0, 1.0, 0.8)] - 描边的颜色。
 * @param [options.strokeWidth = 2] - 描边的宽度。
 * @param [options.backgroundColor = new Cesium.Color(1.0, 1.0, 1.0, 0.1)] - 画布的背景色。
 * @param [options.outlineWidth] - 边框的宽度。
 * @param [options.outlineColor = fillColor] - 矩形边框的颜色。
 * @param [options.padding = 10] - 要在文本周围添加的填充的像素大小。
 * @param [options.textBaseline = 'top'] - 文本的基线。
 * @param [options.onCustomCanvas] - 支持对生成后的Canvas做自定义处理。
 */
declare class TextMaterialProperty extends Image2MaterialProperty {
    constructor(options: {
        text?: string;
        font_family?: string;
        font_size?: number;
        font_weight?: string;
        font_style?: string;
        font?: string;
        fill?: boolean;
        color?: string;
        stroke?: boolean;
        strokeColor?: Color;
        strokeWidth?: number;
        backgroundColor?: Color;
        outlineWidth?: number;
        outlineColor?: Cesium.Color;
        padding?: number;
        textBaseline?: string;
        onCustomCanvas?: (...params: any[]) => any;
    });
    /**
     * 文本内容
     */
    text: string;
    /**
     * 文本样式
     */
    textStyles: any;
}

/**
 * 墙体:  走马灯围墙 材质
 * @param options - 参数对象，包括以下：
 * @param options.image - 背景图片URL
 * @param [options.color = new Cesium.Color(1, 0, 0, 1.0)] - 背景图片颜色
 * @param [options.count = 1] - 数量
 * @param [options.speed = 5.0] - 速度
 */
declare class WallScrollMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        image: string;
        color?: string | Cesium.Color;
        count?: number;
        speed?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 水面效果材质
 * @param options - 参数对象，包括以下：
 * @param [options.baseWaterColor = new Cesium.Color(0.2, 0.3, 0.6, 1.0)] - 基础颜色
 * @param [options.blendColor = new Cesium.Color(0.0, 1.0, 0.699, 1.0)] - 从水中混合到非水域时使用的rgba颜色对象。
 * @param [options.specularMap] - 单一通道纹理用来指示水域的面积。
 * @param [options.normalMap] - 水正常扰动的法线图。
 * @param [options.frequency = 100] - 控制波数的数字。
 * @param [options.animationSpeed = 0.01] - 控制水的动画速度的数字。
 * @param [options.amplitude = 10] - 控制水波振幅的数字。
 * @param [options.specularIntensity = 0.5] - 控制镜面反射强度的数字。
 * @param [options.fadeFactor = 1.0] - fadeFactor
 */
declare class WaterMaterialProperty extends BaseMaterialProperty {
    constructor(options: {
        baseWaterColor?: string | Cesium.Color;
        blendColor?: string | Cesium.Color;
        specularMap?: string;
        normalMap?: string;
        frequency?: number;
        animationSpeed?: number;
        amplitude?: number;
        specularIntensity?: number;
        fadeFactor?: number;
    });
    /**
     * 获取 材质名称
     * @param [time] - 检索值的时间。
     * @returns 材质名称
     */
    getType(time?: Cesium.JulianDate): string;
    /**
     * 获取所提供时间的属性值。
     * @param [time] - 检索值的时间。
     * @param [result] - 用于存储值的对象，如果省略，则创建并返回一个新的实例。
     * @returns 修改的result参数或一个新的实例(如果没有提供result参数)。
     */
    getValue(time?: Cesium.JulianDate, result?: any): any;
    /**
     * 将此属性与提供的属性进行比较并返回, 如果两者相等返回true，否则为false
     * @param [other] - 比较的对象
     * @returns 两者是同一个对象
     */
    equals(other?: Cesium.Property): boolean;
}

/**
 * 圆锥 波纹扩散效果 材质
 * @example
 * var primitive = new mars3d.graphic.CylinderPrimitive({
 *   position: [116.328775, 30.954602, 5000],
 *   style: {
 *     topRadius: 0.0,
 *     bottomRadius: 1500.0,
 *     length: 10000.0,
 *     material: new mars3d.material.CylinderWaveMaterial({
 *       color: 'rgba(255,0,0,0.7)',
 *       repeat: 30.0,
 *     }),
 *     faceForward: false,
 *     closed: true,
 *   },
 * })
 * graphicLayer.addGraphic(primitive)
 * @param options - 参数对象，包括以下：
 * @param [options.color = new Cesium.Color(2, 1, 0.0, 0.8)] - 颜色
 * @param [options.repeat = 30] - 圈数量
 * @param [options.frameRate = 60] - 每秒刷新次数
 */
declare class CylinderWaveMaterial extends Cesium.Material {
    constructor(options: {
        color?: string | Cesium.Color;
        repeat?: number;
        frameRate?: number;
    });
}

/**
 * 文字贴图 primitive材质
 * @example
 * var primitive = new mars3d.graphic.WallPrimitive({
 *   positions: [
 *     [121.479343, 29.791419, 25],
 *     [121.479197, 29.791474, 25],
 *   ],
 *   style: {
 *     diffHeight: 5,
 *     material: new mars3d.material.TextMaterial({
 *       text: "火星科技",
 *       fillColor: "#3388cc",
 *       outlineWidth: 4,
 *     }),
 *   },
 * })
 * graphicLayer.addGraphic(primitive)
 * @param options - 参数对象，包括以下：
 * @param [options.text] - 文本内容
 * @param [options.font_family = "楷体"] - 字体 ,可选项：微软雅黑,宋体,楷体,隶书,黑体,
 * @param [options.font_size = 30] - 字体大小
 * @param [options.font_weight = "normal"] - 是否加粗 ,可选项：bold (解释：是),normal (解释：否),
 * @param [options.font_style = "normal"] - 是否斜体 ,可选项：italic (解释：是),normal (解释：否),
 * @param [options.font = '30px normal normal 楷体'] - 上叙4个属性的一次性指定CSS字体的属性。
 * @param [options.fill = true] - 是否填充
 * @param [options.fillColor = new Cesium.Color(1.0, 1.0, 0.0, 1.0)] - 填充颜色。
 * @param [options.stroke = true] - 是否描边文本。
 * @param [options.strokeColor = new Cesium.Color(1.0, 1.0, 1.0, 0.8)] - 描边的颜色。
 * @param [options.strokeWidth = 2] - 描边的宽度。
 * @param [options.backgroundColor = new Cesium.Color(1.0, 1.0, 1.0, 0.1)] - 画布的背景色。
 * @param [options.outlineWidth] - 边框的宽度。
 * @param [options.outlineColor = fillColor] - 矩形边框的颜色。
 * @param [options.padding = 10] - 要在文本周围添加的填充的像素大小。
 * @param [options.textBaseline = 'top'] - 文本的基线。
 */
declare class TextMaterial extends Cesium.Material {
    constructor(options: {
        text?: string;
        font_family?: string;
        font_size?: number;
        font_weight?: string;
        font_style?: string;
        font?: string;
        fill?: boolean;
        fillColor?: Color;
        stroke?: boolean;
        strokeColor?: Color;
        strokeWidth?: number;
        backgroundColor?: Color;
        outlineWidth?: number;
        outlineColor?: Cesium.Color;
        padding?: number;
        textBaseline?: string;
    });
}

declare namespace CanvasWindLayer {
    /**
     * Canvas风场图层， data数据结构
     * @property [rows] - 行总数
     * @property [cols] - 列总数
     * @property [xmin] - 最小经度（度数，-180-180）
     * @property [xmax] - 最大经度（度数，-180-180）
     * @property [ymin] - 最小纬度（度数，-90-90）
     * @property [ymax] - 最大纬度（度数，-90-90）
     * @property [udata] - U值一维数组, 数组长度应该是 rows*cols 。也支持按rows行cols列构建好的二维数组。
     * @property [vdata] - V值一维数组, 数组长度应该是 rows*cols 。也支持按rows行cols列构建好的二维数组。
     */
    type DataOptions = {
        rows?: number;
        cols?: number;
        xmin?: number;
        xmax?: number;
        ymin?: number;
        ymax?: number;
        udata?: Number[] | any[][];
        vdata?: Number[] | any[][];
    };
}

/**
 * Canvas风场图层，
 * 基于Canvas绘制，【需要引入 mars3d-wind 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 图层id标识
 * @param [options.pid = -1] - 图层父级的id，一般图层管理中使用
 * @param [options.name = '未命名'] - 图层名称
 * @param [options.show = true] - 图层是否显示
 * @param [options.center] - 图层自定义定位视角
 * @param [options.data] - 风场数据
 * @param [options.speedRate = 50] - 风前进速率，意思是将当前风场横向纵向分成100份，再乘以风速就能得到移动位置，无论地图缩放到哪一级别都是一样的速度，可以用该数值控制线流动的快慢，值越大，越慢，
 * @param [options.particlesNumber = 20000] - 初始粒子总数
 * @param [options.maxAge = 120] - 每个粒子的最大生存周期
 * @param [options.frameRate = 10] - 每秒刷新次数，因为requestAnimationFrame固定每秒60次的渲染，所以如果不想这么快，就把该数值调小一些
 * @param [options.color = '#ffffff'] - 线颜色
 * @param [options.lineWidth = 1] - 线宽度
 * @param [options.fixedHeight = 0] - 点的固定的海拔高度
 * @param [options.reverseY = false] - 是否翻转纬度数组顺序，正常数据是从北往南的（纬度从大到小），如果反向时请传reverseY为true
 * @param [options.pointerEvents = false] - 图层是否可以进行鼠标交互，为false时可以穿透操作及缩放地图
 */
declare class CanvasWindLayer extends BaseLayer {
    constructor(options: {
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        center?: any;
        data?: CanvasWindLayer.DataOptions;
        speedRate?: number;
        particlesNumber?: number;
        maxAge?: number;
        frameRate?: number;
        color?: string;
        lineWidth?: number;
        fixedHeight?: number;
        reverseY?: boolean;
        pointerEvents?: boolean;
    });
    /**
     * 线颜色
     */
    color: string;
    /**
     * 线宽度
     */
    lineWidth: number;
    /**
     * 点的固定的海拔高度
     */
    fixedHeight: number;
    /**
     * 是否翻转纬度数组顺序，正常数据是从北往南的（纬度从大到小），如果反向时请传reverseY为true
     */
    reverseY: boolean;
    /**
     * 图层对应的Canvas对象
     */
    readonly canvas: HTMLCanvasElement;
    /**
     * 图层对应的Canvas对象
     */
    readonly layer: HTMLCanvasElement;
    /**
     * Canvas对象宽度（单位：像素）
     */
    readonly canvasWidth: number;
    /**
     * Canvas对象高度（单位：像素）
     */
    readonly canvasHeight: number;
    /**
     * 图层是否可以鼠标交互，为false时可以穿透操作及缩放地图
     */
    pointerEvents: boolean;
    /**
     * 风前进速率，意思是将当前风场横向纵向分成100份，再乘以风速就能得到移动位置，无论地图缩放到哪一级别都是一样的速度，可以用该数值控制线流动的快慢，值越大，越慢，
     */
    speedRate: number;
    /**
     * 初始粒子总数
     */
    particlesNumber: number;
    /**
     * 每个粒子的最大生存周期
     */
    maxAge: number;
    /**
     * 风场数据，数据结构见类的构造方法说明
     */
    data: CanvasWindLayer.DataOptions;
    /**
     * 重绘，根据现有参数重新生成风场
     * @returns 无
     */
    redraw(): void;
    /**
     * 清除数据
     * @returns 无
     */
    clear(): void;
    /**
     * 显示隐藏状态
     */
    show: boolean;
}

/**
 * 风场相关 静态方法，【需要引入 mars3d-wind 插件库】
 */
declare module "WindUtil" {
    /**
     * 风速风向 转 U值
     * @param speed - 风速
     * @param direction - 风向
     * @returns U值
     */
    function getU(speed: number, direction: number): number;
    /**
     * 风速风向 转 V值
     * @param speed - 风速
     * @param direction - 风向
     * @returns V值
     */
    function getV(speed: number, direction: number): number;
    /**
     * UV值 转 风速, 风速是uv分量的平方和
     * @param u - U值
     * @param v - V值
     * @returns 风速
     */
    function getSpeed(u: number, v: number): number;
    /**
     * UV 转 风向
     * @param u - U值
     * @param v - V值
     * @returns 风向
     */
    function getDirection(u: number, v: number): number;
}

/**
 * Echarts图层，
 * 【需要引入 echarts 库 和 mars3d-echarts 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.Echarts本身] - 支持Echarts本身所有Options参数，具体查阅 [Echarts配置项手册]{@link https://echarts.apache.org/zh/option.html}
 * @param [options.id = uuid()] - 图层id标识
 * @param [options.pid = -1] - 图层父级的id，一般图层管理中使用
 * @param [options.name = '未命名'] - 图层名称
 * @param [options.show = true] - 图层是否显示
 * @param [options.center] - 图层自定义定位视角
 * @param [options.depthTest = true] - 是否进行计算深度判断，在地球背面或被遮挡时不显示（大数据时，需要关闭）
 * @param [options.fixedHeight = 0] - 点的固定的海拔高度
 * @param [options.clampToGround = false] - 点是否贴地
 * @param [options.pointerEvents = false] - 图层是否可以进行鼠标交互，为false时可以穿透操作及缩放地图
 */
declare class EchartsLayer extends BaseLayer {
    constructor(options: {
        Echarts本身?: any;
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        center?: any;
        depthTest?: boolean;
        fixedHeight?: number;
        clampToGround?: boolean;
        pointerEvents?: boolean;
    });
    /**
     * echarts对象，是echarts.init方法返回的 echartsInstance 实例
     */
    readonly layer: HTMLCanvasElement;
    /**
     * 改变图层canvas容器尺寸，在容器大小发生改变时需要手动调用。
     * @returns 无
     */
    resize(): void;
    /**
     * 设置图表实例的配置项以及数据，
     * 万能接口，所有参数和数据的修改都可以通过 setOption 完成，
     * ECharts 会合并新的参数和数据，然后刷新图表。
     * 如果开启动画的话，ECharts 找到两组数据之间的差异然后通过合适的动画去表现数据的变化。
     * @param option - 图表的配置项和数据，具体见 [Echarts配置项手册]{@link https://echarts.apache.org/zh/option.html}。
     * @param [notMerge = false] - 是否不跟之前设置的 option 进行合并。默认为 false。即表示合并。合并的规则，详见 组件合并模式。如果为 true，表示所有组件都会被删除，然后根据新 option 创建所有新组件。
     * @param [lazyUpdate = false] - 在设置完 option 后是否不立即更新图表，默认为 false，即同步立即更新。如果为 true，则会在下一个 animation frame 中，才更新图表。
     * @returns 无
     */
    setEchartsOption(option: any, notMerge?: boolean, lazyUpdate?: boolean): void;
}

/**
 * 热力图图层，基于heatmap.js库渲染。
 * 【需要引入 heatmap.js 库 和 mars3d-heatmap 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 图层id标识
 * @param [options.pid = -1] - 图层父级的id，一般图层管理中使用
 * @param [options.name = '未命名'] - 图层名称
 * @param [options.show = true] - 图层是否显示
 * @param [options.center] - 图层自定义定位视角
 * @param [options.positions] - 坐标位置数组，有热力值时，传入LatLngPoint数组，热力值为value字段。示例:[{lat:31.123,lng:103.568,value:1.2},{lat:31.233,lng:103.938,value:2.3}]
 * @param [options.heatStyle] - heatmap热力图本身configObject参数，详情也可查阅 [heatmap文档]{@link https://www.patrick-wied.at/static/heatmapjs/docs.html}
 * @param [options.heatStyle.maxOpacity = 0.8] - 最大不透明度，取值范围0.0-1.0。
 * @param [options.heatStyle.minOpacity = 0.1] - 最小不透明度，取值范围0.0-1.0。
 * @param [options.heatStyle.blur = 0.85] - 将应用于所有数据点的模糊因子。模糊因子越高，渐变将越平滑
 * @param [options.heatStyle.radius = 25] - 每个数据点将具有的半径（如果未在数据点本身上指定）
 * @param [options.heatStyle.gradient] - 色带，表示渐变的对象，示例：{ 0.4: 'blue', 0.6: 'green',0.8: 'yellow',0.9: 'red' }
 * @param [options.style] - 矢量对象样式参数，还包括：
 * @param [options.style.父类] - 父类支持的样式
 * @param [options.style.opacity = 1] - 透明度
 * @param [options.style.arc = false] - 是否显示曲面热力图
 * @param [options.style.arcRadiusScale = 1.5] - 曲面热力图时，radius扩大比例
 * @param [options.style.arcBlurScale = 1.5] - 曲面热力图时，blur扩大比例
 * @param [options.maxCanvasSize = 5000] - Canvas最大尺寸（单位：像素），调大精度更高，但过大容易内存溢出
 * @param [options.minCanvasSize = 700] - Canvas最小尺寸（单位：像素）
 * @param [options.delayTime = 2] - 显示数据时的过渡动画时长（单位：秒）
 */
declare class HeatLayer extends BaseLayer {
    constructor(options: {
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        center?: any;
        positions?: LatLngPoint[] | any[][] | String[] | Cesium.Cartesian3[];
        heatStyle?: {
            maxOpacity?: number;
            minOpacity?: number;
            blur?: number;
            radius?: number;
            gradient?: any;
        };
        style?: {
            父类?: RectanglePrimitive.StyleOptions;
            opacity?: boolean;
            arc?: boolean;
            arcRadiusScale?: boolean;
            arcBlurScale?: boolean;
        };
        maxCanvasSize?: number;
        minCanvasSize?: number;
        delayTime?: number;
    });
    /**
     * 矢量数据图层
     */
    readonly layer: GraphicLayer;
    /**
     * heatmap热力图本身configObject参数，详情也可查阅 [heatmap文档]{@link https://www.patrick-wied.at/static/heatmapjs/docs.html}
     */
    heatStyle: any;
    /**
     * 矩形的样式参数
     */
    style: RectanglePrimitive.StyleOptions;
    /**
     * 数据位置坐标数组 （笛卡尔坐标）, 赋值时可以传入LatLngPoint数组对象
     */
    positions: Cesium.Cartesian3[] | LatLngPoint[];
    /**
     * 位置坐标(数组对象)，示例 [ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7] ]
     */
    readonly coordinates: any[][];
    /**
     * 坐标数据对应的矩形边界
     */
    readonly rectangle: Cesium.Rectangle;
    /**
     * 添加新的坐标点
     * @param item - 坐标点（含热力值）
     * @returns 无
     */
    addPosition(item: Cesium.Cartesian3 | LatLngPoint): void;
    /**
     * 清除矢量对象
     * @returns 无
     */
    clear(): void;
    /**
     * 飞行定位至图层数据所在的视角
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 当前对象本身，可以链式调用
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): this;
}

/**
 * MapV图层
 * 【需要引入 heatmap.js 库 和 mars3d-heatmap 插件库】
 * @param options - 图层参数，包括：
 * @param [options.mapV本身] - 支持mapv本身所有drawOptions图层样式参数，具体查阅 [mapv库drawOptions文档]{@link https://github.com/huiyan-fe/mapv/wiki/%E7%B1%BB%E5%8F%82%E8%80%83} ，也可以 [在线编辑图层样式]{@link https://mapv.baidu.com/editor/}
 * @param [options.id = uuid()] - 图层id标识
 * @param [options.pid = -1] - 图层父级的id，一般图层管理中使用
 * @param [options.name = '未命名'] - 图层名称
 * @param [options.show = true] - 图层是否显示
 * @param [options.center] - 图层自定义定位视角
 * @param [options.depthTest = true] - 是否进行计算深度判断，在地球背面或被遮挡时不显示（大数据时，需要关闭）
 * @param [options.fixedHeight = 0] - 点的固定的海拔高度
 * @param [options.clampToGround = false] - 点是否贴地
 * @param [options.pointerEvents = false] - 图层是否可以进行鼠标交互，为false时可以穿透操作及缩放地图
 * @param dataSet - MapV数据集,可以参考[ MapV数据集对象说明]{@link https://github.com/huiyan-fe/mapv/blob/master/src/data/DataSet.md}
 */
declare class MapVLayer extends BaseLayer {
    constructor(options: {
        mapV本身?: any;
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        center?: any;
        depthTest?: boolean;
        fixedHeight?: number;
        clampToGround?: boolean;
        pointerEvents?: boolean;
    }, dataSet: mapv.DataSet);
    /**
     * 图层对应的Canvas对象
     */
    readonly canvas: HTMLCanvasElement;
    /**
     * 新增mapv数据
     * @param dataSet - MapV数据集,可以参考[ MapV数据集对象说明]{@link https://github.com/huiyan-fe/mapv/blob/master/src/data/DataSet.md}
     * @returns 无
     */
    addData(dataSet: mapv.DataSet): void;
    /**
     * 更新mapv数据
     * @param dataSet - MapV数据集,可以参考[ MapV数据集对象说明]{@link https://github.com/huiyan-fe/mapv/blob/master/src/data/DataSet.md}
     * @returns 无
     */
    updateData(dataSet: mapv.DataSet): void;
    /**
     * 获取数据
     * @returns MapV数据集,可以参考[ MapV数据集对象说明]{@link https://github.com/huiyan-fe/mapv/blob/master/src/data/DataSet.md}
     */
    getData(): mapv.DataSet;
    /**
     * 删除指定数据
     * @param data - 数据
     * @returns 无
     */
    removeData(data: mapv.DataSet): void;
    /**
     * 删除所有数据
     * @returns 无
     */
    removeAllData(): void;
    /**
     * 重绘图层
     * @returns 无
     */
    draw(): void;
    /**
     * 改变图层canvas容器尺寸
     * @returns 无
     */
    resize(): void;
    /**
     * 从地图上移除，同map.removeThing
     * @param destroy - 是否调用destroy释放
     * @returns 无
     */
    remove(destroy: boolean): void;
}

/**
 * 卫星TLE和SGP4相关算法类
 * @param tle1 - 卫星两行轨道数（TLE） 的tle1，每行69个字符, 示例：'1 39150U 13018A   18309.20646405  .00000034  00000-0  12253-4 0  9993'
 * @param tle2 - 卫星两行轨道数（TLE） 的tle2，每行69个字符, 示例：'2 39150  97.9189  29.2064 0018076 220.9170 139.0692 14.76532215297913'
 * @param [name] - 卫星名称
 */
declare class Tle {
    constructor(tle1: string, tle2: string, name?: string);
    /**
     * COSPAR国际代号,国际空间研究委员会制定.
     */
    readonly cospar: string;
    /**
     * NORAD 空间目录号,北美空防司令部制定。
     * tle1的第3-7列
     */
    readonly norad: number;
    /**
     * 卫星类别（U表示不保密，可供公众使用的；C 表示保密，仅限NORAD使用；S表示保密的，仅限NORAD使用）,
     * tle1的第8列
     */
    readonly classification: string;
    /**
     * 返回发射年份(最后两位数字)，这是COSPAR id的一部分(国际指示器)，
     * tle1的第10–11列
     */
    readonly intDesignatorYear: number;
    /**
     * 返回当年的发射顺序编号，这是COSPAR id的一部分(国际指示器)，
     * tle1的第12–14列
     */
    readonly intDesignatorLaunchNumber: number;
    /**
     * 发射卫星个数（A表示是第一个，如果一次发射多颗卫星，使用26个英文字母排序；如果超过了26个编号，则使用两位字母，如AA、AB、AC编号），这是COSPAR id的一部分(国际指示器)，
     * tle1的第15–17列
     */
    readonly intDesignatorPieceOfLaunch: string;
    /**
     * TLE历时（年份后两位），
     * tle1的第19–20列
     */
    readonly epochYear: number;
    /**
     * TLE历时 (用十进制小数表示一年中的第几日和日中的小数部分)，
     * tle1的第21–32列
     */
    readonly epochDay: number;
    /**
     * 平均运动的一阶时间导数，用来计算每一天平均运动的变化带来的轨道漂移，提供给轨道计算软件预测卫星的位置。两行式轨道数据使用这个数据校准卫星的位置。
     * tle1的第34–43列
     */
    readonly firstTimeDerivative: number;
    /**
     * 平均运动的二阶时间导数，用来计算每一天平均运动的变化带来的轨道漂移，提供给轨道计算软件预测卫星的位置。
     * tle1的第45–52列
     */
    readonly secondTimeDerivative: number;
    /**
     * BSTAR阻力系数，用于大气阻力对卫星运动的影响。
     * tle1的第45–52列
     */
    readonly bstarDrag: number;
    /**
     * 美国空军空间指挥中心内部使用的为1；美国空军空间指挥中心以外公开使用标识为0。
     * tle1的第63列
     */
    readonly orbitModel: number;
    /**
     * 星历编号，TLE数据按新发现卫星的先后顺序的编号，
     * tle1的第65–68列
     */
    readonly tleSetNumber: number;
    /**
     * 校验和，指这一行的所有非数字字符，按照“字母、空格、句点、正号= 0；负号=1”的规则换算成0和1后，将这一行中原来的全部数字加起来，以10为模计算后所得的和。校验和可以检查出90%的数据存储或传送错误。按十进制加起来的个位数字的校验和，用于精确纠正误差。
     * tle1的第69列
     */
    readonly checksum1: number;
    /**
     * 轨道的交角是指天体的轨道面和地球赤道面之间的夹度，用0～90°来表示顺行轨道（从地球北极上空看是逆时针运行）；用90～180°表示逆行轨道（从地球北极上空看是顺时针运行）。
     * tle2的第09–16列
     */
    readonly inclination: number;
    /**
     * 升交点赤经，升交点赤经是指卫星由南到北穿过地球赤道平面时，与地球赤道平面的交点。
     * tle2的第18–25列
     */
    readonly rightAscension: number;
    /**
     * 轨道偏心率，轨道离心率是指卫星椭圆轨道的中心点到地球的球心点的距离（c）除以卫星轨道半长轴(a)得到的一个0（圆型）到1（抛物线）之间的小数值。
     * tle2的第27–33列
     */
    readonly eccentricity: number;
    /**
     * 近地点幅角，
     * tle2的第35–42列
     */
    readonly perigee: number;
    /**
     * 平近点角，
     * tle2的第44–51列
     */
    readonly meanAnomaly: number;
    /**
     * 每天绕地球公转圈数(平均运动)，
     * tle2的第53–63列
     */
    readonly meanMotion: number;
    /**
     * 卫星的运行周期（单位：分钟）
     */
    readonly period: number;
    /**
     * 发射以来飞行的圈数，
     * tle2的第64–68列
     */
    readonly revNumberAtEpoch: number;
    /**
     * 校验和，
     * tle2的第69列
     */
    readonly checksum2: number;
    /**
     * 获取卫星指定时间所在的 ECEF坐标
     * @param datetime - 指定的时间
     * @returns ECEF(地心地固坐标系) 坐标
     */
    getEcfPosition(datetime: Date | Cesium.JulianDate | number): Cesium.Cartesian3 | undefined;
    /**
     * 获取卫星指定时间所在的 ECI惯性坐标
     * @param datetime - 指定的时间
     * @returns ECI(地心惯性坐标系)坐标
     */
    getEciPosition(datetime: Date | Cesium.JulianDate | number): Cesium.Cartesian3 | undefined;
    /**
     * 获取卫星指定时间所在的 ECI惯性坐标和地理坐标
     * @param datetime - 指定的时间
     * @returns ECI惯性坐标和地理坐标等信息
     */
    getEciPositionAndGeodetic(datetime: Date | Cesium.JulianDate | number): any | undefined;
    /**
     * 获取卫星指定时间 所在的位置坐标(经纬度)
     * @param datetime - 指定的时间
     * @returns 卫星当前经纬度位置
     */
    getPoint(datetime: Date | Cesium.JulianDate | number): LatLngPoint | undefined;
    /**
     * 获取 地面地点 对卫星的 天文观测值
     * @param point - 地面地点经纬度坐标
     * @param datetime - 指定的时间
     * @returns 观测值
     */
    getLookAngles(point: LatLngPoint, datetime: Date | Cesium.JulianDate | number): Tle.LookAngles;
    /**
     * 计算卫星指定时间所在的 经纬度位置
     * @param tle1 - 卫星TLE的第一行
     * @param tle2 - 卫星TLE的第二行
     * @param datetime - 指定的时间
     * @returns 卫星当前经纬度位置
     */
    static getPoint(tle1: string, tle2: string, datetime: Date | Cesium.JulianDate | number): LatLngPoint | undefined;
    /**
     * 获取卫星指定时间所在的 ECEF坐标
     * @param tle1 - 卫星TLE的第一行
     * @param tle2 - 卫星TLE的第二行
     * @param datetime - 指定的时间
     * @returns ECEF(地心地固坐标系) 坐标
     */
    static getEcfPosition(tle1: string, tle2: string, datetime: Date | Cesium.JulianDate | number): Cesium.Cartesian3 | undefined;
    /**
     * 获取 格林尼治恒星时(GMST)时间
     * @param datetime - 时间对象
     * @returns 格林尼治恒星时(GMST)时间
     */
    static gstime(datetime: Date | Cesium.JulianDate): number;
    /**
     * ECI惯性系坐标 转换为 经纬度坐标
     * @param positionEci - ECI(地心惯性坐标系) 坐标
     * @param datetime - 指定时间, Number时请传入格林尼治恒星时(GMST)时间
     * @returns 经纬度坐标
     */
    static eciToGeodetic(positionEci: Cesium.Cartesian3, datetime: Date | Cesium.JulianDate | number): LatLngPoint;
    /**
     * ECI坐标 转换为 ECEF坐标
     * @param positionEci - ECI(地心惯性坐标系)坐标
     * @param datetime - 指定时间, Number时请传入格林尼治恒星时(GMST)时间
     * @returns ECEF(地心地固坐标系) 坐标
     */
    static eciToEcf(positionEci: Cesium.Cartesian3, datetime: Date | Cesium.JulianDate | number): Cesium.Cartesian3;
    /**
     * ECEF坐标 转换为 ECI坐标
     * @param positionEcf - ECEF(地心地固坐标系) 坐标
     * @param datetime - 指定时间, Number时请传入格林尼治恒星时(GMST)时间
     * @returns ECI(地心惯性坐标系)坐标
     */
    static ecfToEci(positionEcf: Cesium.Cartesian3, datetime: Date | Cesium.JulianDate | number): Cesium.Cartesian3;
}

declare namespace Tle {
    /**
     * 从地面上某点的天文观测角度等值。
     * @property position - 卫星的当前位置
     * @property range - 与卫星的距离，单位：米
     * @property azimuth - 方位角，角度值
     * @property elevation - 仰角，角度值
     */
    type LookAngles = {
        position: Cesium.Cartesian3;
        range: number;
        azimuth: number;
        elevation: number;
    };
}

declare namespace CamberRadar {
    /**
     * 双曲面拱形雷达 支持的样式信息
     * @property [color = "#00FF00"] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [outline = true] - 是否边线
     * @property [outlineColor = new Cesium.Color(1.0, 0.0, 0.0)] - 边线颜色
     * @property startRadius - 内曲面半径 （单位：米）
     * @property radius - 外曲面半径 （单位：米）
     * @property [startFovH = Cesium.Math.toRadians(-50)] - 左横截面角度（弧度值）
     * @property [endFovH = Cesium.Math.toRadians(50)] - 右横截面角度（弧度值）
     * @property [startFovV = Cesium.Math.toRadians(5)] - 垂直起始角度（弧度值）
     * @property [endFovV = Cesium.Math.toRadians(85)] - 垂直结束角度（弧度值）
     * @property [segmentH = 60] - 垂直方向(类似经度线)分割数
     * @property [segmentV = 20] - 水平方向(类似纬度线)分割数
     * @property [heading = 0] - 方向角 （度数值，0-360度）
     * @property [pitch = 0] - 俯仰角（度数值，0-360度）
     * @property [roll = 0] - 翻滚角（度数值，0-360度）
     */
    type StyleOptions = {
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        startRadius: number;
        radius: number;
        startFovH?: number;
        endFovH?: number;
        startFovV?: number;
        endFovV?: number;
        segmentH?: number;
        segmentV?: number;
        subSegmentH?: number;
        subSegmentV?: number;
        heading?: number;
        pitch?: number;
        roll?: number;
    };
}

/**
 * 双曲面拱形雷达,
 * 【需要引入  mars3d-space 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 */
declare class CamberRadar extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: CamberRadar.StyleOptions;
        attr?: any;
    });
    /**
     * 内曲面半径 （单位：米）
     */
    startRadius: number;
    /**
     * 外曲面半径 （单位：米）
     */
    radius: number;
    /**
     * 左横截面角度（弧度值）
     */
    startFovV: number;
    /**
     * 右横截面角度（弧度值）
     */
    endFovV: number;
    /**
     * 垂直起始角度（弧度值）
     */
    startFovH: number;
    /**
     * 垂直结束角度（弧度值）
     */
    endFovH: number;
}

declare namespace ConicSensor {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * graphic.on(mars3d.EventType.postUpdate, function (event) {
     *   console.log('对象更新了', event)
     * })
     * @property preUpdate - 更新前
     * @property postUpdate - 更新后
     */
    type EventType = {
        preUpdate: string;
        postUpdate: string;
    };
    /**
     * 圆锥体（单目标雷达） 支持的样式信息
     * @property [angle = 85] - 夹角，半场角度，取值范围 0.1-89.9
     * @property [length = 100] - 半径长度（米）
     * @property [heading = 0] - 方向角 （角度值 0-360）
     * @property [pitch = 0] - 俯仰角（角度值 0-360）
     * @property [roll = 0] - 翻滚角（角度值 0-360）
     * @property [color = Cesium.Color.YELLOW] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [outline = false] - 是否显示边线
     * @property [outlineColor = color] - 边线颜色
     * @property [topShow = true] - 是否显示顶
     * @property [topOutlineShow = true] - 是否显示顶边线
     * @property [shadowShow = false] - 是否显示地面投影
     * @property [rayEllipsoid = false] - 是否求交地球计算动态length
     */
    type StyleOptions = {
        angle?: number;
        length?: number;
        heading?: number;
        pitch?: number;
        roll?: number;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        topShow?: boolean;
        topOutlineShow?: boolean;
        shadowShow?: boolean;
        rayEllipsoid?: boolean;
    };
}

/**
 * 圆锥体（单目标雷达）,
 * 【需要引入  mars3d-space 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.lookAt] - 椎体方向追踪的目标（椎体方向跟随变化，位置不变）
 * @param [options.fixedFrameTransform = Cesium.Transforms.eastNorthUpToFixedFrame] - 参考系
 * @param [options.revers = false] - 是否反转朝向
 */
declare class ConicSensor extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: ConicSensor.StyleOptions;
        attr?: any;
        lookAt?: Cesium.Cartesian3 | Cesium.PositionProperty;
        fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame;
        revers?: boolean;
    });
    /**
     * 椎体方向追踪的目标（椎体方向跟随变化，位置不变）
     */
    lookAt: Cesium.Cartesian3 | Cesium.PositionProperty;
    /**
     * 颜色
     */
    color: Cesium.Color;
    /**
     * 边线颜色
     */
    outlineColor: Cesium.Color;
    /**
     * 是否显示边线
     */
    outline: boolean;
    /**
     * 是否显示顶
     */
    topShow: boolean;
    /**
     * 是否显示顶边线
     */
    topOutlineShow: boolean;
    /**
     * 夹角，半场角度，取值范围 0.1-89.9
     */
    angle: number;
    /**
     * 半径长度（米）
     */
    length: number;
    /**
     * 四周方向角，0-360度角度值
     */
    heading: number;
    /**
     * 四周方向角，弧度值
     */
    readonly headingRadians: number;
    /**
     * 俯仰角，上下摇摆的角度，0-360度角度值
     */
    pitch: number;
    /**
     * 滚转角，左右摆动的角度，0-360度角度值
     */
    roll: number;
    /**
     * 是否显示地面投影
     */
    shadowShow: boolean;
    /**
     * 获取当前转换计算模型矩阵。如果方向或位置未定义，则返回undefined。
     */
    readonly matrix: Cesium.Matrix4;
    /**
     * 获取视锥体射出length半径长度后的点坐标
     */
    readonly rayPosition: Cesium.Cartesian3;
    /**
     * 是否反向
     */
    readonly reverse: boolean;
    /**
     * 是否与地球相交，当rayEllipsoid：true时才有效。
     */
    readonly intersectEllipsoid: boolean;
    /**
     * 获取射线向地面与地球的的大概距离
     * @returns 距离值，单位：米
     */
    getRayEarthLength(): number;
    /**
     * 获取射线向地面与地球的4个交点坐标
     * @returns 坐标数组
     */
    getRayEarthPositions(): Cesium.Cartesian3[];
    /**
     * 销毁当前对象
     * @param [noDel = false] - false:会自动delete释放所有属性，true：不delete绑定的变量
     * @returns 无
     */
    destroy(noDel?: boolean): void;
}

declare namespace RectSensor {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * graphic.on(mars3d.EventType.postUpdate, function (event) {
     *   console.log('对象更新了', event)
     * })
     * @property preUpdate - 更新前
     * @property postUpdate - 更新后
     */
    type EventType = {
        preUpdate: string;
        postUpdate: string;
    };
    /**
     * 四棱锥体 支持的样式信息
     * @property [angle1 = 5] - 夹角1，半场角度，取值范围 0.1-89.9
     * @property [angle2 = 5] - 夹角2，半场角度，取值范围 0.1-89.9
     * @property [angle = 5] - 夹角1和夹角2相同时，可以传入angle一个属性
     * @property [length = 100] - 半径长度（米）
     * @property [heading = 0] - 方向角 （角度值 0-360）
     * @property [pitch = 0] - 俯仰角（角度值 0-360）
     * @property [roll = 0] - 翻滚角（角度值 0-360）
     * @property [color = Cesium.Color.YELLOW] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [outline = false] - 是否显示边线
     * @property [outlineColor = color] - 边线颜色
     * @property [topShow = true] - 是否显示顶
     * @property [topOutlineShow = true] - 是否显示顶边线
     * @property [topSteps = 8] - 顶边线数量
     * @property [rayEllipsoid = false] - 是否求交地球计算动态length
     */
    type StyleOptions = {
        angle1?: number;
        angle2?: number;
        angle?: number;
        length?: number;
        heading?: number;
        pitch?: number;
        roll?: number;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        topShow?: boolean;
        topOutlineShow?: boolean;
        topSteps?: number;
        rayEllipsoid?: boolean;
    };
}

/**
 * 四棱锥体,
 * 【需要引入  mars3d-space 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.lookAt] - 椎体方向追踪的目标（椎体方向跟随变化，位置不变）
 * @param [options.fixedFrameTransform = Cesium.Transforms.eastNorthUpToFixedFrame] - 参考系
 * @param [options.revers = false] - 是否反转朝向
 */
declare class RectSensor extends mars3d.graphic.BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: RectSensor.StyleOptions;
        attr?: any;
        lookAt?: Cesium.Cartesian3 | Cesium.PositionProperty;
        fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame;
        revers?: boolean;
    });
    /**
     * 椎体方向追踪的目标（椎体方向跟随变化，位置不变）
     */
    lookAt: Cesium.Cartesian3 | Cesium.PositionProperty;
    /**
     * 颜色
     */
    color: Cesium.Color;
    /**
     * 边线颜色
     */
    outlineColor: Cesium.Color;
    /**
     * 是否显示边线
     */
    outline: boolean;
    /**
     * 是否显示顶
     */
    topShow: boolean;
    /**
     * 是否显示顶边线
     */
    topOutlineShow: boolean;
    /**
     * 夹角（angle1和angle2相同），半场角度，取值范围 0.1-89.9
     */
    angle: number;
    /**
     * 夹角1，半场角度，取值范围 0.1-89.9
     */
    angle1: number;
    /**
     * 夹角2，半场角度，取值范围 0.1-89.9
     */
    angle2: number;
    /**
     * 半径长度（米）
     */
    length: number;
    /**
     * 四周方向角，0-360度角度值
     */
    heading: number;
    /**
     * 四周方向角，弧度值
     */
    readonly headingRadians: number;
    /**
     * 俯仰角，上下摇摆的角度，0-360度角度值
     */
    pitch: number;
    /**
     * 滚转角，左右摆动的角度，0-360度角度值
     */
    roll: number;
    /**
     * 获取当前转换计算模型矩阵。如果方向或位置未定义，则返回undefined。
     */
    readonly matrix: Cesium.Matrix4;
    /**
     * 获取视锥体射出length半径长度后的点坐标
     */
    readonly rayPosition: Cesium.Cartesian3;
    /**
     * 是否反向
     */
    readonly reverse: boolean;
    /**
     * 是否与地球相交，当rayEllipsoid：true时才有效。
     */
    readonly intersectEllipsoid: boolean;
    /**
     * 获取射线向地面与地球的的大概距离
     * @returns 距离值，单位：米
     */
    getRayEarthLength(): number;
    /**
     * 获取射线向地面与地球的4个交点坐标
     * @returns 坐标数组
     */
    getRayEarthPositions(): Cesium.Cartesian3[];
}

declare namespace Satellite {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * graphic.on(mars3d.EventType.change, function (event) {
     *   console.log('卫星位置发送了变化', event)
     * })
     * @property change - 卫星位置变化了
     */
    type EventType = {
        change: string;
    };
}

/**
 * 卫星综合体 对象类【统一管理卫星模型、轨道、视锥体】,
 * 【需要引入  mars3d-space 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.tle1 - 卫星两行轨道数（TLE） 的tle1, 示例：'1 39150U 13018A   18309.20646405  .00000034  00000-0  12253-4 0  9993'
 * @param options.tle2 - 卫星两行轨道数（TLE） 的tle2, 示例：'2 39150  97.9189  29.2064 0018076 220.9170 139.0692 14.76532215297913'
 * @param [options.period] - 卫星运行周期（单位：分钟）, 未传值时自动在tle2中解析
 * @param options.position - 当没有tle时，自定义传入动态坐标位置（含时序的点集合）
 * @param [options.orientation] - 当没有tle时，自定义传入实体方向
 * @param [options.model] - 设置是否显示 gltf卫星模型 和对应的样式，属性还包含：
 * @param [options.model.autoHeading = true] - heading是否自动为轨道的方向
 * @param [options.cone] - 设置是否显示 卫星视锥体 和对应的样式
 * @param [options.label] - 设置是否显示 文本 和对应的样式
 * @param [options.billboard] - 设置是否显示 图标点 和对应的样式
 * @param [options.point] - 设置是否显示 像素点 和对应的样式
 * @param [options.path] - 设置是否显示 卫星轨迹路线 和对应的样式，属性还包含：
 * @param [options.path.closure = false] - 是否闭合轨道圆
 * @param [options.shadingLine] - 设置是否显示 星下轨迹 和对应的样式
 * @param [options.fixedFrameTransform] - 参考系
 * @param [options.frameRate = 30] - 多少帧刷新1次，控制效率，如果卡顿就把该数值调大一些。
 */
declare class Satellite extends BaseGraphic {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        tle1: string;
        tle2: string;
        period?: number;
        position: Cesium.SampledPositionProperty;
        orientation?: Cesium.Property;
        model?: {
            autoHeading?: boolean;
        };
        cone?: SatelliteSensor.StyleOptions;
        label?: LabelEntity.StyleOptions;
        billboard?: BillboardEntity.StyleOptions;
        point?: PointEntity.StyleOptions;
        path?: {
            closure?: boolean;
        };
        shadingLine?: BillboardEntity.StyleOptions;
        fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame;
        frameRate?: number;
    });
    /**
     * 加载Entity数据的内部Cesium容器
     */
    readonly dataSource: Cesium.CustomDataSource;
    /**
     * 卫星TLE算法类对象
     */
    readonly tle: Tle;
    /**
     * 圆锥的角度或者四棱锥的第一个角度，半场角度，取值范围 0.1-89.9
     */
    angle1: number;
    /**
     * 四棱锥的第二个角度，半场角度，取值范围 0.1-89.9
     */
    angle2: number;
    /**
     * 四周方向角，0-360度角度值
     */
    heading: number;
    /**
     * 俯仰角，上下摇摆的角度，0-360度角度值
     */
    pitch: number;
    /**
     * 滚转角，左右摆动的角度，0-360度角度值
     */
    roll: number;
    /**
     * 是否显示视锥体
     */
    coneShow: boolean;
    /**
     * 当前时间的卫星位置坐标 （笛卡尔坐标）
     */
    position: Cesium.Cartesian3;
    /**
     * 获取当前时间转换计算模型矩阵。如果方向或位置未定义，则返回undefined。
     */
    readonly modelMatrix: Cesium.Matrix4;
    /**
     * 获取卫星方向 中心射线与地球相交点
     */
    readonly groundPosition: Cesium.Cartesian3;
    /**
     * 获取当前已计算的轨道的开始时间和结束时间，格式为{start:'2021-01-01 00:00:00',end:'2021-01-01 12:01:02'}
     */
    readonly timeRange: any;
    /**
     * 卫星凝视的目标（卫星方向一直朝向这个目标所在位置）
     */
    lookAt: Cesium.Cartesian3 | Cesium.PositionProperty;
    /**
     * 是否显示3个方向轴，用于对比测试
     */
    debugAxis: boolean;
    /**
     * 显示3个方向轴时的对应轴长度，用于对比测试
     */
    debugAxisLength: number;
    /**
     * 重新赋值参数，同构造方法参数一致。
     * @param options - 参数,与类的构造方法参数相同
     * @returns 无
     */
    setOptions(options: any): void;
    /**
     * 单击轨迹连线上的点后，求该点对应的时间
     * @param position - 轨迹连线上的某点
     * @param [arr] - 轨迹的原始数组，默认为内部记录的轨迹
     * @returns 对应的时间
     */
    getPointTime(position: Cesium.Cartesian3, arr?: object[]): Date;
    /**
     * 更新角度
     * @param [newangle] - 新角度值
     * @param [newangle.heading = 0] - 方向角 （度数值，0-360度），如 model.autoHeading 为true，传入值无效
     * @param [newangle.pitch = 0] - 俯仰角（度数值，0-360度）
     * @param [newangle.roll = 0] - 翻滚角（度数值，0-360度）
     * @returns 无
     */
    updateOrientation(newangle?: {
        heading?: number;
        pitch?: number;
        roll?: number;
    }): void;
    /**
     * 定位到卫星当前所在位置
     * @param [options = {}] - 具有以下属性的对象:
     * @param [options.scale = 1.5] - 视角离卫星距离的缩放比例，计算公式：视角距离 = scale*卫星当前高度
     * @param options.heading - 方向角度值，绕垂直于地心的轴旋转角度, 0至360
     * @param options.pitch - 俯仰角度值，绕纬度线旋转角度, 0至360
     * @param options.roll - 翻滚角度值，绕经度线旋转角度, 0至360
     * @param [options.duration] - 飞行持续时间（秒）。如果省略，内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 表示飞行完成后摄像机将位于的参考帧的变换矩阵。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机的飞行角度高于该值，请在飞行过程中调整俯仰角度以向下看，并将地球保持在视口中。
     * @param [options.flyOverLongitude] - 地球上2点之间总是有两种方式。此选项会迫使相机选择战斗方向以在该经度上飞行。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 无
     */
    flyTo(options?: {
        scale?: number;
        heading: number;
        pitch: number;
        roll: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        easingFunction?: EasingFunction.Callback;
    }): void;
    /**
     * 对象的id标识
     */
    id: string | number;
}

declare namespace SatelliteSensor {
    /**
     * 卫星视锥综合体（圆锥或四凌锥） 支持的样式信息
     * @property [sensorType = SatelliteSensor.Type.Rect] - 视锥类型
     * @property [angle1 = 5] - 圆锥的角度或者四棱锥的第一个角度，半场角度，取值范围 0.1-89.9
     * @property [angle2 = 5] - 四棱锥的第二个角度，半场角度，取值范围 0.1-89.9
     * @property [angle = 5] - 夹角1和夹角2相同时，可以传入angle一个属性
     * @property [length] - 指定的半径长度（米），默认与地球进行相交运算
     * @property [heading = 0] - 方向角 （角度值 0-360）
     * @property [pitch = 0] - 俯仰角（角度值 0-360）
     * @property [roll = 0] - 翻滚角（角度值 0-360）
     * @property [color = Cesium.Color.YELLOW] - 颜色
     * @property [opacity = 1.0] - 透明度, 取值范围：0.0-1.0
     * @property [outline = false] - 是否显示边线
     * @property [outlineColor = color] - 边线颜色
     * @property [rayEllipsoid = false] - 是否求交地球计算
     */
    type StyleOptions = {
        sensorType?: SatelliteSensor.Type;
        angle1?: number;
        angle2?: number;
        angle?: number;
        length?: number;
        heading?: number;
        pitch?: number;
        roll?: number;
        color?: string | Cesium.Color;
        opacity?: number;
        outline?: boolean;
        outlineColor?: string | Cesium.Color;
        rayEllipsoid?: boolean;
    };
    /**
     * 视锥体类型
     */
    enum Type {
        Conic,
        Rect
    }
}

/**
 * 卫星视锥综合体（圆锥或四凌锥）,
 * 【需要引入  mars3d-space 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 支持所有Graphic通用参数
 * @param options.position - 坐标位置
 * @param options.style - 样式信息
 * @param [options.attr] - 附件的属性信息，可以任意附加属性，导出geojson或json时会自动处理导出。
 * @param [options.lookAt] - 椎体方向追踪的目标（椎体方向跟随变化，位置不变）
 * @param [options.trackedEntity] - 椎体跟随的卫星（椎体位置跟随变化，方向不变）
 * @param [options.autoHeading] - 是否自动追踪trackedEntity目标的heading方向
 * @param [options.fixedFrameTransform] - 参考系
 * @param [options.revers = false] - 是否反转朝向
 */
declare class SatelliteSensor extends BasePointPrimitive {
    constructor(options: {
        通用参数?: BaseGraphic.ConstructorOptions;
        position: LatLngPoint | Cesium.Cartesian3;
        style: SatelliteSensor.StyleOptions;
        attr?: any;
        lookAt?: Cesium.Cartesian3 | Cesium.PositionProperty;
        trackedEntity?: Cesium.Entity;
        autoHeading?: boolean;
        fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame;
        revers?: boolean;
    });
    /**
     * 椎体类型
     */
    sensorType: SatelliteSensor.Type;
    /**
     * 颜色
     */
    color: Cesium.Color;
    /**
     * 边线颜色
     */
    outlineColor: Cesium.Color;
    /**
     * 夹角（angle1和angle2相同），半场角度，取值范围 0.1-89.9
     */
    angle: number;
    /**
     * 圆锥的角度或者四棱锥的第一个角度，半场角度，取值范围 0.1-89.9
     */
    angle1: number;
    /**
     * 四棱锥的第二个角度，半场角度，取值范围 0.1-89.9
     */
    angle2: number;
    /**
     * 四周方向角，0-360度角度值
     */
    heading: number;
    /**
     * 俯仰角，上下摇摆的角度，0-360度角度值
     */
    pitch: number;
    /**
     * 滚转角，左右摆动的角度，0-360度角度值
     */
    roll: number;
    /**
     * 是否显示边线
     */
    outline: boolean;
    /**
     * 椎体跟随的卫星（椎体位置跟随变化，方向不变）
     */
    trackedEntity: Cesium.Entity | ModelEntity;
    /**
     * 椎体方向追踪的目标（椎体方向跟随变化，位置不变）
     */
    lookAt: Cesium.Entity;
    /**
     * 获取当前转换计算模型矩阵。如果方向或位置未定义，则返回undefined。
     */
    readonly matrix: Cesium.Matrix4;
    /**
     * 获取视锥体方向中心射线与地球相交点
     */
    readonly groundPosition: Cesium.Cartesian3;
    /**
     * 是否求交地球计算
     */
    rayEllipsoid: boolean;
    /**
     * 与地球相交的类型：0不想交，1完全相交，2部分相交。
     * 仅当rayEllipsoid：true时才有效。
     */
    readonly intersectEllipsoid: number;
    /**
     * 导出成像区坐标
     * @returns 成像区坐标，经、纬度坐标数组
     */
    getAreaCoords(): any[][];
    /**
     * 位置坐标 （笛卡尔坐标）, 赋值时可以传入LatLngPoint对象
     */
    position: Cesium.Cartesian3;
    /**
     * 销毁当前对象
     * @param [noDel = false] - false:会自动delete释放所有属性，true：不delete绑定的变量
     * @returns 无
     */
    destroy(noDel?: boolean): void;
}

/**
 * 超图S3M三维模型图层,
 * 【需要引入  mars3d-supermap 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 图层id标识
 * @param [options.pid = -1] - 图层父级的id，一般图层管理中使用
 * @param [options.name = '未命名'] - 图层名称
 * @param [options.show = true] - 图层是否显示
 * @param options.url - supermap的S3M服务地址,示例："url": "http://www.supermapol.com/realspace/services/3D-Olympic/rest/realspace"
 * @param [options.layername] - 指定图层名称,未指定时，打开iserver场景服务下所有图层
 * @param [options.sceneName] - 工作空间中有多个场景，需要指定场景名称；设置为undefined，默认打开第一个
 * @param [options.s3mOptions] - [S3M支持的参数]{@link http://support.supermap.com.cn:8090/webgl/docs/Documentation/S3MTilesLayer.html?classFilter=S3MTilesLayer} ,示例： {"selectEnabled":false},
 * @param [options.position] - 模型新的中心点位置（移动模型）
 * @param options.position.alt - 获取或设置底部高程。（单位：米）
 * @param [options.center] - 图层自定义定位视角
 * @param [options.flyTo] - 加载完成数据后是否自动飞行定位到数据所在的区域。
 */
declare class S3MLayer extends BaseLayer {
    constructor(options: {
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        url: string;
        layername?: string;
        sceneName?: string;
        s3mOptions?: any;
        position?: {
            alt: number;
        };
        center?: any;
        flyTo?: boolean;
    });
    /**
     * 模型对应的supermap图层组
     */
    readonly layer: Cesium.S3MTilesLayer[];
    /**
     * 设置S3M图层本身支持的参数
     */
    s3mOptions: any;
    /**
     * 设置透明度
     * @param value - 透明度
     * @returns 无
     */
    setOpacity(value: number): void;
    /**
     * 飞行定位至图层数据所在的视角
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 当前对象本身，可以链式调用
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): this;
}

/**
 * 超图影像瓦片服务图层,
 * 【需要引入  mars3d-supermap 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.transparent = true] - 设置请求的地图服务的参数是否为transparent。
 * @param [options.tileFormat] - 影像图片格式，默认为png。
 * @param [options.cacheKey] - 影像的三维缓存密钥。
 * @param [options.transparentBackColor] - 设置影像透明色。
 * @param [options.transparentBackColorTolerance] - 去黑边,设置影像透明色容限，取值范围为0.0~1.0。0.0表示完全透明，1.0表示完全不透明。
 */
declare class SmImgLayer extends BaseTileLayer {
    constructor(options: {
        通用参数?: BaseTileLayer.ConstructorOptions;
        transparent?: boolean;
        tileFormat?: string;
        cacheKey?: string;
        transparentBackColor?: string | Cesium.Color;
        transparentBackColorTolerance?: number;
    });
    /**
     * 创建用于图层的 ImageryProvider对象
     * @param options - Provider参数，同图层构造参数。
     * @returns ImageryProvider类
     */
    static createImageryProvider(options: any): Cesium.SuperMapImageryProvider;
    /**
     * 创建瓦片图层对应的ImageryProvider对象
     * @param [options = {}] - 参数对象，具体每类瓦片图层都不一样。
     * @returns 创建完成的 ImageryProvider 对象
     */
    _createImageryProvider(options?: any): Cesium.UrlTemplateImageryProvider | any;
    /**
     * 对象添加到地图上的创建钩子方法，
     * 每次add时都会调用
     * @returns 无
     */
    _addedHook(): void;
}

/**
 * 超图MVT矢量瓦片图层,
 * 【需要引入  mars3d-supermap 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 图层id标识
 * @param [options.pid = -1] - 图层父级的id，一般图层管理中使用
 * @param [options.name = '未命名'] - 图层名称
 * @param [options.show = true] - 图层是否显示
 * @param [options.center] - 图层自定义定位视角
 * @param options.url - 适用于通过SuperMap桌面软件生成mvt数据,经iServer发布为rest风格的地图服务，只需提供服务地址。
 * @param options.url - 服务地址,适用于第三方发布的WMTS服务。
 * @param options.layer - 图层名称,适用于第三方发布的WMTS服务。
 * @param [options.canvasWidth] - 用来绘制矢量的纹理边长。默认是512，越大越精细，越小性能越高。
 * @param [options.format = 'mvt'] - 适用于第三方发布的WMTS服务。
 * @param [options.mapboxStyle] - 使用的mapBox风格。
 * @param [options.其他] - 参考[supermap官方API]{@link http://support.supermap.com.cn:8090/webgl/docs/Documentation/Scene.html#addVectorTilesLayer}
 */
declare class SmMvtLayer extends BaseLayer {
    constructor(options: {
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        center?: any;
        url: string;
        url: string;
        layer: string;
        canvasWidth?: number;
        format?: string;
        mapboxStyle?: any;
        其他?: any;
    });
    /**
     * 对应的supermap图层
     */
    readonly layer: Cesium.VectorTilesLayer;
    /**
     * 设置透明度
     * @param value - 透明度
     * @returns 无
     */
    setOpacity(value: number): void;
    /**
     * 飞行定位至图层数据所在的视角
     * @param [options = {}] - 参数对象:
     * @param options.radius - 点状数据时，相机距离目标点的距离（单位：米）
     * @param [options.scale = 1.8] - 线面数据时，缩放比例，可以控制视角比矩形略大一些，这样效果更友好。
     * @param [options.duration] - 飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
     * @param [options.complete] - 飞行完成后要执行的函数。
     * @param [options.cancel] - 飞行取消时要执行的函数。
     * @param [options.endTransform] - 变换矩阵表示飞行结束时相机所处的参照系。
     * @param [options.maximumHeight] - 飞行高峰时的最大高度。
     * @param [options.pitchAdjustHeight] - 如果相机飞得比这个值高，在飞行过程中调整俯仰以向下看，并保持地球在视口。
     * @param [options.flyOverLongitude] - 地球上的两点之间总有两条路。这个选项迫使相机选择战斗方向飞过那个经度。
     * @param [options.flyOverLongitudeWeight] - 仅在通过flyOverLongitude指定的lon上空飞行，只要该方式的时间不超过flyOverLongitudeWeight的短途时间。
     * @param [options.convert = true] - 是否将目的地从世界坐标转换为场景坐标（仅在不使用3D时相关）。
     * @param [options.easingFunction] - 控制在飞行过程中如何插值时间。
     * @returns 当前对象本身，可以链式调用
     */
    flyTo(options?: {
        radius: number;
        scale?: number;
        duration?: number;
        complete?: Cesium.Camera.FlightCompleteCallback;
        cancel?: Cesium.Camera.FlightCancelledCallback;
        endTransform?: Matrix4;
        maximumHeight?: number;
        pitchAdjustHeight?: number;
        flyOverLongitude?: number;
        flyOverLongitudeWeight?: number;
        convert?: boolean;
        easingFunction?: Cesium.EasingFunction.Callback;
    }): this;
}

/**
 * 天地图 三维地名服务图层
 * 【需要引入 mars3d-tdt 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.url = 'https://t{s}.tianditu.gov.cn/mapservice/GetTiles'] - 天地图服务地址
 * @param [options.subdomains = '01234567'] - 服务负载子域
 * @param [options.key = mars3d.Token.tianditu] - 天地图服务token令牌
 */
declare class TdtDmLayer extends BaseLayer {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        url?: string;
        subdomains?: string;
        key?: string;
    });
    /**
     * 对象添加到地图前创建一些对象的钩子方法，
     * 只会调用一次
     * @returns 无
     */
    _mountedHook(): void;
}

/**
 * 天地图 地形服务
 * 【需要引入 mars3d-tdt 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.通用参数] - 包含父类支持的所有参数
 * @param [options.url = 'https://t{s}.tianditu.gov.cn/DataServer'] - 天地图服务地址
 * @param [options.subdomains = '01234567'] - 服务负载子域
 * @param [options.key = mars3d.Token.tianditu] - 天地图服务token令牌
 */
declare class TdtTerrainProvider extends Cesium.GeoTerrainProvider {
    constructor(options: {
        通用参数?: BaseGraphicLayer.ConstructorOptions;
        url?: string;
        subdomains?: string;
        key?: string;
    });
}

/**
 * widget基础类,
 * 需要继承后使用，不用手动实例化，框架内部自动实例化及相关处理。
 * 【需要引入  mars3d-widget 插件库】
 * @example
 * //使用示例
 * class MyWidget extends mars3d.widget.BaseWidget {
 *   //外部资源配置
 *   get resources() {
 *     return [
 *       'js/test.js', //当前同目录下
 *       './lib/dom2img/dom-to-image.js', //主页面相同目录下
 *     ]
 *   }
 *   //弹窗配置
 *   get view() {
 *     return {
 *       type: 'window',
 *       url: 'view.html',
 *       windowOptions: {  width: 250 },
 *     }
 *   }
 *   //初始化[仅执行1次]
 *   create() {}
 *   //每个窗口创建完成后调用
 *   winCreateOK(opt, result) {
 *     this.viewWindow = result
 *   }
 *   //打开激活
 *   activate() {}
 *   //关闭释放
 *   disable() {
 *     this.viewWindow = null
 *   }
 * }
 *
 * //注册到widget管理器中。
 * mars3d.widget.bindClass(MyWidget)
 * @param map - 地图对象
 * @param options - 配置参数
 */
declare class BaseWidget extends BaseClass {
    constructor(map: Map, options: widget.WidgetOptions);
    /**
     * 获取当前地图
     */
    readonly map: Map;
    /**
     * 获取当前配置参数
     */
    readonly options: widget.WidgetOptions;
    /**
     * 获取当前配置参数，别名，同options
     */
    readonly config: widget.WidgetOptions;
    /**
     * 获取当前widget的目录路径
     */
    readonly path: string;
    /**
     * 是否激活状态
     */
    readonly isActivate: boolean;
    /**
     * 是否已创建
     */
    readonly isCreate: boolean;
    /**
     * 该模块依赖的外部js、css资源文件，会在实例化之前加入的页面中。
     * 默认引用是当前widget所在同path目录的资源，
     * 相当于html主页面的资源 或 外部资源 请 以 “/” 或 “.” 或 “http” 开始的url
     */
    readonly resources: String[];
    /**
     * 定义关联的view弹窗或页面配置信息，目前支持3种类型，
     * （1）type:'window'，iframe模式弹窗	,参考_example示例，	独立的html子页面，比较自由，简单粗暴、无任何限制；可以每个页面用不同的UI和第三方插件不用考虑冲突问题；任何水平的开发人员均容易快速开发。
     * （2）type:'divwindow'，div元素模式弹窗	参考_example_divwin示例，可直接互相访问，这种模式弊端是易引起模块间id命名冲突，在css和html中命名时需注意。
     * （3）type:'append'，任意html元素	参考_example_append示例，任意div节点，比较自由。
     * 为空时表示当前模块无关联的view页面，
     * 其中url地址规则，参考resources说明
     */
    readonly view: any | object[];
    /**
     * 激活widget，同 mars3d.widget.activate方法
     * @returns 无
     */
    activateBase(): void;
    /**
     * 构造方法完成后的钩子方法，子类继承后按需使用
     * @returns 无
     */
    init(): void;
    /**
     * 模块初始化，仅首次初始化执行1次
     * @param [endfun] - 当create内存在异步时，可以异步后调用下endfun
     * @returns 无
     */
    create(endfun?: (...params: any[]) => any): void;
    /**
     * 遍历所有view配置
     * @param callback - 回调方法
     * @param [index] - 当有多个view时，可以指定单个操作的view的index
     * @returns callback执行的返回结果
     */
    eachView(callback: (...params: any[]) => any, index?: number): any;
    /**
     * 更新窗口大小或位置，改变了主页面尺寸后需要调用(内部已自动调用)。
     * @returns 无
     */
    indexResize(): void;
    /**
     * 每个view窗口或页面创建完成后调用的钩子方法
     * @param opt - 对应的view配置
     * @param result - 得到iframe页的窗口对象 或 view的html内容
     * @returns 无
     */
    winCreateOK(opt: any, result: any | string): void;
    /**
     * 窗口最大化后触发后 的钩子方法
     * @returns 无
     */
    winFull(): void;
    /**
     * 窗口最小化后触发 的钩子方法
     * @returns 无
     */
    winMin(): void;
    /**
     * 窗口还原后触发 的钩子方法
     * @returns 无
     */
    winRestore(): void;
    /**
     * 激活模块之前 的钩子方法
     * @returns 无
     */
    beforeActivate(): void;
    /**
     * 激活模块【类内部实现方法】
     * @returns 无
     */
    activate(): void;
    /**
     * 释放插件，同 mars3d.widget.disable方法
     * @returns 无
     */
    disableBase(): void;
    /**
     * 释放模块前
     * @returns 无
     */
    beforeDisable(): void;
    /**
     * 释放模块【类内部实现方法】
     * @returns 无
     */
    disable(): void;
    /**
     * 还原配置为初始状态
     * @returns 无
     */
    resetConfig(): void;
    /**
     * 设置view弹窗的显示和隐藏，基于修改css实现
     * @param show - 是否显示
     * @param [index] - 当有多个view时，可以指定单个操作的view的index
     * @returns 无
     */
    setViewShow(show: boolean, index?: number): void;
    /**
     * 设置view弹窗的css
     * @param style - css值
     * @param [index] - 当有多个view时，可以指定单个操作的view的index
     * @returns 无
     */
    setViewCss(style: any, index?: number): void;
    /**
     * 读取html页面的内容
     * @param url - html页面的url
     * @param callback - 读取完成后的回调方法
     * @returns 无
     */
    getHtml(url: string, callback: (...params: any[]) => any): void;
}

/**
 * 事件类型 枚举（所有事件统一的入口）
 */
declare const enum EventType {
    /**
     * 添加对象
     */
    add = "add",
    /**
     * 移除对象
     */
    remove = "remove",
    /**
     * 添加矢量数据时[图层上监听时使用]
     */
    addGraphic = "addGraphic",
    /**
     * 移除矢量数据时[图层上监听时使用]
     */
    removeGraphic = "removeGraphic",
    /**
     * 添加图层[map上监听时使用]
     */
    addLayer = "addLayer",
    /**
     * 移除图层[map上监听时使用]
     */
    removeLayer = "removeLayer",
    /**
     * 更新了对象
     */
    update = "update",
    /**
     * 更新了style对象
     */
    updateStyle = "updateStyle",
    /**
     * 更新了attr对象
     */
    updateAttr = "updateAttr",
    /**
     * 显示了对象
     */
    show = "show",
    /**
     * 隐藏了对象
     */
    hide = "hide",
    /**
     * 开始
     */
    start = "start",
    /**
     * 变化了
     */
    change = "change",
    /**
     * 多个数据异步分析时，完成其中一个时的回调事件
     */
    endItem = "endItem",
    /**
     * 多个数据异步分析时，完成所有的回调事件
     */
    end = "end",
    /**
     * 完成
     */
    stop = "stop",
    /**
     * 完成加载，但未做任何其他处理前
     */
    loadBefore = "loadBefore",
    /**
     * 完成加载，执行所有内部处理后
     */
    load = "load",
    /**
     * 出错了
     */
    error = "error",
    /**
     * 完成加载配置信息
     */
    loadConfig = "loadConfig",
    /**
     * popup弹窗打开后
     */
    popupOpen = "popupOpen",
    /**
     * popup弹窗关闭
     */
    popupClose = "popupClose",
    /**
     * tooltip弹窗打开后
     */
    tooltipOpen = "tooltipOpen",
    /**
     * tooltip弹窗关闭
     */
    tooltipClose = "tooltipClose",
    /**
     * 左键单击  鼠标事件
     */
    click = "click",
    /**
     * 左键单击到矢量或模型数据时 鼠标事件
     */
    clickGraphic = "clickGraphic",
    /**
     * 左键单击到wms或arcgis瓦片服务的对应矢量数据时
     */
    clickTileGraphic = "clickTileGraphic",
    /**
     * 左键单击地图空白（未单击到矢量或模型数据）时 鼠标事件
     */
    clickMap = "clickMap",
    /**
     * 左键双击  鼠标事件
     */
    dblClick = "dblClick",
    /**
     * 左键鼠标按下 鼠标事件
     */
    leftDown = "leftDown",
    /**
     * 左键鼠标按下后释放   鼠标事件
     */
    leftUp = "leftUp",
    /**
     * 鼠标移动   鼠标事件
     */
    mouseMove = "mouseMove",
    /**
     * 鼠标移动（拾取目标，并延迟处理） 鼠标事件
     */
    mouseMoveTarget = "mouseMoveTarget",
    /**
     * 鼠标滚轮滚动  鼠标事件
     */
    wheel = "wheel",
    /**
     * 右键单击 鼠标事件
     */
    rightClick = "rightClick",
    /**
     * 右键鼠标按下  鼠标事件
     */
    rightDown = "rightDown",
    /**
     * 右键鼠标按下后释放   鼠标事件
     */
    rightUp = "rightUp",
    /**
     * 中键单击 鼠标事件
     */
    middleClick = "middleClick",
    /**
     * 中键鼠标按下  鼠标事件
     */
    middleDown = "middleDown",
    /**
     * 中键鼠标按下后释放 鼠标事件
     */
    middleUp = "middleUp",
    /**
     * 在触摸屏上两指缩放开始 鼠标事件
     */
    pinchStart = "pinchStart",
    /**
     * 在触摸屏上两指缩放结束  鼠标事件
     */
    pinchEnd = "pinchEnd",
    /**
     * 在触摸屏上两指移动 鼠标事件
     */
    pinchMove = "pinchMove",
    /**
     * 鼠标按下 [左中右3键都触发] 鼠标事件
     */
    mouseDown = "mouseDown",
    /**
     * 鼠标按下后释放 [左中右3键都触发] 鼠标事件
     */
    mouseUp = "mouseUp",
    /**
     * 鼠标移入 鼠标事件
     */
    mouseOver = "mouseOver",
    /**
     * 鼠标移出 鼠标事件
     */
    mouseOut = "mouseOut",
    /**
     * 按键按下 键盘事件
     */
    keydown = "keydown",
    /**
     * 按键按下后释放 键盘事件
     */
    keyup = "keyup",
    /**
     * 开始绘制 标绘事件
     */
    drawStart = "drawStart",
    /**
     * 正在移动鼠标中，绘制过程中鼠标移动了点 标绘事件
     */
    drawMouseMove = "drawMouseMove",
    /**
     * 绘制过程中增加了点 标绘事件
     */
    drawAddPoint = "drawAddPoint",
    /**
     * 绘制过程中删除了最后一个点 标绘事件
     */
    drawRemovePoint = "drawRemovePoint",
    /**
     * 创建完成 标绘事件
     */
    drawCreated = "drawCreated",
    /**
     * 开始编辑 标绘事件
     */
    editStart = "editStart",
    /**
     * 移动鼠标按下左键（LEFT_DOWN）标绘事件
     */
    editMouseDown = "editMouseDown",
    /**
     * 正在移动鼠标中，正在编辑拖拽修改点中（MOUSE_MOVE） 标绘事件
     */
    editMouseMove = "editMouseMove",
    /**
     * 编辑修改了点（LEFT_UP）标绘事件
     */
    editMovePoint = "editMovePoint",
    /**
     * 编辑删除了点 标绘事件
     */
    editRemovePoint = "editRemovePoint",
    /**
     * 图上编辑修改了相关style属性 标绘事件
     */
    editStyle = "editStyle",
    /**
     * 停止编辑 标绘事件
     */
    editStop = "editStop",
    /**
     * 标绘事件
     */
    move = "move",
    /**
     * 3dtiles模型，模型瓦片初始化完成
     * 该回调只执行一次
     */
    initialTilesLoaded = "initialTilesLoaded",
    /**
     * 3dtiles模型,当前批次模型加载完成
     * 该回调会执行多次，视角变化后重新加载一次完成后都会回调
     */
    allTilesLoaded = "allTilesLoaded",
    /**
     * 栅格瓦片图层，添加单个瓦片，开始加载瓦片（请求前）
     */
    addTile = "addTile",
    /**
     * 栅格瓦片图层，添加单个瓦片 加载瓦片完成
     */
    addTileSuccess = "addTileSuccess",
    /**
     * 栅格瓦片图层，添加单个瓦片 加载瓦片出错了
     */
    addTileError = "addTileError",
    /**
     * 栅格瓦片图层，移除单个瓦片
     */
    removeTile = "removeTile",
    /**
     * 相机开启移动前 场景事件
     */
    cameraMoveStart = "cameraMoveStart",
    /**
     * 相机移动完成后 场景事件
     */
    cameraMoveEnd = "cameraMoveEnd",
    /**
     * 相机位置完成 场景事件
     */
    cameraChanged = "cameraChanged",
    /**
     * 场景更新前 场景事件
     */
    preUpdate = "preUpdate",
    /**
     * 场景更新后 场景事件
     */
    postUpdate = "postUpdate",
    /**
     * 场景渲染前 场景事件
     */
    preRender = "preRender",
    /**
     * 场景渲染后 场景事件
     */
    postRender = "postRender",
    /**
     * 场景渲染失败（需要刷新页面）
     */
    renderError = "renderError",
    /**
     * 场景模式(2D/3D/哥伦布)变换前 场景事件
     */
    morphStart = "morphStart",
    /**
     * 完成场景模式(2D/3D/哥伦布)变换 场景事件
     */
    morphComplete = "morphComplete",
    /**
     * 时钟跳动 场景事件
     */
    clockTick = "clockTick"
}

/**
 * widget模块化框架，公共处理类
 * 【需要引入  mars3d-widget 插件库】
 */
declare module "widget" {
    /**
     * 初始化widget管理器，在构造完成map后调用一次即可。
     * @example
     * let widgetCfg ={
     *   "version": "20210803",
     *   "defaultOptions": {
     *     "style": "dark",
     *     "windowOptions": {
     *       "skin": "layer-mars-dialog animation-scale-up",
     *       "position": {
     *         "top": 50,
     *         "right": 10
     *       },
     *       "maxmin": false,
     *       "resize": true
     *     },
     *     "autoReset": false,
     *     "autoDisable": true,
     *     "disableOther": true
     *   },
     *   "openAtStart": [
     *     {
     *       "name": "放大缩小按钮",
     *       "uri": "widgets/toolButton/zoom.js"
     *     }
     *   ],
     *   "widgets": [
     *     {
     *       "name": "模板-div弹窗",
     *       "uri": "widgets/_example_divwin/widget.js"
     *     },
     *     {
     *       "name": "模板-append模板",
     *       "uri": "widgets/_example_append/widget.js"
     *     }
     *   ]
     * }
     * mars3d.widget.init(map, widgetCfg, './')
     * @param map - 地图对象
     * @param [widgetcfg = {}] - 全局配置(一般存放在widget.json)，包括：
     * @param [widgetcfg.defaultOptions] - 所有widget的默认参数值，可以系统内所有widget相同配置统一在此处传入，额外的个性化的再配置到各widget中。
     * @param [widgetcfg.openAtStart] - 默认自启动并不可释放的插件，其中autoDisable和openAtStart固定，设置无效。
     * @param [widgetcfg.widgets] - 所有插件配置，传入后后续激活时，只用传入uri即可。
     * @param [widgetcfg.version] - 加载资源时，附加的参数，主要为了清理浏览器缓存，可选值："time"（实时时间戳）或固定的字符串值，每次发布新版本换下固定值。
     * @param [widgetcfg.debugger] - 是否显示插件测试栏，true时会在地图下侧显示所有插件测试按钮，方便测试。
     * @param [_basePath = ''] - widgets目录所在的主路径(统一前缀), 如果widgets目录不在主页面一起或存在路由时，可以传入自定义主目录，值为 widgets目录相对于当前html页面的相对路径。
     * @returns 无
     */
    function init(map: Map, widgetcfg?: {
        defaultOptions?: widget.WidgetOptions;
        openAtStart?: widget.WidgetOptions[];
        widgets?: widget.WidgetOptions[];
        version?: string;
        debugger?: boolean;
    }, _basePath?: string): void;
    /**
     * 获取默认init时中传入配置的 windowOptions 参数
     * @returns windowOptions参数默认值
     */
    function getDefWindowOptions(): any;
    /**
     * 激活指定 widget模块
     * @example
     * //常用方式，直接使用uri
     * mars3d.widget.activate("widgets/bookmark/widget.js");
     *
     * //使用对象，可以传入更多参数，具体参数参看配置项手册，。
     * mars3d.widget.activate({
     *   name:"视角书签"
     *   uri: "widgets/bookmark/widget.js",
     *   autoDisable: true,
     *   testdata:'测试数据1987', //传数据进widget内部，widget内部使用this.config.testdata获取到传的数据
     * });
     * @param item - 指widget模块的uri 或 指模块的配置参数,当有配置参数时，参数优先级是：
     * 【activate方法传入的配置 > init方法传入的配置(widget.json) > widget.js内部配置的】
     * @param [item.map] - 当单页面简单场景没有init时，也可以传入map来使用单个widget
     * @param [noDisableOther = false] - 不释放其他已激活的widget
     * @returns 指widget模块对象
     */
    function activate(item: {
        map?: Map;
    }, noDisableOther?: boolean): widget.WidgetOptions;
    /**
     * 获取指定的widget配置信息
     * @param uri - widget的uri 或 id
     * @returns widget配置信息
     */
    function getWidget(uri: string): widget.WidgetOptions;
    /**
     * 获取指定的widget 对应的实例化对象
     * @param uri - widget的uri 或 id
     * @returns widget对应的实例化对象
     */
    function getClass(uri: string): BaseWidget;
    /**
     * 获取widget的当前激活状态
     * @param uri - widget的uri 或 id
     * @returns 是否激活
     */
    function isActivate(uri: string): boolean;
    /**
     * 释放指定的widget
     * @param uri - widget的uri 或 id
     * @returns 是否成功调用了释放
     */
    function disable(uri: string): boolean;
    /**
     * 关闭释放所有widget
     * @param [nodisable] - 指定不释放的widget的uri或id 或 传true值强制释放所有widget(默认autoDisable为false的widet不会释放)
     * @param [group] - 指定强制释放的group名(默认autoDisable为false的widet不会释放)，传入group值后会强制释放所有同group组的widget
     * @returns 无
     */
    function disableAll(nodisable?: string | boolean, group?: string): void;
    /**
     * 关闭释放同组widget
     * @param group - 指定强制释放的group名
     * @param [nodisable] - 指定不释放的widget的uri或id
     * @returns 无
     */
    function disableGroup(group: string, nodisable?: string): void;
    /**
     * 遍历所有widget
     * @param method - 回调方法
     * @returns 无
     */
    function eachWidget(method: (...params: any[]) => any): void;
    /**
     * 绑定类到当前对应js的widget中。
     * @param _class - 定义的BaseWidget子类
     * @returns 实例化后的对象
     */
    function bindClass(_class: BaseWidget): any;
    /**
     * 移除Widget测试栏（当有开启debugger时）
     * @returns 无
     */
    function removeDebugeBar(): void;
    /**
     * 获取配置的version配置参数，用于附加清除浏览器缓存
     * @returns 配置的version参数
     */
    function getCacheVersion(): string;
    /**
     * 获取init方法传入的主目录配置参数
     * @returns 主目录配置参数
     */
    function getBasePath(): string;
    /**
     * 销毁对象
     * @returns 无
     */
    function destroy(): void;
    /**
     * 绑定指定类型事件监听器
     * @param types - 事件类型
     * @param fn - 绑定的监听器回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 无
     */
    function on(types: EventType | EventType[], fn: (...params: any[]) => any, context: any): void;
    /**
     * 解除绑定指定类型事件监听器
     * @param types - 事件类型
     * @param fn - 绑定的监听器回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 无
     */
    function off(types: EventType | EventType[], fn: (...params: any[]) => any, context: any): void;
    /**
     * 触发指定类型的事件。
     * @param type - 事件类型
     * @param data - 传输的数据或对象，可在事件回调方法中event对象中获取进行使用
     * @param [propagate = null] - 将事件传播给父类 (用addEventParent设置)
     * @returns 无
     */
    function fire(type: EventType, data: any, propagate?: BaseClass): void;
    /**
     * 绑定一次性执行的指定类型事件监听器
     * 与on类似，监听器只会被触发一次，然后被删除。
     * @param types - 事件类型
     * @param fn - 绑定的监听器回调方法
     * @param context - 侦听器的上下文(this关键字将指向的对象)。
     * @returns 无
     */
    function once(types: EventType | EventType[], fn: (...params: any[]) => any, context: any): void;
    /**
     * 是否有绑定指定的事件
     * @param type - 事件类型
     * @param [propagate = null] - 是否判断指定的父类 (用addEventParent设置的)
     * @returns 是否存在
     */
    function listens(type: EventType, propagate?: BaseClass): boolean;
}

/**
 * 风场图层，基于粒子实现，
 * 【需要引入 mars3d-wind 插件库】
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 图层id标识
 * @param [options.pid = -1] - 图层父级的id，一般图层管理中使用
 * @param [options.name = '未命名'] - 图层名称
 * @param [options.show = true] - 图层是否显示
 * @param [options.center] - 图层自定义定位视角
 * @param [options.maxParticles = 4096] - 初始粒子总数
 * @param [options.particleHeight = 100] - 粒子的高度
 * @param [options.fadeOpacity = 0.996] - 消失不透明度
 * @param [options.dropRate = 0.003] - 下降率
 * @param [options.dropRateBump = 0.01] - 下降速度
 * @param [options.speedFactor = 0.5] - 速度系数
 * @param [options.lineWidth = 2.0] - 线宽度
 */
declare class WindLayer extends BaseLayer {
    constructor(options: {
        id?: string | number;
        pid?: string | number;
        name?: string;
        show?: boolean;
        center?: any;
        maxParticles?: number;
        particleHeight?: number;
        fadeOpacity?: number;
        dropRate?: number;
        dropRateBump?: number;
        speedFactor?: number;
        lineWidth?: number;
    });
    /**
     * 存放风场粒子对象的容器
     */
    readonly layer: Cesium.PrimitiveCollection;
    /**
     * 设置 风场数据
     * @param data - 风场数据
     * @returns 无
     */
    setData(data: any): void;
    /**
     * 重新赋值参数，同构造方法参数一致。
     * @param options - 参数,与类的构造方法参数相同
     * @returns 当前对象本身，可以链式调用
     */
    setOptions(options: any): this;
}

/**
 * 百度 POI查询 工具类 ，
 * 参考文档： http://lbsyun.baidu.com/index.php?title=webapi/guide/webservice-placeapi
 * @param options - 参数对象，包括以下：
 * @param [options.key = mars3d.Token.baiduArr] - 百度KEY,实际项目中请使用自己申请的百度KEY，因为我们的key不保证长期有效。
 * @param [options.city = '全国'] - 限定查询的区域，支持城市及对应百度编码（Citycode）（指定的区域的返回结果加权，可能返回其他城市高权重结果。若要对返回结果区域严格限制，请使用city_limit参数）
 * @param [options.headers = {}] - 将被添加到HTTP请求头。
 * @param [options.proxy] - 加载资源时使用的代理。
 */
declare class BaiduPOI {
    constructor(options: {
        key?: String[];
        city?: string;
        headers?: any;
        proxy?: Cesium.Proxy;
    });
    /**
     * 百度key数组，内部轮询使用
     */
    keys: String[];
    /**
     * 轮询取单个key进行使用
     */
    readonly key: string;
    /**
     * 根据经纬度坐标获取地址，逆地理编码
     * @param queryOptions - 查询参数
     * @param [queryOptions.location = null] - 经纬度坐标
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    getAddress(queryOptions: {
        location?: LatLngPoint;
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): this;
    /**
     * 搜索提示查询
     * @param queryOptions - 查询参数
     * @param queryOptions.text - 输入建议关键字（支持拼音）
     * @param [queryOptions.location = null] - 传入location参数后，返回结果将以距离进行排序
     * @param [queryOptions.city = null] - 可以重新限定查询的区域，默认为类构造时传入的city
     * @param [queryOptions.citylimit = false] - 取值为"true"，仅返回city中指定城市检索结果
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    autoTip(queryOptions: {
        text: string;
        location?: LatLngPoint;
        city?: string;
        citylimit?: boolean;
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): this;
    /**
     * 关键字搜索
     * @param queryOptions - 查询参数
     * @param queryOptions.text - 检索关键字。支持多个关键字并集检索，不同关键字间以空格符号分隔，最多支持10个关键字检索。
     * @param [queryOptions.types = ''] - 检索分类偏好，与text组合进行检索，多个分类以","分隔（POI分类），如果需要严格按分类检索，请通过text参数设置
     * @param [queryOptions.location = null] - 圆形区域检索中心点，不支持多个点
     * @param queryOptions.location.lat - 纬度
     * @param queryOptions.location.lng - 经度
     * @param [queryOptions.radius = null] - 圆形区域检索半径，单位为米。（增加区域内数据召回权重，如需严格限制召回数据在区域内，请搭配使用radiuslimit参数），当半径过大，超过中心点所在城市边界时，会变为城市范围检索，检索范围为中心点所在城市
     * @param [queryOptions.radiuslimit = false] - 是否严格限定召回结果在设置检索半径范围内。true（是），false（否）。设置为true时会影响返回结果中total准确性及每页召回poi数量， 设置为false时可能会召回检索半径外的poi。
     * @param [queryOptions.city = null] - 可以重新限定查询的区域，默认为类构造时传入的city
     * @param [queryOptions.citylimit = false] - 取值为"true"，仅返回city中指定城市检索结果
     * @param [queryOptions.page = 0] - 分页页码，默认为0, 0代表第一页，1代表第二页，以此类推。常与 count 搭配使用，仅当返回结果为poi时可以翻页。
     * @param [queryOptions.count = 20] - 单次召回POI数量，最大返回20条。多关键字检索时，返回的记录数为关键字个数*count。多关键词检索时，单页返回总数=关键词数量*count
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    queryText(queryOptions: {
        text: string;
        types?: string;
        location?: {
            lat: number;
            lng: number;
        };
        radius?: number;
        radiuslimit?: boolean;
        city?: string;
        citylimit?: boolean;
        page?: number;
        count?: number;
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): this;
}

/**
 * 高德 POI查询 工具类，
 * 参考文档： https://lbs.amap.com/api/webservice/guide/api/search
 * @param options - 参数对象，包括以下：
 * @param [options.key = mars3d.Token.gaodeArr] - 百度KEY,在实际项目中请使用自己申请的高德KEY，因为我们的key不保证长期有效。
 * @param [options.headers = {}] - 将被添加到HTTP请求头。
 * @param [options.proxy] - 加载资源时使用的代理。
 */
declare class GaodePOI {
    constructor(options: {
        key?: String[];
        headers?: any;
        proxy?: Cesium.Proxy;
    });
    /**
     * 高德key数组，内部轮询使用
     */
    keys: String[];
    /**
     * 轮询取单个key进行使用
     */
    readonly key: string;
    /**
     * 根据经纬度坐标获取地址，逆地理编码
     * @param queryOptions - 查询参数
     * @param [queryOptions.location = null] - 经纬度坐标
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    getAddress(queryOptions: {
        location?: LatLngPoint;
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): this;
    /**
     * 高德搜索提示
     * @param queryOptions - 查询参数
     * @param queryOptions.text - 输入建议关键字（支持拼音）
     * @param [queryOptions.location = null] - 建议使用location参数，可在此location附近优先返回搜索关键词信息,在请求参数city不为空时生效
     * @param [queryOptions.city = null] - 可以重新限定查询的区域，默认为类构造时传入的city
     * @param [queryOptions.citylimit = false] - 取值为"true"，仅返回city中指定城市检索结果
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    autoTip(queryOptions: {
        text: string;
        location?: LatLngPoint;
        city?: string;
        citylimit?: boolean;
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): this;
    /**
     * 按限定区域搜索
     * @param queryOptions - 查询参数
     * @param queryOptions.text - 检索关键字。支持多个关键字并集检索，不同关键字间以空格符号分隔，最多支持10个关键字检索。
     * @param [queryOptions.types = ''] - 检索分类偏好，与text组合进行检索，多个分类以","分隔（POI分类），如果需要严格按分类检索，请通过text参数设置
     * @param [queryOptions.graphic] - 限定的搜索区域
     * @param [queryOptions.limit = false] - 取值为"true"，严格返回限定区域内检索结果
     * @param [queryOptions.page = 0] - 分页页码，默认为0, 0代表第一页，1代表第二页，以此类推。常与 count 搭配使用，仅当返回结果为poi时可以翻页。
     * @param [queryOptions.count = 20] - 单次召回POI数量，默认为10条记录，最大返回20条。多关键字检索时，返回的记录数为关键字个数*count。多关键词检索时，单页返回总数=关键词数量*count
     * @param [queryOptions.error] - 查询失败的回调方法
     * @param [queryOptions.success] - 查询完成的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    query(queryOptions: {
        text: string;
        types?: string;
        graphic?: BaseGraphic;
        limit?: boolean;
        page?: number;
        count?: number;
        error?: (...params: any[]) => any;
        success?: (...params: any[]) => any;
    }): this;
    /**
     * 关键字搜索
     * @param queryOptions - 查询参数
     * @param queryOptions.text - 检索关键字。支持多个关键字并集检索，不同关键字间以空格符号分隔，最多支持10个关键字检索。
     * @param [queryOptions.types = ''] - 检索分类偏好，与text组合进行检索，多个分类以","分隔（POI分类），如果需要严格按分类检索，请通过text参数设置
     * @param [queryOptions.city = null] - 可以重新限定查询的区域，默认为类构造时传入的city
     * @param [queryOptions.citylimit = false] - 取值为"true"，仅返回city中指定城市检索结果
     * @param [queryOptions.count = 20] - 单次召回POI数量，最大返回25条。多关键字检索时，返回的记录数为关键字个数*count。多关键词检索时，单页返回总数=关键词数量*count
     * @param [queryOptions.page = 0] - 分页页码，默认为0, 0代表第一页，1代表第二页，以此类推。常与 count 搭配使用，仅当返回结果为poi时可以翻页。
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    queryText(queryOptions: {
        text: string;
        types?: string;
        city?: string;
        citylimit?: boolean;
        count?: number;
        page?: number;
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): this;
    /**
     * 周边搜索(圆形搜索)
     * @param queryOptions - 查询参数
     * @param queryOptions.text - 检索关键字。支持多个关键字并集检索，不同关键字间以空格符号分隔，最多支持10个关键字检索。
     * @param [queryOptions.types = ''] - 检索分类偏好，与text组合进行检索，多个分类以","分隔（POI分类），如果需要严格按分类检索，请通过text参数设置
     * @param [queryOptions.location = null] - 圆形区域检索中心点，取值范围:0-50000。规则：大于50000按默认值，单位：米
     * @param [queryOptions.radius = 3000] - 圆形区域检索半径，单位为米。（增加区域内数据召回权重，如需严格限制召回数据在区域内，请搭配使用radiuslimit参数），当半径过大，超过中心点所在城市边界时，会变为城市范围检索，检索范围为中心点所在城市
     * @param [queryOptions.limit = false] - 是否严格限定召回结果在设置检索半径范围内。true（是），false（否）。设置为true时会影响返回结果中total准确性及每页召回poi数量， 设置为false时可能会召回检索半径外的poi。
     * @param [queryOptions.count = 20] - 单次召回POI数量，最大返回25条。多关键字检索时，返回的记录数为关键字个数*count。多关键词检索时，单页返回总数=关键词数量*count
     * @param [queryOptions.page = 0] - 分页页码，默认为0, 0代表第一页，1代表第二页，以此类推。常与 count 搭配使用，仅当返回结果为poi时可以翻页。
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    queryCircle(queryOptions: {
        text: string;
        types?: string;
        location?: LatLngPoint;
        radius?: number;
        limit?: boolean;
        count?: number;
        page?: number;
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): this;
    /**
     * 多边形搜索
     * @param queryOptions - 查询参数
     * @param queryOptions.text - 检索关键字。支持多个关键字并集检索，不同关键字间以空格符号分隔，最多支持10个关键字检索。
     * @param [queryOptions.types = ''] - 检索分类偏好，与text组合进行检索，多个分类以","分隔（POI分类），如果需要严格按分类检索，请通过text参数设置
     * @param queryOptions.polygon - 经纬度数组，经纬度小数点后不得超过6位。多边形为矩形时，可传入左上右下两顶点坐标对；其他情况下首尾坐标对需相同。
     * @param [queryOptions.limit = false] - 是否严格限定召回结果在设置检索的多边形或矩形范围内。true（是），false（否）。设置为true时会影响返回结果中total准确性及每页召回poi数量， 设置为false时可能会召回检索半径外的poi。
     * @param [queryOptions.count = 20] - 单次召回POI数量，最大返回25条。多关键字检索时，返回的记录数为关键字个数*count。多关键词检索时，单页返回总数=关键词数量*count
     * @param [queryOptions.page = 0] - 分页页码，默认为0, 0代表第一页，1代表第二页，以此类推。常与 count 搭配使用，仅当返回结果为poi时可以翻页。
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    queryPolygon(queryOptions: {
        text: string;
        types?: string;
        polygon: any[][];
        limit?: boolean;
        count?: number;
        page?: number;
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): this;
}

/**
 * 高德 路径规划  工具类，
 * 参考文档：https://lbs.amap.com/api/webservice/guide/api/direction
 * @param options - 参数对象，包括以下：
 * @param [options.key = mars3d.Token.gaodeArr] - 百度KEY,在实际项目中请使用自己申请的高德KEY，因为我们的key不保证长期有效。
 * @param [options.headers = {}] - 将被添加到HTTP请求头。
 * @param [options.proxy] - 加载资源时使用的代理。
 */
declare class GaodeRoute {
    constructor(options: {
        key?: String[];
        headers?: any;
        proxy?: Cesium.Proxy;
    });
    /**
     * 高德key数组，内部轮询使用
     */
    keys: String[];
    /**
     * 轮询取单个key进行使用
     */
    readonly key: string;
    /**
     * 按指定类别自动查询
     * @param queryOptions - 查询参数
     * @param queryOptions.type - 类型
     * @param queryOptions.points - 按起点、途经点、终点 顺序的坐标数组,如[[117.500244, 40.417801],[117.500244, 40.417801]]
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    query(queryOptions: {
        type: GaodeRoute.RouteType;
        points: any[][];
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): this;
    /**
     * 按指定类别自动查询(多个路线数组，递归处理)
     * @param queryOptions - 查询参数
     * @param queryOptions.type - 类型
     * @param queryOptions.points - 多条，按起点终点 顺序的坐标数组,如[
     *  [ [117.500244, 40.417801],[117.500244, 40.417801] ],
     *  [ [117.500244, 40.417801],[117.500244, 40.417801] ]
     * ]
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 无
     */
    queryArr(queryOptions: {
        type: GaodeRoute.RouteType;
        points: any[][];
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): void;
    /**
     * 计算结果中的最短距离的导航路径
     * @param data - queryArr返回的结果数组
     * @returns 返回路线数据和index顺序
     */
    getShortestPath(data: object[]): any;
    /**
     * 步行路径规划 (单个查询)
     * @param queryOptions - 查询参数
     * @param queryOptions.points - 按起点、终点 顺序的坐标数组,如[[117.500244, 40.417801],[117.500244, 40.417801]]
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 无
     */
    queryWalking(queryOptions: {
        points: any[][];
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): void;
    /**
     * 骑行路径查询 (单个查询)
     * @param queryOptions - 查询参数
     * @param queryOptions.points - 按起点、终点 顺序的坐标数组,如[[117.500244, 40.417801],[117.500244, 40.417801]]
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 无
     */
    queryBicycling(queryOptions: {
        points: any[][];
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): void;
    /**
     * 驾车路径规划查询
     * @param queryOptions - 查询参数
     * @param queryOptions.points - 按起点、途经点、终点 顺序的坐标数组,如[[117.500244, 40.417801],[117.500244, 40.417801]]
     * @param [queryOptions.extensions = 'base'] - 返回结果控制,可选值：core/all  base:返回基本信息；all：返回全部信息
     * @param [queryOptions.strategy = 0] - 驾车选择策略，参考高德官网说明，默认为0：速度优先，不考虑当时路况，此路线不一定距离最短
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 无
     */
    queryDriving(queryOptions: {
        points: any[][];
        extensions?: string;
        strategy?: string;
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): void;
}

declare namespace GaodeRoute {
    /**
     * 路径规划方式
     */
    enum RouteType {
        Walking,
        Bicycling,
        Driving
    }
}

declare namespace QueryArcServer {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * layer.on(mars3d.EventType.load, function (event) {
     *   console.log('矢量数据对象加载完成', event)
     * })
     * @property click - 左键单击 鼠标事件
     * @property load - 完成加载，执行所有内部处理后
     */
    type EventType = {
        click: string;
        load: string;
    };
}

/**
 * ArcGIS WFS矢量服务查询类
 * @param options - 参数对象，包括以下：
 * @param options.url - ArcGIS服务地址, 示例：'http://server.mars3d.cn/arcgis/rest/services/mars/hefei/MapServer/37',
 * @param [options.pageSize = 10] - 每页条数
 * @param [options.headers = {}] - 将被添加到HTTP请求头。
 * @param [options.proxy] - 加载资源时使用的代理。
 */
declare class QueryArcServer extends BaseClass {
    constructor(options: {
        url: string;
        pageSize?: number;
        headers?: any;
        proxy?: Cesium.Proxy;
    });
    /**
     * ArcGIS服务地址
     */
    url: string;
    /**
     * 分页的 每页条数
     */
    pageSize: number;
    /**
     * 总记录数
     */
    readonly allCount: number;
    /**
     * 总页数
     */
    readonly allPage: number;
    /**
     * 页码，当前第几页
     */
    readonly pageIndex: number;
    /**
     * 用于显示查询结果的GeoJsonLayer图层，图层参数在当前类构造方法中传入
     */
    readonly layer: GraphicLayer;
    /**
     * 首页，查看第1页数据
     * @returns 无
     */
    showFirstPage(): void;
    /**
     * 上一页
     * @returns 无
     */
    showPretPage(): void;
    /**
     * 下一页
     * @returns 无
     */
    showNextPage(): void;
    /**
     * 跳转到指定页
     * @param pageIndex - 指定页
     * @returns 无
     */
    showPage(pageIndex: number): void;
    /**
     * 按指定类别自动查询
     * @param queryOptions - 查询参数
     * @param [queryOptions.text] - 检索关键字。
     * @param [queryOptions.like = true] - 检索关键字时，是否模糊匹配，false时精确查询。
     * @param [queryOptions.column] - 检索关键字的字段名称。
     * @param [queryOptions.where] - 自定义的检索条件，与text二选一
     * @param [queryOptions.graphic] - 限定的搜索区域
     * @param [queryOptions.page = true] - 是否分页查询,false时不分页，一次性查询返回
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    query(queryOptions: {
        text?: string;
        like?: boolean;
        column?: string;
        where?: string;
        graphic?: BaseGraphic;
        page?: boolean;
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): this;
    /**
     * 清除
     * @returns 无
     */
    clear(): void;
}

/**
 * GeoServer WFS服务查询类
 * @param options - 参数对象，包括以下：
 * @param options.layer - 图层名称（命名空间:图层名称），多个图层名称用逗号隔开
 * @param [options.headers = {}] - 将被添加到HTTP请求头。
 * @param [options.proxy] - 加载资源时使用的代理。
 */
declare class QueryGeoServer {
    constructor(options: {
        layer: string;
        headers?: any;
        proxy?: Cesium.Proxy;
    });
    /**
     * 按指定类别自动查询
     * @param queryOptions - 查询参数
     * @param [queryOptions.text] - 检索关键字。
     * @param [queryOptions.column] - 检索关键字的字段名称。
     * @param [queryOptions.geoColumn = 'the_geom'] - 检索关键字的字段名称。
     * @param [queryOptions.graphic] - 限定的搜索区域
     * @param [queryOptions.bbox] - 限定的矩形范围（左下角X坐标,左下角Y坐标,右上角X坐标,右上角Y坐标,EPSG：4326）
     * @param [queryOptions.sortby] - 排序字段
     * @param [queryOptions.maxFeatures = 1000] - 最多返回结果个数
     * @param [queryOptions.success] - 查询完成的回调方法
     * @param [queryOptions.error] - 查询失败的回调方法
     * @returns 当前对象本身，可以链式调用
     */
    query(queryOptions: {
        text?: string;
        column?: string;
        geoColumn?: string;
        graphic?: BaseGraphic;
        bbox?: string;
        sortby?: string;
        maxFeatures?: number;
        success?: (...params: any[]) => any;
        error?: (...params: any[]) => any;
    }): this;
}

declare namespace Measure {
    /**
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.change, function (event) {
     *   console.log('发送了变化', event)
     * })
     * @property remove - 移除对象
     * @property change - 测量值变化了
     * @property start - 异步测量中，开始测量
     * @property end - 异步测量中，完成了测量后
     * @property 其他 - 支持的父类的事件类型
     */
    type EventType = {
        remove: string;
        change: string;
        start: string;
        end: string;
        其他: GraphicLayer.EventType;
    };
}

/**
 * 图上量算
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.hasEdit = false] - 是否可编辑
 * @param [options.isAutoEditing = true] - 完成测量时是否自动启动编辑(需要hasEdit:true时)
 * @param [options.isContinued = false] - 是否连续测量
 * @param [options.label] - 测量结果文本的样式
 * @param [options.polygon] - 体积测量时，面的样式
 * @param [options.polygonJzmStyle] - 体积测量时，基准面的样式
 * @param [options.heightLabel = true] - 体积测量时，是否显示各边界点高度值文本
 * @param [options.labelHeight] - 体积测量时，各边界点高度结果文本的样式
 * @param [options.offsetLabel = false] - 体积测量时，是否显示各边界点高度差文本
 */
declare class Measure extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        hasEdit?: boolean;
        isAutoEditing?: boolean;
        isContinued?: boolean;
        label?: LabelEntity.StyleOptions;
        polygon?: PolygonEntity.StyleOptions;
        polygonJzmStyle?: PolygonEntity.StyleOptions;
        heightLabel?: boolean;
        labelHeight?: LabelEntity.StyleOptions;
        offsetLabel?: boolean;
    });
    /**
     * 对应的矢量图层
     */
    readonly graphicLayer: GraphicLayer;
    /**
     * 图层内的Graphic集合对象
     */
    readonly graphics: BaseGraphic[];
    /**
     * 测量 空间长度
     * @param opts - 控制参数
     * @param [opts.style] - 路线的样式
     * @param [opts.unit = 'auto'] - 计量单位,{@link MeasureUtil#formatDistance}可选值：auto、m、km、mile、zhang 。auto时根据距离值自动选用k或km
     * @param [options.maxPointNum = 9999] - 绘制时，最多允许点的个数
     * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
     * @param [options.showAddText = true] - 是否显示每一段的增加部分距离，如（+10.1km）
     * @returns 长度测量控制类 对象
     */
    distance(opts: {
        style?: PolylineEntity.StyleOptions;
        unit?: string;
    }): MeasureDistance;
    /**
     * 测量 贴地长度
     * @param opts - 控制参数
     * @param [opts.style] - 路线的样式
     * @param [opts.unit = 'auto'] - 计量单位,{@link MeasureUtil#formatDistance}可选值：auto、m、km、mile、zhang 。auto时根据距离值自动选用k或km
     * @param [options.maxPointNum = 9999] - 绘制时，最多允许点的个数
     * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
     * @param [options.showAddText = true] - 是否显示每一段的增加部分距离，如（+10.1km）
     * @param [options.splitNum = 100] - 插值数，将线段分割的个数
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @returns 贴地长度测量控制类 对象
     */
    distanceSurface(opts: {
        style?: PolylineEntity.StyleOptions;
        unit?: string;
    }): MeasureDistanceSurface;
    /**
     * 剖面分析，测量线插值点的高程数据
     * @param opts - 控制参数
     * @param [opts.style] - 路线的样式
     * @param [opts.unit = 'auto'] - 计量单位,{@link MeasureUtil#formatDistance}可选值：auto、m、km、mile、zhang 。auto时根据距离值自动选用k或km
     * @param [options.maxPointNum = 9999] - 绘制时，最多允许点的个数
     * @param [options.addHeight = 0] - 在draw绘制时，在绘制点的基础上增加的高度值
     * @param [options.splitNum = 200] - 插值数，将线段分割的个数
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @returns 剖面分析控制类 对象
     */
    section(opts: {
        style?: PolylineEntity.StyleOptions;
        unit?: string;
    }): MeasureDistanceSection;
    /**
     * 面积测量（水平面）
     * @param opts - 控制参数
     * @param [opts.style] - 面的样式
     * @param [opts.unit = 'auto'] - 计量单位,{@link MeasureUtil#formatArea}可选值：auto、m、km、mu、ha 。auto时根据面积值自动选用k或km
     * @returns 面积测量控制类 对象
     */
    area(opts: {
        style?: PolygonEntity.StyleOptions;
        unit?: string;
    }): MeasureArea;
    /**
     * 贴地面积测量
     * @param opts - 控制参数
     * @param [opts.style] - 面的样式
     * @param [opts.unit = 'auto'] - 计量单位,{@link MeasureUtil#formatArea}可选值：auto、m、km、mu、ha 。auto时根据面积值自动选用k或km
     * @param [options.splitNum = 10] - 插值数，将面分割的网格数
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @returns 面积测量控制类 对象
     */
    areaSurface(opts: {
        style?: PolygonEntity.StyleOptions;
        unit?: string;
    }): MeasureArea;
    /**
     * 体积测量（方量分析）
     * @param opts - 控制参数
     * @param [opts.style] - 路线的样式
     * @param [opts.unit = 'auto'] - 计量单位,{@link MeasureUtil#formatArea}可选值：auto、m、km、mu、ha 。auto时根据面积值自动选用k或km
     * @param [options.splitNum = 10] - 插值数，将面分割的网格数
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.minHeight] - 可以指定最低高度（单位：米）
     * @param [options.maxHeight] - 可以指定最高高度（单位：米）
     * @param [options.height] - 可以指定基准面高度（单位：米），默认是绘制后的最低高度值
     * @returns 体积测量控制类 对象
     */
    volume(opts: {
        style?: PolygonEntity.StyleOptions;
        unit?: string;
    }): MeasureVolume;
    /**
     * 高度测量
     * @param opts - 控制参数
     * @param [opts.style] - 路线的样式
     * @param [opts.unit = 'auto'] - 计量单位,{@link MeasureUtil#formatDistance}可选值：auto、m、km、mile、zhang 。auto时根据距离值自动选用k或km
     * @returns 高度测量控制类 对象
     */
    height(opts: {
        style?: PolylineEntity.StyleOptions;
        unit?: string;
    }): MeasureHeight;
    /**
     * 三角高度测量，
     * 包括水平距离、空间距离、高度差。
     * @param opts - 控制参数
     * @param [opts.style] - 路线的样式
     * @param [opts.unit = 'auto'] - 计量单位,{@link MeasureUtil#formatDistance}可选值：auto、m、km、mile、zhang 。auto时根据距离值自动选用k或km
     * @returns 三角高度测量控制类 对象
     */
    heightTriangle(opts: {
        style?: PolylineEntity.StyleOptions;
        unit?: string;
    }): MeasureHeightTriangle;
    /**
     * 角度测量
     * @param opts - 控制参数
     * @param [opts.style] - 路线的样式，默认为箭头线
     * @returns 角度测量控制类 对象
     */
    angle(opts: {
        style?: PolylineEntity.StyleOptions;
    }): MeasureAngle;
    /**
     * 坐标测量
     * @param opts - 控制参数
     * @param [opts.style] - 点的样式
     * @returns 坐标测量控制类 对象
     */
    point(opts: {
        style?: PointEntity.StyleOptions;
    }): MeasurePoint;
    /**
     * 取消并停止绘制，如有未完成的绘制会自动删除
     * @returns 当前对象本身,可以链式调用
     */
    stopDraw(): this;
    /**
     * 完成绘制和编辑，如有未完成的绘制会自动完成。
     * 在移动端需要调用此方法来类似PC端双击结束。
     * @returns 无
     */
    endDraw(): void;
    /**
     * 清除测量
     * @returns 无
     */
    clear(): void;
    /**
     * 更新量测结果的单位
     * @param unit - 计量单位,{@link MeasureUtil#formatDistance}{@link MeasureUtil#formatArea} 可选值：auto、m、km、mile、zhang 等。auto时根据距离值自动选用k或km
     * @returns 无
     */
    updateUnit(unit: string): void;
    /**
     * 销毁当前对象
     * @param [noDel = false] - false:会自动delete释放所有属性，true：不delete绑定的变量
     * @returns 无
     */
    destroy(noDel?: boolean): void;
}

declare namespace Shadows {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.change, function (event) {
     *   console.log('时间发送了变化', event)
     * })
     * @property change - 变化了
     */
    type EventType = {
        change: string;
    };
}

/**
 * 日照分析
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 */
declare class Shadows extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
    });
    /**
     * 设置时间
     */
    time: Date;
    /**
     * 是否在播放
     */
    readonly isStart: boolean;
    /**
     * 倍速,控制速率
     */
    multiplier: number;
    /**
     * 开始播放日照分析效果
     * @param startDate - 开始时间
     * @param endDate - 结束时间
     * @param [currentTime = startDate] - 当前所在时间
     * @returns 无
     */
    start(startDate: Date, endDate: Date, currentTime?: Date): void;
    /**
     * 暂停
     * @returns 无
     */
    pause(): void;
    /**
     * 继续
     * @returns 无
     */
    proceed(): void;
    /**
     * 停止
     * @returns 无
     */
    stop(): void;
    /**
     * 清除分析
     * @returns 无
     */
    clear(): void;
}

declare namespace Sightline {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.end, function (event) {
     *   console.log('分析完成', event)
     * })
     * @property start - 开始分析
     * @property end - 完成分析
     */
    type EventType = {
        start: string;
        end: string;
    };
}

/**
 * 通视分析
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.visibleColor = new Cesium.Color(0, 1, 0, 1)] - 可视区域颜色
 * @param [options.hiddenColor = new Cesium.Color(1, 0, 0, 1)] - 不可视区域颜色
 * @param [options.depthFailColor] - 当线位于地形或被遮挡时的区域颜色
 */
declare class Sightline extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        visibleColor?: Cesium.Color;
        hiddenColor?: Cesium.Color;
        depthFailColor?: Cesium.Color;
    });
    /**
     * 可视区域颜色
     */
    visibleColor: Cesium.Color;
    /**
     * 不可视区域颜色
     */
    hiddenColor: Cesium.Color;
    /**
     * 当线位于地形或被遮挡时的区域颜色
     */
    depthFailColor: Cesium.Color;
    /**
     * 添加通视分析
     * @param origin - 起点（视点位置）
     * @param target - 终点（目标点位置）
     * @param [options = {}] - 控制参数，包括：
     * @param [options.offsetHeight = 0] - 在起点增加的高度值，比如加上人的身高
     * @returns 分析结果
     */
    add(origin: Cesium.Cartesian3, target: Cesium.Cartesian3, options?: {
        offsetHeight?: number;
    }): any;
    /**
     * 添加通视分析，插值异步分析
     * @param origin - 起点
     * @param target - 终点（目标点）
     * @param [options = {}] - 控制参数，包括：
     * @param [options.offsetHeight = 0] - 在起点增加的高度值，比如加上人的身高
     * @param [options.splitNum = 50] - 插值数，等比分割的个数
     * @param [options.minDistance] - 插值时的最小间隔(单位：米)，优先级高于splitNum
     * @returns 无,  分析结果在end事件中返回
     */
    addAsync(origin: Cesium.Cartesian3, target: Cesium.Cartesian3, options?: {
        offsetHeight?: number;
        splitNum?: number;
        minDistance?: number;
    }): void;
    /**
     * 清除分析
     * @returns 无
     */
    clear(): void;
}

/**
 * 天际线 描边
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.color = new Cesium.Color(1.0, 0.0, 0.0)] - 边际线颜色
 * @param [options.width = 2] - 天际线宽度
 */
declare class Skyline extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        color?: Cesium.Color;
        width?: number;
    });
    /**
     * 边际线颜色
     */
    color: Cesium.Color;
    /**
     * 天际线宽度
     */
    width: number;
    /**
     * 销毁当前对象
     * @param [noDel = false] - false:会自动delete释放所有属性，true：不delete绑定的变量
     * @returns 无
     */
    destroy(noDel?: boolean): void;
}

/**
 * 地下模式类
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.alpha = 0.5] - 透明度  0.0-1.0
 * @param [options.color = Cesium.Color.BLAC] - 当相机在地下或球体是半透明时，渲染球体背面的颜色
 */
declare class Underground extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        alpha?: number;
        color?: Color;
    });
    /**
     * 控制球体透明度的Cesium内部对象
     */
    readonly translucency: Cesium.GlobeTranslucency;
    /**
     * 透明度
     */
    alpha: number;
    /**
     * 当相机在地下或球体是半透明时，渲染球体背面的颜色，将根据相机的距离与地球颜色混合。
     * 禁用地下着色时，可以设置为undefined。
     */
    color: Cesium.Color;
    /**
     * 获取或设置将color与Globe颜色混合的远近距离。
     * alpha将插值在{@link Cesium.NearFarScalar#nearValue}和{@linkCesium.NearFarScalar#farValue}之间，
     * 同时摄像机距离在指定的{@link Cesium.NearFarScalar#near}和{@link Cesium.NearFarScalar#far}的上下边界内。
     * 在这些范围之外，alpha仍然被限制在最近的范围内。如果未定义，地下颜色将不会与地球颜色混合。
     * 当相机在椭球上方时，距离计算从椭球上最近的点而不是相机的位置。
     */
    colorAlphaByDistance: Cesium.NearFarScalar;
}

declare namespace ViewShed3D {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.end, function (event) {
     *   console.log('分析完成', event)
     * })
     * @property drawStart - 开始绘制
     * @property drawAddPoint - 绘制过程中增加了点
     * @property drawMouseMove - 正在移动鼠标中，绘制过程中鼠标移动了点
     * @property drawCreated - 完成绘制
     * @property end - 完成分析
     */
    type EventType = {
        drawStart: string;
        drawAddPoint: string;
        drawMouseMove: string;
        drawCreated: string;
        end: string;
    };
}

/**
 * 可视域分析
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.position] - 视点位置，未传入值时自动激活鼠标绘制
 * @param [options.cameraPosition] - 相机位置
 * @param [options.horizontalAngle = 120] - 水平张角(度数)，取值范围 0-120
 * @param [options.verticalAngle = 90] - 垂直张角(度数)，取值范围 0-90
 * @param [options.visibleAreaColor = new Cesium.Color(0, 1, 0, 1)] - 可视区域颜色
 * @param [options.hiddenAreaColor = new Cesium.Color(1, 0, 0, 1)] - 不可视区域颜色
 * @param [options.alpha = 0.5] - 混合系数 0.0-1.0
 * @param [options.offsetHeight = 1.5] - 在起点增加的高度值，比如加上人的身高
 * @param [options.showFrustum = true] - 是否显示视椎体框线
 */
declare class ViewShed3D extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        position?: LatLngPoint | Cesium.Cartesian3;
        cameraPosition?: LatLngPoint | Cesium.Cartesian3;
        horizontalAngle?: number;
        verticalAngle?: number;
        visibleAreaColor?: Cesium.Color;
        hiddenAreaColor?: Cesium.Color;
        alpha?: number;
        offsetHeight?: number;
        showFrustum?: boolean;
    });
    /**
     * 水平张角(度数)，取值范围 0-120
     */
    horizontalAngle: number;
    /**
     * 垂直张角(度数)，取值范围 0-90
     */
    verticalAngle: number;
    /**
     * 可视距离（单位：米）
     */
    distance: number;
    /**
     * 可视区域颜色
     */
    visibleAreaColor: Cesium.Color;
    /**
     * 不可视区域颜色
     */
    hiddenAreaColor: Cesium.Color;
    /**
     * 混合系数 0-1
     */
    alpha: number;
    /**
     * 是否显示视椎体框线
     */
    showFrustum: boolean;
    /**
     * 相机位置(笛卡尔坐标)
     */
    readonly cameraPosition: Cesium.Cartesian3;
    /**
     * 相机位置
     */
    cameraPoint: LatLngPoint;
    /**
     * 视点位置 （笛卡尔坐标）
     */
    readonly position: Cesium.Cartesian3;
    /**
     * 视点位置
     */
    readonly point: LatLngPoint;
}

declare namespace CameraHistory {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.change, function (event) {
     *   console.log('记录发送了变化', event)
     * })
     * @property change - 变化了
     */
    type EventType = {
        change: string;
    };
}

/**
 * 相机视角记录及处理类，含 上一视图 下一视图 等
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.maxCacheCount = 99] - 保留的历史记录最多个数
 * @param [options.limit] - 限定视角范围参数，包括以下：
 * @param options.limit.position - 中心点坐标
 * @param options.limit.radius - 半径（单位：米）
 * @param [options.limit.debugExtent] - 是否显示限定范围的边界
 */
declare class CameraHistory extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        maxCacheCount?: number;
        limit?: {
            position: Cesium.Cartesian3;
            radius: number;
            debugExtent?: boolean;
        };
    });
    /**
     * 是否显示限定范围的边界
     */
    debugExtent: boolean;
    /**
     * 切换到 下一视角
     * @returns 是否成功切换
     */
    goNext(): boolean;
    /**
     * 切换到 上一视角
     * @returns 是否成功切换
     */
    goLast(): boolean;
    /**
     * 回到当前视角（记录的最后一个视角）
     * @returns 是否成功切换
     */
    goNow(): boolean;
    /**
     * 回到记录的第一个视角
     * @returns 是否成功切换
     */
    goFirst(): boolean;
}

/**
 * 第一人称贴地漫游，
 * 键盘漫游时，先单击地图激活后 按 W前进、 S后退、A左移、D右移
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.speed = 1.5] - 速度
 * @param [options.rotateSpeed = -5] - 旋转速度
 * @param [options.height = 10] - 高度
 * @param [options.maxPitch = 88] - 最大pitch角度（度数值）
 */
declare class FirstPersonRoam extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        speed?: number;
        rotateSpeed?: number;
        height?: number;
        maxPitch?: number;
    });
    /**
     * 速度
     */
    speed: number;
    /**
     * 旋转速度
     */
    rotateSpeed: number;
    /**
     * 高度（单位：米）
     */
    height: number;
    /**
     * 最大pitch角度（度数值）
     */
    maxPitch: number;
    /**
     * 开始自动前进漫游
     * @returns 无
     */
    startAutoForward(): void;
    /**
     * 停止自动前进漫游
     * @returns 无
     */
    stopAutoForward(): void;
}

declare namespace RotateOut {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.stop, function (event) {
     *   console.log('停止了旋转', event)
     * })
     * @property start - 开始旋转
     * @property change - 变化了角度
     * @property stop - 停止了旋转
     */
    type EventType = {
        start: string;
        change: string;
        stop: string;
    };
}

/**
 * 相机位置不动，对外四周旋转
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.direction = false] - 旋转方向, true逆时针，false顺时针
 * @param [options.time = 60] - 飞行一周所需时间(单位 秒)，控制速度
 * @param [options.autoStopAngle] - 自动停止的角度值（0-360度），未设置时不自动停止
 */
declare class RotateOut extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        direction?: boolean;
        time?: number;
        autoStopAngle?: number;
    });
    /**
     * 是否在旋转中
     */
    readonly isStart: boolean;
    /**
     * 开始旋转
     * @returns 无
     */
    start(): void;
    /**
     * 停止旋转
     * @returns 无
     */
    stop(): void;
}

declare namespace RotatePoint {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.stop, function (event) {
     *   console.log('停止了旋转', event)
     * })
     * @property start - 开始旋转
     * @property change - 变化了角度
     * @property stop - 停止了旋转
     */
    type EventType = {
        start: string;
        change: string;
        stop: string;
    };
}

/**
 * 相机绕 固定中心点 旋转
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.direction = false] - 旋转方向, true逆时针，false顺时针
 * @param [options.time = 60] - 飞行一周所需时间(单位 秒)，控制速度
 * @param [options.autoStopAngle] - 自动停止的角度值（0-360度），未设置时不自动停止
 * @param [options.distance] - 可以指定旋转时相机到中心点的距离，默认不改变相对距离。
 */
declare class RotatePoint extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        direction?: boolean;
        time?: number;
        autoStopAngle?: number;
        distance?: number;
    });
    /**
     * 是否在旋转中
     */
    readonly isStart: boolean;
    /**
     * 开始旋转
     * @param point - 旋转的中心点
     * @returns 无
     */
    start(point: LatLngPoint | Cesium.Cartesian3): void;
    /**
     * 停止旋转
     * @returns 无
     */
    stop(): void;
}

/**
 * 街景视角模式控制,
 * 1、右键拖拽，以相机视角为中心进行旋转;
 * 2、中键拖拽，可以升高或降低相机高度;
 * 3、左键双击，飞行定位到该点;
 * 4、右键双击，围绕该点旋转。
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.rotateSpeed = 30] - 右键拖拽时，旋转速度，正负控制方向。
 * @param [options.heightStep = 0.2] - 中键拖拽时，高度移动比例，控制升高或降低相机高度的速度
 * @param [options.moveStep = 0.1] - 双击定位到点时，距离目标点的距离的移动比例 0.0-1.0
 * @param [options.moveDuration] - 双击定位到点时，飞行时间（单位：秒）。如果省略，SDK内部会根据飞行距离计算出理想的飞行时间。
 * @param [options.rotatePoint] - 右键双击，围绕该点旋转时的参考，具体同{@link RotatePoint}类的构造参数。
 */
declare class StreetView extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        rotateSpeed?: number;
        heightStep?: number;
        moveStep?: number;
        moveDuration?: number;
        rotatePoint?: any;
    });
    /**
     * 右键拖拽时，旋转速度，正负控制方向。
     */
    rotateSpeed: number;
    /**
     * 中键拖拽时，高度移动比例，控制升高或降低相机高度的速度
     */
    heightStep: number;
    /**
     * 双击定位到点时，距离目标点的距离的移动比例 0.0-1.0
     */
    moveStep: number;
}

/**
 * 等高线
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.positions] - 坐标位置数组，只显示单个区域【单个区域场景时使用】
 * @param [options.contourShow = true] - 是否显示等高线
 * @param [options.spacing = 100.0] - 等高线 间隔（单位：米）
 * @param [options.width = 1.5] - 等高线 线宽（单位：像素）
 * @param [options.color = Cesium.Color.RED] - 等高线 颜色
 * @param [options.shadingType = 'none'] - 地表渲染效果，可选值: 无nono, 高程 elevation, 坡度slope, 坡向aspect
 * @param [options.colorScheme] - 地表渲染配色方案,默认值为：
 * {
 *       elevation: {
 *         step: [0.0, 0.045, 0.1, 0.15, 0.37, 0.54, 1.0],
 *         color: ['#000000', '#2747E0', '#D33B7D', '#D33038', '#FF9742', '#FF9742', '#ffd700', '#ffffff'],
 *       },
 *       slope: {
 *         step: [0.0, 0.29, 0.5, Math.sqrt(2) / 2, 0.87, 0.91, 1.0],
 *         color: ['#000000', '#2747E0', '#D33B7D', '#D33038', '#FF9742', '#FF9742', '#ffd700', '#ffffff'],
 *       },
 *       aspect: {
 *         step: [0.0, 0.2, 0.4, 0.6, 0.8, 0.9, 1.0],
 *         color: ['#000000', '#2747E0', '#D33B7D', '#D33038', '#FF9742', '#FF9742', '#ffd700', '#ffffff'],
 *       },
 *    }
 * @param [options.showElseArea = true] - 是否显示区域外的地图
 * @param [options.minHeight = -414.0] - 地表渲染配色方案中的 最低海拔高度
 * @param [options.maxHeight = 8777] - 地表渲染配色方案中的 最高海拔高度
 */
declare class ContourLine extends TerrainEditBase {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
        contourShow?: boolean;
        spacing?: number;
        width?: number;
        color?: Cesium.Color;
        shadingType?: string;
        colorScheme?: any;
        showElseArea?: boolean;
        minHeight?: number;
        maxHeight?: number;
    });
    /**
     * 是否显示等高线
     */
    contourShow: boolean;
    /**
     * 地表渲染效果，可选值: 无nono, 高程 elevation, 坡度slope, 坡向aspect
     */
    shadingType: string;
    /**
     * 等高线 线宽（单位：像素）
     */
    width: number;
    /**
     * 等高线 间隔（单位：米）
     */
    spacing: number;
    /**
     * 等高线 颜色
     */
    color: Cesium.Color;
    /**
     * 清除数据
     * @returns 无
     */
    clear(): void;
}

declare namespace FloodByGraphic {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.end, function (event) {
     *   console.log('分析完成', event)
     * })
     * @property start - 开始分析
     * @property change - 变化了
     * @property end - 完成分析
     */
    type EventType = {
        start: string;
        change: string;
        end: string;
    };
}

/**
 * 淹没分析，
 * 基于polygon矢量面抬高模拟，只支持单个区域
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.positions] - 区域位置，坐标位置数组
 * @param [options.style] - 淹没区域的样式
 * @param [options.speed] - 淹没速度
 * @param [options.minHeight] - 淹没起始的海拔高度（单位：米）
 * @param [options.maxHeight] - 淹没结束的海拔高度（单位：米）
 * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准），未设置时根据坐标自动判断（判断可能不准确）
 */
declare class FloodByGraphic extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
        style?: PolygonEntity.StyleOptions;
        speed?: number;
        minHeight?: number;
        maxHeight?: number;
        has3dtiles?: boolean;
    });
    /**
     * 淹没区域 坐标位置数组
     */
    positions: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
    /**
     * 淹没平面高度（单位：米）
     */
    height: number;
    /**
     * 淹没速度
     */
    speed: number;
    /**
     * 重新赋值参数，同构造方法参数一致。
     * @param options - 参数,与类的构造方法参数相同
     * @returns 当前对象本身，可以链式调用
     */
    setOptions(options: any): this;
    /**
     * 开始播放淹没动画效果
     * @returns 无
     */
    start(): void;
    /**
     * 停止播放淹没动画效果
     * @returns 无
     */
    stop(): void;
    /**
     * 重新开始播放淹没动画效果
     * @returns 无
     */
    restart(): void;
    /**
     * 清除分析
     * @returns 无
     */
    clear(): void;
    /**
     * 销毁当前对象
     * @param [noDel = false] - false:会自动delete释放所有属性，true：不delete绑定的变量
     * @returns 无
     */
    destroy(noDel?: boolean): void;
}

declare namespace FloodByMaterial {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.end, function (event) {
     *   console.log('分析完成', event)
     * })
     * @property start - 开始分析
     * @property change - 变化了
     * @property end - 完成分析
     */
    type EventType = {
        start: string;
        change: string;
        end: string;
    };
}

/**
 * 淹没分析 ，
 * 基于地球材质，可以多个区域
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [positions] - 坐标位置数组，只显示单个区域【单个区域场景时使用】
 * @param [options.speed] - 淹没速度
 * @param [options.minHeight] - 淹没起始的海拔高度（单位：米）
 * @param [options.maxHeight] - 淹没结束的海拔高度（单位：米）
 * @param [options.showElseArea = true] - 是否显示区域外的地图
 */
declare class FloodByMaterial extends TerrainEditBase {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        speed?: number;
        minHeight?: number;
        maxHeight?: number;
        showElseArea?: boolean;
    }, positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[]);
    /**
     * 淹没高度（单位：米）
     */
    height: number;
    /**
     * 淹没速度
     */
    speed: number;
    /**
     * 重新赋值参数，同构造方法参数一致。
     * @param options - 参数,与类的构造方法参数相同
     * @returns 当前对象本身，可以链式调用
     */
    setOptions(options: any): this;
    /**
     * 开始播放淹没动画效果
     * @returns 无
     */
    start(): void;
    /**
     * 暂停播放淹没动画效果
     * @returns 无
     */
    stop(): void;
    /**
     * 重新开始播放淹没动画效果
     * @returns 无
     */
    restart(): void;
    /**
     * 清除分析
     * @returns 无
     */
    clear(): void;
}

declare namespace Slope {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.change, function (event) {
     *   console.log('发送了变化', event)
     * })
     * @property endItem - 多个数据异步分析时，完成其中一个时的回调事件
     * @property end - 多个数据异步分析时，完成所有的回调事件
     */
    type EventType = {
        endItem: string;
        end: string;
    };
}

/**
 * 坡度坡向分析
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [options.positions] - 分析区域 坐标位置数组
 * @param [options.arrow] - 箭头线的样式，包括以下：
 * @param [options.arrow.show = true] - 是否显示箭头线
 * @param [options.arrow.scale = 0.3] - 箭头长度的比例（网格大小），根据绘制区域的大小和插值数来计算实际长度值。
 * @param [options.arrow.color = Cesium.Color.YELLOW] - 颜色
 * @param [options.arrow.length = 40] - 分析单个点时，箭头长度值
 * @param [options.point] - 点的样式，包括以下：
 * @param [options.point.show = true] - 是否显示点
 * @param [options.point.pixelSize = 9] - 像素大小
 * @param [options.point.color = Cesium.Color.RED.withAlpha(0.5)] - 颜色
 * @param [options.tooltip] - 可以指定绑定tooltip
 * @param [options.tooltipOptions] - tooltip弹窗时的配置参数
 * @param [options.popup] - 可以指定绑定popup
 * @param [options.popupOptions] - popup弹窗时的配置参数
 */
declare class Slope extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
        arrow?: {
            show?: boolean;
            scale?: number;
            color?: Cesium.Color;
            length?: number;
        };
        point?: {
            show?: boolean;
            pixelSize?: number;
            color?: Cesium.Color;
        };
        tooltip?: (...params: any[]) => any;
        tooltipOptions?: Popup.StyleOptions;
        popup?: (...params: any[]) => any;
        popupOptions?: Popup.StyleOptions;
    });
    /**
     * 添加计算的 位置
     * @param positions - 坐标数组 或 单个坐标
     * @param [options = {}] - 控制参数，包括：
     * @param [options.splitNum = 8] - 插值数，横纵等比分割的网格个数
     * @param [options.radius = 2] - 取样分析，点周边半径（单位：米）
     * @param [options.count = 4] - 取样分析，点周边象限内点的数量，共计算 count*4 个点
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @returns 无，计算结果在 end事件中返回
     */
    add(positions: any[][] | LatLngPoint[] | Cesium.Cartesian3[] | LatLngPoint | Cesium.Cartesian3, options?: {
        splitNum?: number;
        radius?: number;
        count?: number;
        has3dtiles?: boolean;
    }): void;
    /**
     * 计算两点之间的坡度
     * @param c1 - 点1
     * @param c2 - 点2
     * @returns 坡度值
     */
    getSlope(c1: Cesium.Cartesian3, c2: Cesium.Cartesian3): number;
    /**
     * 清除分析
     * @returns 无
     */
    clear(): void;
}

/**
 * 地形开挖，
 * 基于地球材质，可以多个区域开挖。
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [positions] - 坐标位置数组，只显示单个区域【单个区域场景时使用】
 * @param [options.clipOutSide = false] - 是否外切开挖
 * @param [options.image] - 开挖区域的井墙面贴图URL。未传入该值时，不显示开挖区域的井。
 * @param [options.imageBottom] - 当显示开挖区域的井时，井底面贴图URL
 * @param [options.diffHeight] - 当显示开挖区域的井时，设置所有区域的挖掘深度（单位：米）
 * @param [splitNum = 30] - 当显示开挖区域的井时，井墙面每两点之间插值个数
 */
declare class TerrainClip extends TerrainEditBase {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        clipOutSide?: boolean;
        image?: string;
        imageBottom?: string;
        diffHeight?: number;
    }, positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[], splitNum?: number);
    /**
     * 是否外切开挖
     */
    clipOutSide: boolean;
    /**
     * 设置所有区域的挖掘深度（单位：米）
     */
    diffHeight: number;
    /**
     * 清除开挖
     * @returns 无
     */
    clear(): void;
}

/**
 * 地形开挖、淹没等分析 基础类
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [positions] - 坐标位置数组，只显示单个区域【单个区域场景时使用】
 */
declare class TerrainEditBase extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
    }, positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[]);
    /**
     * 区域 列表
     */
    readonly list: object[];
    /**
     * 是否显示区域外的地图
     */
    showElseArea: boolean;
    /**
     * 坐标位置数组，只显示单个区域【单个区域场景时使用】
     */
    positions: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
    /**
     * 已添加的区域个数
     */
    readonly length: Int;
    /**
     * 清除所有区域
     * @returns 无
     */
    clear(): void;
    /**
     * 根据id获取区域对象
     * @param id - id值
     * @returns 区域对象
     */
    getAreaById(id: number): any;
    /**
     * 隐藏单个区域
     * @param id - 区域id值
     * @returns 无
     */
    hideArea(id: number): void;
    /**
     * 显示单个区域
     * @param id - 区域id值
     * @returns 无
     */
    showArea(id: number): void;
    /**
     * 移除单个区域
     * @param item - 区域的id值，或 addArea返回的区域对象
     * @returns 无
     */
    removeArea(item: number | any): void;
    /**
     * 添加单个区域
     * @param positions - 坐标位置数组
     * @param [options = {}] - 控制的参数
     * @param [options.diffHeight] - 开挖深度（地形开挖时，可以控制单个区域的开挖深度）
     * @returns 添加区域的记录对象
     */
    addArea(positions: String[] | any[][] | LatLngPoint[] | Cesium.Cartesian3[], options?: {
        diffHeight?: any;
    }): any;
}

/**
 * 地形开挖 ，
 * 基于clippingPlanes接口，只支持单个开挖。
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param [positions] - 开挖区域的 坐标位置数组
 * @param [options.clipOutSide = false] - 是否外切开挖
 * @param [options.image] - 开挖区域的井墙面贴图URL。未传入该值时，不显示开挖区域的井。
 * @param [options.imageBottom] - 当显示开挖区域的井时，井底面贴图URL
 * @param [options.diffHeight] - 当显示开挖区域的井时，设置区域的挖掘深度（单位：米）
 * @param [splitNum = 30] - 当显示开挖区域的井时，井墙面每两点之间插值个数
 */
declare class TerrainPlanClip extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        clipOutSide?: boolean;
        image?: string;
        imageBottom?: string;
        diffHeight?: number;
    }, positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[], splitNum?: number);
    /**
     * 开挖区域的 坐标位置数组
     */
    positions: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
    /**
     * 设置所有区域的挖掘深度（单位：米）
     */
    diffHeight: number;
    /**
     * 是否外切开挖
     */
    clipOutSide: boolean;
    /**
     * 清除开挖
     * @returns 无
     */
    clear(): void;
}

/**
 * 限高分析
 * @param options - 参数对象，包括以下：
 * @param [options.positions] - 限高区域坐标数组
 * @param [options.height] - 限高高度（单位米）,相对于bottomHeight模型地面的海拔高度的相对高度。
 * @param [options.bottomHeight] - 模型地面的海拔高度（单位米）
 */
declare class LimitHeight extends BaseThing {
    constructor(options: {
        positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
        height?: number;
        bottomHeight?: number;
    });
    /**
     * 矢量数据图层
     */
    readonly layer: GraphicLayer;
    /**
     * 分析区域坐标数组
     */
    positions: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
    /**
     * 限高高度（单位米）,相对于bottomHeight模型地面的海拔高度的相对高度。
     */
    height: number;
    /**
     * 模型地面的海拔高度（单位：米）
     */
    bottomHeight: number;
    /**
     * 清除限高分析
     * @returns 无
     */
    clear(): void;
}

/**
 * Gltf模型剖切，
 * 基于clippingPlanes接口，只支持单个开挖。
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param options.graphic - 需要裁剪的对象（gltf模型）
 * @param [options.positions] - 裁剪区域坐标数组(按面或线裁剪)
 * @param [options.height] - 当有裁剪区域挖时，底面的高度（单位米），未设置时不显示底面。
 * @param [options.type] - 裁剪类型（按方向类型正方向单面裁剪）
 * @param [options.distance = 0] - 裁剪的距离
 * @param [options.clipOutSide = false] - 是否外裁剪
 * @param [options.edgeWidth = 0] - 裁剪区域边线宽度，0时不显示
 * @param [options.edgeColor = Cesium.Color.WHITE] - 裁剪区域边线颜色
 */
declare class ModelPlanClip extends TilesetPlanClip {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        graphic: ModelEntity;
        positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
        height?: number;
        type?: TilesetPlanClip.Type;
        distance?: number;
        clipOutSide?: boolean;
        edgeWidth?: number;
        edgeColor?: Cesium.Color;
    });
    /**
     * 需要裁剪的对象（gltf模型）
     */
    graphic: ModelEntity;
    /**
     * 获取当前转换计算模型矩阵。如果方向或位置未定义，则返回undefined。
     */
    readonly matrix: Cesium.Matrix4;
}

declare namespace ModelPlanClip {
    /**
     * 裁剪模型 类型 枚举 同{@link TilesetPlanClip.Type}
     */
    enum Type {
    }
}

/**
 * 3dtiles模型裁剪
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param options.layer - 需要裁剪的对象（3dtiles图层）
 * @param [options.positions] - 坐标位置数组，只裁剪单个区域【单个区域场景时使用】
 * @param [options.clipOutSide = false] - 是否外裁剪
 */
declare class TilesetClip extends TilesetEditBase {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        layer: TilesetLayer;
        positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
        clipOutSide?: boolean;
    });
    /**
     * 是否外裁剪
     */
    clipOutSide: boolean;
}

/**
 * 3dtiles模型分析（裁剪、压平、淹没） 基础类
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param options.layer - 需要模型分析的对象（3dtiles图层）
 * @param [options.positions] - 坐标位置数组，只分析的单个区域【单个区域场景时使用】
 */
declare class TilesetEditBase extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        layer: TilesetLayer;
        positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
    });
    /**
     * 区域 列表
     */
    readonly list: object[];
    /**
     * 需要分析的模型（3dtiles图层）
     */
    layer: TilesetLayer;
    /**
     * 需要分析的模型 对应的 Cesium3DTileset 对象
     */
    tileset: Cesium.Cesium3DTileset;
    /**
     * 获取当前转换计算模型矩阵。如果方向或位置未定义，则返回undefined。
     */
    readonly matrix: Cesium.Matrix4;
    /**
     * 坐标位置数组，只显示单个区域【单个区域场景时使用】
     */
    positions: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
    /**
     * 已添加的区域个数
     */
    readonly length: Int;
    /**
     * 清除分析
     * @returns 无
     */
    clear(): void;
    /**
     * 根据id获取区域对象
     * @param id - id值
     * @returns 区域对象
     */
    getAreaById(id: number): any;
    /**
     * 隐藏单个区域
     * @param id - 区域id值
     * @returns 无
     */
    hideArea(id: number): void;
    /**
     * 显示单个区域
     * @param id - 区域id值
     * @returns 无
     */
    showArea(id: number): void;
    /**
     * 移除单个区域
     * @param item - 区域的id，或 addArea返回的区域对象
     * @returns 无
     */
    removeArea(item: number | any): void;
    /**
     * 添加区域
     * @param positions - 坐标位置数组
     * @returns 添加区域的记录对象
     */
    addArea(positions: String[] | any[][] | LatLngPoint[] | Cesium.Cartesian3[]): any;
}

/**
 * 3dtiles模型压平
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param options.layer - 需要压平的对象（3dtiles图层）
 * @param [options.positions] - 坐标位置数组，只压平单个区域【单个区域场景时使用】
 * @param [options.height] - 压平高度 (单位：米)，基于压平区域最低点高度的偏移量
 */
declare class TilesetFlat extends TilesetEditBase {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        layer: TilesetLayer;
        positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
        height?: number;
    });
    /**
     * 压平高度 (单位：米)，基于压平区域最低点高度的偏移量
     */
    height: number;
}

declare namespace TilesetFlood {
    /**
     * 当前类支持的{@link EventType}事件类型
     * @example
     * //绑定监听事件
     * thing.on(mars3d.EventType.end, function (event) {
     *   console.log('分析完成', event)
     * })
     * @property start - 开始分析
     * @property change - 变化了
     * @property end - 完成分析
     */
    type EventType = {
        start: string;
        change: string;
        end: string;
    };
}

/**
 * 3dtiles模型淹没分析
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param options.layer - 需要裁剪的对象（3dtiles图层）
 * @param [options.positions] - 坐标位置数组，只淹没单个区域【单个区域场景时使用】
 * @param [options.speed] - 淹没速度，米/秒（默认刷新频率为55Hz）
 * @param [options.minHeight] - 淹没起始的海拔高度（单位：米）
 * @param [options.maxHeight] - 淹没结束的海拔高度（单位：米）
 * @param [options.color = new Cesium.Color(0.15, 0.7, 0.95, 0.5)] - 淹没颜色
 * @param [options.floodAll] - 是否对整个模型进行分析
 */
declare class TilesetFlood extends TilesetEditBase {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        layer: TilesetLayer;
        positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
        speed?: number;
        minHeight?: number;
        maxHeight?: number;
        color?: Cesium.Color;
        floodAll?: boolean;
    });
    /**
     * 淹没速度，米/秒（默认刷新频率为55Hz）
     */
    speed: number;
    /**
     * 是否对整个模型进行分析
     */
    floodAll: boolean;
    /**
     * 淹没高度（单位：米）
     */
    height: number;
    /**
     * 淹没颜色
     */
    color: Cesium.Color;
    /**
     * 重新赋值参数，同构造方法参数一致。
     * @param options - 参数,与类的构造方法参数相同
     * @returns 当前对象本身，可以链式调用
     */
    setOptions(options: any): this;
    /**
     * 开始播放淹没动画效果
     * @returns 无
     */
    start(): void;
    /**
     * 暂停播放淹没动画效果
     * @returns 无
     */
    stop(): void;
    /**
     * 重新开始播放淹没动画效果
     * @returns 无
     */
    restart(): void;
    /**
     * 清除分析
     * @returns 无
     */
    clear(): void;
}

/**
 * 3dtiles模型裁剪，
 * 基于clippingPlanes接口，只支持单个开挖。
 * @param options - 参数对象，包括以下：
 * @param [options.id = uuid()] - 对象的id标识
 * @param [options.enabled = true] - 对象的启用状态
 * @param options.layer - 需要裁剪的对象（3dtiles图层）
 * @param [options.positions] - 裁剪区域坐标数组(按面或线裁剪)
 * @param [options.height] - 当有裁剪区域挖时，底面的高度（单位米），未设置时不显示底面。
 * @param [options.type] - 裁剪类型（按方向类型正方向单面裁剪）
 * @param [options.distance = 0] - 裁剪的距离
 * @param [options.clipOutSide = false] - 是否外裁剪
 * @param [options.edgeWidth = 0] - 裁剪区域边线宽度，0时不显示
 * @param [options.edgeColor = Cesium.Color.WHITE] - 裁剪区域边线颜色
 */
declare class TilesetPlanClip extends BaseThing {
    constructor(options: {
        id?: string | number;
        enabled?: boolean;
        layer: TilesetLayer;
        positions?: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
        height?: number;
        type?: TilesetPlanClip.Type;
        distance?: number;
        clipOutSide?: boolean;
        edgeWidth?: number;
        edgeColor?: Cesium.Color;
    });
    /**
     * 需要裁剪的对象（3dtiles图层）
     */
    layer: TilesetLayer;
    /**
     * 裁剪面集合
     */
    readonly planes: Cesium.ClippingPlaneCollection;
    /**
     * 获取当前转换计算模型矩阵。如果方向或位置未定义，则返回undefined。
     */
    readonly matrix: Cesium.Matrix4;
    /**
     * 更新最后一个面的 裁剪距离 (单位：米)
     */
    distance: number;
    /**
     * 裁剪类型（按方向类型正方向单面裁剪）
     */
    type: TilesetPlanClip.Type;
    /**
     * 裁剪区域坐标数组(按面或线裁剪)
     */
    positions: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[];
    /**
     * 是否外裁剪
     */
    clipOutSide: boolean;
    /**
     * 清除裁剪面
     * @returns 无
     */
    clear(): void;
    /**
     * 更新所有面的 裁剪距离 (单位：米)
     * @param val - 裁剪距离 (单位：米)
     * @returns 无
     */
    updateAllDistance(val: number): void;
}

declare namespace TilesetPlanClip {
    /**
     * 裁剪模型 类型 枚举
     */
    enum Type {
        Z,
        ZR,
        X,
        XR,
        Y,
        YR
    }
}

/**
 * DOM操作 相关静态方法类
 */
declare module "DomUtil" {
    /**
     * 创建一个tagName的HTML元素，将其class设置为className，并可选择将其添加到container元素中
     * @param tagName - 元素类型，比如 div
     * @param className - 附加的class样式名
     * @param container - 添加到指定的父节点(可选)
     * @returns 创建好的DOM元素
     */
    function create(tagName: string, className: string, container: HTMLElement): HTMLElement;
    /**
     * 创建svg元素
     * @param width - 宽度
     * @param height - 高度
     * @param path - url路径
     * @param container - 添加到指定的父节点(可选)
     * @returns 创建的svg元素
     */
    function createSvg(width: number, height: number, path: string, container: HTMLElement): SVGElement;
    /**
     * 创建Video元素
     * @param url - url地址
     * @param type - 视频类型
     * @param className - 样式名称
     * @param container - 添加到指定的父节点(可选)
     * @returns 创建的Video元素
     */
    function createVideo(url: string, type: string, className: string, container: HTMLElement): HTMLElement;
    /**
     * 返回给定DOM id的元素，或者返回元素本身
     * @param id - dom的id
     * @returns DOM元素
     */
    function get(id: string): HTMLElement | any;
    /**
     * 将HTML字符串解析为DOM
     * @param domStr - HTML字符串
     * @param withWrapper - 是否返回DIV父节点
     * @param className - 指定加上的样式名称
     * @returns 解析后的DOM元素
     */
    function parseDom(domStr: string, withWrapper: boolean, className: string): HTMLDivElement | NodeListOf<ChildNode>;
    /**
     * 从其父元素中移除元素
     * @param el - DOM元素或元素ID
     * @returns 无
     */
    function remove(el: HTMLElement | string): void;
    /**
     * 删除所有子元素
     * @param el - DOM元素
     * @returns 无
     */
    function empty(el: HTMLElement): void;
    /**
     * 返回元素上某个样式属性的值
     * @param el - 指定的DOM元素
     * @param style - 样式名称
     * @returns 样式的值
     */
    function getStyle(el: HTMLElement, style: string): string | null;
    /**
     * 判断元素是否有指定class样式
     * @param el - DOM元素
     * @param name - class样式名称
     * @returns 包含返回`true`,不包含返回`false`
     */
    function hasClass(el: HTMLElement, name: string): boolean;
    /**
     * 在元素上添加指定的name的calss样式
     * @param el - DOM元素
     * @param name - class样式名称
     * @returns 无
     */
    function addClass(el: HTMLElement, name: string): void;
    /**
     * 在元素上移除指定的name的calss样式
     * @param el - DOM元素
     * @param name - class样式名称
     * @returns 无
     */
    function removeClass(el: HTMLElement, name: string): void;
    /**
     * 在元素上赋值设置指定的name的calss样式
     * @param el - DOM元素
     * @param name - class样式名称
     * @returns 无
     */
    function setClass(el: HTMLElement, name: string): void;
    /**
     * 获取dom元素上的class样式名称
     * @param el - DOM元素
     * @returns class样式名称
     */
    function getClass(el: HTMLElement): string;
    /**
     * 进入全屏
     * @param el - 指定DOM元素
     * @returns 是否执行
     */
    function enterFullscreen(el: HTMLElement): boolean;
    /**
     * 退出全屏
     * @returns 是否执行
     */
    function exitFullscreen(): boolean;
}

/**
 * 矢量数据标绘编辑相关常量
 */
declare module "DrawUtil" {
    /**
     * 拖拽点分类
     */
    var PointType: number;
    /**
     * 拖拽点颜色
     * @example
     * mars3d.DrawUtil.PointColor.Control = '#1c197d' //位置控制拖拽点
     * mars3d.DrawUtil.PointColor.MoveAll = '#8c003a' //整体平移(如线面)拖拽点
     * mars3d.DrawUtil.PointColor.MoveHeight = '#9500eb' //上下移动高度的拖拽点
     * mars3d.DrawUtil.PointColor.EditAttr = '#f73163' //辅助修改属性（如半径）的拖拽点
     * mars3d.DrawUtil.PointColor.AddMidPoint = 'rgba(4,194,201,0.3)' //增加新点，辅助拖拽点
     */
    var PointColor: Cesium.Color;
    /**
     * 设置编辑点的样式（color颜色除外）
     * @param value - 像素
     * @returns 无
     */
    function setPointStyle(value: PointPrimitive.StyleOptions): void;
}

/**
 * 矢量数据 相关静态方法
 */
declare module "GraphicUtil" {
    /**
     * 是否有指定类型矢量对象
     * @param type - 矢量数据类型
     * @returns 是否有指定类型
     */
    function hasType(type: string): boolean;
    /**
     * 判断该类型是否点状对象
     * @param type - 矢量数据类型
     * @returns 是否点状对象类型
     */
    function isPointType(type: string): boolean;
    /**
     * 注册矢量数据类
     * @param type - 矢量数据类型
     * @param graphicClass - 矢量数据类
     * @returns 无
     */
    function register(type: string, graphicClass: BaseGraphic): void;
    /**
     * 根据 矢量数据类型 获取 矢量数据类
     * @param type - 矢量数据类型
     * @returns 矢量数据类
     */
    function getClass(type: string): BaseGraphic | undefined;
    /**
     * 根据类型和参数 创建Graphic工厂方法
     * @param type - 数据类型
     * @param options - 构造参数， 按type支持{@link GraphicType}类的构造方法参数
     * @returns 创建完成的矢量数据对象
     */
    function create(type: any, options: any): BaseGraphic;
    /**
     * 通过标绘  创建Graphic工厂方法
     * @param layer - 图层对象
     * @param options - Graphic构造参数,包含：
     * @param options.type - 类型
     * @param [options.其他] - 按type支持{@link GraphicType}类的构造方法参数
     * @returns 创建完成的矢量数据对象
     */
    function fromDraw(layer: GraphicLayer, options: {
        type: GraphicType;
        其他?: any;
    }): BaseGraphic;
    /**
     * 根据cesium的entity生成Graphic的工厂方法
     * @param entity - cesium的entity对象
     * @param options - Graphic构造参数,包含：
     * @param options.type - 类型
     * @param options.style - 样式,按{@link GraphicType}对应的类的style配置
     * @param [options.attr = null] - 属性
     * @returns 创建完成的矢量数据对象
     */
    function fromEntity(entity: Cesium.Entity, options: {
        type: GraphicType;
        style: any;
        attr?: any;
    }): BaseEntity;
}

/**
 * 图层相关 静态方法
 */
declare module "LayerUtil" {
    /**
     * 注册图层类
     * @param type - 图层类型
     * @param layerClass - 图层类
     * @returns 无
     */
    function register(type: string, layerClass: BaseLayer): void;
    /**
     * 根据 图层类型 获取 图层类
     * @param type - 图层类型
     * @returns 图层类
     */
    function getClass(type: LayerType): BaseLayer | undefined;
    /**
     * 创建图层工厂方法
     * @param options - 图层参数，包括：
     * @param options.type - 图层类型
     * @param options.其他 - 具体见各{@link LayerType}对应的图层类的构造方法参数
     * @param [templateValues = {}] - url模版
     * @returns 创建完成的图层对象
     */
    function create(options: {
        type: LayerType;
        其他: any;
    }, templateValues?: any): BaseLayer;
    /**
     * 注册ImageryProvider类
     * @param type - Provider类型
     * @param layerClass - ImageryProvider类
     * @returns 无
     */
    function registerImageryProvider(type: string, layerClass: any): void;
    /**
     * 创建地图底图ImageryProvider的工厂方法
     * @param options - Provider参数，具体见各Provider类的构造方法参数说明
     * @returns ImageryProvider类
     */
    function createImageryProvider(options: any): any;
    /**
     * 获取baseLayerPicker使用的绑定图层列表配置，
     * 用于将config.json的配置basemaps数据转换为imageryProviderViewModels
     * @param arrLayer - basemaps配置
     * @returns 转换后的 imageryProviderViewModels数组 和 显示图层的index(selectedIndex)
     */
    function getImageryProviderViewModels(arrLayer: object[]): any;
    /**
     * 创建 无地形的 标准椭球体对象
     * @returns 无地形 标准椭球体对象
     */
    function getNoTerrainProvider(): Cesium.EllipsoidTerrainProvider;
    /**
     * 创建地形对象的工厂方法
     * @param options - 地形参数
     * @param options.type - 地形类型
     * @param options.url - 地形服务地址
     * @param [options.proxy] - 加载资源时要使用的代理服务url。
     * @param [options.templateValues] - 一个对象，用于替换Url中的模板值的键/值对
     * @param [options.queryParameters] - 一个对象，其中包含在检索资源时将发送的查询参数。比如：queryParameters: {'access_token': '123-435-456-000'}
     * @param [options.headers] - 一个对象，将发送的其他HTTP标头。比如：headers: { 'X-My-Header': 'valueOfHeader' }
     * @param [options.requestVertexNormals = true] - 是否应该从服务器请求额外的光照信息，如果可用，以每个顶点法线的形式。
     * @param [options.requestWaterMask = false] - 是否应该向服务器请求每个瓦的水掩膜(如果有的话)。
     * @param [options.requestMetadata = true] - 是否应该从服务器请求每个块元数据(如果可用)。
     * @param [templateValues = {}] - url模版
     * @returns 地形对象
     */
    function createTerrainProvider(options: {
        type: TerrainType;
        url: string | Cesium.Resource;
        proxy?: string;
        templateValues?: any;
        queryParameters?: any;
        headers?: any;
        requestVertexNormals?: boolean;
        requestWaterMask?: boolean;
        requestMetadata?: boolean;
    }, templateValues?: any): Cesium.CesiumTerrainProvider;
    /**
     * 获取baseLayerPicker使用的绑定地形列表
     * @param options - 地形参数,同{@link createTerrainProvider}方法参数
     * @returns 地形列表
     */
    function getTerrainProviderViewModels(options: any): Cesium.ProviderViewModel[];
}

/**
 * SDK内部统一调用console.* 打印日志的控制类，在外部可以按需开启和关闭。
 */
declare module "Log" {
    /**
     * 是否 console.log 打印普通日志信息，可以按需关闭或开启
     * @param val - 是否打印
     * @returns 无
     */
    function hasInfo(val: boolean): void;
    /**
     * 是否 console.warn 打印警告日志信息，可以按需关闭或开启，但不建议关闭
     * @param val - 是否打印
     * @returns 无
     */
    function hasWarn(val: boolean): void;
    /**
     * 是否 console.error 打印错误日志信息，可以按需关闭或开启，但不建议关闭
     * @param val - 是否打印
     * @returns 无
     */
    function hasError(val: boolean): void;
    /**
     * console.log 打印普通日志信息,方便开发调试
     * @param sources - 打印的日志内容
     * @returns 无
     */
    function logInfo(sources: string | any): void;
    /**
     * console.warn 打印警告日志信息,方便开发调试
     * @param sources - 打印的警告日志内容
     * @returns 无
     */
    function logWarn(sources: string | any): void;
    /**
     * console.warn 打印错误日志信息,方便开发调试定位问题
     * @param sources - 打印的错误日志内容
     * @returns 无
     */
    function logError(sources: string | any): void;
}

/**
 * 矢量数据材质
 */
declare module "MaterialUtil" {
    /**
     * 创建 材质属性（用于Entity）
     * @param type - 材质类型
     * @param options - 创建参数,具体对照{@link MaterialType}的注释说明
     * @returns 材质属性对象
     */
    function createMaterialProperty(type: MaterialType, options: any): BaseMaterialProperty;
    /**
     * 创建 材质（用于Primitive）
     * @param type - 材质类型
     * @param options - 创建参数,具体对照{@link MaterialType}的注释说明
     * @returns 材质对象
     */
    function createMaterial(type: MaterialType, options: any): Cesium.Material;
    /**
     * 将材质对象转为Josn简单对象，用于保存。
     * @param material - 材质对象
     * @param style - 附加到的目标对象
     * @returns json简单对象
     */
    function toJSON(material: Cesium.Material | BaseMaterialProperty, style: any): any;
}

/**
 * 图上量算 的 常用静态方法
 */
declare module "MeasureUtil" {
    /**
     * 求坐标数组的空间距离
     * @param positions - 坐标数组
     * @returns 距离（单位：米）
     */
    function getDistance(positions: Cesium.Cartesian3[]): number;
    /**
     * 求坐标数组的 距离（地球表面弧度的）,
     * 比如北京到纽约（不能穿过球心，是贴地表的线的距离）
     * @param positions - 坐标数组
     * @returns 距离（单位：米）
     */
    function getSurfaceDistance(positions: Cesium.Cartesian3[]): number;
    /**
     * 异步计算贴地距离中，每计算完成2个点之间的距离后 的回调方法
     * @param options - 参数对象，具有以下属性:
     * @param options.index - 坐标数组的index顺序
     * @param options.positions - 当前2个点之间的 贴地坐标数组
     * @param options.distance - 当前2个点之间的 贴地距离
     * @param options.arrDistance - 已计算完成从第0点到index点的 每一段的长度数组
     * @param options.all_distance - 已计算完成从第0点到index点的 贴地距离
     */
    type getClampDistance_endItem = (options: {
        index: number;
        positions: Cesium.Cartesian3[];
        distance: number;
        arrDistance: Number[];
        all_distance: number;
    }) => void;
    /**
     * 异步计算贴地距离完成 的回调方法
     * @param all_distance - 路线的全部距离，单位：米
     * @param arrDistance - 每2个点间的 每一段的长度数组
     */
    type getClampDistance_callback = (all_distance: number, arrDistance: any[]) => void;
    /**
     * 异步计算贴地(地表或模型表面)距离，单位：米
     * @param positions - 坐标数组
     * @param options - 参数对象，具有以下属性:
     * @param options.scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param [options.splitNum = 100] - 插值数，将线段分割的个数
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param options.endItem - 异步计算贴地距离中，每计算完成2个点之间的距离后 的回调方法
     * @param options.callback - 异步计算贴地距离完成 的回调方法
     * @returns 无
     */
    function getClampDistance(positions: Cesium.Cartesian3[], options: {
        scene: Cesium.Scene;
        splitNum?: number;
        has3dtiles?: boolean;
        endItem: getClampDistance_endItem;
        callback: getClampDistance_callback;
    }): void;
    /**
     * 计算面积（空间平面）
     * @param positions - 坐标数组
     * @returns 面积，单位：平方米
     */
    function getArea(positions: Cesium.Cartesian3[]): number;
    /**
     * 计算三角形面积（空间平面）
     * @param pos1 - 三角形顶点坐标1
     * @param pos2 - 三角形顶点坐标2
     * @param pos3 - 三角形顶点坐标3
     * @returns 面积，单位：平方米
     */
    function getTriangleArea(pos1: Cesium.Cartesian3, pos2: Cesium.Cartesian3, pos3: Cesium.Cartesian3): number;
    /**
     * 异步精确计算贴地面积完成 的回调方法
     * @param area - 贴地面积，单位：平方米
     * @param resultInter - 面内进行贴地(或贴模型)插值对象
     */
    type getClampArea_callback = (area: number, resultInter: any) => void;
    /**
     * 计算贴地面积
     * @param positions - 坐标数组
     * @param options - 参数对象，具有以下属性:
     * @param options.asyn - 是否进行异步精确计算
     * @param options.scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param [options.splitNum = 10] - 插值数，将面分割的网格数
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param options.callback - 异步计算贴地距离完成 的回调方法
     * @returns 仅 asyn:false 时返回面积，单位：平方米
     */
    function getClampArea(positions: Cesium.Cartesian3[], options: {
        asyn: boolean;
        scene: Cesium.Scene;
        splitNum?: number;
        has3dtiles?: boolean;
        callback: getClampArea_callback;
    }): number | void;
    /**
     * 计算2点的角度值，角度已正北为0度，顺时针为正方向
     * @param startPosition - 需要计算的点
     * @param endPosition - 目标点，以该点为参考中心。
     * @param [isNorthZero = false] - 是否正东为0时的角度（如方位角）
     * @returns 返回角度值，0-360度
     */
    function getAngle(startPosition: Cesium.Cartesian3, endPosition: Cesium.Cartesian3, isNorthZero?: boolean): number;
    /**
     * 异步计算中，每计算完成1个点的坡度坡向后 的回调方法
     * @param event - 参数对象，具有以下属性:
     * @param event.index - 数组点中的index顺序
     * @param event.data - 数据对象，具有以下属性:
     * @param event.data.position - 坐标位置
     * @param event.data.slope - 度数法值【 α(坡度)=arc tan (高程差/水平距离)】
     * @param event.data.slopeStr1 - 度数法值字符串
     * @param event.data.slopeStr2 - 百分比法值字符串【 坡度 = (高程差/水平距离)x100%】
     * @param event.data.direction - 坡向值（0-360度）
     */
    type getSlope_endItem = (event: {
        index: number;
        data: {
            position: Cesium.Cartesian3;
            slope: number;
            slopeStr1: string;
            slopeStr2: string;
            direction: number;
        };
    }) => void;
    /**
     * 异步计算完成所有点的坡度坡向后 的回调方法
     * @param event - 参数对象，具有以下属性:
     * @param event.data - 数组对象，数组中每一个值，具有以下属性:
     * @param event.data.position - 坐标位置
     * @param event.data.slope - 度数法值【 α(坡度)=arc tan (高程差/水平距离)】
     * @param event.data.slopeStr1 - 度数法值字符串
     * @param event.data.slopeStr2 - 百分比法值字符串【 坡度 = (高程差/水平距离)x100%】
     * @param event.data.direction - 坡向值（0-360度）
     */
    type getSlope_callback = (event: {
        data: {
            position: Cesium.Cartesian3;
            slope: number;
            slopeStr1: string;
            slopeStr2: string;
            direction: number;
        }[];
    }) => void;
    /**
     * 异步计算点的坡度坡向
     * @param options - 参数对象，具有以下属性:
     * @param options.map - Map地图对象
     * @param options.positions - 坐标数组
     * @param options.radius - 缓冲半径（影响坡度坡向的精度）
     * @param options.count - 缓冲的数量（影响坡度坡向的精度）会求周边(count*4)个点
     * @param options.has3dtiles - 是否在3dtiles模型上分析（模型分析较慢，按需开启）
     * @param options.endItem - 异步计算中，每计算完成1个点的坡度坡向后 的回调方法
     * @param options.callback - 异步计算完成所有点的坡度坡向后 的回调方法
     * @returns 坡度坡向分析类对象,分析完成方法内部会自动释放
     */
    function getSlope(options: {
        map: Map;
        positions: Cesium.Cartesian3[];
        radius: number;
        count: number;
        has3dtiles: boolean;
        endItem: getSlope_endItem;
        callback: getSlope_callback;
    }): Slope;
    /**
     * 格式化显示距离值, 可指定单位
     * @param val - 距离值，米
     * @param [unit = 'auto'] - 计量单位, 可选值：auto、m、km、mile、zhang 。auto时根据距离值自动选用k或km
     * @param lang - 使用的语言
     * @returns 带单位的格式化距离值字符串，如：20.17 米
     */
    function formatDistance(val: number, unit?: string, lang: LangType): string;
    /**
     * 格式化显示面积值, 可指定单位
     * @param val - 面积值，平方米
     * @param [unit = 'auto'] - 计量单位，可选值：auto、m、km、mu、ha 。auto时根据面积值自动选用m或km
     * @param lang - 使用的语言
     * @returns 带单位的格式化面积值字符串，如：20.21 平方公里
     */
    function formatArea(val: number, unit?: string, lang: LangType): string;
    /**
     * 格式化显示体积值, 可指定单位
     * @param val - 体积值，立方米
     * @param [unit = 'auto'] - 计量单位，当前无用，备用参数
     * @param lang - 使用的语言
     * @returns 带单位的格式化体积值字符串，如：20.21 方
     */
    function formatVolume(val: number, unit?: string, lang: LangType): string;
}

/**
 * 坐标点的转换 相关静态方法。
 *  提供了cesium内部不同坐标系之间的坐标转换、提供了国内偏移坐标系与标准坐标的转换。
 */
declare module "PointTrans" {
    /**
     * 经度/纬度 十进制 转为 度分秒格式
     * @param value - 经度或纬度值
     * @returns 度分秒对象，如： { degree:113, minute:24, second:40 }
     */
    function degree2dms(value: number): any;
    /**
     * 经度/纬度  度分秒 转为 十进制
     * @param degree - 度
     * @param minute - 分
     * @param second - 秒
     * @returns 十进制
     */
    function dms2degree(degree: number, minute: number, second: number): number;
    /**
     * 根据经度值 获取CGCS2000投影坐标对应的 EPSG值
     * @param lng - 经度值
     * @param [fd6 = false] - 是否为6度分带， true:6度分带,false:3度分带
     * @param [hasAddDH = true] - 横坐标前是否加带号
     * @returns EPSG值
     */
    function getCGCS2000EPSGByLng(lng: number, fd6?: boolean, hasAddDH?: boolean): string | undefined;
    /**
     * 根据加带号的横坐标值 获取CGCS2000投影坐标对应的EPSG值
     * @param x - 根据加带号的横坐标值
     * @returns EPSG值
     */
    function getCGCS2000EPSGByX(x: number): string | undefined;
    /**
     * 使用proj4转换坐标（支持任意坐标系），
     * 坐标系 可以在 {@link http://epsg.io }进行查询，已经内置支持 EPSG:4326、EPSG:3857、EPSG:4490、EPSG:4491至4554
     * @param arrdata - 原始坐标,示例：[39396641,3882123]
     * @param fromProjParams - 原始坐标的坐标系，如'EPSG:4527'
     * @param [toProjParams = 'EPSG:4326'] - 转为返回的结果坐标系
     * @returns 返回结果坐标系的对应坐标,示例：[115.866936, 35.062583]
     */
    function proj4Trans(arrdata: Number[], fromProjParams: string | CRS, toProjParams?: string | CRS): Number[];
    /**
     * 使用proj4转换坐标数组（支持任意坐标系），
     * 坐标系 可以在 {@link http://epsg.io }进行查询，已经内置支持 EPSG:4326、EPSG:3857、EPSG:4490、EPSG:4491至4554
     * @param coords - 原始坐标数组,示例：[[39396641,3882123],[39396623,3882134]]
     * @param fromProjParams - 原始坐标的坐标系，如'EPSG:4527'
     * @param [toProjParams = 'EPSG:4326'] - 转为返回的结果坐标系
     * @returns 返回结果坐标系的对应坐标数组,示例：[[115.866936, 35.062583],[115.866923, 35.062565]]
     */
    function proj4TransArr(coords: Number[], fromProjParams: string, toProjParams?: string): Number[];
    /**
     * Cesium笛卡尔空间坐标 转 经纬度坐标
     * 常用于转换geojson
     * @param cartesian - Cesium笛卡尔空间xyz坐标
     * @returns 经纬度坐标,示例：[123.123456,32.654321,198.7]
     */
    function cartesian2lonlat(cartesian: Cesium.Cartesian3): Number[];
    /**
     * Cesium笛卡尔空间坐标数组 转 经纬度坐标数组
     * 常用于转换geojson
     * @param positions - Cesium笛卡尔空间xyz坐标数组
     * @returns 经纬度坐标数组,示例：[ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7] ]
     */
    function cartesians2lonlats(positions: Cesium.Cartesian3[]): any[][];
    /**
     * Cesium笛卡尔空间坐标 转 WebMercator投影平面坐标
     * @param position - Cesium笛卡尔空间xyz坐标
     * @returns 墨卡托投影平面坐标,示例：[13048882,3741659,20.1]
     */
    function cartesian2mercator(position: Cesium.Cartesian3): Number[];
    /**
     * Cesium笛卡尔空间坐标数组 转 WebMercator投影平面坐标数组
     * @param positions - Cesium笛卡尔空间xyz坐标数组
     * @returns WebMercator投影平面坐标数组,示例：[[13048882,3741659,20.1],[13048882,3741659,21.2] ]
     */
    function cartesians2mercators(positions: Cesium.Cartesian3[]): any[][];
    /**
     * 经纬度坐标 转 Cesium笛卡尔空间xyz坐标
     * @param coord - 经纬度坐标,示例：[123.123456,32.654321,198.7]
     * @param [defHeight = 0] - 默认高度
     * @returns Cesium笛卡尔空间xyz坐标
     */
    function lonlat2cartesian(coord: any[][], defHeight?: number): Cesium.Cartesian3;
    /**
     * 经纬度坐标数组 转 Cesium笛卡尔空间xyz坐标数组
     * @param coords - 经纬度坐标数组,示例：[ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7] ]
     * @param [defHeight = 0] - 默认高度
     * @returns Cesium笛卡尔空间xyz坐标数组
     */
    function lonlats2cartesians(coords: any[][], defHeight?: number): Cesium.Cartesian3[];
    /**
     * 经纬度地理坐标 转 投影平面坐标
     * @param lnglat - 经纬度坐标,示例：[123.123456,32.654321,20.1]
     * @returns WebMercator投影平面坐标,示例：[13048882,3741659,20.1]
     */
    function lonlat2mercator(lnglat: Number[]): Number[];
    /**
     * 经纬度地理坐标数组 转 投影平面坐标数组
     * @param arr - 经纬度坐标数组,示例：[ [123.123456,32.654321,20.1], [111.123456,22.654321,21.2] ]
     * @returns WebMercator投影平面坐标数组,示例：[[13048882,3741659,20.1],[13048882,3741659,21.2] ]
     */
    function lonlats2mercators(arr: any[][]): any[][];
    /**
     * 投影平面坐标 转 Cesium笛卡尔空间xyz坐标
     * @param point - WebMercator投影平面坐标,示例：[13048882,3741659,20.1]
     * @param [height] - 赋值高度
     * @returns Cesium笛卡尔空间xyz坐标
     */
    function mercator2cartesian(point: Number[], height?: number): Cesium.Cartesian3;
    /**
     * 投影平面坐标数组 转 Cesium笛卡尔空间xyz坐标数组
     * @param arr - WebMercator投影平面坐标数组,示例：[[13048882,3741659,20.1],[13048882,3741659,21.2] ]
     * @param [height] - 赋值高度
     * @returns Cesium笛卡尔空间xyz坐标数组
     */
    function mercators2cartesians(arr: Number[], height?: number): Cesium.Cartesian3;
    /**
     * 投影平面坐标 转 经纬度地理坐标
     * @param point - WebMercator投影平面坐标,示例：[13048882,3741659,20.1]
     * @returns 经纬度坐标,示例：[123.123456,32.654321,20.1]
     */
    function mercator2lonlat(point: Number[]): Number[];
    /**
     * 投影平面坐标数组 转 经纬度地理坐标数组
     * @param arr - WebMercator投影平面坐标数组,示例：[[13048882,3741659,20.1],[13048882,3741659,21.2] ]
     * @returns 经纬度坐标数组,示例：[ [123.123456,32.654321,20.1], [111.123456,22.654321,21.2] ]
     */
    function mercators2lonlats(arr: any[][]): any[][];
    /**
     * 经纬度坐标转换，
     * 百度坐标 (BD09) 转换为 国测局坐标 (GCJ02)
     * @param arrdata - 百度坐标 (BD09)坐标数据，示例：[117.225590,31.832916]
     * @returns 国测局坐标 (GCJ02)坐标数据，示例：[:117.22559,31.832917]
     */
    function bd2gcj(arrdata: Number[]): Number[];
    /**
     * 经纬度坐标转换，
     * 国测局坐标 (GCJ02) 转换为 百度坐标 (BD09)
     * @param arrdata - 高德谷歌等国测局坐标 (GCJ02) 坐标数据，示例：[117.225590,31.832916]
     * @returns 百度坐标 (BD09)坐标数据，示例：[117.232039,31.839177]
     */
    function gcj2bd(arrdata: Number[]): Number[];
    /**
     * 经纬度坐标转换，
     * 标准无偏坐标（WGS84） 转为 国测局坐标 (GCJ02)
     * @param arrdata - 标准无偏坐标（WGS84）坐标数据，示例：[117.220102, 31.834912]
     * @returns 国测局坐标 (GCJ02)坐标数据，示例：[117.225590,31.832916]
     */
    function wgs2gcj(arrdata: Number[]): Number[];
    /**
     * 经纬度坐标转换，
     * 国测局坐标 (GCJ02)  转换为 标准无偏坐标（WGS84）
     * @param arrdata - 国测局坐标 (GCJ02)坐标数据，示例：[117.225590,31.832916]
     * @returns 标准无偏坐标（WGS84）坐标数据，示例：[117.220102, 31.834912]
     */
    function gcj2wgs(arrdata: Number[]): Number[];
    /**
     * 经纬度坐标转换，
     * 百度坐标 (BD09) 转 标准无偏坐标（WGS84）
     * @param arrdata - 百度坐标 (BD09)坐标数据，示例：[117.232039,31.839177]
     * @returns 标准无偏坐标（WGS84）坐标数据，示例：[117.220102, 31.834912]
     */
    function bd2wgs(arrdata: Number[]): Number[];
    /**
     * 标准无偏坐标（WGS84）  转 百度坐标 (BD09)
     * @param arrdata - 标准无偏坐标（WGS84）坐标数据，示例：[117.220102, 31.834912]
     * @returns 百度坐标 (BD09)坐标数据，示例：[117.232039,31.839177]
     */
    function wgs2bd(arrdata: Number[]): Number[];
    /**
     * 【方式2】经纬度地理坐标 转 投影平面坐标
     * @param arrdata - 经纬度坐标,示例：[117.220101,31.834907]
     * @returns WebMercator投影平面坐标,示例：[13048882.06,3741659.72]
     */
    function jwd2mct(arrdata: Number[]): Number[];
    /**
     * 【方式2】投影平面坐标 转 经纬度地理坐标
     * @param arrdata - WebMercator投影平面坐标，示例：[13048882.06,3741659.72]
     * @returns 经纬度坐标数据，示例：[117.220101,31.834907]
     */
    function mct2jwd(arrdata: Number[]): Number[];
}

/**
 * 单个坐标或位置矩阵相关的处理 静态方法
 */
declare module "PointUtil" {
    /**
     * 获取PointTrans中对应的坐标转换方法
     * srcCoordType 转 dstCoordType 对应的方法名称
     * @param srcCoordType - 原始的坐标系
     * @param dstCoordType - 转换后的坐标系
     * @returns PointTrans中对应的坐标转换方法
     */
    function getTransFun(srcCoordType: ChinaCRS, dstCoordType: ChinaCRS): (...params: any[]) => any;
    /**
     * 获取position的最终value值，
     * 因为cesium经常属性或绑定一层，通过该方法可以内部去判断是否有getValue或_value进行取最终value值。
     * @param position - 各种位置属性对象
     * @param [time = Cesium.JulianDate.now()] - 指定的时间值
     * @returns 具体的Cartesian3对象坐标值
     */
    function getPositionValue(position: Cesium.XXXPositionProperty | Cesium.Cartesian3 | any, time?: Cesium.JulianDate): Cesium.Cartesian3;
    /**
     * 获取 坐标数组 中 最高高程值
     * @param positions - 笛卡尔坐标数组
     * @param [defaultVal = 0] - 默认高程值
     * @returns 最高高程值
     */
    function getMaxHeight(positions: Cartesian3[], defaultVal?: number): number;
    /**
     * 获取 坐标数组 中 最低高程值
     * @param positions - 笛卡尔坐标数组
     * @param [defaultVal = 0] - 默认高程值
     * @returns 最低高程值
     */
    function getMinHeight(positions: Cartesian3[], defaultVal?: number): number;
    /**
     * 对坐标（或坐标数组）增加 指定的海拔高度值
     * @param positions - 笛卡尔坐标数组
     * @param [addHeight = 0] - 增加的海拔高度值
     * @returns 增加高度后的坐标（或坐标数组）
     */
    function addPositionsHeight(positions: Cartesian3 | Cartesian3[], addHeight?: number): Cartesian3 | Cartesian3[];
    /**
     * 对坐标（或坐标数组）赋值修改为 指定的海拔高度值
     * @param positions - 笛卡尔坐标数组
     * @param [height = 0] - 增加的海拔高度值
     * @returns 增加高度后的坐标（或坐标数组）
     */
    function setPositionsHeight(positions: Cartesian3 | Cartesian3[], height?: number): Cartesian3 | Cartesian3[];
    /**
     * 异步计算贴地(或贴模型)高度完成 的回调方法
     * @param newHeight - 计算完成的贴地(或贴模型)高度值
     * @param cartOld - 原始点坐标对应的Cartographic经纬度值（弧度值）
     */
    type getSurfaceHeight_callback = (newHeight: number | null, cartOld: Cesium.Cartographic) => void;
    /**
     * 获取 坐标 的 贴地(或贴模型)高度
     * @example
     * var position = graphic.position
     * position = mars3d.PointUtil.getSurfaceHeight(map.scene, position, {
     *    asyn: true,     //是否异步求准确高度
     *    has3dtiles: true,   //是否先求贴模型上（无模型时改为false，提高效率）
     *    callback: function (newHeight, cartOld) {
     *       console.log("原始高度为：" + cartOld.height.toFixed(2) + ",贴地高度：" + newHeight.toFixed(2))
     *       var positionNew = Cesium.Cartesian3.fromRadians(cartOld.longitude, cartOld.latitude, newHeight);
     *       graphic.position =positionNew
     *    }
     * });
     * @param scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param position - 坐标
     * @param [options = {}] - 参数对象:
     * @param options.asyn - 是否进行异步精确计算
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @returns 仅 asyn:false 时返回高度值
     */
    function getSurfaceHeight(scene: Cesium.Scene, position: Cesium.Cartesian3, options?: {
        asyn: boolean;
        has3dtiles?: boolean;
        objectsToExclude?: object[];
        callback: getSurfaceHeight_callback;
    }): number | void;
    /**
     * 获取 坐标 的 贴3dtiles模型高度
     * @param scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param position - 坐标
     * @param [options = {}] - 参数对象:
     * @param options.asyn - 是否进行异步精确计算
     * @param [options.objectsToExclude = null] - 排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @returns 仅 asyn:false 时返回高度值
     */
    function getSurface3DTilesHeight(scene: Cesium.Scene, position: Cesium.Cartesian3, options?: {
        asyn: boolean;
        objectsToExclude?: object[];
        callback: getSurfaceHeight_callback;
    }): number | void;
    /**
     * 获取 坐标 的 贴地高度
     * @example
     * var position = entity.position.getValue();
     * position = mars3d.PointUtil.getSurfaceTerrainHeight(map.scene, position, {
     *    asyn: true,     //是否异步求准确高度
     *    callback: function (newHeight, cartOld) {
     *       if (newHeight == null) return;
     *       console.log("地面海拔：" + newHeight.toFixed(2))
     *    }
     * });
     * @param scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param position - 坐标
     * @param [options = {}] - 参数对象:
     * @param options.asyn - 是否进行异步精确计算
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @returns 仅 asyn:false 时返回高度值
     */
    function getSurfaceTerrainHeight(scene: Cesium.Scene, position: Cesium.Cartesian3, options?: {
        asyn: boolean;
        callback: getSurfaceHeight_callback;
    }): number | void;
    /**
     * 计算 贴地(或贴模型)高度 坐标
     * （非精确计算，根据当前加载的地形和模型数据情况有关）
     * @param scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param position - 坐标
     * @param [options = {}] - 参数对象，具有以下属性:
     * @param [options.relativeHeight = fasle] - 是否在地形上侧的高度，在对象具备Cesium.HeightReference.RELATIVE_TO_GROUND时，可以设置为ture
     * @param [options.maxHeight] - 可以限定最高高度，当计算的结果大于maxHeight时，原样返回，可以屏蔽计算误差的数据。
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，
     * @returns 贴地坐标
     */
    function getSurfacePosition(scene: Cesium.Scene, position: Cesium.Cartesian3, options?: {
        relativeHeight?: boolean;
        maxHeight?: number;
        has3dtiles?: boolean;
        objectsToExclude?: object[];
    }): Cesium.Cartesian3;
    /**
     * 获取 屏幕XY坐标 对应的 笛卡尔三维坐标
     * @example
     * //Cesium原生鼠标单击事件
     * var handler = new Cesium.ScreenSpaceEventHandler(map.scene.canvas);
     * handler.setInputAction(function (event) {
     *   var cartesian = mars3d.PointUtil.getCurrentMousePosition(map.scene, event.position);
     *   //继续写其他代码
     * }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
     * @param scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param position - 屏幕XY坐标（如鼠标所在位置)
     * @param noPickEntity - 排除的不拾取矢量对象，主要用于绘制中，排除对自己本身的拾取
     * @returns 笛卡尔三维坐标
     */
    function getCurrentMousePosition(scene: Cesium.Scene, position: Cesium.Cartesian2, noPickEntity: any): Cesium.Cartesian3;
    /**
     * 求2点的中间点（贴地表）
     * @param mpt1 - 点1坐标
     * @param mpt2 - 点2坐标
     * @returns 2个点是否为重复的点
     */
    function getMidpoint(mpt1: Cesium.Cartesian3, mpt2: Cesium.Cartesian3): Cesium.Cartesian3;
    /**
     * 判断2个点是否为重复的点，比如标绘中的双击会偶尔产生2个重复点
     * @param mpt1 - 点1坐标
     * @param mpt2 - 点2坐标
     * @returns 2个点是否为重复的点
     */
    function isRepeatPoint(mpt1: Cesium.Cartesian3, mpt2: Cesium.Cartesian3): boolean;
    /**
     * 获取 点point1 绕 点center 的地面法向量 旋转顺时针angle角度 后的 新坐标
     * @param center - 中心点坐标
     * @param point1 - 点坐标
     * @param angle - 旋转角度,顺时针方向 0-360度
     * @returns 计算得到的新坐标
     */
    function getRotateCenterPoint(center: Cesium.Cartesian3, point1: Cesium.Cartesian3, angle: number): Cesium.Cartesian3;
    /**
     * 求 p1指向p2方向线上，距离p1或p2指定长度的 新的点
     * @param p1 - 起点坐标
     * @param p2 - 终点坐标
     * @param len - 指定的距离，addBS为false时：len为距离起点p1的距离，addBS为true时：len为距离终点p2的距离
     * @param [addBS = false] - 标识len的参考目标
     * @returns 计算得到的新坐标
     */
    function getOnLinePointByLen(p1: Cesium.Cartesian3, p2: Cesium.Cartesian3, len: number, addBS?: boolean): Cesium.Cartesian3;
    /**
     * 获取点的offest平移矩阵后点,
     * 已经弃用，建议用 getPositionByHprAndOffset 方法
     * @param position - 中心点坐标
     * @param offest - 偏移值
     * @param offest.x - X轴方向偏移值,单位：米
     * @param offest.y - Y轴方向偏移值,单位：米
     * @param offest.z - Z轴方向偏移值,单位：米
     * @param degree - 方向，0-360度
     * @param [type = 'z'] - 轴方向，可选值：'x' 、 'y' 、 'z'
     * @param [fixedFrameTransform = Cesium.Transforms.eastNorthUpToFixedFrame] - 参考系
     * @returns 计算得到的新坐标
     */
    function getTranslationPosition(position: Cesium.Cartesian3, offest: {
        x: number;
        y: number;
        z: number;
    }, degree: number, type?: string, fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame): Cesium.Cartesian3;
    /**
     * 根据 坐标位置、hpr方向、偏移距离，计算目标点坐标
     * @param position - 坐标位置
     * @param offest - 偏移距离值, xyz值的单位：米
     * @param hpr - 方向值
     * @param [ellipsoid = Cesium.Ellipsoid.WGS84] - 变换中使用固定坐标系的椭球。
     * @param [fixedFrameTransform = Cesium.Transforms.eastNorthUpToFixedFrame] - 参考系
     * @returns 目标点坐标
     */
    function getPositionByHprAndOffset(position: Cesium.Cartesian3, offest: Cesium.Cartesian3, hpr: Cesium.HeadingPitchRoll, ellipsoid?: Cesium.Ellipsoid, fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame): Cesium.Cartesian3;
    /**
     * 根据观察点的方向角度和距离，计算目标点坐标
     * @param position - 观察点坐标
     * @param angle - 方向角度 (正东方向为0,顺时针到360度)
     * @param radius - 半径距离
     * @returns 目标点坐标
     */
    function getPositionByDirectionAndLen(position: Cesium.Cartesian3, angle: number, radius: number): Cesium.Cartesian3;
    /**
     * 根据观察点的hpr方向和距离，计算目标点坐标
     * @param position - 观察点坐标
     * @param hpr - 方向值
     * @param radiusZ - 半径距离
     * @returns 目标点坐标
     */
    function getPositionByHprAndLen(position: Cesium.Cartesian3, hpr: Cesium.HeadingPitchRoll, radiusZ: number): Cesium.Cartesian3;
    /**
     * 按观察点坐标和orientation方向，求观察点射向地球与地球的交点
     * @param position - 观察点坐标
     * @param orientation - HeadingPitchRoll方向 或 四元数实例
     * @param reverse - 是否翻转射线方向
     * @param [ellipsoid = Cesium.Ellipsoid.WGS84] - 变换中使用固定坐标系的椭球。
     * @returns 射线与地球的交点
     */
    function getRayEarthPosition(position: Cesium.Cartesian3, orientation: Cesium.HeadingPitchRoll | Cesium.Quaternion, reverse: boolean, ellipsoid?: Cesium.Ellipsoid): Cesium.Cartesian3;
    /**
     * 按转换矩阵，求观察点射向地球与地球的交点
     * @param matrix - 转换矩阵
     * @param reverse - 是否翻转射线方向
     * @param [ellipsoid = Cesium.Ellipsoid.WGS84] - 变换中使用固定坐标系的椭球。
     * @returns 射线与地球的交点
     */
    function getRayEarthPositionByMatrix(matrix: Cesium.Matrix4, reverse: boolean, ellipsoid?: Cesium.Ellipsoid): Cesium.Cartesian3;
    /**
     * 根据 position位置 和 orientation四元数实例 求 Heading Pitch Roll方向
     * @param position - 位置坐标
     * @param orientation - 四元数实例
     * @param [ellipsoid = Cesium.Ellipsoid.WGS84] - 变换中使用固定坐标系的椭球。
     * @param [fixedFrameTransform = Cesium.Transforms.eastNorthUpToFixedFrame] - 参考系
     * @returns Heading Pitch Roll方向
     */
    function getHeadingPitchRollByOrientation(position: Cesium.Cartesian3, orientation: Cesium.Quaternion, ellipsoid?: Cesium.Ellipsoid, fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame): Cesium.HeadingPitchRoll;
    /**
     * 根据matrix转换矩阵 求 Heading Pitch Roll角度
     * @param matrix - 转换矩阵
     * @param [ellipsoid = Cesium.Ellipsoid.WGS84] - 变换中使用固定坐标系的椭球。
     * @param [fixedFrameTransform = Cesium.Transforms.eastNorthUpToFixedFrame] - 参考系
     * @param [result] - 可以先实例化返回的 Heading Pitch Roll角度对象
     * @returns Heading Pitch Roll角度
     */
    function getHeadingPitchRollByMatrix(matrix: Cesium.Matrix4, ellipsoid?: Cesium.Ellipsoid, fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame, result?: Cesium.HeadingPitchRoll): Cesium.HeadingPitchRoll;
    /**
     * 求 localStart点 到 localEnd点的 Heading Pitch Roll方向
     * @param localStart - 起点坐标
     * @param localEnd - 终点坐标
     * @param [ellipsoid = Cesium.Ellipsoid.WGS84] - 变换中使用固定坐标系的椭球。
     * @param [fixedFrameTransform = Cesium.Transforms.eastNorthUpToFixedFrame] - 参考系
     * @returns Heading Pitch Roll方向
     */
    function getHeadingPitchRollForLine(localStart: Cesium.Cartesian3, localEnd: Cesium.Cartesian3, ellipsoid?: Cesium.Ellipsoid, fixedFrameTransform?: Cesium.Transforms.LocalFrameToFixedFrame): Cesium.HeadingPitchRoll;
}

/**
 * 多个点 或 线面数据 相关处理 静态方法
 */
declare module "PolyUtil" {
    /**
     * 求坐标数组的中心点
     * @param arr - 坐标数组
     * @param height - 指定中心点的高度值，默认为所有点的最高高度
     * @returns 中心点坐标
     */
    function centerOfMass(arr: any[][] | String[] | LatLngPoint[] | Cesium.Cartesian3[], height: number): Cesium.Cartesian3;
    /**
     * 缓冲分析，求指定 点线面geojson对象 按width半径的 缓冲面对象
     * @param geojson - geojson格式对象
     * @param width - 缓冲半径,单位：米
     * @returns 缓冲面对象，geojson格式
     */
    function buffer(geojson: any, width: number): any;
    /**
     * 缓冲分析，坐标数组围合面，按width半径的 缓冲新的坐标
     * @param points - 坐标数组
     * @param width - 缓冲半径,单位：米
     * @returns 缓冲后的新坐标数组
     */
    function bufferPoints(points: LatLngPoint[], width: number): LatLngPoint[];
    /**
     * 求坐标数组的矩形范围内 按 splitNum网格数插值的 granularity值
     * @param positions - 坐标数组
     * @param [splitNum = 10] - splitNum网格数
     * @returns granularity值
     */
    function getGranularity(positions: Cesium.Cartesian3[], splitNum?: Int): number;
    /**
     * 面内进行贴地(或贴模型)插值, 返回三角网等计算结果 的回调方法
     * @param [options = {}] - 参数对象:
     * @param options.granularity - 面内按splitNum网格数插值的granularity值
     * @param options.maxHeight - 面内最大高度
     * @param options.minHeight - 面内最小高度
     * @param options.list - 三角网对象数组，每个对象包含三角形的3个顶点(point1\point2\point3)相关值
     */
    type interPolygon_callback = (options?: {
        granularity: number;
        maxHeight: number;
        minHeight: number;
        list: object[];
    }) => void;
    /**
     * 面内进行贴地(或贴模型)插值, 返回三角网等计算结果
     * @param [options = {}] - 参数对象:
     * @param options.scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param options.positions - 坐标数组
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @param [options.splitNum = 10] - 插值数，横纵等比分割的网格个数
     * @param [options.asyn = false] - 是否进行异步精确计算
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param [options.onlyPoint = false] - truea时，返回结果中只返回点，不返回三角网
     * @returns 仅 asyn:false 时返回计算结果值
     */
    function interPolygon(options?: {
        scene: Cesium.Scene;
        positions: Cesium.Cartesian3[];
        callback: interPolygon_callback;
        splitNum?: number;
        asyn?: boolean;
        has3dtiles?: boolean;
        objectsToExclude?: object[];
        onlyPoint?: boolean;
    }): any | void;
    /**
     * 计算面内最大、最小高度值
     * @param positions - 坐标数组
     * @param scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param [options = {}] - 参数对象:
     * @param [options.splitNum = 10] - 插值数，横纵等比分割的网格个数
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @returns 计算面内最大、最小高度值对象，结果示例：{ maxHeight: 100, minHeight: 21 }
     */
    function getHeightRange(positions: Cesium.Cartesian3[], scene: Cesium.Scene, options?: {
        splitNum?: number;
        has3dtiles?: boolean;
        objectsToExclude?: object[];
    }): any;
    /**
     * 体积计算
     * @param [options = {}] - 参数对象:
     * @param options.scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param options.positions - 坐标数组
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @param [options.splitNum = 10] - 插值数，横纵等比分割的网格个数
     * @param [options.asyn = false] - 是否进行异步精确计算
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @returns 仅 asyn:false 时返回计算结果值
     */
    function computeVolume(options?: {
        scene: Cesium.Scene;
        positions: Cesium.Cartesian3[];
        callback: VolumeResult;
        splitNum?: number;
        asyn?: boolean;
        has3dtiles?: boolean;
        objectsToExclude?: object[];
    }): VolumeResult | void;
    /**
     * 面内进行贴地(或贴模型)插值, 返回三角网等计算结果 的回调方法
     * @param [options = {}] - 参数对象:
     * @param options.granularity - 面内按splitNum网格数插值的granularity值
     * @param options.maxHeight - 面内最大高度
     * @param options.minHeight - 面内最小高度
     * @param options.list - 三角网对象数组，每个对象包含三角形的3个顶点(point1\point2\point3)相关值
     * @param options.totalArea - 总面积(横截面/投影底面)，执行updateVolumeByMinHeight后赋值
     * @param options.totalVolume - 总体积，执行updateVolumeByMinHeight后赋值
     * @param options.digVolume - 挖方体积，执行updateVolume后赋值
     * @param options.fillVolume - 填方体积，执行updateVolume后赋值
     */
    type VolumeResult = (options?: {
        granularity: number;
        maxHeight: number;
        minHeight: number;
        list: object[];
        totalArea: number;
        totalVolume: number;
        digVolume: number;
        fillVolume: number;
    }) => void;
    /**
     * 根据 minHeight最低底面高度 计算（或重新计算）填挖方体积
     * @param resultInter - 插值完的对象
     * @returns 计算完成的填挖方体积
     */
    function updateVolumeByMinHeight(resultInter: interPolygon_callback): VolumeResult;
    /**
     * 根据 基准面高度 重新计算填挖方体积
     * @param resultInter - 插值完的对象
     * @param cutHeight - 基准面高度
     * @returns 重新计算填挖方体积后的对象
     */
    function updateVolume(resultInter: VolumeResult, cutHeight: number): VolumeResult;
    /**
     * 获取 圆（或椭圆）边线上的坐标点数组
     * @param [options] - 参数对象:
     * @param options.position - 圆的中心坐标
     * @param options.radius - 如是圆时，半径（单位：米）
     * @param options.semiMajorAxis - 椭圆时的 长半轴半径（单位：米）
     * @param options.semiMinorAxis - 椭圆时的 短半轴半径（单位：米）
     * @param [options.count = 1] - 象限内点的数量，返回的总数为 count*4
     * @param [options.rotation = 0] - 旋转的角度
     * @returns 边线上的坐标点数组
     */
    function getEllipseOuterPositions(options?: {
        position: Cesium.Cartesian3;
        radius: number;
        semiMajorAxis: number;
        semiMinorAxis: number;
        count?: number;
        rotation?: number;
    }): Cesium.Cartesian3[];
    /**
     * 格式化Rectangle矩形对象,返回经纬度值
     * @param rectangle - 矩形对象
     * @param [digits = 6] - 经纬度保留的小数位数
     * @returns 返回经纬度值，示例： { xmin: 73.16895, xmax: 134.86816, ymin: 12.2023, ymax: 54.11485 }
     */
    function formatRectangle(rectangle: Cesium.Rectangle, digits?: Int): any;
    /**
     * 获取 坐标数组 的 矩形边界值
     * @param positions - 坐标数组
     * @param [isFormat = false] - 是否格式化，格式化时示例： { xmin: 73.16895, xmax: 134.86816, ymin: 12.2023, ymax: 54.11485 }
     * @returns isFormat：true时，返回格式化对象，isFormat：false时返回Cesium.Rectangle对象
     */
    function getRectangle(positions: Cesium.Cartesian3[] | String[] | any[][] | LatLngPoint[], isFormat?: boolean): Cesium.Rectangle | any;
    /**
     * 获取坐标点数组的外接矩形的 4个顶点坐标点（数组）
     * @param positions - 坐标点数组
     * @param [rotation = 0] - 旋转的角度，弧度值
     * @returns 4个顶点坐标点
     */
    function getPositionsRectVertex(positions: Cesium.Cartesian3[], rotation?: number): Cesium.Cartesian3[];
    /**
     * 获取矩形（含旋转角度）的边线上的4个顶点坐标点数组
     * @param [options] - 参数对象:
     * @param options.rectangle - 矩形对象
     * @param [options.rotation = 0] - 旋转的角度，弧度值
     * @param [options.height = 0] - 坐标的高度
     * @param [options.granularity = Cesium.Math.RADIANS_PER_DEGREE] - granularity值
     * @param [options.ellipsoid = Cesium.Ellipsoid.WGS84] - 变换中使用固定坐标系的椭球。
     * @returns 边线上的4个顶点坐标点数组
     */
    function getRectangleOuterPositions(options?: {
        rectangle: Cesium.Rectangle;
        rotation?: number;
        height?: number;
        granularity?: number;
        ellipsoid?: Cesium.Ellipsoid;
    }): Cesium.Cartesian3[];
    /**
     * 根据传入中心点、高宽或角度，计算矩形面的顶点坐标。
     * @param [options] - 参数对象:
     * @param options.center - 中心坐标
     * @param [options.width] - 矩形的宽度，单位：米
     * @param [options.height] - 矩形的高度，单位：米
     * @param [options.rotation = 0] - 旋转的角度
     * @param [options.originX = 0.5] - 中心点所在的位置x轴方向比例，取值范围：0.1-1.0
     * @param [options.originY = 0.5] - 中心点所在的位置y轴方向比例，取值范围：0.1-1.0
     * @returns 矩形面的顶点坐标数组
     */
    function getRectPositionsByCenter(options?: {
        center: Cesium.Cartesian3;
        width?: number;
        height?: number;
        rotation?: number;
        originX?: number;
        originY?: number;
    }): Cesium.Cartesian3[];
    /**
     * 求贝塞尔曲线坐标
     * @param positions - 坐标数组
     * @param [closure = fasle] - 是否闭合曲线
     * @returns 坐标数组
     */
    function getBezierCurve(positions: Cesium.Cartesian3[], closure?: boolean): Cesium.Cartesian3[];
    /**
     * 对路线进行平面等比插值，高度：指定的固定height值 或 按贴地高度。
     * @param [options = {}] - 参数对象:
     * @param options.scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param options.positions - 坐标数组
     * @param [options.splitNum = 100] - 插值数，等比分割的个数
     * @param [options.minDistance = null] - 插值最小间隔(单位：米)，优先级高于splitNum
     * @param [options.height = 0] - 坐标的高度
     * @param [options.surfaceHeight = true] - 是否计算贴地高度 （非精确计算，根据当前加载的地形和模型数据情况有关）
     * @returns 插值后的路线坐标数组
     */
    function interPolyline(options?: {
        scene: Cesium.Scene;
        positions: Cesium.Cartesian3;
        splitNum?: number;
        minDistance?: number;
        height?: number;
        surfaceHeight?: boolean;
    }): Cesium.Cartesian3[];
    /**
     * 对路线进行按空间等比插值，高度：高度值按各点的高度等比计算
     * 比如：用于航线的插值运算
     * @param positions - 坐标数组
     * @param [options = {}] - 参数对象:
     * @param [options.splitNum] - 插值数，等比分割的个数，默认不插值
     * @param [options.minDistance] - 插值时的最小间隔(单位：米)，优先级高于splitNum
     * @returns 插值后的坐标对象
     */
    function interLine(positions: Cesium.Cartesian3[], options?: {
        splitNum?: number;
        minDistance?: number;
    }): Cesium.Cartesian3[];
    /**
     * 面内进行贴地(或贴模型)插值, 返回三角网等计算结果 的回调方法
     * @param raisedPositions - 计算完成后得到的贴地点数组
     * @param noHeight - 是否计算贴地高度失败，true时标识计算失败了
     * @param positions - 原始的坐标数组
     */
    type surfaceLineWork_callback = (raisedPositions: Cesium.Cartesian3[], noHeight: boolean, positions: Cesium.Cartesian3[]) => void;
    /**
     * 求路线的贴地线坐标（插值）
     * @param [options = {}] - 参数对象:
     * @param options.scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param options.positions - 坐标数组
     * @param [options.splitNum = 100] - 插值数，等比分割的个数
     * @param [options.minDistance = null] - 插值最小间隔(单位：米)，优先级高于splitNum
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param [options.offset = 0] - 可以按需增加偏移高度（单位：米），便于可视
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @returns 无
     */
    function computeSurfaceLine(options?: {
        scene: Cesium.Scene;
        positions: Cesium.Cartesian3;
        splitNum?: number;
        minDistance?: number;
        has3dtiles?: boolean;
        objectsToExclude?: object[];
        offset?: number;
        callback: surfaceLineWork_callback;
    }): void;
    /**
     * 求 多个点 的的贴地新坐标（不插值）
     * @param [options = {}] - 参数对象:
     * @param options.scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param options.positions - 坐标数组
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param [options.offset = 0] - 可以按需增加偏移高度（单位：米），便于可视
     * @param options.callback - 异步计算高度完成后 的回调方法
     * @returns 无
     */
    function computeSurfacePoints(options?: {
        scene: Cesium.Scene;
        positions: Cesium.Cartesian3;
        has3dtiles?: boolean;
        objectsToExclude?: object[];
        offset?: number;
        callback: surfaceLineWork_callback;
    }): void;
    /**
     * 异步分段分步计算贴地距离中，每计算完成2个点之间的距离后 的回调方法
     * @param raisedPositions - 当前2个点之间的 贴地坐标数组
     * @param noHeight - 是否计算贴地高度失败，true时标识计算失败了
     * @param index - 坐标数组的index顺序
     */
    type computeStepSurfaceLine_endItem = (raisedPositions: Cesium.Cartesian3[], noHeight: boolean, index: number) => void;
    /**
     * 异步分段分步计算贴地距离中，每计算完成2个点之间的距离后 的回调方法
     * @param arrStepPoints - 二维数组坐标集合，各分段2点之间的贴地点数组的集合
     */
    type computeStepSurfaceLine_end = (arrStepPoints: any[][]) => void;
    /**
     * 按2个坐标点分段分步来计算，求路线的贴地线坐标（插值）
     * @param [options = {}] - 参数对象:
     * @param options.scene - 三维地图场景对象，一般用map.scene或viewer.scene
     * @param options.positions - 坐标数组
     * @param [options.splitNum = 100] - 插值数，等比分割的个数
     * @param [options.minDistance = null] - 插值最小间隔(单位：米)，优先级高于splitNum
     * @param [options.has3dtiles = auto] - 是否在3dtiles模型上分析（模型分析较慢，按需开启）,默认内部根据点的位置自动判断（但可能不准）
     * @param [options.objectsToExclude = null] - 贴模型分析时，排除的不进行贴模型计算的模型对象，可以是： primitives, entities, 或 3D Tiles features
     * @param [options.offset = 0] - 可以按需增加偏移高度（单位：米），便于可视
     * @param options.endItem - 异步计算高度完成后 的回调方法
     * @param options.end - 异步计算高度完成后 的回调方法
     * @param options.callback - 异步计算高度完成后 的回调方法(别名，同end)
     * @returns 无
     */
    function computeStepSurfaceLine(options?: {
        scene: Cesium.Scene;
        positions: Cesium.Cartesian3;
        splitNum?: number;
        minDistance?: number;
        has3dtiles?: boolean;
        objectsToExclude?: object[];
        offset?: number;
        endItem: computeStepSurfaceLine_endItem;
        end: computeStepSurfaceLine_end;
        callback: computeStepSurfaceLine_end;
    }): void;
    /**
     * 计算2点间的 曲线链路的点集（空中曲线）
     * @param startPoint - 开始节点
     * @param endPoint - 结束节点
     * @param angularityFactor - 曲率
     * @param numOfSingleLine - 点集数量
     * @returns 曲线坐标数组
     */
    function getLinkedPointList(startPoint: Cesium.Cartesian3, endPoint: Cesium.Cartesian3, angularityFactor: number, numOfSingleLine: number): Cesium.Cartesian3[];
    /**
     * 计算平行线
     * @param positions - 原始线的坐标数组
     * @param offset - 偏移的距离（单位米），正负决定方向
     * @returns 平行线坐标数组
     */
    function getOffsetLine(positions: Cesium.Cartesian3[], offset: number): Cesium.Cartesian3[];
    /**
     * 截取路线指定最大长度的新路线，
     * 在最后一个点往前截取maxDistance长度。
     * 应用场景： 航迹的 “尾巴线” 的运算
     * @param positions - 路线坐标
     * @param maxDistance - 最大的截取长度
     * @param [options = {}] - 参数对象:
     * @param [options.point = false] - 为true时 只返回计算的maxDistance处的坐标
     * @returns 指定长度的坐标数组 ，options.point为true时，只返回数组的第1个点。
     */
    function sliceByMaxDistance(positions: Cesium.Cartesian3[], maxDistance: number, options?: {
        point?: boolean;
    }): Cesium.Cartesian3[] | Cesium.Cartesian3;
    /**
     * 求 坐标点 的 外包围凸体面(简化只保留边界线坐标)
     * @param coordinates - 经纬度坐标数组,示例：[ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7] ]
     * @returns 经纬度坐标数组,示例：[ [123.123456,32.654321,198.7], [111.123456,22.654321,50.7] ]
     */
    function convex(coordinates: any[][]): any[][];
}

/**
 * 常用静态方法
 */
declare module "Util" {
    /**
     * 判断对象是否为Number类型
     * @param obj - 对象
     * @returns 是否为Number类型
     */
    function isNumber(obj: any): boolean;
    /**
     * 判断对象是否为String类型
     * @param obj - 对象
     * @returns 是否为String类型
     */
    function isString(obj: any): boolean;
    /**
     * 判断对象是否为Boolean类型
     * @param obj - 对象
     * @returns 是否为Boolean类型
     */
    function isBoolean(obj: any): boolean;
    /**
     * 判断对象是否为Object类型
     * @param obj - 对象
     * @returns 是否为Object类型
     */
    function isObject(obj: any): boolean;
    /**
     * 判断对象是否为简单类型（包括：String\Boolean\Number\Array）
     * @param value - 对象
     * @returns 是否为简单类型（包括：String\Boolean\Number\Array）
     */
    function isSimpleType(value: any): boolean;
    /**
     * 格式化数字，返回指定小数位的数字
     * @param num - 数字
     * @param [digits = 0] - 小数位数
     * @returns 返回digits指定小数位的数字
     */
    function formatNum(num: number, digits?: Int): number;
    /**
     * 按指定长度,对数字进行补零，返回指定长度的字符串
     * @param numStr - 数字对象,示例：1234
     * @param n - 指定长度，示例：8
     * @returns 补零后的指定长度的字符串，示例：'00001234'
     */
    function padLeft0(numStr: number | string, n: Int): string;
    /**
     * 根据空格分割字符串，并返回字符串数组（会自动去掉首位空格）
     * @param str - 字符串
     * @returns 分割后的字符串数组
     */
    function splitWords(str: string): String[];
    /**
     * 除去字符串首尾的空格
     * @param str - 字符串
     * @returns 除去首尾空格的字符串
     */
    function trim(str: string): string;
    /**
     * 获取字符串长度，区分中文和英文
     * @param str - 字符串
     * @returns 字符串长度
     */
    function getStrLength(str: string): number;
    /**
     * 根据数据和格式化字符串模板，返回字符串
     * @example
     * var str = mars3d.Util.template("<div>名称：{name}</div>", { name:"火星科技", date:"2017-8-25"} );
     *  //str结果为 : "<div>名称：火星科技</div>"
     * @param str - 格式化字符串模版，属性字段为大括号，如 {name}
     * @param data - 数据对象
     * @param toEmpty - 是否将模板中未匹配项转为空值
     * @returns 返回字符串
     */
    function template(str: string, data: any, toEmpty: boolean): string;
    /**
     * 获取随机唯一uuid字符串,包含数字、大写字母、小写字母
     * @param [prefix = 'M'] - 前缀
     * @returns 字符串
     */
    function uuid(prefix?: string): string;
    /**
     * 获取Popup或Tooltip格式化Html字符串
     * @example
     * //template可以是'all' ，返回数据的全部属性信息
     * tiles3dLayer.bindPopup(function (event) {
     *   var attr = event.graphic.attr
     *   return mars3d.Util.getTemplateHtml({ title: '桥梁', template: 'all', attr: attr })
     * })
     *
     * //template可以是格式化字符串模板
     * var html = mars3d.Util.getTemplateHtml({ title: '火星项目', template:  "名称：{项目名称}<br />类型：{设施类型}<br />面积：{用地面积}亩<br />位置：{具体位置}", attr: item })
     *
     * //可以是数组的template，按数组顺序构造，并转义字段名称
     * //
     * var html = mars3d.Util.getTemplateHtml({
     *   title: '塔杆',
     *   template: [
     *     { field: 'roadName', name: '所属线路' },
     *     { field: 'towerId', name: '杆塔编号' },
     *     { field: '杆塔型号', name: '杆塔型号' },
     *     { field: '杆塔性质', name: '杆塔性质' },
     *     { field: '杆塔类型', name: '杆塔类型' },
     *     { field: '设计单位', name: '设计单位' },
     *     { field: 'height', name: '海拔高度' },
     *   ],
     *   attr: item,
     * })
     * @param [options = {}] - 参数对象:
     * @param options.attr - 属性值
     * @param options.template - 模版配置，支持：'all'、数组、字符串模板，当为数组时支持：
     * @param options.template.field - 字段名称
     * @param options.template.name - 显示的对应自定义名称 *
     * @param [options.template.type] - 默认为label文本，也可以支持：'button'按钮，'html' html内容。
     * @param [options.template.callback] - 当type为'button'按钮时，单击后触发的事件。
     * @param [options.template.html] - 当type为'html'时，对于拼接的html内容。 *
     * @param [options.template.format] - 使用window上有效的格式化js方法名称或function回调方法，来格式化字符串值。
     * @param [options.template.unit] - 追加的计量单位值。
     * @param options.title - 标题
     * @param [options.edit = false] - 是否返回编辑输入框
     * @returns Html字符串
     */
    function getTemplateHtml(options?: {
        attr: any;
        template: {
            field: string;
            name: string;
            type?: string;
            callback?: string;
            html?: string;
            format?: string | ((...params: any[]) => any);
            unit?: string;
        };
        title: string;
        edit?: boolean;
    }): string;
    /**
     * 获取Cesium对象值的最终value值，
     * 因为cesium经常属性或绑定一层，通过本方法可以内部去判断是否有getValue或_value进行取最终value值。
     * @param obj - Cesium对象值
     * @param [ClasName = null] - Cesium的类名，方便识别判断
     * @param [time = Cesium.JulianDate.now()] - 如果具有时间属于时，取指定的时间的值
     * @returns 最终value值
     */
    function getCesiumValue(obj: any, ClasName?: Class, time?: Class): any;
    /**
     * 获取Cesium颜色对象
     * @param color - Cesium的类名，方便识别判断
     * @param [defval] - 默认值
     * @returns 颜色值
     */
    function getCesiumColor(color: string | Cesium.Color, defval?: Cesium.Color): Cesium.Color;
    /**
     * 根据配置信息获取Cesium颜色对象
     * @param style - 配置信息
     * @param style.color - 颜色值
     * @param [style.opacity] - 透明度
     * @param [style.randomColor] - 是否随机色
     * @param [defval = Cesium.Color.YELLOW] - 默认值
     * @returns 颜色值
     */
    function getColorByStyle(style: {
        color: string | Cesium.Color;
        opacity?: number;
        randomColor?: boolean;
    }, defval?: Cesium.Color): Cesium.Color;
    /**
     * 取属性值，简化Cesium内的属性，去掉getValue等，取最简的键值对。
     * 方便popup、tooltip等构造方法使用
     * @param attr - Cesium内的属性对象
     * @param [options = {}] - 参数对象:
     * @param options.onlySimpleType - 是否只获取简易类型的对象
     * @returns 最简的键值对属性对象
     */
    function getAttrVal(attr: any, options?: {
        onlySimpleType: boolean;
    }): any;
    /**
     * 合并对象，对二级子属性为Object的对象也会进行融合。
     * @param [dest] - 目标对象
     * @param sources - 需要融入合并的对象
     * @returns 融合后的对象
     */
    function merge(dest?: any, sources: any): any;
    /**
     * 复制克隆对象
     * @param obj - 原始对象
     * @param [removeKeys = []] - 不复制的属性名 数组
     * @param [level = 5] - 拷贝的层级最大深度,避免死循环
     * @returns 克隆后的对象
     */
    function clone(obj: any, removeKeys?: String[], level?: Int): any;
    /**
     * 随机获取数组中的一个元素
     * @param arr - 数组
     * @returns 获取到的随机元素
     */
    function getArrayRandomOne(arr: any[]): any;
    /**
     * 移除数组中的指定对象
     * @param arr - 数组
     * @param val - 需要移除的数组元素对象
     * @returns 对象是否移除成功
     */
    function removeArrayItem(arr: any[], val: any): boolean;
    /**
     * 根据属性 和symbol配置 取style样式信息
     * @param symbol - symbol配置
     * @param symbol.styleOptions - Style样式，每种不同类型数据都有不同的样式，具体见各矢量数据的style参数。{@link GraphicType}
     * @param [symbol.styleField] - 按 styleField 属性设置不同样式。
     * @param [symbol.styleFieldOptions] - 按styleField值与对应style样式的键值对象。
     * @param [symbol.callback] - 自定义判断处理返回style ，示例：callback: function (attr, styleOpt){  return { color: "#ff0000" };  }
     * @param [attr] - 数据属性对象
     * @param [mergeStyle] - 需要合并到styleOptions的默认Style样式
     * @returns style样式
     */
    function getSymbolStyle(symbol: {
        styleOptions: any;
        styleField?: string;
        styleFieldOptions?: any;
        callback?: (...params: any[]) => any;
    }, attr?: any, mergeStyle?: any): any;
    /**
     * geojson格式 转 arcgis服务的json格式
     * @param geojson - geojson格式
     * @param [idAttr = 'OBJECTID'] - id字段名称
     * @returns arcgis服务的json格式
     */
    function geojsonToArcGIS(geojson: any, idAttr?: string): any;
    /**
     * arcgis服务的json格式 转 geojson格式
     * @param arcgis - arcgis服务的json格式
     * @param [idAttr = 'OBJECTID'] - id字段名称
     * @returns geojson格式
     */
    function arcgisToGeoJSON(arcgis: any, idAttr?: string): any;
    /**
     * 获取GeoJSON中的features数组集合（自动判断数据来源）
     * @param geojson - geojson对象
     * @returns features数组集合
     */
    function getGeoJsonFeatures(geojson: any): object[];
    /**
     * GeoJSON 转为 Graphic构造参数数组（用于创建{@link BaseGraphic}）
     * style有3种方式控制: 1.传type及style参数；2.传symbol参数；3.数据本身的feature.properties.style；
     * 优先级为：1>2>3
     * @param geojson - geojson对象
     * @param [options = {}] - 控制参数
     * @param [option.type] - 转为指定的类型
     * @param [options.style = {}] - Style样式，每种不同类型数据都有不同的样式，具体见各矢量数据的style参数。{@link GraphicType}
     * @param symbol - symbol配置，与style二选一
     * @param [symbol.type] - 标识数据类型
     * @param [symbol.merge] - 是否合并并覆盖json中已有的style，默认不合并，仅适用symbol配置。
     * @param symbol.styleOptions - Style样式，每种不同类型数据都有不同的样式，具体见各矢量数据的style参数。{@link GraphicType}
     * @param [symbol.styleField] - 按 styleField 属性设置不同样式。
     * @param [symbol.styleFieldOptions] - 按styleField值与对应style样式的键值对象。
     * @param [symbol.callback] - 自定义判断处理返回style ，示例：callback: function (attr, styleOpt){  return { color: "#ff0000" };  }
     * @param [options.crs] - 原始数据的坐标系，如'EPSG:3857' （可以从 {@link http://epsg.io }查询）
     * @param [options.hasEdit] - 当需要编辑时可以传true值,指定为Entity类型
     * @returns Graphic构造参数数组（用于创建{@link BaseGraphic}）
     */
    function geoJsonToGraphics(geojson: any, options?: {
        style?: any;
        crs?: string;
        hasEdit?: boolean;
    }, symbol: {
        type?: GraphicType;
        merge?: boolean;
        styleOptions: any;
        styleField?: string;
        styleFieldOptions?: any;
        callback?: (...params: any[]) => any;
    }): object[];
    /**
     * GeoJSON格式的Feature单个对象转为 Graphic构造参数（用于创建{@link BaseGraphic}）
     * @param feature - geojson单个Feature对象
     * @param [options = {}] - 参数，包括：
     * @param [options.type] - 转为指定的类型
     * @param [options.crs] - 原始数据的坐标系，如'EPSG:3857' （可以从 {@link http://epsg.io }查询）
     * @param [options.style = {}] - Style样式，每种不同类型数据都有不同的样式，具体见各矢量数据的style参数。{@link GraphicType}
     * @param [options.hasEdit] - 当需要编辑时可以传true值,指定为Entity类型
     * @returns Graphic构造参数（用于创建{@link BaseGraphic}）
     */
    function featureToGraphic(feature: any, options?: {
        type?: GraphicType;
        crs?: string;
        style?: any;
        hasEdit?: boolean;
    }): any;
    /**
     * 根据当前高度获取地图层级
     * @param altitude - 高度值
     * @returns 地图层级,通常为 0-21
     */
    function heightToZoom(altitude: number): Int;
    /**
     * 根据图层的config的配置信息，自动加上代理等配置返回Resource对象
     * @param config - 图层的配置信息
     * @param config.url - url地址
     * @param [config.proxy] - 加载资源时要使用的代理服务url。
     * @param [config.templateValues] - 一个对象，用于替换Url中的模板值的键/值对
     * @param [config.queryParameters] - 一个对象，其中包含在检索资源时将发送的查询参数。比如：queryParameters: {'access_token': '123-435-456-000'}
     * @param [config.headers] - 一个对象，将发送的其他HTTP标头。比如：headers: { 'X-My-Header': 'valueOfHeader' }
     * @returns Resource对象
     */
    function getUrlResource(config: {
        url: string;
        proxy?: string;
        templateValues?: any;
        queryParameters?: any;
        headers?: any;
    }): Cesium.Resource;
    /**
     * 文字转base64图片
     * @param text - 文字内容
     * @param [textStyle = {}] - 参数对象:
     * @param [textStyle.font = '10px sans-serif'] - 使用的CSS字体。
     * @param [textStyle.textBaseline = 'bottom'] - 文本的基线。
     * @param [textStyle.fill = true] - 是否填充文本。
     * @param [textStyle.fillColor = Cesium.Color.WHITE] - 填充颜色。
     * @param [textStyle.stroke = false] - 是否描边文本。
     * @param [textStyle.strokeWidth = 1] - 文本描边的宽度。
     * @param [textStyle.strokeColor = Cesium.Color.BLACK] - 文本描边的颜色。
     * @param [textStyle.backgroundColor = Cesium.Color.TRANSPARENT] - 画布的背景色。
     * @param [textStyle.padding = 0] - 要在文本周围添加的填充的像素大小。
     * @param [textStyle.outlineWidth] - 边框的宽度。
     * @param [textStyle.outlineColor = fillColor] - 矩形边框的颜色。
     * @returns canvas对象
     */
    function getTextImage(text: string, textStyle?: {
        font?: string;
        textBaseline?: string;
        fill?: boolean;
        fillColor?: Cesium.Color;
        stroke?: boolean;
        strokeWidth?: number;
        strokeColor?: Cesium.Color;
        backgroundColor?: Cesium.Color;
        padding?: number;
        outlineWidth?: number;
        outlineColor?: Cesium.Color;
    }): HTMLCanvasElement;
    /**
     * 获取用于EntityCluster聚合的圆形图标对象
     * @param count - 数字
     * @param [options = {}] - 参数对象:
     * @param [options.radius = 26] - 圆形图标的整体半径大小（单位：像素）
     * @param [options.color = 'rgba(181, 226, 140, 0.6)'] - 圆形图标的背景颜色
     * @param [options.opacity = 0.5] - 圆形图标的透明度
     * @param [options.borderWidth = 5] - 圆形图标的边框宽度（单位：像素），0不显示
     * @param [options.borderColor = 'rgba(110, 204, 57, 0.5)'] - 圆形图标的边框背景颜色
     * @param [options.borderOpacity = 0.6] - 圆形图标边框的透明度
     * @param [options.fontColor = '#ffffff'] - 数字的颜色
     * @returns base64图片对象，包含 data URI 的DOMString。
     */
    function getCircleImage(count: number, options?: {
        radius?: number;
        color?: string;
        opacity?: number;
        borderWidth?: number;
        borderColor?: string;
        borderOpacity?: number;
        fontColor?: string;
    }): DOMString;
    /**
     * 导出下载图片文件
     * @param name - 图片文件名称，不需要后缀名
     * @param base64 - 图片内容，base64格式
     * @returns 无
     */
    function downloadBase64Image(name: string, base64: string): void;
    /**
     * 导出下载文本文件
     * @param fileName - 文件完整名称，需要含后缀名
     * @param string - 文本内容
     * @returns 无
     */
    function downloadFile(fileName: string, string: string): void;
    /**
     * 获取浏览器类型及版本
     * @returns 浏览器类型及版本,示例：{ type: 'Chrome', version: 71 }
     */
    function getExplorerInfo(): any;
    /**
     * 检测当前浏览器是否支持WebGL
     * @returns 是否支持WebGL
     */
    function webglreport(): boolean;
    /**
     * 执行检测浏览器不支持webgl后的alert错误提示弹窗
     * @returns 无
     */
    function webglerror(): void;
    /**
     * 获取当前页面的url中的?传入参数对象集合
     * @returns 参数名与参数值的键值对
     */
    function getRequest(): any;
    /**
     * 获取当前页面的url中的?传入的指定参数值
     * @param name - 指定参数名称
     * @returns 获取到的参数值
     */
    function getRequestByName(name: string): string;
    /**
     * 当前是否是PC电脑浏览器。
     * @returns 是否是PC电脑浏览器。
     */
    function isPCBroswer(): boolean;
    /**
     * 执行alert弹窗
     * @param msg - 弹窗内的内容
     * @param title - 弹窗的标题
     * @returns 无
     */
    function alert(msg: string, title: string): void;
    /**
     * 执行msg提示窗
     * @param msg - 弹窗内的内容
     * @returns 无
     */
    function msg(msg: string): void;
    /**
     * 根据设置的lang参数，获取当前key对应语言的文本内容。
     * @param key - 文本key
     * @param langType - 使用的语言
     * @returns lang参数指定的对应文本内容
     */
    function getLangText(key: string, langType: LangType): void;
}

