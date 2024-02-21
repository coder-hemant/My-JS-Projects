const item = document.querySelector("#item");
const toDoList = document.querySelector("#to-do-list");

item.addEventListener("keyup",
  function addItem(event) {
    if(event.key == "Enter"){
      addToDo(this.value);
      this.value = ""
    }
  }
)

function addToDo(item) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `
              ${item}
  <i class="fa-sharp fa-solid fa-xmark"></i>
  `

  listItem.addEventListener("click",
  function() {
    this.classList.toggle("done")
  }
  );

  listItem.querySelector("i").addEventListener("click",
  function() {
    listItem.remove();
  }
  )

  toDoList.appendChild(listItem);
}


