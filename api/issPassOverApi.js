var IssPassOverApi = function(){} 

var myDate;
var time; 

IssPassOverApi.prototype = {
  makeRequest: function(position, marker){
// GET LAT AND LONG FROM ON EVENT CLICK LISTENER AND THE PUT THEM INTO THE URL AND MAKE THE REQUEST.


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
      // var requestTime = (parsedJson.request.datetime) * 1000;
      time = (parsedJson.response[0].risetime) * 1000;
      // var timeToPoint = (time - requestTime);
      // console.log("Time to Point" + timeToPoint);
      console.log(time);
      myDate = new Date(time);
      console.log(myDate);
      var text = document.querySelector('#passover_time');
      text.innerText = "You will pass over this point on Earth at approximately "+ myDate;

// NEED TO THEN WORK OUT HOW TO TURN THE INFO INTO A PROPER DATE FOR THE NEXT PASSING TIME.
// var myDate = new Date(1476009011000);
// console.log(myDate);
    }
    request.send();
  }
}

module.exports = IssPassOverApi;
