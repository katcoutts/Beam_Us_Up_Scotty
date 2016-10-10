var ITunesApi = function(){
}

ITunesApi.prototype = {
  makeRequest: function(){
    var self = this;
    var url = "https://itunes.apple.com/us/rss/topsongs/limit=10/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    
    request.onload = function(){
      if(this.status !== 200) {
        return;
      }
      json = this.responseText;
      var parsedJson = JSON.parse(json);
      self.makeITunesUrl(parsedJson);
    }
    request.send();
  }, 
  makeITunesUrl: function(parsedJson){
    console.log(parsedJson);
    var container = document.getElementById('')
    // var container = document.getElementById('ITunesimages')
    // var ul = document.createElement('ul');
    // for (var i = 0; i < parsedJson.photos.photo.length; i++){
    //   var src = "https://farm" + parsedJson.photos.photo[i].farm + ".staticITunes.com/" + parsedJson.photos.photo[i].server + "/" + parsedJson.photos.photo[i].id + "_" + parsedJson.photos.photo[i].secret + "_n.jpg";
    //   // photosArray.push(src);
    //   var li = document.createElement('li');
    //   var img = document.createElement('img');
    //   img.setAttribute('src', src);
    //   li.appendChild(img);
    //   ul.appendChild(li);
    // }
    // container.appendChild(ul);

  }

}

module.exports = ITunesApi;