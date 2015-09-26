var app = angular.module('blocJams');

app.controller('CollectionController', function($scope, $rootScope){
  $scope.albums = [albumPicasso, albumMarconi, albumDistract];

  $rootScope.bodyClass = 'collection';
});
