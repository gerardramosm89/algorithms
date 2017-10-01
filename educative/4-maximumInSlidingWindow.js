// Given an array of ints, find the largest in the window at all times
// Window has size of 3

var arr = [-4, 2, -5, 3, 6];

// Brute force approach
function bruteWindow(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    var num1 = arr[i];
    var num2 = arr[i + 1];
    var num3 = arr[i + 2];
    var num1;
    if (num1 > num2 && num1 > num3) {
      max = num1;
    } else if (num2 > num1 && num2 > num3) {
      max = num2;
    } else if (num3 > num1 && num3 > num2) {
      max = num3;
    }
    console.log(`For the window: [${num1}, ${num2}, ${num3}]`);
    console.log(`max is: ${max}`)
  }
}

bruteWindow(arr);

// Doubly Linked List approach