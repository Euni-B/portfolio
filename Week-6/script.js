console.log("js connected")

function loginHandler(){

 const nameInput= document.getElementById("name-input");
const emailInput=document.getElementById("email-input");
 console.log("Your name is" + nameInput.value);
 console.log( "Your email is" + emailInput.value );
}


const changeText=document.getElementById("change-text") 
function changeText(){
    document.getElementById("change-text").textContent = "Bye!";
}
function changeText(){
    document.getElementById("change-text").style.color="red";
}

function addTask() {
  const input= document.getElementById("task");
  const taskText = input.value.trim();

  if(taskText === "") return;

  const li = document.createElement("li");
  li.textContent = taskText;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

