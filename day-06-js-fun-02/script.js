//if I replace 'document.querySelector' with '$', I get an error saying '$' is not defined.
var theList = $('#the-list');
var food = ['steak', 'shrimp', 'wings', 'chips', 'queso', 'fajitas'];


function createListItem(){                   //creates function 'bucket' - next three lines define what function does
  for (var i = 0; i < food.length; i++){     //counter
    var html = ('<li>' + food[i] + '</li>'); //var data = (builds list item with current counter result)
    theList.append(html);                    // target.action(data)
  }

}

createListItem();



//Below: original Javascript


// function createListItem(food) {
//
//   var newListItem = document.createElement('li');
//   newListItem.textContent = food;
//   theList.appendChild(newListItem);
//   }
//
// for (var i = 0; i < food.length; i++) {
// createListItem(food[i])
// }
