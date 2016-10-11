var DarkSky = function(){

}

DarkSky.prototype = {
  makeRequest: function(latlng, Clock, callback){
    var request = new XMLHttpRequest();
    var self = this;
    var url = "https://api.darksky.net/forecast/300c779353c13edd690f729a0f9e8b31/"+latlng.lat()+","+latlng.lng()+"?units=uk2"
    request.open("GET", url)
    request.onload = function(){
       var weatherData = JSON.parse( this.responseText );
       localStorage.setItem("offset", weatherData.offset)
       var clock = new Clock();
       clock.startClock()
       callback(weatherData);
      };
    request.send();
  }
  
}

module.exports = DarkSky;