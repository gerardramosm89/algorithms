// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insertFirst(data) {
    let node = new Node(data);
    if (this.head) {
      node.next = this.head;
      node.data = data;
      this.head = node;
    } else {
      this.head = node;
    }
  }

}

module.exports = { Node, LinkedList };
