var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.frontIndex = 0;
  this.storage = {}
  this.currIndex=0
};

Queue.prototype.enqueue = function(value){
  this.storage[this.currIndex] = value;
  this.currIndex++;
}

Queue.prototype.dequeue = function(){
  var value = this.storage[this.frontIndex]
  this.storage = _.omit(this.storage,this.frontIndex)
  this.frontIndex++;
  return value;
}

Queue.prototype.size = function(){
  return Object.keys(this.storage).length;
}

