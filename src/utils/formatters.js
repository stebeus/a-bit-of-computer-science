const formatArray = (array) => array.join(', ');

const formatHashMapEntries = ({ key, value }) => `[${key}, ${value}]`;

function prettyPrint(node, prefix = '', isLeft = true) {
  if (node === null || node === undefined) return;

  const blank = '    ';
  const straight = '│   ';
  const left = '└── ';
  const right = '┌── ';

  prettyPrint(node.right, `${prefix}${isLeft ? straight : blank}`, false);
  console.log(`${prefix}${isLeft ? left : right}${node.data}`);
  prettyPrint(node.left, `${prefix}${isLeft ? blank : straight}`, true);
}

export { formatArray, formatHashMapEntries, prettyPrint };
