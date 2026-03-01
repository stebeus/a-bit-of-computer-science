import { Node } from './node.js';

class Tree {
  constructor(array) {
    this.root = array;
  }

  #convertToTree(array, start, end) {
    if (start > end) return null;

    const half = Math.round((end - start) / 2);
    const middle = start + half;
    const root = new Node(array[middle]);

    root.left = this.#convertToTree(array, start, middle - 1);
    root.right = this.#convertToTree(array, middle + 1, end);

    return root;
  }
}
