var myHouse = {
  bedroomCount: 3,
  bathroomCount: 2,
  stories: 1,
  squareFootage: 2100
};

console.log(myHouse);

var numberOfBedroomsDiv = document.querySelector("#number-of-bedrooms")
var starterText = numberOfBedroomsDiv.textContent;
numberOfBedroomsDiv.textContent = starterText + myHouse.bedroomCount;

var numberOfBathroomsSpan = document.querySelector('#number-of-bathrooms');
numberOfBathroomsSpan.textContent = myHouse.bathroomCount;

var numberOfStoriesSpan = document.querySelector('#stories');
numberOfStoriesSpan.textContent = myHouse.stories;

var squareFootage = document.querySelector('#square-footage');
squareFootage.textContent = myHouse.squareFootage;
