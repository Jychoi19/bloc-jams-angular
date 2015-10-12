var myApp = angular.module('blocJams');

myApp.directive('mySlider', function(SongPlayer, $document) {

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

            var barMove = function(event) {
                var offsetX = event.pageX - (element[0].getBoundingClientRect().left);
                var barWidth = element[0].offsetWidth;
                var seekBarFillRatio = offsetX / barWidth;
                scope.value = seekBarFillRatio * 100;
            }
            element.on('mousedown', function(event){
                barMove(event);
                $document.on('mousemove', mousemove);
                $document.on('mouseup', mouseup);
            });
            function mousemove(event) {
                barMove(event);
                scope.$apply()
            };
            function mouseup() {
                $document.unbind('mousemove', mousemove);
            };            
            scope.$watch('value', function(){
                scope.fill = {width: scope.value + "%"};
                scope.thumb = {left: scope.value + "%"};
            });
        }
    };
});
