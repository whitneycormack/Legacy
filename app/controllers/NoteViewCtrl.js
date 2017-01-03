"use strict";

app.controller("NoteViewCtrl", function ($scope, $routeParams, NoteFactory) {
  console.log("noteview made it");
  $scope.notes = [];
  $scope.editModeFlag = false;
  $scope.selectedItem = null;

  $scope.editMode = function() {
    editModeFlag = true;
  }

  $scope.submitEdit = function() {
    console.log($scope.selectedItem)
  }

  NoteFactory.getNotes()
  .then(function(noteCollection) {
    $scope.notes = noteCollection;

    $scope.selectedItem = $scope.notes.filter(function(note) {
      return note.id === $routeParams.itemId;
    })[0];
  });
});

