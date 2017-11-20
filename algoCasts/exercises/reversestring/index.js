// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// Solution 1

// function reverse(str) {
//   console.log('string is: ', str);
//   const newString = str.split('').reverse();
//   console.log('newString is: ', newString);
//   return newString.join('');
// }

// Solution 2
// let reverse = (str) => {
//   let reversed = '';
//   for (let char of str) {
//     reversed = char + reversed;
//   }
//   return reversed;
// }

// Solution 3
const reverse = (str) => {
  return str.split('').reduce((reversed, char) => {
    return char + reversed;
  }, '');
  debugger;
}
console.log(reverse('apple'));
module.exports = reverse;
