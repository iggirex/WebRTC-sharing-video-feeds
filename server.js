//NODE EXPRESS SERVER///
var express = require('express');
var app = express();
var path = require('path')
//app is middleware (express) .Server takes a middleware
const server = require('http').Server(app)

var io = require('./socket');
io.attach(server)

console.log('server started');

//Linking to public folder in order to get CSS file
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index.ejs');
});

server.listen(5000);
/////////////////
