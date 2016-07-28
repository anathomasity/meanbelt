myApp.controller('indexController', function($scope, appointmentsFactory){

	console.log('I am able to load my indexController along with my index partial');

	appointmentsFactory.getUser(function(data){
		console.log('GET USER', data);
		$scope.user_name = data;
	})	

	appointmentsFactory.getAppointments(function(data){
		console.log('this is data in indexController get appont', data);
		$scope.appointments = data;
	})

	$scope.logout = function(){
		appointmentsFactory.logout(function(data){
			if(data == 'ok'){
				$scope.user_name = '';
			}
		})
	}

	$scope.destroyAppointment = function(appointment){
		var time = new Date(appointment.date).getTime();
        console.log((time-Date.now())/3600000);
		console.log('removeappointment ', appointment);
		if((time-Date.now())/3600000 > 24){
			appointmentsFactory.destroyAppointment(appointment, function(appsArray){
				console.log('back from factory', appsArray);
				$scope.appointments = appsArray;
			})
		}else{
			$scope.err = "Sorry, You need at least one day in advanced to cancel an appointment"
		}
	}

})