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
    return this.length ? this.head.value : undefined;
  }

  getTail() {
    if (!this.length) return undefined;

    let current = this.head;
    while (current.next) current = current.next;

    return current.value;
  }

  at(index) {
    if (!this.length) return undefined;

    let current = this.head;

    for (let node = 0; node < index; node++) {
      if (!current) return undefined;
      current = current.next;
    }

    return current.value;
  }

  pop() {
    this.length--;

    const popped = this.head;
    this.head = this.head ? this.head.next : null;

    return popped.value || undefined;
  }

  contain(value) {
    if (!this.length) return false;

    let current = this.head;
    while (current.next) current = current.next;

    return current.value === value;
  }

  findIndexOf(value) {
    let current = this.head;
    let index = -1;
    let currentIndex = 0;

    while (current) {
      if (current.value === value) {
        index = currentIndex;
        break;
      }

      current = current.next;
      currentIndex++;
    }

    return index;
  }

  print() {
    if (!this.length) return "";

    let current = this.head;
    let result = "";

    while (current) {
      result += `( ${current.value} ) -> `;
      current = current.next;
    }

    return `${result} null`;
  }
}
