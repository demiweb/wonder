function helloConsole() {
    const staticText = 'Made with ❤️ by Demiweb';
    const staticUrl = '> https://demiweb.pro/';
    const hello = [`\n %c ${staticText} %c ${staticUrl} %c %c \n\n`, 'border: 1px solid #000;color: #fff; background: #3d2579; padding:5px 0;', 'color: #fff; background: #ffd800; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];

    if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
        window.console.log(`${staticText} - ${staticUrl}`);
    } else if (navigator.userAgent.indexOf("Chrome") != -1) {
        let title = '%c';

        for (let i = 0; i < 12; i++) {
            title += ' ';
        }

        window.console.log.apply(console, hello);
        window.console.log(title, 'font: 36px/100% sans-serif; background-repeat: no-repeat; background-size: 100%; background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDYwMS4xNDQ3MSAxMzkuNjk5MiIKICAgaGVpZ2h0PSIxMzkiCiAgIHdpZHRoPSI2MDEiPgogIDxkZWZzCiAgICAgaWQ9ImRlZnMyIiAvPgogIDxtZXRhZGF0YQogICAgIGlkPSJtZXRhZGF0YTUiPgogICAgPHJkZjpSREY+CiAgICAgIDxjYzpXb3JrCiAgICAgICAgIHJkZjphYm91dD0iIj4KICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4KICAgICAgICA8ZGM6dHlwZQogICAgICAgICAgIHJkZjpyZXNvdXJjZT0iaHR0cDovL3B1cmwub3JnL2RjL2RjbWl0eXBlL1N0aWxsSW1hZ2UiIC8+CiAgICAgICAgPGRjOnRpdGxlPjwvZGM6dGl0bGU+CiAgICAgIDwvY2M6V29yaz4KICAgIDwvcmRmOlJERj4KICA8L21ldGFkYXRhPgogIDxnCiAgICAgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg2LjQyMzU1LC04My41MTk0NDQpIgogICAgIGlkPSJsYXllcjEiPgogICAgPGcKICAgICAgIHRyYW5zZm9ybT0ibWF0cml4KDAuMjY0NTgzMzMsMCwwLDAuMjY0NTgzMzMsLTI2NC4zMSwtMjIxLjYzMTM5KSIKICAgICAgIGlkPSJnODg4Ij4KICAgICAgPGcKICAgICAgICAgaWQ9Imc4MjkiPgoJPHBhdGgKICAgZD0ibSA2NDcuOTQ5LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjcgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OSB2IDYxLjY4MyBoIC0xNDguNTggdiA2Ni4xODcgaCAxNzEuMDkxIHYgNjEuNjg0IEggNjQ3Ljk0OSBaIgogICBpZD0icGF0aDgxNSIgLz4KCgk8cGF0aAogICBkPSJtIDk0OS42MDksMTQ2OS4zOTcgdiAtMzE1LjE3IGggNzQuNzQgbCA4Mi44NDQsMTMzLjI3MSA4Mi44NDQsLTEzMy4yNzEgaCA3NC43NDEgdiAzMTUuMTcgaCAtNjguODg3IHYgLTIwNS43NjIgbCAtODguNjk4LDEzNC42MjMgaCAtMS44MDEgbCAtODcuNzk3LC0xMzMuMjcxIHYgMjA0LjQxIHoiCiAgIGlkPSJwYXRoODE3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTM0My41NjgsMTQ2OS4zOTcgdiAtMzE1LjE3IGggNjkuMzM4IHYgMzE1LjE3IHoiCiAgIGlkPSJwYXRoODE5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTU3NC45OTMsMTQ3MS42NDcgLTEwNy42MDcsLTMxNy40MiBoIDc0LjI4OCBsIDY1LjI4NiwyMTMuNDE0IDcwLjY4OCwtMjE0LjMxNSBoIDU5LjQzMiBsIDcwLjY4OCwyMTQuMzE1IDY1LjI4MiwtMjEzLjQxNCBoIDcyLjQ5MyBsIC0xMDcuNjEsMzE3LjQyIGggLTYwLjMzIGwgLTcxLjEzOCwtMjA2LjIxMSAtNzEuMTQsMjA2LjIxMSB6IgogICBpZD0icGF0aDgyMSIgLz4KCgk8cGF0aAogICBkPSJtIDE5OTYuODY2LDE0NjkuMzk3IHYgLTMxNS4xNyBoIDIzNy43MjYgdiA2MS42ODMgaCAtMTY4Ljg0IHYgNjMuOTM0IGggMTQ4LjU3OCB2IDYxLjY4MyBoIC0xNDguNTc4IHYgNjYuMTg3IGggMTcxLjA5MiB2IDYxLjY4NCBoIC0yMzkuOTc4IHoiCiAgIGlkPSJwYXRoODIzIiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjI5OC41MjYsMTQ2OS4zOTcgdiAtMzE1LjE3IGggMTQ2LjMyOCBjIDM2LjMxNiwwIDYzLjc4MSw5LjMwOCA4Mi4zOTYsMjcuOTE1IDE0LjQwNywxNC40MDcgMjEuNjExLDMyLjU3MSAyMS42MTEsNTQuNDc5IDAsMjkuNzE2IC0xMy44MSw1Mi4zODEgLTQxLjQyMyw2Ny45ODUgMTkuNTA4LDcuNTA3IDM0LjIxOSwxNy4zMzUgNDQuMTIyLDI5LjQ5MSA5LjkwNiwxMi4xNTYgMTQuODU3LDI4LjQ0MyAxNC44NTcsNDguODUyIDAsMjguMjE3IC0xMC41MDksNDkuNjgyIC0zMS41MTYsNjQuMzgzIC0yMS4wMTUsMTQuNzExIC00OS44MjksMjIuMDY0IC04Ni40NDYsMjIuMDY0IGggLTE0OS45MjkgeiBtIDY3LjUzOCwtMTg3Ljc1MSBoIDYzLjkzNCBjIDMzLjMxNiwwIDQ5Ljk3NywtMTEuNDA0IDQ5Ljk3NywtMzQuMjE4IDAsLTEwLjUwNCAtMy45MDYsLTE4LjUzMSAtMTEuNzA5LC0yNC4wODggLTcuODA3LC01LjU1MSAtMTkuMDY0LC04LjMzIC0zMy43NjYsLTguMzMgaCAtNjguNDM2IHogbSAwLDEyNi45NjggaCA4Mi4zOTMgYyAzMi43MTQsMCA0OS4wNzYsLTExLjcwNyA0OS4wNzYsLTM1LjExOSAwLC0yMi44MDggLTE3LjEwOSwtMzQuMjE5IC01MS4zMjcsLTM0LjIxOSBoIC04MC4xNDIgeiIKICAgaWQ9InBhdGg4MjUiIC8+CgoJPHBhdGgKICAgZD0ibSA1MzkuNDQyLDExOTkuMDI2IGMgLTMxLjIyMiwtMjkuODYzIC03MS40NDEsLTQ0Ljc5OCAtMTIwLjY2NiwtNDQuNzk4IEggMjk1Ljg2MiB2IDE5MC43NjUgaCA2OS4zMzYgdiAtMTI4LjE4MiBoIDUzLjU3OCBjIDI4LjIxLDAgNTEuMTAzLDguODU3IDY4LjY2MiwyNi41NjQgMTcuNTYsMTcuNzE1IDI2LjMzOSw0MC41MjMgMjYuMzM5LDY4LjQzNyAwLDI4LjIxOCAtOC43MDksNTEuMTAyIC0yNi4xMTMsNjguNjYyIC0xNy40MTIsMTcuNTU5IC00MC4zNzUsMjYuMzM4IC02OC44ODgsMjYuMzM4IGggLTUzLjU3OCB2IC0wLjY1NCBoIC02OS4zMzYgdiA2My4yNCBoIDEyMi45MTUgYyA0OC45MjIsMCA4OS4wNzEsLTE1LjAwOCAxMjAuNDQsLTQ1LjAyNSAzMS4zNjIsLTMwLjAxMiA0Ny4wNTEsLTY3LjUzNiA0Ny4wNTEsLTExMi41NjEgMCwtNDUuMzE5IC0xNS42MTIsLTgyLjkxNiAtNDYuODI2LC0xMTIuNzg2IHoiCiAgIGlkPSJwYXRoODI3IiAvPgoKPC9nPgogICAgICA8ZwogICAgICAgICBpZD0iZzg1NyI+Cgk8cGF0aAogICBkPSJtIDI5NC4zNzQsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC44OSB2IDE0Ni41OSB6IgogICBpZD0icGF0aDgzMSIgLz4KCgk8cGF0aAogICBkPSJtIDM4Ny45NzksMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjMgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IEwgMzk4LjQ1LDE1NDguNTU2IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDgzMyIgLz4KCgk8cGF0aAogICBkPSJNIDYzMS43MzYsMTY3OC44MSBWIDE1NDIuMjczIEggNTgwLjY0IHYgLTEwLjA1MyBoIDExMy4wODQgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDgzNSIgLz4KCgk8cGF0aAogICBkPSJtIDc2NC41MDUsMTY3OC44MSB2IC0xNDYuNTkgaCAxMDQuMjg5IHYgMTAuMDUzIGggLTkzLjM5OSB2IDU3LjU5IGggODMuOTc2IHYgMTAuMDUxIGggLTgzLjk3NiB2IDU4Ljg0NiBoIDk0LjQ0NiB2IDEwLjA1MSBIIDc2NC41MDUgWiIKICAgaWQ9InBhdGg4MzciIC8+CgoJPHBhdGgKICAgZD0ibSA5NDIuNTA2LDE2NzguODEgdiAtMTQ2LjU5IGggNjEuNTY4IGMgMTcuODY5LDAgMzEuNjIyLDQuODE4IDQxLjI1NSwxNC40NTEgNy4zOTgsNy40MDIgMTEuMDk4LDE2LjYxNSAxMS4wOTgsMjcuNjQzIDAsMTEuODY3IC0zLjkxLDIxLjM1OSAtMTEuNzI3LDI4LjQ4IC03LjgyLDcuMTE5IC0xOC4yMTksMTEuNTkgLTMxLjIwMiwxMy40MDIgbCA0OC4zNzUsNjIuNjEzIGggLTEzLjgyMSBsIC00Ni43LC02MC43MyBoIC00Ny45NTYgdiA2MC43MyBoIC0xMC44OSB6IG0gMTAuODksLTcwLjU3MyBoIDQ5LjQyMSBjIDEyLjU2NSwwIDIyLjgyNywtMy4wMzUgMzAuNzg1LC05LjEwNyA3Ljk1OCwtNi4wNzQgMTEuOTM3LC0xNC4zNDYgMTEuOTM3LC0yNC44MTYgMCwtOS45MSAtMy43MDIsLTE3LjcyOSAtMTEuMSwtMjMuNDU1IC03LjQwMiwtNS43MjMgLTE3LjczMiwtOC41ODYgLTMwLjk5MywtOC41ODYgaCAtNTAuMDUgeiIKICAgaWQ9InBhdGg4MzkiIC8+CgoJPHBhdGgKICAgZD0ibSAxMTMxLjYwNiwxNjc4LjgxIHYgLTE0Ni41OSBoIDEwLjI2MiBsIDEwMS4xNDYsMTI3LjUzNSBWIDE1MzIuMjIgaCAxMC40NyB2IDE0Ni41OSBoIC04LjE2NyBsIC0xMDMuMjQxLC0xMzAuMjU0IHYgMTMwLjI1NCB6IgogICBpZD0icGF0aDg0MSIgLz4KCgk8cGF0aAogICBkPSJtIDEzMjIuMTcyLDE2NzguODEgNjguMjcsLTE0Ny42MzUgaCAxMC40NzEgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzOCBsIC0xOC42MzYsLTQxLjA0NSBoIC04Ni40ODkgbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU0LC01MC44ODUgaCA3Ny4yNzUgbCAtMzguNTM0LC04NC44MTQgeiIKICAgaWQ9InBhdGg4NDMiIC8+CgoJPHBhdGgKICAgZD0ibSAxNTc4LjQ5NSwxNjc4LjgxIHYgLTEzNi41MzcgaCAtNTEuMDk5IHYgLTEwLjA1MyBoIDExMy4wODUgdiAxMC4wNTMgaCAtNTEuMDk3IHYgMTM2LjUzNyB6IgogICBpZD0icGF0aDg0NSIgLz4KCgk8cGF0aAogICBkPSJtIDE3MTIuNzI4LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTQ2LjU5IHoiCiAgIGlkPSJwYXRoODQ3IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMTkyNi41NCwxNjU4LjkxNSBjIC0xMy44MjYsMTQuOTQxIC0zMS41NTYsMjIuNDA4IC01My4xOTIsMjIuNDA4IC0yMS42NDMsMCAtMzkuMzAxLC03LjQzNCAtNTIuOTgzLC0yMi4zMDMgLTEzLjY4NCwtMTQuODY3IC0yMC41MjIsLTMyLjcwMSAtMjAuNTIyLC01My41MDQgMCwtMjAuNjYyIDYuOTEsLTM4LjQ2MSAyMC43MzEsLTUzLjQwMiAxMy44MiwtMTQuOTM4IDMxLjU1MSwtMjIuNDA2IDUzLjE5MywtMjIuNDA2IDIxLjYzNywwIDM5LjI5Niw3LjQzNCA1Mi45NzksMjIuMzAzIDEzLjY4MywxNC44NjkgMjAuNTI1LDMyLjcwMyAyMC41MjUsNTMuNTA2IDAsMjAuNjYyIC02LjkxMiwzOC40NjIgLTIwLjczMSw1My4zOTggeiBtIC05Ny40ODMsLTYuNzAxIGMgMTEuOTM2LDEyLjg0OCAyNi44MzYsMTkuMjcgNDQuNzEsMTkuMjcgMTcuODY4LDAgMzIuNywtNi4zNTIgNDQuNTAxLC0xOS4wNTkgMTEuNzk0LC0xMi43MDMgMTcuNjk0LC0yOC4zNCAxNy42OTQsLTQ2LjkwOCAwLC0xOC4yODkgLTUuOTY5LC0zMy44NTQgLTE3LjkwNCwtNDYuNjk5IC0xMS45MzgsLTEyLjg0NCAtMjYuODQyLC0xOS4yNjggLTQ0LjcxLC0xOS4yNjggLTE3Ljg3NSwwIC0zMi43MDcsNi4zNTUgLTQ0LjUwMiwxOS4wNTcgLTExLjc5OSwxMi43MDUgLTE3LjY5MywyOC4zNDQgLTE3LjY5Myw0Ni45MSAtMTBlLTQsMTguMjkxIDUuOTY1LDMzLjg1NSAxNy45MDQsNDYuNjk3IHoiCiAgIGlkPSJwYXRoODQ5IiAvPgoKCTxwYXRoCiAgIGQ9Im0gMjAyMi4wMjgsMTY3OC44MSB2IC0xNDYuNTkgaCAxMC4yNjEgbCAxMDEuMTQ2LDEyNy41MzUgViAxNTMyLjIyIGggMTAuNDcxIHYgMTQ2LjU5IGggLTguMTY3IGwgLTEwMy4yNCwtMTMwLjI1NCB2IDEzMC4yNTQgeiIKICAgaWQ9InBhdGg4NTEiIC8+CgoJPHBhdGgKICAgZD0ibSAyMjEyLjU5MywxNjc4LjgxIDY4LjI3LC0xNDcuNjM1IGggMTAuNDcgbCA2OC4yNywxNDcuNjM1IGggLTExLjkzNSBsIC0xOC42MzksLTQxLjA0NSBoIC04Ni40ODggbCAtMTguNjM5LDQxLjA0NSB6IG0gMzQuNTU2LC01MC44ODUgaCA3Ny4yNzEgbCAtMzguNTMzLC04NC44MTQgeiIKICAgaWQ9InBhdGg4NTMiIC8+CgoJPHBhdGgKICAgZD0ibSAyNDI4LjI5LDE2NzguODEgdiAtMTQ2LjU5IGggMTAuODkxIHYgMTM2LjUzOSBoIDg2LjA2NSB2IDEwLjA1MSB6IgogICBpZD0icGF0aDg1NSIgLz4KCjwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=);');
    } else {
        const title = 'demiweb';
        const banner = `\n%c${title.split('').join('%c %c')}%c\n`;
        const styler = [];

        const symbol = [
            'font: 32px/1.5 Helvetica, Arial, sans-serif',
            'text-transform: uppercase',
            'color: #fff',
            'background-color: #ffd800',
            'padding: 4px 14px',
        ].join(';');

        title.split('').forEach(() => {
            styler.push(symbol);
            styler.push('');
        });

        window.console.log(`${staticText} - ${staticUrl}`);
        window.console.log(banner, ...styler);
    }
}

