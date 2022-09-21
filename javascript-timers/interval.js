var text = document.querySelector('.countdown-display');
var time = 4;
function countdown(number) {
  time--;
  if (time > 0) {
    text.textContent = time;
  } else if (time === 0) {
    text.textContent = '~Earth Below Us~';
    clearInterval(stop);
  }
}

var stop = setInterval(countdown, 1000);
