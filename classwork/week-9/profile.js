
// gets everything after ? 
const params = new URLSearchParams(window.location.search);

const email = params.get("email");


const message = document.getElementById("welcomeMessage");

if (email) {
    message.textContent = "Welcome, " + email;
}