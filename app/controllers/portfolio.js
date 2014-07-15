function portfolioController($scope, $route, $routeParams, $location, $http, $timeout) {
	$scope.work = [{
		name: "ManaStack",
		category: "web",
		images: ['http://placehold.it/50/50', 'http://placehold.it/50/50', 'http://placehold.it/50/50'],
		description: "ManaStack is a blah blah"
	}, {
		name: "Learn Cryptography",
		category: "web",
		images: [],
		description: "Learn Cryptography is blah blah"
	}, {
		name: "Freelance Web Design",
		category: "web",
		images: [],
		description: "I did some freelance web design blah blah"
	}, {
		name: "Night of Darkness",
		category: "game",
		images: [],
		description: "Night of darkness blah blah"
	}, {
		name: "Apocalypse Mod",
		category: "game",
		images: [],
		description: "Apocalypse mod blah blah"
	}, {
		name: "Inescapable Darkness",
		category: "game",
		images: [],
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