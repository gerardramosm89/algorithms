let arr = [7,4,8,2,9];
// let arr = [2,3,4,5];
/*
Output should be: 3
Explanation: 
  As 7 is the first element, it can 
  see the sunset.
  4 can't see the sunset as 7 is hiding it. 
  8 can see.
  2 can't see the sunset.
  9 also can see the sunset.
*/

function building(arr) {
  let highestSoFar = arr[0];
  let canBeSeen = [];
  canBeSeen.push(highestSoFar);
  for (let i = 1;i < arr.length;i++) {
    if (arr[i] > highestSoFar) {
      highestSoFar = arr[i];
      canBeSeen.push(arr[i]);
    };
  }
  console.log(canBeSeen);
}

building(arr);