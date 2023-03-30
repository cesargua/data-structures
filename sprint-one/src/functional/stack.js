var Stack = function() {
  //var index = 0;
  var backIndex = -1;
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    backIndex++;
    storage[backIndex] = value;
  };

  someInstance.pop = function() {
    var toReturn = storage[backIndex];
    storage = _.omit(storage,backIndex)
    if(backIndex >= 0) {
      backIndex--;
    }

    return toReturn;
  };

  someInstance.size = function() {
    return backIndex + 1;
  };

  return someInstance;
};
