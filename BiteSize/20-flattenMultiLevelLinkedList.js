
let Node = function(value, next, child) {
  if (value) this.value = value;
  if (next) this.next = next;
  if (child) this.child = child;
}

let head = new Node(10, node5, node4);
let node5 = new Node(5,12);
let node4 = new Node(4,20);
console.log(head);