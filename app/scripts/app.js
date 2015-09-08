var app = angular.module('blocJams', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
 
    $locationProvider.html5Mode({
         enabled: true,
         requireBase: false
     });

    $urlRouterProvider.otherwise("/landing");

    $stateProvider
     	.state('landing', {
        	url: '/landing',
         	controller: 'LandingController',
         	templateUrl: '/templates/landing.html'
     	})
     	.state('collection', {
        	 url: '/collection',
         	controller: 'CollectionController',
         	templateUrl: '/templates/collection.html'
     	})
        .state('album', {
        	 url: '/album',
         	controller: 'AlbumController',
         	templateUrl: '/templates/album.html'
     	})
 });