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

  size() {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode) {
      if (!currentNode.next) return currentNode;
      currentNode = currentNode.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    this.head = this.head.next;
  }

  removeLast() {
    if (this.head == null || this.head.next == null) return this.head = null;
    let prevNode = null;
    let currentNode = this.head;
    while (currentNode) {
      prevNode = currentNode;
      currentNode = currentNode.next;
      if (!currentNode.next) {
        prevNode.next = null;
        currentNode = null;
      }
    }
  }

  insertLast(data) {
    const newNode = new Node({ data });
    let currentNode = this.head; 
  }

}

module.exports = { Node, LinkedList };
