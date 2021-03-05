'use strict';

const menu = document.querySelector('.menu');
const openMenuBtn = document.querySelector('.page-header__button');
const closeMenuBtn = document.querySelector('.page-header__button--close-menu');
const menuListDesktop = document.querySelector('.menu__list--desktop');
const menuListMobile = document.querySelector('.menu__list--mobile');

const openMenu = function () {
    if (menu.classList.contains('animate__fadeOutRightBig')) {
        menu.classList.remove('animate__fadeOutRightBig');
    }

    menu.classList.add('animate__fadeInRightBig');
    menu.classList.add('menu--opened');
};

const closeMenu = function () {
    menu.classList.remove('animate__fadeInRightBig');
    menu.classList.add('animate__fadeOutRightBig');
    setTimeout(() => menu.classList.remove('menu--opened'), 1000);
};

const onWindowResize = function () {
    if (menu.classList.contains('menu--opened')) {
        menu.classList.remove('menu--opened');
    } else if (menu.classList.contains('animate__fadeInRightBig')) {
        menu.classList.remove('animate__fadeInRightBig');
    } else if (menu.classList.contains('animate__fadeOutRightBig')) {
        menu.classList.remove('animate__fadeOutRightBig');
    }

    if (window.innerWidth > 1024) {
        menu.classList.remove('animate__fadeOutRightBig');
    } else {
        menu.classList.add('animate__fadeOutRightBig');
    }
};

const onMenuClick = function (evt, menuElement) {
    const currentItem = evt.target.parentNode;
    const menuItems = menuElement.querySelectorAll('.menu__item');

    if (currentItem.nodeName != 'LI') {
        return;
    }

    menuItems.forEach((it) => {
        if (it.classList.contains('menu__item--active')) {
            it.classList.remove('menu__item--active');
        }
    });
    
    currentItem.classList.add('menu__item--active');
};

onWindowResize();
window.addEventListener('resize', onWindowResize);
openMenuBtn.addEventListener('click', openMenu);
closeMenuBtn.addEventListener('click', closeMenu);
menuListDesktop.addEventListener('click', (evt) => {
    onMenuClick(evt, menuListDesktop);
});
menuListMobile.addEventListener('click', (evt) => {
    onMenuClick(evt, menuListMobile);
    closeMenu();
});
