var app = angular.module('blocJams');

app.controller('LandingController', function($scope, $rootScope){
	var revealPoint = function(node) {
		node.style.opacity = 1;
		node.style.transform = 'scale(1) translateY(0)';
    };
    angular.forEach(document.querySelectorAll('.point'), revealPoint);

    $rootScope.bodyClass = 'landing';
});