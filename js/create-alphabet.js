import {authors} from './mock.js';
import {siteNavigation,} from './elements.js';

const createAlphabet = () => {
  siteNavigation.innerHTML = '';
  const siteNavigationItems = authors.map(({key,items}) => {
    const isItemEmpty = items.length === 0;
    const itemLinkHref = (isItemEmpty ? '' : `href="#${key.toLowerCase()}"`);
    return `
    <li class="site-nav-item">
      <a class="site-nav-link" ${itemLinkHref}>${key.toUpperCase()}</a>
    </li>
`;
  }).join('');
  siteNavigation.insertAdjacentHTML('afterbegin', siteNavigationItems);
};

export {createAlphabet};
