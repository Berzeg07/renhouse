$(document).ready(function() {

    $('.zoom-img').loupe();

    var swiperCom = new Swiper('.community-slider', {
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: false,
        // slidesPerView: 'auto',
        loop: true,

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        }
    });

    $.fancybox.defaults.backFocus = false;

    var swiperTeam = new Swiper('.team-slider', {
        slidesPerView: 4,
        spaceBetween: 46,
        centeredSlides: false,
        // slidesPerView: 'auto',
        loop: true,
        simulateTouch: false,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            499: {
                slidesPerView: 1,
                spaceBetween: 15,
                loop: false,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 15,
                loop: false,
            },
            1169: {
                spaceBetween: 26,
            }
        }
    });


   //  $(function() {
   //     $('.certificates__img').click(function(event) {
   //         event.preventDefault();
   //
   //         var i_path = $(this).attr('href');
   //         $('body').append('<div class="magnify"><img src="' + i_path + '"><div class="close-popup"></div></div>');
   //         // $('#magnify').css({
   //         //     left: ($(document).width() - $('#magnify').outerWidth()) / 2,
   //         //     // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
   //         //     top: ($(window).height() - $('#magnify').outerHeight()) / 2
   //         // });
   //         $('.overlay, .magnify').fadeIn('fast');
   //     });
   //
   //     $('body').on('click', '.close-popup', function(event) {
   //         event.preventDefault();
   //
   //         $('.overlay, .magnify').fadeOut('fast', function() {
   //             $('.close-popup, .magnify').remove();
   //         });
   //     });
   // });


});
