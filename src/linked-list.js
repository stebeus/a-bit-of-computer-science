class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addFirst(node) {
    this.head = node;
  }

  append(value) {
    const node = new Node(value);
    this.length++;

    if (!this.head) {
      this.addFirst(node);
      return;
    }

    let current = this.head;
    while (current.next) current = current.next;

    current.next = node;
  }

  prepend(value) {
    const node = new Node(value);
    this.length++;

    if (!this.head) {
      this.addFirst(node);
      return;
    }

    const current = this.head;
    this.head = node;
    this.head.next = current;
  }

  getHead() {
    return this.length ? this.head : undefined;
  }
}
