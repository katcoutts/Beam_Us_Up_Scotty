var Map =  function( container, centre, zoom ){

  this.googleMap = new google.maps.Map( container, {
    center: centre,
    zoom: zoom
  });

  
}