import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.3.0/firebase-auth.js";
import { auth } from "./firebase.js";

import "./jquery.js"



$("#signin").on("click", () => {
    signInWithEmailAndPassword(auth, $("#email").val(), $("#password").val())
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            window.location.href = "../"
            // ...
        })
        .catch((e) => {
            console.error(e)
        })
})
