import { formatArray } from '../../utils/formatters.js';
import {
  iterateFibonacciSequence,
  recurseFibonacciSequence,
} from '../fibonacci.js';

const iteratedSequence = iterateFibonacciSequence(8);
const recursedSequence = recurseFibonacciSequence(8);

console.log(`Iterated sequence: ${formatArray(iteratedSequence)}.`);
console.log(`Recursed sequence: ${formatArray(recursedSequence)}.`);
