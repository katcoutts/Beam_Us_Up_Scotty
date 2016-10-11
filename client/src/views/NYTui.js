var self;

var NYTui = function(){
  self = this;
}

NYTui.prototype = {

  handleFaveButtonClick: function(){
    faveNews.addNewsItem(this.value);
    console.log("this.value" + JSON.parse(this.value));
    console.log(this.value.title);
    console.log("this" + this);
  },
  

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
      faveButton.onclick = self.handleFaveButtonClick;

      li.appendChild(heading);
      li.appendChild(summary);
      li.appendChild(date);
      li.appendChild(faveButton);
      ul.appendChild(li);
      
    }
    container.appendChild(ul);
  }

}

module.exports = NYTui;


