$('.navbar-nav>.section-link>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

ScrollReveal().reveal('.reveal', { 
    delay: 200
});

ScrollReveal().reveal('.reveal-delay', { 
    delay: 600
});

ScrollReveal().reveal('.reveal-slow', { 
    delay: 300,
    duration: 3000,
    easing: 'ease-in'
});

ScrollReveal().reveal('.reveal-up', { 
    delay: 200,
    distance: '30px'
});

$(window).resize(function(){
    if($(window).width()<768){
        $('#home-carousel').addClass('pt-5');
    }
    if($(window).width()>768){
        $('#home-carousel').removeClass('pt-5');
    }
});

if($(window).width()<768){
    $('#home-carousel').addClass('pt-5');
}
if($(window).width()>768){
    $('#home-carousel').removeClass('pt-5');
}

$('.menu-page *').addClass('animate__animated animate__fadeIn');