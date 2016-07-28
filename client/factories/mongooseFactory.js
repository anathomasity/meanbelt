myApp.factory('mongooseFactory', function($http){



	var factory = {};

	var mongeese = [];

	factory.addMongoose = function(data, callback){
		console.log('made it to my mongoose factory');
		$http.post('/mongoose', data).then(function(data){
			console.log('made it back from backend this is our new mongoose', data);
			mongeese.push(data.data);
			callback(mongeese);
		})
	}
	
	factory.getMongooses = function(callback){
		console.log('made it to mongoose factory get mongooses');
		$http.get('/mongoose').then(function(mongooses){
			console.log('made it back from backend this all mongoose', mongooses);
			mongeese = mongooses.data;
			callback(mongeese);
		})
	}

	factory.getMongoose = function(mongId, callback){
		$http.get('/mongoose/' + mongId).then(function(mongoose){
			console.log('made it back from backend this one mongoose', mongoose);
			callback(mongoose);
		})
	}
	factory.updateMongoose = function(updatedMongoose, callback){
		$http.post('/mongoose/' + updatedMongoose._id + '/update', updatedMongoose).then(function(data){
			console.log('made it back from backend this one mongoose', data.data);
			callback(data.data);
		})
	}

	// This is my dummyFactory. I usually add this into any project that 
	// I do. Just so that I can use it for reference as I add new Factories
	// below we have an example of how we would create a post request, as well 
	// as how we would create a get request. 


	// var dummies = []

	// var factory = {}

	// factory.getDummies = function(callback){
	// 	$http.get('/dummies').then(function(data){
	// 		mongooses = data.data;
	// 		callback(data.data);
	// 	});
	// }

	// // the info parameter below is the the dummy that we're trying to add into our database

	// // I added a test for myself below. I'm passing both a body element as well a params element
	// // I use this as an initial test that I can pass information to my backend.
	// // Check out your server console and you should see the body and the value we pass through 
	// // the url. 
	// factory.addDummy = function(info, callback){
	// 	$http.post('/dummies/youShouldSeeThisInServerConsoleReqParams', info).then(function(data){
	// 		if(data.error){
	// 			callback(data);
	// 		} else {
	// 			mongooses.push(data)
	// 			callback(mongooses);
	// 		}
	// 	})
	// }

	return factory;
})