import { Node } from './node.js';

class LinkedList {
  head = null;
  length = 0;

  append(value) {
    const node = new Node(value);

    this.length++;

    if (!this.head) {
      this.#addFirst(node);
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
      this.#addFirst(node);
      return;
    }

    const previous = this.head;
    this.head = node;
    this.head.next = previous;
  }

  getHead() {
    return this.length ? this.head.data : undefined;
  }

  getTail() {
    if (this.length === 0) return undefined;

    let current = this.head;
    while (current.next) current = current.next;

    return current.data;
  }

  #addFirst(node) {
    this.head = node;
  }
}

// Driver script

const linkedList = new LinkedList();

linkedList.append('Data Structures and Algorithms');
linkedList.append('JavaScript');

linkedList.prepend(123);

console.log(linkedList);
