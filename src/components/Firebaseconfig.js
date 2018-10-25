/*Firebase Functions Page*/
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");


  var config = {
    apiKey: "AIzaSyAfQziaYOQ6hbtjEkLiILpt_nb-eaj-EIg",
    authDomain: "reactproject-76dd9.firebaseapp.com",
    databaseURL: "https://reactproject-76dd9.firebaseio.com",
    projectId: "reactproject-76dd9",
    storageBucket: "reactproject-76dd9.appspot.com",
    messagingSenderId: "1008565090985"
  };

  firebase.initializeApp(config);
  var firestore = firebase.firestore();
firestore.settings({
  timestampsInSnapshots: true
});

  export function getusers(){
    firestore.collection("usuarios").get().then((querySnapshot) => {
        var usuarios = Array();
         querySnapshot.forEach((doc) => {
          console.log(doc);
          usuarios.push({ 'id' : doc.id , 'data': doc.data()});
         });
         console.log(usuarios)
    });
  }

  export function saveuser(nombre , apellido , edad){
    firestore.collection("usuarios").add({
    apellido: apellido,
    nombre: nombre,
    Edad: edad
    })
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
     console.error("Error adding document: ", error);
    });
  }