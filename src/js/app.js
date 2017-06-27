import Swipe from 'swipejs';
import MoveTo from 'moveto';
import Tooltip from 'tooltip.js';


// popup
(() => {
  const popup = document.querySelector('.js-popup');
  if (popup === null) return;

  const togglePopup = () => popup.classList.toggle('js-popup-visible');

  window.addEventListener('click', (e) => {
    if (e.target === popup) togglePopup();
  });

  Array.prototype.forEach.call(
    document.querySelectorAll('.js-popup-toggle'),
    elem => elem.addEventListener('click', (e) => {
      togglePopup();
      e.preventDefault();
    }),
  );
})();


// reviews slider
(() => {
  const sliderContainer = document.querySelector('.slider-reviews');
  if (sliderContainer === null) return;

  const dots = sliderContainer.querySelectorAll('.js-slider-dots span');

  const clearDots = () => Array.prototype.forEach.call(dots, dot => dot.classList.remove('active'));
  const setCurrentDot = index => dots[index].classList.add('active');

  const slider = new Swipe(sliderContainer, {
    draggable: true,
    callback: (index) => {
      clearDots();
      setCurrentDot(index);
    },
  });

  Array.prototype.forEach.call(dots, (dot, index) => dot.addEventListener('click', () => {
    clearDots();
    setCurrentDot(index);
    slider.slide(index);
  }));
})();


// portfolio slider
(() => {
  const sliderContainer = document.querySelector('.slider-portfolio');
  if (sliderContainer === null) return;

  const slides       = sliderContainer.querySelectorAll('.js-slide');
  const dots         = sliderContainer.querySelectorAll('.js-dot');
  const slidesCount  = slides.length;
  let   currentSlide = 0;

  const getPrevSlide = () => ((currentSlide === 0) ? slidesCount - 1 : currentSlide - 1);
  const getNextSlide = () => ((currentSlide === slidesCount - 1) ? 0 : currentSlide + 1);

  const togglePrevSlide    = index => slides[index].classList.toggle('prev');
  const toggleNextSlide    = index => slides[index].classList.toggle('next');
  const toggleCurrentSlide = index => slides[index].classList.toggle('active');
  const toggleDot          = index => dots  [index].classList.toggle('active');

  const toggleFullSlide = () => {
    togglePrevSlide(getPrevSlide());
    toggleNextSlide(getNextSlide());
    toggleCurrentSlide(currentSlide);
    toggleDot(currentSlide);
  };

  const setCurrentSlide = (index) => {
    toggleFullSlide();
    currentSlide = index;
    toggleFullSlide();
  };

  const prevSlide = () => setCurrentSlide(getPrevSlide());
  const nextSlide = () => setCurrentSlide(getNextSlide());

  sliderContainer.querySelector('.js-prev').addEventListener('click', prevSlide);
  sliderContainer.querySelector('.js-next').addEventListener('click', nextSlide);

  Array.prototype.forEach.call(
    dots,
    (dot, index) => dot.addEventListener('click', () => setCurrentSlide(index)),
  );
})();


// moveTo
(() => {
  const moveTo = new MoveTo();
  Array.prototype.forEach.call(
    document.querySelectorAll('.js-move-to'),
    elem => moveTo.registerTrigger(elem),
  );
})();


// form validation
(() => {
  console.log(document.querySelectorAll('.js-order-form').length);
  Array.prototype.forEach.call(
    document.querySelectorAll('.js-order-form'),
    (form) => {
      const validatedItems = [
        form.querySelector('input[name=name]'),
        form.querySelector('input[name=phone]'),
      ];

      const tooltips = validatedItems.map(item => new Tooltip(item, {
        title: 'Это обязательное поле',
        trigger: '',
      }));

      const inputInvalidClass = 'invalid';

      // remove invalid class on focus
      validatedItems.forEach((elem, index) => {
        elem.addEventListener('focus', () => {
          if (elem.classList.contains(inputInvalidClass)) elem.classList.remove(inputInvalidClass);
          tooltips[index].hide();
        });
      });

      const validateTextInput = value => value.trim() !== '';

      form.addEventListener('submit', (e) => {
        const formValid = validatedItems.every((item, index) => {
          const isItemValid = validateTextInput(item.value);
          if (!isItemValid) {
            item.classList.add(inputInvalidClass);
            tooltips[index].show();
          }
          return isItemValid;
        });

        if (!formValid) e.preventDefault();
      });
    },
  );
})();
