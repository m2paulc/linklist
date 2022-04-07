class Node {
  constructor(value) {
    this.node = value;
    this.next = null;
  }
}

class SinglyLInkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // method to add a new node to the end of the list
  push(value) {
    let newNode = new Node(value);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length = this.length + 1;
    return this;
  }
}