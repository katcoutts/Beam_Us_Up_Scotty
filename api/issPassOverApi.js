var Map = require('../client/src/models/map')

var IssPassOverApi = function(){} 

var myDate;
var time; 

IssPassOverApi.prototype = {
  makeRequest: function(position, map){

    url = "http://api.open-notify.org/iss-pass.json?lat=" +position.lat + "&lon=" + position.lng;
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(this.status !== 200) {
        return;
      }
      json = this.responseText;
      var parsedJson = JSON.parse(json);
      console.log(parsedJson);
      requestTime = (parsedJson.request.datetime) * 1000;
      time = (parsedJson.response[0].risetime) * 1000;
      timeDiff = time - requestTime;
      console.log(timeDiff);
      console.log(time);
      myDate = new Date(time);
      console.log(myDate);
      var text = document.createElement('p');
      text.innerText = "Next pass over on "+ myDate;
      map.updateWindow(text);
    }
    request.send();
  }
}

module.exports = IssPassOverApi;
