var arr = [1,10,20,47,59,63,75,88,99,107];
// The point of the binary search will be to keep cutting the array in half until we find  our 
function binarySearch(arr, min, max, val) {
  if (min > max) return -1;
  let mid = min + Math.floor(max - min / 2);
  if (val > arr[mid]) {
    min = mid + 1;
    return binarySearch(arr, min, max, val);
  } else if (val < arr[mid]) {
    max = mid - 1;
    return binarySearch(arr, min, max, val);
  } else if (val === arr[mid]) {
    return arr[mid];
  }
}
var val = 47;
var bSearch = binarySearch(arr, 0, arr.length - 1, val);
if (bSearch !== -1) {
  console.log(`Value found! ${val} is in the array`);
} else {
  console.log(`Value ${val} is not in the array`);
}