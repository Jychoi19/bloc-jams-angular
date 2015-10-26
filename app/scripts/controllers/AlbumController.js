var app = angular.module('blocJams');

app.controller('AlbumController', function($scope, $rootScope, $stateParams, SongPlayer){
    var albums = [albumPicasso, albumMarconi, albumDistract];
    var match = albums.find(function(album){
        return $stateParams.id == album.id;
    });
 	$scope.album = match;
 	SongPlayer.setAlbum($scope.album);
    $rootScope.bodyClass = 'album'; 
    $scope.currentSong = SongPlayer.getCurrentSong();
    $scope.playing = $scope.currentSong !== null && !SongPlayer.isPaused();
    $scope.activePosition = $scope.currentSong !== null;
    $scope.volume = SongPlayer.getVolume();

   var listener = function(){
        $scope.$digest();
        $scope.$apply(function(){
            $scope.time = SongPlayer.getTime();
            $scope.duration = SongPlayer.getDuration();
            $scope.updateSeekBarWhileSongPlays();
        });
    };
    SongPlayer.registerListener(listener);

    $scope.$watch('volume', function(){
        SongPlayer.setVolume($scope.volume);
    });
    $scope.$watch('progress', function() {
        var songProgress = (SongPlayer.getTime() / SongPlayer.getDuration()) * 100;
        if (Math.abs($scope.progress - songProgress) > 1) {
          SongPlayer.setTime($scope.progress / 100 * SongPlayer.getDuration());
        }
    }); 

    $scope.updateSeekBarWhileSongPlays = function() {
        $scope.progress = (SongPlayer.getTime() / SongPlayer.getDuration()) * 100;
        if (isNaN($scope.progress)) { $scope.progress = 0; }
    };

    $scope.time = SongPlayer.getTime();
    $scope.duration = SongPlayer.getDuration();
    $scope.updateSeekBarWhileSongPlays();

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
