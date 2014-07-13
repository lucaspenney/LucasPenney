function navController($scope, $route, $routeParams, $location, $http, $timeout) {
	$scope.navLinks = [{
		name: "Home",
		icon: "fa-home",
		link: "/home"
	}, {
		name: "Resume",
		icon: "fa-align-left",
		link: "/resume"
	}, {
		name: "Work",
		icon: "fa-tablet",
		link: "/work"
	}];
};