var express = require('express');
var app = express();
var path=require('path');
var port = 1234;
var bodyParser = require('body-parser');
var router = require('router');
var request = require('request');


app.use(bodyParser());
app.use(router());


app.post('/', function(req, res){
  var param = {'a' : parseInt(req.body.a) , 'b' : parseInt(req.body.b)};
  var ret;
  request.get({url:"http://127.0.0.1:5000/test", qs:param}, function(err, response, body) {
    if(err) { console.log(err); return; }
    ret = body;
    res.send(ret);
  });
});


app.get('/', function(req, res){
  res.sendFile('index.html', {root: path.join(__dirname, './')});
});

app.listen(port, function(){
  console.log('Server is listening at port : ' + port);
});