helloConsole();

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
let homePartners = [...document.querySelectorAll('.home .partners-block')];
function removePartnersClass() {
    if (homePartners.length) {
        homePartners.forEach((btn) => {
            btn.classList.remove('partners-block');
        })
    }
}


// Wrap every letter in a span
var textWrapper = document.querySelector('.mission-video p');

function startTextHide() {
    if (textWrapper) {
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter' style='opacity: 0'>$&</span>");
        anime.timeline({loop: false})
            .add({
                targets: '.mission-video p .letter',
                opacity: [0, 1],
                easing: "easeInOutQuad",
                duration: 850,
                delay: (el, i) => 150 * (i + 1)
            });
    }
}

startTextHide();


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

let textBigWords = document.querySelector('.big-words');

function wrapWords() {
    if (textBigWords) {
        textBigWords.innerHTML = textBigWords.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    }
}

wrapWords();

// Запускаем функцию при прокрутке страницы
let circleRotate = document.querySelector('.about-img .about-img__cont > svg');
window.addEventListener('scroll', function () {
    jsAnimDots.forEach((el, k) => {
        setTimeout(() => {
            VisibleDot(el, k);
        }, k * 30)
    });

    rotateCircle();


});

function rotateCircle() {
    if (circleRotate) {
        let pageO = window.pageYOffset;
        let rot = pageO / 8;
        circleRotate.style.setProperty(`transform`, `translate(-50%, -50%) rotate(${rot}deg`)

    }
};

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

