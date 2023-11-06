document.addEventListener("DOMContentLoaded", function () {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 5000); 

}

$('.staff-down').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    setTimeout: 3000,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bx bx-chevron-left' ></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='bx bx-chevron-right' ></i></button>"
  });
  $('.clients-down-right').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    setTimeout: 3000,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='bx bx-chevron-left' ></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='bx bx-chevron-right' ></i></button>"
  });
  function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }
  const name = document.getElementById('text');
  const email = document.getElementById('email');
  const form  = document.getElementById('form');
  const errorElement = document.getElementById('error');
  form.addEventListener('submit', (e) => {
    let messages = []
    if(name.value === '' || name.value == null){
      messages.push('Name is required')
    }
    
    if(messages.length >0){
      e.preventDefault()
      errorElement.innerHTML = messages.join(', ')
    }
  })



// ---------------location time------------
  function updateDateTimeLocation() {
    var currentDate = new Date();
    document.getElementById('date').innerHTML = currentDate.toDateString();
    document.getElementById('time').innerHTML = currentDate.toLocaleTimeString();
    
    document.getElementById('location').innerHTML = 'Ha Noi';
  }
  setInterval(updateDateTimeLocation, 1000);
  updateDateTimeLocation();
  function getVisitorCount() {
    return Math.floor(Math.random() * 1000); 
}

// --------------visitor-------------
function displayVisitorCount() {
    var visitorCount = getVisitorCount();
    var countElement = document.getElementById('visitor-count');
    countElement.innerText = 'Visitors: ' + visitorCount;
}

displayVisitorCount();
const settings = require('./setting.json');


});