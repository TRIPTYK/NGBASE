/**
* app Module
*
* Description
*/
angular.module('app', ['module','module2'])
.run(function($rootScope){
	$rootScope.data={};
	$rootScope.data.firstName="Bertrand";
});