var app = angular.module('app', ['ngRoute', 'ngSanitize', 'ngAnimate', 'ngMaterial'], function($routeProvider, $locationProvider, $mdThemingProvider) {
	$locationProvider
		.html5Mode({
			enabled: true,
			requireBase: false
		})
		.hashPrefix('!');
	$routeProvider.when('/about', {
		templateUrl: '/app/views/home.html',
		controller: 'homeController',
	});
	$routeProvider.when('/resume', {
		templateUrl: '/app/views/resume.html',
		controller: 'homeController',
	});
	$routeProvider.when('/portfolio', {
		templateUrl: '/app/views/portfolio.html',
		controller: 'portfolioController',
	});
	$routeProvider.when('/portfolio/:work', {
		templateUrl: '/app/views/portfolio-item.html',
		controller: 'portfolioController',
	});
	$routeProvider.otherwise({
		redirectTo: '/about'
	});
	$mdThemingProvider.theme('default')
		.primaryPalette('grey')
		.accentPalette('blue-grey');
});

app.config(function($mdThemingProvider) {

});