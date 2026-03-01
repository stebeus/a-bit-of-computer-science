import { compareNumbers, removeDuplicates } from '../utils/array-util.js';
import { Node } from './node.js';

class Tree {
  constructor(array) {
    this.root = this.#buildTree(array);
  }

  includes(value) {
    const current = this.#traverse(this.root, value);
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

  forEachLevel(callback, current = this.root, level = 0, queue = []) {
    this.#hasCallback(callback);

    if (current == null) return;

    if (queue.length <= level) queue.push([]);

    queue[level].push(current.data);

    callback(current.data);
    this.forEachLevel(current.left, level + 1, queue);
    this.forEachLevel(current.right, level + 1, queue);
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

  height(value) {
    const current = this.#traverse(this.root, value);

    if (current == null) return undefined;

    return this.#getHeight(current);
  }

  depth(value) {
    let current = this.root;
    let depth = 0;

    while (current != null) {
      if (current.data === value) break;

      if (current.data > value) {
        current = current.left;
        continue;
      }

      current = current.right;
      depth++;
    }

    return depth ?? undefined;
  }

  isBalanced(current = this.root) {
    if (current == null) return true;
    if (this.#getHeight(current) === -1) return false;

    const isLeftBranchBalanced = this.isBalanced(current.left);
    const isRightBranchBalanced = this.isBalanced(current.right);

    return isLeftBranchBalanced && isRightBranchBalanced;
  }

  rebalance() {
    const values = [];
    const orderValues = (value) => values.push(value);

    this.forEachInOrderedDepth(orderValues);
    this.root = this.#buildTree(values);
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

  #buildTree(array) {
    const uniqueValues = removeDuplicates(array);
    const sortedArray = uniqueValues.toSorted(compareNumbers);

    const start = 0;
    const end = sortedArray.length - 1;

    return this.#convertToTree(sortedArray, start, end);
  }

  #traverse(node, value) {
    while (node != null) {
      if (node.data === value) break;

      if (node.data > value) {
        node = node.left;
        continue;
      }

      node = node.right;
    }

    return node;
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

  #getHeight(node) {
    if (node == null) return -1;

    const leftHeight = this.#getHeight(node.left);
    const rightHeight = this.#getHeight(node.right);
    const totalHeight = Math.max(leftHeight, rightHeight) + 1;

    return totalHeight;
  }
}

export { Tree };
