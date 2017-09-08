function factorial(num) {
	if (num === 1) {
		return 1
	} else {
		result = factorial(num - 1) * num;
		console.log('result is: ', result);
		return result;
	}
}

console.log(factorial(4));