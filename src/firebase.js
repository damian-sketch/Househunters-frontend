import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCFRj534mQrOauPZ92itaLSuH8apUuBN5g",
  authDomain: "househunters-dd1f3.firebaseapp.com",
  projectId: "househunters-dd1f3",
  storageBucket: "househunters-dd1f3.appspot.com",
  messagingSenderId: "653502391579",
  appId: "1:653502391579:web:f205cc8af44694d50cdfbe",
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export default storage;
