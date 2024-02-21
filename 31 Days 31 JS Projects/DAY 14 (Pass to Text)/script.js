const show = document.querySelector(".show");
const input = document.querySelector("input");
const hide = document.querySelector(".hide");


show.addEventListener("click", function() {
  if(show.classList.contains("button")) {
    input.type = "text";
    show.classList.remove("button");
  }else {
    input.type = "password";
    show.classList.add("button");
  }
})