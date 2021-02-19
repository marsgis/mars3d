/**
 * Cesium 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */

/**
 * key值：为exampleConfig配置的key值或者fileName值 （为中间节点时是key值，叶结点是fileName值）
 * value值：fontawesome字体icon名
 */
var sideBarIconConfig = {
  scene: 'fa-globe',
  terrian: 'fa-area-chart',
  tileLayer: 'fa-photo',
  mapcontorl: 'fa-cubes',
  layers: 'fa-server',
  graphic: 'fa-puzzle-piece',
  effect: 'fa-rss',
  scenejh: 'fa-soccer-ball-o',
  analysi: 'fa-signal',
  visualization: 'fa-street-view',
}

var exampleConfig = {
  scene: {
    name: '快速开始',
    content: {
      'scene-createMap': {
        name: '创建三维场景',
        content: [
          {
            name: '快速创建地球',
            version: '3.0',
            thumbnail: 'a11_createMap.jpg',
            fileName: 'a11_createMap',
          },
          {
            name: '根据配置文件创建地球',
            version: '3.0',
            thumbnail: 'a11_createMap_url.jpg',
            fileName: 'a11_createMap_url',
          },
          {
            name: '原生Cesium来创建地球(可与第3方SDK结合使用)',
            version: '2.1',
            thumbnail: 'a11_createMap_viewer.jpg',
            fileName: 'a11_createMap_viewer',
          },
        ],
      },
      'scene-options': {
        name: '场景参数化',
        details: '演示 new mars3d.Map() 构造场景时支持的一些参数',
        content: [
          {
            name: ' scene 场景参数',
            version: '3.0',
            thumbnail: 'a13_scene.jpg',
            fileName: 'a13_scene',
          },
          {
            name: 'scene.center 默认视角',
            version: '3.0',
            thumbnail: 'a13_scene_center.jpg',
            fileName: 'a13_scene_center',
          },
          {
            name: 'terrain 三维地形',
            version: '3.0',
            thumbnail: 'a13_terrain.jpg',
            fileName: 'a13_terrain',
          },
          {
            name: 'basemaps 瓦片底图',
            version: '3.0',
            thumbnail: 'a13_basemaps.jpg',
            fileName: 'a13_basemaps',
          },
          {
            name: 'layers 叠加图层',
            version: '3.0',
            thumbnail: 'a13_layers.jpg',
            fileName: 'a13_layers',
          },
          {
            name: 'control 控件',
            version: '3.0',
            thumbnail: 'a13_control.jpg',
            fileName: 'a13_control',
          },
        ],
      },
      'scene-kongzhi': {
        name: '场景控制',
        content: [
          {
            name: '事件监听',
            version: '1.9',
            thumbnail: 'a15_event.jpg',
            fileName: 'a15_event',
          },
          {
            name: '销毁释放地球',
            version: '1.9',
            thumbnail: 'a15_destroy.jpg',
            fileName: 'a15_destroy',
          },
        ],
      },
    },
  },
  terrian: {
    name: '三维地形',
    content: {
      'terrian-layer': {
        name: '地形图层',
        content: [
          {
            name: '地形服务',
            version: '1.7',
            thumbnail: 'b11_terrain.jpg',
            fileName: 'b11_terrain',
          },
          {
            name: '天地图地形',
            version: '2.0',
            thumbnail: 'b11_terrain_tdt.jpg',
            fileName: 'b11_terrain_tdt',
            plugins: 'tdt',
          },
          {
            name: '地形夸张',
            version: '1.7',
            thumbnail: 'b11_terrainExaggeration.jpg',
            fileName: 'b11_terrainExaggeration',
          },
        ],
      },
    },
  },
  tileLayer: {
    name: '瓦片图层',
    content: {
      'tileLayer-online': {
        name: '在线地图服务',
        details: '支持直接加载常用的互联网在线地图服务',
        content: [
          {
            name: '天地图',
            version: '1.1',
            thumbnail: 'c11_tdt.jpg',
            fileName: 'c11_tdt',
          },
          {
            name: '高德',
            version: '1.1',
            thumbnail: 'c11_gaode.jpg',
            fileName: 'c11_gaode',
          },
          {
            name: '腾讯',
            version: '2.1',
            thumbnail: 'c11_tentect.jpg',
            fileName: 'c11_tentect',
          },

          {
            name: '百度 demo',
            version: '1.7',
            thumbnail: 'c11_baidu.jpg',
            fileName: 'c11_baidu',
          },
          {
            name: 'OpenStreetMap（OSM）',
            version: '1.1',
            thumbnail: 'c11_osm.jpg',
            fileName: 'c11_osm',
          },
          {
            name: '谷歌【已被封】',
            version: '1.1',
            thumbnail: 'c11_google.jpg',
            fileName: 'c11_google',
          },
          {
            name: '微软Bing',
            version: '1.1',
            thumbnail: 'c11_bing.jpg',
            fileName: 'c11_bing',
          },
          {
            name: 'Mapbox',
            version: '1.1',
            thumbnail: 'c11_mapbox.jpg',
            fileName: 'c11_mapbox',
          },
          {
            name: 'ArcGIS Online',
            version: '1.1',
            thumbnail: 'c11_arcgis_online.jpg',
            fileName: 'c11_arcgis_online',
          },
          {
            name: 'Cesium Ion服务',
            version: '3.0',
            thumbnail: 'c11_ion.jpg',
            fileName: 'c11_ion',
          },
          {
            name: 'Mapbox矢量瓦片(.pbf)',
            version: '1.6',
            thumbnail: 'c11_mvt.jpg',
            fileName: 'c11_mvt',
            plugins: 'pbf',
          },
        ],
      },
      'tileLayer-type': {
        name: '标准瓦片服务',
        details: '支持加载在离线或私有环境发布的各种标准服务',
        content: [
          {
            name: '本地单张图片',
            version: '1.1',
            thumbnail: 'c15_image.jpg',
            fileName: 'c15_image',
          },
          {
            name: 'xyz金字塔瓦片',
            version: '1.1',
            thumbnail: 'c15_xyz.jpg',
            fileName: 'c15_xyz',
          },
          {
            name: 'arcgis格式瓦片',
            version: '1.4',
            thumbnail: 'c15_arcgis_cache.jpg',
            fileName: 'c15_arcgis_cache',
          },
          {
            name: 'OGC WMS服务',
            version: '1.1',
            thumbnail: 'c15_wms.jpg',
            fileName: 'c15_wms',
          },
          {
            name: 'OGC WMTS服务',
            version: '1.1',
            thumbnail: 'c15_wmts.jpg',
            fileName: 'c15_wmts',
          },
          {
            name: 'ArcGIS Server服务(含瓦片和动态)',
            version: '1.1',
            thumbnail: 'c15_arcgis.jpg',
            fileName: 'c15_arcgis',
          },
          {
            name: '谷歌地球企业版【需部署私服】',
            version: '3.0',
            thumbnail: 'c15_gee.jpg',
            fileName: 'c15_gee',
          },
          {
            name: 'EPSG4490坐标系',
            version: '1.9',
            thumbnail: 'c16_4490.jpg',
            fileName: 'c16_4490',
          },
        ],
      },
      'tileLayer-kongzhi': {
        name: '控制及效果',
        content: [
          {
            name: '瓦片底图的参数',
            version: '1.3',
            thumbnail: 'c20_tileLayer_options.jpg',
            fileName: 'c20_tileLayer_options',
          },
          {
            name: '瓦片加载事件',
            version: '2.1',
            thumbnail: 'c20_tileLayer_event.jpg',
            fileName: 'c20_tileLayer_event',
          },
          {
            name: '双屏对比',
            version: '1.6',
            thumbnail: 'c20_mapCompare.jpg',
            fileName: 'c20_mapCompare',
          },
          {
            name: '鹰眼地图',
            version: '1.8',
            thumbnail: 'c20_overviewmap.jpg',
            fileName: 'c20_overviewmap',
          },
          {
            name: '时空效果(雷达反射率)',
            version: '1.7',
            thumbnail: 'c20_tileLayer_time.gif',
            fileName: 'c20_tileLayer_time',
          },
          {
            name: '绘制反选遮罩层',
            version: '2.1',
            thumbnail: 'c20_mask.jpg',
            fileName: 'c20_mask',
          },
          {
            name: '二三维联动Demo(leaflet+cesium)',
            version: '1.6',
            thumbnail: 'c20_link_leaflet.jpg',
            fileName: 'c20_link_leaflet',
          },
        ],
      },
    },
  },
  mapcontorl: {
    name: '控件',
    content: {
      'inner-cesium': {
        name: '初始化控件',
        details: 'Cesium内置的控件，构造地图时按需传参配置',
        content: [
          {
            name: '底图切换控制',
            version: '1.1.0',
            thumbnail: 'f20_baseLayerPicker.jpg',
            fileName: 'f20_baseLayerPicker',
          },
          {
            name: '偏振立体(VR)',
            version: '1.1.0',
            thumbnail: 'f20_vr.jpg',
            fileName: 'f20_vr',
          },
          {
            name: 'POI兴趣点搜索',
            version: '1.1.0',
            thumbnail: 'f20_geocoder.jpg',
            fileName: 'f20_geocoder',
          },
          {
            name: '控件控制(显示及关闭)',
            version: '2.0.1',
            thumbnail: 'f20_showhide.jpg',
            fileName: 'f20_showhide',
          },
        ],
      },
      'inner-control': {
        name: '内置控件',
        details: 'Mars3D内置的控件，直接按需调用即可',
        content: [
          {
            name: '右键菜单',
            version: '1.8.9',
            thumbnail: 'f10_contextmenu.jpg',
            fileName: 'f10_contextmenu',
          },
          {
            name: 'Popup鼠标单击信息窗',
            version: '1.3.0',
            thumbnail: 'f10_popup.jpg',
            fileName: 'f10_popup',
          },
          {
            name: 'Tooltip 鼠标移入信息窗',
            version: '1.3.0',
            thumbnail: 'f10_tooltip.jpg',
            fileName: 'f10_tooltip',
          },
          {
            name: 'SmallTooltip 鼠标小提示窗',
            version: '1.3.0',
            thumbnail: 'f10_small_tooltip.jpg',
            fileName: 'f10_small_tooltip',
          },
          {
            name: '键盘漫游模式',
            version: '1.9.1',
            thumbnail: 'f15_keyboardRoam.jpg',
            fileName: 'f15_keyboardRoam',
          },
        ],
      },
      'mars-control': {
        name: '自定义控件',
        content: [
          {
            name: '下侧状态栏',
            version: '3.0',
            thumbnail: 'f15_locationBar.jpg',
            fileName: 'f15_locationBar',
          },

          {
            name: '放大缩小按钮',
            version: '1.9.5',
            thumbnail: 'f15_zoomNavigation.jpg',
            fileName: 'f15_zoomNavigation',
          },

          {
            name: '鼠标按下特效',
            version: '3.0',
            thumbnail: 'f15_mouseDownView.jpg',
            fileName: 'f15_mouseDownView',
          },

          {
            name: '导航球+比例尺',
            version: '3.0',
            thumbnail: 'f15_navigation.jpg',
            fileName: 'f15_navigation',
          },
        ],
      },
    },
  },
  layers: {
    name: '矢量图层',
    content: {
      'feature-layer': {
        name: '矢量数据图层',
        content: [
          {
            name: 'graphic 数据图层',
            version: '3.0',
            thumbnail: 'd11_graphicLayer.jpg',
            fileName: 'd11_graphicLayer',
          },
          {
            name: 'glTF 小模型图层',
            version: '3.0',
            thumbnail: 'd12_modelLayer.jpg',
            fileName: 'd12_modelLayer',
          },
          {
            name: '3D Tiles 三维模型图层',
            version: '3.0',
            thumbnail: 'd12_tilesetLayer.jpg',
            fileName: 'd12_tilesetLayer',
          },
          {
            name: 'DIV 图层',
            version: '1.7.6',
            thumbnail: 'e30_divGraphic.jpg',
            fileName: 'e30_divGraphic',
          },
          {
            name: '经纬网图层',
            version: '3.0',
            thumbnail: 'd12_graticuleLayer.jpg',
            fileName: 'd12_graticuleLayer',
          },
        ],
      },
      'feature-file': {
        name: '标准格式文件',
        content: [
          {
            name: 'GeoJson图层',
            version: '2.0',
            thumbnail: 'd13_geojson.jpg',
            fileName: 'd13_geojson',
          },
          {
            name: '标绘GeoJson图层',
            version: '3.0',
            thumbnail: 'd13_geojson_draw.jpg',
            fileName: 'd13_geojson_draw',
          },
          {
            name: '水域GeoJson图层',
            version: '3.0',
            thumbnail: 'd13_geojson_water.gif',
            fileName: 'd13_geojson_water',
          },
          {
            name: 'KML图层',
            version: '1.2',
            thumbnail: 'd13_kml.jpg',
            fileName: 'd13_kml',
          },
          {
            name: 'CZML图层',
            version: '1.2',
            thumbnail: 'd13_czml.jpg',
            fileName: 'd13_czml',
          },
        ],
      },
      'feature-ogc': {
        name: 'WFS矢量服务',
        content: [
          {
            name: 'OGC WFS图层',
            version: '3.0',
            thumbnail: 'd20_wfs.jpg',
            fileName: 'd20_wfs',
          },
          {
            name: 'ArcGIS WFS图层',
            version: '3.0',
            thumbnail: 'd20_arcgis_wfs.jpg',
            fileName: 'd20_arcgis_wfs',
          },
          {
            name: '高德POI图层',
            version: '3.0',
            thumbnail: 'd25_gaode_poi.jpg',
            fileName: 'd25_gaode_poi',
          },
        ],
      },
    },
  },
  graphic: {
    name: '矢量数据',
    content: {
      'feature-entity': {
        name: 'Entity基础矢量对象',
        details: 'Entity 支持各种属性、自定义控制及操作，功能强大但渲染效率要弱些。',
        content: [
          {
            name: 'Label 文字',
            version: '1.5',
            thumbnail: 'e11_entity_label.jpg',
            fileName: 'e11_entity_label',
          },
          {
            name: 'Point 点 ',
            version: '1.5',
            thumbnail: 'e11_entity_point.jpg',
            fileName: 'e11_entity_point',
          },
          {
            name: 'Billboard 图标点',
            version: '1.5',
            thumbnail: 'e11_entity_billboard.jpg',
            fileName: 'e11_entity_billboard',
          },
          {
            name: '字体图片点',
            version: '3.0',
            thumbnail: 'e11_entity_fontBillboard.jpg',
            fileName: 'e11_entity_fontBillboard',
          },
          {
            name: 'Div图片点',
            version: '3.0',
            thumbnail: 'e11_entity_divBillboard.jpg',
            fileName: 'e11_entity_divBillboard',
          },

          {
            name: 'Plane 平面',
            version: '1.5',
            thumbnail: 'e11_entity_plane.jpg',
            fileName: 'e11_entity_plane',
          },
          {
            name: 'Box 盒子',
            version: '1.5',
            thumbnail: 'e11_entity_box.jpg',
            fileName: 'e11_entity_box',
          },
          {
            name: 'Circle 圆、圆柱',
            version: '1.5',
            thumbnail: 'e11_entity_circle.jpg',
            fileName: 'e11_entity_circle',
          },
          {
            name: 'Ellipse 椭圆、椭圆柱',
            version: '1.5',
            thumbnail: 'e11_entity_ellipse.jpg',
            fileName: 'e11_entity_ellipse',
          },
          {
            name: 'Cylinder 圆锥、圆柱',
            version: '1.5',
            thumbnail: 'e11_entity_cylinder.jpg',
            fileName: 'e11_entity_cylinder',
          },
          {
            name: 'Ellipsoid 球、半球、椭球',
            version: '1.5',
            thumbnail: 'e11_entity_ellipsoid.jpg',
            fileName: 'e11_entity_ellipsoid',
          },
          {
            name: 'Model 小模型',
            version: '2.1.2',
            thumbnail: 'e11_entity_model.jpg',
            fileName: 'e11_entity_model',
          },

          {
            name: 'Polyline 线',
            version: '1.5',
            thumbnail: 'e15_entity_polyline.jpg',
            fileName: 'e15_entity_polyline',
          },
          {
            name: '曲线',
            version: '1.5',
            thumbnail: 'e15_entity_polyline_curve.jpg',
            fileName: 'e15_entity_polyline_curve',
          },

          {
            name: 'PolylineVolume 管道线',
            version: '1.5',
            thumbnail: 'e15_entity_polylinevolume.jpg',
            fileName: 'e15_entity_polylinevolume',
          },
          {
            name: 'Corridor 走廊',
            version: '1.5',
            thumbnail: 'e15_entity_corridor.jpg',
            fileName: 'e15_entity_corridor',
          },
          {
            name: 'Wall 墙',
            version: '1.5',
            thumbnail: 'e15_entity_wall.jpg',
            fileName: 'e15_entity_wall',
          },
          {
            name: 'Rectangle 矩形',
            version: '1.5',
            thumbnail: 'e15_entity_rectangle.jpg',
            fileName: 'e15_entity_rectangle',
          },
          {
            name: 'Polygon 面',
            version: '1.5',
            thumbnail: 'e15_entity_polygon.jpg',
            fileName: 'e15_entity_polygon',
          },
          {
            name: '正多边形',
            version: '3.0',
            thumbnail: 'e16_polygon_regular.jpg',
            fileName: 'e16_polygon_regular',
          },
          {
            name: '扇形',
            version: '3.0',
            thumbnail: 'e16_polygon_sector.jpg',
            fileName: 'e16_polygon_sector',
          },
        ],
      },

      'feature-primitive': {
        name: 'Primitive基础矢量对象',
        details: '【该分组示例待完善】Primitive 是更底层的实现方式，渲染效率更高，但功能性较差。',
        content: [
          {
            name: 'Label 文字',
            version: '3.0',
            thumbnail: 'e21_primitive_label.jpg',
            fileName: 'e21_primitive_label',
          },
          {
            name: 'Point 点 ',
            version: '3.0',
            thumbnail: 'e21_primitive_point.jpg',
            fileName: 'e21_primitive_point',
          },
          {
            name: 'Billboard 图标点',
            version: '3.0',
            thumbnail: 'e21_primitive_billboard.jpg',
            fileName: 'e21_primitive_billboard',
          },
          {
            name: 'Plane 平面',
            version: '3.0',
            thumbnail: 'e21_primitive_plane.jpg',
            fileName: 'e21_primitive_plane',
          },
          {
            name: 'Box 盒子',
            version: '3.0',
            thumbnail: 'e21_primitive_box.jpg',
            fileName: 'e21_primitive_box',
          },
          {
            name: 'Circle 圆、椭圆、圆柱',
            version: '3.0',
            thumbnail: 'e21_primitive_circle.jpg',
            fileName: 'e21_primitive_circle',
          },
          {
            name: 'Cylinder 圆锥、圆柱',
            version: '3.0',
            thumbnail: 'e21_primitive_cylinder.jpg',
            fileName: 'e21_primitive_cylinder',
          },
          {
            name: 'Ellipsoid 球、半球、椭球',
            version: '3.0',
            thumbnail: 'e21_primitive_ellipsoid.jpg',
            fileName: 'e21_primitive_ellipsoid',
          },
          {
            name: 'Model 小模型',
            version: '2.1.2',
            thumbnail: 'e21_primitive_model.jpg',
            fileName: 'e21_primitive_model',
          },

          {
            name: 'Polyline 线',
            version: '3.0',
            thumbnail: 'e25_primitive_polyline.jpg',
            fileName: 'e25_primitive_polyline',
          },
          {
            name: 'PolylineVolume 管道线',
            version: '3.0',
            thumbnail: 'e25_primitive_polylinevolume.jpg',
            fileName: 'e25_primitive_polylinevolume',
          },
          {
            name: 'Corridor 走廊',
            version: '3.0',
            thumbnail: 'e25_primitive_corridor.jpg',
            fileName: 'e25_primitive_corridor',
          },
          {
            name: 'Wall 墙',
            version: '3.0',
            thumbnail: 'e25_primitive_wall.jpg',
            fileName: 'e25_primitive_wall',
          },
          {
            name: 'Rectangle 矩形',
            version: '3.0',
            thumbnail: 'e25_primitive_rectangle.jpg',
            fileName: 'e25_primitive_rectangle',
          },
          {
            name: 'Polygon 面',
            version: '3.0',
            thumbnail: 'e25_primitive_polygon.jpg',
            fileName: 'e25_primitive_polygon',
          },
        ],
      },

      'feature-kuozhan': {
        name: '扩展的矢量对象',
        content: [
          {
            name: 'Div文本点',
            version: '1.7.6',
            thumbnail: 'e30_divGraphic.jpg',
            fileName: 'e30_divGraphic',
          },
          {
            name: '光锥体',
            version: '3.0',
            thumbnail: 'e30_lightCone.gif',
            fileName: 'e30_lightCone',
          },
          {
            name: '平放的图标',
            version: '2.1.3',
            thumbnail: 'e30_flatBillboard.jpg',
            fileName: 'e30_flatBillboard',
          },
          {
            name: '粒子效果',
            version: '3.0',
            thumbnail: 'e30_particleSystem.jpg',
            fileName: 'e30_particleSystem',
          },
          {
            name: '相控阵雷达范围',
            version: '1.7.6',
            thumbnail: 'e11_rectangularSensor.gif',
            fileName: 'e11_rectangularSensor',
          },
          {
            name: '动态河流',
            version: '1.9.0',
            thumbnail: 'e35_dynamicRiver.gif',
            fileName: 'e35_dynamicRiver',
          },
          {
            name: '道路 demo',
            version: '1.9.0',
            thumbnail: 'e35_road.jpg',
            fileName: 'e35_road',
          },
          {
            name: '扩散围墙',
            version: '3.0',
            thumbnail: 'e35_diffuseWall.gif',
            fileName: 'e35_diffuseWall',
          },
          {
            name: '走马灯围墙',
            version: '3.0',
            thumbnail: 'e35_scrollWall.jpg',
            fileName: 'e35_scrollWall',
          },
          {
            name: '水域面',
            version: '3.0',
            thumbnail: 'e35_water.jpg',
            fileName: 'e35_water',
          },
        ],
      },

      'feature-video': {
        name: '视频融合应用',
        content: [
          {
            name: '视频材质',
            version: '1.6.9',
            thumbnail: 'e15_entity_material_video.jpg',
            fileName: 'e15_entity_material_video',
          },
          {
            name: '视频材质(HLS协议)',
            version: '1.6.9',
            thumbnail: 'e15_entity_material_video_hls.jpg',
            fileName: 'e15_entity_material_video_hls',
          },
          {
            name: '视频2D投射',
            version: '1.9.0',
            thumbnail: 'e31_video2D.jpg',
            fileName: 'e31_video2D',
          },
          {
            name: '视频2D投射(HLS协议)',
            version: '1.9.0',
            thumbnail: 'e31_video2D_hls.jpg',
            fileName: 'e31_video2D_hls',
          },
          {
            name: '视频3D贴物投射',
            version: '1.8.9',
            thumbnail: 'e31_video3D.jpg',
            fileName: 'e31_video3D',
          },
          {
            name: '视频3D贴物投射(HLS协议)',
            version: '1.8.9',
            thumbnail: 'e31_video3D_hls.jpg',
            fileName: 'e31_video3D_hls',
          },
        ],
      },
      'feature-other': {
        name: '卫星场景对象',
        content: [
          {
            name: '双曲面雷达范围',
            version: '1.8.9',
            thumbnail: 'e36_space_camberRadar.jpg',
            fileName: 'e36_space_camberRadar',
            plugins: 'space',
          },
          {
            name: '圆椎体（竖立朝上）',
            version: '1.8.9',
            thumbnail: 'e36_space_conicSensor_up.jpg',
            fileName: 'e36_space_conicSensor_up',
            plugins: 'space',
          },
          {
            name: '圆椎体',
            version: '1.8.9',
            thumbnail: 'e36_space_conicSensor.jpg',
            fileName: 'e36_space_conicSensor',
            plugins: 'space',
          },
          {
            name: '圆椎体-动态展示',
            version: '1.8.9',
            thumbnail: 'e36_space_conicSensor_dynamic.jpg',
            fileName: 'e36_space_conicSensor_dynamic',
            plugins: 'space',
          },
          {
            name: '目标追踪展示',
            version: '1.8.9',
            thumbnail: 'e36_space_conicSensor_lookAt.jpg',
            fileName: 'e36_space_conicSensor_lookAt',
            plugins: 'space',
          },

          {
            name: '四棱椎体',
            version: '1.8.9',
            thumbnail: 'e36_space_rectSensor.jpg',
            fileName: 'e36_space_rectSensor',
            plugins: 'space',
          },
          {
            name: '卫星视锥体',
            version: '1.8.9',
            thumbnail: 'e36_space_satelliteSensor.jpg',
            fileName: 'e36_space_satelliteSensor',
            plugins: 'space',
          },
          {
            name: '卫星视锥体-动态展示',
            version: '1.8.9',
            thumbnail: 'e36_space_satelliteSensor_dynamic.jpg',
            fileName: 'e36_space_satelliteSensor_dynamic',
            plugins: 'space',
          },

          {
            name: '卫星TLE实时展示',
            version: '1.9.0',
            thumbnail: 'e38_satellite.jpg',
            fileName: 'e38_satellite',
            plugins: 'space',
          },
          {
            name: '卫星TLE实时展示(多相机)',
            version: '1.9.0',
            thumbnail: 'e38_satellite_coneList.jpg',
            fileName: 'e38_satellite_coneList',
            plugins: 'space',
          },
          {
            name: '卫星星下点计算',
            version: '3.0',
            thumbnail: 'e38_satellite_rayEarthPosition.jpg',
            fileName: 'e38_satellite_rayEarthPosition',
            plugins: 'space',
          },
          {
            name: '卫星过境动态展示',
            version: '2.0.2',
            thumbnail: 'e38_satellite_change.jpg',
            fileName: 'e38_satellite_change',
            plugins: 'space',
          },
          {
            name: '多卫星TLE实时展示',
            version: '2.0.2',
            thumbnail: 'e38_satellite_list.jpg',
            fileName: 'e38_satellite_list',
            plugins: 'space',
          },
        ],
      },
      'scene-flyline': {
        name: '飞行漫游路线',
        content: [
          {
            name: '空中漫游',
            version: '1.8.9',
            thumbnail: 'e40_roamLine_air.gif',
            fileName: 'e40_roamLine_air',
          },
          {
            name: '室内漫游',
            version: '2.2.0',
            thumbnail: 'e40_roamLine_indoor.jpg',
            fileName: 'e40_roamLine_indoor',
          },
          {
            name: '行人漫游',
            version: '2.0.2',
            thumbnail: 'e40_roamLine_walk.jpg',
            fileName: 'e40_roamLine_walk',
          },
          {
            name: '贴地表表面漫游',
            version: '1.8.9',
            thumbnail: 'e40_roamLine_ground.gif',
            fileName: 'e40_roamLine_ground ',
          },
          {
            name: '贴模型表面漫游',
            version: '2.0.2',
            thumbnail: 'e40_roamLine_ground_tileset.gif',
            fileName: 'e40_roamLine_ground_tileset ',
          },

          {
            name: '飞行路线',
            version: '1.6.9',
            thumbnail: 'e40_roamLine_plane.jpg',
            fileName: 'e40_roamLine_plane',
          },
          {
            name: '飞行路线(带投射)',
            version: '2.0.5',
            thumbnail: 'e40_roamLine_plane_ray.jpg',
            fileName: 'e40_roamLine_plane_ray',
          },
          {
            name: '多个飞行路线',
            version: '2.1.2',
            thumbnail: 'e40_roamLine_plane_multi.jpg',
            fileName: 'e40_roamLine_plane_multi',
          },
          {
            name: '实时动态轨迹路线',
            version: '2.2.1',
            thumbnail: 'e40_dynamicRoamLine.jpg',
            fileName: 'e40_dynamicRoamLine',
          },
        ],
      },
      'feature-edit': {
        name: '编辑及控制',
        details: '绘制及编辑文字、点、线、面、立体等各类数据',
        content: [
          {
            name: '图上标绘',
            version: '1.7.6',
            thumbnail: 'e60_draw.jpg',
            fileName: 'e60_draw',
          },
          {
            name: '军事标绘',
            version: '1.9.1',
            thumbnail: 'e60_military_plot.jpg',
            fileName: 'e60_military_plot',
          },
        ],
      },
    },
  },
  effect: {
    name: '特效',
    content: {
      'effect-tianqi': {
        name: '天气效果',
        content: [
          {
            name: '雾天气',
            version: '1.9.0',
            thumbnail: 'g10_fog.jpg',
            fileName: 'g10_fog',
          },
          {
            name: '雨天气',
            version: '1.6.9',
            thumbnail: 'g10_rain.jpg',
            fileName: 'g10_rain',
          },
          {
            name: '雪天气',
            version: '1.9.0',
            thumbnail: 'g10_snow.gif',
            fileName: 'g10_snow',
          },
          {
            name: '水面倒影',
            version: '1.9.0',
            thumbnail: 'g10_daoying.jpg',
            fileName: 'g10_daoying',
          },
        ],
      },
      'effect-texiao': {
        name: '其他特效',
        content: [
          {
            name: '泛光特效',
            version: '1.6.9',
            thumbnail: 'g15_bloom.jpg',
            fileName: 'g15_bloom',
          },
          {
            name: '亮度效果',
            version: '1.9.0',
            thumbnail: 'g15_brightness.jpg',
            fileName: 'g15_brightness',
          },
          {
            name: '夜视效果',
            version: '1.9.0',
            thumbnail: 'g15_nightVision.jpg',
            fileName: 'g15_nightVision',
          },
          {
            name: '黑白效果',
            version: '1.9.0',
            thumbnail: 'g15_blackAndWhite.jpg',
            fileName: 'g15_blackAndWhite',
          },
          {
            name: '马赛克效果',
            version: '1.9.0',
            thumbnail: 'g15_mosaic.jpg',
            fileName: 'g15_mosaic',
          },
          {
            name: '景深效果',
            version: '1.9.0',
            thumbnail: 'g15_depthOfField.jpg',
            fileName: 'g15_depthOfField',
          },
        ],
      },
    },
  },
  scenejh: {
    name: '场景交互',
    content: {
      'scene-camera': {
        name: '相机视角控制',
        content: [
          {
            name: '第一人称贴地漫游',
            version: '2.2.0',
            thumbnail: 'g11_firstPersonRoam.jpg',
            fileName: 'g11_firstPersonRoam',
          },
          {
            name: '街景操作习惯',
            version: '2.2.1',
            thumbnail: 'g11_streetView.jpg',
            fileName: 'g11_streetView',
          },
        ],
      },
    },
  },
  analysi: {
    name: '分析',
    content: {
      analysi: {
        name: '空间分析',
        content: [
          {
            name: '量算 (长度、面积、高度、角度)',
            version: '1.6.9',
            thumbnail: 'h11_measure.jpg',
            fileName: 'h11_measure',
          },
          {
            name: '剖面分析',
            version: '1.6.9',
            thumbnail: 'h11_measure_section.jpg',
            fileName: 'h11_measure_section',
          },
          {
            name: '方量分析(体积)',
            version: '1.8.9',
            thumbnail: 'h11_measure_volume.jpg',
            fileName: 'h11_measure_volume',
          },
          {
            name: '通视分析 demo',
            version: '1.9.1',
            thumbnail: 'h11_sightline.jpg',
            fileName: 'h11_sightline',
          },
          {
            name: '可视域分析 ',
            version: '1.8.9',
            thumbnail: 'h11_viewShed3D.jpg',
            fileName: 'h11_viewShed3D',
          },
          {
            name: '地表透明(地下模式)',
            version: '1.8.9',
            thumbnail: 'h11_underground.gif',
            fileName: 'h11_underground',
          },
          {
            name: '天际线描边',
            version: '1.9.0',
            thumbnail: 'h11_skyline.jpg',
            fileName: 'h11_skyline',
          },
        ],
      },
      'analysi-terrain': {
        name: '地形相关',
        content: [
          {
            name: '地形开挖(planes)',
            version: '1.6.9',
            thumbnail: 'h15_terrainPlanClip.jpg',
            fileName: 'h15_terrainPlanClip',
          },
          {
            name: '地形开挖(globe材质)',
            version: '1.8.9',
            thumbnail: 'h15_terrainClip.jpg',
            fileName: 'h15_terrainClip',
          },
          {
            name: '等高线',
            version: '1.6.9',
            thumbnail: 'h15_contourLine.jpg',
            fileName: 'h15_contourLine',
          },
          {
            name: '坡度坡向',
            version: '2.0.3',
            thumbnail: 'h15_slope.jpg',
            fileName: 'h15_slope',
          },
          {
            name: '淹没分析(矢量面)',
            version: '1.6.9',
            thumbnail: 'h15_floodByGraphic.jpg',
            fileName: 'h15_floodByGraphic',
          },
          {
            name: '淹没分析（globe材质）',
            version: '1.8.9',
            thumbnail: 'h15_floodByMaterial.jpg',
            fileName: 'h15_floodByMaterial',
          },
        ],
      },
      'analysi-3dtiles': {
        name: '模型相关',
        content: [
          {
            name: 'gltf模型剖切',
            version: '2.1.0',
            thumbnail: 'h20_modelPlanClip.jpg',
            fileName: 'h20_modelPlanClip',
          },
          {
            name: '3dtiles模型剖切(BIM)',
            version: '1.8.9',
            thumbnail: 'h20_tilesetPlanClip.jpg',
            fileName: 'h20_tilesetPlanClip',
          },
          {
            name: '3dtiles模型剖切(倾斜摄影)',
            version: '2.0.3',
            thumbnail: 'h20_tilesetPlanClip2.jpg',
            fileName: 'h20_tilesetPlanClip2',
          },
          {
            name: '建筑物特效',
            version: '1.9.5',
            thumbnail: 'h20_jzwStyle.jpg',
            fileName: 'h20_jzwStyle',
          },
          {
            name: '建筑物混合遮挡',
            version: '1.9.1',
            thumbnail: 'h20_mixedOcclusion.jpg',
            fileName: 'h20_mixedOcclusion',
          },
          {
            name: '模型压平',
            version: '2.0.1',
            thumbnail: 'h20_tilesetFlat.jpg',
            fileName: 'h20_tilesetFlat',
          },
          {
            name: '模型裁剪开挖',
            version: '2.0.1',
            thumbnail: 'h20_tilesetClip.jpg',
            fileName: 'h20_tilesetClip',
          }, 
        ],
      },
    },
  },
  visualization: {
    name: '可视化',
    content: {
      MapV: {
        name: 'MapV支持',
        content: [
          {
            name: '蜂巢图',
            version: '1.7.6',
            thumbnail: 'm11_mapv_gridHoneycomb.jpg',
            fileName: 'm11_mapv_gridHoneycomb',
          },
          {
            name: '方格图',
            version: '1.7.6',
            thumbnail: 'm11_mapv_gridPoint.jpg',
            fileName: 'm11_mapv_gridPoint',
          },
          {
            name: '微博',
            version: '1.7.6',
            thumbnail: 'm11_mapv_pointWeibo.gif',
            fileName: 'm11_mapv_pointWeibo',
          },
          {
            name: '动态点',
            version: '1.7.6',
            thumbnail: 'm11_mapv_pointTime.gif',
            fileName: 'm11_mapv_pointTime',
          },
          {
            name: '简单线',
            thumbnail: 'm11_mapv_polyline.jpg',
            fileName: 'm11_mapv_polyline',
          },
          {
            name: '强度线',
            version: '1.7.6',
            thumbnail: 'm11_mapv_polylineIntensity.jpg',
            fileName: 'm11_mapv_polylineIntensity',
          },
          {
            name: '动态轨迹',
            version: '1.7.6',
            thumbnail: 'm11_mapv_lineTime.gif',
            fileName: 'm11_mapv_lineTime',
          },
          {
            name: '强边界图',
            version: '1.7.6',
            thumbnail: 'm11_mapv_lineForceEdgeBunding.jpg',
            fileName: 'm11_mapv_lineForceEdgeBunding',
          },
          {
            name: '迁徙图',
            version: '1.7.6',
            thumbnail: 'm11_mapv_qianxi.gif',
            fileName: 'm11_mapv_qianxi',
          },
          {
            name: '大迁徙图',
            version: '1.7.6',
            thumbnail: 'm11_mapv_qianxiTime.jpg',
            fileName: 'm11_mapv_qianxiTime',
          },
          {
            name: '北京',
            version: '1.7.6',
            thumbnail: 'm11_mapv_polygon.jpg',
            fileName: 'm11_mapv_polygon',
          },
        ],
      },
      echarts: {
        name: 'ECharts支持',
        content: [
          {
            name: '散点图 全省经济指标',
            version: '1.6.9',
            thumbnail: 'm15_echarts_sandian1.gif',
            fileName: 'm15_echarts_sandian1',
          },
          {
            name: '散点图 城市空气质量',
            version: '1.6.9',
            thumbnail: 'm15_echarts_sandian2.jpg',
            fileName: 'm15_echarts_sandian2',
          },
          {
            name: '散点图 态势',
            version: '1.6.9',
            thumbnail: 'm15_echarts_sandian3.jpg',
            fileName: 'm15_echarts_sandian3',
          },
          {
            name: '流出线',
            version: '1.6.9',
            thumbnail: 'm15_echarts_line_chu.jpg',
            fileName: 'm15_echarts_line_chu',
          },
          {
            name: '流出线2',
            version: '2.0.6',
            thumbnail: 'm15_echarts_line_chu2.jpg',
            fileName: 'm15_echarts_line_chu2',
          },
          {
            name: '流入线',
            version: '1.6.9',
            thumbnail: 'm15_echarts_line_ru.jpg',
            fileName: 'm15_echarts_line_ru',
          },
          {
            name: '物流运输图',
            version: '1.6.9',
            thumbnail: 'm15_echarts_line1.jpg',
            fileName: 'm15_echarts_line1',
          },
          {
            name: '人口迁徙图',
            version: '1.6.9',
            thumbnail: 'm15_echarts_line2.jpg',
            fileName: 'm15_echarts_line2',
          },
          {
            name: '流向动态效果',
            version: '1.6.9',
            thumbnail: 'm15_echarts_line3.jpg',
            fileName: 'm15_echarts_line3',
          },
          {
            name: '道路拥堵图',
            version: '1.6.9',
            thumbnail: 'm15_echarts_lineroad.jpg',
            fileName: 'm15_echarts_lineroad',
          },
          {
            name: '公交路线热力图',
            version: '1.6.9',
            thumbnail: 'm15_echarts_lineroad2.jpg',
            fileName: 'm15_echarts_lineroad2',
          },
        ],
      },
    },
  },
}

