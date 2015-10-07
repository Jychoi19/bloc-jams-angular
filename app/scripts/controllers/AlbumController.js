var app = angular.module('blocJams');

app.controller('AlbumController', function($scope, $rootScope, SongPlayer){
 	$scope.album = albumPicasso;
 	SongPlayer.setAlbum(albumPicasso);
 	$scope.playing = false;
    $rootScope.bodyClass = 'album'; 
    $scope.currentSong = null;
    $scope.activePosition = 0;
    $scope.volume = 80;

    $scope.trackIndexStyle = 10;
    $scope.progress = 20;      

    $scope.$watch('volume', function(){
        SongPlayer.setVolume($scope.volume);
    });

    // $scope.notPlaying = function(song) {
    //     song !== $scope.currentSong || !$scope.playing;
    // };
    // $scope.isPaused = function(song) {
    //     song === $scope.currentSong && !$scope.playing;
    // };
    var listener = function(){
        $scope.$apply(function(){
          $scope.time = SongPlayer.getTime();
          $scope.duration = SongPlayer.getDuration();
        });
    };

    // window.skope = $scope;

    $scope.hoverOn = function(index) {
        $scope.activePosition = index;  
    };
    $scope.hoverOff = function(index) {
        $scope.activePosition = !index;  
    };
    $scope.playSong = function(index) {
        SongPlayer.setSong(index);
        $scope.currentSong = SongPlayer.play();
        $scope.playing = true;
        SongPlayer.registerListener(listener);
    };
    $scope.pauseSong = function() {
        SongPlayer.pause();
        $scope.playing = false; 
    };
    $scope.nextSong = function() {
        $scope.currentSong = SongPlayer.next();
        $scope.playing = true;   
        SongPlayer.registerListener(listener);       
    };
    $scope.previousSong = function() {
        $scope.currentSong = SongPlayer.previous();
        $scope.playing = true;       
        SongPlayer.registerListener(listener);
    };
});
