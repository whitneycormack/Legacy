"use strict";

var app = angular.module("LegacyApp", ["ngRoute"]);

// let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
//   AuthFactory.isAuthenticated()
//   .then( (userExists) => {
//     // userExists is set to true or false
//     if (userExists) {
//       resolve();
//      } else {
//       reject();
//       }
//     });
//   });



app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});

// routing
app.config(function($routeProvider, FBCreds) {
  let authConfig = {
      apiKey: FBCreds.apiKey,
      authDomain: FBCreds.authDomain
    };

  firebase.initializeApp(authConfig);

  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'LoginCtrl'
  })
  .when('/new', {
    templateUrl: 'partials/newNotePartial.html',
    controller: 'NewNoteCtrl'
  })
  .when('/library', {
    templateUrl: 'partials/libraryPartial.html',
    controller: 'LibraryCtrl'
  })
  .when('/family', {
    templateUrl: 'partials/familyPartial.html',
    controller: 'FamilyCtrl'
  })
  .when('/notes/details/:itemId', {
    templateUrl: 'partials/noteDetailsPartial.html',
    controller: 'NoteViewCtrl'
  })
  .otherwise('/');
});






