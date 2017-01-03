"use strict";

app.controller("NewNoteCtrl", function ($scope, $location, $timeout, NoteFactory) {
  $scope.note = {
    Title: "",
    Date: "",
    Text: ""
  };


  $scope.addNewNote = function() {
    console.log("adding new note", $scope.note);
    NoteFactory.postNote($scope.note)
    .then(function(response) {
      Materialize.toast('Added Note!', 4000)
        $location.path("/library");
        $timeout();
        console.log("you posted a new note", $scope.note.Title);
    });
  };
});