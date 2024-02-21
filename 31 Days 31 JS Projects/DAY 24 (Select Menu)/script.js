let drop = document.querySelector("#drop");
let list = document.querySelector("ul");

let selectItem = document.querySelectorAll(".option");
let selectedItem = document.querySelector(".selected");
let field = document.querySelector(".selectField p");

drop.addEventListener("click", function() {
  main();
})
field.addEventListener("click", function() {
  main();
  })

function main() {
  if(drop.classList.contains("enabled")) {
    drop.classList.replace("enabled", "disabled");
    list.style.visibility = "hidden";
  }else if(drop.classList.contains("disabled")) {
    drop.classList.replace("disabled", "enabled");
    list.style.visibility = "visible";
  }else {
    drop.classList.add("enabled");
    list.style.visibility = "visible";
}
}



selectItem.forEach(item => {
  item.addEventListener("click", function() {
    selectedItem.textContent = item.textContent;
    selectedItem.style.color = "black"
    drop.classList.replace("enabled", "disabled");
    list.style.visibility = "hidden";
  })
})