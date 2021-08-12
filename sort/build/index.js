"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sorter_1 = require("./sorter");
var CharactersCollection_1 = require("./CharactersCollection");
// Sorting an array of numbers below:
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// console.log(numbersCollection.data);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);
// Sorting string below:
var charactersCollection = new CharactersCollection_1.CharactersCollection("YouSif");
console.log(charactersCollection.data);
var sorter = new sorter_1.Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);
