var Diary = require('../models/diary');

var DiaryUI = function() {
  var diary = new Diary();
  diary.all(function(result) {
    this.render(result);
  }.bind(this));
}

DiaryUI.prototype = {
  createText: function(text, label) {
    var p = document.createElement("p");
    p.innerText = label+text;
    return p;
  },

  appendText: function(element, text, label) {
    var pTag = this.createText(text, label);
    element.appendChild(pTag);
  },

  render: function(results) {
    var container = document.getElementById("diary_entries");

    for(var result of results) {
      var li = document.createElement("li");
      this.appendText(li, result.title, "Title: ");
      this.appendText(li, result.text, "Entry: ");
      this.appendText(li, result.date, "Date: ");
      
      container.appendChild(li);
    }
  }
}

module.exports = DiaryUI;