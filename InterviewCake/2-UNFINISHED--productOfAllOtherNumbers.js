var A = [1, 7, 3, 4];

for (let i = 0; i < A.length; i++) {
  var temp;
  for (let j = 0; j < A.length; j++) {
    console.log("i inside j is: ", i);
    console.log('A[i] is: ', A[i]);
    if (j !== i) {
        console.log('temp is: ', temp);
        temp = temp * A[j];
        console.log('temp is: ', temp);
    }
  }
}

console.log(A);