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
         console.log("error", this.status);
       }
       json = this.responseText;
       var parsedJson = JSON.parse(json);
       self.makeArticle(parsedJson);
    }
    request.send();
  },

  makeArticle: function(parsedJson){
    var container = document.getElementById('news_info'); 
    console.log(container);
    console.log("make article");
    var ul = document.createElement('ul');
    for(article of parsedJson.response.docs){
      var li = document.createElement('li');

      var heading = document.createElement('h3');
      heading.innerText = article.headline.print_headline;

      var summary = document.createElement('p');
      summary.innerText = article.snippet;

      var date = document.createElement('p');
      date.innerText = article.pub_date;

      li.appendChild(heading);
      li.appendChild(summary);
      li.appendChild(date);
      ul.appendChild(li);
      
    }
    container.appendChild(ul);
  }
}

module.exports = NYTApi;