var Ajax = require('./src/models/ajax');

var NYTApi = require('../api/new_york_times_api');
var nytApi = new NYTApi();
var FlickrApi = require('../api/flickr_api');
var flickrApi = new FlickrApi();
var DarkSky = require('../api/darkSkyApi');
var darkSky = new DarkSky();

var Clock = require('./src/models/clock');



var DiaryUI = require('./src/views/diaryui');
var IssLocationApi = require('../api/issLocationApi');


var Map = require("./src/models/map");
var map;

var handleSetHomeButton = function(){
  var latlng = map.markerPosition()
  
  // var array = map.geocodeLatLng();
  var country = localStorage.getItem("country");
  console.log(country);
  var welcomeDiv = document.getElementById("select_home_page");
  welcomeDiv.style.display = "none";

  var nytrequest = localStorage.getItem("region and country")

  nytApi.makeRequest(country);

  // nytApi.makeRequest();
  flickrApi.makeRequest(country);
  darkSky.makeRequest(latlng);

  


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

var handleClockTest = function(){
  
};

var app = function(){
  // var container = document.getElementById("welcome_map");
  // var centre = {lat:0, lng:0};
  // var zoom = 2;
  // map = new Map( container, centre, zoom );

  // var setHomeButton = document.getElementById("set_home");
  // setHomeButton.onclick = handleSetHomeButton;

  // map.createMarker();
  // map.addClickListener();

  // var submitButton = document.getElementById('submitDiary');

  var form = document.querySelector('#diary_form');
  form.onsubmit = handleSubmitButton;

// KAT'S STUFF FOR CHECKING OUT DIV STYLING
  var mapButton = document.querySelector('#map_page_entry');
  mapButton.onclick = function(){
    var header = document.querySelector('#header');
    header.style.display='none';
    var landingPage = document.querySelector('#landing_page');
    landingPage.style.display='none';
    var mapPage = document.querySelector('#select_home_page');
    mapPage.style.display='block';
    var container = document.getElementById("welcome_map");
    var centre = {lat:0, lng:0};
    var zoom = 2;
    map = new Map( container, centre, zoom );
    map.createMarker();
    map.addClickListener();
    var submitLocationButton = document.querySelector('#set_home');
    submitLocationButton.onclick = function(){
      var mapPage = document.querySelector('#select_home_page');
      mapPage.style.display='none';
      var homeInfoPage = document.querySelector('#home_info_page');
      homeInfoPage.style.display='block';
      var header = document.querySelector('#header');
      header.innerHTML = "News From Home";
      handleSetHomeButton();
    }
  }

  var diaryEntryButton = document.querySelector('#add_diary_entry');
  diaryEntryButton.onclick = function(){
    var header = document.querySelector('#header');
    header.style.display='none';
    var landingPage = document.querySelector('#landing_page');
    landingPage.style.display='none';
    var diaryEntryPage = document.querySelector('#diary_entry_form');
    diaryEntryPage.style.display='block';
    var diarySubmitButton = document.querySelector('#submitDiary');
    diarySubmitButton.onclick = function(){
      var diaryEntryPage = document.querySelector('#diary_entry_form');
      diaryEntryPage.style.display='none';
      var diaryViewPage = document.querySelector('#view_diary_page');
      diaryViewPage.style.display ='block';
      new DiaryUI();
      location.reload();
    }
  }

  var diaryButton = document.querySelector('#diary_entry');
  diaryButton.onclick=function(){
    var header = document.querySelector('#header');
    header.style.display='none';
    var landingPage = document.querySelector('#landing_page');
    landingPage.style.display='none';
    var diaryViewPage = document.querySelector('#view_diary_page');
    diaryViewPage.style.display ='block';
    new DiaryUI();
  }

  var issLocationButton = document.querySelector('#iss_page_entry');
  issLocationButton.onclick = function(){
    var container = document.getElementById("iss_location_map");
    var centre = {lat:0, lng:0};
    var zoom = 2;
    map = new Map( container, centre, zoom );
    var issLocationApi = new IssLocationApi();
    var issLocation = issLocationApi.makeRequest(map);
    var header = document.querySelector('#header');
    header.style.display='none';
    var landingPage = document.querySelector('#landing_page');
    landingPage.style.display='none';
    var issLocationPage = document.querySelector('#iss_location_page');
    issLocationPage.style.display ='block';
    map.createMarker();
    map.addFancyMarker();
    map.addClickEvent();
  }

  var homePageButtons = document.querySelectorAll('.homepage')
    for (var homePageButton of homePageButtons){
  homePageButton.onclick = function(){
    location.reload();
  }
  }
  var clock = new Clock();
  clock.startClock();

  }

window.onload = app;