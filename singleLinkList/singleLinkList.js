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

  // method to remove a node at the end of the list
  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length = this.length - 1;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // method to remove first item (head) in the list 
  shift() {
    if (this.head === null) return undefined;
    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }
}