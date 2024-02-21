const number = document.querySelector(".text");
let counter = 1

function increase() {
  setInterval(() => {
    if(counter == 65) {
      clearInterval;
    }else {
      counter++;
      number.textContent = counter + "%";
    }

  }, 30);
} 

increase();