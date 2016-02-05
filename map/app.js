var map;

function loadMap() {
    L.mapbox.accessToken = 'pk.eyJ1IjoiZGViYWtlbCIsImEiOiJjMWVJWEdFIn0.WtaUd8Rh0rgHRiyEZNzSjQ';

    map = L.mapbox.map('map', 'mapbox.dark')
        .setView([50.952,9.371], 7);

    L.control.locate().addTo(map);
    //var sidebar = L.control.sidebar('sidebar').addTo(map);
}
function loadGeoJSON() {
    var featureLayer = L.mapbox.featureLayer();
    featureLayer.on('layeradd', function (e) {
        var marker = e.layer,
            feature = marker.feature;
        marker.setIcon(L.divIcon(feature.properties.icon));
    });

    featureLayer.loadURL('data/features.geojson', onEachLayer = function () {

    });

    map.addLayer(featureLayer);
}

function init() {
    loadMap();
    loadGeoJSON();
}
window.onload = init();

