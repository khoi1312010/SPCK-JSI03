import { auth } from './config.js';
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js"

const usernameElm = document.getElementById('username');
const passwordElm = document.getElementById('password');
const emailElm = document.getElementById('email');
const loginBtn = document.getElementById('login-btn');

const handleRegister = () => {
    const username = usernameElm.value;
    const password = passwordElm.value;
    const email = emailElm.value;
    createUserWithEmailAndPassword(auth, username, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            window.location = './SPCK-login.html'
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorCode);
        });

}

loginBtn.addEventListener('click', handleRegister);