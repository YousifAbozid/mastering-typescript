"use strict";
var Sorter = /** @class */ (function () {
    function Sorter(colllection) {
        this.colllection = colllection;
    }
    Sorter.prototype.sort = function () {
        var length = this.colllection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.colllection[j] > this.colllection[j + 1]) {
                    var leftHand = this.colllection[j];
                    this.colllection[j] = this.colllection[j + 1];
                    this.colllection[j + 1] = leftHand;
                }
            }
        }
    };
    return Sorter;
}());
var sorter = new Sorter([10, 3, -5, 0]);
sorter.sort();
console.log(sorter.colllection);
