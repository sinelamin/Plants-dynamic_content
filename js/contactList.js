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
        adressHeader.textContent = obj[key][0];
      }
    }
  }
}

function callUs() {
  window.open(`tel:${cardValue[1].textContent}`);
}

//--------------------------------------------------------------------------------------