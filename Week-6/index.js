

function loginHandler(){

 const nameInput= document.getElementById("name-input")
const emailInput=document.getElementById("email-input")
 console.log("Your name is" + nameInput.value);
 console.log( "Your email is" + emailInput.value )
}


const changeText=document.getElementById("change-text") 
function changeText(){
    document.getElementById("change-text").textContent = "Bye!";
}
function changeText(){
    document.getElementById("change-text").style.color="red";
}



