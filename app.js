(function(){
  'use restrict';
  angular.module('myApp',[]).controller('myFC', callmyFC).filter("myfilter",myFilterFac);

  callmyFC.$inject = ['$scope','$filter','myfilterFilter'];

  function callmyFC($scope, $filter, myfilterFilter){
    $scope.upp=function(){
      var upcase = $filter('uppercase');
      $scope.name = upcase($scope.name);
    };
    var msg = $scope.name;
    $scope.name = myfilterFilter(msg);
  };
})();

function myFilterFac(){
  return function(ip){
      return ip+"***filter";
  };
}
