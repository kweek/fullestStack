var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var friend = new Schema({
	name: {type: String, required: true}
	age: {type: Number},
	yearMet: {type: Date}
});
