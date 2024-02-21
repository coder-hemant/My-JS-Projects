const create = document.querySelector(".create");
const createDiv = document.querySelector(".text");
const textarea = document.querySelector("textarea");
const divBtn = document.querySelector(".creator");
const todoList = document.querySelector(".todolist");
const labels = document.querySelectorAll(".label");



create.addEventListener("click",
function() {
  divBtn.innerHTML = "Create"
  createDiv.classList.replace("textarea", "textareaAf");
  textarea.classList.add("area");
  divBtn.classList.replace("button", "buttonAf");
  saveToDo();
})






function createToDo(text) {
  let editingSpan = null;

  const li = document.createElement("li");
  li.classList.add("item");

  const label = document.createElement("div");
  label.classList.add("todo", "label");
  label.innerHTML = '<i class="fa-duotone fa-check"></i>';
  label.style.fontSize = "0px"
  
  const span = document.createElement("span");
  
  const deleteTodo = document.createElement("div");
  deleteTodo.classList.add("delete");
  deleteTodo.innerHTML = `<i class="fa-solid fa-trash"></i>`;

  deleteTodo.addEventListener("click", function() {
    li.remove();
    saveToDo();
  })

  span.textContent = text;
  label.addEventListener("click", function() {
    li.classList.toggle("liAf")
    span.classList.toggle("span");
    if(label.style.fontSize == "0px") {
      label.style.fontSize = "16px"
    }else if(label.style.fontSize == "16px") {
      label.style.fontSize = "0px"
    }
    // label.classList.toggle("label");
  });

  span.addEventListener("click", function() {
    editingSpan = span;
    createDiv.classList.replace("textarea", "textareaAf");
    textarea.classList.add("area");
    divBtn.classList.replace("button", "buttonAf");
    textarea.value = span.innerHTML
    divBtn.innerHTML = "Save"
  })

  divBtn.addEventListener("click",
function() {
  if(divBtn.innerHTML == "Save" && editingSpan) {
    editingSpan.textContent = textarea.value;
    editingSpan = null; // reset editingSpan
    saveToDo();
    textarea.value = "";
    createDiv.classList.replace("textareaAf", "textarea");
    textarea.classList.remove("area");
    divBtn.classList.replace("buttonAf", "button");
    return;
  }
  if(textarea.value == "") {
    textarea.value = "";
    createDiv.classList.replace("textareaAf", "textarea");
    textarea.classList.remove("area");
    divBtn.classList.replace("buttonAf", "button");
    return;
  }
  
  if(divBtn.innerHTML == "Create"){
  createToDo(textarea.value);
  // saveToDo();
  textarea.value = "";
  createDiv.classList.replace("textareaAf", "textarea");
  textarea.classList.remove("area");
  divBtn.classList.replace("buttonAf", "button");
}
})


  li.append(label, span, deleteTodo);
  todoList.append(li);
  saveToDo();
}




function saveToDo() {
  let spans = document.querySelectorAll("span");
  let data = [];

  spans.forEach(span => {
    data.push(span.textContent);
  })

  if(data.length === 0){
    localStorage.removeItem("spans");
  }else{
  localStorage.setItem("spans", JSON.stringify(data))
  }
}





(function() {
  const lsToDos = JSON.parse(localStorage.getItem("spans"));

  if(lsToDos === null){
    return;
  }else if(lsToDos == "") {
    return;
  }
  lsToDos.forEach(lsToDo => {
    createToDo(lsToDo);
  })
})();