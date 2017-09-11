var nums = [5,3,8,2,1,4];

function bubbleSort(array) {
	console.log('initial array length is: ', array.length);
	for (let i = array.length - 1; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (array[j] > array[j + 1]) {
			var temp = array[j];
			console.log('switching');
			array[j] = array[j + 1];
			array[j + 1] = temp;
			}
		}
	}
	console.log('Final sorted array is: ', array);
}

bubbleSort(nums);
/*
	Bubble sort takes in an array of numbers. this algorithm will spit back out a sorted array
*/