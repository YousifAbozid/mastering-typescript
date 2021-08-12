"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(collection) {
        this.collection = collection;
    }
    Sorter.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                // All of this only works if collection is number[]
                // If collection is an Array of numbers, so this logic:
                // below is a type guard
                if (this.collection instanceof Array) {
                    // collection number[]
                    if (this.collection[j] > this.collection[j + 1]) {
                        var leftHand = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = leftHand;
                    }
                }
                // Only going to work if collection is string
                // If collection is a string, do this logic instead:
                // below another type guard but only works with string, number and boolean
                if (typeof this.collection === "string") {
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.collection);
