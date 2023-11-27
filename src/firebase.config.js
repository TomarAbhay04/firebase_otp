
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD25iPcEUsskh8lGYzoNiScO3Io3NRaDAo",
  authDomain: "otp-loginpage.firebaseapp.com",
  projectId: "otp-loginpage",
  storageBucket: "otp-loginpage.appspot.com",
  messagingSenderId: "595137510661",
  appId: "1:595137510661:web:72efd458a521eb46288b6c",
  measurementId: "G-4D5XL5BTV8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)