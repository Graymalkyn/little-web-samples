  'use strict';

var car = new Car();
var morePassengers;

function Car(){
}

Car.prototype.honk = function() {
  return "beep beep"
}

function Car(make, model){
  this.make = "Toyota";
  this.model = "Tacoma";
  this.passengers = [];
  morePassengers = this.passengers;
}

Car.prototype.addPassengers = function(passengers){
  morePassengers.push(passengers);
}
