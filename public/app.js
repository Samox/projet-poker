var mainApp = angular.module('mainApp', ['ngMaterial', 'ngRoute']);
console.log(mainApp);
mainApp.controller('mainCtrl', function mainCtrl($scope) {
  console.log($scope);
});

mainApp.component('landing', {
  templateUrl: 'templates/landing.html',
  controller: function landingCtrl() {
      this.showBoard = () => {
        console.log('croute');
      };
    }
})

mainApp.config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<landing></landing>'
        }).
        otherwise('/');
    }
  ]);
