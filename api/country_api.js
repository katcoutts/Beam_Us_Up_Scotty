var ITunesApi = require('./iTunes_api');
var iTunesApi = new ITunesApi();

var CountryApi = function(country){

}

CountryApi.prototype = {
  makeRequest: function(country) {
    var self = this;
    var url = "https://restcountries.eu/rest/v1/name/"+ country + "?fullText=true";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(this.status != 200){
        return;
      }
      json = this.responseText;
      var parsedJson = JSON.parse(json);
      self.makeCountryCode(parsedJson);
    }
    request.send();
  },
  makeCountryCode: function(parsedJson){
    var countryCode = parsedJson[0].alpha2Code.toLowerCase();
    iTunesApi.makeRequest(countryCode);
  }

}

module.exports = CountryApi;
