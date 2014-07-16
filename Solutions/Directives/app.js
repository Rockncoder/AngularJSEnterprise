'use strict';


// THIS CODE WON'T RUN AT ALL!!!!

angular.module('myApp', ['myApp.directives']);



// <input ng-model="data.property" autocomplete-input />

angular.directive('autocompleteInput', function () {
  // one time initializations
  return {
    require: 'ngModel',
    link: function($scope, $element, $attrs, ngModel){
      ngModel.$render = function() {
        $element.val(ngModel.$viewValue || '');
      };
      $element.autocomplete({
        select: function(ev, ui) {
          $scope.$apply(function() {
            ngModel.$setViewValue(ui.item.value);
          });
        }
      });
    }

  };
});

angular.module('myApp.directives', [])
  // this is a factory method which actually creates
  .directive('myAwesomeDirective', ['api', function () {
    // one time initializations
    return function ($scope, $element, $attrs) {
      // directive work goes here
    };
  }]);

angular.module('myApp.directives', [])
  // this is a factory method which actually creates
  .directive('myAwesomeDirective', ['api', function () {
    // one time initializations
    // return a configuration object
    return {
      priority: 10,
      terminal: false,
      template: '<div<h3>{{title}}</h3></div>',
      templateUrl: 'myDirective.html',
      replace: true,
      compile: function (element, attributes, transclude) {},
      link: function($scope, $element, $attrs){},
      scope: true,
      controller: function($scope, $element, $attrs){},
      require: 'ngModel',
      transclude: true
    };
  }]);



$.get('api/ultimate-answer/42', function(gizmo) {
  console.log(gizmo); // or whatever
});

$.get('api/gizmo/42', function(gizmo) {
  $.get('api/foobars/' + gizmo, function(foobar) {
    $.get('api/barbaz/' + foobar, function(bazbar) {
      doSomethingWith(gizmo, foobar, bazbar);
    }, errorCallback);
  }, errorCallback);
}, errorCallback);
