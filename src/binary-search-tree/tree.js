import { Node } from './node.js';

class Tree {
  #convertToBalancedSearchTree(array, start, end) {
    if (start > end) return null;

    const half = Math.round((end - start) / 2);
    const middle = start + half;
    const root = new Node(array[middle]);

    root.left = this.#convertToBalancedSearchTree(middle, start, middle - 1);
    root.right = this.#convertToBalancedSearchTree(middle, middle + 1, end);

    return root;
  }

  constructor(array) {
    this.root = array;
  }
}
