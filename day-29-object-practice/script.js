'use strict';
if (this.ObjectPractice === undefined) this.ObjectPractice = {};

(function(context) {

  function generateHP(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);

  }

  function generateRandomName(){
    var names = ['bob', 'joe', 'fred', 'thelma', 'jim'];
    var index = Math.floor(Math.random() * names.length);
    var name = names[index];
    return name;
  }

  function generateRandomCharacter(){

    var names = ['bob', 'joe', 'fred', 'thelma', 'jim'];
    var index = Math.floor(Math.random() * names.length);
    var name = names[index];

    var name = generateRandomName();
    var hp = generateHP(5,10);

    return { name: name, hp: hp };
  }

  function start() {
    var templateHtml = $('#dude-template').html();
    var templateFunc = _.template(templateHtml);


    for (var i=0; i<10; i++){
      var html = templateFunc(generateRandomCharacter());
      $('#characters').append(html);
    }

  }

  context.start = start;

})(window.ObjectPractice);
