import { HashMap } from './hash-map.js';

const hashMap = new HashMap();

hashMap.set('John Doe', 'Non-existent person');

console.log(hashMap.buckets);
console.log(hashMap.length);
