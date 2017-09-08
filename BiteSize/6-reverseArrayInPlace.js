
function reverseArrayInPlace(arr) {
  console.log(Math.floor(arr.length / 2));
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    let tempVar = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = tempVar;
  }
  console.log(arr);
  return arr;
}

reverseArrayInPlace([1,2,3,4,5,6,7])
