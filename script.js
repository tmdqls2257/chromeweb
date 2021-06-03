const title = document.querySelector("#title");
title.innerHTML = "Hello World!";
title.style.color = "red";
document.title = "I own you now";

function handleclick(){
  title.style.color = "white";
}

title.addEventListener("click", handleclick);