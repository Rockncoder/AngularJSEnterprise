'use strict';

var app = angular.module('myApp', []);

app.controller('MainCtrl', function ($scope) {
  $scope.start= 5;
  $scope.stop = 95;
  $scope.current = 5;
});

app.directive('rncSliderRange', [function () {
  return {
    require: "?ngModel",
    link: function($scope, $element, $attr, ngModel) {
      var initialized = false;

      if (!ngModel) return;

      ngModel = ngModel || {
        "$setViewValue": angular.noop
      };

      // where is the missing time value?
      setTimeout(function () {
        initialized = $element.slider()
          .on('slide', function (ev, ui) {
            console.log("Slider changed: " + ui.value);
            $scope.$apply(function() {
              $scope.current = ui.value;
            });
          });
        $element.slider({ min: $scope.start });
        $element.slider({ max: $scope.stop });
      });


      ngModel.$render = function (val) {
        if (!initialized) {
          return;
        }
        $element.slider( "enable" );
      }
    }
  };
}]);