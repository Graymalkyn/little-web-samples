var theField = document.querySelector('#text-entry');
    //creates 'bucket' to put the keyboard input into
var theButton = document.querySelector('#entry-button');
    //creates 'bucket' to put the mouse click into
var theList = document.querySelector('#the-list');
    //creates 'bucket' to put the created list items into
  function addItem(){
    //creates a function next steps will define the function
    var listItem = document.createElement('li');
    //creates a new <li></li> line in which to put info
    listItem.textContent = theField.value;
    //takes info from theField and fills in the <li></li> created above
    theList.appendChild(listItem);
    //creates a new level at the bottom of the list, and fills it with the data from the previous steps
    theField.value = '';
    //replaces current contents of theField with a blank in preparation for next entry
  }
theButton.addEventListener('click', addItem);
    //starts process with button click,then says to do addItem function.
