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
//full scroll script
let dotText = [...document.querySelectorAll('main .dot')];
let objDots = {};

function writeDotText() {
    if (dotText.length) {
        dotText.forEach((it, i) => {
            it.dataset.dots = i;
            let text = it.innerHTML;
            let textLength = text.length;
            let speed = 60;
            objDots[i] = text;
            let hei = it.offsetHeight;
            it.style.minHeight = `${hei}px`;
            it.innerHTML = '';

            // typeWriter(i, text);
            // console.log(objDots);

        })
    }
}

writeDotText();

//dots

let jsAnimDots = [...document.querySelectorAll('body:not(.home) main .dot')];
var VisibleDot = function (target, k) {
    if (!jsAnimDots.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top + 90,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 40,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            if (target.classList.contains('over')) {
            } else {
                setTimeout(() => {
                    target.classList.add('over');
                    var typed = new Typed(target, {
                        strings: [`${objDots[k]}`],
                        typeSpeed: 40,
                        showCursor: false,
                        startDelay: k * 120,
                    });
                }, 60)
            }


        } else {
            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        }
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    jsAnimDots.forEach((el, k) => {
        setTimeout(() => {
            VisibleDot(el, k);
        }, k * 30)
    })

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

jsAnimDots.forEach((el, k) => {
    setTimeout(() => {
        VisibleDot(el, k);
    }, k * 30)
});

//dots
//blocks

let jsAnimSqr = [...document.querySelectorAll('.block')];
var VisibleSqr = function (target, k) {
    if (!jsAnimSqr.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top + 90,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 40,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            setTimeout(() => {
                [...target.querySelectorAll('div')].forEach((bl) => {
                    bl.classList.add('done');

                });
                target.classList.add('animed');
                if (document.querySelector('.cultures-page')) {
                    document.querySelector('.cultures-page').classList.add('move-line');
                }

            }, 60)


        } else {
            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        }
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    jsAnimSqr.forEach((el, k) => {
        setTimeout(() => {
            VisibleSqr(el, k);
        }, k * 30)
    })

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

jsAnimSqr.forEach((el, k) => {
    setTimeout(() => {
        VisibleSqr(el, k);
    }, k * 30)
});

//blocks
//function grid width cultures page

let gridBlocks = [...document.querySelectorAll('.grid-js')];
let start = 1;

function getGridBlocksStart() {
    if (gridBlocks.length) {
        gridBlocks.forEach((bl) => {
            let width = Number(bl.dataset.param);
            bl.style.setProperty('--wi', width);

            let startPos = start;
            bl.style.setProperty('--s', startPos);

            let endPos = startPos + width;
            bl.style.setProperty('--e', endPos);
            start = endPos;
        })
    }
}

getGridBlocksStart();

//function grid width

new fullpage('#fullpage', {
    //options here

    anchors: ['company', 'target', 'production', 'nutrition', 'partners'],
    menu: '.menu-links',
    navigation: true,
    // autoScrolling: true,
    // scrollHorizontally: true,
    // verticalCentered: false,
    css3: true,

    responsiveWidth: 850,
    afterLoad: function () {
        dotText = [...document.querySelectorAll('.section.active .dot')];
        dotText.forEach((it, k) => {
            let dat = it.dataset.dots;
            if (it.classList.contains('done')) {


            } else {
                var typed = new Typed(it, {
                    strings: [`${objDots[dat]}`],
                    typeSpeed: 40,
                    showCursor: false,
                    startDelay: k * 200,
                });
                it.classList.add('done');
            }
        });
        let secBlocks = [...document.querySelectorAll('.section.active .anim-blocks > *')];
        let secBlock = document.querySelector('.section.active .anim-blocks');
        secBlock.classList.add('animed');
        secBlocks.forEach((bl, l) => {
            setTimeout(() => {
                bl.classList.add('done');
            }, l * 70);

        });
        let secBlockMain = document.querySelector('.section.active');
        secBlockMain.classList.add('doned');
        let blAnim = [...document.querySelectorAll('.section.active .bl-anim')];
        blAnim.forEach((blm, k) => {
            setTimeout(() => {
                blm.classList.add('doned');
            }, k * 60)
        });
        let prodBl = [...document.querySelectorAll('.section.active .hero-prod__item')];

        prodBl.forEach((bl, k) => {
            setTimeout(() => {
                bl.classList.remove('animed');
            }, k * 60)
        });
        let nutLinks = [...document.querySelectorAll('.section.active .link')];

        nutLinks.forEach((bl, k) => {
            setTimeout(() => {
                bl.classList.add('doned');
            }, k * 90)
        });
        let nutFaded = [...document.querySelectorAll('.section.active .fadeT')];

        nutFaded.forEach((bl, k) => {
            setTimeout(() => {
                bl.classList.add('doned');
            }, k * 90)
        })

    }
});


//full scroll script
//let anim functions
let jsAnimBlocks = [...document.querySelectorAll('.js-anim')];
var Visible3 = function (target) {
    if (!jsAnimBlocks.length) {

    } else {

        var targetPosition = {
                top: window.pageYOffset + target.getBoundingClientRect().top + 90,
                left: window.pageXOffset + target.getBoundingClientRect().left,
                right: window.pageXOffset + target.getBoundingClientRect().right,
                bottom: window.pageYOffset + target.getBoundingClientRect().bottom
            },
            // Получаем позиции окна
            windowPosition = {
                top: window.pageYOffset + 40,
                left: window.pageXOffset,
                right: window.pageXOffset + document.documentElement.clientWidth,
                bottom: window.pageYOffset + document.documentElement.clientHeight
            };

        if (targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
            targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
            targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
            targetPosition.left < windowPosition.right) { // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
            // Если элемент полностью видно, то запускаем следующий код
            setTimeout(() => {
                target.classList.add('anim-start');
            }, 60)


        } else {
            // Если элемент не видно, то запускаем этот код
            // document.querySelector('.mobile-header-contacts').classList.remove('unvisible');
        }
    }
    // Все позиции элемента

};


// Запускаем функцию при прокрутке страницы
window.addEventListener('scroll', function () {
    jsAnimBlocks.forEach((el, k) => {
        setTimeout(() => {
            Visible3(el);
        }, k * 30)
    })

});

// А также запустим функцию сразу. А то вдруг, элемент изначально видно

jsAnimBlocks.forEach((el, k) => {
    setTimeout(() => {
        Visible3(el);
    }, k * 30)
});


//let anim functions


//header

window.onscroll = function () {
    scrollFunction();

};

function checkScrollDir() {
    newValue = window.pageYOffset;
    // console.log(window.pageYOffset + ' pageoffset')
    if (window.innerWidth > 1050) {
        document.documentElement.scrollTop;
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


//dots text writing


//dots text writing
//click events

//modals
let modBtn = [...document.querySelectorAll('.btn-mod')];

function openModal() {
    if (modBtn.length) {
        modBtn.forEach((btn, k) => {

            let dataMod = btn.dataset.modal;
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                let modal = document.querySelector(`.modal-window[data-type="${dataMod}"]`);
                modal.classList.add('visible');
                if (document.querySelector('#fullpage')) {
                    fullpage_api.setAllowScrolling(false);
                    fullpage_api.setKeyboardScrolling(false);

                }
                document.querySelector('body').classList.add('no-scroll');
            });

        })
    }
}

openModal();
let modBack = [...document.querySelectorAll('.modal-backplate')];
let modClose = [...document.querySelectorAll('.modal-close')];

function closeModal() {
    if (modBack.length) {
        modBack.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.modal-window').classList.remove('visible');
                document.querySelector('body').classList.remove('no-scroll');

                if (document.querySelector('#fullpage')) {
                    fullpage_api.setAllowScrolling(true);
                    fullpage_api.setKeyboardScrolling(true);

                }
            })
        });
        modClose.forEach((btn) => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                btn.closest('.modal-window').classList.remove('visible');
                document.querySelector('body').classList.remove('no-scroll');

                if (document.querySelector('#fullpage')) {
                    fullpage_api.setAllowScrolling(true);
                    fullpage_api.setKeyboardScrolling(true);

                }
            })
        })
    }
}

