import { prettyPrint } from './helpers.js';
import { Node } from './node.js';

class Tree {
  #sortArrayToBalancedSearchTree(array, start, end) {
    if (start > end) return null;

    const half = Math.round((end - start) / 2);
    const middle = start + half;
    const root = new Node(array[middle]);

    root.left = this.#sortArrayToBalancedSearchTree(array, start, middle - 1);
    root.right = this.#sortArrayToBalancedSearchTree(array, middle + 1, end);

    return root;
  }

  #buildTree(array) {
    const start = 0;
    const end = array.length - 1;
    return this.#sortArrayToBalancedSearchTree(array, start, end);
  }

  constructor(array) {
    this.root = this.#buildTree(array);
  }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const tree = new Tree(array);

prettyPrint(tree);
