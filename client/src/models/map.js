var IssPassOverApi = require('../../../api/issPassOverApi');

var Map =  function( container, centre, zoom ){

  this.googleMap = new google.maps.Map( container, {
    center: centre,
    zoom: zoom
  });

  var marker;

  this.createMarker = function(){
    marker = new google.maps.Marker({
      map: this.googleMap,
      position: this.googleMap.center,
      animation: google.maps.Animation.DROP
    })
  };

  this.addFancyMarker = function(image){
    marker.setIcon("http://localhost:3000/public/ISS-2011.png")
  };


  this.addClickListener = function(){
    var self = this;
    google.maps.event.addListener(this.googleMap, "click", function( event ){
      var newCoords = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
      marker.setPosition(newCoords);

      self.geocodeLatLng()

    })
  };


  var info_window;  

  this.addMarker = function(coordinates) {   
      var marker2 = new google.maps.Marker({map: this.googleMap, position: coordinates, animation: google.maps.Animation.DROP});
        info_window = new google.maps.InfoWindow({});
        info_window.open(this.googleMap, marker2);      
  };


  this.updateWindow = function(content){
    console.log("update window called")
    info_window.setContent(content);
  };



  this.addClickEvent = function(){
    var self = this;
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      var position = { lat: event.latLng.lat() , lng: event.latLng.lng()};
      this.addMarker(position);
      var issPassOverApi = new IssPassOverApi();
      var issPassOver = issPassOverApi.makeRequest(position, self);
      console.log(position);

    }.bind(this))
  };

  


  this.markerPosition = function(){
    return marker.position;
  };

  
  this.geocodeLatLng = function(){
    
    var geocoder = new google.maps.Geocoder;

    geocoder.geocode({"location": marker.position}, function( results, status ){
      console.log(results);
      localStorage.setItem("country", results[results.length -1 ].formatted_address);
      localStorage.setItem("region and country", results[results.length -2 ].formatted_address);
      console.log(localStorage.getItem("country"));

    })
  };

  this.setMarker = function(coords){
    marker.setPosition(coords);
  }




}

module.exports = Map;