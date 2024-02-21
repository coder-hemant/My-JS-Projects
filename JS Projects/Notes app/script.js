
let main = document.querySelector(".main");

document.getElementById("btn").addEventListener("click", 
function() {
  addNote();
}
)

function saveNotes() {
  let notes = document.querySelectorAll(".note textarea");
  // console.log(notes);
  let data = [];

      // for each note, push the value inside textarea into data
  notes.forEach(note => {
    data.push(note.value);
  })

      // if nothing is written in textarea, notes from localStorage fully deleted
  if(data.length === 0){
    localStorage.removeItem("notes");
  }

      // else whatever inside textarea will be converted into string and be saved in localStorage
  else {
    localStorage.setItem("notes", JSON.stringify(data))
  }
}



function addNote(text = "") {
  let note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool">
      <i id="save" class="save fa-light fa-floppy-disk"></i>
      <i id="trash" class="trash fa-light fa-trash"></i>
    </div>
    <textarea>${text}</textarea>
  `;


  note.querySelector(".trash").addEventListener("click",
  function() {
    note.remove();

      // after deleting a note, remaining notes will be saved in localStorage
    saveNotes();
  })
  
  
  note.querySelector(".save").addEventListener("click",
  function() {
    saveNotes();
  })

      // when the textarea is focusout, notes should be saved too
  note.querySelector("textarea").addEventListener("focusout",
  function() {
    saveNotes();
  })


  main.appendChild(note);
  saveNotes();
}

// initial call for function
(
  function() {

        // local storage will save notes as object
    const lsnotes = JSON.parse(localStorage.getItem("notes"));


        // if nothing is written in textarea, show an empty note when refresh
    if(lsnotes === null){
      addNote();
    }

        // else, when refresh, show notes that are saved before refresh
    else{
      lsnotes.forEach(lsnote => {
        addNote(lsnote);
      })
    }
    
  }
)();

