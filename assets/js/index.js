//copy menu for mobile
const CopyMenu = () => {
  //copy inside .dpt.cat to .departments
  const dptCategory = document.querySelector('.dpt-cat');
  const dtpPlace = document.querySelector('.departments');
  dtpPlace.innerHTML = dptCategory.innerHTML;

  //copy inside nav to nav
  const mainNav = document.querySelector('.header-nav nav');
  const navPlace = document.querySelector('.off-canvas nav');
  navPlace.innerHTML = mainNav.innerHTML;

  //copy .header-top .wrapper to .the-top-nav
  const topNav = document.querySelector('.header-top .wrapper');
  const topPlace = document.querySelector('.off-canvas .the-top-nav');
  topPlace.innerHTML = topNav.innerHTML;
};
CopyMenu();

//show submenu on mobile

const submenu = document.querySelectorAll('.has-child .icon-small');
submenu.forEach((menu) => menu.addEventListener('click', toggleMenu));

function toggleMenu(e) {
  e.preventDefault();
  submenu.forEach((item) =>
    item != this ? item.closest('.has-child').classList.remove('expand') : null
  );
  if (this.closest('.has-child').classList != 'expand');
  this.closest('.has-child').classList.toggle('expand');
}

//show mobile menu
const menuButton = document.querySelector('.trigger'),
  closeButton = document.querySelector('.t-close'),
  addClass = document.querySelector('.site');

menuButton.addEventListener('click', () => {
  addClass.classList.toggle('showMenu');
});
closeButton.addEventListener('click', () => {
  addClass.classList.remove('showMenu');
});

//slider
const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});

//show search on mobile

const searchBtn = document.querySelector('.t-search'),
  tClose = document.querySelector('.search-close'),
  showClass = document.querySelector('.site');

searchBtn.addEventListener('click', () => {
  showClass.classList.toggle('show-search');
});
tClose.addEventListener('click', () => {
  showClass.classList.remove('show-search');
});

//show dpt menu

const dptBtn = document.querySelector('.dpt-cat .dpt-trigger'),
  dptClass = document.querySelector('.site');
dptBtn.addEventListener('click', () => {
  dptClass.classList.toggle('show-dpt');
});

// products image slider

var productThumb = new Swiper('.small-image', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 3,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    481: {
      spaceBetween: 32,
    },
  },
});
var productBig = new Swiper('.big-image', {
  loop: true,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: productThumb,
  },
});

// stock products width percentage
var stocks = document.querySelectorAll('.products .stock');
for (let x = 0; x < stocks.length; x++) {
  let stock = stocks[x].dataset.stock,
    sold = stocks[x].querySelector('.qty-sold').innerHTML,
    percent = (sold * 100) / stock;

  available = stocks[x].querySelector('.qty-available').innerHTML =
    stock - sold;
  stocks[x].querySelector('.available').style.width = percent + '%';
}
