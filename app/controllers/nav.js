app.controller("navController", function($scope, $route, $location, $http, $timeout) {

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
	}, {
		name: "Blog",
		icon: "fa-file-text-o",
		link: "/blog",
	}];

	/*
	$scope.$on('$routeChangeStart', function(next, current) {
		var path = $location.path();
		if (path.indexOf('/portfolio/') !== -1) {
			$scope.viewAnimation = 'pull-in';
		} else {
			$scope.viewAnimation = 'view-animate';
		}
	});
	*/

	$scope.menuStyle = {};
	if (window.matchMedia("(max-width: 880px)").matches) {
		$scope.menuStyle.height = "0px";
	}
	$scope.toggleMenu = function() {
		if ($scope.menuStyle.height == "0px") {
			$scope.menuStyle.height = "300px";
		} else {
			$scope.menuStyle.height = "0px";
		}
	};

	$scope.closeMenu = function() {
		if (window.matchMedia("(max-width: 880px)").matches) {
			$timeout(function() {
				$scope.menuStyle.height = "0px";
			}, 300);
		}
	}
});