AOS.init();

$(document).ready(function () {

    // Hamburger menu functionality
    
    $('.hamburgerImage').click(function(){
        console.log("open menu");
        $('.hamburgerMenu').show();
        $('.closeMenuImage').show();
        $('.hamburgerImage').hide();
    })
    
    $('.closeMenuImage').click(function(){
        console.log("close menu");
        $('.hamburgerMenu').hide();
        $('.closeMenuImage').hide();
        $('.hamburgerImage').show();
    })


    
    // typed.js

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
}); 
