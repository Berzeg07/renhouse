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
            if(swiper4) {
                swiper4.destroy();
        }// или swiper.autoplay.stop();
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
        nextEl: '.swiper-button-next',
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

var swiperTestimonials = new Swiper('.perks__slider .swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: false,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        767: {
            spaceBetween: 8,
            slidesPerView: 'auto'
        },
        1169: {
            spaceBetween: 22,
            slidesPerView: 'auto'
        }
    }
});

var swiperComment = new Swiper('.swiper-comment', {
    slidesPerView: 1,
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
});




// function sound() {
//      var audio = new Audio(); // Создаём новый элемент Audio
//      audio.src = '...'; // Указываем путь к звуку "клика"
//      audio.autoplay = true; // Автоматически запускаем
//  }

});

let calculateLinksChecked = document.querySelectorAll('.calculate-link'),
calculateLinksCity = document.querySelectorAll('.calculate-city-link');

let calcSum = document.querySelector('.calculate__income-sum span'),
jsWorkers = document.querySelector('.js-workers'),
jsAd = document.querySelector('.js-add'),
jsOffice = document.querySelector('.js-office'),
jsMobile = document.querySelector('.js-mobile'),
jsApartaments = document.querySelector('.js-apartaments');

calculateLinksCity.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        //Выбор города оформление
        stateCity.call(item);

        //Выбор города счет
        dinamicCity.call(item);
    });
});

function dinamicCity () {
    let num = Number(this.getAttribute('data-amount')),
    town = Number(document.querySelector('.calculate-link_first').getAttribute('data-num')),
    consumption = document.querySelector('.js-consumption').innerHTML.replace(/\s/g, '');


    let sumAll = num * town,
    sumClear = sumAll - Number(consumption);

    document.querySelector('.js-income').innerHTML = String(sumAll).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    document.querySelector('.js-clear-income').innerHTML = String(sumClear).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

}

function dinamicApartaments () {
    let num = Number(this.getAttribute('data-num')),
    town = Number(document.querySelector('.calculate__city_active').getAttribute('data-amount'));

    let sumAll = num * town;



    document.querySelector('.js-income').innerHTML = String(sumAll).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    let myIncome = income(num);
    document.querySelector('.js-consumption').innerHTML = String(myIncome).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    let sumClear = sumAll - myIncome;
    document.querySelector('.js-clear-income').innerHTML = String(sumClear).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

}

function income(num) {

    let calcWorkers = 4000,
    calcAd = 5000,
    calcOffice = 8000,
    calcMobile = 500,
    calcApartaments = 20000;


    let sumWorkers = num * calcWorkers,
    sumAd = num * calcAd,
    sumOffice = num > 5 ? calcOffice: 0,
    sumMobile = num * calcMobile,
    sumApartaments = num * calcApartaments,
    sumAll = sumWorkers + sumAd + sumOffice + sumMobile + sumApartaments;

    jsWorkers.innerHTML = String(sumWorkers).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    jsAd.innerHTML = String(sumAd).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    jsOffice.innerHTML = String(sumOffice).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    jsMobile.innerHTML = String(sumMobile).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
    jsApartaments.innerHTML = String(sumApartaments).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');

    return sumAll;
}

function stateCity () {

    calculateLinksCity.forEach((item) => {
        item.classList.remove('calculate__city_active');
    });

    this.classList.add('calculate__city_active');

}


calculateLinksChecked.forEach((item) => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        //Выбор квартир оформление
        stateCalc.call(item);

        //Выбор квартир счет
        dinamicApartaments.call(item);
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
