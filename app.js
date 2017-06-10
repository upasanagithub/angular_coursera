(function(){
  'use restrict';
  angular.module('myApp',[]).controller('myFC', callmyFC).filter("myfilter",myFilterFac);

  callmyFC.$inject = ['$scope','$filter','myfilterFilter'];

  function callmyFC($scope, $filter, myfilterFilter){
    $scope.upp=function(){
      var upcase = $filter('uppercase');
      $scope.name = myfilterFilter(upcase($scope.name));
    };
    $scope.showNum = function(){
      console.log($scope);
    };
  };
})();

function myFilterFac(){
  return function(ip){
      return ip+"***filter";
  };
}
