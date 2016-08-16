var $theList = $('#the-list');

var sports = ['football', 'baseball', 'soccer', 'rugby', 'basketball', 'NASCAR'];


for (var i=0; i<sports.length; i++){
  var adds = ('<li>' + sports[i] + '</li>');
  $theList.append(adds)
}
