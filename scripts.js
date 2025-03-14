let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showNextImage() {
  images[currentImageIndex].style.display = 'none';
  currentImageIndex = (currentImageIndex + 1) % totalImages;
  images[currentImageIndex].style.display = 'block';
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

// Get references to the hamburger button and the nav links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add event listener for hamburger button click
hamburger.addEventListener('click', () => {
  // Toggle the 'active' class to show or hide the nav links
  navLinks.classList.toggle('active');
});



