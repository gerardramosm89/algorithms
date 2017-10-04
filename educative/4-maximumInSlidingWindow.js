// Given an array of ints, find the largest in the window at all times
// Window has size of 3

// var arr = [-4, 2, -5, 3, 6];
var arr = [-4, 2, -5, 1, -1, 6];


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
  }
}

// bruteWindow(arr);

// Doubly Linked List approach
// Steps for algorithm:
/*
  1. Iterate through each element one by one
  2. Remove all elements from tail of window that are smaller than or equal to the current element we are looking at
  3. Push the current element at the tail of the window
  4. Current max will always be at the head
*/
function findMaxInWindow(arr, window_size) {
  let window = [];
  // Initially iterating through first window_size elements of the array
  for (let i = 0; i < window_size; i++) {
    // while (window.length > 0 && arr[window[window.length - 1]]) {

    // }
    console.log('arr[i] is: ', arr[i]);
    console.log('window.length - 1: ', window.length - 1);
    console.log('window[window.length - 1]: ', window[window.length - 1]);
    window.push(i);
    console.log(window);
  }
}

let find_max_sliding_window = function(arr, window_size) {
  let result = [];
  if (window_size > arr.length) {
    return;
  }

  let window_ = [];
  //find out max for first window
  for (let i = 0; i < window_size; i++) {
    while (window_.length > 0 
           && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }
    
    window_.push(i);
  }
  
  for (let i = window_size; i < arr.length; i++) {
    // remove all numbers that are smaller than current number
    // from the tail of list
    while (window_.length > 0 
           && arr[i] >= arr[window_[window_.length - 1]]) {
      window_.pop();
    }
    
    //remove first number if it doesn't fall in the window anymore
    if (window_.length > 0 
        && (window_[0] <= i - window_size)) {
      window_.shift();
    }
    
    window_.push(i);
    result.push(arr[window_[0]]);
  }
  console.log('result is: ', result);
  return result;
};

console.log(find_max_sliding_window(arr, 3));




