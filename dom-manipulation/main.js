var clickNumber = 0;
var hot = document.querySelector('.hot-button');
var clickCount = document.querySelector('.click-count');

hot.addEventListener('click', handleClickButton);

function handleClickButton(event) {
  clickNumber++;
  var color;
  if (clickNumber < 4) {
    color = 'cold';
  } else if (clickNumber < 7) {
    color = 'cool';
  } else if (clickNumber < 10) {
    color = 'tepid';
  } else if (clickNumber < 13) {
    color = 'warm';
  } else if (clickNumber < 16) {
    color = 'hot';
  } else {
    color = 'nuclear';
  }
  clickCount.textContent = 'Clicks:' + clickNumber;
  hot.className = 'hot-button ' + color;
}
