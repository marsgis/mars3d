#terraformer gis格式转换插件

官方网站：http://terraformer.io/
github地址： https://github.com/Esri/terraformer
            https://github.com/Esri/terraformer-wkt-parser
 
 


 =============================================================

// parse ArcGIS JSON, convert it to a Terraformer.Primitive
var primitive = Terraformer.ArcGIS.parse({
  x:"-122.6764",
  y:"45.5165",
  spatialReference: {
    wkid: 4326
  }
});

// take a Terraformer.Primitive or GeoJSON and convert it to ArcGIS JSON
var point = Terraformer.ArcGIS.convert({
  "type": "Point",
  "coordinates": [45.5165, -122.6764]
});




 ============================================================= 

 // parse a WKT file, convert it into a primitive
var primitive = Terraformer.WKT.parse('LINESTRING (30 10, 10 30, 40 40)');

// take a primitive and convert it into a WKT representation
var polygon = Terraformer.WKT.convert({
  "type": "Polygon",
  "coordinates": [
    [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0], [100.0, 1.0], [100.0, 0.0] ],
    [ [100.2, 0.2], [100.8, 0.2], [100.8, 0.8], [100.2, 0.8], [100.2, 0.2] ]
  ]
});
 
 
