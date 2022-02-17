'use strict';

/* MENU */

const menuToggler = document.querySelector('.menu-toggler');
const triangle = document.querySelector('.triangle');
const menu = document.querySelector('.navbar-links');
menuToggler.addEventListener('click', () => {
    triangle.classList.toggle('hide');
    menu.classList.toggle('hide');
});