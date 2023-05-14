// Використовуй html з файлу counter.html
// Отримай всі кнопки з атрибутом data-action
// До відповідної кнопки, з відповідним data-action застосовувуй свій функціонал:
// При кліку на кнопку data-action="save" зберігай значення counter у local storage
// При кліку на кнопку data-action="clear-save" видаляй збережене значення counter з local storage
// При кліку на кнопку data-action="decrease" зменшуй counter на 1
// При кліку на кнопку data-action="increase" збільшуй counter на 1
// При кліку на кнопку data-action="reset" роби counter = 0
const allBtns = document.querySelectorAll('[data-action]');
const counterVisual = document.querySelector('.counter-value');

let counter = +localStorage.getItem('counter') || 0;
counterVisual.textContent = counter;

allBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    switch (action) {
      case 'decrease':
        counter--;
        console.log(counter);
        break;
      case 'increase':
        counter++;
        console.log(counter);
        break;
      case 'reset':
        counter = 0;
        console.log(counter);
        break;
      case 'save':
        localStorage.setItem('counter', counter);
        break;
      case 'clear-save':
        localStorage.removeItem('counter');
        break;

      default:
        break;
    }
    counterVisual.textContent = counter;
  });
});
