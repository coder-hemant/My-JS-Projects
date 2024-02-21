let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".seconds");
let ms = document.querySelector(".ms");

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let pause = document.querySelector(".fa-pause");

let mss = 0;
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer = 0;


pause.addEventListener("click", function() {
  stopwatch();
})


function startStop() {
  
  mss++;
  if(mss == 100) {
    mss = 0;
    seconds++;
    if(seconds == 10) {
      seconds = 0;
      minutes++
      if(minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
  }
  
  if(hours < 10) {
    hour.innerHTML = `0${hours}`
  }else {
    
    hour.innerHTML = `${hours}`
  }
  if(minutes < 10) {
    minute.innerHTML = `0${minutes}`
  }else {
  minute.innerHTML = `${minutes}`

  }
  if(seconds < 10) {
    second.innerHTML = `0${seconds}`
  }else {
  second.innerHTML = `${seconds}`

  }
  if(mss < 10) {
    ms.innerHTML = `0${mss}`
  }else {
    ms.innerHTML = `${mss}`

  }
}

function buttons() {
  if(start.classList.contains("fa-play")) {
    start.classList.replace("fa-play", "fa-pause");
    
  }else {
    start.classList.replace("fa-pause", "fa-play");
    clearInterval(timer);
  }
}

function stopwatch() {
  if(timer !== null) {
    clearInterval(timer);
  }
  timer = setInterval(startStop, 10 );
  buttons();
}

function breakWatch() {
  start.classList.replace("fa-pause", "fa-play");
  clearInterval(timer);
}

function resetWatch() {
  start.classList.replace("fa-pause", "fa-play");
  clearInterval(timer);
  hours = 0
  minutes = 0
  seconds = 0
  mss = 0
  hour.textContent = "00";
  minute.textContent = "00";
  second.textContent = "00";
  ms.textContent = "00";
}