require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/Graphic",
  "esri/layers/arcGis"

  ], function(esriConfig,Map, MapView, Graphic, arcGis) {

esriConfig.apiKey = "AAPK6de19455c4e94bbf910b77522a96ca55zVUi4C5baOyVoXlW0CL_LAz2yIzMENKoQmWx2nKVzx30TIvGNmNyvI_jzFq044xy";

const map = new Map({
  basemap: "arcgis-topographic" //Basemap layer service
});

const view = new MapView({
  map: map,
  center: [1.3833318, 42.666664], //Longitude, latitude
  zoom: 13,
  container: "arcGis"
});

const arcGis = new arcGis();
map.add(arcGis);

  // Create a line geometry
const polyline = {
  type: "polyline",
  paths: [
      [1.4037504728784571, 42.66006063061115],
      [1.4028846949186204, 42.66088541777065], 
      [1.4026879272004757, 42.66112416990641], 
      [1.4020779472742273, 42.66174636813422],
      [1.4017532805392885, 42.662202160559104],
      [1.4013244764051795, 42.66443177949482],
      [1.3987280981493002, 42.66624629049434],
      [1.39667889023579, 42.66800552669521],
      [1.3950695649824505, 42.6683684122637],
      [1.3920762199469263, 42.668541965483584],
      [1.3910033360256284, 42.66805285972517],
      [1.387795414353971, 42.66837630106646,]
  ]
};
const simpleLineSymbol = {
  type: "simple-line",
  color: [26, 58, 58], // Orange
  width: 4
};

const polylineGraphic = new Graphic({
  geometry: polyline,
  symbol: simpleLineSymbol
});
graphicsLayer.add(polylineGraphic);

const point = { //Create a point
  type: "point",
  longitude: 1.3978838370754176,
  latitude: 42.66687876721275 
};

const simpleMarkerSymbol = {
  type: "simple-marker",
  color: [226, 119, 40],  // Orange
  outline: {
      color: [255, 255, 255], // White
      width: 1
  }
};

const pointGraphic = new Graphic({
  geometry: point,
  symbol: simpleMarkerSymbol
});
graphicsLayer.add(pointGraphic);

// Create a polygon geometry
const polygon = {
  type: "polygon",
  rings: [
      [-118.818984489994, 34.0137559967283], //Longitude, latitude
      [-118.806796597377, 34.0215816298725], //Longitude, latitude
      [-118.791432890735, 34.0163883241613], //Longitude, latitude
      [-118.79596686535, 34.008564864635],   //Longitude, latitude
      [-118.808558110679, 34.0035027131376]  //Longitude, latitude
  ]
};

const simpleFillSymbol = {
  type: "simple-fill",
  color: [26, 58, 58, 0.8],  // Orange, opacity 80%
  outline: {
      color: [26, 58, 58],
      width: 1
  }
};

const popupTemplate = {
  title: "{Name}",
  content: "{Description}"
}
const attributes = {
  Name: "Graphic",
  Description: "I am a polygon"
}

const polygonGraphic = new Graphic({
  geometry: polygon,
  symbol: simpleFillSymbol,

  attributes: attributes,
  popupTemplate: popupTemplate

});
graphicsLayer.add(polygonGraphic);

});