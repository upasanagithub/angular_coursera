(function(){
  'use restrict';
  angular.module('myApp',[]).controller('myFC', callmyFC);
  function callmyFC($scope, $filter){

    $scope.upp=function(){
      var upcase = $filter('uppercase');
      $scope.name = upcase($scope.name);
    };

  }
})();
