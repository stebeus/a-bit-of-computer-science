import { formatArray } from '../../utils/formatters.js';
import { mergeSort } from '../merge-sort.js';

const jumbledNumbers = [100, -2, 6, 4, 0, 3, 25, 0, 7];
const sortedNumbers = mergeSort(jumbledNumbers);

console.log(`Merged sorted array: ${formatArray(sortedNumbers)}.`);
