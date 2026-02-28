import { LinkedList } from './linked-list.js';

const linkedList = new LinkedList();

linkedList.append('Data Structures and Algorithms');
linkedList.append('JavaScript');

linkedList.prepend(123);
linkedList.prepend('SpongeBob SquarePants');

console.log(linkedList.print());

console.log(linkedList.getHead());
console.log(linkedList.getTail());
console.log(linkedList.at(2));
console.log(linkedList.contains('SpongeBob SquarePants'));
console.log(linkedList.findIndexOf(123));
