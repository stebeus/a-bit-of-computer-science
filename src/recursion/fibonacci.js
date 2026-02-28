function iterateFibonacciSequence(length) {
  const sequence = [0, 1];

  for (let number = 2; number < length; number++) {
    const firstTerm = sequence[number - 1];
    const secondTerm = sequence[number - 2];

    sequence.push(firstTerm + secondTerm);
  }

  return sequence;
}
