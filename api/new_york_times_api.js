var FaveNews = require('../client/src/models/faveNews');
var faveNews = new FaveNews();

var NYTApi = function(){
  
  
}

NYTApi.prototype = {
  makeRequest: function(keyword, callback){
    var self = this;
    var url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q="+keyword+"&page=2&sort=newest&api-key=61724d22315245a79f7e5b3856dc562f";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(this.status !== 200) {
         return 
       }
       json = this.responseText;
       var parsedJson = JSON.parse(json);
       callback(parsedJson);
    }
    request.send();

  }
  
}



module.exports = NYTApi;