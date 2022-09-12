var task = document.querySelector('.task-list');
task.addEventListener('click', handleClick);

function handleClick(event) {
  console.log(event.target);
  console.log(event.target.tagName);
  if (event.target.tagName !== 'BUTTON') {
    return;
  }

  var list = event.target.closest('.task-list-item');
  console.log(list);
  list.remove();
}
