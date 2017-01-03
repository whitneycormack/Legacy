"use strict";

app.controller("LibraryCtrl", function($scope, $rootScope, $location, $timeout, NoteFactory, AuthFactory) {
  console.log("library ctrl hereee");

  $scope.user = $rootScope.currentUser;
  console.log("filter user", $scope.user)

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
        $location.path("/library");
        $timeout();
      });
    });
  };


});


