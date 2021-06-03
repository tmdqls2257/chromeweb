const title = document.querySelector("#title");
title.innerHTML = "Hello World!";
title.style.color = "red";
document.title = "I own you now";

function handleclick(){
  title.style.color = "white";
}

title.addEventListener("click", handleclick);

const age = prompt("How old are you");

if (age >= 18 && age <= 21){
  console.log("you can drink");
} else if(age > 21){
  console.log("you cant");
} else{
  console.log('too young')
}