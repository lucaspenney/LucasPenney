app.directive('animateOnChange', function($animate, $timeout) {
  return {
    restrict: 'A',
    scope: {
      animateOnChange: '=',
      animateVal: '=',
      animateTime: '@'
    },
    link: function($scope, elem) {
      $scope.animateVal = $scope.animateOnChange;
      $scope.$watch('animateOnChange', function(nv, ov) {
        if (nv != ov) {
          var t = $scope.animateTime / 2;
          var c = 'change';
          $animate.addClass(elem, c).then(function() {
            $timeout(function() {
              $scope.animateVal = nv;
              $timeout(function() {
                $animate.removeClass(elem, c)
              }, t)
            }, t);
          });
        }
      })
    }
  };
})