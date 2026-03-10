function sayHi() {
  alert("You hovered!!!");
}




function sayHello() {
  alert("You Clicked!");
}



// change style with js

function spinText() {
  const text = document.getElementById("title");

  text.classList.add("spin");

  setTimeout(function () {
    text.classList.remove("spin");
  }, 1000);
}
