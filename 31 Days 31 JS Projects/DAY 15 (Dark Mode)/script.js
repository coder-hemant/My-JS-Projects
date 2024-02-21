let light = document.querySelectorAll(".light");
let button = document.querySelector("button");

button.addEventListener("click", function() {
  light.forEach(el => {
    el.classList.toggle("dark")
  })
})