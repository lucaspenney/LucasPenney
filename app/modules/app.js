var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngAnimate', 'mgcrea.ngStrap'], function($routeProvider, $locationProvider) {
	$locationProvider
		.html5Mode(true)
		.hashPrefix('!');
	$routeProvider.when('/about', {
		templateUrl: 'app/views/home.html',
		controller: homeController,
	});
	$routeProvider.when('/resume', {
		templateUrl: 'app/views/resume.html',
		controller: homeController,
	});
	$routeProvider.when('/portfolio', {
		templateUrl: 'app/views/portfolio.html',
		controller: portfolioController,
	});
	$routeProvider.otherwise({
		redirectTo: '/about'
	});
});