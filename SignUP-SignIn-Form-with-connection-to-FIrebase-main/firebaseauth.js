
  // Import Firebase SDKs
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
  import { getFirestore, setDoc, doc } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

  // Your Firebase configuration
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
  const auth = getAuth(app);
  const db = getFirestore(app);

  // Example: Show a message
  function showMessage(message, divId){
    var messageDiv = document.getElementById(divId);
    messageDiv.style.display = "block";
    messageDiv.innerHTML = message;
    messageDiv.style.opacity = 1;
    setTimeout(function(){
      messageDiv.style.opacity = 0;
    }, 5000);
  }

  // Sign Up Event
  const signUp = document.getElementById('submitSignUp');
  if (signUp) {
    signUp.addEventListener('click', (event) => {
      event.preventDefault();
      const email = document.getElementById('rEmail').value;
      const password = document.getElementById('rPassword').value;
      const firstName = document.getElementById('fName').value;
      const lastName = document.getElementById('lName').value;

      createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const userData = {
          email: email,
          firstName: firstName,
          lastName: lastName
        };
        showMessage('Account Created Successfully', 'signUpMessage');
        const docRef = doc(db, "users", user.uid);
        setDoc(docRef, userData)
        .then(() => {
          window.location.href = 'index.html';
        })
        .catch((error) => {
          console.error("Error writing document", error);
        });
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          showMessage('Email Address Already Exists !!!', 'signUpMessage');
        } else {
          showMessage('Unable to create User', 'signUpMessage');
        }
      });
    });
  }

  // Sign In Event
  const signIn = document.getElementById('submitSignIn');
  if (signIn) {
    signIn.addEventListener('click', (event) => {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;

      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        showMessage('Login is successful', 'signInMessage');
        localStorage.setItem('loggedInUserId', user.uid);
        window.location.href = 'homepage.html';
      })
      .catch((error) => {
        if (error.code === 'auth/invalid-credential') {
          showMessage('Incorrect Email or Password', 'signInMessage');
        } else {
          showMessage('Account does not exist', 'signInMessage');
        }
      });
    });
  }







// previous code

  //  // Import the functions you need from the SDKs you need
// //  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
// import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
// // import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
// import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-auth.js";
// // import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/10.11.1/firebase-firestore.js"
// import{getFirestore, setDoc, doc} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js"


//  const firebaseConfig = {
//  //YOUR COPIED FIREBASE PART SHOULD BE HERE
//  //WATCH THIS VIDEO TO LEARN WHAT TO PUT HERE   https://youtu.be/_Xczf06n6x0

// // naim edit
//   // Import the functions you need from the SDKs you need
// //   import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";
//   // TODO: Add SDKs for Firebase products that you want to use
//   // https://firebase.google.com/docs/web/setup#available-libraries

//   // Your web app's Firebase configuration
// //   const firebaseConfig = {
//     apiKey: "AIzaSyC0U2s2wzn8NJ2Rfu_uc9L-yN6Ee2FRwXU",
//     authDomain: "login-register-form-bbdms.firebaseapp.com",
//     projectId: "login-register-form-bbdms",
//     storageBucket: "login-register-form-bbdms.firebasestorage.app",
//     messagingSenderId: "711613612196",
//     appId: "1:711613612196:web:580ecc1cbd33f728dc6631"
// //   };

// //   // Initialize Firebase
// //   const app = initializeApp(firebaseConfig);


//  };

//  // Initialize Firebase
//  const app = initializeApp(firebaseConfig);

//  function showMessage(message, divId){
//     var messageDiv=document.getElementById(divId);
//     messageDiv.style.display="block";
//     messageDiv.innerHTML=message;
//     messageDiv.style.opacity=1;
//     setTimeout(function(){
//         messageDiv.style.opacity=0;
//     },5000);
//  }
//  const signUp=document.getElementById('submitSignUp');
//  signUp.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const email=document.getElementById('rEmail').value;
//     const password=document.getElementById('rPassword').value;
//     const firstName=document.getElementById('fName').value;
//     const lastName=document.getElementById('lName').value;

//     const auth=getAuth();
//     const db=getFirestore();

//     createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential)=>{
//         const user=userCredential.user;
//         const userData={
//             email: email,
//             firstName: firstName,
//             lastName:lastName
//         };
//         showMessage('Account Created Successfully', 'signUpMessage');
//         const docRef=doc(db, "users", user.uid);
//         setDoc(docRef,userData)
//         .then(()=>{
//             window.location.href='index.html';
//         })
//         .catch((error)=>{
//             console.error("error writing document", error);

//         });
//     })
//     .catch((error)=>{
//         const errorCode=error.code;
//         if(errorCode=='auth/email-already-in-use'){
//             showMessage('Email Address Already Exists !!!', 'signUpMessage');
//         }
//         else{
//             showMessage('unable to create User', 'signUpMessage');
//         }
//     })
//  });

//  const signIn=document.getElementById('submitSignIn');
//  signIn.addEventListener('click', (event)=>{
//     event.preventDefault();
//     const email=document.getElementById('email').value;
//     const password=document.getElementById('password').value;
//     const auth=getAuth();

//     signInWithEmailAndPassword(auth, email,password)
//     .then((userCredential)=>{
//         showMessage('login is successful', 'signInMessage');
//         const user=userCredential.user;
//         localStorage.setItem('loggedInUserId', user.uid);
//         window.location.href='homepage.html';
//     })
//     .catch((error)=>{
//         const errorCode=error.code;
//         if(errorCode==='auth/invalid-credential'){
//             showMessage('Incorrect Email or Password', 'signInMessage');
//         }
//         else{
//             showMessage('Account does not Exist', 'signInMessage');
//         }
//     })
//  })
