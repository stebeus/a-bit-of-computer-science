function findFibonacciTerm(number) {
  const oneHalf = 1 / 2;
  const squareRootOfFive = Math.sqrt(5);

  const goldenRatio = oneHalf * (1 + squareRootOfFive);
  const conjugate = oneHalf * (1 - squareRootOfFive);

  const fibonacciTerm =
    (goldenRatio ** number - conjugate ** number) / sqrtOfFive;

  return Math.round(fibonacciTerm);
}

function iterateFibonacciSequence(sequenceSize) {
  const sequence = [];

  for (let number = 0; number < sequenceSize; number++) {
    const fibonacciTerm = findFibonacciTerm(number);
    sequence.push(fibonacciTerm);
  }

  return sequence;
}

function recurseFibonacciSequence(sequenceSize, number = 0, sequence = []) {
  if (number === sequenceSize) {
    return sequence;
  }

  const fibonacciTerm = findFibonacciTerm(number);
  sequence.push(fibonacciTerm);

  return recurseFibonacciSequence(sequenceSize, number + 1, sequence);
}

export {
  findFibonacciTerm,
  iterateFibonacciSequence,
  recurseFibonacciSequence,
};
