app.controller('FormController', [
	'$scope',
	'$http',
	'$location',
	'address', 
	function($scope, $http, $location, address) {

	$scope.setAddress = function () {

		var formattedAddress = $scope.street + "," + $scope.city + "," + $scope.state;

		$http.get("https://maps.googleapis.com/maps/api/geocode/json?address="
			+ formattedAddress +"&key=AIzaSyD9TnIJUnlUYgsFUv_ZprsqARJYv_kVRIA")
			.success(function(data) { 
				
              	address.setData(data.results[0].geometry.location, data.results[0].formatted_address); 
              	$location.path('/map/');
            }) 
            .error(function(err) { 
              console.log(data); 
              //maybe prompt a message here saying that the address was incorrect
            }); 
	};

}]);