var module = module || undefined;
if(module){
  module.exports = {};
  module.exports.uniqueString = uniqueString;
  module.exports.reverseString = reverseString;
  module.exports.anagram = anagram;
  module.exports.replaceSpaces = replaceSpaces;
  module.exports.compressString = compressString;
  module.exports.imageRotation = imageRotation;
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

// Key to remember matrix rotation can be done in layers where each layer represents the outter values.
// AND you can do matrix replacement in place using a spiral approach
// With the spiral approach, store a temp and work backwards pushing each value to replace the forward item.then replace the temp with the value behind it in the spiral, and then replace that value beh


function imageRotation(array){
  var layer, first, last, offset, temp;
  for(layer = 0; layer < array.length/2; layer++){
    first = layer;
    last =  array.length - 1 - layer;
    for(offset = 0; offset < last; offset++){
      temp = array[first][first + offset];
      array[first][first + offset] = array[last - offset][first];
      array[last - offset][first] = array[last][last - offset];
      array[last][last - offset] = array[first + offset][last];
      array[first + offset][last] = temp;
    }
  }
  return array;
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


// For rotation problems, use modulo arithmetic where the length of the item is the modulo so that length-1 is considered but length itself is congruent to zero!

// Modulo for A % B === A where A < B

// Another possible trick is to duplicate the rotated value and then test to see if the non-rotated value is a substring of the bigger value.
// For example: s1 = waterbottle, s2 = erbottlewat
// s2 + s2 = erbottlewaterbottlewat
// check if s1 isSubstring of s2 + s2 => erbottle|waterbottle|wat

function isRotation(s1,s2){
  var lookup, runner = 0;
  if(s1.length !== s2.length) return false;
  for(var index = 0; index < s1.length * 2; index++){
    lookup = index % s1.length;
    if(s1.charAt(lookup) === s2.charAt(runner)){
      runner++;
    }else if(runner === s2.length){
      return true;
    }else{
      runner = 0;
    }
  }
  return false;
}
