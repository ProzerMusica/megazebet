document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    showSlides();
  
    function showSlides() {
      let slides = document.querySelectorAll('.slider img');
      let dots = document.querySelectorAll('.slider-dots .dot');
      
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
  
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1;
      }
  
      for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove("active-dot");
      }
  
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].classList.add("active-dot");
  
      setTimeout(showSlides, 5000); // Change image every 5 seconds
    }
  
    document.querySelector('.prev').addEventListener('click', function() {
      slideIndex -= 2;
      if (slideIndex < 0) {
        slideIndex = document.querySelectorAll('.slider img').length - 1;
      }
      showSlides();
    });
  
    document.querySelector('.next').addEventListener('click', function() {
      showSlides();
    });
  
    let dots = document.querySelectorAll('.slider-dots .dot');
    for (let i = 0; i < dots.length; i++) {
      dots[i].addEventListener('click', function() {
        slideIndex = i;
        showSlides();
      });
    }
  });
  