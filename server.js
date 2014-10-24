'use-strict';

var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	//database = require('./server-assets/database'),
	port = 8888,
	app = express(),
	//MONGO SETUP
	mongoose = require('mongoose'),
	Friend = require('./sever-assets/friendCtrl');



var databaseReference = 'mongodb://localhost/fullestStack';

var connection = mongoose.connection;


app.use(bodyParser.json());
app.use(cors());


app.use(express.static(__dirname + '/public'));



app.get('/friends', Friend.getFriend());

app.post('/friends/new', Friend.addFriend());



mongoose.connect(databaseReference);
conneciton.once('open', function(){
	app.listen(port, function(){
		console.log('We are connected to Mongodb on' + port)
	});
})


