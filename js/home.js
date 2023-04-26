const hamMenu = document.querySelector('.ham-menu');
const close = document.querySelector('.close');
const mobileMenu = document.querySelector('.mobile-menu');
const items = document.querySelectorAll('.item');
const topButton = document.querySelector('.back-to-top');
const guestsDiv = document.querySelector('.grid-cards');
const featuredGuests = [
  {
    name: 'Tony Abou-Ganim',
    image: 'assets/tony.jpeg',
    desc1:
      'Tony Abou-Ganim is a veteran bartender with over 30 years of experience.',
    desc2:
      'He is the author of 10 books, including the best-selling "The Modern Mixologist".',
  },

  {
    name: 'Julie Reiner',
    image: 'assets/juliet.jpg',
    desc1:
      'Julie Reiner is a New York City-based bartender, author, and educator.',
    desc2:
      'She is the co-owner of Clover Club, a cocktail bar in Brooklyn, New York.',
  },

  {
    name: 'Charles Joly',
    image: 'assets/charles.jpg',
    desc1: 'Charles Joly is a New York City-based bartender and author.',
    desc2:
      'He is the co-owner of Clover Club, a cocktail bar in Brooklyn, New York.',
  },

  {
    name: 'Alex Kratena',
    image: 'assets/alex.jpg',
    desc1: 'Alex Kratena is a London-based bartender and author.',
    desc2:
      'He is the co-owner of White Lyan, a cocktail bar in London, England.',
  },
];

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

for (let i = 0; i < featuredGuests.length; i += 1) {
  guestsDiv.innerHTML += `
    <div class="guest">
      <div class="guest-img">
        <img src="${featuredGuests[i].image}" alt="" />
        <img src="assets/checked-img.png" class="check" alt="" />
      </div>
      <div class="guest-info">
        <h3>${featuredGuests[i].name}</h3>
        <p class="desc-1">${featuredGuests[i].desc1}</p>
        <div class="small-dash"></div>
        <p>${featuredGuests[i].desc2}</p>
      </div>
    </div>
  `;
}
