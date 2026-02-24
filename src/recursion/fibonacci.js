function findFibonacciTerm(number) {
  const oneHalf = 1 / 2;
  const squareRootOfFive = Math.sqrt(5);

  const goldenRatio = oneHalf * (1 + squareRootOfFive);
  const conjugate = oneHalf * (1 - squareRootOfFive);

  const fibonacciTerm =
    (goldenRatio ** number - conjugate ** number) / squareRootOfFive;

  return Math.round(fibonacciTerm);
}

function iterateFibonacciSequence(length) {
  const sequence = [];

  for (let number = 0; number < length; number++) {
    const fibonacciTerm = findFibonacciTerm(number);
    sequence.push(fibonacciTerm);
  }

  return sequence;
}

function recurseFibonacciSequence(length, number = 0, sequence = []) {
  if (number === length) {
    return sequence;
  }

  const fibonacciTerm = findFibonacciTerm(number);
  sequence.push(fibonacciTerm);

  return recurseFibonacciSequence(length, number + 1, sequence);
}

export {
  findFibonacciTerm,
  iterateFibonacciSequence,
  recurseFibonacciSequence,
};
