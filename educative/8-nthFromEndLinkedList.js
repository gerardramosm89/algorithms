/*
  This program will take in a value 'n', and return the n'th from last node.
*/

let Node = function (value, next) {
  this.value = value;
  this.next = next;
}

let LinkedList = function(head) {
  this.head = head;
}

LinkedList.prototype.addToHead = function (value){
  let newNode = new Node(value, null);
  if (this.head) newNode.next = this.head;
  this.head = newNode;
}

let ll = new LinkedList(new Node(2));
ll.addToHead(7);
ll.addToHead(3);
ll.addToHead(5);
ll.addToHead(8);
ll.addToHead(4);

LinkedList.prototype.read = function() {
  if (!this.head) log('no head');
  let currentNode = this.head;
  while (currentNode) {
    console.log('currentNode.value is: ', currentNode.value);
    currentNode = currentNode.next;
  }
}
function log(value) {
  console.log(value);
}
ll.read();


function nthFromEnd(ll, n) {
  let i = 0;
  let head = ll.head;
  let tail = ll.head;
  while (n > 0) {
    tail = tail.next;
    n--;
  }
  while (tail.next) {
    head = head.next;
    tail = tail.next;
  }
  console.log('head is: ',head.value);
  console.log('tail is: ', tail.value);
}

nthFromEnd(ll, 3);

