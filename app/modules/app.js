var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngAnimate', 'mgcrea.ngStrap'], function($routeProvider, $locationProvider) {
	$locationProvider
		.html5Mode(true)
		.hashPrefix('!');
	$routeProvider.when('/', {
		templateUrl: 'app/views/home.html',
		controller: homeController,
	});
	$routeProvider.otherwise({
		redirectTo: '/'
	});
});