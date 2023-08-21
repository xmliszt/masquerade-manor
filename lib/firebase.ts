// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCXiVjzIXNtQNd9L0RtDxLRXMHL30Y_kOQ',
  authDomain: 'masquerade-manor.firebaseapp.com',
  projectId: 'masquerade-manor',
  storageBucket: 'masquerade-manor.appspot.com',
  messagingSenderId: '106625521463',
  appId: '1:106625521463:web:ac587cc04b4b1584756cb2',
  measurementId: 'G-4SW80T9BN6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getDatabase(app);
export const firestore = getFirestore(app);
