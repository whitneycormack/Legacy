"use strict";

app.controller("LoginCtrl", function($scope, AuthFactory, $window, NoteFactory, $location) {
  // tell controller what to look for
  $scope.account = {
    email: '',
    password: ''
  };

// register new user
  $scope.register = () => {
      console.log("thanks for registering!");
    AuthFactory.createUser($scope.account)
    .then( function(userData) {
      $scope.login();
    });
  };

// login user
  $scope.login = () => {
    console.log("user is so logged in!", $scope.account);
    AuthFactory.loginUser($scope.account)
    .then( (user) => {
      console.log("user", user);
      // $window.location.href = "/library";
    });
  };

  $scope.logout = function() {
    console.log("you are logged out");
    AuthFactory.logoutUser();
    console.log("should be nothing", AuthFactory.getUser());
  };

}); /* <- end of app function */


