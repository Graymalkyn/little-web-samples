var oneButton = document.querySelector('.circle1');

function clickOne() {
  oneButton.classList.toggle('on')

  }
  oneButton.addEventListener('click', clickOne)

// ==================

var twoButton = document.querySelector('.circle2');

function clickTwo() {
  twoButton.classList.toggle('on')

  }
  twoButton.addEventListener('click', clickTwo)

// =====================

var threeButton = document.querySelector('.circle3');

function clickThree() {
  threeButton.classList.toggle('on')

}
  threeButton.addEventListener('click', clickThree)

// =========================

var fourButton = document.querySelector('.circle4');
function clickFour() {
  fourButton.classList.toggle('on')
}

fourButton.addEventListener('click', clickFour)

// ===========================

var fiveButton = document.querySelector('.circle5');
function clickFive() {
  fiveButton.classList.toggle('on')
}

fiveButton.addEventListener('click', clickFive)





// var oneButton = $('.circle1');
//
// oneButton.click(function(){
//   oneButton.toggleClass('on');
// });
