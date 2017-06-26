import Swipe from 'swipejs';
import MoveTo from 'moveto';


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


// moveTo
(() => {
  const moveTo = new MoveTo();
  Array.prototype.forEach.call(
    document.querySelectorAll('.js-move-to'),
    elem => moveTo.registerTrigger(elem),
  );
})();
