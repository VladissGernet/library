import {createAlphabet} from './create-alphabet.js';
import {initAlphabetLetterLinkListener} from './alphabet-letter-link.js';
import {initMainPageAuthorsList} from './init-authors-list.js';
import {addMainPageAssistance} from './main-page-assistance.js';
import {authorList, books} from './elements.js';
import {showedAuthorsData} from './create-authors-list-items.js';

createAlphabet();
initMainPageAuthorsList();
addMainPageAssistance();
initAlphabetLetterLinkListener();

authorList.addEventListener('click', (evt) => {
  const selectedAuthorLink = evt.target.closest('a');
  if (selectedAuthorLink === null) {
    return;
  }
  const authorName = selectedAuthorLink.dataset.value;
  const authorBooks = showedAuthorsData.find((element) => element.author === authorName).books;
  books.querySelector('h2').textContent = authorName;
  books.querySelector('p').remove();
  const newElement = document.createElement('ul');
  console.log(newElement)
});


/*
Остановился на добавении книг автора на страницу при клике.
Реализвать добавление списка книг.
 */
