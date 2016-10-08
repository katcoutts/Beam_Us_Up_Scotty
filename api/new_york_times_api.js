var NYTApi = function(){
  this.url = "http://api.nytimes.com/svc/search/v2/articlesearch.json?q=Edinburgh&page=2&sort=newest&api-key=61724d22315245a79f7e5b3856dc562f";
  
}

NYTApi.prototype = {
  makeRequest: function(){
    var self = this;
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function(){
      if(this.status !== 200) {
         console.log("error", this.status);
       }
       json = this.responseText;
       var parsedJson = JSON.parse(json);
       console.log(parsedJson);
       self.makeArticle(parsedJson);
    }
    request.send();
  },

  makeArticle: function(parsedJson){
    for(article of parsedJson.response.docs){
      console.log(article.headline.main);
    }
  }
}

module.exports = NYTApi;