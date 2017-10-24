var bst = new BST(100);
bst.left = new BST(50, new BST(25), new BST(75));
bst.right = new BST(200, new BST(150), new BST(350));

console.log(bst);