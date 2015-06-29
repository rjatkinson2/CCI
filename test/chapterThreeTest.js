// Require statements and conditional assignments are utilized to permit both node and browser based tests.
// To test in Node, run 'mocha' in the terminal. To test in the browser, simply open up SpecRunner.html

var require = require || undefined;
var methods = require ? require('../solutions/chapterThree.js') : undefined;

var should = should || require('chai').should;
var expect = expect || require('chai').expect;
var assert = assert || require('chai').assert;

var Node = Node || methods.Node;
var Stack = Stack || methods.Stack;

// Write tests below:

describe('Chapter Three of Cracking the Coding Interview', function () {
  var stack;

  beforeEach(function() {
    stack = new Stack();
  });

  describe('Stack class should be implemented properly', function () {
    it('Should contain pop, push, and findMin class methods', function () {
      expect(stack.pop).to.be.a('function');
      expect(stack.push).to.be.a('function');
      expect(stack.findMin).to.be.a('function');
    });
    it('Pop should return the correct value', function () {
      stack.push(10);
      stack.push(12);
      stack.push(12);
      expect(stack.pop()).to.equal(12);
    });    
    it('Pop should return the correct value even after a push invocation', function () {
      stack.push(10);
      stack.push(12);
      stack.pop();
      stack.push(1);
      expect(stack.pop()).to.equal(1);
    });
  });
});