closeModal();

//modals

//tabs

let tabBtn = [...document.querySelectorAll('.tab-btn')];

function changeTab() {
    if (!tabBtn.length) {

    } else {
        tabBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                if (btn.classList.contains('active')) {

                } else {
                    tabBtn.forEach((btn2) => {
                        btn2.classList.remove('active');
                    });
                    btn.classList.add('active');
                    [...document.querySelectorAll('.item-tab')].forEach((tab, m) => {
                        if (m === k) {
                            tab.classList.add('active');
                        } else {
                            tab.classList.remove('active');

                        }
                    })
                }
            })
        })
    }
}

changeTab();
//tabs
//click events
//sliders

//prod slider

//insta gallery
let prodGallery = [...document.querySelectorAll('.product-slider.js-slider')];

function prodSlider() {
    if (!prodGallery.length) {

    } else {
        prodGallery.forEach((sld) => {
            let sldCont = sld.querySelector('.product-slider__content');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 'auto',
                slidesPerGroup: 1,
                speed: 600,

                autoplay: false,
                spaceBetween: 20,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                breakpoints: {
                    // when window width is >= 320px

                    // when window width is >= 480px
                    920: {
                        slidesPerView: 2,
                    },

                }


            });
        })
    }
}

prodSlider();

//insta gallery
//prod slider

//sliders

