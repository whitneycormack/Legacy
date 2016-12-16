"use strict";

app.controller("NoteViewCtrl", function ($scope, $routeParams, NoteFactory) {
  console.log("noteview made it");
  $scope.notes = [];
  $scope.selectedNote = null;

  NoteFactory.getNotes()
  .then(function(noteCollection) {
    $scope.notes = noteCollection;

    $scope.selectedItem = $scope.notes.filter(function(note) {
      return note.id === $routeParams.itemId;
    })[0];
  });
});

