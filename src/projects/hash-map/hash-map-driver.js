import { formatArray, formatHashMapEntries } from '../utils/formatters.js';
import { HashMap } from './hash-map.js';

const hashMap = new HashMap();

// Insertion

hashMap.set('John Doe', 'Non-existent person');
hashMap.set('Item', 'The real item');
hashMap.set('mIte', 'The fake item');
hashMap.set('One', 1);
hashMap.set('Boolean', false);

// Deletion

hashMap.remove('Boolean');

// Formatted outputs

const formattedEntries = hashMap.map(formatHashMapEntries);
const formattedHashMaps = formatArray(formattedEntries);
const formattedKeys = formatArray(hashMap.keys());
const formattedValues = formatArray(hashMap.values());

// Outputs

console.log(`Hash map (${hashMap.length}): ${formattedHashMaps}`);
console.log(`Keys: ${formattedKeys}`);
console.log(`Values: ${formattedValues}`);

console.log(`Has 'Item': ${hashMap.has('Item')}`);
console.log(`Has 'Josh': ${hashMap.has('Josh')}`);
