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
            // if (window.dscope === volume) window.dscope = scope;

            element.on('mousedown', function(event){
                var offsetX = event.pageX - (element[0].getBoundingClientRect().left);
                var barWidth = element[0].offsetWidth;
                var seekBarFillRatio = offsetX / barWidth;
                scope.value = seekBarFillRatio * 100;
                scope.value = Math.max(0, scope.value);
                scope.value = Math.min(100, scope.value);
            });
            scope.$watch('value', function(){
                scope.fill = {width: scope.value + "%"};
                scope.thumb = {left: scope.value + "%"};
            });
        }
    };
});


// var updateSeekPercentage = function($seekBar, seekBarFillRatio) {
 
//     var offsetXPercent = seekBarFillRatio * 100;
//     offsetXPercent = Math.max(0, offsetXPercent);
//     offsetXPercent = Math.min(100, offsetXPercent);
//     var percentageString = offsetXPercent + '%';
//     $seekBar.find('.fill').width(percentageString);
//     $seekBar.find('.thumb').css({left: percentageString});
 
//  }

// var setupSeekBars = function() {
 
//     var $seekBars = $('.player-bar .seek-bar');

//     $seekBars.click(function(event) {
//         var offsetX = event.pageX - $(this).offsetLeft;
//         var barWidth = $(this).width();
//         var seekBarFillRatio = offsetX / barWidth;
        
//         if ($(this).parent().attr('class') == 'seek-control') {
//             seek(seekBarFillRatio * currentSoundFile.getDuration()); 
//         } else {
//             setVolume(seekBarFillRatio * 100);   
//         }

//         updateSeekPercentage($(this), seekBarFillRatio);
//     });
//     $seekBars.find('.thumb').mousedown(function(event) {
//         var $seekBar = $(this).parent();

//         $(document).bind('mousemove.thumb', function(event){
//             var offsetX = event.pageX - $seekBar.offset().left;
//             var barWidth = $seekBar.width();
//             var seekBarFillRatio = offsetX / barWidth;

//             if ($seekBar.parent().attr('class') == 'seek-control') {
//                 seek(seekBarFillRatio * currentSoundFile.getDuration());   
//             } else {
//                 setVolume(seekBarFillRatio);
//             }

//             updateSeekPercentage($seekBar, seekBarFillRatio);
//         });
//         $(document).bind('mouseup.thumb', function() {
//             $(document).unbind('mousemove.thumb');
//             $(document).unbind('mouseup.thumb');
//         });
 
//     });
 
//  };

// var updateSeekBarWhileSongPlays = function() {
 
//     if (currentSoundFile) {
//         currentSoundFile.bind('timeupdate', function(event) {
//             var seekBarFillRatio = this.getTime() / this.getDuration();
//             var $seekBar = $('.seek-control .seek-bar');
 
//             updateSeekPercentage($seekBar, seekBarFillRatio);
//             setCurrentTimeInPlayerBar(this);
//             setTotalTimeInPlayerBar(this);
//         });
//     }
    
//  };