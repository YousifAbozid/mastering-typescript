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
