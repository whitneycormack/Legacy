"use strict";

app.controller("LibraryCtrl", function($scope, NoteFactory) {
  NoteFactory.getNotes()
  .then(function (noteCollection) {
    $scope.notes = noteCollection;

    console.log("note collection?", noteCollection);

  });




});