$('.anim-start .company-stat__text ul li p small').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//seo btn

let seoBtn = [...document.querySelectorAll('.seo-btn')];

function controlSeo() {
    if (seoBtn.length) {
        seoBtn.forEach((btn) => {
            let closes = btn.closest('.seo-block').querySelector('.seo-block__content');
            let hide = btn.dataset.hide;
            let visible = btn.dataset.visible;
            btn.addEventListener('click', () => {
                if (closes.classList.contains('visible')) {
                    closes.classList.remove('visible');
                    btn.innerHTML = visible;

                } else {
                    closes.classList.add('visible');
                    btn.innerHTML = hide;
                }

            })
        })
    }
}

controlSeo();
//seo btn

//blog btn

let blogBtn = [...document.querySelectorAll('.blog-btn')];

function blogFilterOpen() {
    if (blogBtn.length) {
        blogBtn.forEach((btn) => {
            let cl = btn.closest('.blog__left');
            let close = btn.closest('.blog__left').querySelector('.close-blog');
            let block = btn.closest('.blog__left').querySelector('.blog__filter');
            btn.addEventListener('click', () => {
                block.classList.toggle('open');
                document.body.classList.toggle('no-scroll');
            });
            close.addEventListener('click', () => {
                block.classList.toggle('open');
                document.body.classList.toggle('no-scroll');
            })
        })
    }
}

