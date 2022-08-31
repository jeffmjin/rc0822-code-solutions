/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */

function isUnderFive(number) {
  if (number < 5) {
    number = true;
  } else {
    number = false;
  }
  return number;
}

function isEven(number) {
  if (number % 2 === 0) {
    number = true;
  } else {
    number = false;
  }
  return number;
}

function startsWithJ(string) {
  if (string.charAt() === 'J') {
    string = true;
  } else {
    string = false;
  }
  return string;
}

function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    person = true;
  } else {
    person = false;
  }
  return person;
}

function isOldEnoughToDrive(person) {
  if (person.age > 16) {
    person = true;
  } else {
    person = false;
  }
  return person;
}

function isOldEnoughToDrinkAndDrive(person) {
  if (person.age === 0) {
    person = false;
  } else {
    person = false;
  }
  return person;
}

function categorizeAcidity(pH) {
  if (pH < 14 && pH > 7) {
    pH = 'base';
  } else if (pH < 7 && pH > 0) {
    pH = 'acid';
  } else if (pH === 7) {
    pH = 'neutral';
  } else {
    pH = 'invalid pH level';
  }
  return pH;
}

function introduceWarnerBro(name) {
  if (name === 'wakko' || name === 'yakko') {
    name = "We're the Warner brothers!";
  } else if (name === 'dot') {
    name = "I'm cute~";
  } else {
    name = 'Goodnight everybody!';
  }
  return name;
}
