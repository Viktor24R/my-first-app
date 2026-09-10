const modal = document.querySelector('#booking-modal');
const form = document.querySelector('#booking-form');
const success = document.querySelector('.success');

document.querySelectorAll('.js-book').forEach((button) => {
  button.addEventListener('click', () => {
    form.hidden = false;
    success.hidden = true;
    modal.showModal();
  });
});

document.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', (event) => {
  if (event.target === modal) modal.close();
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.hidden = true;
  success.hidden = false;
  form.reset();
});
