/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


//-----------------------------------------------------------------------

'use strict';

const sections = [...document.querySelectorAll("section")];  // get sections list
const navList = document.querySelector('#navbar__list');     // get ul 


// define duild nav function 
function buildNav() {
    sections.forEach( section => {
       
       // create li 
       let navItem = document.createElement('li');

       // create a tag with id & innertext
       let anchor = document.createElement('a');
       anchor.innerText = section.dataset.nav;
       anchor.href = '#' + section.id;
       anchor.classList.add('menu__link');
       
       // add a tag to li
       navItem.appendChild(anchor);

       // add li to ul
       navList.appendChild(navItem);
    })
}


//--------------------------------------

// define scroll to section on click 
function scroll() {

    const menuLinks = [...document.querySelectorAll('.menu__link')];
    menuLinks.forEach( link => {
  
       link.addEventListener('click', function(e) {
          
        e.preventDefault();

        const hash = this.hash;
        let clickedSection = document.querySelector(this.hash);
        let y = clickedSection.offsetTop;
        window.scrollTo(0, y);
        
        // set active link
        menuLinks.forEach( link => link.classList.remove('active'));
        this.classList.add('active');

        // set active section
        sections.forEach( section => section.classList.remove('your-active-class'));
        clickedSection.classList.add('your-active-class');


       } )

    })
}


// ----------------------------------------------------------

// add class active to section when near top of view port 

function activeSection() {

    for (let section of sections) {
        let sectionBounding = section.getBoundingClientRect();
        if (sectionBounding.top > -500 & sectionBounding.top < 1000000) {
            return section;
        }
    }
    
}


window.addEventListener('scroll', function() {
 
   let active = activeSection();

   // add active class to active section
   sections.forEach( section => section.classList.remove('your-active-class'));
   active.classList.add('your-active-class');
   
   // add active class to active link
   const menuLinks = [...document.querySelectorAll('.menu__link')];
   menuLinks.forEach( link => {

       link.classList.remove('active');

       if (active.dataset.nav === link.innerText ) {
           link.classList.add('active');

       }   
})

})






// call build nav
buildNav();

// call scroll function
scroll();