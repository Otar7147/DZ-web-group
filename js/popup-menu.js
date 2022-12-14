'use strict';
const menuWrapper = document.querySelector('.popup-menu');
const menuList = document.querySelector('.popup-menu__list');
const menuButton = document.querySelector('.popup-menu__button');

function showMenu() {
   menuList.classList.toggle('hide');
}

function closeMenu(evt) {
    let insideMenu = menuWrapper.contains(evt.target);
    if (!insideMenu) {
    menuList.classList.add('hide');
    }
}

menuButton.addEventListener('click', showMenu);
document.addEventListener('click', closeMenu);

