// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-analytics.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

    apiKey: "AIzaSyB3dEt6e7BYxU9zV85gQj-tAayKEKYVM7Y",

    authDomain: "illingsworthdev.firebaseapp.com",

    projectId: "illingsworthdev",

    storageBucket: "illingsworthdev.firebasestorage.app",

    messagingSenderId: "424237976531",

    appId: "1:424237976531:web:457888ca83376310e27d26",

    measurementId: "G-VLFR00ZM17"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = getAuth(app)
