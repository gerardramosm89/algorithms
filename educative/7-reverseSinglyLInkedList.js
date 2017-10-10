var LinkedList = function (head) {
  this.head = head;
}
LinkedList.prototype.insertToHead = function(node) {
  var newNode = node;
  if(this.head) newNode.next = this.head;
  this.head = newNode;
}
LinkedList.prototype.traverse = function() {
  let curNode = this.head;
  while(curNode) {
    console.log(`${curNode.value}`)
    console.log(`curNode is: ${JSON.stringify(curNode.value)}`)
    curNode = curNode.next
  }
}
var Node = function (value, next) {
  this.value = value;
  this.next = next;
}
var ll = new LinkedList();
ll.insertToHead(new Node(20, null));
ll.insertToHead(new Node(432, null));
ll.insertToHead(new Node(235, null));
ll.insertToHead(new Node(3, null));
ll.traverse()
// console.log(`ll is: ${JSON.stringify(ll)}`);
// console.log(`ll.head is: ${JSON.stringify(ll.head)}`);