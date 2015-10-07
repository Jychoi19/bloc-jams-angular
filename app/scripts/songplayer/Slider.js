var myApp = angular.module('blocJams');

myApp.directive('mySlider', function() {

    return {
        templateUrl: 'templates/slider.html',
        replace: true,
        restrict: 'E',
        scope: { 
            value: '='
        },
        link: function(scope, element, attributes) {
            scope.fill = {width: scope.value + "%"};
            scope.thumb = {left: scope.value + "%"};
            // debugger
            // need to change undefined value below
            // if (window.dscope === undefined) window.dscope = scope;

            element.on('mousedown', function(event){
                var offsetX = event.pageX - (element[0].getBoundingClientRect().left);
                var barWidth = element[0].offsetWidth;
                var seekBarFillRatio = offsetX / barWidth;
                scope.value = seekBarFillRatio * 100;
            });
            scope.$watch('value', function(){
                scope.fill = {width: scope.value + "%"};
                scope.thumb = {left: scope.value + "%"};
            });
        }
    };
});
