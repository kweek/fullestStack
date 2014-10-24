'use-strict';

var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	database = require('./server-assets/database'),
	app = express();

app.use(bodyParser.json());
app.use(cors());


app.use(express.static(__dirname + '/public'));


app.get('/friends', function(req, res){
	res.send(database.getFriends());
})

app.post('/friends/new', function(req, res){
	res.send(database.addFriends(req.body));
})

app.listen(8888);