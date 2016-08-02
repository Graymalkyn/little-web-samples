var button = document.querySelector('#button');
var input = document.querySelector('#input');
var output = document.querySelector('.output');
var count = 0;

var inputValue;


var randomNumber = Math.ceil(Math.random() * 10);
console.log(randomNumber)

function guessFunc() {
  count++;
  console.log("count:",count)

    inputValue = input.value;

if (inputValue == randomNumber) {   //why does == work and === doesn't?  With === it was preventing 'success' function to work...no output.
       console.log("Treasure")
  output.textContent = "Arr!! Ya found me treasure!!";
  return                           //why do I need this return? If not here, shows failure message.
  }

    else {
      if (inputValue > randomNumber) {
          console.log("Anchor")
      output.textContent = "Drop Anchor!!";
      }

      else if (inputValue < randomNumber) {
          console.log("Sails")
      output.textContent = "Raise Sails!!";
      }
    }
    if (count == 3){
         console.log("max tries")
    output.textContent = "Walk the plank, matey!!";
  }
};


button.addEventListener('click', guessFunc);
