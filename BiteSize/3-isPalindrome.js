
// this is taking in the assumption that

function isPalindrome(string) {
  var string = string.toLowerCase();
  var charactersArr = string.split('');
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');

  var lettersArr = [];
  // First let's make sure that we only have letters, no spaces, or apostrophes, etc.
  charactersArr.map(char => {
    if (validCharacters.indexOf(char) > -1) lettersArr.push(char);
  })
  // A good way of checking would be to reverse the array, then compare each letter one by one to the original one. You could approach this by implementing your own version of reversing the array, or you could just use a built in rule. Really doesn't matter which one you choose. Regardless reversing the array will require n time because you have to make sure you move each element in the array into the proper "reverse spot"
  if (lettersArr.join('') === lettersArr.reverse().join('')) return true
  else return false;
}

console.log(isPalindrome("thecar"));