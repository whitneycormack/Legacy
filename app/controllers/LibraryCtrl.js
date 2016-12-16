"use strict";

app.controller("LibraryCtrl", function($scope, NoteFactory) {
  console.log("library ctrl hereee");
  NoteFactory.getNotes()
  .then(function (noteCollection) {
    $scope.notes = noteCollection;

    console.log("note collection?", noteCollection);

  });



$scope.delete = function (id) {
  console.log("id:", id);
  NoteFactory.deleteNote(id)
  .then(function() {
    console.log("deleted it");
      NoteFactory.getNotes()
      .then(function(noteCollection) {
        console.log("note collection minus 1", noteCollection);
        $scope.notes = noteCollection;
      });
    });
  };


});


