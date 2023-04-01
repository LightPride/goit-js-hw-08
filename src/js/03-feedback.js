import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

onFormDataCheck();

function onFormInput(event) {
  formData = {
    email: feedbackForm.email.value,
    message: feedbackForm.message.value,
  }
  const formDataJSON = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, formDataJSON);
}

function onFormSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}

function onFormDataCheck() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
    formData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    for (let key in formData) {
      feedbackForm[key].value = formData[key];
    }
  }
}
