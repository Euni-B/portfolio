// let age = 17;

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   console.log("You are a minor.");
// }

// let testPassword = prompt("Enter your password"); 
// const databasePassword ="abc123";

// if (testPassword === "databasePassword"){

// } else {
const USER_PASSWORD = "abc123"
const passwordInput = document.getElementById("password-input");
const errorMessage = document.getElementById("error");
const button = document.getElementById("checkBtn");

function loginHandler() {
    console.log(passwordInput.value);
    if (passwordInput.value == USER_PASSWORD) {

        errorMessage.textContent = "Correct password!";
        errorMessage.style.color = "green";
    } else {

        errorMessage.textContent = "Wrong password. Try again.";
        errorMessage.style.color = "red";

        button.classList.add("shake");

        setTimeout(() => {
      button.classList.remove("shake");
    }, 300);
    }
}



