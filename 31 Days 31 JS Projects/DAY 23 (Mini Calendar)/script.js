let date = document.querySelector(".datep");
let day = document.querySelector(".dayp");
let month = document.querySelector(".monthp");
let year = document.querySelector(".yearp");

let today = new Date();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
console.log(today);

date.innerHTML = today.getDate();
day.innerHTML = days[today.getDay()];
month.innerHTML = months[today.getMonth()];
year.innerHTML = today.getFullYear();