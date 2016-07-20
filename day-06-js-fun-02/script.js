console.log('hooked up');
var theList = document.querySelector('#the-list');
console.log(theList);

function createListItem(food) {
  console.log('called createListItem');


var newListItem = document.createElement('li');
newListItem.textContent = food;
theList.appendChild(newListItem);
}

// createListItem('taco');
// createListItem('queso');
// createListItem('chips');


var food = ['steak', 'shrimp', 'wings', 'chips', 'queso', 'fajitas'];

for (var i = 0; i < food.length; i++) {
  console.log(i, food[i]);
  createListItem(food[i])
}
