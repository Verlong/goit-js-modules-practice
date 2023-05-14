// JavaScript код для додаткової функціональності

// Перемикач теми
const themeSwitcher = document.querySelector('.theme-switcher');
themeSwitcher.addEventListener('click', toggleTheme);

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
}

// Бургер-меню
const burgerMenu = document.querySelector('.burger-menu');
const menuOverlay = document.querySelector('.menu-overlay');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', toggleMenu);
menuOverlay.addEventListener('click', toggleMenu);

function toggleMenu() {
  burgerMenu.classList.toggle('open');
  menuOverlay.classList.toggle('open');
  menu.classList.toggle('open');
}

// Обробники подій для посилань в навігації
const homeLink = document.querySelector('.desktop-nav li:first-child a');
const shoppingListLink = document.querySelector('.desktop-nav li:last-child a');
const mobileHomeLink = document.querySelector('.mobile-nav li:first-child a');
const mobileShoppingListLink = document.querySelector(
  '.mobile-nav li:last-child a'
);

homeLink.addEventListener('click', openHomePage);
shoppingListLink.addEventListener('click', openShoppingListPage);
mobileHomeLink.addEventListener('click', openHomePage);
mobileShoppingListLink.addEventListener('click', openShoppingListPage);

function openHomePage(event) {
  event.preventDefault();
  // Ваш код для відкриття головної сторінки
}

function openShoppingListPage(event) {
  event.preventDefault();
  // Ваш код для відкриття сторінки з переліком книг
}
