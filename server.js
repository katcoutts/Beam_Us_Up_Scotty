var express = require('express');
var app = express();
var path = require('path');

var bodyParser = require('body-parser');

var DiaryApi = require('./api/diaryApi');

// public declaration 
app.use(express.static('./client/build'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
  new DiaryApi(app);
  console.log('app running on port' + this.address().port);
});

app.get('/', function(req, res){
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});
