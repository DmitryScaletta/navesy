import Swipe from 'swipejs';
import MoveTo from 'moveto';
import Tooltip from 'tooltip.js';


// floating button
(() => {
  const floatingButton = document.querySelector('.js-floating-button');
  if (floatingButton === null) return;

  const handleFloatingButton = () => {
    const isHidden = window.pageYOffset < 250;
    floatingButton.setAttribute('aria-hidden', isHidden);
  };

  window.addEventListener('load',   handleFloatingButton);
  window.addEventListener('scroll', handleFloatingButton);
})();


// reviews slider and mobile reviews slider
(() => {
  const sliders = [
    document.querySelector('.slider-reviews'),
    document.querySelector('.mobile-slider-reviews'),
  ];

  const setCurrentDot = (dots, index) => {
    Array.prototype.forEach.call(dots, dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
  };

  sliders.forEach((sliderContainer) => {
    if (sliderContainer === null) return;

    const dots = sliderContainer.querySelectorAll('.js-slider-dots span');

    const slider = new Swipe(sliderContainer, {
      draggable: true,
      callback: index => setCurrentDot(dots, index),
    });

    Array.prototype.forEach.call(dots, (dot, index) => dot.addEventListener('click', () => {
      setCurrentDot(dots, index);
      slider.slide(index);
    }));
  });
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


// mobile portfolio slider and mobile canopies slider
(() => {
  const sliders = [
    document.querySelector('.mobile-slider-portfolio'),
    document.querySelector('.mobile-canopies-slider'),
  ];

  sliders.forEach((sliderContainer) => {
    if (sliderContainer === null) return;

    const slider = new Swipe(sliderContainer, { draggable: true });

    const prevButton = sliderContainer.querySelector('.js-prev');
    const nextButton = sliderContainer.querySelector('.js-next');
    if (prevButton === null || nextButton === null) return;

    prevButton.addEventListener('click', () => slider.prev());
    nextButton.addEventListener('click', () => slider.next());
  });
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
        const isFormValid = validatedItems.every((item, index) => {
          const isItemValid = validateTextInput(item.value);
          if (!isItemValid) {
            item.classList.add(inputInvalidClass);
            tooltips[index].show();
          }
          return isItemValid;
        });

        if (!isFormValid) e.preventDefault();
      });
    },
  );
})();


// show more button
(() => {
  const showMoreButton = document.querySelector('.js-show-more');
  const itemsContainer = document.querySelector('.js-canopy-types');
  if (showMoreButton === null || itemsContainer === null) return;

  const items = itemsContainer.querySelectorAll('.image-card');
  if (items.length === 0) return;

  const setItemsVisibility = visible => Array.prototype.forEach.call(items, (item, index) => {
    if (index > 5) item.setAttribute('aria-hidden', !visible);
  });

  setItemsVisibility(false);

  const buttonLabelExpand = 'Посмотреть ещё';
  const buttonLabelHide   = 'Скрыть';

  showMoreButton.addEventListener('click', (e) => {
    const isExpanded = itemsContainer.getAttribute('data-expanded') === 'true';
    itemsContainer.setAttribute('data-expanded', !isExpanded);
    showMoreButton.textContent = !isExpanded ? buttonLabelHide : buttonLabelExpand;
    setItemsVisibility(!isExpanded);
    e.preventDefault();
  });
})();


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
