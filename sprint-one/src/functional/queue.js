/*
Example of Functional instantiation object:
//Functional Instantiation Pattern
function makeCar(paint) {
  var instance = {
    mileage: 0,
    color: paint,
  }
  instance.drive = function() {
    instance.mileage++;
  }
  return instance;
}

var seansCar = makeCar("red");
seansCar.drive();
var rachelsCar = makeCar("green");
*/

var Queue = function() {
  var index = 0;
  var frontIndex =0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.enqueue = function(value) {
    storage[index] = value;
    index++
  };

  someInstance.dequeue = function() {
    var toReturn = storage[frontIndex];
    storage = _.omit(storage,frontIndex)
    frontIndex++;
    return toReturn;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
