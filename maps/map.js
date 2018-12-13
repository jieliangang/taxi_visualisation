// initialize the map
var map = L.map('map').setView([1.294592, 103.775601], 13);
// load a tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
  maxZoom: 17,
  minZoom: 1
}).addTo(map);

//points
omnivore.csv('file/result.csv').addTo(map);

//snap button
var button = document.getElementById('snapButton');
button.addEventListener('click', () => console.log("Snap!"));

//slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = this.value;
}



