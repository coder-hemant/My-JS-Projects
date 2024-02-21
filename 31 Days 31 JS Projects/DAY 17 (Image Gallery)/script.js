const slides = document.querySelectorAll(".slide");
let counter = 0;


slides.forEach(
  (slide, index) => {
    slide.style.left = `${index * 100}%`;
  }
)

document.addEventListener("keyup", function(e) {
  if(e.key == "ArrowRight") {
    counter++;
    getSlide();
  }
  else if(e.key == "ArrowLeft") {
    counter--;
    getSlide();
  }
})



function getSlide() {
  if(counter < 0){
    counter = slides.length - 1;
  }
  else if(counter >= slides.length) {
    counter = 0;
  }
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${counter * 100}%)`
  })
}

