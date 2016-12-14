"use strict";

app.factory("NoteFactory", function($http, FBCreds) {
  console.log("note factory made it to the party");


  let postNote = (newNote) => {
    return new Promise ( (resolve, reject) => {
      $http.post(`${FBCreds.databaseURL}/notes.json`, angular.toJson(newNote))
          .success( (obj) => {
            resolve(obj);
          })
          .error( (error) => {
            reject(error);
          });
        });
      };





  let getNotes = function() {
    let notes = [];

    return new Promise ( (resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/notes.json`)
      .success( (noteObject) => {
        let noteCollection = noteObject;
        resolve(notes);
      })
      .error( (error) => {
        reject(error);
      });
    });
  };



// let obj = { Title: "do you work?", Date: "maybe" };
// postNote(obj);
// // going to firebase
// // success is not a function in post / error?

// console.log("getting notes", getNotes(obj));

return { postNote, getNotes };



});









