"use strict";

app.factory("AuthFactory", function(FBCreds) {
  console.log("auth factory is here");

    let currentUser = null;

    let createUser = function(userObj) {
      return firebase.auth().createUserWithEmailAndPassword(userObj.email, userObj.password);
    };

    let loginUser = function(userObj) {
      return firebase.auth().signInWithEmailAndPassword(userObj.email, userObj.password);
    };

    let logoutUser = function() {
      return firebase.auth().signOut();
      // currentUser = null;
      // console.log("current user", currentUser);
    };

    let isAuthenticated = function() {
      return new Promise( (resolve, reject) => {
        firebase.auth().onAuthStateChanged( (user) => {
          if (user) {
            currentUser = user.uid;
            console.log("current user uid", currentUser);
            resolve(true);
          } else {
            resolve(false);
          }
        });
      });
    };


    let getUser = function() {
      return currentUser;
    };

// let obj = { email: "123@456.com", password: "123456"};

// loginUser(obj);
// console.log("current user", getUser(), isAuthenticated());
// logoutUser();

    return { createUser, loginUser, logoutUser, isAuthenticated, getUser };

});








