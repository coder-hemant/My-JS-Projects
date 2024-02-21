// const options = {
//   method: 'GET',
// 	headers: {
//     'X-RapidAPI-Key': 'c243cf4ce5msh3fe6ab7f48d9bdep1f22d1jsn9e46ac69a398',
// 		'X-RapidAPI-Host': 'bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com'
// 	}
// };

const options = {
  method: 'GET',
	headers: {
    'X-RapidAPI-Key': 'c243cf4ce5msh3fe6ab7f48d9bdep1f22d1jsn9e46ac69a398',
		'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
	}
};

async function getCoin() {
  const url = 'https://coinranking1.p.rapidapi.com/coins?referenceCurrencyUuid=6mUvpzCc2lFo&timePeriod=24h&tiers%5B0%5D=1&orderBy=marketCap&orderDirection=desc&limit=50&offset=0';
  const response = await fetch(url, options);
  // const response = await fetch('https://api.coinranking.com/v2/reference-currencies', options)
  const data = await response.json();
  console.log(data.data.coins[0].price);
  // console.log(data.currencies);
}

getCoin();





// async function getData() {
//   const url = 'https://bitcoinaverage-global-bitcoin-index-v1.p.rapidapi.com/indices/global/ticker/BTCINR';
//   const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// }

// getData();