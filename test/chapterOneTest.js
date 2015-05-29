// Require statements and conditional assignments are utilized to permit both node and browser based tests.
// To test in Node, run 'mocha' in the terminal. To test in the browser, simply open up SpecRunner.html

var require = require || undefined;
var methods = require ? require('../solutions/chapterOne.js') : undefined;

var should = should || require('chai').should;
var expect = expect || require('chai').expect;
var assert = assert || require('chai').assert;

var uniqueString = uniqueString || methods.uniqueString;
var reverseString = reverseString || methods.reverseString;
var anagram = anagram || methods.anagram;
var replaceSpaces = replaceSpaces || methods.replaceSpaces;

// Write tests below:

describe('Chapter One of Cracking the Coding Interview', function(){
  describe('1.1: String has all unique characters', function(){
    it('should return false when a duplicate letter exists', function(){
      expect(uniqueString('babble')).to.equal(false);
    });
    it('should return false when any duplicate character exists', function(){
      expect(uniqueString('!babble!')).to.equal(false);
    });
    it('should return true when no duplicates exist', function(){
      expect(uniqueString('abcdefg')).to.equal(true);
    });

  });

  describe('1.2: Reverse String', function(){
    it('should reverse a string of letters', function(){
      expect(reverseString('boogie')).to.equal('eigoob');
    });
    it('should reverse a string of random characters', function(){
      expect(reverseString('#!@$%AB12@!#$$$')).to.equal('$$$#!@21BA%$@!#');
    });
    it('should reverse a string of duplicate characters', function(){
      expect(reverseString('!!!!!!!!!!!!')).to.equal('!!!!!!!!!!!!');
    });
  });
  
  describe('1.3: Is an anagram', function(){
    it('should return false if strings are not the same length', function(){
      expect(anagram('bananas', 'bananats')).to.equal(false);
    });
    it('should return true for same length but different characters', function(){
      expect(anagram('bananas', 'bananats')).to.equal(false);
    });
    it('should return true for random characters', function(){
      expect(anagram('#!@$%AB12@!#$$$', '$$$#!@21BA%$@!#')).to.equal(true);
    });
    it('should return true for repeat letters', function(){
      expect(anagram('ffffffff', 'ffffffff')).to.equal(true);
    });
  });

  describe('1.4: Space replacement', function(){
    it('should replace all spaces with %20', function(){
      expect(replaceSpaces('you sir rock')).to.equal('you%20sir%20rock');
    });
    it('should return the original string if it does not contain spaces', function(){
      expect(replaceSpaces('boogiewoogie')).to.equal('boogiewoogie');
    });
  });
});