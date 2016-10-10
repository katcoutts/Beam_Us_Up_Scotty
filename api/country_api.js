var CountryApi = function(){

}

CountryApi.prototype = {
  makeRequest: function(url) {
    var self = this;
    var url = "https://restcountries.eu/rest/v1/all";
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
    console.log(parsedJson);

  }

}

module.exports = CountryApi;
