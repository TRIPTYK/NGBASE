angular.module('module2').directive('testing2', function() {
    return {
        restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
        controller:'mainCtrl2',
        templateUrl: 'app/templates/template2.html',
        link: function($scope, iElm, iAttrs, controller) {}
    };
});