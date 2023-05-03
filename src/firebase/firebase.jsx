import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAGvkaBmw-532wOcmEpSx2bhSIqogpKbDc",
    authDomain: "bandage-3c356.firebaseapp.com",
    projectId: "bandage-3c356",
    storageBucket: "bandage-3c356.appspot.com",
    messagingSenderId: "173853657906",
    appId: "1:173853657906:web:3624c6d571e5b4adc4e52b",
    measurementId: "G-951SQE8HRJ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
