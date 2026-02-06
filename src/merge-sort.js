function mergeSort(array) {
  if (array.length <= 1) return array;

  const middle = array.length / 2;
  const left = array.slice(0, middle);
  const right = array.slice(middle, array.length);

  mergeSort(left);
  mergeSort(right);
}

export { mergeSort };
