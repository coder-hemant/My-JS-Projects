let lists = document.querySelectorAll("li");

let drag = document.querySelector(".drag");
let drop = document.querySelector(".drop");

lists.forEach(list => {
  list.addEventListener("dragstart", function(e) {
    let selected = e.target;

    drop.addEventListener("dragover", function(e) {
      e.preventDefault();
    })

    drop.addEventListener("drop", function() {
      drop.appendChild(selected);
      selected = null;
    })

    drag.addEventListener("dragover", function(e) {
      e.preventDefault();
    })

    drag.addEventListener("drop", function() {
      drag.appendChild(selected);
      selected = null;
    })
  })
})