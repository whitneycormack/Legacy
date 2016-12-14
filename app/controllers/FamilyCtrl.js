"use strict";

app.controller('FamilyCtrl', function($scope, $location, FamilyFactory) {

  $scope.newFamily = {
    FamilyName: "",
    FamilyMembers: ""
  };




$scope.addNewFamily = function() {
  console.log("you're adding a new family!", $scope.newFamily);
};




});







