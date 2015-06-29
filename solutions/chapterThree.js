var module = module || undefined;
if (module) {
  module.exports = {};
  module.exports.Node = Node;
  module.exports.Stack = Stack;
}

// Stacks and queues are just like linked lists.
// The only difference is stacks and queues only only have access to the next value.

// Generic Node
function Node (val) {
  this.val = val;
  this.next = null;
}

// Stack Implementation
function Stack () {
  this.top = null;
  this.min = null;
}

Stack.prototype.push = function (value) {
  var item = new Node(value);
  if (this.top !== null) {
    item.next = this.top;
    this.min = value < this.min.val ? item : this.min;
  } else {
    this.min = item;
  }

  this.top = item;
};

Stack.prototype.pop = function () {
  var item;
  if (this.top !== null) {
    item = this.top;
    this.top = this.top.next;
  }
  return item.val || null;
};

Stack.prototype.findMin = function () {

};