# mars3d
  Mars3D ( MarsGIS for Cesium ) 地图平台核心SDK类库


## Mars3D介绍
 Mars3D三维地球平台软件,简称Mars3D（曾用名 MarsGIS for Cesium ） 是[火星科技](http://www.marsgis.cn/)研发的一个Web三维地图开发平台系统，是火星科技团队成员多年GIS开发和Cesium使用的技术沉淀。基于Cesium和现代Web技术栈全新构建， 集成了领先的开源地图库、可视化库，提供了全新的大数据可视化、实时流数据可视化功能，通过本产品可快速实现浏览器和移动端上美观、流畅的地图呈现与空间分析。 框架主要目的是升级Cesium的基础功能和编写相关示例，方便快速搭建Cesium地图项目，敏捷开发，可复用，支持各种配置，适合各种场景使用。

## 相关网站
[产品介绍手册](http://mars3d.cn/docs/file/cpjs.pdf)  
[Mars3D官网](http://mars3d.cn)  
[GitHub开源](https://github.com/marsgis/MarsGIS-for-Cesium)

 

## 版本信息
   具体版本号及版本日期等信息，请在浏览器 F12控制台 查看打印值 
 

## 相关依赖
 核心依赖库： Cesium   
 部分依赖库（非必须）： 
    turf（仅部分功能中使用以下6个方法：`area 求面积, rhumbBearing 求角度,  bezierSpline 计算曲线,buffer 缓冲分析,centerOfMass 计算中心点, booleanPointInPolygon 判断点在面内`）  
 

子目录说明： plugins 所有基于ceisum或mars3d的一些扩展功能插件或类(每个子目录都有readme进行说明)。
