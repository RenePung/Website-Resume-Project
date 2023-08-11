function hideSwiperButtonsOnMobile() {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if (screenWidth <= 768) { // Adjust this value to your desired screen width for mobile devices and tablets
      const swiperButtons = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
      swiperButtons.forEach(button => {
        button.style.display = 'none';
      });
    } else {
      const swiperButtons = document.querySelectorAll('.swiper-button-next, .swiper-button-prev');
      swiperButtons.forEach(button => {
        button.style.display = 'block'; // Show the buttons on larger screens
      });
    }
  }

  // Call the function on page load and whenever the window is resized
  document.addEventListener('DOMContentLoaded', hideSwiperButtonsOnMobile);
  window.addEventListener('resize', hideSwiperButtonsOnMobile);







// BOX ARROW ANIMATION 

const boxArrow = document.querySelector('.box-arrow');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // Adjust the value 
    boxArrow.style.visibility = 'hidden';
  } else {
    boxArrow.style.visibility = 'visible';
  }
});
