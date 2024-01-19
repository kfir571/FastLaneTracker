import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyAjxFenr2IbRLP-h7IibI-erEsD12BukXw",
    authDomain: "fastlane-web.firebaseapp.com",
    projectId: "fastlane-web",
    storageBucket: "fastlane-web.appspot.com",
    messagingSenderId: "804345244509",
    appId: "1:804345244509:web:c2475cd6c5c06c15d656b4"
  };

  export const app = initializeApp(firebaseConfig);