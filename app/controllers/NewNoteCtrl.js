"use strict";

app.controller("NewNoteCtrl", function ($scope, $location, NoteFactory) {
  $scope.note = {
    Title: "",
    Date: "",
    Text: ""
  };


  $scope.addNewNote = function() {
    console.log("adding new note", $scope.note);
    NoteFactory.postNote($scope.note)
    .then(function(response) {
      $location.url("/library");
      console.log("you posted a new note", $scope.note.Title);
    });
  };
});