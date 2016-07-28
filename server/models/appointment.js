console.log('appointments Model')
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var appointmentSchema = new mongoose.Schema({
	date: Date,
	time: { type: String, required: true},
	complain: { type: String, required: true, minlength: 10},
	user_name: String,
},{timestamps:true});

mongoose.model('appointment', appointmentSchema);

