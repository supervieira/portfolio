AOS.init();

$(document).ready(function () {

    // Hamburger menu functionality
    
    $('.hamburgerImage').click(function(){
        $('.hamburgerMenu').show().removeClass('fadeOutUp');
        $('.closeMenuImage').show();
        $('.hamburgerImage').hide();
    })
    
    $('.closeMenuImage, .menuLink').click(function(){
        $('.hamburgerMenu').addClass('fadeOutUp');
        $('.hamburgerMenuParent').css('height', '0px');
        $('.closeMenuImage').hide();
        $('.hamburgerImage').show();
    })

    $('.hamburgerImage').keypress(function (e) {
        if (e.originalEvent.code === "Space" || e.originalEvent.code === "Enter"){
            $('.hamburgerMenu').show().removeClass('fadeOutUp');
            $('.closeMenuImage').show();
            $('.hamburgerImage').hide();
        }
    })

    $('.closeMenuImage, .menuLink').keypress(function (e) {
        if (e.originalEvent.code === "Space" || e.originalEvent.code === "Enter") {
            $('.hamburgerMenu').addClass('fadeOutUp');
            $('.hamburgerMenuParent').css('height', '0px');
            $('.closeMenuImage').hide();
            $('.hamburgerImage').show();
        }
    })
    
    // typed.js

    var typed = new Typed('.typed', {
        strings: ["Will ask to pet your dog.", "Budget travel enthusiast.", "Probably eating ramen.", "Front-end developer."],
        typeSpeed: 30,
        loop: true,
        loopCount: 100
    });
    
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

    // Preventing re-direct with formspree
    const $form = $('form');
    const $name = $('#nameInput');
    const $email = $('#emailInput');
    const $message = $('#message');

    const homeApp = $form.on('submit', (e) => {
        e.preventDefault();
        if ($name.val() === '' || $email.val() === '' || $message.val() === '') {
            swal({
                icon: 'error',
                title: 'Sorry!',
                text: 'Please leave your name, email and message so I can get back to you!'
            })
        } else {
            homeApp.postEmail();
            homeApp.clearFields();
            swal({
                icon: 'success',
                title: 'Your email has been sent!',
                buttons: false,
                timer: 3000
            })
        }
    })
    
    homeApp.clearFields = () => {
        $name.val('');
        $email.val('');
        $message.val('');
    }
    
    homeApp.postEmail = () => {
        $.ajax({
            url: 'https://formspree.io/mwkqalda',
            method: 'POST',
            data: {
                email: $email.val(),
                name: $name.val(),
                message: $message.val(),
            },
            dataType: 'json'
        })
    }
    
    homeApp.init = () => {
        homeApp.clearFields();
    }
    
    homeApp.init();
}); 
