var IssPassOverApi = function(){} 

IssPassOverApi.prototype = {
  makeRequest: function(map){
// GET LAT AND LONG FROM ON EVENT CLICK LISTENER AND THE PUT THEM INTO THE URL AND MAKE THE REQUEST.


    url = "http://api.open-notify.org/iss-pass.json?lat="+lat"&lon="+long;
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(this.status !== 200) {
        return;
      }
      json = this.responseText;
      var parsedJson = JSON.parse(json);
      console.log(parsedJson);
      

// NEED TO THEN WORK OUT HOW TO TURN THE INFO INTO A PROPER DATE FOR THE NEXT PASSING TIME.
    }
    request.send();
  }
}

module.exports = IssPassOverApi;
