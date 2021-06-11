# mars3d-plugin-wind

Mars3D平台插件, 支持气象 风向图 功能插件
 

## 参考来源
  WindLayer 参考了： https://github.com/RaymanNg/3D-Wind-Field
  CanvasWindLayer 参考了: https://blog.csdn.net/axiwang88/article/details/105737114


# 如何获取WindLayer用到的NetCDF文件（.nc）数据

演示数据来自NOAA全球预报系统。原始数据为GRIB2格式，我使用toolsUI将GRIB2文件转换为NetCDF V3文件。
NOAA全球预报系统：https://www.ncdc.noaa.gov/data-access/model-data/model-datasets/global-forcast-system-gfs

您可以使用NCO（NetCDF运算符）来进一步处理NetCDF数据。我已经编写了一个PowerShell脚本，以通过使用NCO提取和转换数据。您可以检查“ Util”文件夹以获取详细信息。
https://www.unidata.ucar.edu/software/netcdf-java/v4.5/ToolsUI.html
