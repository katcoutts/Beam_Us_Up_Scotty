var FlickrApi = function(country){
}

FlickrApi.prototype = {
  makeRequest: function( country ){
    var url = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=6de6eb699bf1c7099efd3d1a62d98392&tags="+country+"&format=json&per_page=10&accuacy=3&sort=relevance&content_type=1&safe_search=1&nojsoncallback=1";
    var self = this;
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function(){
      if(this.status !== 200) {
        return;
      }
      json = this.responseText;
      var parsedJson = JSON.parse(json);
      self.makeFlickrUrl(parsedJson);
    }
    request.send();
  }, 
  makeFlickrUrl: function(parsedJson){
    var container = document.getElementById('flickrimages')
    var ul = document.createElement('ul');
    for (var i = 0; i < parsedJson.photos.photo.length; i++){
      var src = "https://farm" + parsedJson.photos.photo[i].farm + ".staticflickr.com/" + parsedJson.photos.photo[i].server + "/" + parsedJson.photos.photo[i].id + "_" + parsedJson.photos.photo[i].secret + "_n.jpg";
      // photosArray.push(src);
      var li = document.createElement('li');
      var img = document.createElement('img');
      img.setAttribute('src', src);
      li.appendChild(img);
      ul.appendChild(li);
    }
    container.appendChild(ul);

    

  }

}

module.exports = FlickrApi;