const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

  function loadName(){
    const currentUser = localStorage.getItem();
  }

  function paintGreetings(text){
    form.classList.remove(SHOWING_CN);
    greeting.classlist.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
  }


  function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){

    }else{
      paintGreetings(currentUser);
    }
  }
  function init() {
    loadName();
  }

  init();