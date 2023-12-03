import {mainLetter, siteNavigation} from './elements.js';
import {authors} from './mock.js';
import {createAuthorsListItems} from './create-authors-list-items.js';

const initAlphabetLetterLinkListener = () => {
  const onLinkClick = (evt) => {
    const link = evt.target.closest('a');
    if (link === null) {
      return;
    }
    const isHrefInLink = link.hasAttribute('href');
    if (isHrefInLink === false) {
      return;
    }
    mainLetter.textContent = link.textContent;
    mainLetter.id = link.textContent;
    const selectedAuthorsData = authors.find(({key}) => key === link.textContent);
    const {items} = selectedAuthorsData;
    createAuthorsListItems(items);
  };
  siteNavigation.addEventListener('click', (evt) => onLinkClick(evt));
};

export {initAlphabetLetterLinkListener};

