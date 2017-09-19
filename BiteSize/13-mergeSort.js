/*
  Merge sort is a tricky algorithm
*/
var arr = [11,7,4,1,15,12,3];

function mergeSort(arr) {
  console.log('-- Calling Merge Sort --');
  if (arr.length < 2) return arr;
  console.log('-- Splitting in Half');
  var midIndex = Math.floor(arr.length / 2);
  var firstHalf = arr.slice(0, midIndex);
  var secondHalf = arr.slice(midIndex);
  console.log('firstHalf is: ', firstHalf);
  console.log('secondHalf is: ', secondHalf);
  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
  var result = [];
  console.log('-- Calling Merge --')
  console.log('array1 is: ', array1);
  console.log('array2 is: ', array2);
  while (array1.length && array2.length) {
    var minElem;
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }
  if (array1.length) result = result.concat(array1);
  else if (array2.length) result = result.concat(array2);
  return result;
}
try {
  console.log('mergeSort yields: ', mergeSort(arr));  
} catch(e) {
  console.log('ERROR: ', e);
}