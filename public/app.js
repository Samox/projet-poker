var mainApp = angular.module('mainApp', ['ngMaterial']);
console.log(mainApp);
mainApp.controller('mainCtrl', function mainCtrl($scope) {
  console.log($scope);
});
