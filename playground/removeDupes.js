String.prototype.replaceAll = function(search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
// We start with:
let str = 'Linked Lists - Adding To Head';
// Let's replace all dashes with spaces
let newStr = str.replaceAll(' ', '-');
console.log(newStr);


function factorial(num) {
	if (num == 1 || num == 0) return 1;
	else {
		console.log('currentNum is: ', num);
		var result = factorial(num - 1) + num;
		return result;
	}
}

console.log('Recursive is: ', factorial(3));

function factorialIterative(num) {
	let total = 0;
	for (let i = num; num > 0; num--) {
		console.log(num);
		total += num;
	}
	console.log('new total is: ', total);
}

factorialIterative(3);