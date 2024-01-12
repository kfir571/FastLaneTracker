// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {  getFirestore, collection, getDocs, addDoc  } from "firebase/firestore";
// import {  getFirestore, collection, getDocs, addDoc  } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAjxFenr2IbRLP-h7IibI-erEsD12BukXw",
    authDomain: "fastlane-web.firebaseapp.com",
    projectId: "fastlane-web",
    storageBucket: "fastlane-web.appspot.com",
    messagingSenderId: "804345244509",
    appId: "1:804345244509:web:c2475cd6c5c06c15d656b4"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);


function getFormattedDate() {
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  var date = new Date();
  var dayName = days[date.getDay()];
  var monthName = months[date.getMonth()];
  var day = date.getDate();

  return dayName + ' ' + monthName + ' ' + day;
}



let p = document.getElementById('tempData')
let p_currnt_day = document.getElementById('currnt_day')

console.log(getFormattedDate());


p_currnt_day.innerHTML = getFormattedDate() + " current price:";





const querySnapshot = await getDocs(collection(db, "09_01_2024"));
// querySnapshot.forEach((doc) => {
//   //console.log("p is " + p);
//   //console.log(`${doc.id} => ${doc.data().price}`);
//   p.innerHTML += `    ${doc.id} => ${doc.data().price}    \n`;
// });




const url = 'https://fastlane.co.il/';

// const agent = new https.Agent({  
//   rejectUnauthorized: false // This disables SSL certificate verification
// });

// const express = require('express');
// const app1 = express();
// const cros = require('cros');
// app1.use(
//   cros({
//     origin: "*",
//   })
// )

// fetch(url)
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Network response was not ok ' + response.statusText);
//     }
//     return response.text();
//   })
//   .then(html => {
//     console.log(html); // This will log the HTML content of the page
//   })
//   .catch(error => {
//     console.error('There has been a problem with your fetch operation:', error);
//   });

