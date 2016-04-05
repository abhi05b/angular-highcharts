var express = require('express');
var app = express();
app.use(express.static(__dirname+'/static'));
app.use(express.static(__dirname+'/node-modules'));
app.use(express.static(__dirname+'/scripts/dist'));
app.use(express.static(__dirname+'/layout'));
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/layout/index.html');
});
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});