var button = document.querySelector('#button');
var input = document.querySelector('#input');
var output = document.querySelector('.output');
var count = 0;

var inputValue;


var randomNumber = Math.ceil(Math.random() * 10);

function guessFunc() {
  count++;

    inputValue = input.value;

if (inputValue == randomNumber) {   //why does == work and === doesn't?  With === it was preventing 'success' function to work...no output.
  output.textContent = "Arr!! Ya found me treasure!!";
  return                           //why do I need this return? If not here, shows failure message.
  }

    else {
      if (inputValue > randomNumber) {
      output.textContent = "Drop Anchor!!";
      }

      else if (inputValue < randomNumber) {
      output.textContent = "Raise Sails!!";
      }
    }
    if (count == 4){
    output.textContent = "Walk the plank, matey!!";
  }
};


button.addEventListener('click', guessFunc);
