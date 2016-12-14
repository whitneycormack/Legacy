"use strict";

app.controller("NewNoteCtrl", function ($scope, $location, NoteFactory) {
  $scope.note = {
    Title: "",
    Date: "",
    Text: ""
  };


  $scope.addNewNote = function() {
    console.log("adding new note", $scope.newNote);
    NoteFactory.postNote($scope.newNote)
    .then(function(response) {
      console.log("you posted a new note");
    });
  };
});