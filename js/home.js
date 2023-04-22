const hamMenu = document.querySelector('.ham-menu');
const close = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const items = document.querySelectorAll('.item');
const topButton = document.querySelector('.back-to-top');

hamMenu.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

close.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

items.forEach((item) => {
  item.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
  });
});

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 100) {
    topButton.classList.add('visible');
  } else {
    topButton.classList.remove('visible');
  }
});
