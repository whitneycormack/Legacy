"use strict";

app.controller("LibraryCtrl", function($scope, $rootScope, $location, $timeout, NoteFactory, AuthFactory, PhotoFactory, FBCreds) {
  console.log("library ctrl hereee");

  // $scope.searchText = SearchTermData;

  NoteFactory.getNotes()
  .then(function (noteCollection) {
    $scope.notes = noteCollection;
    console.log("note collection?", noteCollection);
  });

  PhotoFactory.getFile()
  .then(function (fileCollection) {
    $scope.files = fileCollection;
    console.log("libraryctrl file collection made it");
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
          $location.path("/library");
          $timeout();
        });
      });
    };


});


