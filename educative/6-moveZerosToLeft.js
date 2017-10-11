/*
  Problem given: Given an integer array, move all elements containing '0' to the left while maintaining the order of other elements in the array.

  This one is easy enough, the approach would be to 
*/

// var startIndex = 0;
// var endIndex = arr.length - 1;
// // This would accomplish the zeros being moved to the left, however the array will now be out of order.
// for (let i = 0; i < arr.length;i++) {
//   // console.log(`i is: ${i}`)
//   // console.log(`arr[i] is ${arr[i]}`)
//   if (arr[i] === 0) {
//     var temp = arr[startIndex];
//     arr[startIndex] = arr[i];
//     arr[i] = temp;
//     startIndex += 1;
//   }
// }

// However, catch would be to maintain the order


var arr = [1,10,20,0,59,63,0,88,0];

function moveZeros(arr) {
  let readIndex = arr.length - 1;
  let writeIndex = arr.length - 1;
  for (let i = readIndex; i >= 0; i--) {
    if (arr[readIndex] !== 0) {
      arr[writeIndex] = arr[readIndex];
      writeIndex--;
    }
    readIndex--; 
  }
  for (let i = writeIndex; i >= 0; i--) {
    arr[writeIndex] = 0;
    writeIndex--;
  }
  console.log(`final arr is: ${arr}`)
}

moveZeros(arr);











