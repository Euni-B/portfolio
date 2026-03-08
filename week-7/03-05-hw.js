let color = purple;
color = document.getElementById("colorInput").value;



function sayHello() {
    const name = document.getElementById("nameInput").value;
    alert("Hello " + name + "!!!");
}

function showColor() {
    console.log("color");
    alert("Your favorite color is " + color);
}