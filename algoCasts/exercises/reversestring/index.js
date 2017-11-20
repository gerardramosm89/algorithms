// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  console.log('string is: ', str);
  const newString = str.split('').reverse();
  console.log('newString is: ', newString);
  return newString.join('');
}
console.log(reverse('apple'));
module.exports = reverse;
