// CODE FOR INDEX 

function handleSubmit(event) {

    event.preventDefault();

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim(); 
    const confirmPassword = document.getElementById("confirmPassword").value.trim();
    const error = document.getElementById("errorMessage");

    // Reset class
    error.className = "";

// check for text in input field 
    if (email === "" || password === "" || confirmPassword === "") {
        error.textContent = "Please fill in all fields";
        error.className = "error";
        return;
    }

    // email rules 
    if (email.length < 4 || email.length > 20) {
        error.textContent = "Email must be 4–20 characters";
        error.className = "error";
        return;
    }

    if (!email.includes("@") || !email.includes(".com")) {
        error.textContent = "Email must include @ and .com";
        error.className = "error";
        return;
    }

    // password rules 
    if (password.length > 8) {
        error.textContent = "Password must be less than 8 characters";
        error.className = "error";
        return;
    }

    if (password !== confirmPassword) {
        error.textContent = "Passwords do not match";
        error.className = "error";
        return;
    }

    // ✅ SUCCESS
    error.textContent = "Success!";
    error.className = "success";

    document.getElementById("loginForm").reset();

    window.location.href = "profile.html?email=" + email;
}

// CODE FOR PROFILE 

// if were on home screen 
// get the variable(parameter) from URL 
// display it on our page 
