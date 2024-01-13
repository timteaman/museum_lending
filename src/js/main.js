document.addEventListener('DOMContentLoaded', () => {
  // swiper js

  function createSlider(selector, options = {}) {
    const defaultOptions = {
      direction: 'horizontal',
      loop: true,
      lazyLoading: true,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.slider-actions__dots',
        bulletClass: 'slider-actions__dot',
        bulletActiveClass: 'slider-actions__dot--active',
        clickable: true,
      },
      navigation: {
        nextEl: '.slider-btn--next',
        prevEl: '.slider-btn--prev',
      },
      spaceBetween: 0,
      centeredSlides: true,
    };

    const mergedOptions = { ...defaultOptions, ...options };

    return new Swiper(selector, mergedOptions);
  }

  const eventsSlider = createSlider('.events-slider', {
    scrollbar: {
      el: '.events-slider__bar',
      draggable: true,
    },
    navigation: {
      nextEl: '.events-slider__btn--next',
      prevEl: '.events-slider__btn--prev',
    },
    speed: 1000,
    slidesPerView: 1,
  });

  const gallerySlider = createSlider('.gallery-slider', {
    scrollbar: {
      el: '.gallery-slider__bar',
      draggable: true,
    },
    navigation: {
      nextEl: '.gallery-slider__btn--next',
      prevEl: '.gallery-slider__btn--prev',
    },
    speed: 1000,
    slidesPerView: 3,
    slidesPerView: window.innerWidth <= 992 ? 1 : 3,
  });

  // show and hide info block- content

  document.querySelectorAll('.info__item').forEach(function (item) {
    item.addEventListener('click', function () {
      this.classList.toggle('show-content');
    });
  });

  // header fixed

  const header = document.querySelector('.header');
  const wrapper = document.querySelector('.wrapper');
  const menuLinks = document.querySelectorAll('.menu__link');
  const headerHeight = header.offsetHeight;
  const scrollThreshold = 90;

  function updateHeader() {
    const isScrolled = window.pageYOffset >= scrollThreshold;
    header.classList.toggle('fixed', isScrolled);
    wrapper.classList.toggle('wrapper--height', isScrolled);
  }

  window.addEventListener('scroll', updateHeader);

  // mobile menu

  const burger = document.querySelector('.burger');
  const mobileMenu = document.querySelector('.mobile-menu__nav');
  const bodyLock = document.querySelector('body');
  const closeBtn = document.querySelector('.burger__close');

  burger.addEventListener('click', () => {
    burger.classList.add('burger--active');
    mobileMenu.classList.add('mobile-menu__nav--active');
    bodyLock.classList.add('lock');
  });

  closeBtn.addEventListener('click', () => {
    burger.classList.remove('burger--active');
    mobileMenu.classList.remove('mobile-menu__nav--active');
    bodyLock.classList.remove('lock');
  });

  // Off-target click
  document.addEventListener('click', function (e) {
    if (
      !e.target.closest('.burger') &&
      !e.target.closest('.mobile-menu__nav')
    ) {
      burger.classList.remove('burger--active');
      mobileMenu.classList.remove('mobile-menu__nav--active');
      bodyLock.classList.remove('lock');
    }
  });
});
