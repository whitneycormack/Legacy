"use strict";

app.controller("PhotoCtrl", function($scope, $location, PhotoFactory, FBCreds) {
  console.log("photo factory was herrrree");

$scope.photoEntry = {
  Title: "",
  Date: "",
  Text: "",

}


var selectedFile;


$scope.addPhotoEntry = function() {
  console.log("addding a new photo", $scope.photoEntry);
  PhotoFactory.uploadFile($scope.photoEntry)
  .then(function(response) {
    Materialize.toast('You added a new photo!', 4000);
    $location.url("/library");
  });
};






$("#file").on("change", function(event) {
  selectedFile = event.target.files[0];
  $("#uploadButton").show();
});





// function uploadFile() {
//   var filename = selectedFile.name;
//   var storageRef = firebase.storage().ref('/userImages/' + filename);
//   var uploadTask = storageRef.put(selectedFile);

//   uploadTask.on('state_changed', function(snapshot) {

//   }, function(error) {

//   }, function() {
//     var downloadURL = uploadTask.snapshot.downloadURL;
//     console.log("downloadURL", downloadURL);
//   })


// }










});



