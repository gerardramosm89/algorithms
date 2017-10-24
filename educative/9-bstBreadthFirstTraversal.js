function BST(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}

var bst = new BST(100);
bst.left = new BST(50, new BST(25), new BST(75));
bst.right = new BST(200, new BST(150), new BST(350));

// console.log(bst);

BST.prototype.breadthFirstTraversal = function() {
  log('hello');
  let queue = [this];
  while (queue.length) {
    let treeNode = queue.shift();
  }
}

function log(value) {
  console.log(value);
}

bst.breadthFirstTraversal();