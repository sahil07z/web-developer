const signinForm = document.querySelector('.signin-form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const signinBtn = document.querySelector('#signin-btn');
const emailError = document.querySelector('#email-error');
const passwordError = document.querySelector('#password-error');

signinForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput}