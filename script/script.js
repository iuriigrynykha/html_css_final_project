let menu = document.querySelector('.expanded-main-menu');
let buttonState = document.querySelector('.menu-icon');
function menuExpand() {
    buttonState.classList.toggle('menu-icon-open');
    menu.classList.toggle('menu-disabled');
}