console.log("lets begin");

// splash API
let count = 10;
let apiKey = "qUw9SzysXAS8k2n7TVA5frSzk6Ucrg5loT6TkBjgUoI";
const splashAPI = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get data from API

async function getPhoto() {
  try {
    let response = await fetch(splashAPI);
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

// triggering the fetch data function

getPhoto();
