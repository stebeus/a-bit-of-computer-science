const sortInAscendingOrder = (a, b) => a - b;

function prettyPrint(node, prefix = '', isLeft = true) {
  const emptyNode = node === null || node === undefined;
  if (emptyNode) return;

  const symbol = {
    blank: '    ',
    straight: '│   ',
    left: '└── ',
    right: '┌── ',
  };

  const branch = {
    current: `${prefix}${isLeft ? symbol.left : symbol.right}${node.data}`,
    left: `${prefix}${isLeft ? symbol.blank : symbol.straight}`,
    right: `${prefix}${isLeft ? symbol.straight : symbol.blank}`,
  };

  prettyPrint(node.right, branch.right, false);
  console.log(branch.current);
  prettyPrint(node.left, branch.left, true);
}

export { sortInAscendingOrder, prettyPrint };
