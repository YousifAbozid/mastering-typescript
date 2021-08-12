"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
// Sorting an array of numbers below:
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// Sorting string below:
// const charactersCollection = new CharactersCollection("YouSif");
// console.log(charactersCollection.data);
// const sorter = new Sorter(charactersCollection);
// sorter.sort();
// console.log(charactersCollection.data);
// Sort linked list below:
// const linkedList = new LinkedList();
// linkedList.add(500);
// linkedList.add(-10);
// linkedList.add(-3);
// linkedList.add(4);
// const sorter = new Sorter(linkedList);
// linkedList.print();
// sorter.sort();
// linkedList.print();
