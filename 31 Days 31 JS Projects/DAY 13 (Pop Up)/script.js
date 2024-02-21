const click = document.querySelector("#click");
const appear = document.querySelector(".appear");
const reset = document.querySelector("#reset");

click.addEventListener("click", function() {
  appear.style.transition = "0.2s"
  appear.style.transform = "scale(1) translateY(0)";
})


reset.addEventListener("click", function() {
  appear.style.transition = "0s"
  appear.style.transform = "scale(0) translateY(-1000px) ";
})