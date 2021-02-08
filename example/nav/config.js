/**
 * Cesium 示例配置文件：包含示例的分类、名称、缩略图、文件路径
 */

/**
 * key值：为exampleConfig配置的key值或者fileName值 （为中间节点时是key值，叶结点是fileName值）
 * value值：fontawesome字体icon名
 */
var sideBarIconConfig = {
  scene: 'fa-globe',
  terrian: 'fa-crosshairs',
  tileLayer: 'fa-photo',
  layers: 'fa-crosshairs',
  graphic: 'fa-road',
  mapcontorl: 'fa-road',
  effect: 'fa-road',
  gltf: 'fa-space-shuttle',
  tileset: 'fa-building-o',
  analysi: 'fa-signal',
  visualization: 'fa-street-view'
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
            fileName: 'a11_createMap'
          },
          {
            name: '根据配置文件创建地球',
            version: '3.0',
            thumbnail: 'a11_createMap_url.jpg',
            fileName: 'a11_createMap_url'
          },
          {
            name: '原生Cesium来创建地球(可与第3方SDK结合使用)',
            version: '2.1',
            thumbnail: 'a11_createMap_viewer.jpg',
            fileName: 'a11_createMap_viewer'
          }
        ]
      },
      'scene-options': {
        name: '场景参数',
        details: '演示 new mars3d.Map() 构造场景时支持的一些参数',
        content: [
          {
            name: ' scene 场景参数',
            version: '3.0',
            thumbnail: 'a13_scene.jpg',
            fileName: 'a13_scene'
          },
          {
            name: 'scene.center 默认视角',
            version: '3.0',
            thumbnail: 'a13_scene_center.jpg',
            fileName: 'a13_scene_center'
          },
          {
            name: 'terrain 三维地形',
            version: '3.0',
            thumbnail: 'a13_terrain.jpg',
            fileName: 'a13_terrain'
          },
          {
            name: 'basemaps 瓦片底图',
            version: '3.0',
            thumbnail: 'a13_basemaps.jpg',
            fileName: 'a13_basemaps'
          },
          {
            name: 'layers 叠加图层',
            version: '3.0',
            thumbnail: 'a13_layers.jpg',
            fileName: 'a13_layers'
          },
          {
            name: 'control 控件',
            version: '3.0',
            thumbnail: 'a13_control.jpg',
            fileName: 'a13_control'
          }
        ]
      },
      'scene-kongzhi': {
        name: '场景控制',
        content: [
          {
            name: '事件监听',
            version: '1.9',
            thumbnail: 'a15_event.jpg',
            fileName: 'a15_event'
          },
          {
            name: '销毁释放地球',
            version: '1.9',
            thumbnail: 'a15_destroy.jpg',
            fileName: 'a15_destroy'
          }
        ]
      }
    }
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
            fileName: 'b11_terrain'
          },
          {
            name: '天地图地形',
            version: '2.0',
            thumbnail: 'b11_terrain_tdt.jpg',
            fileName: 'b11_terrain_tdt',
            plugins: 'tdt'
          },
          {
            name: '地形夸张',
            version: '1.7',
            thumbnail: 'b11_terrainExaggeration.jpg',
            fileName: 'b11_terrainExaggeration'
          }
        ]
      }
    }
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
            fileName: 'c11_tdt'
          },
          {
            name: '高德',
            version: '1.1',
            thumbnail: 'c11_gaode.jpg',
            fileName: 'c11_gaode'
          },
          {
            name: '腾讯',
            version: '2.1',
            thumbnail: 'c11_tentect.jpg',
            fileName: 'c11_tentect'
          },

          {
            name: '百度 demo',
            version: '1.7',
            thumbnail: 'c11_baidu.jpg',
            fileName: 'c11_baidu'
          },
          {
            name: 'OpenStreetMap（OSM）',
            version: '1.1',
            thumbnail: 'c11_osm.jpg',
            fileName: 'c11_osm'
          },
          {
            name: '谷歌【已被封】',
            version: '1.1',
            thumbnail: 'c11_google.jpg',
            fileName: 'c11_google'
          },
          {
            name: '微软Bing',
            version: '1.1',
            thumbnail: 'c11_bing.jpg',
            fileName: 'c11_bing'
          },
          {
            name: 'Mapbox',
            version: '1.1',
            thumbnail: 'c11_mapbox.jpg',
            fileName: 'c11_mapbox'
          },
          {
            name: 'ArcGIS Online',
            version: '1.1',
            thumbnail: 'c11_arcgis_online.jpg',
            fileName: 'c11_arcgis_online'
          },
          {
            name: 'Cesium Ion服务',
            version: '3.0',
            thumbnail: 'c11_ion.jpg',
            fileName: 'c11_ion'
          },
          {
            name: 'Mapbox矢量瓦片(.pbf)',
            version: '1.6',
            thumbnail: 'c11_mvt.jpg',
            fileName: 'c11_mvt',
            plugins: 'pbf'
          }
        ]
      },
      'tileLayer-type': {
        name: '标准瓦片服务',
        details: '支持加载在离线或私有环境发布的各种标准服务',
        content: [
          {
            name: '本地单张图片',
            version: '1.1',
            thumbnail: 'c15_image.jpg',
            fileName: 'c15_image'
          },
          {
            name: 'xyz金字塔瓦片',
            version: '1.1',
            thumbnail: 'c15_xyz.jpg',
            fileName: 'c15_xyz'
          },
          {
            name: 'arcgis格式瓦片',
            version: '1.4',
            thumbnail: 'c15_arcgis_cache.jpg',
            fileName: 'c15_arcgis_cache'
          },
          {
            name: 'OGC WMS服务',
            version: '1.1',
            thumbnail: 'c15_wms.jpg',
            fileName: 'c15_wms'
          },
          {
            name: 'OGC WMTS服务',
            version: '1.1',
            thumbnail: 'c15_wmts.jpg',
            fileName: 'c15_wmts'
          },
          {
            name: 'ArcGIS Server服务(含瓦片和动态)',
            version: '1.1',
            thumbnail: 'c15_arcgis.jpg',
            fileName: 'c15_arcgis'
          },
          {
            name: '谷歌地球企业版【需部署私服】',
            version: '3.0',
            thumbnail: 'c15_gee.jpg',
            fileName: 'c15_gee'
          },
          {
            name: 'EPSG4490坐标系',
            version: '1.9',
            thumbnail: 'c16_4490.jpg',
            fileName: 'c16_4490'
          }
        ]
      },
      'tileLayer-kongzhi': {
        name: '控制及效果',
        content: [
          // {
          //     name: "底图切换",
          //     version: "1.2",
          //     thumbnail: "99_widget_manageBasemaps.jpg",
          //     params: "widget=widgets/manageBasemaps/widget.js"
          // },
          // {
          //     name: "图层管理",
          //     version: "1.2",
          //     thumbnail: "99_widget_manageLayers.jpg",
          //     params: "widget=widgets/manageLayers/widget.js"
          // },
          {
            name: '瓦片底图的参数',
            version: '1.3',
            thumbnail: 'c20_tileLayer_options.jpg',
            fileName: 'c20_tileLayer_options'
          },
          {
            name: '瓦片加载事件',
            version: '2.1',
            thumbnail: 'c20_tileLayer_event.jpg',
            fileName: 'c20_tileLayer_event'
          },
          {
            name: '双屏对比',
            version: '1.6',
            thumbnail: 'c20_mapCompare.jpg',
            fileName: 'c20_mapCompare'
          },
          {
            name: '鹰眼地图',
            version: '1.8',
            thumbnail: 'c20_overviewmap.jpg',
            fileName: 'c20_overviewmap'
          },
          {
            name: '时空效果(雷达反射率)',
            version: '1.7',
            thumbnail: 'c20_tileLayer_time.gif',
            fileName: 'c20_tileLayer_time'
          },
          {
            name: '绘制反选遮罩层',
            version: '2.1',
            thumbnail: 'c20_mask.jpg',
            fileName: 'c20_mask'
          },
          {
            name: '二三维联动Demo(leaflet+cesium)',
            version: '1.6',
            thumbnail: 'c20_link_leaflet.jpg',
            fileName: 'c20_link_leaflet'
          }
          // {
          //     name: "卷帘对比",
          //     version: "1.5",
          //     thumbnail: "99_widget_mapSwipe.jpg",
          //     params: "widget=widgets/mapSwipe/widget.js"
          // },
          // {
          //     name: "百度街景对比",
          //     version: "1.6",
          //     thumbnail: "99_widget_streetscape.jpg",
          //     params: "widget=widgets/streetscape/widget.js"
          // },
        ]
      }
    }
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
            fileName: 'f20_baseLayerPicker'
          },
          {
            name: '偏振立体(VR)',
            version: '1.1.0',
            thumbnail: 'f20_vr.jpg',
            fileName: 'f20_vr'
          },
          {
            name: 'POI兴趣点搜索',
            version: '1.1.0',
            thumbnail: 'f20_geocoder.jpg',
            fileName: 'f20_geocoder'
          },
          {
            name: '控件控制(显示及关闭)',
            version: '2.0.1',
            thumbnail: 'f20_showhide.jpg',
            fileName: 'f20_showhide'
          }
        ]
      },
      'inner-control': {
        name: '内置控件',
        details: 'Mars3D内置的控件，直接按需调用即可',
        content: [
          {
            name: 'Popup鼠标单击信息窗',
            version: '1.3.0',
            thumbnail: 'f10_popup.jpg',
            fileName: 'f10_popup'
          },
          {
            name: 'Tooltip鼠标移入信息',
            version: '1.3.0',
            thumbnail: 'f10_tooltip.jpg',
            fileName: 'f10_tooltip'
          },
          {
            name: '右键菜单',
            version: '1.8.9',
            thumbnail: 'f10_contextmenu.jpg',
            fileName: 'f10_contextmenu'
          }
        ]
      },
      'mars-control': {
        name: '自定义控件',
        content: [
          {
            name: '下侧状态栏',
            version: '3.0',
            thumbnail: 'f15_locationBar.jpg',
            fileName: 'f15_locationBar'
          },

          {
            name: '鼠标按下特效',
            version: '3.0',
            thumbnail: 'f15_mouseDownView.jpg',
            fileName: 'f15_mouseDownView'
          },

          {
            name: '导航球+比例尺',
            version: '3.0',
            thumbnail: 'f15_navigation.jpg',
            fileName: 'f15_navigation'
          }
        ]
      }
    }
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
            fileName: 'd11_graphicLayer'
          },
          {
            name: 'glTF 小模型图层',
            version: '3.0',
            thumbnail: 'd12_modelLayer.jpg',
            fileName: 'd12_modelLayer'
          },
          {
            name: '3D Tiles 三维模型图层',
            version: '3.0',
            thumbnail: 'd12_tilesetLayer.jpg',
            fileName: 'd12_tilesetLayer'
          },
          {
            name: 'DIV 图层',
            version: '1.7.6',
            thumbnail: 'e30_divGraphic.jpg',
            fileName: 'e30_divGraphic'
          },
          {
            name: '经纬网图层',
            version: '3.0',
            thumbnail: 'd12_graticuleLayer.jpg',
            fileName: 'd12_graticuleLayer'
          }
        ]
      },
      'feature-file': {
        name: '标准格式文件',
        content: [
          {
            name: 'GeoJson图层',
            version: '2.0',
            thumbnail: 'd13_geojson.jpg',
            fileName: 'd13_geojson'
          },
          {
            name: '标绘GeoJson图层',
            version: '3.0',
            thumbnail: 'd13_geojson_draw.jpg',
            fileName: 'd13_geojson_draw'
          },
          {
            name: '水域GeoJson图层',
            version: '3.0',
            thumbnail: 'd13_geojson_water.gif',
            fileName: 'd13_geojson_water'
          },
          {
            name: 'KML图层',
            version: '1.2',
            thumbnail: 'd13_kml.jpg',
            fileName: 'd13_kml'
          },
          {
            name: 'CZML图层',
            version: '1.2',
            thumbnail: 'd13_czml.jpg',
            fileName: 'd13_czml'
          }
        ]
      },
      'feature-ogc': {
        name: 'WFS矢量服务',
        content: [
          {
            name: 'OGC WFS图层',
            version: '3.0',
            thumbnail: 'd20_wfs.jpg',
            fileName: 'd20_wfs'
          },
          {
            name: 'ArcGIS WFS图层',
            version: '3.0',
            thumbnail: 'd20_arcgis_wfs.jpg',
            fileName: 'd20_arcgis_wfs'
          },
          {
            name: '高德POI图层',
            version: '3.0',
            thumbnail: 'd25_gaode_poi.jpg',
            fileName: 'd25_gaode_poi'
          }
        ]
      }
    }
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
            fileName: 'e11_entity_label'
          },
          {
            name: 'Point 点 ',
            version: '1.5',
            thumbnail: 'e11_entity_point.jpg',
            fileName: 'e11_entity_point'
          },
          {
            name: 'Billboard 图标点',
            version: '1.5',
            thumbnail: 'e11_entity_billboard.jpg',
            fileName: 'e11_entity_billboard'
          },
          {
            name: '字体图片点',
            version: '3.0',
            thumbnail: 'e11_entity_fontBillboard.jpg',
            fileName: 'e11_entity_fontBillboard'
          },
          {
            name: 'Div图片点',
            version: '3.0',
            thumbnail: 'e11_entity_divBillboard.jpg',
            fileName: 'e11_entity_divBillboard'
          },

          {
            name: 'Plane 平面',
            version: '1.5',
            thumbnail: 'e11_entity_plane.jpg',
            fileName: 'e11_entity_plane'
          },
          {
            name: 'Box 盒子',
            version: '1.5',
            thumbnail: 'e11_entity_box.jpg',
            fileName: 'e11_entity_box'
          },
          {
            name: 'Circle 圆、圆柱',
            version: '1.5',
            thumbnail: 'e11_entity_circle.jpg',
            fileName: 'e11_entity_circle'
          },
          {
            name: 'Ellipse 椭圆、椭圆柱',
            version: '1.5',
            thumbnail: 'e11_entity_ellipse.jpg',
            fileName: 'e11_entity_ellipse'
          },
          {
            name: 'Cylinder 圆锥、圆柱',
            version: '1.5',
            thumbnail: 'e11_entity_cylinder.jpg',
            fileName: 'e11_entity_cylinder'
          },
          {
            name: 'Ellipsoid 球、半球、椭球',
            version: '1.5',
            thumbnail: 'e11_entity_ellipsoid.jpg',
            fileName: 'e11_entity_ellipsoid'
          },
          {
            name: 'Model 小模型',
            version: '2.1.2',
            thumbnail: 'e11_entity_model.jpg',
            fileName: 'e11_entity_model'
          },

          {
            name: 'Polyline 线',
            version: '1.5',
            thumbnail: 'e15_entity_polyline.jpg',
            fileName: 'e15_entity_polyline'
          },
          {
            name: '曲线',
            version: '1.5',
            thumbnail: 'e15_entity_polyline_curve.jpg',
            fileName: 'e15_entity_polyline_curve'
          },

          {
            name: 'PolylineVolume 管道线',
            version: '1.5',
            thumbnail: 'e15_entity_polylinevolume.jpg',
            fileName: 'e15_entity_polylinevolume'
          },
          {
            name: 'Corridor 走廊',
            version: '1.5',
            thumbnail: 'e15_entity_corridor.jpg',
            fileName: 'e15_entity_corridor'
          },
          {
            name: 'Wall 墙',
            version: '1.5',
            thumbnail: 'e15_entity_wall.jpg',
            fileName: 'e15_entity_wall'
          },
          {
            name: 'Rectangle 矩形',
            version: '1.5',
            thumbnail: 'e15_entity_rectangle.jpg',
            fileName: 'e15_entity_rectangle'
          },
          {
            name: 'Polygon 面',
            version: '1.5',
            thumbnail: 'e15_entity_polygon.jpg',
            fileName: 'e15_entity_polygon'
          },
          {
            name: '正多边形',
            version: '3.0',
            thumbnail: 'e16_polygon_regular.jpg',
            fileName: 'e16_polygon_regular'
          },
          {
            name: '扇形',
            version: '3.0',
            thumbnail: 'e16_polygon_sector.jpg',
            fileName: 'e16_polygon_sector'
          }
        ]
      },

      'feature-primitive': {
        name: 'Primitive基础矢量对象',
        details: '【该分组示例待完善】Primitive 是更底层的实现方式，渲染效率更高，但功能性较差。',
        content: [
          {
            name: 'Label 文字',
            version: '3.0',
            thumbnail: 'e21_primitive_label.jpg',
            fileName: 'e21_primitive_label'
          },
          {
            name: 'Point 点 ',
            version: '3.0',
            thumbnail: 'e21_primitive_point.jpg',
            fileName: 'e21_primitive_point'
          },
          {
            name: 'Billboard 图标点',
            version: '3.0',
            thumbnail: 'e21_primitive_billboard.jpg',
            fileName: 'e21_primitive_billboard'
          },
          {
            name: 'Plane 平面',
            version: '3.0',
            thumbnail: 'e21_primitive_plane.jpg',
            fileName: 'e21_primitive_plane'
          },
          {
            name: 'Box 盒子',
            version: '3.0',
            thumbnail: 'e21_primitive_box.jpg',
            fileName: 'e21_primitive_box'
          },
          {
            name: 'Circle 圆、椭圆、圆柱',
            version: '3.0',
            thumbnail: 'e21_primitive_circle.jpg',
            fileName: 'e21_primitive_circle'
          },
          {
            name: 'Cylinder 圆锥、圆柱',
            version: '3.0',
            thumbnail: 'e21_primitive_cylinder.jpg',
            fileName: 'e21_primitive_cylinder'
          },
          {
            name: 'Ellipsoid 球、半球、椭球',
            version: '3.0',
            thumbnail: 'e21_primitive_ellipsoid.jpg',
            fileName: 'e21_primitive_ellipsoid'
          },
          {
            name: 'Model 小模型',
            version: '2.1.2',
            thumbnail: 'e21_primitive_model.jpg',
            fileName: 'e21_primitive_model'
          },

          {
            name: 'Polyline 线',
            version: '3.0',
            thumbnail: 'e25_primitive_polyline.jpg',
            fileName: 'e25_primitive_polyline'
          },
          {
            name: 'PolylineVolume 管道线',
            version: '3.0',
            thumbnail: 'e25_primitive_polylinevolume.jpg',
            fileName: 'e25_primitive_polylinevolume'
          },
          {
            name: 'Corridor 走廊',
            version: '3.0',
            thumbnail: 'e25_primitive_corridor.jpg',
            fileName: 'e25_primitive_corridor'
          },
          {
            name: 'Wall 墙',
            version: '3.0',
            thumbnail: 'e25_primitive_wall.jpg',
            fileName: 'e25_primitive_wall'
          },
          {
            name: 'Rectangle 矩形',
            version: '3.0',
            thumbnail: 'e25_primitive_rectangle.jpg',
            fileName: 'e25_primitive_rectangle'
          },
          {
            name: 'Polygon 面',
            version: '3.0',
            thumbnail: 'e25_primitive_polygon.jpg',
            fileName: 'e25_primitive_polygon'
          }
        ]
      },

      'feature-kuozhan': {
        name: '扩展的矢量对象',
        content: [
          {
            name: 'Div文本点',
            version: '1.7.6',
            thumbnail: 'e30_divGraphic.jpg',
            fileName: 'e30_divGraphic'
          },
          {
            name: '光锥体',
            version: '3.0',
            thumbnail: 'e30_lightCone.gif',
            fileName: 'e30_lightCone'
          },
          {
            name: '平放的图标',
            version: '2.1.3',
            thumbnail: 'e30_flatBillboard.jpg',
            fileName: 'e30_flatBillboard'
          },
          {
            name: '粒子效果',
            version: '3.0',
            thumbnail: 'e30_particleSystem.jpg',
            fileName: 'e30_particleSystem'
          },
          {
            name: '相控阵雷达范围',
            version: '1.7.6',
            thumbnail: 'e11_rectangularSensor.gif',
            fileName: 'e11_rectangularSensor'
          },
          {
            name: '动态河流',
            version: '1.9.0',
            thumbnail: 'e35_dynamicRiver.gif',
            fileName: 'e35_dynamicRiver'
          },
          {
            name: '道路 demo',
            version: '1.9.0',
            thumbnail: 'e35_road.jpg',
            fileName: 'e35_road'
          },
          {
            name: '扩散围墙',
            version: '3.0',
            thumbnail: 'e35_diffuseWall.gif',
            fileName: 'e35_diffuseWall'
          },
          {
            name: '走马灯围墙',
            version: '3.0',
            thumbnail: 'e35_scrollWall.jpg',
            fileName: 'e35_scrollWall'
          },
          {
            name: '水域面',
            version: '3.0',
            thumbnail: 'e35_water.jpg',
            fileName: 'e35_water'
          }
        ]
      },

      'feature-material': {
        name: '视频融合应用',
        content: [
          {
            name: '视频材质',
            version: '1.6.9',
            thumbnail: 'e15_entity_material_video.jpg',
            fileName: 'e15_entity_material_video'
          },
          {
            name: '视频材质(HLS协议)',
            version: '1.6.9',
            thumbnail: 'e15_entity_material_video_hls.jpg',
            fileName: 'e15_entity_material_video_hls'
          },
          {
            name: '视频2D投射',
            version: '1.9.0',
            thumbnail: 'e31_video2D.jpg',
            fileName: 'e31_video2D'
          },
          {
            name: '视频2D投射(HLS协议)',
            version: '1.9.0',
            thumbnail: 'e31_video2D_hls.jpg',
            fileName: 'e31_video2D_hls'
          },
          {
            name: '视频3D贴物投射',
            version: '1.8.9',
            thumbnail: 'e31_video3D.jpg',
            fileName: 'e31_video3D'
          },
          {
            name: '视频3D贴物投射(HLS协议)',
            version: '1.8.9',
            thumbnail: 'e31_video3D_hls.jpg',
            fileName: 'e31_video3D_hls'
          }
        ]
      },
      'feature-edit': {
        name: '编辑及控制',
        details: '绘制及编辑文字、点、线、面、立体等各类数据',
        content: [
          {
            name: '图上标绘',
            version: '1.7.6',
            thumbnail: 'e60_draw.jpg',
            fileName: 'e60_draw'
          },
          {
            name: '军事标绘',
            version: '1.9.1',
            thumbnail: 'e60_military_plot.jpg',
            fileName: 'e60_military_plot'
          }
        ]
      }
    }
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
            fileName: 'g10_fog'
          },
          {
            name: '雨天气',
            version: '1.6.9',
            thumbnail: 'g10_rain.jpg',
            fileName: 'g10_rain'
          },
          {
            name: '雪天气',
            version: '1.9.0',
            thumbnail: 'g10_snow.gif',
            fileName: 'g10_snow'
          },
          {
            name: '水面倒影',
            version: '1.9.0',
            thumbnail: 'g10_daoying.jpg',
            fileName: 'g10_daoying'
          }
        ]
      },
      'effect-texiao': {
        name: '其他特效',
        content: [
          {
            name: '泛光特效',
            version: '1.6.9',
            thumbnail: 'g15_bloom.jpg',
            fileName: 'g15_bloom'
          },
          {
            name: '亮度效果',
            version: '1.9.0',
            thumbnail: 'g15_brightness.jpg',
            fileName: 'g15_brightness'
          },
          {
            name: '夜视效果',
            version: '1.9.0',
            thumbnail: 'g15_nightVision.jpg',
            fileName: 'g15_nightVision'
          },
          {
            name: '黑白效果',
            version: '1.9.0',
            thumbnail: 'g15_blackAndWhite.jpg',
            fileName: 'g15_blackAndWhite'
          },
          {
            name: '马赛克效果',
            version: '1.9.0',
            thumbnail: 'g15_mosaic.jpg',
            fileName: 'g15_mosaic'
          },
          {
            name: '景深效果',
            version: '1.9.0',
            thumbnail: 'g15_depthOfField.jpg',
            fileName: 'g15_depthOfField'
          }
        ]
      }
    }
  }
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
          if (item.plugins || item.name.indexOf('Demo') !== -1) {
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
