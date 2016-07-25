var theList = document.querySelector('#the-list');

var groceryList = [
  'Sausage',
  'Shrimp',
  'Texjoy',
  'Dr Pepper',
  'Steak',
  'Tostitos',
  'Cheese',
  'Gum'
];

for (var i = 0; i < groceryList.length; i++) {
  var groceries = groceryList[i];
  var item = document.createElement('li');
  item.textContent = groceries;

  theList.appendChild(item);
}
