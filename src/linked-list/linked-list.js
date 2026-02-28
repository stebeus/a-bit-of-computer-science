import { Node } from './node.js';

class LinkedList {
  head = null;
  length = 0;

  append(value) {
    const node = new Node(value);

    this.length++;

    if (!this.head) {
      this.head = node;
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
      this.head = node;
      return;
    }

    const previous = this.head;
    this.head = node;
    this.head.next = previous;
  }
}

// Driver script

const linkedList = new LinkedList();

console.log(linkedList);
