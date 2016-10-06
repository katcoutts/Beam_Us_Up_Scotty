var MongoClient = require('mongodb').MongoClient;

var DiaryQuery = function(){
  this.url = 'mongodb://localhost:27017/beam_us_up';
}

DiaryQuery.prototype = {
  all: function(onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('diary');
      collection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      });
    });
  }
}

module.exports = DiaryQuery;