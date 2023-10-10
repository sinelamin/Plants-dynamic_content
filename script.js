'use strict';

import { data } from './dataService.js';

// burger menu
//--------------------------------------------------------------------------------------

const body = document.querySelector('body');
const burger = document.querySelector('.menu-burger');
const menuList = document.querySelector('.menu__list');
const burgerLine = document.querySelectorAll('.menu-burger__line');
const overlay = document.querySelector('.overlay');
const menuLink = document.querySelectorAll('.menu__link');
const logo = document.querySelector('.header-logo');
const header = document.querySelector('.header__inner');

burger.addEventListener('click', e => {
  e.preventDefault();
  menuList.classList.toggle('menu--active');
  body.classList.toggle('body-menu--active');
  overlay.style.height = document.documentElement.scrollHeight + 'px';
  overlay.classList.toggle('overla--active');
  logo.classList.toggle('header-logo--active');
  burgerLine.forEach(item => {
    item.classList.toggle('burger-line--active');
  });
});

overlay.addEventListener('click', e => {
  if (e.target.classList.contains('overlay')) {
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
  overlay.classList.toggle('overla--active');
  logo.classList.toggle('header-logo--active');
  burgerLine.forEach(item => {
    item.classList.remove('burger-line--active');
  });
}

//--------------------------------------------------------------------------------------


//Service create cards JS
//--------------------------------------------------------------------------------------

const serviceCardsBlock = document.querySelector('.service-body');

function createCards(service) {
  const newCard = document.createElement('div');
  const newCardImg = document.createElement('img');
  const newCardTitle = document.createElement('h5');
  const newCardDescr = document.createElement('p');

  newCard.classList.add('service-card');
  newCardImg.classList.add('service-card__img');
  newCardTitle.classList.add('service-card__title');
  newCardDescr.classList.add('service-card__decriptione');

  newCard.append(newCardImg);
  newCard.append(newCardTitle);
  newCard.append(newCardDescr);

  newCard.dataset.service = service.service;
  newCardImg.src = service.img;
  newCardTitle.innerText = service.title;
  newCardDescr.innerText = service.descr;

  return newCard;
}


function getServiceCard(data) {
  data.forEach(service => {
    const card = createCards(service);
    serviceCardsBlock.append(card);
  });
};

getServiceCard(data);

//--------------------------------------------------------------------------------------



//Service filter
//--------------------------------------------------------------------------------------

const servicesBtns = document.querySelectorAll('.service-filter__btn');
const cards = document.querySelectorAll('.service-card');
let statusServiceBtns = [false, false, false];
let arrDataAttribute = [];


servicesBtns.forEach((item, index) => {
  item.addEventListener('click', e => {
    changeStatusBtns(e, item, index);
    resetStatusBtns(item, index);
    getArrDataAttribute(statusServiceBtns, servicesBtns);
    changeServiceCards(cards, arrDataAttribute);
  });
});


function resetStatusBtns(item, index) {
  let value = statusServiceBtns.filter(elem => elem);

  if (value.length > 2) {
    servicesBtns.forEach((btn, i) => {
      btn.classList.remove('service-filter__btn--active');
      if (i !== index) {
        statusServiceBtns[i] = false;
      }
    });

    item.classList.add('service-filter__btn--active');
  }
}

function changeStatusBtns(e, item, index) {
  if (e.target.classList.contains('service-filter__btn--active')) {
    item.classList.remove('service-filter__btn--active');
    statusServiceBtns[index] = false;
  } else {
    item.classList.add('service-filter__btn--active');
    statusServiceBtns[index] = true;
  }
}


function getArrDataAttribute(statusServiceBtns, servicesBtns) {
  arrDataAttribute = [];
  statusServiceBtns.forEach((item, index) => {
    if (item) {
      arrDataAttribute.push(servicesBtns[index].dataset.btn);
    }
  });
}


function changeServiceCards(cards, arrDataAttribute) {
  let counter = statusServiceBtns.filter(item => item).length;

  cards.forEach(card => {
    if (!arrDataAttribute.includes(card.dataset.service)) {
      card.classList.add('card__out--focus');
    } else {
      card.classList.remove('card__out--focus');
    }
  });

  if (counter == 0) {
    cards.forEach(card => {
      card.classList.remove('card__out--focus');
    });
  }
}

//--------------------------------------------------------------------------------------



//Ptices Accordion
//--------------------------------------------------------------------------------------

const accordions = document.querySelectorAll('.prices-accourdion__details');


accordions.forEach(item => {
  item.addEventListener('click', e => {
    if (item.open) {
      accordions.forEach(accordion => accordion.open = false);
      item.open = false;
    } else {
      accordions.forEach(accordion => accordion.open = false);
      item.open = true;
    }

    if (e.target !== item) {
      if (item.open) {
        accordions.forEach(accordion => accordion.open = false);
        item.open = false;
      } else {
        accordions.forEach(accordion => accordion.open = false);
        item.open = true;
      }
    }
  });
});

//--------------------------------------------------------------------------------------


// Contact list
//--------------------------------------------------------------------------------------

const adressHeader = document.querySelector('.adress-inner__title');
const adressList = document.querySelector('.adress-inner__list');
const adress = document.querySelectorAll('.adress-inner__item');
const adressCard = document.querySelector('.adress-card');
const contactImg = document.querySelector('.contact__img');
const cardValue = document.querySelectorAll('.adress-card__value');
const callBtn = document.querySelector('.adress-card__btn');

const city = {
  canandaigua: ['Canandaigua, NY', '+1 585 393 0001', '151 Charlotte Street'],
  newYork: ['New York City', '+1 212 456 0002', '9 East 91st Street'],
  yonkers: ['Yonkers, NY', '+1 914 678 0003', '511 Warburton Ave'],
  sherrill: ['Sherrill, NY', '+1 315 908 0004', '14 WEST Noyes BLVD'],
}

adressHeader.addEventListener('click', e => {
  adressListActive();
});

adress.forEach(item => {
  item.addEventListener('click', e => {
    adressListActive();
    adressCardActive();
    fillOutCard(item, city);
  });
});

callBtn.addEventListener('click', e => {
  callUs();
});

function adressListActive() {
  if (adressHeader.classList.contains('adress-inner__title--active')) {
    adressHeader.classList.remove('adress-inner__title--active');
    adressList.classList.remove('adress-inner__list--active');
  } else {
    adressHeader.classList.add('adress-inner__title--active');
    adressList.classList.add('adress-inner__list--active');
  }
}

function adressCardActive() {
  if (adressList.classList.contains('adress-inner__list--active')) {
    adressCard.classList.remove('adress-card--active');
  } else {
    adressCard.classList.add('adress-card--active');
    contactImgHide();
  }
}

function contactImgHide() {
  if (document.documentElement.scrollWidth < 381) {
    contactImg.classList.add('contact__img--hide');
  }
}

function fillOutCard(item, obj) {
  for (let key in obj) {
    if (key == item.dataset.city) {
      for (let i = 0; i < obj[key].length; i += 1) {
        cardValue[i].textContent = obj[key][i];
      }
    }
  }
}

function callUs() {
  window.open(`tel:${cardValue[1].textContent}`);
}

//--------------------------------------------------------------------------------------