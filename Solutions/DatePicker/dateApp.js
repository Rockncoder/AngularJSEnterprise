'use strict';

var app = angular.module('myApp', ['myApp.directives']);

app.controller('MainCtrl', function ($scope) {
  $scope.myText = 'Not Selected';
  $scope.currentDate = '';
  $scope.updateMyText = function (date) {
    $scope.myText = 'Selected';
  };
});

app.directive('timePicker', function () {
  var today = new Date(new Date().toDateString());
  return {
    require: '?ngModel',
    link: function ($scope, $element, $attrs, ngModel) {
      var initialized = false;

      ngModel = ngModel || {
        "$setViewValue": angular.noop
      };

      // where is the missing time value?
      setTimeout(function () {
        initialized = $element.timepicker()
          .on('changeTime', function (ev, ui) {
            var sec = $element.timepicker('getSecondsFromMidnight');
            ngModel.$setViewValue(sec * 1000);
            console.log("sec = " + sec);
          });
      });

      ngModel.$render = function (val) {
        if (!initialized) {
          //If $render gets called before our timepicker plugin is ready, just return
          return;
        }
        $element.timepicker('setTime', new Date(today.getTime() + val));
      }
    }
  }
});