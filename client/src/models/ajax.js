var Ajax= function(){}

Ajax.prototype = {
  makeGetRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  },

  makePostRequest: function(url, diaryInput){
    var request = new XMLHttpRequest();
    console.log(diaryInput);
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/json');
    console.log("diaryInput2", diaryInput)
    request.onload = function(){
      // if(Ajax.request = 200){
      //   console.log("success");
      // }
      console.log("Make post request on load call back");
    };

    request.send(JSON.stringify(diaryInput));
  },

  makeDeleteRequest: function( url, title ){
    var request = new XMLHttpRequest();
    request.open('DELETE', url, true);
    request.setRequestHeader('Content-Type', 'application/json');
    // var diaryId = {_id: id};
    // console.log(diaryId);
    request.send(JSON.stringify({"title": title}));
  }

}

module.exports = Ajax;