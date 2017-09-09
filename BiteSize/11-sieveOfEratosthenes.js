
function sieve(num) {
	// Return all prime numbers up to `num` in an array
	var newNums = {};
	for (let i = 0; i < num; i++ ) {
		newNums[i] = true;
	}
	newNums[0] = false;
	newNums[1] = false;
	console.log('newNums is: ', newNums);
}

sieve(20);