var $theList = $('#the-list');
var food = ['football', 'baseball', 'soccer', 'hockey', 'basketball', 'NASCAR'];


function createListItem(){
  for (var i=0; i<food.length; i++){
    var html = ('<li>' + food[i] + '</li>');
    $theList.append(html);
  }
}

createListItem();
