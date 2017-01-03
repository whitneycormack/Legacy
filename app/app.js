"use strict";

var app = angular.module("LegacyApp", ["ngRoute"]);

let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
  AuthFactory.isAuthenticated()
  .then( (userExists) => {
    // userExists is set to true or false
    if (userExists) {
      resolve();
     } else {
      reject();
      }
    });
  });




// routing
app.config(function($routeProvider, FBCreds) {
  let authConfig = {
      apiKey: FBCreds.apiKey,
      authDomain: FBCreds.authDomain,
      databaseURL: FBCreds.databaseURL
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
  // .when('/family', {
  //   templateUrl: 'partials/familyPartial.html',
  //   controller: 'FamilyCtrl'
  // })
  .when('/notes/details/:itemId', {
    templateUrl: 'partials/noteDetailsPartial.html',
    controller: 'NoteViewCtrl'
  })
  .when('/notes/edit/:id', {
    templateUrl: 'partials/editPartial.html',
    controller: 'EditCtrl'
  })
  .when('/photos', {
    templateUrl: 'partials/photoPartial.html',
    controller: 'PhotoCtrl'
  })
  .otherwise({
    redirectTo: "/"
  });
});


// app.run($rootScope) => {
//   $rootScope.$on("$routeChangeError", function() {
//     $location.path("/login");
//   });
// };



app.config(function($locationProvider) {
  $locationProvider.html5Mode(true);
});
