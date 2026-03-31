function updateInfo() {
    const bioElement = document.getElementById("bio");

    
    bioElement.textContent = "I love coding now!";
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}