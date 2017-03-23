"use strict";

app.factory("PhotoFactory", function($http, FBCreds, AuthFactory, NoteFactory) {
  console.log("oh hey photo factory");

  let uploadFile = (imageFile) => {
    return new Promise ( (resolve, reject) => {
      var storageRef = firebase.storage().ref();

      // var storageRef = firebase.storage().ref(`images/${imageFile.name}`);
      console.log("storage ref", storageRef);

      var uploadTask = storageRef.child(`images/${imageFile.name}`).putString(imageFile.data, 'base64');

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        function(snapshot) {
          console.log("whats this snapshot", snapshot);
          console.log("uploadTask", uploadTask)
        },
        function(error) {
          console.log("error", error);
          reject(error);
        },
        function() {
          console.log("uploadTask.snapshot", uploadTask.snapshot);
          var downloadURL = uploadTask.snapshot.downloadURL;
          resolve(downloadURL);
        });
    });
  };


let getFile = (imageFile) => {

let files = [];

return new Promise ( (resolve, reject) => {
  $http.get(`${FBCreds.databaseURL}/images.json`)
    .then(function(userImage) {
      if (userImage) {
        let fileCollection = userImage.data;
        console.log("fileCollection", fileCollection);
          Object.keys(fileCollection).forEach(function(key) {
          fileCollection[key].id = key;
          files.push(fileCollection[key]);
          });
        }
        resolve(files);
      })
      .catch(function(error) {
        reject(error);
      });
    });
  }

  return { uploadFile, getFile };


});





