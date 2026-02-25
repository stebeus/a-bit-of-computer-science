class Node {
  constructor(data) {
    this.data = data;
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

  #traverse(currentNode) {
    while (currentNode.next) currentNode = currentNode.next;
    return currentNode;
  }

  append(value) {
    const node = new Node(value);

    this.length++;

    if (!this.head) {
      this.#addFirst(node);
      return;
    }

    const currentNode = this.#traverse(this.head);
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

    return poppedNode.data;
  }

  getHead() {
    return this.length ? this.head.data : undefined;
  }

  getTail() {
    if (!this.length) return undefined;

    const currentNode = this.#traverse(this.head);

    return currentNode.data;
  }

  at(index) {
    if (index > this.length) return undefined;

    let currentNode = this.head;
    for (let node = 0; node < index; node++) currentNode = currentNode.next;

    return currentNode.data;
  }

  contains(value) {
    const currentNode = this.#traverse(this.head);
    return currentNode.data === value;
  }

  findIndexOf(value) {
    let currentNode = this.head;
    let index = -1;
    let currentIndex = 0;

    while (currentNode) {
      if (currentNode.data === value) {
        index = currentIndex;
        break;
      }

      currentNode = currentNode.next;
      currentIndex++;
    }

    return index;
  }

  print() {
    let output = "";
    let currentNode = this.head;

    if (!this.length) return output;

    while (currentNode) {
      output += `( ${currentNode.data} ) -> `;
      currentNode = currentNode.next;
    }

    return `${output}null`;
  }
}

export { LinkedList, Node };
