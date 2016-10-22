angular.module('boardService', ['ngResource']);

angular.module('boardService').
  factory('Board', ['$resource',
    function($resource) {
      return $resource('board', {}, {
        getBoard: {
          method: 'GET',
          isArray: true
        }
      });
    }
  ]);
