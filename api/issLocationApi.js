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
      var newCoords = {
        lat:parseInt(parsedJson.iss_position.latitude),
        lng:parseInt(parsedJson.iss_position.longitude)
      } 
      console.log(newCoords);
      map.setMarker(newCoords);

    }
    request.send();
  }
}

module.exports = IssLocationApi;

