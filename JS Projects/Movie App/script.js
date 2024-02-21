const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

const input = document.querySelector(".input")

const movieBox = document.querySelector(".movie-box");
const searchItem = document.querySelector("#search");
const deleteButton = document.querySelector(".input i");
deleteButton.style.display ="none";


    const getMovie = async(api) => {
      const response = await fetch(api);
      const data = await response.json();
      searchMovie(data.results);  
    }
    getMovie(APIURL);


    const searchMovie = (data) => {
      movieBox.innerHTML = "";
      data.forEach(item => {
        const box = document.createElement("div");
        box.classList.add("box");

        let imgSrc = item.poster_path ? `${IMGPATH + item.poster_path}` : 'https://w0.peakpx.com/wallpaper/529/743/HD-wallpaper-404-missing-2019-2020-404-404-error-404-not-found-404-error-tech-technical-thumbnail.jpg';
        
          box.innerHTML = `
      <img id="picture" src="${imgSrc}">

      <div class="overlay">
        <div class="detail">
          <h2 class="name">${item.title}</h2>
          <span class="rating">${item.vote_average}</span>
          <i class="fa-sharp fa-solid fa-star"></i>

          <h3 class="overview">
            Overview
          </h3>
          <p>

            ${item.overview}
          </p>
        </div>
      </div>
      `
        

      movieBox.appendChild(box);
      });
      
    }

searchItem.addEventListener("keyup",
  function(event) {
  if(event.target.value != "") {
    getMovie(SEARCHAPI + event.target.value);
    deleteButton.style.display = "inline-block";
  }
  else {
    getMovie(APIURL);
    deleteButton.style.display = "none";
  }
});


deleteButton.addEventListener("click",
function () {
  searchItem.value = "";
  deleteButton.style.display = "none";
  getMovie(APIURL);
})

