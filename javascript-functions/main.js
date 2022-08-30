function convertMinutesToSeconds(x, y) {
  var seconds = x * y;
  return seconds;
}
var convertMinutesToSecondsResult = convertMinutesToSeconds(5, 60);
console.log('convertMinutesToSecondsResult:', convertMinutesToSecondsResult);

function greet(x) {
  var greeting = '"Hey, ' + x + '"';
  return greeting;
}
var greetResult = greet('Beavis');
console.log('greetResult:', greetResult);

function getArea(x, y) {
  var area = x * y;
  return area;
}
var getAreaResult = getArea(17, 42);
console.log('getAreaResult:', getAreaResult);

function getFirstName({ firstName, lastName }) {
  var name = '"' + firstName + '"';
  return name;
}
var getFirstNameResult = getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' });
console.log('getFirstNameResult:', getFirstNameResult);

function getLastElement([x, y, s, t]) {
  var lastElement = '"' + [t] + '"';
  return lastElement;
}
var getLastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('getLastElementResult:', getLastElementResult);
