// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js";
import { 
    addDoc,
    collection,
    getFirestore,
    onSnapshot,
    orderBy,
    query,

} from "https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjMHTcHqaI7cxEU2mkjEYdewsQCYW0VRk",
  authDomain: "argonautes-519de.firebaseapp.com",
  projectId: "argonautes-519de",
  storageBucket: "argonautes-519de.appspot.com",
  messagingSenderId: "283408118786",
  appId: "1:283408118786:web:3fd22c891112909caba31b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore()

//  exporte la fonction addArgonaute, qui ajoute un document à la collection argonautes en appelant la fonction addDoc de Firestore
export const addArgonaute = (argonaute) => 
    // console.log(argonaute);
    addDoc(collection(db, 'argonautes'), {argonaute})

export {
    onSnapshot,
    collection,
    db,
    orderBy,
    query,
}
