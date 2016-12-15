"use strict";

app.factory("FamilyFactory", function($http, FBCreds) {
  console.log("fam factory made it toooo");




  let postNewFamily = (famObject) => {
    return new Promise( (resolve, reject) => {
      $http.post(`${FBCreds.databaseURL}/family.json`)
      .then( (famObj) => {
        resolve(famObj);
      });
    });
  };




return { postNewFamily };



});



