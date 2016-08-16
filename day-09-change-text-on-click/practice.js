var changeText = $('.paragraph');

function toggleText(){
  changeText.text('Hava Nagila');
}



changeText.on('click', toggleText);
