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



const food1 = "apple";
const food2 = "pear";
const food3 = "grapes";

const food4 = "water";

let fruits = ["apple","pear","grapes","kiwi"];

console.log(fruits[1]);

fruits[1]="orange";
console.log(fruits[2]);

console.log(fruits);
fruits.push("banana");
fruits[2]="mango";

const list = document.getElementById("fruitList");

for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement("li");
  li.textContent = fruits[i];
  list.appendChild(li);
}

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3])
// console.log(fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

const input = document.getElementById("fruitInput");
const addButton = document.getElementById("addFruitBtn");
const fruitList = document.getElementById("fruitList");


addButton.addEventListener("click", function () {
  const fruitValue = input.value;

 if (fruitValue !== "") {
    const li = document.createElement("li");
    li.textContent = fruitValue;
    list.appendChild(li);

    input.value = ""; // clear input
  }
  const li = document.createElement("li");
li.textContent = input.value;

const deleteBtn = document.createElement("button");
deleteBtn.textContent = "Delete";

deleteBtn.onclick = function () {
  li.remove();
};

li.appendChild(deleteBtn);
list.appendChild(li);
});










