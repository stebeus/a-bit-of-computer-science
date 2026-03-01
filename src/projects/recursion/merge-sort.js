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

function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = array.length / 2;
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  return mergeArrays(mergeSort(left), mergeSort(right));
}

export { mergeSort };
