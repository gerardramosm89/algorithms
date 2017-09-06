var nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
function fizzBuzz(nums) {
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 3 === 0) console.log(`Fizz`);
    else if (nums[i] % 5 === 0) console.log(`Buzz`);
    else if (nums[i] % 5 === 0 && nums[i] % 3 === 0) console.log(`FizzBuzz`);
    else console.log(`${nums[i]}`);
  }
}
fizzBuzz(nums);