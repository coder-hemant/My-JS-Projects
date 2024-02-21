let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "1234567890";
let symbolSet = "(){}[]<>?,./;'#:@~+*-£$%^&*!¬";

let upperCase = document.getElementById("check1");
let lowerCase = document.getElementById("check2");
let numbers = document.getElementById("check3");
let symbols = document.getElementById("check4");

let generate = document.querySelector(".gen")
let passBox = document.querySelector(".pass")
let totalChar = document.getElementById("char");

document.getElementById('char').addEventListener('input', function () {
  if (this.value > 15) {
    this.value = 15;
  }
});

const getPass = (data) => {
  return data[Math.floor(Math.random() * data.length)];
}

const setPass = (password = "") => {
  if(upperCase.checked) {
    password += getPass(upperSet);
  }
  if(lowerCase.checked) {
    password += getPass(lowerSet);
  }
  if(numbers.checked) {
    password += getPass(numberSet);
  }
  if(symbols.checked) {
    password += getPass(symbolSet);
  }

  if(password.length < totalChar.value) {
    return setPass(password)
  }
  passBox.innerText = trimStr(password, totalChar);

}

function trimStr(pa, ch) {
  if(pa.length > ch.value) {
    let subPa = pa.substring(0, ch.value);
    return subPa;
  }else{
    return pa;
  }
}

generate.addEventListener("click", function() {
  setPass();
})

