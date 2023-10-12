//Service pop-up
//--------------------------------------------------------------------------------------

import { cards } from './serviceFilter.js';
import { body, overlay } from './burger.js';
import { data } from './dataService.js';

const popup = document.querySelector('.service-popup');
const closePopup = document.querySelector('.service-popup__btn');
const popupImg = document.querySelector('.service-popup__img');
const popupTitle = document.querySelector('.service-popup__title');
const popupDescr = document.querySelector('.service-popup__description');

cards.forEach((card, index) => {
  card.addEventListener('click', e => {
    showPopUp(data, index);
  });
});

closePopup.addEventListener('click', e => {
  hienPopUp();
});


function showPopUp(data, index) {
  popup.classList.add('service-popup--active');
  popupImg.src = data[index].img;
  popupTitle.innerText = data[index].title;
  popupDescr.innerText = data[index].descrBig;
  overlay.classList.add('overla--active');
  overlay.style.height = document.documentElement.scrollHeight + 'px';
  body.classList.add('body-menu--active');
}

function hienPopUp() {
  popup.classList.remove('service-popup--active');
  overlay.classList.remove('overla--active');
  body.classList.remove('body-menu--active');
}

//--------------------------------------------------------------------------------------