    
var app = angular.module('GlammApp',['angularUtils.directives.dirPagination']);

app.controller('mainCtrl',function($scope,$location,$http){

    $scope.list = [];

	$http.get('json/data.json').then(function(response) { 

    $scope.list = response;
     
      });


$scope.statusList=['ARTIST_REJECTED','PENDING','CONSUMER_CANCELLED','UNASSIGNED','COMPLETED','PG_CANCELLED'];

});

app.filter('cityFilter',function(){

return function(cty){
var out=[];
if(cty.toUpperCase()=="MUMBAI" || cty.toUpperCase()=="PUNE")
{
out.push(cty);
}
return out[0];
}

});