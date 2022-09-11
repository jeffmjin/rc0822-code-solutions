var $tabContainer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', handleView);

function handleView(event) {
  if (!event.target.matches('.tab')) {
    return;
  }

  for (var i = 0; i < $tab.length; i++) {
    if ($tab[i] === event.target) {
      $tab[i].className = 'tab active';
    } else {
      $tab[i].className = 'tab';
    }
  }

  var data = event.target.getAttribute('data-view');
  for (var t = 0; t < $view.length; t++) {
    if ($view[t].getAttribute('data-view') === data) {
      $view[t].className = 'view';
    } else {
      $view[t].className = 'view hidden';
    }
  }
}
