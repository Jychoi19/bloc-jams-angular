var myApp = angular.module('blocJams');

myApp.directive('mySlider', function() {
    return {
        templateUrl: 'templates/slider.html',
        replace: true,
        restrict: 'E',
        scope: { },
        link: function(scope, element, attributes) {
        	console.log(element);
            scope.click = function(seekbars) {
                console.log(seekbars)};
       //      scope.percentages = function(seekBar, seekBarFillRatio) {
       //          var offsetXPercent = seekBarFillRatio * 100;
    			// offsetXPercent = Math.max(0, offsetXPercent);
    			// offsetXPercent = Math.min(100, offsetXPercent);
    			// var percentageString = offsetXPercent + '%';
       //      }
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
//         var offsetX = event.pageX - $(this).offset().left;
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