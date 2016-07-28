var appointments = require('./../controllers/appointments.js');

module.exports = function(app){

	app.post('/appointments', function(req, res){
		console.log('made it to my /appointments route');
		appointments.addAppointment(req, res);
	})

	app.get('/appointments', function(req, res){
		console.log(' made it to my /appointments get route');
		appointments.getAppointments(req, res);
	})

	app.post('/appointments/:id/destroy', function(req,res){
		console.log('made it to my /appsdestroy route');
		appointments.destroyAppointment(req,res);
	})

}