const hamMenu = document.querySelector('.ham-menu');
const close = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const items = document.querySelectorAll('.item');

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
