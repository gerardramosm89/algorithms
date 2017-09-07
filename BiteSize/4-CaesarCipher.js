// Ceasar Cipher is always fun, because it is a fun way to encrypt something by moving over the value of the letter by the number that you put in. The only tricky part to this would be when you get to having to move let's say z by 2 spaces, you should get b.


/*
  1) The number input should also allow negative numbers.
  2) When reaching the end of the alphabet 'Z', the cipher should wrap around back to 'A', moving forward as required.
    - For Example 'Z' moved over by two, should result in 'B'
    - and if we have 'B', and we input a '-2', we should result in getting 'Z' back
  3) The algorithm should allow both lower case and upper case letters.
*/
function caesarCipher(str, num) {
  var lowerCaseString = str.toLowerCase();
  var validCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  console.log(lowerCaseString);
  var newString = '';
  for (var i = 0; i < lowerCaseString.length; i++) {
    var currentLetter = lowerCaseString[i];    
    if (currentLetter === ' ') {
      newString += currentLetter;
      continue; // Important to note here that when the loop hits this line, it goes to the next iteration, ignoring the rest of the code below this one
    }
  }
}

caesarCipher('zoo kee per ', 2);
