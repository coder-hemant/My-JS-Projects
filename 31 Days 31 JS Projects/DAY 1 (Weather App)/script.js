const form = document.getElementById("form");

const search = document.getElementById("search");
const card = document.querySelector(".card");
const icon = document.querySelector("#form i");

icon.addEventListener("click",
  function() {
  getWeather(search.value);
  search.value = "";
})



const options = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c243cf4ce5msh3fe6ab7f48d9bdep1f22d1jsn9e46ac69a398',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};
const IMGURL = "https://openweathermap.org/img/wn/10d@2x.png";


async function getWeather(city) {
  const url = `https://open-weather13.p.rapidapi.com/city/${city}&units=metric`;
  const response = await fetch(url, options);    
  const data = await response.json();
  console.log(data);

  if(data.cod == "404") {
    card.innerHTML = card.innerHTML + `
      <div class="sectionn1">City Not Found</div>
    `
  }

  card.innerHTML = card.innerHTML + `
      <div class="section1">
        <div class="image" id="main">
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        </div>  
        <div class="detail">
          <h1>${data.main.temp}°C</h1>
          <h2>${data.weather[0].main}</h2>
        </div>  
      </div>  

      <h1 class="city">${city}</h1>

      <div class="section2">
          <div class="humidity">
            <div class="imageHum">
              <img src="Images/humidity.png">
            </div>  
            
            <div class="info">
              <span>
                ${data.main.humidity}%
              </span>  
              <span class="inform">
                Humidity
              </span>  
            </div>  
          </div>  

          <div class="wind">
            <div class="imageWind">
              <img src="Images/wind.png">
            </div>  
            <div class="info">
              <span>
                ${data.wind.speed} km/hr
              </span>  
              <span class="inform">
                Wind Speed
              </span>  
            </div>  
          </div>  
        </div>  
  `     
  const main = document.getElementById("main"); 

  // if(data.weather[0].main == "Haze"){
  //   main.style.backgroundImage = "url(Images/haze.png)";
  // }
  // else if(data.weather[0].main == "Clouds") {
  //   main.style.backgroundImage = "url(Images/cloudy.png)";
  // }
  // else if(data.weather[0].main == "Fog") {
  //   main.style.backgroundImage = "url(Images/fog.png)";
  // }
  // else if(data.weather[0].main == "Mist") {
  //   main.style.backgroundImage = "url(Images/mist.png)";
  // }
}  


form.addEventListener("submit",
function(event) {
  event.preventDefault();
  getWeather(search.value);
  // search.value = "";
});  