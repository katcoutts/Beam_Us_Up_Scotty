var Diary = require('../models/diary');

var DiaryUI = function() {
  var diary = new Diary();
  diary.all(function(result) {
    this.render(result);
  }.bind(this));
}

DiaryUI.prototype = {
  createText: function(text) {
    var p = document.createElement("p");
    p.innerText = text;
    return p;
  },

  appendText: function(element, text) {
    var pTag = this.createText(text);
    element.appendChild(pTag);
  },

  render: function(results) {
    var container = document.getElementById("diary_entries");

    for(var result of results) {
      var li = document.createElement("li");
      this.appendText(li, result.title);
      this.appendText(li, result.text);
      this.appendText(li, result.date);
      
      container.appendChild(li);
    }
  }
}

module.exports = DiaryUI;