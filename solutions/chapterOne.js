

var module = module || undefined;
if(module){
  module.exports = {};
  module.exports.uniqueString = uniqueString;
  module.exports.reverseString = reverseString;
  module.exports.anagram = anagram;
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

// Consider duplicates, 

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