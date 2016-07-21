var changeText = document.querySelector('.the-paragraph');

function toggleClass() {
  var containsClass = changeText.classList.contains('toggled');
  changeText.textContent = 'Dont be a weenie...click harder than that!!!';
}

changeText.addEventListener('click', toggleClass);
