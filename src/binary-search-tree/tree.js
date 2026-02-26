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

  #buildTree(array) {
    const sortInAscendingOrder = (a, b) => a - b;
    const sortedArray = array.sort(sortInAscendingOrder);

    const start = 0;
    const end = array.length;

    return this.#convertToBalancedSearchTree(sortedArray, start, end);
  }

  constructor(array) {
    this.root = this.#buildTree(array);
  }
}

const array = [5, 1, 3, 2, 4];
const tree = new Tree(array);
