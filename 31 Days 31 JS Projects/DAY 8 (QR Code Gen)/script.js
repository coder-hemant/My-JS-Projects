let qrApi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

let input = document.querySelector("input");
let qr = document.querySelector(".qr");
let gen = document.querySelector("button");

gen.addEventListener("click", function() {
  if (input.value == "") {
    qr.innerHTML = "Please enter a text or URL.";
    qr.style.color = "red";
    qr.style.display = "block";
  }else{
    qr.innerHTML = `<img>`
    qr.style.display = "block";
  showQr();
  }
})
function showQr() {
  let img = document.querySelector("img");
  img.src = `${qrApi} + ${input.value}`
}