var changeText = $('.the-paragraph');

function toggleClass() {
  changeText.text("clicked via jQuery")
}

changeText.on('click', toggleClass);
