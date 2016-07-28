myApp.controller('showController', function($scope, $routeParams, mongooseFactory){

	var mongId = $routeParams.id;
	mongooseFactory.getMongoose(mongId, function(data){
		console.log('show controller,', data);
		$scope.mongoose = data.data;
	})



	// Here is where we are creating indexController. 
	// You have to make sure that our index controller matches the name 
	// that we pass in, in our router. 
	// So far the only variable that I'm injecting into this controller
	// is $scope.

	// console.log('I am able to load my indexController along with my index partial');

	// // d.a({name: 'req.body.test', status: 'working'}, function(d){
	// // 	console.log(d);
	// // })
	// mongooseFactory.getMongooses(function(data){
	// 	console.log('this is data in indexController get mognooses', data);
	// 	$scope.mongooses = data;
	// })

	// $scope.createMongoose = function(){
	// 	console.log('createMongoose indexController', $scope.newMongoose);
	// 	mongooseFactory.addMongoose($scope.newMongoose, function(mongooseArray){
	// 		$scope.mongooses = mongooseArray;
	// 	})
	// }
})