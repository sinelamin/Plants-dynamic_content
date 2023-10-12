//Prices Accordion
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