let form  = document.querySelector("form");
let showMore = document.querySelector("button");



const options = {
  method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c243cf4ce5msh3fe6ab7f48d9bdep1f22d1jsn9e46ac69a398',
		'X-RapidAPI-Host': 'free-images-api.p.rapidapi.com'
	}
};

let page = 1;


const show = async (data) => {
  let search = document.querySelector("input");
  let input = search.value;
  data = input;
  const url = `https://free-images-api.p.rapidapi.com/images/${data}`;
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result.results);
  let images = document.querySelector(".images");

  images.innerHTML = "";

  let allImages = result.results;

  allImages.forEach(item => {
    let imageShow = document.createElement("div");
    imageShow.classList.add("image");
    imageShow.innerHTML = `<img src="${item.image}">`

    images.append(imageShow);
  })


}

form.addEventListener("submit", function(e) {
  e.preventDefault();
  page = 1;
  show();
})


showMore.addEventListener("click", function() {
  page++;
  show();
})

