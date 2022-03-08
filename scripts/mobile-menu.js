const menuIcon = document.querySelector('.nav-menu');
const sideNav = document.querySelector('.mobileNav');
const menuLinks = document.querySelectorAll('.menuMobile');
const head = document.querySelector('.head');
const mylogo = document.querySelector('.logo');
const myhtml = document.querySelector('.scroll')

const openMenu = () => {
  sideNav.classList.add('mobileNavActive');
  menuIcon.classList.add('vanish');
  head.classList.add('blur');
  mylogo.classList.add('blur');
  myhtml.classList.add('bodyscroll');
};

const closeMenu = () => {
  sideNav.classList.remove('mobileNavActive');
  head.classList.remove('blur');
  menuIcon.classList.remove('vanish');
  mylogo.classList.remove('blur');
  myhtml.classList.remove('bodyscroll')
};

menuIcon.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});