console.log("level4.js geladen");
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAeJWnxc_YMbBLAF1bCgj6bhXidkihlqRA",
    authDomain: "hacker-area.firebaseapp.com",
    projectId: "hacker-area",
    storageBucket: "hacker-area.firebasestorage.app",
    messagingSenderId: "150908413978",
    appId: "1:150908413978:web:7c6c028a13c4bc58e309a3",
    measurementId: "G-9KEXY5C5NQ" };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.checkPassword = async function() {
    console.log("Button gedrückt");
    
    const eingabe = document.getElementById("password").value;

    console.log("Eingabe:", eingabe);
    
    const level4 = doc(db, "levels", "level4");

    const daten = await getDoc(level4);

    if (daten.exists()) {
        const richtigesPasswort = daten.data().password;

        if (eingabe === richtigesPasswort) {

document.getElementById("result").innerHTML = "Level geschafft!";
            }else{

document.getElementById("result").innerHTML = "Falsches Passwort!";
            }

        } else {

document.getElementById("result").innerHTML = "Level in Bearbeitung";
        }

    }
