const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);//CLICKED_CLASS를 체크해주고 있으면 지워주고 없으면 만들어줌
}

function init(){
  title.addEventListener("click", handleClick);
}

init();

