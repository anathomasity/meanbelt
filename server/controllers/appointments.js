var mongoose = require('mongoose');
var Appo = mongoose.model('appointment');

module.exports = (function() {
	return {
		getAppointments: function(req, res){
			Appo.find({}, function(err, appointments){
				if(err){
					console.log(err);
					console.log('getappointments function appointments controller');
				} else {
					res.json(appointments);
				}
			})
		},
		addAppointment: function(req, res){
			appointment = new Appo(req.body);
			appointment.save(function(err, result){
				if(err){
					console.log(err);
					console.log('error creating a new appointment');
					res.json({error: 'Should be between 8am and 5pm'})
				} else {
					console.log('this is our new appointment',result);
					res.json(result);

				}
			})
		},
		destroyAppointment: function(req,res){
			console.log('appos.js,', req.params.id)
			Appo.remove({_id: req.params.id}, function(err){
				if(err){console.log('couldnt remove appointment');}
				res.json(req.params.id);
			})
		}
	}
})();