let s = 'sms messages are really short';
let k = 12;

function solution(s, k) {
  let sentence = s.split(' ');
  console.log(sentence);
  let temp = [];
  let tempLen = 0;
  let results = [];
  for (let i = 0; i < sentence.length; i++) {
    console.log('current word is: ', sentence[i]);
    if (tempLen + sentence[i].length < k) {
      temp.push(sentence[i]);
      tempLen += sentence[i].length;
      if (i == sentence.length - 1) results.push(temp.join(' '));
    } else {
      results.push(temp.join(' '));
      temp = [];
      tempLen = 0;
      temp.push(sentence[i]);
      tempLen += sentence[i].length;
      if (i == sentence.length - 1) results.push(temp.join(' '));      
    }
  }
  return results;
}

console.log(solution(s, k));