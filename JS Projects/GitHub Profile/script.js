const API = "https://api.github.com/users/"
const main = document.getElementById("main");
const searchBox = document.querySelector("#profile");



const getUser = async(username) => {
  const response = await fetch(API + username);
  const data = await response.json();
  console.log(data);
  if(data.name === undefined){
    main.innerHTML = `
    <div class="nocard">Please enter a valid username.</div>
    `
  }
  else if(data.name !== undefined) {
    main.innerHTML = `
      <div class="card">
        <div class="image">
          <img class="avatar" src="${data.avatar_url}">  
        </div>

        <div class="details">
          <h2 id="name">${data.name}</h2>
          <p id="bio">${data.bio}</p>

          <ul id="info">
            <li>${data.followers} <strong>Followers</strong></li>
            <li>${data.following} <strong>Followings</strong></li>
            <li>${data.public_repos} <strong>Repos</strong></li>
          </ul>

          <div id="repos">
            
          </div>
      </div>
      </div>
  `
  }
  
  getRepos(username);
}


const getRepos = async(username) => {
  const repos = document.querySelector("#repos");
  const response = await fetch(API + username + "/repos");
  const data = await response.json();
  data.forEach(item => {
    const elem = document.createElement("a");
    elem.classList.add("repo");
    elem.href = item.html_url;
    elem.target = "_blank";
    elem.innerText = item.name;
    repos.appendChild(elem);
  })
}

const formSubmit = () => {
  console.log(searchBox.value);
  if(searchBox.value !== ""){
    getUser(searchBox.value);
    searchBox.value = ""; 
  }
  return false;
}

searchBox.addEventListener("focusout",
function() {
  formSubmit();
})

// getUser("CodeWithHarry");
