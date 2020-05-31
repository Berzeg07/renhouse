$(document).ready(function() {

    // document.onkeydown = function(e) {
    //     if (e.ctrlKey &&
    //         (e.keyCode === 67 ||
    //             e.keyCode === 86 ||
    //             e.keyCode === 85 ||
    //             e.keyCode === 83 ||
    //             e.keyCode === 117)) {
    //         alert('not allowed');
    //         return false;
    //     } else {
    //         return true;
    //     }
    // };

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


    function resizeScrenn() {
    if ($(window).width() >= 1170) {

        var swiper4 = new Swiper('.run-franchise-slider', {
            slidesPerView: 4,
            spaceBetween: 30,
            centeredSlides: false,
        // slidesPerView: 'auto',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar',
        },
        breakpoints: {
            1170: {
                slidesPerView: 3,
                spaceBetween: 20,
                loop: true
            }
        }
    });

    } else {
        swiper4.destroy(); // или swiper.autoplay.stop();
    }
}


resizeScrenn();

$(window).resize(function () {
    resizeScrenn();
});

var swiper5 = new Swiper('.video-review__slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: false,
        loop: true,
        navigation: {
            nextEl: '.video-review .swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            1170: {
                slidesPerView: 1,
                spaceBetween: 40,
                loop: true
            },
        }
    });

function sound() {
     var audio = new Audio(); // Создаём новый элемент Audio
     audio.src = '...'; // Указываем путь к звуку "клика"
     audio.autoplay = true; // Автоматически запускаем
}

});

let calculateLinksChecked = document.querySelectorAll('.calculate-link');

    calculateLinksChecked.forEach((item) => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            stateCalc.call(item);
        });
    });

    function stateCalc() {

        let num = Number(this.getAttribute('data-num'));

        calculateLinksChecked.forEach((item) => {
            item.classList.remove('calculate-link_active');
            item.classList.remove('calculate-link_first');
            item.parentElement.classList.remove('calculate-li-active');
        });


        calculateLinksChecked.forEach((item) => {
            if(item.getAttribute('data-num') === 5 ) {
                item.classList.add('calculate-link_active');
                return;
            }

            if(item.getAttribute('data-num') <= num) {
                item.classList.add('calculate-link_active');
                item.parentElement.classList.add('calculate-li-active');
            }
        });

        this.classList.add('calculate-link_first');
    }


