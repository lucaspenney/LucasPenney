function portfolioController($scope, $route, $routeParams, $location, $http, $timeout) {
	$scope.selectedWork = undefined;
	$scope.work = [];

	$scope.webWork = [{
		name: "ManaStack",
		images: [],
		description: "ManaStack is a blah blah"
	}, {
		name: "Learn Cryptography",
		images: [],
		description: "Learn Cryptography is blah blah"
	}, {
		name: "Freelance Web Design",
		images: [],
		description: "I did some freelance web design blah blah"
	}];

	$scope.gameWork = [{
		name: "Night of Darkness",
		images: [],
		description: "Night of darkness blah blah"
	}, {
		name: "Apocalypse Mod",
		images: [],
		description: "Apocalypse mod blah blah"
	}, {
		name: "Inescapable Darkness",
		images: [],
		description: "Inescapable Darkness blah blah"
	}]

	$scope.selectItem = function(item) {
		$scope.selectedWork = item;
	};
};