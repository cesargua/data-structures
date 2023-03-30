class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.currIndex = 0;
    this.storage = {};
    this.frontIndex = 0;
  }

  enqueue (value) {
    this.storage[this.currIndex] = value;
    this.currIndex++;
  }

  dequeue () {
    var value = this.storage[this.frontIndex]
    this.storage = _.omit(this.storage, this.frontIndex)
    this.frontIndex++;
    return value;
  }

  size(){
    return Object.keys(this.storage).length;
  }

}
