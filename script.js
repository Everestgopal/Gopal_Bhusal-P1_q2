require([
  "esri/views/MapView",
  "esri/WebMap",
  "esri/widgets/Search",
  "esri/widgets/Legend"
], function(MapView, WebMap, Search, Legend) {

  const webmap = new WebMap({
    portalItem: {
      id: "5894f6f9a3a1499bb2e51488fe60ec24"
    }
  });

  const view = new MapView({
    container: "viewDiv",
    map: webmap
  });

  const searchWidget = new Search({
    view: view,
    container: "searchContainer"
  });

  const legend = new Legend({
    view: view
  });

  view.ui.add(searchWidget, "top-left");
  view.ui.add(legend, "top-right");

});