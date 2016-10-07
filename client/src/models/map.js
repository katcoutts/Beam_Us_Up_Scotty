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
    google.maps.event.addListener
  }


}

module.exports = Map;