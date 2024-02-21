// const API_KEY = `c243cf4ce5msh3fe6ab7f48d9bdep1f22d1jsn9e46ac69a398`
// const API = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places`
// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form = document.querySelector("form");
const search = document.querySelector("#search");
const weather = document.querySelector(".weather");







const getWeather = async(city) => {
  weather.innerHTML = "<h2>Loading...</h2>";
  
  const url = `https://open-weather13.p.rapidapi.com/city/${city}&units=metric`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c243cf4ce5msh3fe6ab7f48d9bdep1f22d1jsn9e46ac69a398',
		'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
	}
};




  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  // const url = options;
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return showWeather(data);
}

const showWeather = (data) => {
  if(data.cod == "404") {
    weather.innerHTML = `<h2>City not found</h2>`
    return;
  }
  weather.innerHTML = `
  <div class="image">
  <img id="weather" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
</div>
<div class="detail">
  <h2 class="degree">
    ${data.main.temp}°C
  </h2>
  <span class="condition">
    ${data.weather[0].main}
  </span>
</div>
  `
}

form.addEventListener("submit",
function(event){
  event.preventDefault();
  getWeather(search.value);
})



