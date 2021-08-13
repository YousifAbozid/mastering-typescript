"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
var dateStringToDate = function (dateString) {
    var dataParts = dateString.split("/").map(function (value) {
        return parseInt(value);
    });
    return new Date(dataParts[2], dataParts[1] - 1, dataParts[0]);
};
exports.dateStringToDate = dateStringToDate;
