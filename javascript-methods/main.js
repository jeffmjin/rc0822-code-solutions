var x = 1;
var y = 2;
var z = 3;
var maximumValue = Math.max(x, y, z);
console.log('value of maximumValue:', maximumValue);

var heroes = ['Iron Man', 'Superman', 'Batman', 'Thor'];
var randomNumber = Math.random() * heroes.length;
var randomIndex = Math.floor(randomNumber);
console.log('value of randomIndex:', randomIndex);
var randomHero = heroes[randomIndex];
console.log('value of randomHero:', randomHero);

var library = [
  {
    title: 'Millionaires for the Month',
    author: 'Stacy McAnulty'
  },
  {
    title: '48 Laws of Power',
    author: 'Robert Greene'
  },
  {
    title: 'The Silent Patient',
    author: 'Alex Michaelides'
  }
];

var lastBook = library.pop();
console.log('value of lastBook:', lastBook);
var firstBook = library.shift();
console.log('value of firstBook:', firstBook);

var js = {
  title: 'Javascript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer'
};
var css = {
  title: 'CSS Secrets',
  author: 'Lea Verou'
};

library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('value of library:', library);

var fullName = 'Jeff Jin';
var firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName:', firstAndLastName);
var firstName = firstAndLastName[0];
var sayMyName = firstName.toUpperCase();
console.log('value of sayMyName:', sayMyName);
