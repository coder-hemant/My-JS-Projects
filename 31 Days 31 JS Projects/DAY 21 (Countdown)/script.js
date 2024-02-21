const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");


function setting() {
  let today = new Date()/1000;
  let endDate = new Date("12-15-2024")/1000;
 
  let diff = endDate - today;
 

  if(Math.floor(diff/60/60/24) < 10) {
    days.innerHTML = "0" + Math.floor(diff/60/60/24);
  }else {
    days.innerHTML = Math.floor(diff/60/60/24);
  }

  if(Math.floor((diff/60/60)%24) < 10) {
    hours.innerHTML = "0" + Math.floor((diff/60/60)%24);
  }else {
    hours.innerHTML = Math.floor((diff/60/60)%24);
  }
  if(Math.floor((diff/60)%60) < 10) {
    minutes.innerHTML = "0" + Math.floor((diff/60)%60);
  }else {
    minutes.innerHTML = Math.floor((diff/60)%60);
  }
  if(Math.floor((diff%60)) < 10) {
    seconds.innerHTML = "0" + Math.floor((diff%60));
  }else {
    seconds.innerHTML = Math.floor((diff%60));
  }
}

setInterval(() => {
  setting()
}, 1000);