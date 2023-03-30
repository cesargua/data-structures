/*
//Functional-Shared Instantation Pattern
function makeCarShared(paint) {
  var instance = {
    mileage: 0,
    color: paint,
    drive: carMethods.drive
  }
  return instance;
}

var carMethods = {};
carMethods.drive = function () {
  this.mileage++; //this === thomasCar
}

var thomasCar = makeCarShared("black");
thomasCar.drive();
var seguyCar = makeCarShared("blue");
seguyCar.drive(); //this === seguyCar

*/


var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  //debugger;
  var newQueue = {};
  newQueue.storage = {};
  newQueue.index = 0;
  newQueue.frontIndex = 0;
  newQueue.sizeOfQueue = 0;

  newQueue = _.extend(newQueue,queueMethods)
  return newQueue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.index] = value;
  this.index++;
  this.sizeOfQueue++;
}

queueMethods.dequeue = function(){
  var toReturn = this.storage[this.frontIndex]
  this.storage = _.omit(this.storage, this.frontIndex)
  this.frontIndex++;
  if(this.sizeOfQueue > 0)
    this.sizeOfQueue--;
  return toReturn;
}
queueMethods.size = function(){
  debugger;
  return this.sizeOfQueue;
}

