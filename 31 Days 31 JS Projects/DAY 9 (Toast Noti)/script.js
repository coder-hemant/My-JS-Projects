let notis = document.querySelector(".notis")

let success = document.querySelector(".success");
let error = document.querySelector(".error");
let invalid = document.querySelector(".invalid");

let sucBtn = document.querySelector(".sucBtn");
let errBtn = document.querySelector(".errBtn");
let invBtn = document.querySelector(".invBtn");



function getNoti() {
  
  
  
}
sucBtn.addEventListener("click", function() {  
  let success = document.createElement("div");
  success.classList.add("success");
  success.innerHTML = `Successfully submitted.`
  notis.append(success);
  
  success.style.transform = "translateX(0)";
  setTimeout(function () {
    success.remove();
  }, 2500);
})
  errBtn.addEventListener("click", function() {
    let error = document.createElement("div");
    error.classList.add("error");
    error.innerHTML = `Please fix the error!`
  error.style.transform = "translateX(0)";
  notis.append(error);
  setTimeout(function () {
    error.remove();
  }, 2500);
})
invBtn.addEventListener("click", function() {
  let invalid = document.createElement("div");
  invalid.classList.add("invalid");
  invalid.innerHTML = `Invalid input, check again.`
  invalid.style.transform = "translateX(0)";
  notis.append(invalid);
  setTimeout(function () {
    invalid.remove();
  }, 2500);
})

// getNoti();