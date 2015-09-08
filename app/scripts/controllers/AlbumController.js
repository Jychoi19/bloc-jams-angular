var app = angular.module('blocJams');

app.controller('AlbumController', ['$scope', function($scope){
  $scope.picasso = albumPicasso;
  $scope.marconi = albumMarconi;
  $scope.distract = albumDistract;
}]);
