import { LinkedList } from './linked-list.js';

const linkedList = new LinkedList();

linkedList.append('Data Structures and Algorithms');
linkedList.append('JavaScript');

linkedList.prepend(123);
linkedList.prepend('SpongeBob SquarePants');

console.log(linkedList.print());
