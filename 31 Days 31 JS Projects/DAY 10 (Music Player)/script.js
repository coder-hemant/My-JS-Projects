let song = document.getElementById("song");
let slider = document.querySelector("input");
let play = document.getElementById("play")


song.onloadedmetadata = function() {
  slider.max = song.duration;
  slider.value = song.currentTime;
}

function playPause() {
  if(play.classList.contains("fa-play")) {
    song.play();
    play.classList.replace("fa-play", "fa-pause");
  } else {
    song.pause();
    play.classList.replace("fa-pause", "fa-play"); 
  }
}

if(song.play()){
  setInterval(() => {
    slider.value = song.currentTime;
  }, 500);
}

slider.onchange = function() {
  song.play();
  slider.max = song.duration;
  song.currentTime = slider.value;
  play.classList.replace("fa-play", "fa-pause");
}