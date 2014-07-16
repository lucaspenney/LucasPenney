function portfolioController($scope, $route, $routeParams, $location, $http, $timeout) {
	$scope.work = [{
		name: "ManaStack",
		category: "web",
		images: [''],
		description: "ManaStack is a blah blah"
	}, {
		name: "Learn Cryptography",
		category: "web",
		images: ['/img/portfolio/learncrypto.png'],
		description: "Learn Cryptography is blah blah"
	}, {
		name: "Freelance Web Design",
		category: "web",
		images: ['/img/portfolio/komcpc.png', '/img/portfolio/bcrealtynews.png', '/img/portfolio/gawthropfinancial.png', '/img/portfolio/gentlehat.png'],
		description: "Freelance Web Design: 2010-2012"
	}, {
		name: "Night of Darkness",
		category: "game",
		images: ['/img/portfolio/nightofdarkness.png'],
		description: "Night of darkness and it's subsequent sequel were both entries to the One Game A Month challenge. The development time of both the original and follow up was one month long."
	}, {
		name: "Apocalypse Mod",
		category: "game",
		images: ['/img/portfolio/apocmod.png'],
		description: "Apocalypse mod blah blah"
	}, {
		name: "Inescapable Darkness",
		category: "game",
		images: ['/img/portfolio/inescapabledarkness.png'],
		description: "Inescapable Darkness blah blah"
	}];

	$scope.selectedWork = {};

	for (var i = 0; i < $scope.work.length; i++) {
		$scope.work[i].slug = $scope.work[i].name.replace(/\s/g, '').toLowerCase();
	}

	if ($routeParams.work !== undefined) {
		for (var i = 0; i < $scope.work.length; i++) {
			if ($scope.work[i].slug == $routeParams.work) {
				$scope.selectedWork = $scope.work[i];
				break;
			}
		}
	}
};