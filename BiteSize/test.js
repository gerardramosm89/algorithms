
function test() {
  return 1;
}
function test2() {
  return test();
}
function merge(one, two) {
  console.log(one, two);
}

merge(test(),test2());