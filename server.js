var express = require('express');
var app = express();
app.use(express.static(__dirname+'/static'));
app.use(express.static(__dirname+'/node-modules'));
app.use(express.static(__dirname+'/scripts/dist'));
app.use(express.static(__dirname+'/layout'));
app.get('/', function(req, res) {
  res.sendFile(__dirname+'/layout/index.html');
});
app.listen(process.env.PORT || 5000, function () {
  console.log('Example app listening on port '+ process.env.PORT || 5000 +'!');
});