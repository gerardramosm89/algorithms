/*
  Goal of this one is to just program in a "functional" way
*/

function meanMediumMode(array) {
	return {
		mean: getMean(array),
		median: getMedian(array),
		mode: getMode(array)
	}
}

function getMean(array) {
	let sum = 0;
	array.map(value => {
		sum += value;
	});
	console.log('sum is: ', sum);
	console.log('array.length is: ', array.length);
	return sum/array.length;
}

function getMedian(array) {
	array.sort((a,b) => a - b);
	let median;
	if (array.length % 2 !== 0) {
		median = array[Math.floor(array.length / 2)];
	} else {
		let mid1 = array[(array.length / 2) - 1];
		let mid2 = array[(array.length / 2)];
		median = (mid1 + mid2) / 2;
	}
	return median;
}

function getMode(array) {
	var modeObj = {};
	var modes = [];
	array.map(num => {
		if (!modeObj[num]) modeObj[num] = 0;
		else modeObj[num]++;
		var maxFrequency = 0;
		for (var num in modeObj) {
			if (modeObj[num] > maxFrequency) {
				modes = [ num ];
				maxFrequency = modeObj[num];
			}
			else if (modeObj[num] === maxFrequency) modes.push(num);
		}
		if (modes.length === Object.keys(modeObj).length) modes = [];
	})


	return modes;
}

console.log(meanMediumMode([1,2,3,4,5,4,6,1]));