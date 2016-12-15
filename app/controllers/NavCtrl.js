"use strict";

app.controller("navCtrl", function($scope, $rootScope){
  $rootScope.userIsLoggedIn = false;
  $(".button-collapse").sideNav();
});
