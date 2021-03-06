function LinkedList() {
  this.head = null;
  this.tail = null;
}
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
  var node = new Node(value, this.head, null);
  if (this.head) this.head.prev = node;
  else this.tail = node;
  this.head = node;
}

LinkedList.prototype.addTotail = function(value) {
  var node = new Node(value, null, this.tail);
  if (this.tail) this.tail.next = node;
  else this.head = node;
  this.tail = node;
}



var ll = new LinkedList();
ll.addToHead(2);
ll.addToHead(4);
ll.addToHead(3);
console.log('ll is: ', ll);