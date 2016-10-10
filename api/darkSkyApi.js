var DarkSky = function(){

}

DarkSky.prototype = {
  makeRequest: function(latlng){
    var request = new XMLHttpRequest();
    var url = "https://api.darksky.net/forecast/300c779353c13edd690f729a0f9e8b31/"+latlng.lat()+","+latlng.lng()+"?units=uk2"
    request.open("GET", url)
    request.onload = function(){
     var weatherData = JSON.parse( this.responseText );
     console.log(weatherData);
     console.log(new Date((weatherData.daily.data[0].sunriseTime)*1000));
     console.log(new Date((weatherData.daily.data[0].sunsetTime)*1000));
    }
    request.send();
  }

  
}

module.exports = DarkSky;