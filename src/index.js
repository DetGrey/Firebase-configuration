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

let submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    const email = document.querySelector('#email').value;
    const name = document.querySelector('#name').value;
    const password = document.querySelector('#password').value;
    alert(`You have successfully registered\n` + `Email: ${email}\n` + `Name: ${name}\n` + `Password: ${password}`);
});

// -------------------------------------------------- FIREBASE DB
import { collection, doc, setDoc } from "firebase/firestore";

const citiesRef = collection(db, "cities");

await setDoc(doc(citiesRef, "SF"), {
    name: "San Francisco", state: "CA", country: "USA",
    capital: false, population: 860000,
    regions: ["west_coast", "norcal"] });
await setDoc(doc(citiesRef, "LA"), {
    name: "Los Angeles", state: "CA", country: "USA",
    capital: false, population: 3900000,
    regions: ["west_coast", "socal"] });
await setDoc(doc(citiesRef, "DC"), {
    name: "Washington, D.C.", state: null, country: "USA",
    capital: true, population: 680000,
    regions: ["east_coast"] });
await setDoc(doc(citiesRef, "TOK"), {
    name: "Tokyo", state: null, country: "Japan",
    capital: true, population: 9000000,
    regions: ["kanto", "honshu"] });
await setDoc(doc(citiesRef, "BJ"), {
    name: "Beijing", state: null, country: "China",
    capital: true, population: 21500000,
    regions: ["jingjinji", "hebei"] });


import { getDoc } from "firebase/firestore";

const docRef = doc(db, "cities", "SF");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
} else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
}