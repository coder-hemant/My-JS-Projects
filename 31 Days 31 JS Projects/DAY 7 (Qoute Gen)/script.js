let data = [{
  'art': 'The greatest glory in living lies not in never falling, but in rising every time we fall.',
  'artist': 'Nelson Mandela'
}, {
  'art': 'You must be the change you wish to see in the world.',
  'artist': 'Mahatma Gandhi'
}, {
  'art': 'The only thing we have to fear is fear itself.',
  'artist': 'Franklin D. Roosevelt' 
}, {
  'art': 'Do one thing every day that scares you.',
  'artist': 'Eleanor Roosevelt'
}]


const qoutes = document.querySelector(".quotes");
const newQuote = document.querySelector(".new");
const tweetUrl = "https://twitter.com/intent/tweet?text=Hello%20world";
const tweetCode = document.querySelector(".tweet");
const quote = document.querySelector(".quote");
const artist = document.querySelector(".name")

function getQuote(dataSet) {
  return dataSet[Math.floor(Math.random() * (dataSet.length))];
}
tweetCode.addEventListener("click", function() {
  window.open(`https://twitter.com/intent/tweet?text=` + quote.innerHTML + `            -${artist.innerHTML}`, "Tweet Window", "width=600, height=400");
})

newQuote.addEventListener("click", function() {
  setQuote();
})


function setQuote() {
  let myData = getQuote(data);
  quote.innerHTML = myData.art;
  artist.innerHTML = myData.artist;
}

setQuote();
