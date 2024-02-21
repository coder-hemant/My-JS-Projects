const button = document.querySelector("button")
const pass = document.querySelector(".pass")

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "(){}[]<>?,./;'#:@~+*-£$%^&*!¬"



button.addEventListener("click", function() {
  
  
  createPassword();
})

function getPass(dataSet) {
  return dataSet[Math.floor(Math.random() * dataSet.length)]
}

function createPassword(password = "") {
  password += getPass(upperCase);
  password += getPass(lowerCase)
  password += getPass(numbers)
  password += getPass(symbols)
  
  if(password.length < 15) {
    return createPassword(password);
  }
  pass.innerText = trimStr(password, 12);
  console.log(password.length)

}

function trimStr(str, num) {
  if(str.length > num) {
    let subStr = str.substring(0, num);
    return subStr;
  }else{
    return str;
  }
}

console.log(upperCase[Math.floor(Math.random() * upperCase.length)] + lowerCase[Math.floor(Math.random() * lowerCase.length)] + numbers[Math.floor(Math.random() * numbers.length)] + symbols[Math.floor(Math.random() * symbols.length)]);

// console.log(password.length)