var number = 0;
var click = document.querySelector('.bulb');
var clickOff = document.querySelector('.background');

click.addEventListener('click', handleButtonClick);

function handleButtonClick(event) {
  number++;
  var off;
  if (number % 2 === 0) {
    off = 'off';
  } else {
    off = '';
  }
  clickOff.className = 'background ' + off;
  click.className = 'bulb ' + off;
}
