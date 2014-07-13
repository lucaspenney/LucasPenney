app.filter('possessive', function() {
	return function(val) {
		if (!val) return '';
		return val + '\'s';
	};
});