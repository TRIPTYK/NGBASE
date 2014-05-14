angular.module('module2', []).controller('mainCtrl2', ['$scope','$rootScope', function($scope,$rootScope){
	$scope.name="gillou";
	console.log($rootScope);
	// $scope.firstName =$rootScope.data.firstName;
}]);