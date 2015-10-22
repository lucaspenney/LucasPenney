app.service('preloadService', function($http, $location) {
	var _this = this;
	return {
		preloadImage: function(path) {
			var img = new Image();
			img.src = path;
			img.onload = function() {
				//Image loaded!
			};
		},
	};
});