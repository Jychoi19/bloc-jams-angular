var myApp = angular.module('blocJams');

myApp.filter('filterTimeCode', function() {
	return function(timeInSeconds) {
		if (typeof timeInSeconds === "number") {
			var minutes = parseFloat(Math.floor(timeInSeconds / 60));
	        var seconds = parseFloat(Math.floor(timeInSeconds % 60));
	        var time = (minutes + ":" + ("0" + seconds).slice(-2));
        	return time;
		}
    };
});