/*
  Example:

  Passing in the string "this is a string of words",
  should result in: "siht si a gnirts fo sdrow"

  Gotchas:
  1) You cannot use the array.reverse() method
  2) The goal is to not reverse the whole sentence, but just to reverse every single word
*/

function reverseWords(string) {
	var words = string.split(' ');
	// console.log('our words are: ', words);
	let newString = [];
	words.map(word => {
		let newWord = '';
		// console.log('currently looking at: ', word);
		for (let i = word.length - 1; i >= 0; i--) {
			newWord += word[i];
		}
		newString.push(newWord);
	});
	console.log(newString.join(' '));
	return newString.join(' ');
}

reverseWords('this is a string of words');
reverseWords('Coding Javascript');