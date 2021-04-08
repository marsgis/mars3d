/**
 * Cesium 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */

/**
 * key值：为exampleConfig配置的key值或者fileName值 （为中间节点时是key值，叶结点是fileName值）
 * value值：fontawesome字体icon名
 */
var sideBarIconConfig = {
  create: 'fa-globe',
  terrian: 'fa-area-chart',
  tileLayer: 'fa-photo',
  mapcontorl: 'fa-briefcase',
  camera: 'fa-cubes',
  layers: 'fa-server',
  graphic: 'fa-puzzle-piece',
  tileset: 'fa-building-o',
  scene: 'fa-cubes',
  scenejh: 'fa-soccer-ball-o',
  analysi: 'fa-futbol-o',
  visualization: 'fa-street-view',
}

var exampleConfig = {
  create: {
    name: '快速开始',
    content: {
      'scene-createMap': {
        name: '创建三维场景',
        content: [
          {
            name: '快速创建地球',
            version: '3.0',
            thumbnail: 'a10_createMap.jpg',
            fileName: 'a10_createMap',
          },
          {
            name: '根据配置文件创建地球',
            version: '3.0',
            thumbnail: 'a10_createMap_url.jpg',
            fileName: 'a10_createMap_url',
          },
          {
            name: '原生Cesium来创建地球(可与第3方SDK结合使用)',
            version: '2.1',
            thumbnail: 'a10_createMap_viewer.jpg',
            fileName: 'a10_createMap_viewer',
          },
        ],
      },
      'scene-options': {
        name: '场景参数化',
        details: '演示 new mars3d.Map() 构造场景时支持的一些参数',
        content: [
          {
            name: 'scene 场景参数',
            version: '3.0',
            thumbnail: 'a15_scene.jpg',
            fileName: 'a15_scene',
          },
          {
            name: 'scene.center 默认视角',
            version: '3.0',
            thumbnail: 'a15_scene_center.jpg',
            fileName: 'a15_scene_center',
          },
          {
            name: 'terrain 三维地形',
            version: '3.0',
            thumbnail: 'a15_terrain.jpg',
            fileName: 'a15_terrain',
          },
          {
            name: 'basemaps 瓦片底图',
            version: '3.0',
            thumbnail: 'a15_basemaps.jpg',
            fileName: 'a15_basemaps',
          },
          {
            name: 'layers 叠加图层',
            version: '3.0',
            thumbnail: 'a15_layers.jpg',
            fileName: 'a15_layers',
          },
          {
            name: 'control 控件',
            version: '3.0',
            thumbnail: 'a15_control.jpg',
            fileName: 'a15_control',
          },
        ],
      },
      'scene-kongzhi': {
        name: '场景基础控制',
        content: [
          {
            name: 'map相关事件',
            version: '1.9',
            thumbnail: 'a20_event.jpg',
            fileName: 'a20_event',
          },
          {
            name: '销毁释放地球',
            version: '1.9',
            thumbnail: 'a20_destroy.jpg',
            fileName: 'a20_destroy',
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
            thumbnail: 'b10_terrain.jpg',
            fileName: 'b10_terrain',
          },
          {
            name: '天地图地形',
            version: '2.0',
            thumbnail: 'b10_terrain_tdt.jpg',
            fileName: 'b10_terrain_tdt',
            plugins: 'tdt',
          },
          {
            name: '地形夸张',
            version: '1.7',
            thumbnail: 'b10_terrainExaggeration.jpg',
            fileName: 'b10_terrainExaggeration',
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
            thumbnail: 'c10_tdt.jpg',
            fileName: 'c10_tdt',
          },
          {
            name: '高德',
            version: '1.1',
            thumbnail: 'c10_gaode.jpg',
            fileName: 'c10_gaode',
          },
          {
            name: '腾讯',
            version: '2.1',
            thumbnail: 'c10_tentect.jpg',
            fileName: 'c10_tentect',
          },

          {
            name: '百度 demo',
            version: '1.7',
            thumbnail: 'c10_baidu.jpg',
            fileName: 'c10_baidu',
          },
          {
            name: 'OpenStreetMap（OSM）',
            version: '1.1',
            thumbnail: 'c10_osm.jpg',
            fileName: 'c10_osm',
          },
          {
            name: '谷歌【已被封】',
            version: '1.1',
            thumbnail: 'c10_google.jpg',
            fileName: 'c10_google',
          },
          {
            name: '微软Bing',
            version: '1.1',
            thumbnail: 'c10_bing.jpg',
            fileName: 'c10_bing',
          },
          {
            name: 'Mapbox',
            version: '1.1',
            thumbnail: 'c10_mapbox.jpg',
            fileName: 'c10_mapbox',
          },
          {
            name: 'ArcGIS Online',
            version: '1.1',
            thumbnail: 'c10_arcgis_online.jpg',
            fileName: 'c10_arcgis_online',
          },
          {
            name: 'Cesium Ion服务',
            version: '3.0',
            thumbnail: 'c10_ion.jpg',
            fileName: 'c10_ion',
          },
          {
            name: 'Mapbox矢量瓦片(.pbf)',
            version: '1.6',
            thumbnail: 'c10_mvt.jpg',
            fileName: 'c10_mvt',
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
            name: 'ArcGIS Server服务',
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
        name: '图层参数及控制',
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
            name: '动态时序图片(雷达图)',
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
            version: '1.1',
            thumbnail: 'd10_baseLayerPicker.jpg',
            fileName: 'd10_baseLayerPicker',
          },
          {
            name: '偏振立体(VR)',
            version: '1.1',
            thumbnail: 'd10_vr.jpg',
            fileName: 'd10_vr',
          },
          {
            name: 'POI兴趣点搜索',
            version: '1.1',
            thumbnail: 'd10_geocoder.jpg',
            fileName: 'd10_geocoder',
          },
          {
            name: '控件控制(显示及关闭)',
            version: '2.0',
            thumbnail: 'd10_showhide.jpg',
            fileName: 'd10_showhide',
          },
        ],
      },
      'inner-control': {
        name: '内置控件',
        details: 'Mars3D内置的控件，直接按需调用即可',
        content: [
          {
            name: '右键菜单',
            version: '1.8',
            thumbnail: 'd15_contextmenu.jpg',
            fileName: 'd15_contextmenu',
          },
          {
            name: 'Popup鼠标单击信息窗',
            version: '1.3',
            thumbnail: 'd15_popup.jpg',
            fileName: 'd15_popup',
          },
          {
            name: 'Tooltip 鼠标移入信息窗',
            version: '1.3',
            thumbnail: 'd15_tooltip.jpg',
            fileName: 'd15_tooltip',
          },
          {
            name: 'SmallTooltip 鼠标小提示窗',
            version: '1.3',
            thumbnail: 'd15_small_tooltip.jpg',
            fileName: 'd15_small_tooltip',
          },
          {
            name: '键盘漫游模式',
            version: '1.9',
            thumbnail: 'd15_keyboardRoam.jpg',
            fileName: 'd15_keyboardRoam',
          },
        ],
      },
      'mars-control': {
        name: '自定义控件',
        content: [
          {
            name: '下侧状态栏',
            version: '3.0',
            thumbnail: 'd20_locationBar.jpg',
            fileName: 'd20_locationBar',
          },
          {
            name: '自定义工具栏按钮',
            version: '3.0',
            thumbnail: 'd20_toolButton.jpg',
            fileName: 'd20_toolButton',
          },
          {
            name: '放大缩小工具栏按钮',
            version: '1.9',
            thumbnail: 'd20_zoomNavigation.jpg',
            fileName: 'd20_zoomNavigation',
          },
          {
            name: '鼠标按下特效',
            version: '3.0',
            thumbnail: 'd20_mouseDownView.jpg',
            fileName: 'd20_mouseDownView',
          },

          {
            name: '导航球+比例尺',
            version: '3.0',
            thumbnail: 'd20_navigation.jpg',
            fileName: 'd20_navigation',
          },

          {
            name: '鹰眼地图',
            version: '1.8',
            thumbnail: 'd20_overviewmap.jpg',
            fileName: 'd20_overviewmap',
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
            thumbnail: 'e10_graphicLayer.jpg',
            fileName: 'e10_graphicLayer',
          },
          {
            name: 'DIV 图层',
            version: '1.7',
            thumbnail: 'f30_divGraphic.jpg',
            fileName: 'f30_divGraphic',
          },
        ],
      },
      'feature-3dtiles': {
        name: '三维模型图层',
        content: [
          {
            name: 'glTF 小模型图层',
            version: '3.0',
            thumbnail: 'e15_modelLayer.jpg',
            fileName: 'e15_modelLayer',
          },
          {
            name: '3D Tiles 三维模型图层',
            version: '3.0',
            thumbnail: 'e15_tilesetLayer.jpg',
            fileName: 'e15_tilesetLayer',
          },
        ],
      },
      'feature-file': {
        name: '标准格式文件',
        content: [
          {
            name: 'GeoJson图层',
            version: '2.0',
            thumbnail: 'e20_geojson.jpg',
            fileName: 'e20_geojson',
          },
          {
            name: '立体建筑物GeoJson图层',
            version: '3.0',
            thumbnail: 'e20_geojson_buildings.jpg',
            fileName: 'e20_geojson_buildings',
          },
          {
            name: '水域GeoJson图层',
            version: '3.0',
            thumbnail: 'e20_geojson_water.gif',
            fileName: 'e20_geojson_water',
          },
          {
            name: '标绘GeoJson图层',
            version: '3.0',
            thumbnail: 'e20_geojson_draw.jpg',
            fileName: 'e20_geojson_draw',
          },
          {
            name: 'KML图层',
            version: '1.2',
            thumbnail: 'e21_kml.jpg',
            fileName: 'e21_kml',
          },
          {
            name: 'CZML图层',
            version: '1.2',
            thumbnail: 'e21_czml.jpg',
            fileName: 'e21_czml',
          },
        ],
      },
      'feature-wfs': {
        name: 'WFS矢量服务',
        content: [
          {
            name: 'ArcGIS Server动态图层',
            version: '2.1',
            thumbnail: 'e25_arcgis_dynamic.jpg',
            fileName: 'e25_arcgis_dynamic',
          },
          {
            name: 'ArcGIS WFS图层',
            version: '3.0',
            thumbnail: 'e25_arcgis_wfs.jpg',
            fileName: 'e25_arcgis_wfs',
            plugins: 'esri',
          },
          {
            name: 'ArcGIS WFS图层贴模型',
            version: '3.0',
            thumbnail: 'e25_arcgis_wfs_surface.jpg',
            fileName: 'e25_arcgis_wfs_surface',
            plugins: 'esri',
          },
          {
            name: 'OGC WFS图层',
            version: '3.0',
            thumbnail: 'e25_wfs.jpg',
            fileName: 'e25_wfs',
          },
        ],
      },
      'feature-other': {
        name: '其他矢量图层',
        content: [
          {
            name: '大数据点Lod加载',
            version: '1.7',
            thumbnail: 'e30_lodEntityLayer.jpg',
            fileName: 'e30_lodEntityLayer',
          },
          {
            name: '高德POI图层',
            version: '3.0',
            thumbnail: 'e30_gaode_poi.jpg',
            fileName: 'e30_gaode_poi',
          },
          {
            name: '三维地名服务',
            version: '2.0',
            thumbnail: 'e30_tdtDmLayer.jpg',
            fileName: 'e30_tdtDmLayer',
            plugins: 'tdt',
          },
          {
            name: '经纬网图层',
            version: '3.0',
            thumbnail: 'e30_graticuleLayer.jpg',
            fileName: 'e30_graticuleLayer',
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
            thumbnail: 'f10_entity_label.jpg',
            fileName: 'f10_entity_label',
          },
          {
            name: 'Point 点 ',
            version: '1.5',
            thumbnail: 'f10_entity_point.jpg',
            fileName: 'f10_entity_point',
          },
          {
            name: 'Billboard 图标点',
            version: '1.5',
            thumbnail: 'f10_entity_billboard.jpg',
            fileName: 'f10_entity_billboard',
          },
          {
            name: '字体图片点',
            version: '3.0',
            thumbnail: 'f10_entity_fontBillboard.jpg',
            fileName: 'f10_entity_fontBillboard',
          },
          {
            name: 'Div图片点',
            version: '3.0',
            thumbnail: 'f10_entity_divBillboard.jpg',
            fileName: 'f10_entity_divBillboard',
          },

          {
            name: 'Plane 平面',
            version: '1.5',
            thumbnail: 'f10_entity_plane.jpg',
            fileName: 'f10_entity_plane',
          },
          {
            name: 'Box 盒子',
            version: '1.5',
            thumbnail: 'f10_entity_box.jpg',
            fileName: 'f10_entity_box',
          },
          {
            name: 'Circle 圆、圆柱',
            version: '1.5',
            thumbnail: 'f10_entity_circle.jpg',
            fileName: 'f10_entity_circle',
          },
          {
            name: 'Ellipse 椭圆、椭圆柱',
            version: '1.5',
            thumbnail: 'f10_entity_ellipse.jpg',
            fileName: 'f10_entity_ellipse',
          },
          {
            name: 'Cylinder 圆锥',
            version: '1.5',
            thumbnail: 'f10_entity_cylinder.jpg',
            fileName: 'f10_entity_cylinder',
          },
          {
            name: 'Ellipsoid 球、半球、椭球',
            version: '1.5',
            thumbnail: 'f10_entity_ellipsoid.jpg',
            fileName: 'f10_entity_ellipsoid',
          },
          {
            name: 'Model 小模型',
            version: '2.1',
            thumbnail: 'f10_entity_model.jpg',
            fileName: 'f10_entity_model',
          },
          {
            name: 'Path 轨迹',
            version: '3.0',
            thumbnail: 'f15_entity_path.jpg',
            fileName: 'f15_entity_path',
          },

          {
            name: 'Polyline 线',
            version: '1.5',
            thumbnail: 'f15_entity_polyline.jpg',
            fileName: 'f15_entity_polyline',
          },
          {
            name: '曲线',
            version: '1.5',
            thumbnail: 'f15_entity_polyline_curve.jpg',
            fileName: 'f15_entity_polyline_curve',
          },

          {
            name: 'PolylineVolume 管道线',
            version: '1.5',
            thumbnail: 'f15_entity_polylinevolume.jpg',
            fileName: 'f15_entity_polylinevolume',
          },
          {
            name: 'Corridor 走廊',
            version: '1.5',
            thumbnail: 'f15_entity_corridor.jpg',
            fileName: 'f15_entity_corridor',
          },
          {
            name: 'Wall 墙',
            version: '1.5',
            thumbnail: 'f15_entity_wall.jpg',
            fileName: 'f15_entity_wall',
          },
          {
            name: 'Rectangle 矩形',
            version: '1.5',
            thumbnail: 'f15_entity_rectangle.jpg',
            fileName: 'f15_entity_rectangle',
          },
          {
            name: 'Polygon 面',
            version: '1.5',
            thumbnail: 'f15_entity_polygon.jpg',
            fileName: 'f15_entity_polygon',
          },
          {
            name: '正多边形',
            version: '3.0',
            thumbnail: 'f16_polygon_regular.jpg',
            fileName: 'f16_polygon_regular',
          },
          {
            name: '扇形',
            version: '3.0',
            thumbnail: 'f16_polygon_sector.jpg',
            fileName: 'f16_polygon_sector',
          },
          {
            name: '文字贴图',
            version: '1.8',
            thumbnail: 'f16_textMaterialProperty.jpg',
            fileName: 'f16_textMaterialProperty',
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
            thumbnail: 'f20_primitive_label.jpg',
            fileName: 'f20_primitive_label',
          },
          {
            name: 'Point 点 ',
            version: '3.0',
            thumbnail: 'f20_primitive_point.jpg',
            fileName: 'f20_primitive_point',
          },
          {
            name: 'Billboard 图标点',
            version: '3.0',
            thumbnail: 'f20_primitive_billboard.jpg',
            fileName: 'f20_primitive_billboard',
          },
          {
            name: 'Plane 平面',
            version: '3.0',
            thumbnail: 'f20_primitive_plane.jpg',
            fileName: 'f20_primitive_plane',
          },
          {
            name: 'Box 盒子',
            version: '3.0',
            thumbnail: 'f20_primitive_box.jpg',
            fileName: 'f20_primitive_box',
          },
          {
            name: 'Circle 圆、椭圆、圆柱',
            version: '3.0',
            thumbnail: 'f20_primitive_circle.jpg',
            fileName: 'f20_primitive_circle',
          },
          {
            name: 'Cylinder 圆锥、圆柱',
            version: '3.0',
            thumbnail: 'f20_primitive_cylinder.jpg',
            fileName: 'f20_primitive_cylinder',
          },
          {
            name: 'Ellipsoid 球、半球、椭球',
            version: '3.0',
            thumbnail: 'f20_primitive_ellipsoid.jpg',
            fileName: 'f20_primitive_ellipsoid',
          },
          {
            name: 'Model 小模型',
            version: '2.1',
            thumbnail: 'f20_primitive_model.jpg',
            fileName: 'f20_primitive_model',
          },

          {
            name: 'Polyline 线',
            version: '3.0',
            thumbnail: 'f25_primitive_polyline.jpg',
            fileName: 'f25_primitive_polyline',
          },
          {
            name: 'PolylineVolume 管道线',
            version: '3.0',
            thumbnail: 'f25_primitive_polylinevolume.jpg',
            fileName: 'f25_primitive_polylinevolume',
          },
          {
            name: 'Corridor 走廊',
            version: '3.0',
            thumbnail: 'f25_primitive_corridor.jpg',
            fileName: 'f25_primitive_corridor',
          },
          {
            name: 'Wall 墙',
            version: '3.0',
            thumbnail: 'f25_primitive_wall.jpg',
            fileName: 'f25_primitive_wall',
          },
          {
            name: 'Rectangle 矩形',
            version: '3.0',
            thumbnail: 'f25_primitive_rectangle.jpg',
            fileName: 'f25_primitive_rectangle',
          },
          {
            name: 'Polygon 面',
            version: '3.0',
            thumbnail: 'f25_primitive_polygon.jpg',
            fileName: 'f25_primitive_polygon',
          },
          {
            name: '文字贴图',
            version: '1.8',
            thumbnail: 'f25_textMaterial.jpg',
            fileName: 'f25_textMaterial',
          },
        ],
      },

      'feature-kuozhan': {
        name: '扩展的矢量对象',
        content: [
          {
            name: 'Div文本点',
            version: '1.7',
            thumbnail: 'f30_divGraphic.jpg',
            fileName: 'f30_divGraphic',
          },
          {
            name: '光锥体',
            version: '3.0',
            thumbnail: 'f30_lightCone.gif',
            fileName: 'f30_lightCone',
          },
          {
            name: '平放的图标',
            version: '2.1',
            thumbnail: 'f30_flatBillboard.jpg',
            fileName: 'f30_flatBillboard',
          },
          {
            name: '粒子效果',
            version: '3.0',
            thumbnail: 'f30_particleSystem.jpg',
            fileName: 'f30_particleSystem',
          },
          {
            name: '相控阵雷达范围',
            version: '1.7',
            thumbnail: 'f30_rectangularSensor.gif',
            fileName: 'f30_rectangularSensor',
          },
          {
            name: '动态河流',
            version: '1.9',
            thumbnail: 'f35_dynamicRiver.gif',
            fileName: 'f35_dynamicRiver',
          },
          {
            name: '道路',
            version: '1.9',
            thumbnail: 'f35_road.jpg',
            fileName: 'f35_road',
          },
          {
            name: '扩散围墙',
            version: '3.0',
            thumbnail: 'f35_diffuseWall.gif',
            fileName: 'f35_diffuseWall',
          },
          {
            name: '走马灯围墙',
            version: '3.0',
            thumbnail: 'f35_scrollWall.jpg',
            fileName: 'f35_scrollWall',
          },
          {
            name: '水域面',
            version: '3.0',
            thumbnail: 'f35_water.jpg',
            fileName: 'f35_water',
          },

          {
            name: '井',
            version: '3.0',
            thumbnail: 'f35_pit.jpg',
            fileName: 'f35_pit',
          },
        ],
      },

      'feature-dianzhuang': {
        name: '点状对象应用案例',
        content: [
          {
            name: '图标点+文字(entity方式含聚合)',
            version: '1.4',
            thumbnail: 'f40_billboardEntity.jpg',
            fileName: 'f40_billboardEntity',
          },
          {
            name: '图标点+文字(primitive方式)',
            version: '1.89',
            thumbnail: 'f40_billboardPrimitive.jpg',
            fileName: 'f40_billboardPrimitive',
          },
          {
            name: '动态效果点',
            version: '1.7',
            thumbnail: 'f40_divGraphic_daxue.gif',
            fileName: 'f40_divGraphic_daxue',
          },
          {
            name: '统计柱状图',
            version: '1.7',
            thumbnail: 'f40_cylinder_gdp.jpg',
            fileName: 'f40_cylinder_gdp',
          },
          {
            name: '水闸放水效果',
            version: '1.9',
            thumbnail: 'f40_particleSystem_water.gif',
            fileName: 'f40_particleSystem_water',
          },
          {
            name: '卫星正摄动画',
            version: '3.0',
            thumbnail: 'f40_weixin.gif',
            fileName: 'f40_weixin',
          },
          {
            name: '外太空物',
            version: '2.0',
            thumbnail: 'f40_space_point.jpg',
            fileName: 'f40_space_point',
          },
          {
            name: '危化品扩散效果',
            version: '2.0',
            thumbnail: 'f40_diffusion.jpg',
            fileName: 'f40_diffusion',
          },
          {
            name: '扫描效果',
            version: '3.0',
            thumbnail: 'f40_scanCircle.jpg',
            fileName: 'f40_scanCircle',
          },
        ],
      },
      'feature-xianzhuang': {
        name: '线面状对象应用案例',
        content: [
          {
            name: '光晕线',
            version: '1.2',
            thumbnail: 'f45_glowline.jpg',
            fileName: 'f45_glowline',
          },
          {
            name: '柱状线',
            version: '1.2',
            thumbnail: 'f45_myGlobeDataSource.jpg',
            fileName: 'f45_myGlobeDataSource',
          },
          {
            name: '一带一路',
            version: '2.2',
            thumbnail: 'f45_oneBeltOneRoad.jpg',
            fileName: 'f45_oneBeltOneRoad',
          },
          {
            name: '迁徙效果',
            version: '1.7',
            thumbnail: 'f45_line_qx.gif',
            fileName: 'f45_line_qx',
          },
          {
            name: '气象流动线',
            version: '2.1',
            thumbnail: 'f45_line_wind.gif',
            fileName: 'f45_line_wind',
          },
          {
            name: '北京公交线(OD线)',
            version: '2.2',
            thumbnail: 'f45_odline.jpg',
            fileName: 'f45_odline',
          },
          {
            name: '高压电线(自动计算线)',
            version: '1.5',
            thumbnail: 'f45_tower.jpg',
            fileName: 'f45_tower',
          },
          {
            name: '动态轨迹路线',
            version: '1.6',
            thumbnail: 'f45_flypath.jpg',
            fileName: 'f45_flypath',
          },
          {
            name: '矿区岩层效果',
            version: '2.0',
            thumbnail: 'f45_kuangqu.jpg',
            fileName: 'f45_kuangqu',
          },
          {
            name: '立体户型图',
            version: '3.0',
            thumbnail: 'f45_huxing.jpg',
            fileName: 'f45_huxing',
          },
        ],
      },
      'feature-gltf': {
        name: 'gltf小模型相关控制',
        content: [
          {
            name: 'gltf模型标绘(含参数编辑)',
            version: '1.7',
            thumbnail: 'f50_draw_gltf.jpg',
            fileName: 'f50_draw_gltf',
          },
          {
            name: 'gltf零部件控制(运载火箭)',
            version: '1.8',
            thumbnail: 'f50_gltf_rocket.jpg',
            fileName: 'f50_gltf_rocket',
          },
          {
            name: '模型自旋转',
            version: '1.8',
            thumbnail: 'f50_gltf_rotate.jpg',
            fileName: 'f50_gltf_rotate',
          },
        ],
      },
      'feature-video': {
        name: '视频融合应用',
        content: [
          {
            name: '视频材质',
            version: '1.6',
            thumbnail: 'f55_videoMaterial.jpg',
            fileName: 'f55_videoMaterial',
          },
          {
            name: '视频材质(HLS协议)',
            version: '1.6',
            thumbnail: 'f55_videoMaterial_hls.jpg',
            fileName: 'f55_videoMaterial_hls',
          },
          {
            name: '视频2D投射',
            version: '1.9',
            thumbnail: 'f55_video2D.jpg',
            fileName: 'f55_video2D',
          },
          {
            name: '视频2D投射(HLS协议)',
            version: '1.9',
            thumbnail: 'f55_video2D_hls.jpg',
            fileName: 'f55_video2D_hls',
          },
          {
            name: '视频3D贴物投射',
            version: '1.8',
            thumbnail: 'f55_video3D.jpg',
            fileName: 'f55_video3D',
          },
          {
            name: '视频3D贴物投射(HLS协议)',
            version: '1.8',
            thumbnail: 'f55_video3D_hls.jpg',
            fileName: 'f55_video3D_hls',
          },
        ],
      },
      'feature-other': {
        name: '卫星场景对象',
        content: [
          {
            name: '双曲面雷达范围',
            version: '1.8',
            thumbnail: 'f60_space_camberRadar.jpg',
            fileName: 'f60_space_camberRadar',
            plugins: 'space',
          },
          {
            name: '圆椎体（竖立朝上）',
            version: '1.8',
            thumbnail: 'f60_space_conicSensor_up.jpg',
            fileName: 'f60_space_conicSensor_up',
            plugins: 'space',
          },
          {
            name: '圆椎体',
            version: '1.8',
            thumbnail: 'f60_space_conicSensor.jpg',
            fileName: 'f60_space_conicSensor',
            plugins: 'space',
          },
          {
            name: '圆椎体-动态展示',
            version: '1.8',
            thumbnail: 'f60_space_conicSensor_dynamic.jpg',
            fileName: 'f60_space_conicSensor_dynamic',
            plugins: 'space',
          },
          {
            name: '目标追踪展示',
            version: '1.8',
            thumbnail: 'f60_space_conicSensor_lookAt.jpg',
            fileName: 'f60_space_conicSensor_lookAt',
            plugins: 'space',
          },

          {
            name: '四棱椎体',
            version: '1.8',
            thumbnail: 'f60_space_rectSensor.jpg',
            fileName: 'f60_space_rectSensor',
            plugins: 'space',
          },
          {
            name: '卫星视锥体',
            version: '1.8',
            thumbnail: 'f60_space_satelliteSensor.jpg',
            fileName: 'f60_space_satelliteSensor',
            plugins: 'space',
          },
          {
            name: '卫星视锥体-动态展示',
            version: '1.8',
            thumbnail: 'f60_space_satelliteSensor_dynamic.jpg',
            fileName: 'f60_space_satelliteSensor_dynamic',
            plugins: 'space',
          },

          {
            name: '卫星TLE实时展示',
            version: '1.9',
            thumbnail: 'f61_satellite.jpg',
            fileName: 'f61_satellite',
            plugins: 'space',
          },
          {
            name: '卫星TLE实时展示(多相机)',
            version: '1.9',
            thumbnail: 'f61_satellite_coneList.jpg',
            fileName: 'f61_satellite_coneList',
            plugins: 'space',
          },
          {
            name: '卫星星下点计算',
            version: '3.0',
            thumbnail: 'f61_satellite_rayEarthPosition.jpg',
            fileName: 'f61_satellite_rayEarthPosition',
            plugins: 'space',
          },
          {
            name: '卫星过境动态展示',
            version: '2.0',
            thumbnail: 'f61_satellite_change.jpg',
            fileName: 'f61_satellite_change',
            plugins: 'space',
          },
          {
            name: '多卫星TLE实时展示',
            version: '2.0',
            thumbnail: 'f61_satellite_list.jpg',
            fileName: 'f61_satellite_list',
            plugins: 'space',
          },
        ],
      },
      'scene-flyline': {
        name: '飞行漫游路线',
        content: [
          {
            name: '空中漫游',
            version: '1.8',
            thumbnail: 'f65_roamLine_air.gif',
            fileName: 'f65_roamLine_air',
          },
          {
            name: '室内漫游',
            version: '2.2',
            thumbnail: 'f65_roamLine_indoor.jpg',
            fileName: 'f65_roamLine_indoor',
          },
          {
            name: '行人漫游',
            version: '2.0',
            thumbnail: 'f65_roamLine_walk.jpg',
            fileName: 'f65_roamLine_walk',
          },
          {
            name: '贴地表表面漫游',
            version: '1.8',
            thumbnail: 'f65_roamLine_ground.gif',
            fileName: 'f65_roamLine_ground ',
          },
          {
            name: '贴模型表面漫游',
            version: '2.0',
            thumbnail: 'f65_roamLine_ground_tileset.gif',
            fileName: 'f65_roamLine_ground_tileset ',
          },

          {
            name: '飞行路线',
            version: '1.6',
            thumbnail: 'f65_roamLine_plane.jpg',
            fileName: 'f65_roamLine_plane',
          },
          {
            name: '飞行路线(带投射)',
            version: '2.0',
            thumbnail: 'f65_roamLine_plane_ray.jpg',
            fileName: 'f65_roamLine_plane_ray',
          },
          {
            name: '多个飞行路线',
            version: '2.1',
            thumbnail: 'f65_roamLine_plane_multi.jpg',
            fileName: 'f65_roamLine_plane_multi',
          },
          {
            name: '实时动态轨迹路线',
            version: '2.2',
            thumbnail: 'f65_dynamicRoamLine.jpg',
            fileName: 'f65_dynamicRoamLine',
          },
        ],
      },

      'feature-online': {
        name: '服务数据查询',
        content: [
          {
            name: 'ArcGIS Server矢量服务查询',
            version: '2.0',
            thumbnail: 'f70_query_arcgis.jpg',
            fileName: 'f70_query_arcgis',
            plugins: 'esri',
          },
          {
            name: 'GeoServer矢量服务查询(OGC WFS)',
            version: '1.9',
            thumbnail: 'f70_query_geoserver.jpg',
            fileName: 'f70_query_geoserver',
          },
          {
            name: '高德POI点查询',
            version: '1.9',
            thumbnail: 'f70_query_gaodePOI.jpg',
            fileName: 'f70_query_gaodePOI',
          },
          {
            name: '高德路径规划查询',
            version: '1.9',
            thumbnail: 'f70_query_gaodeRoute.jpg',
            fileName: 'f70_query_gaodeRoute',
          },
          {
            name: '高德路径规划查询(多条)',
            version: '1.9',
            thumbnail: 'f70_query_gaodeRouteList.jpg',
            fileName: 'f70_query_gaodeRouteList',
          },
        ],
      },
      'feature-edit': {
        name: '编辑及控制',
        details: '绘制及编辑文字、点、线、面、立体等各类数据',
        content: [
          {
            name: '图上标绘',
            version: '1.7',
            thumbnail: 'f80_draw.jpg',
            fileName: 'f80_draw',
          },
          {
            name: '军事标绘',
            version: '1.9',
            thumbnail: 'f80_military_plot.jpg',
            fileName: 'f80_military_plot',
          },
          {
            name: '框选数据',
            version: '1.8',
            thumbnail: 'f80_isInPoly.jpg',
            fileName: 'f80_isInPoly',
          },
          {
            name: '线面内插值计算',
            version: '2.0',
            thumbnail: 'f80_interPoly.jpg',
            fileName: 'f80_interPoly',
          },
        ],
      },
    },
  },
  tileset: {
    name: '三维模型',
    content: {
      'tileset-layer': {
        name: '各类3dtiles模型',
        content: [
          {
            name: '厂房(单模型无地球场景)',
            version: '1.7',
            thumbnail: 'g10_onlyModel.jpg',
            fileName: 'g10_onlyModel',
          },
          {
            name: '县城城区（倾斜摄影）',
            version: '1.5',
            thumbnail: 'e15_tilesetLayer_shequ.jpg',
            fileName: 'e15_tilesetLayer',
            params: 'data=qx-shequ',
          },
          {
            name: '文庙（倾斜摄影）',
            version: '1.5',
            thumbnail: 'e15_tilesetLayer_simiao.jpg',
            fileName: 'e15_tilesetLayer',
            params: 'data=qx-simiao',
          },
          {
            name: '桥梁(BIM建模)',
            version: '2.0',
            thumbnail: 'g10_bim.jpg',
            fileName: 'g10_bim',
          },
          {
            name: '教学楼(BIM建模)',
            version: '2.0',
            thumbnail: 'g10_bim_shinei.jpg',
            fileName: 'g10_bim_shinei',
          },
          {
            name: '石化厂（人工建模）',
            version: '1.5',
            thumbnail: 'e15_tilesetLayer_shihua.jpg',
            fileName: 'e15_tilesetLayer',
            params: 'data=max-shihua',
          },
          {
            name: '地下管网（人工建模）',
            version: '2.0',
            thumbnail: 'g10_piping.jpg',
            fileName: 'g10_piping',
          },
          {
            name: '成都市区（城市白模）',
            version: '1.9',
            thumbnail: 'k20_jzwStyle.jpg',
            fileName: 'k20_jzwStyle',
          },
          {
            name: '全球城市白膜(OSM在线)',
            version: '3.0',
            thumbnail: 'g10_osmBuildingsLayer.jpg',
            fileName: 'g10_osmBuildingsLayer',
          },
        ],
      },
      '3dtiles-dth': {
        name: '三维模型单体化',
        content: [
          {
            name: '3dtiles数据内单体化(建筑物或人工建模)',
            version: '1.5',
            thumbnail: 'g15_dth_inside.jpg',
            fileName: 'g15_dth_inside',
          },
          {
            name: '3dtiles单体化(叠加ClassificationType)',
            version: '1.9',
            thumbnail: 'g15_dth_classificationType.jpg',
            fileName: 'g15_dth_classificationType',
          },

          {
            name: '矢量单体化(GeoJson叠加)',
            version: '1.6',
            thumbnail: 'g15_dth_fd.jpg',
            fileName: 'g15_dth_fd',
          },
          {
            name: '矢量单体化编辑(GeoJson叠加)',
            version: '1.9',
            thumbnail: 'g15_dth_fd_edit.jpg',
            fileName: 'g15_dth_fd_edit',
          },
          {
            name: '矢量单体化(WFS矢量叠加)',
            version: '2.0',
            thumbnail: 'g15_dth_wfs.jpg',
            fileName: 'g15_dth_wfs',
          },
          {
            name: '分层分户矢量单体化(GeoJson叠加)',
            version: '1.9',
            thumbnail: 'g15_dth_fcfh.jpg',
            fileName: 'g15_dth_fcfh',
          },
        ],
      },
      '3dtiles-edit': {
        name: '数据编辑控制',
        content: [
          {
            name: '3dtiles模型位置及参数编辑',
            version: '2.2',
            thumbnail: 'g20_3dtiles_edit.jpg',
            fileName: 'g20_3dtiles_edit',
          },
          {
            name: '模型位置XYZ平移(不贴球面)',
            version: '1.6',
            thumbnail: 'g20_3dtiles_move.jpg',
            fileName: 'g20_3dtiles_move',
          },
          // {
          //   name: '国测局坐标系纠偏',
          //   version: '2.0',
          //   thumbnail: '37_crs.jpg',
          //   fileName: '37_crs',
          // },
        ],
      },
    },
  },
  scene: {
    name: '场景控制',
    content: {
      'scene-kongzhi': {
        name: '二三维视图控制',
        content: [
          {
            name: '二维三维视图切换',
            version: '1.2',
            thumbnail: 'h10_sceneMode.jpg',
            fileName: 'h10_sceneMode',
          },
          {
            name: '双屏对比',
            version: '1.6',
            thumbnail: 'h10_mapCompare.jpg',
            fileName: 'h10_mapCompare',
          },
          {
            name: '二三维联动Demo(leaflet+cesium)',
            version: '1.6',
            thumbnail: 'h10_link_leaflet.jpg',
            fileName: 'h10_link_leaflet',
          },
        ],
      },
      'scene-beijing': {
        name: '场景背景控制',
        content: [
          {
            name: '场景出图(导出图片)',
            version: '1.8',
            thumbnail: 'h15_expImage.jpg',
            fileName: 'h15_expImage',
          },
          {
            name: '自定义空间背景图',
            version: '1.7',
            thumbnail: 'h15_backgroundImg.jpg',
            fileName: 'h15_backgroundImg',
          },
          {
            name: '自定义天空盒',
            version: '1.3',
            thumbnail: 'h15_skybox.jpg',
            fileName: 'h15_skybox',
          },
          {
            name: '近地天空盒',
            version: '1.9',
            thumbnail: 'h15_skybox_nearground.jpg',
            fileName: 'h15_skybox_nearground',
          },
        ],
      },
      'inner-camera': {
        name: '视角相机控制',
        content: [
          {
            name: '开场动画',
            version: '1.5',
            thumbnail: 'h20_openFlyAnimation.gif',
            fileName: 'h20_openFlyAnimation',
          },
          {
            name: '旋转的地球',
            version: '1.2',
            thumbnail: 'h20_rotate.gif',
            fileName: 'h20_rotate',
          },
          {
            name: '绕点环绕飞行',
            version: '1.4',
            thumbnail: 'h20_rotatePoint.gif',
            fileName: 'h20_rotatePoint',
          },
          {
            name: '原地四周旋转',
            version: '1.4',
            thumbnail: 'h20_rotateOut.gif',
            fileName: 'h20_rotateOut',
          },

          {
            name: '第一人称贴地漫游',
            version: '2.2',
            thumbnail: 'h20_firstPersonRoam.jpg',
            fileName: 'h20_firstPersonRoam',
          },
          {
            name: '视角历史记录',
            version: '2.0',
            thumbnail: 'h20_cameraHistory.jpg',
            fileName: 'h20_cameraHistory',
          },
          {
            name: '限定视角范围',
            version: '2.0',
            thumbnail: 'h20_cameraHistory_limit.jpg',
            fileName: 'h20_cameraHistory_limit',
          },
        ],
      },
      'scene-jiaohu': {
        name: '鼠标交互控制',
        content: [
          {
            name: '鼠标中右键互换(操作习惯)',
            version: '2.0',
            thumbnail: 'h25_mourseType.jpg',
            fileName: 'h25_mourseType',
          },
          {
            name: '街景操作习惯',
            version: '2.2',
            thumbnail: 'h25_streetView.jpg',
            fileName: 'h25_streetView',
          },
          {
            name: '坐标拾取',
            version: '1.4',
            thumbnail: 'h25_selectPoint.jpg',
            fileName: 'h25_selectPoint',
          },
        ],
      },
      'effect-tianqi': {
        name: '各种特效',
        content: [
          {
            name: '雾天气',
            version: '1.9',
            thumbnail: 'h30_fog.jpg',
            fileName: 'h30_fog',
          },
          {
            name: '雨天气',
            version: '1.6',
            thumbnail: 'h30_rain.jpg',
            fileName: 'h30_rain',
          },
          {
            name: '雪天气',
            version: '1.9',
            thumbnail: 'h30_snow.gif',
            fileName: 'h30_snow',
          },
          {
            name: '水面倒影 demo',
            version: '1.9',
            thumbnail: 'h30_daoying.jpg',
            fileName: 'h30_daoying',
          },

          {
            name: '泛光特效',
            version: '1.6',
            thumbnail: 'h35_bloom.jpg',
            fileName: 'h35_bloom',
          },
          {
            name: '亮度效果',
            version: '1.9',
            thumbnail: 'h35_brightness.jpg',
            fileName: 'h35_brightness',
          },
          {
            name: '夜视效果',
            version: '1.9',
            thumbnail: 'h35_nightVision.jpg',
            fileName: 'h35_nightVision',
          },
          {
            name: '黑白效果',
            version: '1.9',
            thumbnail: 'h35_blackAndWhite.jpg',
            fileName: 'h35_blackAndWhite',
          },
          {
            name: '马赛克效果',
            version: '1.9',
            thumbnail: 'h35_mosaic.jpg',
            fileName: 'h35_mosaic',
          },
          {
            name: '景深效果',
            version: '1.9',
            thumbnail: 'h35_depthOfField.jpg',
            fileName: 'h35_depthOfField',
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
            version: '1.6',
            thumbnail: 'k10_measure.jpg',
            fileName: 'k10_measure',
          },
          {
            name: '剖面分析',
            version: '1.6',
            thumbnail: 'k10_measure_section.jpg',
            fileName: 'k10_measure_section',
          },
          {
            name: '方量分析(体积)',
            version: '1.8',
            thumbnail: 'k10_measure_volume.jpg',
            fileName: 'k10_measure_volume',
          },
          {
            name: '通视分析 demo',
            version: '1.9',
            thumbnail: 'k10_sightline.jpg',
            fileName: 'k10_sightline',
          },
          {
            name: '缓冲分析',
            version: '1.6',
            thumbnail: 'k10_buffer.jpg',
            fileName: 'k10_buffer',
          },
          {
            name: '可视域分析',
            version: '1.8',
            thumbnail: 'k10_viewShed3D.jpg',
            fileName: 'k10_viewShed3D',
          },
          {
            name: '地表透明(地下模式)',
            version: '1.8',
            thumbnail: 'k10_underground.gif',
            fileName: 'k10_underground',
          },
          {
            name: '日照分析',
            version: '1.5',
            thumbnail: 'k10_shadows.gif',
            fileName: 'k10_shadows',
          },
          {
            name: '天际线描边',
            version: '1.9',
            thumbnail: 'k10_skyline.jpg',
            fileName: 'k10_skyline',
          },
        ],
      },
      'analysi-terrain': {
        name: '地形相关',
        content: [
          {
            name: '地形开挖',
            version: '1.8',
            thumbnail: 'k15_terrainClip.jpg',
            fileName: 'k15_terrainClip',
          },
          {
            name: '地形开挖(planes)',
            version: '1.6',
            thumbnail: 'k15_terrainPlanClip.jpg',
            fileName: 'k15_terrainPlanClip',
          },
          {
            name: '等高线',
            version: '1.6',
            thumbnail: 'k15_contourLine.jpg',
            fileName: 'k15_contourLine',
          },
          {
            name: '坡度坡向',
            version: '2.0',
            thumbnail: 'k15_slope.jpg',
            fileName: 'k15_slope',
          },
          {
            name: '淹没分析(矢量面)',
            version: '1.6',
            thumbnail: 'k15_floodByGraphic.jpg',
            fileName: 'k15_floodByGraphic',
          },
          {
            name: '淹没分析（globe材质）',
            version: '1.8',
            thumbnail: 'k15_floodByMaterial.jpg',
            fileName: 'k15_floodByMaterial',
          },
        ],
      },
      'analysi-3dtiles': {
        name: '模型相关',
        content: [
          {
            name: 'gltf模型剖切',
            version: '2.1',
            thumbnail: 'k20_modelPlanClip.jpg',
            fileName: 'k20_modelPlanClip',
          },
          {
            name: '3dtiles模型剖切(BIM)',
            version: '1.8',
            thumbnail: 'k20_tilesetPlanClip.jpg',
            fileName: 'k20_tilesetPlanClip',
          },
          {
            name: '3dtiles模型剖切(倾斜摄影)',
            version: '2.0',
            thumbnail: 'k20_tilesetPlanClip2.jpg',
            fileName: 'k20_tilesetPlanClip2',
          },
          {
            name: '建筑物特效',
            version: '1.9',
            thumbnail: 'k20_jzwStyle.jpg',
            fileName: 'k20_jzwStyle',
          },

          {
            name: '模型压平',
            version: '2.0',
            thumbnail: 'k20_tilesetFlat.jpg',
            fileName: 'k20_tilesetFlat',
            // plugins: 'tileset',
          },
          {
            name: '模型裁剪开挖',
            version: '2.0',
            thumbnail: 'k20_tilesetClip.jpg',
            fileName: 'k20_tilesetClip',
            // plugins: 'tileset',
          },
          {
            name: '模型淹没分析',
            version: '2.0',
            thumbnail: 'k20_tilesetFlood.jpg',
            fileName: 'k20_tilesetFlood',
            // plugins: 'tileset',
          },
          {
            name: '模型热力图',
            version: '2.2',
            thumbnail: 'k20_heatLayer_3dtiles.jpg',
            fileName: 'k20_heatLayer_3dtiles',
            plugins: 'heatmap',
          },
        ],
      },
      'analysi-data': {
        name: '数据分析',
        content: [
          {
            name: '等值面',
            version: '2.1',
            thumbnail: 'k25_isobands.jpg',
            fileName: 'k25_isobands',
          },
        ],
      },
    },
  },
  visualization: {
    name: '可视化',
    content: {
      heat: {
        name: '普通可视化',
        content: [
          {
            name: '贴地热力图',
            version: '1.6',
            thumbnail: 'm10_heatLayer.jpg',
            fileName: 'm10_heatLayer',
            plugins: 'heatmap',
          },
          {
            name: '高度热力图',
            version: '3.0',
            thumbnail: 'm10_heatLayer_height.jpg',
            fileName: 'm10_heatLayer_height',
            plugins: 'heatmap',
          },
          {
            name: '立体曲面热力图',
            version: '2.0',
            thumbnail: 'm10_heatLayer_arc.jpg',
            fileName: 'm10_heatLayer_arc',
            plugins: 'heatmap',
          },
          {
            name: '全国温度图',
            version: '1.9',
            thumbnail: 'm10_kriging.jpg',
            fileName: 'm10_kriging',
          },
          {
            name: '风向图',
            version: '1.7',
            thumbnail: 'm10_windLayer.gif',
            fileName: 'm10_windLayer',
            plugins: 'wind',
          },
          {
            name: '风向图(canvas方式)',
            version: '2.2',
            thumbnail: 'm10_canvasWindLayer.gif',
            fileName: 'm10_canvasWindLayer',
            plugins: 'wind',
          },
        ],
      },
      MapV: {
        name: 'MapV支持',
        content: [
          {
            name: '蜂巢图',
            version: '1.7',
            thumbnail: 'm20_mapv_gridHoneycomb.jpg',
            fileName: 'm20_mapv_gridHoneycomb',
            plugins: 'mapv',
          },
          {
            name: '方格图',
            version: '1.7',
            thumbnail: 'm20_mapv_gridPoint.jpg',
            fileName: 'm20_mapv_gridPoint',
            plugins: 'mapv',
          },
          {
            name: '微博',
            version: '1.7',
            thumbnail: 'm20_mapv_pointWeibo.gif',
            fileName: 'm20_mapv_pointWeibo',
            plugins: 'mapv',
          },
          {
            name: '动态点',
            version: '1.7',
            thumbnail: 'm20_mapv_pointTime.gif',
            fileName: 'm20_mapv_pointTime',
            plugins: 'mapv',
          },
          {
            name: '简单线',
            thumbnail: 'm20_mapv_polyline.jpg',
            fileName: 'm20_mapv_polyline',
            plugins: 'mapv',
          },
          {
            name: '强度线',
            version: '1.7',
            thumbnail: 'm20_mapv_polylineIntensity.jpg',
            fileName: 'm20_mapv_polylineIntensity',
            plugins: 'mapv',
          },
          {
            name: '动态轨迹',
            version: '1.7',
            thumbnail: 'm20_mapv_lineTime.gif',
            fileName: 'm20_mapv_lineTime',
            plugins: 'mapv',
          },
          {
            name: '强边界图',
            version: '1.7',
            thumbnail: 'm20_mapv_lineForceEdgeBunding.jpg',
            fileName: 'm20_mapv_lineForceEdgeBunding',
            plugins: 'mapv',
          },
          {
            name: '迁徙图',
            version: '1.7',
            thumbnail: 'm20_mapv_qianxi.gif',
            fileName: 'm20_mapv_qianxi',
            plugins: 'mapv',
          },
          {
            name: '大迁徙图',
            version: '1.7',
            thumbnail: 'm20_mapv_qianxiTime.jpg',
            fileName: 'm20_mapv_qianxiTime',
            plugins: 'mapv',
          },
          {
            name: '北京',
            version: '1.7',
            thumbnail: 'm20_mapv_polygon.jpg',
            fileName: 'm20_mapv_polygon',
            plugins: 'mapv',
          },
        ],
      },
      echarts: {
        name: 'ECharts支持',
        content: [
          {
            name: '散点图 全省经济指标',
            version: '1.6',
            thumbnail: 'm30_echarts_sandian1.gif',
            fileName: 'm30_echarts_sandian1',
            plugins: 'echarts',
          },
          {
            name: '散点图 城市空气质量',
            version: '1.6',
            thumbnail: 'm30_echarts_sandian2.jpg',
            fileName: 'm30_echarts_sandian2',
            plugins: 'echarts',
          },
          {
            name: '散点图 态势',
            version: '1.6',
            thumbnail: 'm30_echarts_sandian3.jpg',
            fileName: 'm30_echarts_sandian3',
            plugins: 'echarts',
          },
          {
            name: '流出线',
            version: '1.6',
            thumbnail: 'm30_echarts_line_chu.jpg',
            fileName: 'm30_echarts_line_chu',
            plugins: 'echarts',
          },
          {
            name: '流出线2',
            version: '2.0',
            thumbnail: 'm30_echarts_line_chu2.jpg',
            fileName: 'm30_echarts_line_chu2',
            plugins: 'echarts',
          },
          {
            name: '流入线',
            version: '1.6',
            thumbnail: 'm30_echarts_line_ru.jpg',
            fileName: 'm30_echarts_line_ru',
            plugins: 'echarts',
          },
          {
            name: '物流运输图',
            version: '1.6',
            thumbnail: 'm30_echarts_line1.jpg',
            fileName: 'm30_echarts_line1',
            plugins: 'echarts',
          },
          {
            name: '人口迁徙图',
            version: '1.6',
            thumbnail: 'm30_echarts_line2.jpg',
            fileName: 'm30_echarts_line2',
            plugins: 'echarts',
          },
          {
            name: '流向动态效果',
            version: '1.6',
            thumbnail: 'm30_echarts_line3.jpg',
            fileName: 'm30_echarts_line3',
            plugins: 'echarts',
          },
          {
            name: '道路拥堵图',
            version: '1.6',
            thumbnail: 'm30_echarts_lineroad.jpg',
            fileName: 'm30_echarts_lineroad',
            plugins: 'echarts',
          },
          {
            name: '公交路线热力图',
            version: '1.6',
            thumbnail: 'm30_echarts_lineroad2.jpg',
            fileName: 'm30_echarts_lineroad2',
            plugins: 'echarts',
          },
        ],
      },
      xunifangzhen: {
        name: '虚拟仿真',
        content: [
          {
            name: '动画脚本演示',
            version: '3.0',
            thumbnail: 'm35_dhjb.jpg',
            fileName: 'm35_dhjb',
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
  var index2 = 0
  for (var key in exampleConfig) {
    var config = exampleConfig[key]
    if (!config.content) {
      continue
    }

    index++
    arrNew += `\n\n2.${index}  ${config.name}`
    index2 = 1
    for (var key2 in config.content) {
      var configItem = config.content[key2]
      if (configItem.content) {
        arrNew += `\n2.${index}.${index2}  ${configItem.name}\n`
        index2++

        var examples = configItem.content
        var len = examples && examples.length ? examples.length : 0
        for (var i = 0; i < len; i++) {
          var item = examples[i]
          if (item.name.indexOf('demo') !== -1) {
            continue
          }

          if (i === 0) {
            arrNew += `${item.name}`
          } else {
            arrNew += `,${item.name}`
          }
        }
        arrNew += `\n`
      }
    }
  }
  return arrNew
}
