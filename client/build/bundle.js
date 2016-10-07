/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	var Ajax = __webpack_require__(151);

	var Map = __webpack_require__(1);
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

/***/ },

/***/ 1:
/***/ function(module, exports) {

	var Map =  function( container, centre, zoom ){

	  this.googleMap = new google.maps.Map( container, {
	    center: centre,
	    zoom: zoom
	  });

	  var marker;

	  this.createMarker = function(){
	    marker = new google.maps.Marker({
	      map: this.googleMap,
	      position: this.googleMap.center
	    })
	  };

	  this.addClickListener = function(){
	    google.maps.event.addListener(this.googleMap, "click", function( event ){
	      var newCoords = {
	        lat: event.latLng.lat(),
	        lng: event.latLng.lng()
	      }
	      marker.setPosition(newCoords);
	    })
	  };

	  this.markerPosition = function(){
	    return marker.position;
	  }


	}

	module.exports = Map;

/***/ },

/***/ 151:
/***/ function(module, exports) {

	var Ajax= function(){}

	Ajax.prototype = {
	  makeGetRequest: function(url, callback){
	    var request = new XMLHttpRequest();
	    request.open('GET', url);
	    request.onload = callback;
	    request.send();
	  },

	  makePostRequest: function(url, diaryInput){
	    var request = new XMLHttpRequest();
	    console.log(diaryInput);
	    request.open('POST', url);
	    request.setRequestHeader('Content-Type', 'application/json');
	    console.log("diaryInput2", diaryInput)
	    request.onload = function(){
	      // if(Ajax.request = 200){
	      //   console.log("success");
	      // }
	      console.log("Make post request on load call back");
	    };

	    request.send(JSON.stringify(diaryInput));
	  }

	}

	module.exports = Ajax;

/***/ }

/******/ });