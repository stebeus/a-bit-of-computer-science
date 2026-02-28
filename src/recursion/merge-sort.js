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

  while (left.length) {
    const firstItem = left.shift();
    mergedArray.push(firstItem);
  }

  while (right.length) {
    const firstItem = right.shift();
    mergedArray.push(firstItem);
  }

  return mergedArray;
}