function getVerDiff(oldver) {
  var index = 0
  var arrNew = '序号,分类,子分类,功能名称,版本\n'
  for (var key in exampleConfig) {
    var config = exampleConfig[key]
    if (!config.content) {
      continue
    }

    for (var key2 in config.content) {
      var configItem = config.content[key2]
      if (configItem.content) {
        var examples = configItem.content
        var len = examples && examples.length ? examples.length : 0
        for (var i = 0; i < len; i++) {
          var item = examples[i]
          if (item.version > oldver) {
            arrNew += `${++index},${config.name},${configItem.name},${item.name},${item.version}\n`
          }
        }
      }
    }
  }
  return arrNew
}

function getAllName() {
  var arrNew = ''
  var index = 0
  for (var key in exampleConfig) {
    var config = exampleConfig[key]
    if (!config.content) {
      continue
    }

    index++
    arrNew += `\n\n${index}.${config.name}`

    for (var key2 in config.content) {
      var configItem = config.content[key2]
      if (configItem.content) {
        arrNew += `\n${configItem.name}:`

        var examples = configItem.content
        var len = examples && examples.length ? examples.length : 0
        for (var i = 0; i < len; i++) {
          var item = examples[i]
          if (item.plugins || item.name.indexOf('demo') !== -1) {
            continue
          }

          if (i === 0) {
            arrNew += `${item.name}`
          } else {
            arrNew += `,${item.name}`
          }
        }
      }
    }
  }
  return arrNew
}
