"use strict";

app.controller("EditCtrl", function($scope, $http, $location, $routeParams, NoteFactory, AuthFactory) {
  $scope.newNote = {};

  NoteFactory.getNote($routeParams.id)
  .then(function successCallback(response) {
    $scope.newNote = response;
  });


$scope.addNewNote = function() {
  NoteFactory.updateNote($routeParams.id, $scope.newNote)
  .then(function successCallback(response) {
    $location.url("/library");
  });
};







});