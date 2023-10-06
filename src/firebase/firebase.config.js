// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKOZP4fC4FHWkrghmkBr5H71qxBQ-pzS4",
  authDomain: "dragon-news-e93c5.firebaseapp.com",
  projectId: "dragon-news-e93c5",
  storageBucket: "dragon-news-e93c5.appspot.com",
  messagingSenderId: "1031612888294",
  appId: "1:1031612888294:web:c98cd25d283498aae2b727"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;