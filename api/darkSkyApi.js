var DarkSky = function(){

}

DarkSky.prototype = {
  makeRequest: function(latlng){
    var request = new XMLHttpRequest();
    var self = this;
    var url = "https://api.darksky.net/forecast/300c779353c13edd690f729a0f9e8b31/"+latlng.lat()+","+latlng.lng()+"?units=uk2"
    request.open("GET", url)
    request.onload = function(){
     var weatherData = JSON.parse( this.responseText );
     self.makeWeatherDisplay(weatherData);
    };
    request.send();
  },

  makeWeatherDisplay: function(weatherData){
    var container = document.getElementById("weather_info");
    var container2 = document.getElementById("sunrise_sunset");

    var currentTemp = document.createElement("p");
    currentTemp.innerText = "Current Temperature: "+weatherData.currently.temperature;
    currentTemp.id = "currentTemp";

    var weatherSummary = document.createElement("p");
    weatherSummary.innerText = "Summary: " + weatherData.daily.data[0].summary;
    weatherSummary.id = "weatherSummary";

    var sunrise = document.createElement("p");
    sunrise.innerText = "Sunrise: " + new Date((weatherData.daily.data[0].sunriseTime)*1000);
    sunrise.id = "sunriseTime";

    var sun = document.createElement("img");
    sun.src = "http://localhost:3000/public/Sunimg.jpg";

    var sunset = document.createElement("p");
    sunset.innerText = "Sunset: " + new Date((weatherData.daily.data[0].sunsetTime)*1000);
    sunset.id = "sunsetTime";

    var moon = document.createElement("img");
    moon.src = "http://localhost:3000/public/weemoonimg.jpg";

    container.appendChild(currentTemp);
    container.appendChild(weatherSummary);
    container2.appendChild(sun);
    container2.appendChild(sunrise);
    container2.appendChild(moon);
    container2.appendChild(sunset);
  }

  
}

module.exports = DarkSky;