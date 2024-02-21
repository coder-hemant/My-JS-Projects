const input = document.querySelector("input");
const generate = document.querySelector(".generate");
const result = document.querySelector("p");
const main = document.querySelector(".main")
input.max = new Date().toISOString().split("T")[0];

input.defaultValue = "2023-02-10";

generate.addEventListener("click", function() {
  getAge();
})

function getAge() {
  let data = input.value;
  let dob = new Date(data);
  let now = new Date();

  let date1 = dob.getDate();
  let month1 = dob.getMonth() + 1;
  let year1 = dob.getFullYear();

  let date2 = now.getDate();
  let month2 = now.getMonth() + 1;
  let year2 = now.getFullYear();

  let diffYear, diffMonth, diffDate;

  diffYear = year2 - year1;

  if(month2 > month1 || month2 == month1) {
    diffMonth = month2 - month1;
  }else {
    diffYear--;
    diffMonth = month2 - month1 + 12;
  }

  if(date2 > date1 || date2 == date1) {
    diffDate = date2 - date1;
  }else {
    diffMonth--;
    diffDate = date2 - date1 + getDate(year1, month1);
  }

  if(diffMonth < 0) {
    diffMonth = 11;
    diffYear--; 
  }



  console.log(year1);
  console.log(month1);
  console.log(date1);
  console.log(year2);
  console.log(month2);
  console.log(date2);
  console.log(diffYear);
  console.log(diffMonth);
  console.log(diffDate);




  result.innerHTML = `You are ${diffYear} years, ${diffMonth} months and ${diffDate} days old.`

}

function getDate(year, month) {
  let realDate = new Date(year, month - 1, 0).getDate();
  console.log(new Date(year, month, 0))
  return realDate;
}


// getAge();