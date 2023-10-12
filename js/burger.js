// burger menu
//--------------------------------------------------------------------------------------

export const body = document.querySelector('body');
const burger = document.querySelector('.menu-burger');
const menuList = document.querySelector('.menu__list');
const burgerLine = document.querySelectorAll('.menu-burger__line');
export const overlay = document.querySelector('.overlay');
const menuLink = document.querySelectorAll('.menu__link');
const logo = document.querySelector('.header-logo');
const header = document.querySelector('.header__inner');

burger.addEventListener('click', e => {
  e.preventDefault();
  menuList.classList.toggle('menu--active');
  body.classList.toggle('body-menu--active');
  if (document.documentElement.scrollWidth < 550) {
    overlay.style.height = document.documentElement.scrollHeight + 'px';
    overlay.classList.toggle('overla--active');
  }
  logo.classList.toggle('header-logo--active');
  burgerLine.forEach(item => {
    item.classList.toggle('burger-line--active');
  });
});

overlay.addEventListener('click', e => {
  if (menuList.classList.contains('menu--active') && e.target.classList.contains('overlay')) {
    e.preventDefault();
    hideBurger();
  }
});

header.addEventListener('click', e => {
  if (e.target === header && menuList.classList.contains('menu--active')) {
    hideBurger();
  }
});

menuLink.forEach(item => {
  item.addEventListener('click', e => {
    hideBurger();
  });
});

function hideBurger() {
  menuList.classList.remove('menu--active');
  body.classList.remove('body-menu--active');
  if (document.documentElement.scrollWidth < 550) {
    overlay.classList.toggle('overla--active');
  }
  logo.classList.toggle('header-logo--active');
  burgerLine.forEach(item => {
    item.classList.remove('burger-line--active');
  });
}

//--------------------------------------------------------------------------------------