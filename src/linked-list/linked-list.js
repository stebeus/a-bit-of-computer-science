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

  append(value) {
    const node = new Node(value);

    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }

    let currentNode = this.head;
    while (currentNode.next) currentNode = currentNode.next;

    currentNode.next = node;
  }

  prepend(value) {
    const node = new Node(value);

    this.length++;

    if (!this.head) {
      this.head = node;
      return;
    }

    const previousNode = this.head;
    this.head = node;
    this.head.next = previousNode;
  }
}

export { LinkedList };
