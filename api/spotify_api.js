var SpotifyApi = function(){
}

SpotifyApi.prototype = {
  makeRequest: function(){
    var self = this;
    var url = "https://itunes.apple.com/us/rss/topsongs/limit=10/json";
    var request = new XMLHttpRequest();
    request.open("GET", url);
    // request.setRequestHeader('Authorization', 'Bearer BQDt220SBSiUt7XIOXLunlhGYPdRZHRcAIIZ2YXDn3jieTSkJWXfNA9Xw7_aRbOgv9xRQ6-dIVODCixFtukuy52vvsPj_Oe9S-ZCo49cTgIi41r02R-ml5vpBaSIyoOyQR_MGfTMsS8');
    request.onload = function(){
      if(this.status !== 200) {
        return;
      }
      json = this.responseText;
      var parsedJson = JSON.parse(json);
      self.makeSpotifyUrl(parsedJson);
    }
    request.send();
  }, 
  makeSpotifyUrl: function(parsedJson){
    console.log(parsedJson);
    // var container = document.getElementById('Spotifyimages')
    // var ul = document.createElement('ul');
    // for (var i = 0; i < parsedJson.photos.photo.length; i++){
    //   var src = "https://farm" + parsedJson.photos.photo[i].farm + ".staticSpotify.com/" + parsedJson.photos.photo[i].server + "/" + parsedJson.photos.photo[i].id + "_" + parsedJson.photos.photo[i].secret + "_n.jpg";
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

module.exports = SpotifyApi;