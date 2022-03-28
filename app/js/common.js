let allLazyLoad = [...document.querySelectorAll('.lazyload')];

function allLozadImg() {
    allLazyLoad.forEach((el) => {
        const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
        observer.observe();
        el.addEventListener('load', () => {
            el.classList.add('is-loaded')
        })
        // if (el.loaded()) {
        //     el.classList.add('is-loaded');
        // }
    })
}

allLozadImg();


//header

window.onscroll = function () {
    scrollFunction();

};

function checkScrollDir() {
    newValue = window.pageYOffset;
    // console.log(window.pageYOffset + ' pageoffset')
    if (window.innerWidth > 1050) {
        document.documentElement.scrollTop
        // console.log( + 'scrolled from top');
        if (document.body.querySelector('.header')) {

            if (oldValue >= newValue) {
                // console.log('scroll top?')
                document.querySelector('.header').classList.remove('is-fixed');
                if (window.pageYOffset >= 20) {
                    document.querySelector('.header').classList.add('is-fixed');
                }
            } else {
                document.querySelector('.header').classList.add('is-fixed');

            }

        }


    } else {
        if (oldValue < newValue) {

        } else if (oldValue > newValue) {

        }
    }

    oldValue = newValue;
}


let oldValue = 0;
let newValue = 0;

function scrollFunction() {
    checkScrollDir()
    // if (window.innerWidth < 1201) {
    //     console.log($('.header').outerHeight(true) + ' header-height')
    //     if (document.body.scrollTop > $('.header').outerHeight(true) || document.documentElement.scrollTop > $('.header').outerHeight(true)) {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.add('scrolled');
    //         }
    //     } else {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.remove('scrolled');
    //             // document.body.querySelector(".header").classList.remove('scroll-down');
    //         }
    //
    //     }
    // } else {
    //     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.add('scrolled');
    //         }
    //     } else {
    //         if (document.body.querySelector(".header")) {
    //             document.body.querySelector(".header").classList.remove('scrolled');
    //             document.body.querySelector(".header").classList.remove('scroll-down');
    //         }
    //
    //     }
    // }


}

document.onload = () => {
    scrollFunction();
};
scrollFunction();

//header


//open closing

let headerNav = [...document.querySelectorAll('.header-nav > a')];

function openHeaderNav() {
    if (headerNav.length) {
        headerNav.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                btn.closest('.header-nav').classList.toggle('opened');
                document.querySelector('body').classList.toggle('no-scroll');
                document.documentElement.classList.toggle('no-scroll');
                document.querySelector('.backplate-menu').classList.toggle('visible');
            });
            let close = btn.closest('.header-nav').querySelector('.close');

            close.addEventListener('click', () => {
                btn.closest('.header-nav').classList.remove('opened');
                document.querySelector('body').classList.remove('no-scroll');
                document.documentElement.classList.remove('no-scroll');

                document.querySelector('.backplate-menu').classList.remove('visible');

            })
        })
    }
}

openHeaderNav();

let burger = [...document.querySelectorAll('.burger')];

function openBurger() {
    if (burger.length) {
        burger.forEach((btn) => {
            btn.addEventListener('click', () => {
                btn.classList.toggle('open');
                document.querySelector('body').classList.toggle('no-scroll');
                document.documentElement.classList.toggle('no-scroll');
                document.querySelector('.backplate-menu').classList.toggle('visible');
                document.querySelector('.header-menu').classList.toggle('opened');
            })
        })
    }
}

openBurger();

//open closing

//hovering

let prodHome = [...document.querySelectorAll('.hero-prod__item')];

let prodHead = document.querySelector('.hero-prod-head');


function hoverProdHome() {
    if (prodHome.length) {
        prodHome.forEach((btn) => {
            btn.addEventListener('mouseover', () => {
                prodHead.classList.add('hide');
            });
            btn.addEventListener('touchstart', () => {
                prodHead.classList.add('hide');
            });
            btn.addEventListener('mouseout', () => {
                prodHead.classList.remove('hide');
            });
            btn.addEventListener('touchend', () => {
                prodHead.classList.remove('hide');
            });
        })
    }
}

hoverProdHome();


//hovering


//full scroll script

new fullpage('#fullpage', {
    //options here

    anchors: ['company', 'target', 'production', 'nutrition', 'partners'],
    menu: '.menu-links',
    navigation: true,
    // autoScrolling: true,
    // scrollHorizontally: true,
    // verticalCentered: false,
    css3: true,

    responsiveWidth: 760,
});


//full scroll script