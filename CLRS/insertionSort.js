A = [5,2,4,6,1,3];

for (let j = 1; j < A.length; j++) {
  var key = A[j];
  console.log('our array is right now: ', A);
  console.log('key we are checking right now is: ', key);
  var i = j - 1;
  console.log('Part of the sorted array we are looking at now is: ', A[i]);
  while (i >= 0 && A[i] > key) {
    console.log(`IN WHILE LOOP`);
    console.log(`We are now comparing ${i} with ${A[i]} which is greater than our key(${key})`);
    console.log(`so we swap: ${A[i + 1]} and ${A[i]}`);
    A[i + 1] = A[i];
    console.log(`array is now [${A}]`);
    i--;
  }
  if (A[i] < key) {
    console.log(`Now! ${A[i]} is less than ${key} so we exit out of the while loop\n`)
  }
  if (i < 0) {
  console.log(`i is: ${i} so we exited out of the WHILE loop and continue the for loop`);
  }
  console.log(`and finally we insert ${key} in the place of: ${A[i + 1]} and move forward with the for loop\n\n`);
  A[i + 1] = key;
}

console.log('The array is now sorted: ', A);
function sort(values) {
  var length = values.length;
  for(var i = 1; i < length; ++i) {
    var temp = values[i];
    var j = i - 1;
    while (j >= 0 && values[j] > temp) { 
      values[j+1] = values[j];
      j--;
    }
    values[j+1] = temp;
  }
  return values;
};
// sort([7, 4, 5, 2, 9, 1]);

console.log('using our function gives: ', sort(A));