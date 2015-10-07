var module = angular.module('blocJams');

module.factory('SongPlayer', function() {
	var currentSoundFile = null;
	var currentAlbum = null;
    var currentSongIndex = null;
    var currentSongFromAlbum = null;
    var currentVolume = 80;
   
    var trackIndex = function(album, song) {
        return album.songs.indexOf(song);
    };
    var filterTimeCode = function(timeInSeconds) {
        var minutes = parseFloat(Math.floor(timeInSeconds / 60));
        var seconds = parseFloat(Math.floor(timeInSeconds % 60));
        var time = (minutes + ":" + ("0" + seconds).slice(-2));
        return time;
    };

    return {
        setVolume: function(volume) {
            if (currentSoundFile) {
                currentSoundFile.setVolume(volume);
            }
        },
        setTime: function(time) {
            if (currentSoundFile) {
                currentSoundFile.setTime(time);
            }
        },
        setSong: function(songNumber) {
            if (currentSongIndex === songNumber) {
                return null;
            }     
            if (songNumber === undefined) {
                return null;
            }                      
            if (currentSoundFile) {
                currentSoundFile.stop();
            }
            currentSongIndex = songNumber;
            currentSongFromAlbum = currentAlbum.songs[currentSongIndex];
            if (currentSoundFile !== null) {
                currentSoundFile.unbind('timeupdate');
            };
            currentSoundFile = new buzz.sound(currentSongFromAlbum.audioUrl, {
                formats: [ 'mp3' ],
                preload: true
            })
        },
        setAlbum: function(album) {
            currentAlbum = album;
        },
        registerListener: function(fn) {
            if (currentSoundFile) {
                currentSoundFile.bind('timeupdate', fn);
            }
        },
        getTime: function() {
            return filterTimeCode(currentSoundFile.getTime());
        },
        getDuration: function() {
            return filterTimeCode(currentSoundFile.getDuration());
        },
        play: function() {
            if (currentSongIndex === null) {
                this.setSong(0);
            }
            this.playing = true;
            currentSoundFile.play();
            return currentAlbum.songs[currentSongIndex];
        },   	
        pause: function() {
            this.playing = false;
            currentSoundFile.pause();
        },
        next: function() {
            if (currentSongIndex === null) {
                currentSongIndex = -1;
            } 
            if (currentSongIndex >= currentAlbum.songs.length -1) {
                currentSongIndex = -1;
            }
            this.setSong(currentSongIndex + 1);   
            currentSoundFile.play();
            return currentAlbum.songs[currentSongIndex]; 
        },
        previous: function() {
            if (currentSongIndex === null) {
                currentSongIndex = currentAlbum.songs.length - 1;
            }    
            if (currentSongIndex < 1) {
                currentSongIndex = currentAlbum.songs.length;
            }
            this.setSong(currentSongIndex - 1);
            currentSoundFile.play();
            return currentAlbum.songs[currentSongIndex];
        },
    }
});
