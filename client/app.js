var Ajax = require('./src/models/ajax');

var Map = require("./src/models/map");
var map;

var handleSetHomeButton = function(){
  console.log(map.markerPosition());
  var welcomeDiv = document.getElementById("welcome_page");
  welcomeDiv.style.display = "none";
};

var handleSubmitButton = function(event){
  event.preventDefault();
  var ajax = new Ajax();
  var text = document.getElementById('diaryText').value;
  var date = document.getElementById('date').value;
  var title = document.getElementById('title').value;
  var diaryInput = {
    entry: {
      text: text,
      date: date,
      title: title 
    }
  }
  // var postRequest = function(){
  //     if (this.status != 200) console.log("not 200");
  //     // var jsonString = this.responseText;
  //     // var results = JSON.parse(jsonString);
  //     // var diary = self.populateDiary(results);
  //     console.log("hello")
  //     // callback(diary);
  // };
  console.log("before makePostRequest in app.js");
  ajax.makePostRequest('/api/diary', diaryInput )
};

var app = function(){
  var container = document.getElementById("welcome_map");
  var centre = {lat:0, lng:0};
  var zoom = 2;
  map = new Map( container, centre, zoom );

  var setHomeButton = document.getElementById("set_home");
  setHomeButton.onclick = handleSetHomeButton;

  map.createMarker();
  map.addClickListener();

  // var submitButton = document.getElementById('submitDiary');

  var form = document.querySelector('#diary_form');
  form.onsubmit = handleSubmitButton;


}

window.onload = app;