blogFilterOpen();
//blog btn
//modals
let modBtn = [...document.querySelectorAll('.btn-mod')];

function openModal() {
    if (modBtn.length) {
        modBtn.forEach((btn, k) => {

            let dataMod = btn.dataset.modal;
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                checkVisibleMod();
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

document.addEventListener('wpcf7mailsent', function (event) {
    checkVisibleMod();
    let modal = document.querySelector(`.modal-window[data-type="thanks"]`);
    modal.classList.add('visible');
    if (document.querySelector('#fullpage')) {
        fullpage_api.setAllowScrolling(false);
        fullpage_api.setKeyboardScrolling(false);

    }
    document.querySelector('body').classList.add('no-scroll');
}, false);


function checkVisibleMod() {
    if (document.querySelector('.modal-window.visible')) {
        document.querySelector('.modal-window.visible').classList.remove('visible');
        document.querySelector('body').classList.remove('no-scroll');

    }
}

openModal();
let modBack = [...document.querySelectorAll('.modal-backplate')];
let modClose = [...document.querySelectorAll('.modal-close')];
let modClose2 = [...document.querySelectorAll('.mod-call.close')];

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
        });
        modClose2.forEach((btn) => {
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

let accordBtn = [...document.querySelectorAll('.accord-btn')];

function mobileAccord() {
    if (accordBtn.length) {
        accordBtn.forEach((btn, k) => {
            btn.addEventListener('click', () => {
                tabBtn[k].click();


                if (btn.closest('.item-tab').classList.contains('visible')) {
                    btn.closest('.item-tab').classList.remove('visible');

                } else {
                    accordBtn.forEach((btn2, l) => {
                        if (l === k) {
                            btn2.closest('.item-tab').classList.add('visible');
                        } else {
                            btn2.closest('.item-tab').classList.remove('visible');
                        }
                    })
                }


            })
        })
    }
}

mobileAccord();
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
//prod slider2
let prodGallery2 = [...document.querySelectorAll('.article-prod__sl.js-slider')];

function prodSlider2() {
    if (!prodGallery2.length) {

    } else {
        prodGallery2.forEach((sld) => {
            let sldCont = sld.querySelector('.product-slider__content');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
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
                    850: {
                        slidesPerView: 'auto',
                    },

                }


            });
        })
    }
}

prodSlider2();

//prod slider2
//prod slider3
let prodGallery3 = [...document.querySelectorAll('.article-prod__ns.js-slider')];

function prodSlider3() {
    if (!prodGallery3.length) {

    } else {
        prodGallery3.forEach((sld) => {
            let sldCont = sld.querySelector('.product-slider__content');
            let sldNext = sld.querySelector('.slides-btn--next');
            let sldPrev = sld.querySelector('.slides-btn--prev');

            const swiper2 = new Swiper(sldCont, {
                // Optional parameters
                loop: false,
                slidesPerView: 1,
                slidesPerGroup: 1,
                speed: 600,

                autoplay: false,
                spaceBetween: 0,
                navigation: {
                    nextEl: sldNext,
                    prevEl: sldPrev,
                },
                breakpoints: {
                    650: {
                        slidesPerView: 2,
                    },
                    // when window width is >= 320px

                    // when window width is >= 480px
                    850: {
                        slidesPerView: 'auto',
                    },

                }


            });
        })
    }
}

prodSlider3();

//prod slider3

//sliders

//open men

let subLink = [...document.querySelectorAll('.header-menu .menu-item-has-children > a')];

function openSubMenu() {
    if (subLink.length) {
        subLink.forEach((btn) => {
            if (window.innerWidth > 610) {

            } else {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    e.preventDefault();
                    btn.closest('li').classList.toggle('vis');
                })
            }

        })
    }
}

openSubMenu();

//open men

