// Currying example
// Create a function that takes the syntax

// tripleAdd(30)(20)(10)

// and returns the sum of all 3 numbers

function tripleAdd(num1) {
  return function(num2) {
    return function(num3) {
      return num1 + num2 + num3;
    }
  }
}

const answer = tripleAdd(30)(20)(10);
console.log('answer is: ', answer);
