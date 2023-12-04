import {createAlphabet} from './create-alphabet.js';
import {initAlphabetLetterLinkListener} from './alphabet-letter-link.js';
import {initMainPageAuthorsList} from './init-full-authors-list.js';
import {addMainPageAssistance} from './main-page-assistance.js';
import {initAuthorNameClickListener} from './author-name-click-listener.js';
import {books} from './elements.js';

createAlphabet();
initMainPageAuthorsList();
addMainPageAssistance();
initAlphabetLetterLinkListener();
initAuthorNameClickListener();

books.addEventListener('click', (evt) => {
  const selectedShowMoreButton = evt.target.closest('.more');
  if (selectedShowMoreButton === null) {
    return;
  }
  selectedShowMoreButton.previousElementSibling.classList.toggle('short');
});
