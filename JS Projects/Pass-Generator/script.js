let upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerSet = "abcdefghijklmnopqrstuvwxyz";
let numberSet = "1234567890";
let symbolSet = "/*-+/.,><?#'@~:;{}[]()&^%$£!\|"


let passBox = document.getElementById("pass-box");
let charac = document.getElementById("charac");
let upperCase = document.getElementById("uppercase");
let lowerCase = document.getElementById("lowercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");


function getpassword(dataSet) {
  return dataSet[Math.floor(Math.random() * dataSet.length)];
}

function setPassword(password = "") {
  if(upperCase.checked) {
    password += getpassword(upperSet);
  }
  if(lowerCase.checked) {
    password += getpassword(lowerSet);
  }
  if(numbers.checked) {
    password += getpassword(numberSet);
  }
  if(symbols.checked) {
    password += getpassword(symbolSet);
  }
  if(password.length < charac.value) {
    return setPassword(password); 
  }
  console.log(password);

  passBox.innerText = trimString(password, charac.value);
}

setPassword();

document.getElementById("btn").addEventListener("click", 
function() {
  setPassword();
});

function trimString(str, num) {
  if(str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  }
  else{
    return str;
  }
}

