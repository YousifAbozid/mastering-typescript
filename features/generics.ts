// Example of generics with classes

class ArrayOfNumbers {
    constructor(public collection: number[]) {}

    get(index: number): number {
        return this.collection[index];
    }
}

class ArrayOfStrings {
    constructor(public collection: string[]) {}

    get(index: number): string {
        return this.collection[index];
    }
}

class ArrayOfAnything<TypeOfData> {
    constructor(public collection: TypeOfData[]) {}

    get(index: number): TypeOfData {
        return this.collection[index];
    }
}

new ArrayOfAnything<string>(["a", "b", "c"]);

// Example of generics with functions

function printStrings(arr: string[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printNumberss(arr: number[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function printAnything<T>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

printAnything<string>(["a", "b", "c"]);

// Generic Constraints

class Cars {
    print() {
        console.log("I am a car");
    }
}

class House {
    print() {
        console.log("I am a house");
    }
}

interface Printable {
    print(): void;
}

function printHousesOrCars<T extends Printable>(arr: T[]): void {
    for (let i = 0; i < arr.length; i++) {
        arr[i].print();
    }
}
