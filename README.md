# Mars3D 三维地球客户端开发平台

<p align="center">
<img src="http://mars3d.cn/logo.png" width="200px" />
</p>

<p align="center">🌎 一款基于 WebGL 技术实现的三维地球客户端开发平台</p>

<p align="center">
  <a target="_black" href="https://www.npmjs.com/package/mars3d">
    <img alt="Npm version" src="https://img.shields.io/npm/v/mars3d.svg?style=flat&logo=npm&label=版本号" />
  </a>
  <a target="_black" href="https://www.npmjs.com/package/mars3d">
    <img alt="Npm downloads" src="https://img.shields.io/npm/dt/mars3d?style=flat&logo=npm&label=下载量" />
  </a>
  <a target="_black" href="https://github.com/marsgis/mars3d">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/marsgis/mars3d?style=flat&logo=github" />
  </a>
  <a target="_black" href="https://gitee.com/marsgis/mars3d">
    <img src="https://gitee.com/marsgis/mars3d/badge/star.svg?theme=dark" alt="star" />
  </a>
</p>

[**English**](./README_EN.md) | [**中文**](./README.md)

## 平台介绍

Mars3D 是一款基于 WebGL 技术实现的三维地球客户端开发平台，基于 [Cesium](https://cesium.com/cesiumjs/) 优化提升与 B/S 架构设计，支持多行业扩展的轻量级高效能 GIS 开发平台。能够免安装、无插件地在浏览器中高效运行，快速接入多种 GIS 数据与三维模型，完成三维空间可视化与行业应用。

- 官网：[http://mars3d.cn](http://mars3d.cn)
- 开发教程：[http://mars3d.cn/docs/](http://mars3d.cn/docs/)
- API 文档：[http://mars3d.cn/api/](http://mars3d.cn/api/)
- 更新日志：[CHANGE.md](./CHANGE.md)
- 问题反馈：[GitHub Issues](https://github.com/marsgis/mars3d/issues) ｜ [Gitee Issues](https://gitee.com/marsgis/mars3d/issues)



## 示例、模板与项目导航

### 功能示例

对平台每个功能编写的案例代码，可以阅读每个示例代码来学习各功能，与官网功能示例一致效果。

| 说明 | 教程 | 视频 | Github 源码 | 国内 Gitee 源码 |
|---|---|---|---|---|
| Vue 版 | [查看](http://mars3d.cn/docs/guide/example-vue/) | [查看](https://www.bilibili.com/video/BV1PL41177SS/)、[高级篇](https://www.bilibili.com/video/BV1Xv4y1a74P/) | [mars3d-vue-example](https://github.com/marsgis/mars3d-vue-example) | [mars3d-vue-example](https://gitee.com/marsgis/mars3d-vue-example) |
| 原生 JS 版 | [查看](http://mars3d.cn/docs/guide/example-es5/) | [查看](https://www.bilibili.com/video/BV1Hg411o7Js/) | [mars3d-es5-example](https://github.com/marsgis/mars3d-es5-example) | [mars3d-es5-example](https://gitee.com/marsgis/mars3d-es5-example) |
| React 版 | [查看](http://mars3d.cn/docs/guide/example-react/) | [查看](https://www.bilibili.com/video/BV1xY4y1t7NR/)、[高级篇](https://www.bilibili.com/video/BV1tX4y1Q7v7/) | [mars3d-react-example](https://github.com/marsgis/mars3d-react-example) | [mars3d-react-example](https://gitee.com/marsgis/mars3d-react-example) |

### 最简项目模板

提供 Vue、原生 JS、React、Angular、Electron、uni-app 等技术栈的最简项目模板，已统一维护在一个仓库：

- Github：[mars3d-templates](https://github.com/marsgis/mars3d-templates)
- Gitee：[mars3d-templates](https://gitee.com/marsgis/mars3d-templates)

可直接使用或参考这些模板，快速了解 SDK 在不同技术栈项目中如何引入。


### 通用项目模板

通用项目模板具备一个 GIS 项目常见功能，只需更换数据及叠加业务即可完成项目交付。更多功能可考虑[付费项目模板](http://mars3d.cn/buy.html?product=template)。

| 说明 | 教程 | 视频 | Github 源码 | 国内 Gitee 源码 |
|---|---|---|---|---|
| Vue 通用项目模板 | [查看](http://mars3d.cn/docs/guide/project-vue/) | [查看](https://www.bilibili.com/video/BV1JF411q7Ut/)、[高级篇](https://www.bilibili.com/video/BV1rM411j78s/) | [mars3d-vue-project](https://github.com/marsgis/mars3d-vue-project) | [mars3d-vue-project](https://gitee.com/marsgis/mars3d-vue-project) |
| 原生 JS 通用项目模板 | [查看](http://mars3d.cn/docs/guide/project-es5/) | [查看](https://www.bilibili.com/video/BV1nF41157Rn/) | [mars3d-es5-project](https://github.com/marsgis/mars3d-es5-project) | [mars3d-es5-project](https://gitee.com/marsgis/mars3d-es5-project) |
| React 通用项目模板 | [查看](http://mars3d.cn/docs/guide/project-react/) | [查看](https://www.bilibili.com/video/BV1n3411u7Dm/)、[高级篇](https://www.bilibili.com/video/BV1d84y1E7gR/) | [mars3d-react-project](https://github.com/marsgis/mars3d-react-project) | [mars3d-react-project](https://gitee.com/marsgis/mars3d-react-project) |
| APP 项目模板（Vue3+H5） | [查看](http://mars3d.cn/docs/guide/project-app/) | [查看](https://www.bilibili.com/video/BV1iY4y1t7jk/)、[高级篇](https://www.bilibili.com/video/BV1CD4y137jK/) | [mars3d-vue-app](https://github.com/marsgis/mars3d-vue-app) | [mars3d-vue-app](https://gitee.com/marsgis/mars3d-vue-app) |

### 在线效果

| 项目 | 在线体验 | 截图 |
|---|---|---|
| 功能示例 | [查看](http://mars3d.cn/example) | ![示例](http://marsgis.cn/img/project/mars3d-doc/example1.jpg) |
| 通用项目 Vue 版 | [查看](http://mars3d.cn/project/vue/) | ![Vue](https://cdn.marsgis.cn/mars3d-product/template/mars3d-vue-project/1.jpg) |
| 通用项目原生 JS 版 | [查看](http://mars3d.cn/project/es5/) | ![es5](https://cdn.marsgis.cn/mars3d-product/template/mars3d-es5-project/1.jpg) |
| 通用项目 React 版 | [查看](http://mars3d.cn/project/react/) | ![React](https://cdn.marsgis.cn/mars3d-product/template/mars3d-react-project/1.jpg) |
| 三维地球 APP 版 | [查看](http://mars3d.cn/project/app/) | ![APP](http://cdn.marsgis.cn/mars3d-product/template/mars3d-vue-app/1.jpg) |
| 工厂园区项目 | [查看](http://mars3d.cn/project/vue-gcyq/) | ![园区](https://cdn.marsgis.cn/mars3d-product/template/mars3d-vue-gcyq/1.jpg) |
| 美丽乡村项目 | [查看](http://mars3d.cn/project/vue-mlxc/) | ![乡村](https://cdn.marsgis.cn/mars3d-product/template/mars3d-vue-mlxc/1.jpg) |

### 在线工具

| 工具 | 地址 |
|---|---|
| 图层配置工具 | [studio.mars3d.cn](http://studio.mars3d.cn/project-map/offline-layer.html) |
| 图上标绘工具 | [studio.mars3d.cn](http://studio.mars3d.cn/project-map/offline-plot.html) |
| 地图场景配置工具 | [studio.mars3d.cn](http://studio.mars3d.cn/project-map/offline-map.html) |

## 授权协议

Mars3D SDK 采用 **“社区免费版 + 商业授权版”** 双重授权。

[![License](https://img.shields.io/badge/license-Apache--2.0%20%2B%20Mars3D%20Additional%20Terms-blue)](./LICENSE)

- **社区免费版**：基于 **Apache License 2.0**，并附加《Mars3D 免费版附加条款》。可免费用于学习、开发与商业项目，但**必须保留**软件运行时页面周边的 **Mars3D Logo** 和浏览器 **F12 控制台**输出的版权信息，**不得移除、遮挡、修改或通过任何技术手段规避**。
- **商业授权版**：付费后可**去除页面 Logo**，F12 控制台信息替换为贵单位/项目名称，并提供盖章授权文件、专属技术支持与缺陷修复服务；**不限制项目数、节点数、用户数和使用期限**，按 SDK 大版本授权。

| | 社区免费版 | 商业授权版 |
| --- | --- | --- |
| 页面 Logo | ✅ 必须保留 | ❌ 已移除 |
| F12 控制台信息 | 通用版权信息（须保留） | 显示贵单位名称 |
| 授权费用 | 免费 | 按大版本一次性付费 |
| 数量 / 期限限制 | 无 | 无 |
| 商业交付 / 招投标 | 须保留署名 | 提供盖章授权，合规无忧 |

📘 完整协议：[`LICENSE`](./LICENSE) ｜ [购买授权](http://mars3d.cn/buy.html)
