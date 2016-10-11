var self;
var DarkSkyUi = function(){
  self = this;
}

DarkSkyUi.prototype = {
  makeWeatherImage: function(url){
    var element = document.createElement("img");
    element.src = url;
    return element;
  },

  makePtag: function(id, text){
    var pTag = document.createElement("p");
    pTag.innerText = text;
    pTag.id = id;
    return pTag;
  },

  appendToContainer: function(container, element){
    container.appendChild(element);
  },

  makeWeatherDisplay: function(weatherData){
    var container = document.getElementById("weather_info");
    var container2 = document.getElementById("sunrise_sunset");

    var currentTemp = self.makePtag("currentTemp", "Current Temperature: "+weatherData.currently.temperature + " °C");
    

    var weatherSummary = self.makePtag("weatherSummary", "Summary: " + weatherData.daily.data[0].summary);
   

    var sunrise = self.makePtag("sunriseTime", "Sunrise: " + new Date((weatherData.daily.data[0].sunriseTime)*1000));
    
    var sunset = self.makePtag("sunsetTime", "Sunset: " + new Date((weatherData.daily.data[0].sunsetTime)*1000));

    var sun = self.makeWeatherImage("http://localhost:3000/public/Sunimg.jpg");
    var moon = self.makeWeatherImage("http://localhost:3000/public/weemoonimg.jpg")    

    self.appendToContainer(container, currentTemp);
    self.appendToContainer(container, weatherSummary);
    self.appendToContainer(container2, sun);
    self.appendToContainer(container2, sunrise);
    self.appendToContainer(container2, moon);
    self.appendToContainer(container2, sunset);
  
  }

}

module.exports = DarkSkyUi;