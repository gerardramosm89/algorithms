// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let newStr = str.split(' ');
  let result = [];
  for (let x in newStr) {
    console.log(newStr[x].split('')[0].toUpperCase() + newStr[x].slice(1))
    result.push(newStr[x].split('')[0].toUpperCase() + newStr[x].slice(1))
  }
  console.log(result.join(' '))
  return result.join(' ')
}
capitalize('a short sentence');
module.exports = capitalize;
