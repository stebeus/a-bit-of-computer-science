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

  #addFirst(node) {
    this.head = node;
  }

  append(value) {
    const node = new Node(value);

    this.length++;

    if (!this.head) {
      this.#addFirst(node);
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
      this.#addFirst(node);
      return;
    }

    const previousNode = this.head;
    this.head = node;
    this.head.next = previousNode;
  }

  pop() {
    if (!this.length) return undefined;

    this.length--;

    const poppedNode = this.head;
    this.head = this.head ? this.head.next : null;

    return poppedNode.value;
  }

  getHead() {
    return this.length ? this.head.value : undefined;
  }

  getTail() {
    if (!this.length) return undefined;

    let currentNode = this.head;
    while (currentNode.next) currentNode = currentNode.next;

    return currentNode.value;
  }

  at(index) {
    if (index > this.length) return undefined;

    let currentNode = this.head;
    for (let node = 0; node < index; node++) currentNode = currentNode.next;

    return currentNode.value;
  }
}

export { LinkedList, Node };
