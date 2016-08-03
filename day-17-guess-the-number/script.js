var button = document.querySelector('#button');
var input = document.querySelector('#input');
var output = document.querySelector('.output');
var count = 0;
var inputValue;
var randomNumber = Math.ceil(Math.random() *10);
 console.log(randomNumber)
function guessFunc() {
  count++;

    inputValue = input.value;

  if (inputValue == randomNumber) {  //why does == work and === doesn't?  With === it was preventing 'success' function to work...no output.
    output.textContent = "Arrr!!  Ya got me booty!!";
    return                           //why do I need this return? If not here, shows failure message.
  }
  else {
    if (inputValue > randomNumber) {
      output.textContent = "Drop Anchor";
    }
    else if (inputValue < randomNumber) {
      output.textContent = "Raise Sails";
    }
  }
  if (count == 4) {
    output.textContent = "Walk the plank, ya scurvy dog!!";
  }

};

button.addEventListener('click', guessFunc);
