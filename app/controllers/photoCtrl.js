"use strict";

app.controller("PhotoCtrl", function($scope, $rootScope, $location, $timeout, NoteFactory, AuthFactory, PhotoFactory, FBCreds) {
  console.log("photo ctrl was herrrree");

$scope.userImage = {
  Title: "",
  Date: "",

}


$scope.addPhotoEntry = function() {
    $scope.userImage.data = $scope.userImage.data.split(',')[1];
    PhotoFactory.uploadFile($scope.userImage)
    .then( function(response) {
      console.log("response", response);
      Materialize.toast('Added Photo!', 4000)
      $location.path("/library");
      $timeout();
      });
    };


// $scope.addPhotoEntry = function() {
//   console.log("addding a new photo", $scope.photoEntry);
//   PhotoFactory.uploadFile($scope.photoEntry)
//   .then(function(response) {
//     Materialize.toast('You added a new photo!', 4000);
//     $location.url("/library");
//   });




});




