myApp.controller('newController', function($scope, appointmentsFactory, $location){

	console.log('I am able to load my NEWController along with my index partial');

	appointmentsFactory.getUserName(function(data){
		$scope.user_name = data;
	})

	$scope.addAppointment = function(){


		if($scope.ap.date < Date.now()){
			$scope.err = 'Please enter a future date';
		}
		else{
		$scope.ap.user_name = $scope.user_name;
		console.log('addAppointment newController', $scope.ap);
		appointmentsFactory.addAppointment($scope.ap, function(appArray){
			if(appArray.data.error){
				$scope.error = 'Time should be between 8am and 5pm';
			}
			else{
				$scope.appointments = appArray;
				$location.url('/')
			}
		})}
	}
})