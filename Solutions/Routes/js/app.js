'use strict';

var tempApp = angular.module('tempApp', ['ngRoute']).
  config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(false);

    $routeProvider.when('/current', {
      templateUrl: "partials/current.html",
      controller: 'CurrentCtrl'
    });
    $routeProvider.when('/history', {
      templateUrl: "partials/history.html",
      controller: 'HistoryCtrl'
    });
    // Add HelloCtrl which simply displays hello on the screen
    // Add Link to Hello from the index.html
    $routeProvider.when('/hello', {
      templateUrl: "partials/hello.html"//,
//      controller: 'HelloCtrl'
    });
    $routeProvider.otherwise({
      redirectTo: "/current"
    });
  }]);


