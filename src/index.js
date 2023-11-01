// -------------------------------------------------- INITIALISE FIREBASE
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDuIXVuEPvfhwoIUA7TD6mB-MKs3yQZL_s",
    authDomain: "first-firebase-project-6b20a.firebaseapp.com",
    projectId: "first-firebase-project-6b20a",
    storageBucket: "first-firebase-project-6b20a.appspot.com",
    messagingSenderId: "397202310661",
    appId: "1:397202310661:web:1897fcc401a6df61e1fe6c",
    measurementId: "G-17RMD4W77Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// -------------------------------------------------- CODE BEGINNING
import { getDocs, collection, addDoc } from "firebase/firestore";

const usersRef = collection(db, "users");

let submit = document.querySelector('#submit');
submit.addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const password = document.querySelector('#password').value;
    // alert(`You have successfully registered\n` + `Email: ${email}\n` + `Name: ${name}\n` + `Password: ${password}`);

    addUser(email, name, password);
});

// -------------------------------------------------- FIREBASE DB
async function addUser(email, name, password) {
    try {
        const docRef = await addDoc(collection(db, "users"), {
            auth: false,
            email: email,
            name: name,
            password: password
        });
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

const querySnapshot = await getDocs(collection(db, "users"));
querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
    const registeredUsers = document.querySelector('#registered-users');
    registeredUsers.innerHTML += `<li>${doc.data().name}</li>`;
});