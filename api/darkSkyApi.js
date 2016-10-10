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
     console.log(weatherData);
     console.log(new Date((weatherData.daily.data[0].sunriseTime)*1000));
     console.log(new Date((weatherData.daily.data[0].sunsetTime)*1000));
     self.makeWeatherDisplay(weatherData);
    };
    request.send();
  },

  makeWeatherDisplay: function(weatherData){
    console.log("make weather display called")
    var container = document.getElementById("weather_info");

    var currentTemp = document.createElement("p");
    currentTemp.innerText = "Current Temperature: "+weatherData.currently.temperature;

    var weatherSummary = document.createElement("p");
    weatherSummary.innerText = "Summary: " + weatherData.daily.data[0].summary;

    var sunrise = document.createElement("p");
    sunrise.innerText = "Sunrise: " + new Date((weatherData.daily.data[0].sunriseTime)*1000);

    var sunset = document.createElement("p");
    sunset.innerText = "Sunset: " + new Date((weatherData.daily.data[0].sunsetTime)*1000);

    container.appendChild(currentTemp);
    container.appendChild(weatherSummary);
    container.appendChild(sunrise);
    container.appendChild(sunset);
  }

  
}

module.exports = DarkSky;