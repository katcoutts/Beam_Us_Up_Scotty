var IssLocationApi = function(){} 

IssLocationApi.prototype = {
  makeRequest: function(){
    url = "http://api.open-notify.org/iss-now.json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(this.status !== 200) {
        return;
      }
      json = this.responseText;
      var parsedJson = JSON.parse(json);
      console.log(parsedJson);
    }
    request.send();
  }
}

module.exports = IssLocationApi;

