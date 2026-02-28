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

    const current = this.#traverse(this.head);
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

  shift() {
    this.#isEmpty(undefined);

    this.length--;

    const shiftedNode = this.head;
    this.head = this.head ? this.head.next : null;

    return shiftedNode.data;
  }

  getHead() {
    return this.head?.data;
  }

  getTail() {
    this.#isEmpty(undefined);

    const current = this.#traverse(this.head);
    return current.data;
  }

  at(index) {
    let current = this.head;
    for (let node = 0; node < index; node++) current = current.next;

    return current?.data;
  }

  contains(value) {
    let current = this.head;

    while (current) {
      if (current.data === value) break;
      current = current.next;
    }

    return current?.data === value;
  }

  findIndexOf(value) {
    let current = this.head;
    let index = 0;

    while (current) {
      if (current.data === value) break;

      current = current.next;
      index++;
    }

    return index ?? -1;
  }

  print() {
    let current = this.head;
    let output = '';

    this.#isEmpty(output);

    while (current) {
      output += `( ${current.data} ) -> `;
      current = current.next;
    }

    return `${output}null`;
  }

  #addFirst(node) {
    this.head = node;
  }

  #traverse(node) {
    while (node.next) node = node.next;
    return node;
  }

  #isEmpty(emptyReturnValue) {
    if (this.length === 0) return emptyReturnValue;
  }
}

export { LinkedList };
