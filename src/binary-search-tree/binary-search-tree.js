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

  delete(value, current = this.root) {
    if (current == null) return current;

    if (current.data > value) {
      current.left = this.delete(value, current.left);
    }

    if (current.data < value) {
      current.right = this.delete(value, current.right);
    }

    this.#deleteNodeWithZeroOrOneChild(current, left, right);
    this.#deleteNodeWithTwoChildren(current);

    return current;
  }

  forEachPreOrderedDepth(callback, current = this.root) {
    this.#hasCallback(callback);

    if (current == null) return;

    callback(current.data);
    this.forEachPreOrderedDepth(callback, current.left);
    this.forEachPreOrderedDepth(callback, current.right);
  }

  forEachInOrderedDepth(callback, current = this.root) {
    this.#hasCallback(callback);

    if (current == null) return;

    this.forEachInOrderedDepth(callback, current.left);
    callback(current.data);
    this.forEachInOrderedDepth(callback, current.right);
  }

  forEachPostOrderedDepth(callback, current = this.root) {
    this.#hasCallback(callback);

    if (current == null) return;

    this.forEachPostOrderedDepth(callback, current.left);
    this.forEachPostOrderedDepth(callback, current.right);
    callback(current.data);
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

  #deleteNodeWithZeroOrOneChild(current, ...side) {
    if (current[side] === null) return current[side];
  }

  #deleteNodeWithTwoChildren(current) {
    const successor = this.#getSuccessor(current);
    current.data = successor.data;
    current.right = this.delete(successor.data, current.right);
  }

  #hasCallback(callback) {
    if (!callback) {
      throw new Error('A callback function is required');
    }
  }
}
