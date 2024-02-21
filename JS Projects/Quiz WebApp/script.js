const quizData = [{
  'question': "Which of the following is a client site language?",
  'a': "Java",
  'b': "C",
  'c': "Python",
  'd': "JavaScript",
  'correct': "d",
},
{
  'question': "What does HTML stand for?",
  'a': "Hypertext Markup Language",
  'b': "Cascading Style Sheet",
  'c': "Jason Object Notation",
  'd': "Helicopters Terminals Motorboats Lamborginis",
  'correct': "a",
},
{
  'question': "What year was JavaScript launched?",
  'a': "1996",
  'b': "1995",
  'c': "1994",
  'd': "none of the above",
  'correct': "b",
},
{
  'question': "What does CSS stands for?",
  'a': "Hypertext Markup Language",
  'b': "Cascading Style Sheet",
  'c': "Jason Object Notation",
  'd': "Helicopters Terminals Motorboats Lamborginis",
  'correct': "b",
}
];


let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;

const quesBox = document.getElementById("que");
const optBox = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
  if(index === total) {
    return quizEnd();
  }
  reset();
  const data = quizData[index];
  quesBox.innerHTML = data.question;
  optBox[0].nextElementSibling.innerText = data.a;
  optBox[1].nextElementSibling.innerText = data.b;
  optBox[2].nextElementSibling.innerText = data.c;
  optBox[3].nextElementSibling.innerText = data.d;
}

document.getElementById("btn").addEventListener("click", 
  function subFunc() {
  const data = quizData[index];
  const ans = getAnswer();
  if(ans == data.correct) {
    correct++;
  }
  else{
    incorrect++;
  }
  index++;
  loadQuestion();
}

)    
function getAnswer() {
  let ans;
  optBox.forEach(el => {
    if(el.checked) {
      ans = el.value;
    }
  })
  return ans;
}


function reset() {
  optBox.forEach(el => {
    el.checked = false;
  })
}

function quizEnd() {
  document.getElementById("container").innerHTML = `<h3>Your score is ${correct}/${total}</h3>`;
}

loadQuestion();

