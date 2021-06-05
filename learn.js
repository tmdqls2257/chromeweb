const title = document.querySelector("#title");
title.innerHTML = "Hello World!";
title.style.color = "red";
document.title = "I own you now";

const BASE_COLOR ="rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleclick(){
  const
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

function handleClick(){
  const hasClass = title.classList.contains(CLICKED_CLASS);
  const currentClass = title.className;
  if(!hasClass){
    title.classList.add(CLICKED_CLASS);
  } else{
    title.classList.remove(CLICKED_CLASS);
  }
}