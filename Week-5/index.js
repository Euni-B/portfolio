console.log(145890 + 2312131);
console.log(145890 - 2312131);
console.log(145890 / 2312131);
console.log(145890 * 2312131);

let name = "Eunice";
let age = "36";
let food = "pho";

console.log("My name is" + name + "and I am" +
    age + "years old, and I love to eat" + food
    + "."
)

function sayHello() {
    console.log("hello");
    console.log("hello");
    console.log("hello");

}

sayHello();


function addNumbers(a, b) {
    console.log(a + b);
}

addNumbers(2222, 3);
addNumbers(11, 4);
addNumbers(6, 1);

function deleteNumbers(a, b) {
    console.log(a - b);
}

deleteNumbers(29 - 3);
deleteNumbers(11 - 4);
deleteNumbers(6 - 1);

function multiplyNumbers(a, b) {
    console.log(a * b)
}

multiplyNumbers(5, 8)
multiplyNumbers(9, 3)
multiplyNumbers(6, 8)

function divideNumbers(a, b) {
    console.log(a / b)
}

divideNumbers(84, 6)
divideNumbers(555, 111)
divideNumbers(723495, 33)

let favColor = "pink";
favColor = "blue";
console.log(favColor);
favColor = "green";
console.log(favColor);

// feb 19
let score = 10;
const color = "red"
console.log(score)
score = 20;
console.log(score)
console.log(color);

const myName= "Eunice"


function submitName() {
    alert(myName);
}



function submitEmail() {
    const myEmail = myName + ".com";
    alert(myEmail)
}


function favFood(name, food) {
    console.log(name + "'s favorite food is " + food + ".")
}

favFood("Eunice", "pho");