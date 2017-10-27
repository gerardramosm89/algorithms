
let test = function (name) {
  this.name = name || 'gerry';
  // console.log(this.name);
}
let person = new test('chris');
console.log(person);