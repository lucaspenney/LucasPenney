function navController($scope, $route, $routeParams, $location, $http, $timeout) {
	$scope.navLinks = [{
		name: "About",
		icon: "fa-user",
		link: "/about"
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