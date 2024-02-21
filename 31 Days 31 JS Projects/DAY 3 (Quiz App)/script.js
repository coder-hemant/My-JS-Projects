let data = [{
  "Q": "Inside which HTML element do we put the JavaScript?",
  "a": '<html>'   ,
  "b":  '<script>'  ,
  "c":   '<javascript>' ,
  "d":    '<style>',
  "correct":  "b"
},
{
  "Q": "Where is the correct place to insert a JavaScript?",
  "a": "The <body> section"   ,
  "b":  "The <footer> section"  ,
  "c":    "The <head> section",
  "d":   "Both a and c" ,
  "correct":  "d"
},
{
  "Q": `What is the correct syntax for referring to an external script called "xxx.js"?`,
  "a": `<script name="xxx.js">`  ,
  "b":  `<script src="xxx.js">`  ,
  "c":   `<script href="xxx.js">` ,
  "d":    "Both b and c",
  "correct":  "b"
},
{
  "Q": `How do you write "Hello World" in an alert box?`,
  "a": `alert("Hello World")`   ,
  "b":  `msgBox("Hello World")`     ,
  "c":   `alertBox("Hello World")`    ,
  "d":    `msg("Hello World")`   ,
  "correct":  "a"
},
{
  "Q": "How do you create a function in JavaScript?",
  "a": "function: myFunction()"   ,
  "b":  "function = myFunction()"  ,
  "c":   "function myFunction()" ,
  "d":    "function()",
  "correct":  "c"
},
{
  "Q": `How do you call a function named "myFunction"?`,
  "a": "call function myFunction()"   ,
  "b":  "call myFunction()"  ,
  "c":   "myFunction()" ,
  "d":    "Both a and b",
  "correct":  "c"
},
{
  "Q": "How to write an IF statement in JavaScript?",
  "a": "if i = 5"   ,
  "b":   "if(i == 5)" ,
  "c":  "if i == 5 then"  ,
  "d":    "if i = 5 then",
  "correct":  "b"
},
{
  "Q": `How to write an IF statement for executing some code if "i" is NOT equal to 5?`,
  "a": "if(i <> 5)"   ,
  "b":    "if i <> 5",
  "c":   "if i != 5 then" ,
  "d":  "if(i != 5)"  ,
  "correct":  "d"
},
{
  "Q": "How does a WHILE loop start?",
  "a": "while(i <= 10; i++)"   ,
  "b":  "while(i <= 10)"  ,
  "c":   "while i = 1 to 10" ,
  "d":    "None of the above",
  "correct":  "b"
},
{
  "Q": "How does a FOR loop start?",
  "a": "for(i <= 5; i++)"   ,
  "b":  "for(i = 0; i <= 5)"  ,
  "c":   "for(i = 0; i <= 5, i++)" ,
  "d":    "for i = 1 to 5 ",
  "correct":  "c"
}
];


// const quizLoad = document.querySelector(".qna");
const qna = document.querySelector(".qna");
const next = document.querySelector(".next");
const button = document.querySelector(".button")
let index = 0;
let correct = 0;
let incorrect = 0;


function startQuiz() {
  qna.innerHTML = `
    <h3>${index + 1}. ${data[index].Q}</h3>
    <button class="options"></button>
    <button class="options"></button>
    <button class="options"></button>
    <button class="options"></button>
  `

  let options = document.querySelectorAll(".options");
  options[0].innerText = data[index].a
  options[1].innerText = data[index].b
  options[2].innerText = data[index].c
  options[3].innerText = data[index].d

  
  options.forEach(option => {
    let currentIndex = index;
    // option.disabled = true;
    option.addEventListener("click", 
  function() {
    if(option.innerText == data[currentIndex][data[currentIndex].correct]) {
      option.style.backgroundColor = "lightgreen";
      button.style.display = "block";
      correct++
    }
    else {
      option.style.backgroundColor = "pink";
      button.style.display = "block";
      incorrect++
    }
    options.forEach(otherOption => {
      if(otherOption.innerText == data[currentIndex][data[currentIndex].correct]) {
        otherOption.style.backgroundColor = "lightgreen";
      }
      otherOption.disabled = true;
      otherOption.style.cursor = "not-allowed"
    })
    console.log(option.innerText == data[currentIndex][data[currentIndex].correct])
  })
}
)
}

next.addEventListener ("click",
function() {
  button.style.display = "none"
  if(index == data.length - 1) {
    if(correct > 7){
    qna.innerHTML = `Congratulations, Your Score is ${correct}/${data.length}.`
    }else if(correct >= 5 && correct < 8) {
    qna.innerHTML = `Your Score is ${correct}/${data.length}. Keep it Up.`
    }else if(correct >= 3 && correct < 5) {
    qna.innerHTML = `Your Score is ${correct}/${data.length}. You can do better.`
    }else {
    qna.innerHTML = `Your Score is ${correct}/${data.length}. You are a fucking disappointment.`
    }
  }else{
    index++;
    startQuiz();
  }
})

startQuiz();


// let loadQuiz = () => {
//   for (let index = 0; index < data.length; index++) {
  
//   quizLoad.innerHTML = `
//   <h3>${index + 1} ${data[index.Q]}</h3>
//   <div class="options">${data[index.a]}</div>
//   <div class="options">${data[index.b]}</div>
//   <div class="options">${data[index.c]}</div>
//   <div class="options">${data[index.d]}</div>
//   `
// }
// }

// loadQuiz();