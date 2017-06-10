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
  $scope.$watch('name',function(oldValue, newValue)){
    console.log(oldValue+" -> "+newValue);
  };
})();

function myFilterFac(){
  return function(ip){
    if(ip==undefined){
      ip='';
    }
    return ip+"***filter";
  };
}
