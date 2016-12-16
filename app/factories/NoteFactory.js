"use strict";

app.factory("NoteFactory", function($http, FBCreds, AuthFactory) {
  console.log("note factory made it to the party");


  let postNote = (newNote) => {
    return new Promise ( (resolve, reject) => {
      $http.post(`${FBCreds.databaseURL}/notes.json`, angular.toJson(newNote))
          .then( (obj) => {
            resolve(obj);
        });
      });
    };


  let getNotes = (newNote) => {
    let notes = [];

    return new Promise ( (resolve, reject) => {
      $http.get(`${FBCreds.databaseURL}/notes.json`, angular.toJson(newNote))
      .then( (noteObject) => {
        let noteCollection = noteObject.data;
        // .data - because abby/greg is a genius :)
        // console.log("note collection", noteCollection);
        if (noteObject) {
          Object.keys(noteCollection).forEach(function(key) {
            noteCollection[key].id = key;
            notes.push(noteCollection[key]);
            console.log("note collection with new 1 added", noteCollection);
          });
        }
        resolve(notes);
      })
      .catch(function(error) {
        reject(error);
      });
    });
  };


  let deleteNote = function(id) {
    return new Promise( ( resolve, reject) => {
      $http.delete(`${FBCreds.databaseURL}/notes/${id}.json`)
      .then(function() {
        resolve();
      })
      .catch(function(error) {
        reject(error);
      });
    });
  };











// let obj = { Title: "do you work?", Date: "maybe" };
// postNote(obj);
// // going to firebase
// // success is not a function in post / error?

// console.log("getting notes", getNotes(obj));

return { postNote, getNotes, deleteNote };



});









