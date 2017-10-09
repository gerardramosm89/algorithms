/*
	Guidelines:
	1) Result should be an array of arrays
	2) Any number in the 'numArray' can be used in multiple pairs

	We want to shoot for O(n) time complexity
*/

let numArray = [40, 11, 19, 17, -12];


function twoSum(numArray, sum) {
	var pairs = [];
	var hashTable = {};
	var pairs = [];

	for (let i = 0; i < numArray.length; i++) {
		var curNum = numArray[i];
		var counterPart = sum - curNum;
		if (!hashTable[curNum]) hashTable[curNum] = 1

		if (hashTable[counterPart]) {
			console.log(`The number we need to make ${sum} with ${curNum} is in the array`);
			pairs.push([curNum, counterPart]);
		}
		console.log('curNum is: ', curNum);
	}
	console.log('final pairs array is: ', pairs);
}

twoSum(numArray, 28);