app.controller('MapController', [
	'$scope', 
	'$http',
	'NgMap', 
	'address',
	function($scope, $http, NgMap, address) {

	$scope.address = address.getData();

	$scope.lat = $scope.address.lat;
	$scope.lng = $scope.address.lng;
}]);