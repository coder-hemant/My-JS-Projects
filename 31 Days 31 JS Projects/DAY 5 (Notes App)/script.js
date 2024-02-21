let createNote = document.querySelector(".create");
let deleteNote = document.querySelector(".delete");
let main = document.querySelector(".main");
let notes = document.querySelector(".note");
let textarea = document.querySelectorAll("textarea");

createNote.addEventListener("click", function() {
  createN();
  console.log("hello");
})
// deleteNote.addEventListener("click", function() {
//     let notes = document.querySelectorAll(".note");
//     notes.forEach(n => {
//       n.remove();
//     })
//   })

textarea.forEach(area => {
  area.addEventListener("focusout", function() {
    saveN();
  })
})

function createN(text) {
  let newN = document.createElement("div");
  newN.classList.add("note");

  let note = document.createElement("textarea");
  note.textContent = text;

  note.addEventListener("focusout", function() {
    saveN();
  })
  
  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete")
  
  deleteBtn.innerText = "Delete";
  
  deleteBtn.addEventListener("click", function() {
    newN.remove();
    saveN();
  })

  let saveBtn = document.createElement("button");
  saveBtn.classList.add("save");
  saveBtn.innerText = "Save";

  saveBtn.addEventListener("click", function() {
    saveN();
  })
  
  newN.append(note, deleteBtn, saveBtn)
  main.append(newN);
  
  saveN();
}

function saveN() {
  let textareas = document.querySelectorAll("textarea");
  let noteData = [];
  textareas.forEach(textarea => {
    noteData.push(textarea.value);
  })

  if(noteData.length === 0){
    localStorage.removeItem("textareas");
  }else{
  localStorage.setItem("textareas", JSON.stringify(noteData))
  }
}


(function() {
  let lsNotes = JSON.parse(localStorage.getItem("textareas"));
  if(lsNotes ==  "" || lsNotes === null) {
    return;
  }

  lsNotes.forEach(lsNote => {
      createN(lsNote);
    })
  }
)();
  
  // createN("munna");
