'use strict';
window.addEventListener('load', () => {
   const moveTitle = document.querySelector('.prime-title');
   const moveText = document.querySelector('.prime-paragraph');
   moveTitle.classList.add('_move');
   moveText.classList.add('_move');
})
headerScroll();
sectionNav();
scrollSection();

function headerScroll() {
   const headerElement = document.querySelector('.header');
   const scrollDown = document.querySelector('.scroll-down');
   const navElement = document.querySelector('.navigation');
   let navElementTop = navElement.offsetTop + 1;
   scrollDown.addEventListener('click', function () {
      window.scrollTo({
         top: navElementTop,
         behavior: 'smooth'
      })
   })
};

function sectionNav() {
   const navElements = document.querySelectorAll('.nav-list__item-link');
   //click navigation
   for (let i = 0; i < navElements.length; i++) {
      navElements[0].classList.add('_active');
      navElements[i].addEventListener('click', function(event) {
         event.preventDefault();
         if (this.classList.contains('_active') == false) {
            for (let j = 0; j < navElements.length; j++) {
               navElements[j].classList.remove('_active');
            };
            navElements[i].classList.add('_active');
         }
      })      
   };   
};