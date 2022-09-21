function hello(someText) {
  document.querySelector('.message').textContent = someText;
}
setTimeout(hello, 2000, 'Hello There');
