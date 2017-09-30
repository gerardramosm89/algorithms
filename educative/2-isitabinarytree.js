function BST(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
}
var bst = new BST(100);
bst.left = new BST(50, new BST(25), new BST(75));
bst.right = new BST(200, new BST(150), new BST(350));

function isBST(node, min, max) {
  if (!node) return true;
  if (max && node.value >= max) return false;
  else if (min && node.value <= min) return false;
  else {
    return isBST(node.left, min, node.value) && isBST(node.right, node.value, max);
  }
}

isBST(bst) ? console.log(`It's a valid BST!`) : console.log(`Unfortunately it is not a valid BST`);