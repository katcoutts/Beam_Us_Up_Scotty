var Map = require("./src/models/map");

var app = function(){
  var container = document.getElementById("welcome_map");
  var centre = {lat:0, lng:0};
  var zoom = 2;
  var map = new Map( container, centre, zoom );

  map.createMarker();
  map.addClickListener();

  var submitButton = document.getElementById('submitDiary');

  submitButton.onclick = function(){
    var text = document.getElementById('diaryText').value;
    var date = document.getElementById('date').value;
    var title = document.getElementById('title').value;
    var diaryInput = {
      text: text,
      date: date,
      title: title
    }
    console.log(diaryInput);
  };


}

window.onload = app;