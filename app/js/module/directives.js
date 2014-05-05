angular.module('module').directive('testing', function() {
    return {
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        controller:'mainCtrl',
        templateUrl: 'app/templates/template.html',
        link: function($scope, iElm, iAttrs, controller) {}
    };
});