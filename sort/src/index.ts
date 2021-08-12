class Sorter {
    constructor(public colllection: number[]) {}

    sort(): void {
        const { length } = this.colllection;

        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.colllection[j] > this.colllection[j + 1]) {
                    const leftHand = this.colllection[j];
                    this.colllection[j] = this.colllection[j + 1];
                    this.colllection[j + 1] = leftHand;
                }
            }
        }
    }
}

const sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.colllection);
