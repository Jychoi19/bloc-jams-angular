var app = angular.module('blocJams');

app.controller('AlbumController', function($scope, $rootScope, SongPlayer){
 	$scope.album = albumPicasso;
 	SongPlayer.setAlbum(albumPicasso);
 	$scope.playing = false;
    $rootScope.bodyClass = 'album'; 
    $scope.song = null;
    $scope.activePosition = 0;


    $scope.hoverOn = function(index) {
        $scope.activePosition = index;  
    };
    // $scope.hoverOff = function(index) {
    //     if ($scope.playing === true) {
    //         $scope.activePosition = 0;
    //     }
    //     else {
    //     $scope.activePosition = index;  
    //     };
    // };

    $scope.getTime3 = function() {
        if ($scope.song !== null) {
            $scope.time1 = SongPlayer.getTime2();
            return true;
        };
    };
    $scope.getDuration3 = function() {
        if ($scope.song !== null) {
            $scope.duration1 = SongPlayer.getDuration2();
            return true;
        };
    };    

    $scope.playSong = function(index) {
        SongPlayer.setSong(index);
        $scope.song = SongPlayer.play();
        $scope.playing = true;
    };
    $scope.pauseSong = function() {
        SongPlayer.pause();
        $scope.playing = false; 
    };
    $scope.nextSong = function() {
        $scope.song = SongPlayer.next();
        $scope.playing = true;        
    };
    $scope.previousSong = function() {
        $scope.song = SongPlayer.previous();
        $scope.playing = true;        
    };
});
