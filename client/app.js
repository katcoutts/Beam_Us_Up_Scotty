var Map = require("./src/models/map");

var app = function(){
  var container = document.getElementById("welcome_map");
  var centre = {lat:0, lng:0};
  var zoom = 2;
  var map = new Map( container, centre, zoom );

  map.createMarker();
  map.addClickListener();
}

window.onload = app;