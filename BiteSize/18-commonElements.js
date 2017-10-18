/* 
  Goal of this algorith is to find the common elements in 2 arrays
  Example input:
  A = [1,3,4,6,7,9];
  B = [1,2,4,5,9,10];
  Output should be:
  result = [1,4,9];
*/

const a = [1,3,4,6,7,9,11,22];
const b = [1,2,4,5,9,10,22];

function solution(a, b) {
  let aIndex = 0;
  let bIndex = 0;
  let shortestArray;
  function setShortest(x) {
    if (x == 'a') {
      shortest = a.length;
    } else {
      shortest = b.length;
    }
  }
  a.length < b.length ? setShortest('a') : setShortest('b');
  let results = [];
  while ((aIndex < a.length) && (bIndex < b.length)) {
    if (a[aIndex] === b[bIndex]) {
      results.push(a[aIndex]);
      aIndex++;
      bIndex++;
    } else if (a[aIndex] < b[bIndex]) {
      aIndex++;
    } else if (a[aIndex] > b[bIndex]) {
      bIndex++;
    }
  }
  console.log('results is: ', results);
}

solution(a,b);