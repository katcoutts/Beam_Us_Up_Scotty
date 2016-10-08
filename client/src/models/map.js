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

  // this.addFancyMarker = function(image){
  //   marker.setIcon("ISSimage.png")
  // };

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
  };

  this.geocodeLatLng = function(){
    var geocoder = new google.maps.Geocoder;
    geocoder.geocode({"location": marker.position}, function( results, status ){
      console.log(results);
    })
  };

  this.setMarker = function(coords){
    marker.setPosition(coords);
  }


}

module.exports = Map;