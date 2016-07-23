var oneButton = document.querySelector('.circle1');

function clickOne() {
  oneButton.classList.toggle('on')
  console.log('click1');

  }
  oneButton.addEventListener('click', clickOne)

// ==================

var twoButton = document.querySelector('.circle2');

function clickTwo() {
  twoButton.classList.toggle('on')
  console.log('click2');

  }
  twoButton.addEventListener('click', clickTwo)

// =====================

var threeButton = document.querySelector('.circle3');

function clickThree() {
  threeButton.classList.toggle('on')
  console.log('click3');

}
  threeButton.addEventListener('click', clickThree)

// =========================

var fourButton = document.querySelector('.circle4');
function clickFour() {
  fourButton.classList.toggle('on')
  console.log('click4');
}

fourButton.addEventListener('click', clickFour)

// ===========================

var fiveButton = document.querySelector('.circle5');
function clickFive() {
  fiveButton.classList.toggle('on')
  console.log('click5');
}

fiveButton.addEventListener('click', clickFive)
