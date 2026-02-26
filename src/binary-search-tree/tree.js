import { Node } from './node.js';
import { prettyPrint, sortInAscendingOrder } from './utils.js';

class Tree {
  #convertToBalancedSearchTree(array, start, end) {
    if (start > end) return null;

    const half = Math.round((end - start) / 2);
    const middle = start + half;
    const root = new Node(array[middle]);

    root.left = this.#convertToBalancedSearchTree(array, start, middle - 1);
    root.right = this.#convertToBalancedSearchTree(array, middle + 1, end);

    return root;
  }

  #buildTree(array) {
    const uniqueArray = [...new Set(array)];
    const sortedArray = uniqueArray.sort(sortInAscendingOrder);

    const start = 0;
    const end = uniqueArray.length - 1;

    return this.#convertToBalancedSearchTree(sortedArray, start, end);
  }

  constructor(array) {
    this.root = this.#buildTree(array);
  }
}

const array = [5, 5, 1, 3, 2, 4, 9, 0, 7, 8];
const tree = new Tree(array);

prettyPrint(tree.root);
