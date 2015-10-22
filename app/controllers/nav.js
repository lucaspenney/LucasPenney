app.controller("navController", function($scope, $route, $location, $http, $timeout, preloadService, portfolioService) {
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

	//Preload the first set of portfolio images
	var portfolio = portfolioService.getPortfolio();
	for (var i = 0; i < portfolio[0].images.length; i++) {
		preloadService.preloadImage("/img/portfolio/" + portfolio[0].images[i]);
	}
});