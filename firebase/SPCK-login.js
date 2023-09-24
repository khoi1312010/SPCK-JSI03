import { auth } from "./config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";


const username = document.getElementById("username");
const pass = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

const HandleLogin = () => {
  const email = username.value;
  const password = pass.value;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
        alert(user.email)
        window.location = './SPCK.html'
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode)
    });
};

loginBtn.addEventListener("click", HandleLogin);