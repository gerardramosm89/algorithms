var test1 = [1,2,3,9]; // This should return false because no two numbers 
var test2 = [1,2,3,4,4,5];
var target = 8;

// Outside-In Solution

// Assuming the input array is sorted

function hasPair(arr, target) {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex < endIndex) {
    let check = arr[startIndex] + arr[endIndex];      
    console.log('check is: ', check);
    if (check < target) {
      console.log('less than target');
      startIndex++;
    } else if (check > target) {
      console.log('greater than target');      
      endIndex--;
    } else if (check === target) {
      console.log('found our pair!');
      return { startIndex, endIndex }
    } else {
      console.log('could not find out pair');
      return { error: 'No pair' }
    }
    console.log('startIndex is: ', startIndex);
    console.log('endIndex is: ', endIndex);
  }
}

// console.log(hasPair(test1, target));
console.log(hasPair(test1, target));
