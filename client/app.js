var Map = require("./src/models/map");

var app = function(){
  var container = document.getElementById("welcome_map");
  var centre = {lat:0, lng:0};
  var zoom = 4;
  var map = new Map( container, centre, zoom );
}

window.onload = app;