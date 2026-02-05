function findFibonacciTerm(number) {
  const oneHalf = 1 / 2;
  const sqrtOfFive = Math.sqrt(5);

  const goldenRatio = oneHalf * (1 + sqrtOfFive);
  const conjugate = oneHalf * (1 - sqrtOfFive);
  const term = (goldenRatio ** number - conjugate ** number) / sqrtOfFive;

  return Math.round(term);
}

function iterateFibonacci(sequenceSize) {
  const sequence = [];

  for (let number = 0; number < sequenceSize; number++) {
    const fibonacciTerm = findFibonacciTerm(number);
    sequence.push(fibonacciTerm);
  }

  return sequence;
}

function recurseFibonacci(sequenceSize, number = 0, sequence = []) {
  if (number === sequenceSize) {
    return sequence;
  }

  const fibonacciTerm = findFibonacciTerm(number);
  sequence.push(fibonacciTerm);

  return recurseFibonacci(sequenceSize, number + 1, sequence);
}

export { findFibonacciTerm, iterateFibonacci, recurseFibonacci };
