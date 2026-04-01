import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB5NXR2OfbQXSOI5aDRhDUSjF96tlvXpR4",
  authDomain: "sitio-web-museo.firebaseapp.com",
  projectId: "sitio-web-museo",
  storageBucket: "sitio-web-museo.appspot.com",
  messagingSenderId: "205701835264",
  appId: "1:205701835264:web:a28ff1208f00a1dafa06e5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
