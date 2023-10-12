//Service filter
//--------------------------------------------------------------------------------------

const servicesBtns = document.querySelectorAll('.service-filter__btn');
export const cards = document.querySelectorAll('.service-card');
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