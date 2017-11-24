// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const A = buildCharMap(stringA);
  const B = buildCharMap(stringB);
  console.log('A: ', A);
  console.log('B: ', B);
  if (stringA.length !== stringB.length) return false;
  for (let char in A) {
    if (A[char] !== B[char]) return false
  }
  return true
}

function buildCharMap(str) {
  const charMap = {};
  for (let char of str.replace(/\s/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
console.log(false === anagrams('hello aaaaa', 'hello world'));
module.exports = anagrams;
