var theField = document.querySelector('#text-entry');
var theButton = document.querySelector('#entry-button');
var theList = document.querySelector('#the-list');

function addItem(){
  var listItem = document.createElement('li');
  listItem.textContent = theField.value;
  theList.appendChild(listItem);
  theField.value = '';
}
theButton.addEventListener('click', addItem);
