// Import and configure Firebase
/*
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAruZcneydVD2msGOclPNzMVAYbtO6xeEg",
    authDomain: "nestiphy.firebaseapp.com",
    projectId: "nestiphy",
    storageBucket: "nestiphy.firebasestorage.app",
    messagingSenderId: "550246345184",
    appId: "1:550246345184:web:c93045fb2bd22231212385"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
*/

// Bypass authentication - no Firebase needed
// We'll directly redirect users to the dashboard

// Sign Up functionality
const signupButton = document.getElementById("submitSignUp");
if (signupButton) {
    signupButton.addEventListener("click", (e) => {
        e.preventDefault();
        const messageElement = document.getElementById("signUpMessage");
        
        // Automatically redirect to dashboard
        messageElement.innerText = "Account created successfully!";
        messageElement.className = "message success";
        messageElement.style.display = "block";
        
        // Redirect to dashboard directly
        setTimeout(() => {
            window.location.href = "market-dashboard.html";
        }, 1000);
    });
}

// Sign In functionality
const signinButton = document.getElementById("submitSignIn");
if (signinButton) {
    signinButton.addEventListener("click", (e) => {
        e.preventDefault();
        const messageElement = document.getElementById("signInMessage");
        
        // Automatically redirect to dashboard
        messageElement.innerText = "Signed in successfully!";
        messageElement.className = "message success";
        messageElement.style.display = "block";
        
        // Redirect to dashboard directly
        setTimeout(() => {
            window.location.href = "market-dashboard.html";
        }, 1000);
    });
}

// Sign Out functionality
const signOutButton = document.getElementById("signOutButton");
if (signOutButton) {
    signOutButton.addEventListener("click", () => {
        alert("Signed out successfully");
        window.location.href = "login.html";
    });
}

// Simulate authenticated state
document.addEventListener("DOMContentLoaded", function() {
    console.log("User is signed in automatically");
    // You can update UI elements here based on always-authenticated state
});