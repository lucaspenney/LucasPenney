function navController($scope, $route, $location, $http, $timeout) {

	$scope.viewAnimation = 'view-animate';

	$scope.navLinks = [{
		name: "About",
		icon: "fa-user",
		link: "/about"
	}, {
		name: "Resume",
		icon: "fa-list-alt",
		link: "/resume"
	}, {
		name: "Portfolio",
		icon: "fa-folder-open",
		link: "/portfolio"
	}];

	$scope.$on('$routeChangeStart', function(next, current) {
		var path = $location.path();
		if (path.indexOf('/portfolio/') !== -1) {
			$scope.viewAnimation = 'pull-in';
		} else {
			$scope.viewAnimation = 'view-animate';
		}
	});
};