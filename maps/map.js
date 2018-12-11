// initialize the map
var map = L.map('map').setView([1.294592, 103.775601], 13);

// load a tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  maxZoom: 17,
  minZoom: 11
}).addTo(map);