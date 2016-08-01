var theList = document.querySelector('#the-list');

theList.addEventListener('click', function(evt) {
    // if (evt.target.tagName !== "LI"); {
    //
    // }
    
    var currentlySelectedLI = document.querySelector('.selected');
    console.log('currentlySelectedLI', currentlySelectedLI);
    if (currentlySelectedLI !== null) {
      currentlySelectedLI.classList.remove('selected');
    }
    //adds a selected class to the target LI
    evt.target.classList.add('selected')
});
