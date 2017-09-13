/*
  Merge sort is a tricky algorithm
*/

function mergeSort(arr) {
  // take ina  single, unsorted array as a parameter
  // split the array into two halves

  if (arr.length < 2) return arr;
  var midIndex = Math.floor(arr.length / 2);
  var firstHalf = arr.slice(0, midIndex);
  var secondHalf = arr.slice(midIndex, );

  return merge(mergeSort(firstHalf), mergeSort(secondHalf));
}

function merge(array1, array2) {
  // Takes in two sorted arrays as parameters
  // Merges those sorted arrays into one sorted array
  // Returns one sorted array
  while (array1.length && array2.length) {
    var minElem;
    if (array1[0] < array2[0]) minElem = array1.shift();
    else minElem = array2.shift();
    result.push(minElem);
  }
  if (array1.length) result = result.concat(array1);
  else if (array2.length) result = result.concat(array2);

  console.log('final result is: ', result);
}