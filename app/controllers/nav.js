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
		name: "Portfolio",
		icon: "fa-briefcase",
		link: "/portfolio"
	}];
};