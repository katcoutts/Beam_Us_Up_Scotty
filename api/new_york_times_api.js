var FaveNews = require('../client/src/models/faveNews');
var faveNews = new FaveNews();

var NYTApi = function(){
  
  
}

NYTApi.prototype = {
  makeRequest: function(keyword){
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
       self.makeArticle(parsedJson);
    }
    request.send();
  },

  handleFaveButtonClick: function(){
    faveNews.addNewsItem(this.value);
    console.log("this.value" + JSON.parse(this.value));
    console.log(this.value.title);
    console.log("this" + this);
    window.alert("Saved to favourite news")

  },
  /// TODO: Move this function into UI folder
  makeArticle: function(parsedJson){
    var container = document.getElementById('news_info'); 
    var ul = document.createElement('ul');
    for(article of parsedJson.response.docs){
      var li = document.createElement('li');

      var heading = document.createElement('h3');
      heading.innerText = article.headline.print_headline;

      var summary = document.createElement('p');
      summary.innerText = article.snippet;

      var date = document.createElement('p');
      date.innerText = article.pub_date;

      var newsValue = {
        title: article.headline.print_headline,
        summary: article.snippet,
        date: article.pub_date
      };

      var faveButton = document.createElement("button");
      faveButton.id = "newsFaveButton";
      faveButton.innerText = "Favourite";
      faveButton.value = JSON.stringify(newsValue);
      faveButton.onclick = this.handleFaveButtonClick;

      li.appendChild(heading);
      li.appendChild(summary);
      li.appendChild(date);
      li.appendChild(faveButton);
      ul.appendChild(li);
      
    }
    container.appendChild(ul);
  }
}

module.exports = NYTApi;