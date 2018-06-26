angular.module('car', [])
.controller('MainCtrl', [
  '$scope','$http',
  function($scope,$http){
    $scope.cars = [];
    $scope.addCar = function() {
      var newcar = {speaker:$scope.speakerFormContent,session:$scope.sessionFormContent,title:$scope.titleFormContent,url:$scope.pictureFormContent,upvotes:0}
      $scope.speakerFormContent='';
      $scope.sessionFormContent='';
      $scope.titleFormContent='';
      $scope.pictureFormContent='';
      $http.post('/cars', newcar).success(function(data){
        $scope.cars.push(data);
      });
    };
    $scope.upvote = function(car) {
      return $http.put('/cars/' + car._id + '/upvote')
        .success(function(data){
          console.log("upvote worked");
          car.upvotes = data.upvotes;
        });
    };
	$scope.incrementUpvotes = function(car) {
	  $scope.upvote(car);
	  $scope.getAll();
    };
    $scope.getAll = function() {
      return $http.get('/cars').success(function(data){
        angular.copy(data, $scope.cars);
      });
    };
    $scope.getAll();
    $scope.delete = function(car) {
      $http.delete('/cars/' + car._id )
        .success(function(data){
          console.log("delete worked");
        });
      $scope.getAll();
    };
  }
]);
