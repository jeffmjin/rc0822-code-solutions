/* exported countdown */
function countdown(number) {
  var x = [];
  for (var i = number; i >= 0; i--) {
    x.push(i);
  }
  return x;
}
