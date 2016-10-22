var mainApp = angular.module('mainApp', ['ngMaterial', 'ngRoute']);
console.log(mainApp);
mainApp.controller('mainCtrl', function mainCtrl($scope) {
  console.log($scope);
});


mainApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<landing></landing>'
        }).
        when('/board', {
          template: '<board></board>'
        }).
        otherwise('/');
    }
  ]);
