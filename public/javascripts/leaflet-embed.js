var map;

function loadGPX(fn) {
  var gpxFile = typeof fn !== 'undefined'
                       ? 'gpx/' + fn
                       : 'gpx/1744902.gpx';
  new L.GPX(gpxFile, {async: true}).on('loaded', function(e) {
    map.fitBounds(e.target.getBounds());
  }).addTo(map);
}

$(document).ready(function(){
  var url = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  var copyright = 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>';

  map = new L.Map('map');
  map.setView([41.5, -73], 10);
  L.tileLayer(url, {
      attribution: copyright,
      maxZoom: 18
  }).addTo(map);

  loadGPX();
});
$(function(){
  $('#gpxlist').on('click', 'li', function(){
    loadGPX($(this).html());
  });
});
