(function(){
  'use restrict';
  angular.module('myApp',[]).controller('myFC', callmyFC).filter("myfilter",myFilterFac).service('myService', callmyService);

  callmyFC.$inject = ['$scope','$filter','myfilterFilter', 'callmyService'];


  function callmyFC($scope, $filter, myfilterFilter, callmyService){
    $scope.upp=function(){
      var upcase = $filter('uppercase');
      $scope.name = myfilterFilter(upcase($scope.name));
    };
    $scope.showNum = function(){
      console.log($scope);
    };
  };
  $scope.$watch('name',function(newValue, oldValue){
    console.log(oldValue+" -> "+newValue);
  });
  callmyService();
})();

function callmyService(){
  var svc = this;
  svc.msg = "Service function called!!!";
  
}

function myFilterFac(){
  return function(ip){
    if(ip==undefined){
      ip='';
    }
    return ip+"***filter";
  };
}
