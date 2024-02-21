// let smain = document.querySelector(".smain");
// let img = document.querySelector(".img1");
// let mainImg = document.querySelector(".bg")

// mainImg.style.width = smain.offsetWidth + "px";

// var leftSpace = smain.offsetLeft;
// var rightSpace = smain.offsetParent.offsetWidth - (smain.offsetLeft + smain.offsetWidth);

// console.log(leftSpace);
// console.log(rightSpace);

// smain.onmousemove = function(e) {
//   var boxWidth = (e.pageX - leftSpace - rightSpace) + "px";
//   img.style.width = boxWidth;
//   console.log(boxWidth);
// }


let smain = document.querySelector(".smain");
let img = document.querySelector(".img1");
let mainImg = document.querySelector(".bg")

mainImg.style.width = smain.offsetWidth + "px";

var leftSpace = smain.offsetLeft;

console.log(leftSpace);

smain.onmousemove = function(e) {
  var boxWidth = (e.pageX - leftSpace) + "px";
  img.style.width = boxWidth;
  console.log(boxWidth);
  console.log(e.pageX);
}
