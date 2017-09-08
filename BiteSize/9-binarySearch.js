/*
	One of the most popular search algorithms!
*/

function binarySearch(numArray, key) {
	console.log("First let's find the middle index");
	let midIndex = Math.floor(numArray.length / 2);
	console.log("midIndex is: ", midIndex);
	if (numArray[midIndex] === key) {
		return numArray[midIndex];
	} else if (midIndex < key && numArray.length > 1) {
		return binarySearch(numArray.splice(midIndex, numArray.length), key);
	} else if(midIndex > key && numArray.length > 1) {
		return binarySearch(numArray.splice(0, midIndex), key);
	} else {
		return 'Key is not in the array passed in';
	}
}

var arr = [5,7,12,16,36,39,42,56,71];
console.log(binarySearch(arr, 1));

// Then we found it in 3 iterations