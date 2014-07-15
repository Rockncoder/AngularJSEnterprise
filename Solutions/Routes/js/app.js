'use strict';

var tempApp = angular.module('tempApp', ['ngRoute']).
  config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/current', {
      templateUrl: "partials/current.html",
      controller: 'CurrentCtrl'
    });
    $routeProvider.when('/history', {
      templateUrl: "partials/history.html",
      controller: 'HistoryCtrl'
    });
    $routeProvider.otherwise({
      redirectTo: "/current"
    });
  }]);


