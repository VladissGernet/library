import {books} from './elements.js';
import {mainPageAssistanceDescription, mainPageTitle} from './constats.js';

const addMainPageAssistance = () => {
  books.querySelector('h2').textContent = mainPageTitle;
  books.querySelector('ul').remove();
  const mainPageAssistance = document.createElement('p');
  mainPageAssistance.textContent = mainPageAssistanceDescription;
  books.appendChild(mainPageAssistance);
};

export {addMainPageAssistance};
