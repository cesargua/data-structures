class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.backIndex = -1
    this.storage = {};
  }

  push(value) {
    this.backIndex++;
    this.storage[this.backIndex] = value;
  }

  pop() {
    var value = this.storage[this.backIndex];
    this.storage = _.omit(this.storage, this.backIndex);
    this.backIndex--;
    return value;
  }

  size() {
    return Object.keys(this.storage).length;
  }

}