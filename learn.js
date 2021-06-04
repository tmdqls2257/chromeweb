const title = document.querySelector("#title");
title.innerHTML = "Hello World!";
title.style.color = "red";
document.title = "I own you now";

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handleClick(){
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR){
    title.style.color = OTHER_COLOR;
  }else{
    title.style.color = BASE_COLOR;
  }
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}

init();
title.addEventListener("click", handleClick);

function handleOffline(){
  console.log("lalalala");
}

function handleOnline(){
  console.log("Welcome back")
}

window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);