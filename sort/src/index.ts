import { Sorter } from "./sorter";
import { NumbersCollection } from "./NumbersCollection";

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
console.log(numbersCollection.data);

const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);
