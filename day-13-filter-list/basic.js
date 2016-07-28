//creates variable: superheroes, creates array
var superheroes = [
  {name: 'The Hulk', age: 45, isGoodGuy: true},   //object
  {name: 'The Leader', age: 54, isGoodGuy: false},
  {name: 'Captain America', age: 38, isGoodGuy: true},
  {name: 'Red Skull', age: 49, isGoodGuy: false},
];

var theList;                              //creates global variable: theList
var nameFilterInput;                      //creates global variable: nameFilterInput

//Pulls from array and adds to list
function createDomForArray(arr) {       //creates function with arr contents
  theList.innerHTML = '';               //clears list
  for (var i = 0; i < arr.length; i++) {    //counter: goes thru array
    var li = document.createElement('li');  //creates var to create a list item
    li.textContent = arr[i].name;       //takes current arr content from counter
    theList.appendChild(li);            //applies content to bottom of the list
  }
}
//go to line 51
//returns a list of heroes/villains that match the query's criteria: name
function filterListByName(arr, queryValue) {  //creates function to filter list by          name
  var result = [];                            //creates empty array

  for (var i = 0; i < arr.length; i++) {        //counter - iterates thru array
    var nameContainsQuery = arr[i].name.indexOf(queryValue) > -1; //returns index of query
    if (nameContainsQuery) {
      result.push(arr[i]);   //passes object at [i] to result. push adds object to end of result
  }
}

  return result;                          //returns value: contents of result
}
    //go to 41

function keyUpHappened() {                  //function to recognize keyup

  var value = nameFilterInput.value;        //create var - pulls from var on line 9

  var filtered = filterListByName(superheroes, value);
      //go to 23
        //creates variable filters from
  console.log('filtered', filtered)
  createDomForArray(filtered);       //passing filtered info into createDomForArray
}

    //wait for next keyup event

function start() {                        //creates function
  theList = document.querySelector('#the-list');  //selects element and assigns to list
  createDomForArray(superheroes);       //passing array info into createDomForArray
    //go to line 13

  nameFilterInput = document.querySelector('#name-filter'); //
  nameFilterInput.addEventListener('keyup', keyUpHappened); //assigning callback function to keyup
}    //go to 38 when keyup happens

start() ;                           //called
