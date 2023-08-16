"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineSchema = void 0;
function combineSchema(array1, array2) {
    const tempArray = [...array1, ...array2];
    const combinedArray = [];
    const len = tempArray.length;
    for (let i = 0; i <= len / 2; i++) {
        combinedArray.push(tempArray[i]);
        combinedArray.push(tempArray[len - 1 - i]);
    }
    return combinedArray;
}
exports.combineSchema = combineSchema;
