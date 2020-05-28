$(document).ready(function() {
    $('.burger').click(function() {
        $(this).toggleClass('is-active');
        $('.mobile-menu, .overlay').fadeToggle();
    });

    var swiper = new Swiper('.filial-slider', {
        slidesPerView: 7,
        spaceBetween: 21,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1169: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
        }
    });



});
