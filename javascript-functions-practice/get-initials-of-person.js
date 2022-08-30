/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var getInitialsOfPerson = Array.from(person.firstName)[0] + Array.from(person.lastName)[0];
  return getInitialsOfPerson;
}
