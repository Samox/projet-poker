var mainApp = angular.module('mainApp', []);
console.log(mainApp);
mainApp.controller('mainCtrl', function mainCtrl($scope) {
  console.log($scope);
});
