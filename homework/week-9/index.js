function handleSubmit(event) {
    event.preventDefault();

    const email = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const message = document.getElementById("errorMessage");

    // reset message
    message.textContent = "";
    message.className = "";

    // check empty fields
    if (email === "" || password === "") {
        message.textContent = "Please fill in all fields";
        message.className = "error";
        return;
    }

    // ✅ SUCCESS
    message.textContent = "Success!";
    message.className = "success";

    console.log("Email:", email);
    console.log("Password:", password);

    document.getElementById("loginForm").reset();

    // go to next page
   window.location.href = "dashboard.html?username=" + email;
}