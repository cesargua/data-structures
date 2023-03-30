var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  newStack.storage = {};
  newStack.backIndex = -1;
  return _.extend(newStack, stackMethods);
};

var stackMethods = {};

stackMethods.push = function(value){
  this.backIndex++;
  this.storage[this.backIndex] = value;
}

stackMethods.pop = function(){
  var toReturn = this.storage[this.backIndex]
  this.storage = _.omit(this.storage,this.backIndex)
  if(this.backIndex >= 0)
    this.backIndex--;
  return toReturn;
}

stackMethods.size = function(){
  return this.backIndex + 1;
}

