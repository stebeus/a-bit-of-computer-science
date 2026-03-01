import { prettyPrint } from '../utils/formatters.js';
import { Tree } from './binary-search-tree.js';

const array = [5, 5, 1, 3, 2, 4, 9, 0, 7, 8];
const tree = new Tree(array);

tree.insert(-100);
tree.delete(8);

console.log(`Height: ${tree.height()}.`);
console.log(`Is balanced: ${tree.isBalanced()}.`);

console.log(tree.rebalance());
console.log(`Is balanced: ${tree.isBalanced()}.`);

prettyPrint(tree.root);
