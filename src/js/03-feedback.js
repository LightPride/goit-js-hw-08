import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('input', throttle(onFormInput, 500));
feedbackForm.addEventListener('submit', onFormSubmit);

const STORAGE_KEY = 'feedback-form-state';

onFormDataCheck();
let formElems = {}
function onFormInput(event) {
  formElems = {
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
  console.log(formElems);
}

function onFormDataCheck() {
  const savedFormData = localStorage.getItem(STORAGE_KEY);
  if (savedFormData) {
     const formElems = JSON.parse(savedFormData);
    for (let key in formElems) {
      feedbackForm[key].value = formElems[key];
    }
  }
}
