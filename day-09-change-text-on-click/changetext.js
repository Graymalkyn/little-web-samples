var changeText = document.querySelector('.paragraph');

function toggleClass() {
  var containsClass = changeText.classList.contains('toggled');
  changeText.textContent = 'Clicked!!!';
}

changeText.addEventListener('click', toggleClass);



// var changeText = $('.the-paragraph');
//
// function toggleClass() {
//   changeText.text("clicked via jQuery")
// }
//
// changeText.on('click', toggleClass);
