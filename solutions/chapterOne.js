var module = module || undefined;
if(module){
  module.exports = {};
  module.exports.uniqueString = uniqueString;
  module.exports.reverseString = reverseString;
  module.exports.anagram = anagram;
  module.exports.replaceSpaces = replaceSpaces;
  module.exports.compressString = compressString;
  module.exports.zeroes = zeroes;
  module.exports.isRotation = isRotation;
}

// Important to know whether ASCII string or a Unicode String
// Need to consider all characters  
// Constant space complexity with ASCII because you max out at 128 possible characters.

function uniqueString(string){
  var uniques = {};
  for(var i = 0; i < string.length; i++){
    if(uniques[string.charAt(i)]){
      return false;
    }
    else{
      uniques[string.charAt(i)] = true;
    }
  }
  return true;
}

// Consider duplicate letters.

function reverseString(string){
  var store;
  var ars = string.split('');
  var length = string.length;
  var loop = Math.floor(length/2);
  for(var i = 0; i < loop; i++){
    if(ars[i] !== ars[length-1-i]){
      store = ars[i];
      ars[i] = ars[length-1-i];
      ars[length-1-i] = store;
    }
  }
  return ars.join('');
}

function anagram(s1, s2){
  var charCount = {};
  if(s1.length !== s2.length) return false;
  for(var i = 0; i < s1.length; i++){
    if(charCount.hasOwnProperty(s1.charAt(i))){
      charCount[s1.charAt(i)]++;
    }else{
      charCount[s1.charAt(i)] = 1;
    }
  }for(var j = 0; j < s2.length; j++){
    if(charCount.hasOwnProperty(s2.charAt(j)) && charCount[s2.charAt(j)] > 0){
      charCount[s2.charAt(j)]--;
    }else{
      return false;
    }
  }
  return true;
}

// String manipulation works best when editing the string from the end and working backwards since you know that you will always have reference to characters that haven't been overwritten yet.
// The implementation below is superfluous in order to mimic Java's character array implementation.

function replaceSpaces(str){
  var length = str.length;
  var stringArray = str.split("");
  var spaceCount = 0;
  for(var i = 0; i < length; i++){
    if(stringArray[i] === ' '){
      spaceCount++;
    }
  }
  if(spaceCount === 0) return str;
  var newLength = length + (spaceCount * 2);
  for(var j = length - 1; j >= 0; j--){
    if(stringArray[j] === ' '){
      stringArray[newLength - 1] = '0';
      stringArray[newLength - 2] = '2';
      stringArray[newLength - 3] = '%';
      newLength = newLength - 3;
    }else{
      stringArray[newLength - 1] = stringArray[j];
      newLength--;
    }
  }
  return stringArray.join('');
}

// Using += concatenation or numerical addition only works if the original value is instantiated with the appropriate number or string type.

function compressString(str){
  var strArray = str.split('');
  var cl = strArray[0], total = 1, gain = 0, output = "";
  for(var i = 0; i < strArray.length; i++){
    if(i !== 0 && cl === strArray[i]){
      total++;
    }
    if(cl !== strArray[i+1]){
      output += cl + total;
      cl = strArray[i+1];
      gain += total - 2;
      total = 0;
    }
  }
  return gain > 0 ? output : str;
}

// Consider setting booleans at each index for future reference rather than a hash with matching key/values and hasOwnProperty

function zeroes(array){
  var mHash = {}, nHash = {};
  for(var n = 0; n < array.length; n++){
    for(var m = 0; m < array[n].length; m++){
      if(array[n][m] === 0){
        mHash[m] = m;
        nHash[n] = n;
      }
    }
  }
  for(var y = 0; y < array.length; y++){
    for(var x = 0; x < array[y].length; x++){
      if(nHash.hasOwnProperty(y) || mHash.hasOwnProperty(x)){
        array[y][x] = 0;
      }
    }
  }
  return array;
}

function isRotation(s1,s2){
  if(s1.length !== s2.length) return false;
  var start = [];
  for(var j=0; j < s2.length; j++){
    if(s1.charAt(0) === s2.charAt(j)){
      start.push([0,j]);
    }
  }
  var test = 0, check, offset;
  for(var k = 0; k < s1.length; k++){
    offset = (k + start[test][1] - start[test][0]);
    check = offset < s2.length ? offset : (offset - s2.length);
    if(s1.charAt(k) !== s2.charAt(check)){
      test++;
      k = -1;
    }
    if(test >= start.length){
      return false;
    }
    if(check === start[test][1] - 1 || (start[test][1] === 0 && check === s2.length - 1)){
      return true;
    }
  }
}

