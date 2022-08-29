var student = {
  firstName: 'Jeff',
  lastName: 'Jin',
  age: 27
};

var fullName = student.firstName + ' ' + student.lastName;

console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Dispatcher';

console.log('value of student.livesInIrvine:', student.livesInIrvine);
console.log('value of student.previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

var vehicle = {
  make: 'BMW',
  model: 'M3',
  year: 2013
};

vehicle['color'] = 'Black';
vehicle['isConvertible'] = false;

console.log('value of vehicle["color"]:', vehicle['color']);
console.log('value of vehicle["isConvertible"]:', vehicle['isConvertible']);
console.log('value of vehicle:', vehicle);

var pet = {
  name: 'John',
  type: 'Pug'
};

delete pet.name;
delete pet.type;

console.log('value of pet:', pet);
