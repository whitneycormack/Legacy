"use strict";

app.factory("PhotoFactory", function($http, FBCreds, AuthFactory, NoteFactory) {
  console.log("oh hey photo factory");

  var firebase = FBCreds.databaseURL;
  var selectedFile;

  let uploadFile = () => {

    var filename = selectedFile;
    var storageRef = firebase.storage().ref('userImages/' + filename);
    var uploadTask = storageRef.put(selectedFile);

    uploadTask.on('state_changed', function(snapshot) {

    }, function(error) {

    }, function() {
        var postKey = firebase.database().ref('Posts/').push().key;
        var downloadURL = uploadTask.snapshot.downloadURL;
        var updates = {};
        var postData = {
          url: downloadURL,
          caption: $("#imageCaption").val(),
          user: user.uid
        };

        updates['/Posts/' + postKey] = postData;
        firebase.database().ref().update(updates);
    });

}

  return { uploadFile };







});





