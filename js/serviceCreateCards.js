//Service create cards JS
//--------------------------------------------------------------------------------------
import { data } from './dataService.js';

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