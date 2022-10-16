import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAClES3xlNXZ0HbqsLgVcww3m56CWbz3aw",
  authDomain: "chato-ensa.firebaseapp.com",
  projectId: "chato-ensa",
  storageBucket: "chato-ensa.appspot.com",
  messagingSenderId: "352002829046",
  appId: "1:352002829046:web:18b31398b43206736a9ad7",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
