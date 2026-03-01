import { compareNumbers } from '../utils/array-util.js';
import { Node } from './node.js';

class Tree {
  constructor(array) {
    this.root = this.#buildTree(array);
  }

  includes(value) {
    let current = this.root;

    while (current) {
      if (current.data === value) break;

      if (current.data > value) {
        current = current.left;
        continue;
      }

      current = current.right;
    }

    return current.data === value;
  }

  insert(value, current = this.root) {
    if (current == null) return new Node(value);

    if (current.data > value) {
      current.left = this.insert(value, current.left);
    } else {
      current.right = this.insert(value, current.right);
    }

    return current;
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

  #sortArray(array) {
    const uniqueValues = [...new Set(array)];
    const sortedArray = uniqueValues.toSorted(compareNumbers);
    return sortedArray;
  }

  #buildTree(array) {
    const sortedArray = this.#sortArray(array);
    const start = 0;
    const end = sortedArray.length - 1;

    return this.#convertToTree(sortedArray, start, end);
  }

  #getSuccessor(current) {
    current = current.right;
    while (current != null && !current.left != null) current = current.left;
    return current;
  }
}
