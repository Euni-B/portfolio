const name = "Eunice";
let age = 36;
age = 22;
const favFoods = ["sushi", "pho", "cheeses", "wines", "sourdough"];

console.log("My name is " + name + " and I am " + age + " years old.");

function changeText() {
  document.getElementById("text").textContent = "Hello!";
};

console.log(favFoods[2]);

for (let i = 0; i < favFoods.length; i++) {
  console.log(favFoods[i]);
}