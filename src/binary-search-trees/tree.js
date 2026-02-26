import { prettyPrint } from "./helpers.js";
import { Node } from "./node.js";

class Tree {
  constructor(array) {
    this.root = buildTree(array);
  }
}
