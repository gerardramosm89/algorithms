function BST(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var bst = new BST(100);

BST.prototype.insert = function(value) {
  if (value <= this.value) {
    if (!this.left) this.left = new BST(value);
    else this.left.insert(value);
  } else if (value > this.value) {
    if (!this.right) this.right = new BST(value);
    else this.right.insert(value);
  }
};

bst.insert(50);
bst.insert(25);
bst.insert(75);
bst.insert(200);
bst.insert(125);
bst.insert(350);


BST.prototype.depthFirstTraversal = function(log) {
  if (this.left) this.left.depthFirstTraversal(log);
  if (this.right) this.right.depthFirstTraversal(log);
  log(this.value);
};
function log(value) {
  console.log(value);
}
bst.depthFirstTraversal(log);

// console.log(bst);