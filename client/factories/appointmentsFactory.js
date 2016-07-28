myApp.factory('appointmentsFactory', function($http){

	var appointments = []

	var factory = {}

	var user_name = '';

	factory.getUser = function(callback){
		console.log('THIS TIME WORKS');
		if(!user_name){
		user_name = prompt('what is your name?')};
		callback(user_name);
	}

	factory.getUserName = function(callback){
		console.log('user_name in appointmentsFactory', user_name)
		callback(user_name);
	}

	factory.getAppointments = function(callback){
		$http.get('/appointments').then(function(data){
			appointments = data.data;
			callback(data.data);
		});
	}

	factory.addAppointment = function(data,callback){
		console.log('made it to my appointments factory');
		$http.post('/appointments', data).then(function(data){
			if(data.data.error){
				console.log('FACTTORY', data.data.error)
				callback(data.data);
			}
			console.log('made it back from backend this is our new app', data);
			appointments.push(data.data);
			callback(appointments);
		})
	}

	factory.destroyAppointment = function(info, callback) {
		$http.post('/appointments/'+ info._id + '/destroy').then(function(deletedOne){
			console.log('this is the deleted one,', deletedOne);
			var index = appointments.indexOf(info);
			appointments.splice(index,1);
			callback(appointments);
		})
	}

	factory.logout = function(callback){
		user_name = '';
		callback('ok');
	}

	return factory;
})