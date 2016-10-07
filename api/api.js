// var app = function(){
//   var url = "https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=6de6eb699bf1c7099efd3d1a62d98392&tags=cat&format=json&per_page=5&nojsoncallback=1"
//   makeRequest(url, requestComplete);
// }
// 
// app

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  
  request.send();
}

var requestComplete = function(){
  if(this.status !== 200) {
    return;
  }
  json = this.responseText;
  var parsedJson = JSON.parse(json);
  return parsedJson;
  // for (var i = 0; i < parsedJson.photos.photo.length; i++){
  //   var src = "https://farm" + parsedJson.photos.photo[i].farm + ".staticflickr.com/" + parsedJson.photos.photo[i].server + "/" + parsedJson.photos.photo[i].id + "_" + parsedJson.photos.photo[i].secret + "_n.jpg";
  }
}

// window.onload = app;