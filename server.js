'use strict';

var express = require('express'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	//database = require('./server-assets/database'),
	port = 8888,
	app = express(),
	//MONGO SETUP
	mongoose = require('mongoose'),
	Friend = require('./server-assets/friendCtrl');



var databaseReference = 'mongodb://localhost/fullestStack';

var connection = mongoose.connection;


app.use(bodyParser.json());
app.use(cors());


app.use(express.static(__dirname + '/public'));



app.get('/friends', Friend.getFriends);
app.post('/friends', Friend.addFriend);
app.delete('/friends/:id', Friend.unFriend);



mongoose.connect(databaseReference);
connection.once('open', function(){
	app.listen(port, function(){
		console.log('We are connected to Mongodb on' + port)
	});
})


