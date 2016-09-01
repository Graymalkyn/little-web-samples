'use strict';

var car = new Car();

function Car(){
}

Car.prototype.honk = function(make, model) {
  this.make = 'Toyota';
  this.model = 'Tacoma';
  return "beep beep"
}
