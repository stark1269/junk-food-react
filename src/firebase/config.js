import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCtluxd0gnxCIFy8hOITaIEENST7WnAeag",
  authDomain: "junk-food-app.firebaseapp.com",
  projectId: "junk-food-app",
  storageBucket: "junk-food-app.appspot.com",
  messagingSenderId: "671414691196",
  appId: "1:671414691196:web:b8e28daf616d43f56030f9"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);