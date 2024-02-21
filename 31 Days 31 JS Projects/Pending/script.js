const body = document.body;
body.style.backgroundColor = `rgb(${(Math.random()) * 255}, ${(Math.random()) * 255}, ${(Math.random()) * 255})`
body.style.color = "black"

const divBtn = document.querySelector(".divBtn");
const button = document.querySelector(".btn");
const div = document.querySelector(".main")

// divBtn.style.backgroundColor = body.style.backgroundColor;


// divBtn.style.backgroundColor = ""

button.addEventListener("click",
function() {
  div.style.width = "400px"
  div.style.height = "300px"
  div.autofocus = "true"
  div.style.padding = "15px"
  divBtn.style.display = "block"
  divBtn.style.width = "fit-content"
  divBtn.style.height = "fit-content"
  divBtn.style.fontSize = "16px"
})
divBtn.addEventListener("click",
function() {
  // div.style.display = "none"
  div.style.width = "0"
  div.style.height = "0"
  divBtn.style.fontSize = "0"
})

