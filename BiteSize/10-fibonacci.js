
function fibonacci(position) {
	if (position < 3) {
		return 1;
	} else {
		return fibonacci (position - 1) + fibonacci(position - 2);
	}
}

// This recursive function however is highly not performant, you will never implement this into actual code.

// But if we use Memoization, it actually allows us to do more of what we need to do

function memoFib(index, cache) {
	// Index: Index of number in fobonacci sequence
	// Cache: An array used as memory
	cache = cache || [];
	if (cache[index]) return cache[index];
	else {
		if (index < 3) return 1;
		else {
			cache[index] = memoFib(index - 1, cache) + memoFib(index - 2, cache);
		}
	}
	return cache[index];
}

// console.log(fibonacci(3));

console.log(memoFib(8));