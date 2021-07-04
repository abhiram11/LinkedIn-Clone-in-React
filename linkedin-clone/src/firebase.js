import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDlVNOHLATYNo8xraFgOV7BCR59udRFpIs",
  authDomain: "linkedin-clone-abhi.firebaseapp.com",
  projectId: "linkedin-clone-abhi",
  storageBucket: "linkedin-clone-abhi.appspot.com",
  messagingSenderId: "219607301932",
  appId: "1:219607301932:web:c2a87d448464d3d3857689",
};

//this "connects" to our database, sets everything up
const firebaseApp = firebase.initializeApp(firebaseConfig);

// "access" to the database
const db = firebaseApp.firestore();

//get access to the "authentications" that we have enabled in our firebase
const auth = firebase.auth();

// access the variables outside this file
export { db, auth };

// const firebaseConfig = {
//     apiKey: "AIzaSyClx1ah9UEWwVZcyfxvZn4UBo4ycYFnTzo",
//     authDomain: "linkedin-clone-abhiram.firebaseapp.com",
//     projectId: "linkedin-clone-abhiram",
//     storageBucket: "linkedin-clone-abhiram.appspot.com",
//     messagingSenderId: "31277936759",
//     appId: "1:31277936759:web:57594bc663861ecd25d672"
//   };
