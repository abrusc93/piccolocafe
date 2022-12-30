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

const exampleModal = document.getElementById('photoDisplayModal')
exampleModal.addEventListener('show.bs.modal', event => {
  // Button that triggered the modal
  const button = event.relatedTarget
  // Extract info from data-bs-* attributes
  const imgSrc1 = button.getAttribute('data-bs-image1')
  const imgSrc2 = button.getAttribute('data-bs-image2')
  // Update the modal's img src attribute.
  document.getElementById("modalImage1").src = imgSrc1;
  document.getElementById("modalImage2").src = imgSrc2;
})