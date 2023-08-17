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



// LANGUAGES BAR TRACKER

const languages = [
  { name: 'HTML', percentage: 68.2 },
  { name: 'CSS', percentage: 27.3 },
  { name: 'JavaScript', percentage: 4.5 },
  { name: 'Python', percentage: 10 },
  { name: 'BootStrap', percentage: 5 },
  { name: 'SQL', percentage: 8 },
  { name: 'Node.js', percentage: 6 },
  // Add more languages as needed
];

// Update language progress bars
const languagesList = document.querySelector('.languages-list');

languages.forEach(language => {
  const languageItem = document.createElement('li');
  languageItem.className = 'language';
  languageItem.innerHTML = `
      <span class="language-name">${language.name}</span>
      <div class="language-bar">
          <div class="language-progress" style="width: ${language.percentage}%;"></div>
      </div>
      <span class="language-percentage">${language.percentage}%</span>
  `;
  languagesList.appendChild(languageItem);
});


//BACK TO TOP BUTTON

// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
