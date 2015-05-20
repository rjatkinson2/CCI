
// Important to know whether ASCII string or a Unicode String
// Need to consider all characters  
// Constant space complexity with ASCII because you max out at 128 possible characters.

var module = module || undefined;
if(module){
  module.exports = {};
  module.exports.uniqueString = uniqueString;
  module.exports.reverseString = reverseString;
}

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
