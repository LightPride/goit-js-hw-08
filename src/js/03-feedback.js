import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

onFormDataCheck();

function onFormInput(event) {
  const formElems = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  }
  const formDataJSON = JSON.stringify(formElems);
  localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  const formData = new FormData(event.currentTarget);
  formData.forEach((name, value) => {
    console.log(value);
    console.log(name);
  })
}

function onFormDataCheck() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
    formElems = JSON.parse(localStorage.getItem(STORAGE_KEY));
    for (let key in formElems) {
      feedbackForm[key].value = formElems[key];
    }
  }
}
