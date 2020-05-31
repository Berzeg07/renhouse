$(document).ready(function() {

    $('.burger').click(function() {
        $(this).toggleClass('is-active');
        $('.mobile-menu, .overlay').fadeToggle();
    });

    var swiper = new Swiper('.filial-slider', {
        slidesPerView: 6,
        spaceBetween: 21,
        // centeredSlides: true,
        slidesPerView: 'auto',
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
                loop: false,
            },
            1169: {
                slidesPerView: 4,
                spaceBetween: 40,
                loop: false,
            },
        }
    });

    var swiper2 = new Swiper('.network-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: false,
        // slidesPerView: 'auto',
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
                slidesPerView: 1,
                spaceBetween: 15,
                loop: false,
            },
            1169: {
                slidesPerView: 3,
                spaceBetween: 40,
                loop: false,
            },
        }
    });

    var swiper3 = new Swiper('.presentation-slider', {
        slidesPerView: 5,
        spaceBetween: 34,
        centeredSlides: false,
        // slidesPerView: 'auto',
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
                loop: false,
            },
            1169: {
                slidesPerView: 3,
                spaceBetween: 40,
                loop: false,
            },
        }
    });

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

    $(function() {
        var $fotoramaDiv = $('.fotorama').fotorama();
        var fotorama = $fotoramaDiv.data('fotorama');
        var imagArr = fotorama.data;
        var srcArr = [];

        for(var i = 0; i < imagArr.length; i++){
            var src = {};
            src.src = imagArr[i].img;
            srcArr.push(src);
        }

        $('.fotorama__img').click(function(){
            $.fancybox.open(srcArr, {
                loop: false
            });
        });
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
