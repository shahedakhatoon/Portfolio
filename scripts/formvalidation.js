const contactForm = document.getElementById('contactForm');
const emailInput = document.getElementById('email');
const validationMessage = document.getElementById('validationMessage');

contactForm.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    validationMessage.innerHTML = 'Your email should be in lowercase';
    event.preventDefault();
  }
});