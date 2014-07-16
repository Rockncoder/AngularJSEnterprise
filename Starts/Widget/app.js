'use strict';

var app = angular.module('myApp', []);

app.controller('MainCtrl', ['$scope', function ($scope) {
}]);


app.directive('rncSliderRange', [function(){
  // one time initialization code here

  // define the configuration object
  return {
    restrict: 'A',
    link: function($scope, $element, $attr, ngModel) {
      var update = function(currentValue){
          $scope.$apply(function(){
            $scope.currentSliderValue = currentValue;
          });
        };

      setTimeout(function(){
          $element.slider().
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

        $scope.$watch('currentSliderValue', function() {
          $element.slider( "value", $scope.currentSliderValue);
        });

        update($element.slider( "value" ));
      });
    }
  };
}]);

app.directive('rncAccordion', [function(){
  return {
    restrict: 'EA',
    link: function ($scope, $element, $attr) {
      setTimeout(function () {
        $element.accordion({
          active: false,
          collapsible: true,
          activate: function( event, ui ) {
            $scope.$apply(function(){
              $scope.currentTitle = ui.newHeader.text();
            })
          }
        });
      });
    }
  }
}]);


