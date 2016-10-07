var DiaryEntry = require('./diary_entry');


var Diary = function(){}

Diary.prototype = {
  all: function(callback){
    var self = this;
    this.makeRequest('http:/localhost:3000/api/diary', function(){
      if (this.status != 200) return;
      var jsonString = this.responseText;
      var results = JSON.parse(jsonString);

      var diary = self.populateDiary(results);
      callback(diary);
    });
  },
  populateDiary: function(results){
    var diary = []

    for (var result of results){
      var diaryEntry = new DiaryEntry(result);
      diary.push(diaryEntry);
    }
    return diary;
  }, 

  makeRequest: function(url, callback){
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = callback;
    request.send();
  }
}

module.exports = Diary;