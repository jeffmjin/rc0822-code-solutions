var user = document.querySelector('#user-list');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users');
xhr.responseType = 'json';
xhr.addEventListener('load', function () {
  console.log(xhr.status);
  console.log(xhr.response);
  for (var i = 0; i < xhr.response.length; i++) {
    var list = document.createElement('li');
    list.textContent = xhr.response[i].name;
    user.appendChild(list);
  }
});
xhr.send();
