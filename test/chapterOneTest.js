var require = require || undefined;
var methods = require ? require('../solutions/chapterOne.js') : undefined;

var should = should || require('chai').should;
var expect = expect || require('chai').expect;
var assert = assert || require('chai').assert;

var uniqueString = uniqueString || methods.uniqueString;
var reverseString = reverseString || methods.reverseString;

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
});