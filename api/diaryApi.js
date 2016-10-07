var DiaryQuery = require('../db/diaryQuery');

var DiaryApi = function(app) {
  var query = new DiaryQuery();
  
  app.get('/api/diary', function(req, res) {
    query.all(function(results){
      res.json(results);
    });
  });

  app.post('/api/diary', function(req, res) {
    // var string = JSON.parse(req.body.entry)
    // console.log("req" + req);
    // console.log("res" + res);
    console.log(req.body);
    query.send(req.body.entry);
  });
}

module.exports = DiaryApi;