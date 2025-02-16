let slideIndex = 0;

// Sample slideshow data
// const slidesData = [
//   { image: "Images/pan-xiaozhen-wXG5XF73o3w-unsplash.jpg", caption: "Duffy and Friends" },
//   { image: "Images/brandi-alexandra-Mvav3d0Ki2k-unsplash.jpg", caption: "Duffy and Friends" },
//   { image: "Images/rita-chou-21KlPS8bS20-unsplash.jpg", caption: "Duffy and Friends" }
// ];

// generate slideshow HTML
function generateSlideshow(slidesData) {
  const slideshowContainer = document.createElement("div");
  slideshowContainer.classList.add("slideshow-container");

  slidesData.forEach((slide) => {
    const slideDiv = document.createElement("div");
    slideDiv.classList.add("mySlides", "fade");

    const img = document.createElement("img");
    img.src = slide.image;
    img.style.width = "100%";

    const textOverlay = document.createElement("div");
    textOverlay.classList.add("text-overlay");
    textOverlay.innerText = slide.caption;

    slideDiv.appendChild(img);
    slideDiv.appendChild(textOverlay);
    slideshowContainer.appendChild(slideDiv);
  });

  const prevButton = document.createElement("a");
  prevButton.classList.add("prev");
  prevButton.innerHTML = "&#10094;";
  prevButton.onclick = () => changeSlide(-1);

  const nextButton = document.createElement("a");
  nextButton.classList.add("next");
  nextButton.innerHTML = "&#10095;";
  nextButton.onclick = () => changeSlide(1);

  slideshowContainer.appendChild(prevButton);
  slideshowContainer.appendChild(nextButton);

  document.querySelector(".header").appendChild(slideshowContainer);
}

// initialize the slideshow
function initSlideshow() {
  slideIndex = 0;
  showSlide(slideIndex);
  autoShowSlides();
}

// move to the next or previous slide
function changeSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

//display a specific slide
function showSlide(index) {
  const slides = document.getElementsByClassName("mySlides");
  if (index >= slides.length) slideIndex = 0;
  if (index < 0) slideIndex = slides.length - 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

//automatic slideshow function
function autoShowSlides() {
  const slides = document.getElementsByClassName("mySlides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].style.display = "block";
  setTimeout(autoShowSlides, 3000); // change slide every 3 seconds
}

//generate the slideshow and initialize it
window.onload = function() {
  generateSlideshow(slidesData);
  initSlideshow();
};


// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }
