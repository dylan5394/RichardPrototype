var app = angular.module('RichardPrototype', ['ngRoute', 'ngMap', 'google.places']);

app.config(function ($routeProvider) {

	$routeProvider
	.when('/' , {

		controller: 'HomeController',
		templateUrl: '/js/views/home.html'
	})
	.when('/map/', {

		controller: 'MapController',
		templateUrl: '/js/views/map.html'
	})
	.when('/form/', {

		controller: 'FormController',
		templateUrl: '/js/views/form.html'
	})
	.otherwise({
		redirectTo: '/'
	});
});

app.factory('address', [function() {

	var dataObj = {};
     return {
            setData: function(data, formattedAddress) {
               dataObj.lat = data.lat;
               dataObj.lng = data.lng;

               dataObj.formattedAddress = formattedAddress;

               console.log(dataObj);
            },
            getData: function() {
               return dataObj;
            }
     };
}]);