app.controller('HomeController', [
	'$scope',
	'$location',
	'address',
	function($scope, $location, address) {

	$scope.findAddress = function() {

		var dataObj = {};
		dataObj.lat = $scope.address.geometry.location.lat();
		dataObj.lng = $scope.address.geometry.location.lng();

		address.setData(dataObj, $scope.address.formatted_address);
		$location.path('/map/');
	};
}]);