function merge(left, right) {
  const mergedList = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      mergedList.push(left.shift());
    } else {
      mergedList.push(right.shift());
    }
  }

  while (left.length) mergedList.push(left.shift());
  while (right.length) mergedList.push(right.shift());

  return mergedList;
}

function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = array.length / 2;
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
}

export { mergeSort };
