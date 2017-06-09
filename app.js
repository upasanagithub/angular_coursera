(function(){
  'use restrict';
  angular.module('myApp',[]).controller('myFC', callmyFC);
  function callmyFC($scope){

    $scope.name="Upasana Mahanta";

  /*  $scope.upp=function(){
      var upcase = $filter('uppercase');
      $scope.name = upcase($scope.name);
    };*/

  }
})();
