'use strict';

var app = angular.module('myApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
}]);


app.directive('rncSliderRange', [function(){
  // one time initialization code here

  // define the configuration object
  return {
    restrict: 'A',
    //require: '?ngModel',
    link: function($scope, $element, $attr, ngModel) {
      var initialized = false,
        update = function(currentValue){
          $scope.$apply(function(){
            $scope.currentSliderValue = currentValue;
          });
        };

      setTimeout(function(){
        initialized = $element.slider().
          on('slide', function(event, ui){
            console.log("Current position = " +  ui.value);
            // let Angular know the new slider position
            update(ui.value);
          });

        $element.slider({
          value: parseInt($attr.start, 10),
          min: parseInt($attr.min, 10),
          max: parseInt($attr.max, 10)
        });

        update($element.slider( "value" ));
      });
    }
  };
}]);

