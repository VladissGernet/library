import {createAlphabet} from './create-alphabet.js';
import {initLinkListener} from './alphabet-letter-link.js';
import {initMainPageAuthorsList} from './init-authors-list.js';
import {addMainPageAssistance} from './main-page-assistance.js';

createAlphabet();
initMainPageAuthorsList();
addMainPageAssistance();
initLinkListener();
