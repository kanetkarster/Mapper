var map;

//Shows the GPX file on the map
function loadGPX(fn) {
  var gpxFile = 'gpx/'+fn;
  new L.GPX(gpxFile, {async: true}).on('loaded', function(e) {
    map.fitBounds(e.target.getBounds());
  }).addTo(map);
}

$(function(){
  //Creates the Leaflet Map
  var url = 'http://{s}.tile.thunderforest.com/cycle/{z}/{x}/{y}.png'
  //'http://{s}.tile.osm.org/{z}/{x}/{y}.png';
  var copyright = 'Map &copy <a href="http://www.thunderforest.com">Thunderforest</a>, \
                   Data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, \
                   <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>';

  map = new L.Map('map');
  L.tileLayer(url, {
      attribution: copyright,
      maxZoom: 18
  }).addTo(map);
  //Loads the first GPX file onto the Leaflet Map
  loadGPX($('#gpxelm').first().html());

//Click Handling on the List
  $('#gpxlist').on('click', 'li', function(){
    loadGPX($(this).html());
  });
});
