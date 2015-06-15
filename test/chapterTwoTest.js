// Require statements and conditional assignments are utilized to permit both node and browser based tests.
// To test in Node, run 'mocha' in the terminal. To test in the browser, simply open up SpecRunner.html

var require = require || undefined;
var methods = require ? require('../solutions/chapterTwo.js') : undefined;

var should = should || require('chai').should;
var expect = expect || require('chai').expect;
var assert = assert || require('chai').assert;

var removeDuplicates = removeDuplicates || methods.removeDuplicates;
var findK2Last = findK2Last || methods.findK2Last;

// Linked List Implementation.
var LinkedList = function(){
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.createNode = function(val){
  this.val = val;
  this.next = null;
};

LinkedList.prototype.addToTail = function(node){
  if(this.head === null && this.tail === null){
    this.head = this.tail = node;
  }else if(this.tail === null){
    this.tail = node;
    this.head.next = this.tail;
  }else{
    this.tail.next = node;
    this.tail = node;
  }
};

LinkedList.prototype.removeHead = function(){
  if(this.head === null) return null;
  var oldHead = this.head;
  this.head = this.head.next;
  return oldHead;
};
// Write tests below:

describe('Chapter Two of Cracking the Coding Interview', function(){
  
  var linkedList, head;
  
  beforeEach(function(){
    console.log('testing beforeEach');
    linkedList = new LinkedList();
    head = new linkedList.createNode(5);
    linkedList.addToTail(head);
  });

  describe('2.1: Remove duplicates from LinkedList', function(){
    it('should remove duplicates from a linked list', function(){
      var nodes = [9,5,9,4];
      nodes.forEach(function(val){
        linkedList.addToTail(new linkedList.createNode(val));
      });

      expect(removeDuplicates(head).next.val).to.equal(9);
      expect(removeDuplicates(head).next.next.val).to.equal(4);
    });
    it('handle a list of all duplicate values and return head node with next pointer to null', function(){
      var nodes = [5,5,5,5,5,5,5,5,5];
      nodes.forEach(function(val){
        linkedList.addToTail(new linkedList.createNode(val));
      });
      
      expect(removeDuplicates(head).next).to.equal(null);
    });
  });

  describe('2.2: Find kth to last node from a linked list', function(){
    it('should return the kth to last node from a linked list', function(){
      var nodes = [9,5,9,4];
      nodes.forEach(function(val){
        linkedList.addToTail(new linkedList.createNode(val));
      });

      expect(findK2Last(head, 2).val).to.equal(5);
      expect(findK2Last(head, 3).val).to.equal(9);
      expect(findK2Last(head, 4).val).to.equal(5);
    });
    it('should return undefined if k is greater than or equal to the linked list length', function(){
      var nodes = [9,5,9,4];
      nodes.forEach(function(val){
        linkedList.addToTail(new linkedList.createNode(val));
      });

      expect(findK2Last(head, 5)).to.equal(undefined);
    });
  });
});