app.controller("portfolioController", function($scope, $route, $routeParams, $location, $http, $timeout, portfolioService) {
	$scope.work = portfolioService.getPortfolio();
	$scope.selectedWork = {};

	for (var i = 0; i < $scope.work.length; i++) {
		$scope.work[i].slug = $scope.work[i].name.replace(/\s/g, '').toLowerCase();
		$scope.work[i].selectedImage = $scope.work[i].images[0];
	}

	if ($routeParams.work !== undefined) {
		for (var i = 0; i < $scope.work.length; i++) {
			if ($scope.work[i].slug == $routeParams.work) {
				$scope.selectedWork = $scope.work[i];
				$scope.selectedImage = $scope.selectedWork.images[0];
				break;
			}
		}
	}

	$scope.selectImage = function(item, img) {
		item.selectedImage = img;
	};
});

app.directive('animateImageChange', function($timeout) {
	return {
		restrict: 'A',
		link: function($scope, $element, attrs) {
			$timeout(function() {
				$element.removeClass("pop-in");
			}, 500);
			$element.on('load', function() {
				if (!$scope.firstLoad) {
					$scope.firstLoad = true;
					return;
				}
				$element.addClass("pop-out");
				$timeout(function() {
					$element.removeClass("pop-out");
				}, 250);
			});
		}
	}
})