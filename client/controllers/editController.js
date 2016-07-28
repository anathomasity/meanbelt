myApp.controller('editController', function($scope, $routeParams, $location, mongooseFactory){

	var mongId = $routeParams.id;
	mongooseFactory.getMongoose(mongId, function(data){
		console.log('show controller,', data);
		$scope.editMongoose = data.data[0];
	});
	
	$scope.updateMongoose = function(){
		mongooseFactory.updateMongoose($scope.editMongoose, function(data){
			$location.path('/');
		})
	}
})