'use strict';

tempApp.controller('CurrentCtrl', ['$scope', function ($scope) {
  $scope.temp = 17;
}]);


tempApp.controller('HistoryCtrl', ['$scope', function ($scope) {
  $scope.tempMin = 15;
  $scope.historyData = [
    {day: 'saturday', temp: 8},
    {day: 'sunday', temp: 13},
    {day: 'monday', temp: 15},
    {day: 'tuesday', temp: 11},
    {day: 'wednesday', temp: 15},
    {day: 'thursday', temp: 27},
    {day: 'friday', temp: 8}
  ];
}]);

tempApp.controller('HelloCtrl', ['$scope', function ($scope) {
  $scope.greeting = "Hi there!";
}]);


tempApp.filter('minimum', [function () {
  return function (arrTemp, minimum) {
    var filteredArray = [];
    var min = minimum ? minimum : 15;
    angular.forEach(arrTemp, function (value, key) {
      if (value.temp >= min) filteredArray.push(value);
    });
    return filteredArray;
  };
}]);

tempApp.filter('maximum', [function () {
  return function (arrTemp, minimum,maximum) {
    var filteredArray = [];
    var max = typeof maximum !== 'undefined' ? maximum : 15;
    angular.forEach(arrTemp, function (value, key) {
      if (value.temp <= max) filteredArray.push(value);
    });
    return filteredArray;
  };
}]);

tempApp.filter('minmax', [function () {
  return function (arrTemp, minimum, maximum) {
    var filteredArray = [];
    var min = typeof minimum !== 'undefined' ? minimum : 0;
    var max = typeof maximum !== 'undefined' ? maximum : 15;
    angular.forEach(arrTemp, function (value, key) {
      if (min <= value.temp && value.temp <= max) filteredArray.push(value);
    });
    return filteredArray;
  };
}]);

