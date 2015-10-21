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

    return {
        getSongProgress: function() {
            if (currentSoundFile === null) {
                return null;
            }
            return currentSoundFile.getPercent();
        },
        setVolume: function(volume) {
            currentVolume = volume;
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
        getCurrentSong: function() {
            return currentSongFromAlbum;
        },
        getVolume: function() {
            return currentVolume;
        },
        getTime: function() {
            if (currentSoundFile === null) {
                return 0;
            }            
            return currentSoundFile.getTime();
        },
        getDuration: function() {
            if (currentSoundFile === null) {
                return null;
            }
            return currentSoundFile.getDuration();
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
        registerListener: function(fn) {
            if (currentSoundFile) {
                currentSoundFile.bind('timeupdate', fn);
            }
        },
    }
});
