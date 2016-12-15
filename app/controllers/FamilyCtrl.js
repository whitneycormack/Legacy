"use strict";

app.controller('FamilyCtrl', function($scope, $location, FamilyFactory) {

  $scope.newFamily = {
    FamilyName: "",
    FamilyMembers: ""
  };




$scope.addNewFamily = function() {
  console.log("add new family?");
FamilyFactory.postNewFamily({FamilyName: "cormack"})
.then((obj) => {
  console.log("obj", obj);
});
};



});







