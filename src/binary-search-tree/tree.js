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

  includes(value) {
    let currentNode = this.root;

    while (currentNode) {
      if (currentNode.data === value) return true;

      if (value < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  insert(value, currentNode = this.root) {
    if (currentNode === null) return new Node(value);

    if (value < currentNode.data) {
      currentNode.left = this.insert(value, currentNode.left);
    } else {
      currentNode.right = this.insert(value, currentNode.right);
    }

    return currentNode;
  }

  #getSuccessor(currentNode) {
    currentNode = currentNode.right;

    while (currentNode !== null && currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode;
  }

  delete(value, currentNode = this.root) {
    if (currentNode === null) return currentNode;

    if (currentNode.data > value) {
      currentNode.left = this.delete(value, currentNode.left);
    } else if (currentNode.data < value) {
      currentNode.right = this.delete(value, currentNode.right);
    } else {
      // Node with 0 or 1 child
      if (currentNode.left === null) return currentNode.right;
      if (currentNode.right === null) return currentNode.left;

      // Node with 2 children
      const successor = this.#getSuccessor(currentNode);

      currentNode.data = successor.data;
      currentNode.right = this.delete(successor.data, currentNode.right);
    }
    return currentNode;
  }
}

const array = [5, 5, 1, 3, 2, 4, 9, 0, 7, 8];
const tree = new Tree(array);

tree.insert(-100);
tree.delete(8);

prettyPrint(tree.root);
