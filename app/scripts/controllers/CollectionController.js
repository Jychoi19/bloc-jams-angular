var app = angular.module('blocJams');

app.controller('CollectionController', ['$scope', function($scope){
  $scope.albums = [albumPicasso, albumMarconi, albumDistract];
}]);
