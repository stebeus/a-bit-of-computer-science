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
    if (!this.head) {
      this.head = node;
      return;
    }
  }

  append(value) {
    const node = new Node(value);
    this.length++;

    this.addFirst(node);

    let current = this.head;
    while (current.next) current = current.next;

    current.next = node;
  }

  prepend(value) {
    const node = new Node(value);
    this.length++;

    this.addFirst(node);

    const current = this.head;
    this.head = node;
    this.head.next = current;
  }

  getHead() {
    return this.length ? this.head : undefined;
  }
}
