var books = [
  {
    isbn: 'B096HF9RJ4',
    title: 'All My Rage',
    author: 'Sabaa Tahir'
  },
  {
    isbn: 'B091Y4KGFH',
    title: 'The Maid: A Novel',
    author: 'Nita Prose'
  },
  {
    isbn: 'B098PW8NP8',
    title: 'Lessons in Chemistry: A Novel',
    author: 'Bonnie Garmus'
  }
];
console.log('typeof books:', typeof books);

JSON.stringify(books);
console.log('JSON.stringify(books);', JSON.stringify(books));
console.log('typeof JSON.stringify(books):', typeof JSON.stringify(books));

var student = '{ "numberId": "123456", "name": "Jeff Jin" }';
console.log('student:', student);
console.log('typeof student:', typeof student);

var studentParse = JSON.parse(student);
console.log('studentParse:', studentParse);
console.log('typeof studentParse:', studentParse);
