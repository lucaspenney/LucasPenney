app.controller('blogController', function($scope, $http, $route, $routeParams) {
	$scope.slug = $routeParams.slug;
	$scope.posts = [];

	$scope.loadBlogPosts = function(cb) {
		$http.get("/posts.php")
			.success(function(response) {
				$scope.posts = response;
				cb();
			});
	};

	$scope.selectPost = function(slug) {
		for (var i = 0; i < $scope.posts.length; i++) {
			if ($scope.posts[i].slug == $scope.slug) {

				$scope.post = $scope.posts[i];
			}
		}
	};

	/*
	if ($scope.posts.length === 0) {
		$scope.loadBlogPosts(function() {
			$scope.selectPost($scope.slug);
		});
	} else {
		$scope.selectPost($scope.slug);
	}
	*/
});