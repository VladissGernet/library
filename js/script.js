import {createAlphabet} from './create-alphabet.js';
import {initAlphabetLetterLinkListener} from './alphabet-letter-link.js';
import {initMainPageAuthorsList} from './init-authors-list.js';
import {addMainPageAssistance} from './main-page-assistance.js';
import {initAuthorNameClickListener} from './author-name-click-listener.js';

createAlphabet();
initMainPageAuthorsList();
addMainPageAssistance();
initAlphabetLetterLinkListener();
initAuthorNameClickListener();
