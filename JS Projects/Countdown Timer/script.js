const endDate = "07 May 2027";

document.getElementById("main2").innerText = endDate;
const inputs = document.querySelectorAll("input");


function clock() {
  const end = new Date(endDate);
  const now = new Date();
  const diff = (end - now) / 1000;  //Miliseconds to seconds

  if(diff < 0) {
    let result =  document.getElementById("overlay");
    result.style.fontSize = "40px";
    result.innerHTML = "Guess you got me kid!!"
  };

  inputs[0].value = Math.floor((diff / 3600 / 24));  //seconds to day
  inputs[1].value = Math.floor((diff / 3600) % 24);   //seconds to hours (excluding days)
  inputs[2].value = Math.floor((diff / 60) % 60);     //seconds to minutes (excluding days and hours)
  inputs[3].value = Math.floor((diff) % 60);      //to seconds (after excluding days, hours and minutes)
}

clock();

setInterval(() => {
  clock()
}, 1000);