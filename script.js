const navToggle = document.querySelector('.nav-toggle');
const siteNav = document.querySelector('.site-nav');
const year = document.querySelector('#year');

year.textContent = new Date().getFullYear();

navToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => siteNav.classList.remove('open'));
});
