var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var instances = Object.create(queueMethods);
  instances.storage = {}
  instances.indexNum = 0;
  instances.frontIndex = 0;

  return instances;

};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.storage[this.indexNum] = value
  this.indexNum++;
}

queueMethods.dequeue = function(){
  var value = this.storage[this.frontIndex];
  this.storage = _.omit(this.storage,this.frontIndex)
  this.frontIndex++;
  return value;
}

queueMethods.size = function(){
  return Object.keys(this.storage).length
}




