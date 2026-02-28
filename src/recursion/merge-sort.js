function mergeRemainder(arraySide, mergedArray) {
  while (arraySide.length) {
    const firstItem = arraySide.shift();
    mergedArray.push(firstItem);
  }
}

function mergeArrays(left, right) {
  const mergedArray = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      const firstLeftItem = left.shift();
      mergedArray.push(firstLeftItem);
      continue;
    }

    const firstRightItem = right.shift();
    mergedArray.push(firstRightItem);
  }

  mergeRemainder(left, mergedArray);
  mergeRemainder(right, mergedArray);

  return mergedArray;
}
