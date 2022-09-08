function handleFocus(event) {
  console.log('focus');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var nameInput = document.getElementById('user-name');
var emailInput = document.getElementById('user-email');
var messageText = document.getElementById('user-message');

nameInput.addEventListener('focus', handleFocus);
emailInput.addEventListener('focus', handleFocus);
messageText.addEventListener('focus', handleFocus);

nameInput.addEventListener('blur', handleBlur);
emailInput.addEventListener('blur', handleBlur);
messageText.addEventListener('blur', handleBlur);

nameInput.addEventListener('input', handleInput);
emailInput.addEventListener('input', handleInput);
messageText.addEventListener('input', handleInput);
