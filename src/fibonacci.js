function findFibonacciTerm(number) {
  const oneHalf = 1 / 2;
  const sqrtOfFive = Math.sqrt(5);

  const goldenRatio = oneHalf * (1 + sqrtOfFive);
  const conjugate = oneHalf * (1 - sqrtOfFive);
  const term = (goldenRatio ** number - conjugate ** number) / sqrtOfFive;

  return Math.round(term);
}

export { findFibonacciTerm };
