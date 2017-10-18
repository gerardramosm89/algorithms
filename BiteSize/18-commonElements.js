/* 
  Goal of this algorith is to find the common elements in 2 arrays
  Example input:
  A = [1,3,4,6,7,9];
  B = [1,2,4,5,9,10];
  Output should be:
  result = [1,4,9];
*/

const a = [1,3,4,6,7,9];
const b = [1,2,4,5,9,10];

function solution(a, b) {
  let aIndex = 0;
  let bIndex = 0;
  a.length < b.length ? shortest = a.length : shortest = b.length;
  let results = [];
  while (aIndex < shortest) {
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