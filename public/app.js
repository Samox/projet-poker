var mainApp = angular.module('mainApp', ['ngMaterial', 'ngRoute', 'boardService']);

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
