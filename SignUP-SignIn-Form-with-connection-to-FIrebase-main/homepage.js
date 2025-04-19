// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import {getAuth, onAuthStateChanged, signOut} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// import{getFirestore, getDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"

// const firebaseConfig = {
//     //YOUR COPIED FIREBASE PART SHOULD BE HERE
//  //WATCH THIS VIDEO TO LEARN WHAT TO PUT HERE   https://youtu.be/_Xczf06n6x0
//   };
 
//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   const auth=getAuth();
//   const db=getFirestore();

//   onAuthStateChanged(auth, (user)=>{
//     const loggedInUserId=localStorage.getItem('loggedInUserId');
//     if(loggedInUserId){
//         console.log(user);
//         const docRef = doc(db, "users", loggedInUserId);
//         getDoc(docRef)
//         .then((docSnap)=>{
//             if(docSnap.exists()){
//                 const userData=docSnap.data();
//                 document.getElementById('loggedUserFName').innerText=userData.firstName;
//                 document.getElementById('loggedUserEmail').innerText=userData.email;
//                 document.getElementById('loggedUserLName').innerText=userData.lastName;

//             }
//             else{
//                 console.log("no document found matching id")
//             }
//         })
//         .catch((error)=>{
//             console.log("Error getting document");
//         })
//     }
//     else{
//         console.log("User Id not Found in Local storage")
//     }
//   })

//   const logoutButton=document.getElementById('logout');

//   logoutButton.addEventListener('click',()=>{
//     localStorage.removeItem('loggedInUserId');
//     signOut(auth)
//     .then(()=>{
//         window.location.href='index.html';
//     })
//     .catch((error)=>{
//         console.error('Error Signing out:', error);
//     })
//   })


  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
  import { getFirestore, getDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC0U2s2wzn8NJ2Rfu_uc9L-yN6Ee2FRwXU",
    authDomain: "login-register-form-bbdms.firebaseapp.com",
    projectId: "login-register-form-bbdms",
    storageBucket: "login-register-form-bbdms.firebasestorage.app",
    messagingSenderId: "711613612196",
    appId: "1:711613612196:web:580ecc1cbd33f728dc6631"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();

  // Wait for DOM to load before accessing elements
  window.addEventListener('DOMContentLoaded', () => {
    const logoutButton = document.getElementById('logout');

    onAuthStateChanged(auth, (user) => {
      const loggedInUserId = localStorage.getItem('loggedInUserId');
      if (user && loggedInUserId) {
        const docRef = doc(db, "users", loggedInUserId);
        getDoc(docRef)
          .then((docSnap) => {
            if (docSnap.exists()) {
              const userData = docSnap.data();
              document.getElementById('loggedUserFName').innerText = userData.firstName;
              document.getElementById('loggedUserEmail').innerText = userData.email;
              document.getElementById('loggedUserLName').innerText = userData.lastName;
            } else {
              console.log("No document found matching ID.");
            }
          })
          .catch((error) => {
            console.error("Error getting document:", error);
          });
      } else {
        console.log("User not authenticated or userId not found in localStorage.");
        window.location.href = 'login.html'; // Optional: Redirect if not logged in
      }
    });

    if (logoutButton) {
      logoutButton.addEventListener('click', () => {
        localStorage.removeItem('loggedInUserId');
        signOut(auth)
          .then(() => {
            window.location.href = 'index.html';
          })
          .catch((error) => {
            console.error('Error signing out:', error);
          });
      });
    }
  });
