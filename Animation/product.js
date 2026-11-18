let slideIndex = {
    slideshow1: 1,
    slideshow2: 1,
    slideshow3: 1
};

function plusSlides(n, slideshowId) {
  showSlides(slideIndex[slideshowId] += n, slideshowId);
}

function currentSlide(n, slideshowId) {
  showSlides(slideIndex[slideshowId] = n, slideshowId);
}

function showSlides(n, slideshowId) {
  let i;
  let slides = document.querySelectorAll(`#${slideshowId} .slide`);
  if (n > slides.length) {slideIndex[slideshowId] = 1;}
  if (n < 1) {slideIndex[slideshowId] = slides.length;}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex[slideshowId] - 1].style.display = "block";
  
}

document.addEventListener("DOMContentLoaded", () => {
    for (let id in slideIndex) {
      showSlides(slideIndex[id], id);
    }
});