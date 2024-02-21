// const labels = document.querySelectorAll("label");
// const check = document.querySelectorAll("label i")

// labels.forEach(label => {
//   label.addEventListener("click",
//     function() {
//       check.style.fontSize = "12px";
//     }
//   )
// })
let index = 0;
const addTodo = document.querySelector(".add");
const todo = document.getElementById("todo");
const create = document.getElementById("todoBtn");
var textarea = document.querySelector('textarea');
const card = document.querySelector(".card");
const list = document.querySelector(".list")
const items = document.querySelectorAll(".item")
const labels = document.querySelectorAll(".list .item .label");
const checkboxes = document.querySelectorAll(".list .item .checks");

items.forEach(item => {
  item.addEventListener("click",
  function() {
    // items.forEach(item => {
    //   item.classList.toggle("item", "disable")  
    // });
    item.classList.toggle("disable");
  })
})



textarea.addEventListener("keyup",
function(event) {
  if(event.key == "Enter") {
    createToDo(textarea.value);
    textarea.value = ""; 
    todo.classList.replace("todone", "todo");
    create.classList.replace("todoneBtn", "todoBtn");
    textarea.classList.remove("textarea");
    card.style.minHeight = "";
    index++;
  }
})

addTodo.addEventListener("click",
function() {
  todo.classList.replace("todo", "todone");
  create.classList.replace("todoBtn", "todoneBtn");
  textarea.classList.add("textarea");
  card.style.minHeight = "300px"
})


create.addEventListener("click",
  function() {
    createToDo(textarea.value);
    textarea.value = ""; 
    todo.classList.replace("todone", "todo");
    create.classList.replace("todoneBtn", "todoBtn");
    textarea.classList.remove("textarea");
    card.style.minHeight = "";
    index++;
  }
)

function createToDo(item) {
  const listItem = document.createElement("div");

  listItem.classList.add("item");
  listItem.innerHTML = `
  <input type="checkbox" class="checks" id="checkbox${index + 1}">
  <label class="label" for="checkbox${index + 1}">
    <i class="fa-duotone fa-check"></i>
  </label>
  <span>${item}</span>
  `

  list.append(listItem);


  items.forEach(item => {
    item.addEventListener("click",
    function() {
      // items.forEach(item => {
      //   item.classList.toggle("item", "disable")  
      // });
      item.classList.replce("item", "disable");
    })
  })
  
}

var isFirstClick = true;

textarea.addEventListener('click', function() {
  if (isFirstClick) {
    textarea.setSelectionRange(0, 0);
    isFirstClick = false;
  }
});

textarea.addEventListener('blur', function() {
  isFirstClick = true;
});

console.log(textarea.value);
