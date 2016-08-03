var theList = document.querySelector('#the-list');

var names = ['Bob', 'Sue', 'Fred', 'Jack', 'Dean'];

for (var i = 0; i < names.length; i++) {
  var people = names[i];

  var li = document.createElement('li');
  li.textContent = people;
  theList.appendChild(li);
}

theList.addEventListener('click', function(evt){
  if (evt.target.tagName === 'LI') {
    evt.target.classList.toggle('alternate');
  }
});
