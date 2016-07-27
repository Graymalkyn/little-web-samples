var revealButton = document.querySelector('#reveal-button');
var hiddenText = document.querySelector('.hidden-text');

revealButton.addEventListener('click', function() {
hiddenText.classList.toggle('appear');

});
