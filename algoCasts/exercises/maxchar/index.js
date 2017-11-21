// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let list = {};
  let highestVal = 0;
  str.split('').map(char => {
    if(list[char]) list[char] += 1;
    else list[char] = 1;
    if (list[char] > highestVal) {
      highestVal = list[char];
      currentHighest = char;
    };
  });
  console.log('list is: ', list);
  console.log('current highest is: ', currentHighest);
  return currentHighest;
}
maxChar('Hello There!');
module.exports = maxChar;
