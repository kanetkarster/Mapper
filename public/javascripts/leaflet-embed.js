var map;
var cadastralLayer;
$(document).ready(function () {
  console.log('working!');

  var url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  var copyright = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';
  var tileLayer = new L.TileLayer(url, {maxZoom: 20, attribution: copyright});
  var startPosition = new L.LatLng(-27.43247,153.065654);

  map = new L.Map('map');
  map.setView([51.505, -0.09], 13);
  L.tileLayer(url, {
      attribution: copyright,
      maxZoom: 18
  }).addTo(map);
});
