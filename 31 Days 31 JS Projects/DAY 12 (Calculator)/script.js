let buttons = document.querySelectorAll(".button");
let start = document.querySelector(".start");
let backS = document.querySelector(".backS");


let result = document.querySelector(".result");
let equals = document.querySelector(".equals");

// Define the operators
let operators = ['+', '-', '*', '/', '.'];

// // Define the appendOperator function
// function appendOperator(input, operator) {
//     // Get the last character of the input
//     let lastChar = input.slice(-1);

//     // Check if the last character is not an operator
//     if (!operators.includes(lastChar)) {
//         // Append the operator
//         input += operator;
//     }

//     return input;
// }

function appendOperator(input, operator) {
    // Get the last character of the input
    let lastChar = input.slice(-1);

    // Define the operators
    let operators = ['+', '-', '*', '/', '.'];

    // Check if the last character is not an operator
    if (!operators.includes(lastChar)) {
        // Append the operator
        input += operator;
    } else if (operator === '.' && !input.split(/[\+\-\*\/]/).pop().includes('.')) {
        // If the operator is a decimal point and the last number doesn't already contain a decimal point,
        // append the decimal point
        input += operator;
    }

    return input;
}

// buttons.forEach(button => {
//   button.addEventListener("click", function() {
//     result.append(button.textContent)
//   })
// })

buttons.forEach(button => {
  button.addEventListener("click", function() {
    // Check if the button is an operator
    if (operators.includes(button.textContent)) {
      // Use the appendOperator function to append the operator
      result.textContent = appendOperator(result.textContent, button.textContent);
    } else {
      // If the button is not an operator, append it normally
      result.textContent += button.textContent;
    }
  })
})

equals.addEventListener("click", function() {
  let lastChar = result.textContent.slice(-1);
  console.log(lastChar);
  if(lastChar ==  "*" || lastChar == "/" || lastChar ==  "+" || lastChar ==  "-" || lastChar == ".") {
    result.textContent = "Syntax error";
  }
  else{
    let resulty = eval(result.textContent);
  // let resStr = resulty.toString();
    result.textContent = resulty.toFixed(2);
  }
})

start.addEventListener("click", function() {
  result.textContent = "";
})
backS.addEventListener("click", function() {
  if(result.textContent == "Syntax error") {
    result.textContent = "";
  }else{
  result.textContent = result.textContent.toString().slice(0, -1);
  }
})