import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAQKayZtynYiSXEI_TbK02Qvjv_e0pddp8",
  authDomain: "easylife-c0515.firebaseapp.com",
  databaseURL: "https://easylife-c0515-default-rtdb.firebaseio.com",
  projectId: "easylife-c0515",
  storageBucket: "easylife-c0515.appspot.com",
  messagingSenderId: "63943872610",
  appId: "1:63943872610:web:47053650898d18920b013b",
  measurementId: "G-2RZKTW42HH"
};

const firebaseConfig2 = {
  apiKey: "AIzaSyAQKayZtynYiSXEI_TbK02Qvjv_e0pddp8",
  authDomain: "easylife-c0515.firebaseapp.com",
  databaseURL: "https://easylife-c0515-default-rtdb.firebaseio.com",
  projectId: "easylife-c0515",
  storageBucket: "easylife-c0515.appspot.com",
  messagingSenderId: "63943872610",
  appId: "1:63943872610:web:47053650898d18920b013b",
  measurementId: "G-2RZKTW42HH"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const database = getDatabase(app);
