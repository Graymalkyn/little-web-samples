var theButton = document.querySelector('.click-me');

function ralph() {
  theButton.classList.toggle('on')
  console.log('clicked');

  }
  theButton.addEventListener('click', ralph)
