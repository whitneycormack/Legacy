"use strict";

app.controller("NoteViewCtrl", function ($scope, $routeParams, NoteFactory) {
  console.log("noteview made it");
  $scope.notes = [];
  $scope.editModeFlag = false;
  $scope.selectedItem = null;

  $scope.editMode = function() {
    $scope.editModeFlag = true;
  }

  $scope.submitEdit = function() {
    console.log($scope.selectedItem)
    NoteFactory.updateNote($scope.selectedItem, $routeParams.itemId).then(function(){
      console.log("success");
      //location url
    });
  }

  NoteFactory.getNotes()
  .then(function(noteCollection) {
    $scope.notes = noteCollection;

    $scope.selectedItem = $scope.notes.filter(function(note) {
      return note.id === $routeParams.itemId;
    })[0];
  });
});

