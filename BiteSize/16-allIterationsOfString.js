let test = 'ABC';
let results = new Set();
let counter = 0;
function solution(word, accumulator = '') {
  console.log('word is: ', word);
  console.log('accumulator is: ', accumulator);
  if (!word) {
    results.add(accumulator);
    // console.log(accumulator);
    return
  }
  // console.log('word.length  is: ', word.length);
  for (let i = 0; i < word.length; i++) {
    accumulator += word[i];
    // console.log('word we are looking at is: ', word[i]);
    solution(word.slice(0, i) + word.slice(i + 1), accumulator);
    // console.log('accumulator is: ', accumulator);
    accumulator = accumulator.slice(0, accumulator.length - 1);
  }


  // results.forEach((value1, value2) => {
  //   console.log(value2);  
  // })
  return { results, counter };
}

// console.log(solution(test));
solution(test);
