import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyB_kHd0vamArppPiZlmpp-vS53gI3yxRj4",
  authDomain: "panpel-sscasn.firebaseapp.com",
  projectId: "panpel-sscasn",
  storageBucket: "panpel-sscasn.firebasestorage.app",
  messagingSenderId: "346451206329",
  appId: "1:346451206329:web:2b2f85fac7e45a3872bb68"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);