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

// show filter menu
const FtoShow = '.filter';

const F_popup = document.querySelector(FtoShow);
const F_trigger = document.querySelector('.filter-trigger');

F_trigger.addEventListener('click', () => {
  setTimeout(() => {
    if (!F_popup.classList.contains('show')) {
      F_popup.classList.add('show');
    }
  }, 250);
});

document.addEventListener('click', (e) => {
  const isClosest = e.target.closest(FtoShow);
  if (!isClosest && F_popup.classList.contains('show')) {
    F_popup.classList.remove('show');
  }
});

// show mini cart
const div_toShow = '.mini-cart';
const div_popup = document.querySelector(div_toShow);
const div_trigger = document.querySelector('.cart-trigger');

div_trigger.addEventListener('click', () => {
  setTimeout(() => {
    if (!div_popup.classList.contains('show')) {
      div_popup.classList.add('show');
    }
  }, 250);
});

//close cart
document.addEventListener('click', (e) => {
  const isClosest = e.target.closest(div_toShow);
  if (!isClosest && div_popup.classList.contains('show')) {
    div_popup.classList.remove('show');
  }
});

//show modal on load
window.onload = function() {
  document.querySelector('.site.page-checkout').classList.toggle('show-modal');
};
document.querySelector('.modal-close').addEventListener('click', () => {
  document.querySelector('.site').classList.remove('show-modal');
});
