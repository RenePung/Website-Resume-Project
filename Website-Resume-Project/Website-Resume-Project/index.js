// Function to hide swiper buttons on mobile devices
function hideSwiperButtonsOnMobile() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 768) { // Adjust this value to your desired screen width for mobile devices
      const swiperButtons = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
      swiperButtons.forEach(button => {
        button.style.display = 'none';
      });
    }
  }

  // Call the function on page load and whenever the window is resized
  document.addEventListener('DOMContentLoaded', hideSwiperButtonsOnMobile);
  window.addEventListener('resize', hideSwiperButtonsOnMobile);