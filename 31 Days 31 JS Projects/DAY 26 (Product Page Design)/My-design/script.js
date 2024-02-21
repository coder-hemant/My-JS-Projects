let showpic1 = document.getElementById("showpic1");
let showpic2 = document.getElementById("showpic2");
let showpic3 = document.getElementById("showpic3");
let showpic4 = document.getElementById("showpic4");
let showpic5 = document.getElementById("showpic5");

let pic1 = document.getElementById("pic1");
let pic2 = document.getElementById("pic2");
let pic3 = document.getElementById("pic3");
let pic4 = document.getElementById("pic4");
let pic5 = document.getElementById("pic5");


let colorBorder = document.querySelectorAll(".proColor");
let size = document.querySelectorAll(".size span");

let quantity = document.querySelector(".qty");


// colorBorder.forEach(color => {

//   color.addEventListener("click", function() {
//     color.classList.toggle("border");
//   })
  
//   colorBorder.forEach(other => {
//     other.addEventListener("click", function() {
//     color.classList.remove("border");
//     // color.classList.remove("border");
//   })
// })

// })

let lastClicked = null;

colorBorder.forEach(color => {
  color.addEventListener("click", function() {
    if (lastClicked) {
      lastClicked.classList.remove("border");
    }
    color.classList.add("border");
    lastClicked = color;
  });
});

let lastSize = null;

size.forEach(s => {
  s.addEventListener("click", function() {
  if(lastSize) {
    lastSize.classList.remove("colored");
  }
    s.classList.add("colored");
    lastSize = s;
  
})
})

showpic1.addEventListener("click", function() {
  pic1.style.zIndex = 100;
  pic2.style.zIndex = 0;
  pic3.style.zIndex = 0;
  pic4.style.zIndex = 0;
  pic5.style.zIndex = 0;
})
showpic2.addEventListener("click", function() {
  pic1.style.zIndex = 0;
  pic2.style.zIndex = 100;
  pic3.style.zIndex = 0;
  pic4.style.zIndex = 0;
  pic5.style.zIndex = 0;
})
showpic3.addEventListener("click", function() {
  pic1.style.zIndex = 0;
  pic2.style.zIndex = 0;
  pic3.style.zIndex = 100;
  pic4.style.zIndex = 0;
  pic5.style.zIndex = 0;
})
showpic4.addEventListener("click", function() {
  pic1.style.zIndex = 0;
  pic2.style.zIndex = 0;
  pic3.style.zIndex = 0;
  pic4.style.zIndex = 100;
  pic5.style.zIndex = 0;
})
showpic5.addEventListener("click", function() {
  pic1.style.zIndex = 0;
  pic2.style.zIndex = 0;
  pic3.style.zIndex = 0;
  pic4.style.zIndex = 0;
  pic5.style.zIndex = 100;
})





quantity.addEventListener("keyup", function() {
  if(quantity.value > 20) {
    quantity.value = 20;
  }
})