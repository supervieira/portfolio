AOS.init();

// Hamburger menu

const menuBtn = document.querySelector('.menuBtn');
const hamburgerImage = document.querySelector('.hamburgerImage');
const exitImage = document.querySelector('.closeMenuImage');
const menu = document.querySelector('.hamburgerMenu');

menuBtn.addEventListener('click', () => {
    // menu.classList.toggle('fadeOutUp')
    
    hamburgerImage.classList.toggle('open');
    exitImage.classList.toggle('open');
    menu.classList.toggle('open');
});

menu.addEventListener('click', () => {
    hamburgerImage.classList.toggle('open');
    exitImage.classList.toggle('open');
    menu.classList.toggle('open');
})

// typed.js
// https://forum.webflow.com/t/typed-js-timing/77944/4 - used to enable typing on scroll instead of refresh

var typed = new Typed('.typed', {
    strings: ["Will ask to pet your dog.", "Budget travel enthusiast.", "Probably eating ramen.", "Front-end developer."],
    typeSpeed: 30,
});

/* stop type.js*/
typed.stop();
/* hide type.js cursoer */
$(".typed-cursor").hide();
/* dedect scroll into view */
$(".typed").waypoint({
    handler: function () {
        typed.start();
        $(".typed-cursor").show();
    },
    offset: '50%'
});

// Animate on scroll



// -------------------------------------------

$(document).ready(function () {
    // app.init();

    
}); 
