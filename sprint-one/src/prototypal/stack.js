var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instances = Object.create(stackMethods);
  instances.storage = {};
  instances.backIndex = -1;

  return instances;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.backIndex++;
  this.storage[this.backIndex] = value;
}

stackMethods.pop = function(){
  var value = this.storage[this.backIndex];
  this.storage = _.omit(this.storage,this.backIndex);
  this.backIndex--;
  return value;
}

stackMethods.size = function(){
  return Object.keys(this.storage).length;
}




