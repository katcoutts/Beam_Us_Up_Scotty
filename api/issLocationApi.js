var IssLocationApi = function(){} 

IssLocationApi.prototype = {
  makeRequest: function(map){
    url = "http://api.open-notify.org/iss-now.json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(this.status !== 200) {
        return;
      }
      json = this.responseText;
      var parsedJson = JSON.parse(json);
      console.log(parsedJson);
      var newCoords = {
        lat:parsedJson.iss_position.latitude,
        lng:parsedJson.iss_position.longitude
      } 
      // var marker = new google.maps.Marker({map: map, position: newCoords, animation: google.maps.Animation.DROP, icon: image});
      map.setMarker(newCoords);

    }
    request.send();
  }
}

module.exports = IssLocationApi;

