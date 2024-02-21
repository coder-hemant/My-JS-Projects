let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");


setInterval(() => {
  let time = new Date();
  hour.innerHTML = time.getHours();
  minute.innerHTML = time.getMinutes();

  if(time.getSeconds < 10) {
    second.innerHTML = "0" + time.getSeconds();
    
  }
  second.innerHTML = time.getSeconds();
}, 1000);