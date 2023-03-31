const APP_TOKEN = 'rvPvn1wkUHNFpw28tRW4tsCtv' // <- Replace this with your app token
const DATASET_IDENTIFIER = 'h9gi-nx95' // <- Replace this with the ID for the data resource that you want to look up
const LIMIT = 20 // <- Replace this with the number of records you want to pull

// Construct the URL that we need to make requests
const url = `https://data.cityofnewyork.us/resource/${DATASET_IDENTIFIER}.json?$limit=${LIMIT}&$$app_token=${APP_TOKEN}`

console.log(`Fetching url - ${url}`)

fetch(url)
  .then((response) => response.json())
  .then((json) => {
      console.log(json)
  });