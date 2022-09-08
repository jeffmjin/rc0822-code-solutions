var task = document.querySelector('.task-list');
task.addEventListener('click', handleClick);

var list = document.querySelector('.task-list-item');

function handleClick(event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target && event.target.matches('button')) {
    list.remove();
  }
}
