// import {pluralize} from './util.js';
import {authors} from './mock.js';

const siteNavigation = document.querySelector('.site-nav');
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

