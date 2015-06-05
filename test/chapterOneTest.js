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
var compressString = compressString || methods.compressString;
var imageRotation = imageRotation || methods.imageRotation;
var zeroes = zeroes || methods.zeroes;
var isRotation = isRotation || methods.isRotation;

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

  describe('1.5: Compress string', function(){
    it('should compress repeated characters into a shorthand notation of letter-number', function(){
      expect(compressString('aabbbcccaaaa')).to.equal('a2b3c3a4');
    });
    it('should return the original string if the compressed version is not shorter', function(){
      expect(compressString('aabbccddeeffgg')).to.equal('aabbccddeeffgg');
    });
    it('should handle the case where compression is only more efficient by one character', function(){
      expect(compressString('aabbccddeeffggg')).to.equal('a2b2c2d2e2f2g3');
    });
    it('should handle zero repeated characters', function(){
      expect(compressString('abcdefghijklmnopqrstuvwxyz')).to.equal('abcdefghijklmnopqrstuvwxyz');
    });
  });

  describe('1.6: Rotate image ninety degrees', function(){
    it('should rotate image ninety degrees', function(){
      expect(imageRotation([[1,2,3],[4,5,6],[7,8,9]])).to.deep.equal([[7,4,1],[8,5,2],[9,6,3]]);
    });
    it('should rotate matrix containing any type of data', function(){
      expect(imageRotation([['dog',2,234324234],[4,false,6],[7,8,[{test: false}]]])).to.deep.equal([[7,4,'dog'],[8,false,2],[[{test: false}],6,234324234]]);
    });
  });  

  describe('1.7: Row and column replace with zeros', function(){
    it('should find all zero elements in an MxN matrix and replace each isntances entire row and columns with zeroes', function(){
      expect(zeroes([[1,2,3,8],[0,4,1,14],[2,9,0,7]])).to.deep.equal([[0,2,0,8],[0,0,0,0],[0,0,0,0]]);
    });
    it('should return the original array if there are no zeroes', function(){
      expect(zeroes([[1,2,3,8],[1,4,1,14],[2,9,10000,7]])).to.deep.equal([[1,2,3,8],[1,4,1,14],[2,9,10000,7]]);
    });
    it('should return all zeroes if every row or column has at least one zero', function(){
      expect(zeroes([[1,2,3,0],[0,4,1,14],[2,0,0,7]])).to.deep.equal([[0,0,0,0], [0,0,0,0], [0,0,0,0]]);
    });
    it('should not break for duplicate zeroes', function(){
      expect(zeroes([[0,2,3,0],[0,4,1,14],[0,12,14,3]])).to.deep.equal([[0,0,0,0], [0,0,0,0], [0,0,0,0]]);
    });
  });

  describe('1.8: Check if string is rotation of another string', function(){
    it('should return true for a valid rotation', function(){
      expect(isRotation('ttlewaterbo', 'waterbottle')).to.equal(true);
    });
    it('should return false for strings of inequal lengths', function(){
      expect(isRotation('ttlewaterbottle', 'waterbottle')).to.equal(false);
    });
    it('should work properly with duplicate characters', function(){
      expect(isRotation('aaaaaaaaa', 'aaaaaaaaa')).to.equal(true);
    });
    it('should work properly with any characters', function(){
      expect(isRotation('#$@!%^!#@$%', '%^!#@$%#$@!')).to.equal(true);
    });
  });
});