const slides = document.querySelectorAll(".image");
const previous = document.querySelector("#prev");
const next = document.querySelector("#next");
var counter = 0;

slides.forEach(
  (slide, index) => {
    slide.style.left = `${index * 100}%`;
  }
)

document.addEventListener("keyup",
function(event) {
  if(event.key == "ArrowLeft") {
    counter--
    getSlide();
  }else if(event.key == "ArrowRight") {
    counter++
    getSlide();
  }
  console.log(event.key);
  
})





previous.addEventListener("click",
function() {
  counter--
  getSlide();
})


next.addEventListener("click",
function() {
  counter++
  getSlide();
})

const getSlide = () => {
  if (counter < 0) {
    counter = slides.length - 1; // If counter is less than 0, set it to the last slide
  } else if (counter >= slides.length) {
    counter = 0; // If counter is greater than or equal to the number of slides, set it to the first slide
  }

  slides.forEach(
    (slide) => {
      slide.style.transform = `translateX(-${counter * 100}%)`;
    }
  )
}