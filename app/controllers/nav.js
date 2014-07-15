function navController($scope, $http, $timeout) {
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
	console.log($scope.navLinks);
};