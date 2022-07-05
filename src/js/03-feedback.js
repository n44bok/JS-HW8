import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const STORAGE_KEY = "feedback-form-state";

const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

onFormSend();


function onFormSubmit(evt) {
    evt.preventDefault();

    const formDataToSend = new FormData(evt.currentTarget);
  formDataToSend.forEach((value, name) => {
    formData[name] = value;
  });
    
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

    console.log(formData);
}

function onFormInput(evt) {
  formData.email = form.elements.email.value;
  formData.message = form.elements.message.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}


function onFormSend() {
    const savedForm = localStorage.getItem(STORAGE_KEY);
    if (savedForm) {
        const { email, message } = JSON.parse(savedForm);
    form.email.value = email;
    form.message.value = message;
    formData.email = email;
    formData.message = message;
    }
}

