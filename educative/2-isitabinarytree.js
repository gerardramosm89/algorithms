function BST(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}
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
var bst = new BST(100);
bst.left = new BST(50, new BST(25), new BST(75));
bst.right = new BST(200, new BST(150), new BST(350));

BST.prototype.depthFirstTraversal = function(iteratorFunc) {
  // if (this.left) this.left.depthFirstTraversal(iteratorFunc);
  if (this.right) this.right.depthFirstTraversal(iteratorFunc);
  
  iteratorFunc(this.value);
  // if (this.right) this.right.depthFirstTraversal(iteratorFunc);
  if (this.left) this.left.depthFirstTraversal(iteratorFunc);
  
};
var ll = new LinkedList();
function log(value) {
  console.log(value);
  ll.addToHead(value);
}
bst.depthFirstTraversal(log);
console.log('ll is: ', ll);

function isBST(node, min, max) {
  if (!node) return true;
  if (max && node.value >= max) return false;
  else if (min && node.value <= min) return false;
  else {
    return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
  }
}

// isBST(bst) ? console.log(`It's a valid BST!`) : console.log(`Unfortunately it is not a valid BST`);