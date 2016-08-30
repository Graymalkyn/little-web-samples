var theField = $('#text-entry');
var theButton = $('#entry-button');
var theList = $('#the-list');

function addItem(){
  theList.text = theField.value;
  console.log(theList);
  theList.append('<li></li>');
}
theButton.on('click', addItem);
