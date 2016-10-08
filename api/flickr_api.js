var FlickrApi = function(){
  this.url = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=6de6eb699bf1c7099efd3d1a62d98392&tags=cat&format=json&per_page=5&nojsoncallback=1";
}

FlickrApi.prototype = {
  makeRequest: function(){
    var self = this;
    var request = new XMLHttpRequest();
    request.open("GET", this.url);
    request.onload = function(){
      if(this.status !== 200) {
        console.log(this.status);
        return;
      }
      json = this.responseText;
      var parsedJson = JSON.parse(json);
      self.makeFlickrUrl(parsedJson);
    }
    request.send();
  }, 
  makeFlickrUrl: function(parsedJson){
    for (var i = 0; i < parsedJson.photos.photo.length; i++){
      var src = "https://farm" + parsedJson.photos.photo[i].farm + ".staticflickr.com/" + parsedJson.photos.photo[i].server + "/" + parsedJson.photos.photo[i].id + "_" + parsedJson.photos.photo[i].secret + "_n.jpg";
    } 
    console.log(src);  
  }

}

module.exports = FlickrApi;