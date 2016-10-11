var ITunesApi = function(countryCode){
}

ITunesApi.prototype = {
  makeRequest: function(countryCode){
    var self = this;
    var url = "https://itunes.apple.com/"+countryCode+"/rss/topsongs/limit=10/json";
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
  /// TODO: Move this function into UI folder
  makeITunesUrl: function(parsedJson){
    var container = document.getElementById('iTunes-music');
    var ul = document.createElement('ul');
    for (var i = 0; i < parsedJson.feed.entry.length; i++){
      // Getting elements form json 
      
      var songName = parsedJson.feed.entry[i]['im:artist'].label;
      var artist = parsedJson.feed.entry[i]['im:collection']['im:name'].label;
      var image = parsedJson.feed.entry[i]['im:image'][2].label;
      // var artist = parsedJson.feed.entry[i].link[1].attributes.href;
      
      // Creating tags and passing text 
      var div = document.createElement('div');
      var songNameParagraph = document.createElement('p');
      var artistParagraph = document.createElement('p');
      songNameParagraph.innerText = "Song Name: " + songName;
      artistParagraph.innerText = "Artist: " + artist;
      var img = document.createElement('img');
      img.setAttribute('src', image);
      
      // Creating tags for audio
      var mp4 = parsedJson.feed.entry[i].link[1].attributes.href;
      var li = document.createElement('li');
      var audio = document.createElement('audio');
      audio.setAttribute('controls', true);
      var source = document.createElement('source');
      source.setAttribute('src', mp4);
      source.setAttribute('type', 'audio/mp4');

      // Creating DOM
      audio.appendChild(source);
      li.appendChild(audio);
      li.appendChild(songNameParagraph);
      li.appendChild(artistParagraph);
      li.appendChild(img);
      ul.appendChild(li);
    }
    container.appendChild(ul);

    // http://audio.itunes.apple.com/apple-assets-us-std-000001/AudioPreview62/v4/bd/6b/34/bd6b3443-d4c3-26fd-91c8-d0b31ab47ee3/mzaf_8046559398209773051.plus.aac.p.m4a
    
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