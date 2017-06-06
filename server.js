var bodyParser = require('body-parser');
var express = require('express');
var path = require('path');
var app = express();

app.use(bodyParser.json());

var chats = [];

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/public/client.html');
})

app.post('/chats', function(req,res) {
	chats.push(req.body);
	res.send(req.body).status(200);
})

app.get('/chats', function(req,res) {
	res.send(chats);
})

app.listen(3000, function() {
	console.log('listening on port 3000');
})