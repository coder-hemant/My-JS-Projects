


const nameDiv = document.querySelector(".first");
const emailDiv = document.querySelector(".second");
const telDiv = document.querySelector(".third");
const mesDiv = document.querySelector(".last");
const subDiv = document.querySelector(".div");

function validateName() {
  const username = document.getElementById("myName").value;
  if(username.length == 0) {
    nameDiv.innerHTML = "Username must not be empty."
    return false;
  }
  if(!username.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
    nameDiv.innerHTML = "Please write full name."
    return false;
  }else{
    nameDiv.innerHTML = "Valid"
    return true;
  }
  
}
function validateEmail() {
  const email = document.getElementById("myEmail").value;
  if(email.length == 0) {
    emailDiv.innerHTML = "Email must not be empty."
    return false;
  }
  // if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    if(!email.match(/^\S+@\S+\.\S+$/)) {
      emailDiv.innerHTML = "Email must contain @"
      return false;
    }else{
      emailDiv.innerHTML = "Valid"
      return true;
    }
    
  }
function validateTel() {
  const telephone = document.getElementById("myTel").value;
  console.log(typeof telephone);
  if(telephone.length == 0) {
    telDiv.innerHTML = "Enter you tel no."
    return false;
  }
  else if(telephone.match(/^[0-9]*$/) && telephone.length !== 10) {
    telDiv.innerHTML = "Telephone must contain 10 numbers"
    return false;
    // return;
  }
  else if(!telephone.match(/^[0-9]{10}$/)) {
    telDiv.innerHTML = "Digits only"
    return false;
  }
  else{
    telDiv.innerHTML = "Valid"
    return true;
  }
}
function validateMes() {
  const message = document.getElementById("myMes").value;
  let required = 30;
  let left = required - message.length;
  console.log(left);
  if(left > 0) {
    mesDiv.innerHTML = left + " characters left."
    return false;
  }
  else if(message.length >= required) {
    mesDiv.innerHTML = "Valid"
    return true;
  }
  else{
    mesDiv.innerHTML = "Valid"
    return true;
  }
}

const form = document.getElementById("myForm")


form.addEventListener("submit", function(e) {
  e.preventDefault();
  if(!validateName || !validateEmail || !validateTel || validateMes) {
    subDiv.innerHTML = "Please fix the error."
    return false;
  }else{
    return true;
  }
})