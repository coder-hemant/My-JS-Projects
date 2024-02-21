let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function checkPass() {
  const input = document.querySelector("input");
  const span = document.querySelector("span");

  if(input.value.length == 0) {
    span.style.display = "none";
  }
  else if(input.value.length < 4) {
    span.innerText = "The password is weak."
    span.style.display = "block";
  }
  else if(input.value.length > 4 && input.value.length < 8) {
    span.innerText = "The password is medium."
    span.style.display = "block";
  }
  else if(input.value.length > 8){
    span.innerText = "The password is strong."
    span.style.display = "block";
  }
}