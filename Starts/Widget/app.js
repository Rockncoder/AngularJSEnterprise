'use strict';

var app = angular.module('myApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
  $scope.currentSliderValue = 0;
  $scope.start = 5;
  $scope.stop = 20;
}]);


app.directive('rncSliderRange', [function(){
  // one time initialization code here
  var startTime = new Date();


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

        var temp = $element.slider( "value" );
        update(temp);
      });
    }
  };
}]);

