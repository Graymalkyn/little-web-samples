var myHouse = {
  bedroomCount: 3,
  bathroomCount: 2,
  stories: 1,
  squareFootage: 2100
};

var $bedrooms = $('#number-of-bedrooms');
var starterText = $bedrooms.text();
starterText = starterText + myHouse.bedroomCount;
$bedrooms.text(starterText);

/*
$bedrooms.text($bedrooms.text() + myHouse.bedroomCount);
*/

var $bathrooms = $('#number-of-bathrooms');
console.log($bathrooms);
$bathrooms = myHouse.bathroomCount;
//$bathrooms.text(myHouse.bathroomCount);
console.log($bathrooms);

var $stories = $('#stories');
$stories.textContent = myHouse.stories;

var $sqFootage = $('#square-footage');
$sqFootage.textContent = myHouse.squareFootage;
