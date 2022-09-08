var contact = document.querySelector('#contact-form');
contact.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  var nameInput = contact.elements.name.value;
  var emailInput = contact.elements.email.value;
  var messageText = contact.elements.message.value;

  var info = {
    name: nameInput,
    email: emailInput,
    message: messageText
  };
  event.preventDefault();
  console.log(info);
  contact.reset();
}
