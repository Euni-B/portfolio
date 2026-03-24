// login/welcome message 
function handleSubmit(event) {
    event.preventDefault();

    const inputName = document.getElementById("username").value.trim();
    const inputPass = document.getElementById("password").value.trim();

    const message = document.getElementById("loginMessage");



    // local storage get information from browser 
    const savedName = localStorage.getItem("localStorageName");
    const savedPass = localStorage.getItem("localStoragePass");




    // check login
    if (inputName === savedName && inputPass === savedPass) {
        message.textContent = "Welcome, " + inputName;
        message.className = "success";

        // ✅ save login state
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("currentUser", inputName);

    } else {
        message.textContent = "Invalid login";
        message.className = "error";
    }

}


    // check page load 

    

    window.onload = function () {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        const user = localStorage.getItem("currentUser");
        const message = document.getElementById("loginMessage");

        if (isLoggedIn === "true" && user && message ) {
            message.textContent = "Welcome back, " + user;
            message.className = "success";
        }
    }

    // logout button 

    function logout() {
        localStorage.removeItem("isLoggedIn");
        localStorage.removeItem("currentUser");
        location.reload();
    }

