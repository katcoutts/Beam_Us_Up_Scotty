var ITunesUi = function(){

}

ITunesUi.prototype = {
  
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

  }

}

module.exports = ITunesUi;