const imageContainer = document.getElementById("img-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let photoArray = [];

const imageLoaded = () => {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;
    loader.hidden = true;
  }
};

// helper func

const setAttributes = (element, attribute) => {
  for (const key in attribute) {
    element.setAttribute(key, attribute[key]);
  }
};

// create Elements for links & photos

const displayPhotos = () => {
  imagesLoaded = 0;
  totalImages = photoArray.length;
  photoArray.forEach((photo) => {
    const item = document.createElement("a");

    setAttributes(item, {
      href: photo.links.html,
      target: "_blank",
    });

    const img = document.createElement("img");
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });
    // image load
    img.addEventListener("load", imageLoaded);

    item.appendChild(img);

    imageContainer.appendChild(item);
  });

  //  create img
};

// Unsplash API
let count = 10;
let apiKey = "qUw9SzysXAS8k2n7TVA5frSzk6Ucrg5loT6TkBjgUoI";
const splashAPI = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// get data from API

const getPhoto = async () => {
  try {
    let response = await fetch(splashAPI);
    photoArray = await response.json();

    displayPhotos();
  } catch (error) {
    console.log(error);
  }
};

// bottom scroll
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 &&
    ready
  ) {
    ready = false;
    getPhoto();
  }
});

// triggering the fetch data function

getPhoto();
