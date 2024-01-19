import { app } from './firebaseConfig';
import {  getFirestore, collection, getDocs, addDoc  } from "firebase/firestore";
import { getFormattedDate, getHourAndMinutes, getDate } from './FormattedDate';

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// let p = document.getElementById('tempData')
let p_currnt_day = document.getElementById('currnt_day')
// let pic_time = document.getElementById('appointmentTime');

const hour_minutes_format = getHourAndMinutes();

const querySnapshot = await getDocs(collection(db, getDate()));
// console.log(querySnapshot);
querySnapshot.forEach((doc) => {
  if( doc.id === hour_minutes_format){
    p_currnt_day.innerHTML = `${getFormattedDate()} current price: ${doc.data().price}`;
  }
  // console.log(`${doc.id} === ${hour_minutes_format}   : ${doc.id === hour_minutes_format}`);
});


